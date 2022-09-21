import fetch from "node-fetch";
import { BASE_URL, TSH } from "./const";
import { getKeesString, getPulse, solveChallenge } from "./crypto";
import {
  MtChallenge,
  ChallengeImageResponse,
  ChallengeResponse,
  ChallengeSolutionResponse,
  Challenge,
} from "./interfaces";
import { generateHeaders, generateSessionId } from "./utils";

export class MtCaptchaClient {
  private siteUrl: string;
  private sitekey: string;

  constructor(siteUrl: string, siteKey: string) {
    this.siteUrl = siteUrl;
    this.sitekey = siteKey;
  }

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

  /*
   * Function to try solving a captcha challenge, returns a verifiedToken if successful
   * @param {string} challenge - The captcha challenge to solve
   * @param {string} code - The suggested code to solve the captcha
   */
  public async verifyChallenge(
    challenge: Challenge,
    code: string
  ): Promise<
    { verifiedToken: string; isVerified: true } | { isVerified: false }
  > {
    const params = new URLSearchParams({
      ct: challenge.ct,
      sk: this.sitekey,
      st: code,
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
      `${BASE_URL}api/solvechallenge.json?${params}`,
      {
        headers: {
          ...generateHeaders(this.siteUrl),
          Referer: this.siteUrl,
        },
      }
    );

    const { result } =
      (await solutionResponse.json()) as ChallengeSolutionResponse;

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
      sk: this.sitekey,
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
        headers: generateHeaders(this.siteUrl),
      }
    );

    const { result } = (await challengeResponse.json()) as ChallengeResponse;

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
      sk: this.sitekey,
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
      `${BASE_URL}api/getimage.json?${params}`,
      {
        headers: {
          ...generateHeaders(this.siteUrl),
          cookie: `mtv1Pulse=${getPulse(
            this.siteUrl
          )}; mtv1ConfSum={v:01|wdsz:std|thm:highcontrast|lan:sv|chlg:std|clan:1|cstyl:1|afv:0|afot:0|}; jsV=2021-07-21.20.19.18`,
        },
      }
    );

    const { result } = (await imageResponse.json()) as ChallengeImageResponse;

    return result.img.image64;
  }
}
