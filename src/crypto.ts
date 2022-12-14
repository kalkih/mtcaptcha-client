// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { USER_AGENT } from "./const";

const URLSafeBase64CharCode2IntMap = [
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, 0x3e, -0x1, -0x1, 0x0, 0x1, 0x2, 0x3, 0x4,
  0x5, 0x6, 0x7, 0x8, 0x9, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, 0xa, 0xb,
  0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18,
  0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23, -0x1, -0x1,
  -0x1, -0x1, 0x3f, -0x1, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c,
  0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39,
  0x3a, 0x3b, 0x3c, 0x3d, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
  -0x1, -0x1, -0x1, -0x1, -0x1, -0x1, -0x1,
];

const URLSafeBase64Int2CharMap = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "-",
  "_",
];

export const getPulse = (siteUrl: string): string => {
  const _0xdb3be4 = Math.random,
    _0x3cc84c = Math.abs,
    _0x58912e = Math.floor;
  const _0x1b4d13 = {};
  _0x1b4d13.v = [0x0, 0x1];
  _0x1b4d13.r = [
    _0x58912e(_0xdb3be4() * 4095.99),
    _0x58912e(_0xdb3be4() * 4095.99),
  ];
  _0x1b4d13.n = Math.floor(Date.now() / 0x3e8);
  _0x1b4d13.z = _0x58912e(new Date().getTimezoneOffset() / 0xa);
  // _0x1b4d13.a = _0x2f08d5["use" + _0x144cc6("gAr") + "ent"];
  _0x1b4d13.a = USER_AGENT;
  // _0x1b4d13.c = _0x168710[_0x144cc6("ooc") + "kie"];
  _0x1b4d13.c = "";
  // _0x1b4d13.d = _0x168710[_0x144cc6("rerrefer")] + "";
  _0x1b4d13.d = siteUrl;
  // _0x1b4d13.l = _0x2f08d5["la" + _0x144cc6("augn") + "ge"];
  _0x1b4d13.l = "en-US";
  // _0x1b4d13.h = _0x2f08d5.hardwareConcurrency;
  _0x1b4d13.h = 8;
  const _0x4ce041 = [
    0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0,
  ];
  _0x1b4d13.res = _0x4ce041;
  _0x4ce041[0x0] = _0x1b4d13.v[0x0];
  _0x4ce041[0x1] = _0x1b4d13.v[0x1];
  _0x4ce041[0x2] = _0x1b4d13.r[0x0];
  _0x4ce041[0x3] = _0x1b4d13.r[0x1];
  _0x46e318: {
    const _0x41a785 = Math.floor(_0x1b4d13.n / 0x400000) % 0x1000;
    const _0x4e3327 = (_0x1b4d13.n % 0x400000 >> 0xb) % 0x1000;
    const _0x32841e = (_0x1b4d13.n % 0x400000) % 0x800;
    _0x4ce041[0x4] = _0x41a785;
    _0x4ce041[0x5] = _0x4e3327;
    _0x4ce041[0x6] = _0x32841e;
  }
  _0x4ce041[0x7] = _0x3cc84c(Math.floor(_0x1b4d13.z / 0xa) % 0x1000);
  _0x4ce041[0x8] =
    _0x3cc84c(hashStr((_0x1b4d13.a + "").toLowerCase())) % 0x1000;
  let _0x335747 = (_0x1b4d13.d + "")["toLowerCase"]()[
    "match"
  ](`^(?:https?://)?(?:[^@/\
]+@)?(?:www.)?([^:/\
]+)`);
  _0x335747 = _0x335747 == null ? "" : _0x335747[0x1];
  _0x4ce041[0x9] = _0x3cc84c(hashStr(_0x335747.toLowerCase())) % 0x1000;
  _0x4ce041[0xa] =
    _0x3cc84c(hashStr((_0x1b4d13.l + "").toLowerCase())) % 0x1000;
  _0x4ce041[0xb] = _0x1b4d13.h % 0x1000;
  let _0x44bba3 = 0x0;
  for (let _0x38f895 = 0x0; _0x38f895 < 0xc; _0x38f895++) {
    _0x44bba3 = _0x44bba3 * 0x1f + _0x4ce041[_0x38f895];
    _0x44bba3 = _0x44bba3 & _0x44bba3;
  }
  _0x44bba3 = Math.abs(_0x44bba3);
  _0x4ce041[0xc] = _0x44bba3 % 0x1000;
  for (let _0x38f895 = 0x4; _0x38f895 < _0x4ce041.length; _0x38f895++)
    _0x4ce041[_0x38f895] = _0x4ce041[_0x38f895] ^ _0x1b4d13.r[_0x38f895 % 0x2];
  const _0x3b803e = [];
  for (let _0x38f895 = 0x0; _0x38f895 < _0x4ce041.length; _0x38f895++)
    _0x3b803e.push(URLSafeBase4096IntToChar(_0x4ce041[_0x38f895]));
  _0x1b4d13.base4096 = _0x3b803e.join("");

  return _0x1b4d13.base4096;
};

