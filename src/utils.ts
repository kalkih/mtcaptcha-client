import { USER_AGENT } from "./const";

export const generateSessionId = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const code = (Math.random() * 0x10) | 0x0;
    const session = c === "x" ? code : (code & 0x3) | 0x8;
    return session.toString(0x10);
  });
};

export const generateHeaders = (siteUrl: string, siteKey: string) => ({
  "User-Agent": USER_AGENT,
  referer: `${siteUrl}/client/iframe.html?v=2023-03-27.19.50.50&sitekey=${siteKey}&iframeId=mtcaptcha-iframe-1&widgetSize=standard&custom=false&widgetInstance=mtcaptcha&challengeType=standard&theme=highcontrast&lang=sv&action=&autoFadeOuterText=false&host=${encodeURIComponent(
    "https://" + siteUrl
  )}&hostname=${encodeURIComponent(
    siteUrl
  )}&serviceDomain=service.mtcaptcha.com&textLength=10&lowFrictionInvisible=&enableMouseFlow=false`,
  origin: siteUrl,
});
