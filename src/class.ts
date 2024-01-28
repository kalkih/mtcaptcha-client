import fetch from "node-fetch";
import { BASE_URL, TSH } from "./const";
import { getKeesString, getPulse, solveChallenge } from "./crypto";
import {
  MtChallenge,
  MtChallengeImageResponse,
  MtChallengeResponse,
  MtChallengeSolutionResponse,
  Challenge,
  ChallengeResult,
} from "./types";
import { generateHeaders, generateSessionId } from "./utils";

export class MtCaptchaClient {
  private siteUrl: string;
  private siteKey: string;

  /**
   * Create a new MtCaptchaClient
   * @param {string} siteUrl - The domain of the site where the mtcaptcha you want to solve is located
   * @example "www.mtcaptcha.com"
   * @param {string} siteKey - The site key for the customer/site where the mtcaptcha is located, can be found in the network tab or inspect site & look for "siteKey"
   * @example "MTPublic-tqNCRE0GS"
   */
  constructor(siteUrl: string, siteKey: string) {
    this.siteUrl = siteUrl;
    this.siteKey = siteKey;
  }

  /**
   * Create a new captcha challenge
   * @returns {Promise<Challenge>} A captcha challenge
   */
  public async createChallenge(): Promise<Challenge> {
    const { sessionId, challenge } = await this.getChallenge();

    // timeout here seems to be needed in order to make sure challenge is ready
    await new Promise((r) => setTimeout(r, 1000));

    const image = await this.getImage(sessionId, challenge);

    return {
      sessionId,
      image,
      ...challenge,
    };
  }

  /**
   * Try solving a captcha challenge, returns a verifiedToken if successful
   * @param {string} challenge - The captcha challenge to solve
   * @param {string} solution - The suggested solution to the captcha challenge
   */
  public async verifyChallenge(
    challenge: Challenge,
    solution: string
  ): Promise<ChallengeResult> {
    const params = new URLSearchParams({
      ct: challenge.ct,
      sk: this.siteKey,
      st: solution,
      lf: "0",
      bd: this.siteUrl,
      rt: new Date().getTime().toString(),
      tsh: TSH,
      fa: challenge.hasFoldChlg
        ? solveChallenge(
            challenge.foldChlg.fseed,
            challenge.foldChlg.fslots,
            challenge.foldChlg.fdepth
          )
        : "$",
      qh: "$",
      act: "$",
      ss: challenge.sessionId,
      tl: "10",
      lg: "sv",
      tp: "s",
      kt: getKeesString(challenge.foldChlg.fseed),
      fs: challenge.foldChlg.fseed,
    });

    const solutionResponse = await fetch(
      `${BASE_URL}/api/solvechallenge.json?${params}`,
      {
        headers: {
          ...generateHeaders(this.siteUrl, this.siteKey),
          Referer: this.siteUrl,
        },
      }
    );

    const { result } =
      (await solutionResponse.json()) as MtChallengeSolutionResponse;

    const { isVerified, verifiedToken } = result.verifyResult;

    return isVerified
      ? { verifiedToken: verifiedToken.vt, isVerified }
      : { isVerified: false };
  }

  private async getChallenge(): Promise<{
    sessionId: string;
    challenge: MtChallenge;
  }> {
    const sessionId = generateSessionId();

    const params = new URLSearchParams({
      sk: this.siteKey,
      bd: this.siteUrl,
      rt: new Date().getTime().toString(),
      tsh: TSH,
      act: "$",
      ss: sessionId,
      lf: "0",
      tl: "10",
      lg: "sv",
      tp: "s",
    });

    const challengeResponse = await fetch(
      `${BASE_URL}/api/getchallenge.json?${params}`,
      {
        headers: generateHeaders(this.siteUrl, this.siteKey),
      }
    );

    const { result } = (await challengeResponse.json()) as MtChallengeResponse;

    return {
      sessionId,
      challenge: result.challenge,
    };
  }

  private async getImage(
    sessionId: string,
    mtChallenge: MtChallenge
  ): Promise<string> {
    const params = new URLSearchParams({
      sk: this.siteKey,
      ct: mtChallenge.ct,
      fa: mtChallenge.hasFoldChlg
        ? solveChallenge(
            mtChallenge.foldChlg.fseed,
            mtChallenge.foldChlg.fslots,
            mtChallenge.foldChlg.fdepth
          )
        : "$",
      ss: sessionId,
    });

    const imageResponse = await fetch(
      `${BASE_URL}/api/getimage.json?${params}`,
      {
        headers: {
          ...generateHeaders(this.siteUrl, this.siteKey),
          cookie: `mtv1Pulse=${getPulse(
            this.siteUrl
          )}; mtv1ConfSum={v:01|wdsz:std|thm:highcontrast|lan:sv|chlg:std|clan:1|cstyl:1|afv:0|afot:0|}; jsV=2021-07-21.20.19.18`,
        },
      }
    );

    const { result } = (await imageResponse.json()) as MtChallengeImageResponse;

    return result.img.image64;
  }
}
