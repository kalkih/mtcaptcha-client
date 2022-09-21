import { USER_AGENT } from "./const";

export const generateSessionId = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const code = (Math.random() * 0x10) | 0x0;
    const session = c === "x" ? code : (code & 0x3) | 0x8;
    return session.toString(0x10);
  });
};

export const generateHeaders = (siteUrl: string) => ({
  "User-Agent": USER_AGENT,
  referer: `${siteUrl}/client/iframe.html?v=2021-07-21.20.19.18&sitekey=${siteUrl}&iframeId=mtcaptcha-iframe-1&widgetSize=standard&custom=false&widgetInstance=mtcaptcha&challengeType=standard&theme=highcontrast&lang=sv&action=&autoFadeOuterText=false&host=${encodeURIComponent(
    "https://" + siteUrl
  )}&hostname=${encodeURIComponent(
    siteUrl
  )}&serviceDomain=service.mtcaptcha.com&textLength=10&lowFrictionInvisible=&enableMouseFlow=false`,
  origin: siteUrl,
});