function getKeyHist(fseed: string) {
  const arr = new Array(fseed.length);
  let hsh = URLSafeBase64CharCode2IntMap[fseed.charCodeAt(fseed.length - 0x1)];
  for (let index = 0x0; index < fseed.length; index++) {
    const one = fseed.charCodeAt(index);
    const two = URLSafeBase64CharCode2IntMap[one];
    arr[index] = two ^ hsh;
    hsh = two;
  }
  // const ciderb64int = arr;
  return arr.slice(0x0, arr.length);
}

export function getKeesString(fseed: string) {
  const keyHist = getKeyHist(fseed);
  // if (this.ciderb64int == null) return "0";
  const arr = new Array(keyHist.length);
  for (let index = 0; index < keyHist.length; index++) {
    arr[index] = URLSafeBase64Int2CharMap[keyHist[index]];
  }
  return arr.join("");
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function reverseStr(string) {
  let newString = string.split("");

  const newString2 = (newString = newString.reverse());
  return newString2.join("");
}

function hashStr(string) {
  let hsh = 0;
  let index = 0;
  if (string.length == 0) {
    return hsh;
  }
  for (index = 0; index < string.length; index++) {
    const charCode = string.charCodeAt(index);
    hsh = (hsh << 0x5) - hsh + charCode;
    hsh = hsh & hsh;
  }
  return hsh;
}

function URLSafeBase64CharToInt(char) {
  if (typeof char === "string") {
    char = char.charCodeAt(0x0);
  }
  const int = URLSafeBase64CharCode2IntMap[char % 0x100];
  if (int < 0x0) {
    throw "arg charCode must be within chars [a-zA-Z0-9:;] '" + char + "'";
  }
  return int;
}

function URLSafeBase64IntToChar(i: number) {
  if (0 > i || i > 63) {
    throw new ValueError("arg i must be between 0 .. 63 inclusive");
  }

  return URLSafeBase64Int2CharMap[i % 64];
}

function URLSafeBase4096IntToChar(i: number) {
  if (0 > i || i > 4095) {
    throw new ValueError("arg i must be between 0 .. 4095 inclusive");
  }

  return "" + URLSafeBase64IntToChar(i >> 6) + URLSafeBase64IntToChar(i & 63);
}

function URLSafeBase64Str2IntArray(string: string) {
  const array = [];
  for (let index = 0; index < string.length; index++)
    array.push(URLSafeBase64CharToInt(string.charAt(index)));
  return array;
}

function URLSafeBase64IntArray2String(int_array: number[]) {
  const array = [];
  for (let index = 0; index < int_array.length; index++)
    array.push(URLSafeBase64IntToChar(int_array[index]));
  return array.join("");
}

function hashIntAry(int_array) {
  let hsh = 0;

  let index = 0;
  for (index = 0; index < int_array.length; index++) {
    hsh = (hsh << 0x5) - hsh + int_array[index];
    hsh = hsh & hsh;
  }
  if (hsh < 0) hsh *= -0x1;
  return hsh;
}

export function solveChallenge(fseed: string, fslots: number, fdepth: number) {
  let hsh: number, int_array: number[];

  if (!fseed || fslots < 1) {
    return "0";
  }

  const res = [];
  int_array = URLSafeBase64Str2IntArray(fseed);

  for (let index = 0, _pj_a = fslots; index < _pj_a; index += 1) {
    int_array = foldBase64IntArray(int_array, 31);
    hsh = hashIntAry(foldBase64IntArray(int_array, fdepth));
    res.push(URLSafeBase4096IntToChar(hsh % 4096));
  }

  return res.join("");
}

function foldBase64IntArray(a1: any[], foldCount: number) {
  const a2 = a1.slice().reverse(),
    a3 = a1.slice();
  let offset = 0,
    x = 0,
    y = 0,
    z = 0,
    i = 0;
  for (i = 0; i < foldCount; i++) {
    offset++;
    for (x = 0; x < a1.length; x++) {
      a3[x] =
        (Math.floor(((a3[x] + a2[(x + offset) % a2.length]) * 73) / 8) +
          y +
          z) %
        64;
      z = Math.floor(y / 2);
      y = Math.floor(a3[x] / 2);
    }
  }
  return a3;
}
