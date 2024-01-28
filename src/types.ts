export interface Challenge extends MtChallenge {
  /**
   * @description The mtCaptcha session id
   */
  sessionId: string;
  /**
   * @description The captcha challenge image in Base64 format
   */
  image: string;
}

export type ChallengeResult =
  | {
      verifiedToken: string;
      isVerified: true;
    }
  | { isVerified: false };

export interface MtChallengeResponse {
  code: number;
  schema: string;
  result: {
    challenge: MtChallenge;
  };
}

export interface MtChallenge {
  ct: string;
  textChlg: {
    textlen: number;
  };
  foldChlg: {
    fseed: string;
    fslots: number;
    fdepth: number;
    preRes: boolean;
  };
  hasFoldChlg: boolean;
}

export interface MtChallengeImageResponse {
  code: number;
  schema: string;
  result: {
    img: {
      image64: string;
    };
  };
}

export interface MtChallengeSolutionResponse {
  code: number;
  schema: string;
  result: {
    verifyResult:
      | MtChallengeSolutionResultSuccess
      | MtChallengeSolutionResultFailed;
  };
}

export interface MtChallengeSolutionResultSuccess {
  isVerified: true;
  verifiedToken: {
    vt: string;
    vtttl: number;
  };
}

export interface MtChallengeSolutionResultFailed {
  isVerified: false;
  verifiedToken: {
    vtttl: -1;
  };
}
