# mtcaptcha-client

> Reverse engineered mtcaptcha client to retrieve and verify captcha challenges directly in node or the browser

## Usage

### Install the package

Install the package with npm, yarn or your favorite package manager

```sh
$ npm install --save mtcaptcha-client
```

### Example usage

```ts
import { MtCaptchaClient } from "mtcaptcha-client";

...

// setup the captcha client
const captchaClient = new MtCaptchaClient(
  // The domain of the site where the mtcaptcha you want to solve is located
  "www.example.com",
  // The site key for the customer/site where the mtcaptcha is located
  // Can be found in the network tab or in the source of the page (look for "siteKey").
  "MTPublic-abCDEFGH"
);

// retrieve a captcha challenge
const challenge = await captchaClient.createChallenge();

// verify/solve captcha challenge with provided solution
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
