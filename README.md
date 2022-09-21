# mtcaptcha-client

> Reverse engineered mtcaptcha client to retrieve and verify captcha challenges directly in node or the browser

## Usage

### Install the package

Install the package with npm or yarn

```sh
$ npm install --save mtcaptcha-client
```

### Example usage

```ts
import { MtCaptchaClient } from "mtcaptcha-client";

...

// setup the captcha client
const captchaClient = new MtCaptchaClient(
  "example.com", // Url of the mtcaptcha
  "mtCaptchaSiteKey" // The siteKey of the mtcaptcha customer (check network tab or inspect site for this)
);

// retrieve a captcha challenge
const challenge = await captchaClient.createChallenge();

// verify captcha solution
const result = await captchaClient.verifyChallenge(challenge, "abc123");

if (result.isVerified) {
  const { verifiedToken } = result;
  // do something with the verifiedToken
} else {
  // captcha solution was rejected, retry???
}
```

## License

This project is under the MIT license.
