export interface Challenge extends MtChallenge {
  /**
   * The mtCaptcha session id
   */
  sessionId: string;
  /**
   * The captcha challenge image in Base64 format
   */
  image: string;
}

export interface ChallengeResponse {
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

export interface ChallengeImageResponse {
  code: number;
  schema: string;
  result: {
    img: {
      image64: string;
    };
  };
}

export interface ChallengeSolutionResponse {
  code: number;
  schema: string;
  result: {
    verifyResult:
      | ChallengeSolutionResultSuccess
      | ChallengeSolutionResultFailed;
  };
}

export interface ChallengeSolutionResultSuccess {
  isVerified: true;
  verifiedToken: {
    vt: string;
    vtttl: number;
  };
}

export interface ChallengeSolutionResultFailed {
  isVerified: false;
  verifiedToken: {
    vtttl: -1;
  };
}
