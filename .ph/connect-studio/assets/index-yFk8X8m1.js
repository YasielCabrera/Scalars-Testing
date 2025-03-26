var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _DB_NAME, _STORE_NAME, _KEY, _db, _BrowserKeyStorage_instances, useStore_fn, _subtleCrypto, _keyPair, _keyPairStorage, _did, _ConnectCrypto_instances, initCrypto_fn, initialize_fn, parseDid_fn, generateECDSAKeyPair_fn, exportKeyPair_fn, importKeyPair_fn, _sign, _verify, _store, _namespace, _BaseStorage_instances, buildKey_fn, _baseUrl, _store2, _connectId, _eventEmitter, _Renown_instances, updateUser_fn, getCredential_fn;
import { _ as __vitePreload } from "./main.CzEw2R-H.js";
import { aW as getAugmentedNamespace, $ as getDefaultExportFromCjs, ah as connectConfig, ac as logger } from "./app-loader-KTD3Q6e9.js";
import { e as eventsExports, R as RENOWN_URL, g as getEnsInfo } from "./app-Bw1Ba-jV.js";
import { d, c, b, f, a, r, s } from "./app-Bw1Ba-jV.js";
import "react/jsx-runtime";
import "react";
import "@powerhousedao/reactor-browser";
import "react-dom";
import "@powerhousedao/reactor-browser/hooks/useUiNodesContext";
import "@powerhousedao/reactor-browser/hooks/useDriveActionsWithUiNodes";
import "@powerhousedao/reactor-browser/hooks/useDriveContext";
import "@powerhousedao/reactor-browser/uiNodes/constants";
import "@powerhousedao/reactor-browser/hooks/document-state";
var compare_1;
var hasRequiredCompare;
function requireCompare() {
  if (hasRequiredCompare) return compare_1;
  hasRequiredCompare = 1;
  function compare(a2, b2) {
    for (let i = 0; i < a2.byteLength; i++) {
      if (a2[i] < b2[i]) {
        return -1;
      }
      if (a2[i] > b2[i]) {
        return 1;
      }
    }
    if (a2.byteLength > b2.byteLength) {
      return 1;
    }
    if (a2.byteLength < b2.byteLength) {
      return -1;
    }
    return 0;
  }
  compare_1 = compare;
  return compare_1;
}
var concat_1;
var hasRequiredConcat;
function requireConcat() {
  if (hasRequiredConcat) return concat_1;
  hasRequiredConcat = 1;
  function concat2(arrays, length2) {
    if (!length2) {
      length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
    }
    const output = new Uint8Array(length2);
    let offset = 0;
    for (const arr of arrays) {
      output.set(arr, offset);
      offset += arr.length;
    }
    return output;
  }
  concat_1 = concat2;
  return concat_1;
}
var equals_1;
var hasRequiredEquals;
function requireEquals() {
  if (hasRequiredEquals) return equals_1;
  hasRequiredEquals = 1;
  function equals2(a2, b2) {
    if (a2 === b2) {
      return true;
    }
    if (a2.byteLength !== b2.byteLength) {
      return false;
    }
    for (let i = 0; i < a2.byteLength; i++) {
      if (a2[i] !== b2[i]) {
        return false;
      }
    }
    return true;
  }
  equals_1 = equals2;
  return equals_1;
}
function base(ALPHABET, name2) {
  if (ALPHABET.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array) ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i2;
      pbegin++;
    }
    var it2 = size - length2;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i2;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length2;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src$1 = base;
var _brrp__multiformats_scope_baseX = src$1;
const empty = new Uint8Array(0);
const toHex = (d2) => d2.reduce((hex, byte) => hex + byte.toString(16).padStart(2, "0"), "");
const fromHex = (hex) => {
  const hexes = hex.match(/../g);
  return hexes ? new Uint8Array(hexes.map((b2) => parseInt(b2, 16))) : empty;
};
const equals$1 = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
const coerce = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
const isBinary = (o) => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
const fromString$2 = (str) => new TextEncoder().encode(str);
const toString$2 = (b2) => new TextDecoder().decode(b2);
const bytes = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  coerce,
  empty,
  equals: equals$1,
  fromHex,
  fromString: fromString$2,
  isBinary,
  toHex,
  toString: toString$2
}, Symbol.toStringTag, { value: "Module" }));
class Encoder {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes2) {
    if (bytes2 instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes2)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
const or = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from$1 = ({ name: name2, prefix, encode: encode2, decode: decode2 }) => new Codec(name2, prefix, encode2, decode2);
const baseX = ({ prefix, name: name2, alphabet: alphabet2 }) => {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet2, name2);
  return from$1({
    prefix,
    name: name2,
    encode: encode2,
    decode: (text) => coerce(decode2(text))
  });
};
const decode$7 = (string2, alphabet2, bitsPerChar, name2) => {
  const codes = {};
  for (let i = 0; i < alphabet2.length; ++i) {
    codes[alphabet2[i]] = i;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string2[i]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
const encode$5 = (data, alphabet2, bitsPerChar) => {
  const pad = alphabet2[alphabet2.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet2[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet2[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
const rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet: alphabet2 }) => {
  return from$1({
    prefix,
    name: name2,
    encode(input) {
      return encode$5(input, alphabet2, bitsPerChar);
    },
    decode(input) {
      return decode$7(input, alphabet2, bitsPerChar, name2);
    }
  });
};
const identity$2 = from$1({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString$2(buf),
  decode: (str) => fromString$2(str)
});
const identityBase = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity: identity$2
}, Symbol.toStringTag, { value: "Module" }));
const base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
const base2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base2
}, Symbol.toStringTag, { value: "Module" }));
const base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
const base8$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base8
}, Symbol.toStringTag, { value: "Module" }));
const base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
const base10$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base10
}, Symbol.toStringTag, { value: "Module" }));
const base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
const base16$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base16,
  base16upper
}, Symbol.toStringTag, { value: "Module" }));
const base32 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
const base32$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base32,
  base32hex,
  base32hexpad,
  base32hexpadupper,
  base32hexupper,
  base32pad,
  base32padupper,
  base32upper,
  base32z
}, Symbol.toStringTag, { value: "Module" }));
const base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
const base36$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base36,
  base36upper
}, Symbol.toStringTag, { value: "Module" }));
const base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
const base58 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base58btc,
  base58flickr
}, Symbol.toStringTag, { value: "Module" }));
const base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
const base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
const base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
const base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
const base64$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base64,
  base64pad,
  base64url,
  base64urlpad
}, Symbol.toStringTag, { value: "Module" }));
const alphabet = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
const alphabetBytesToChars = alphabet.reduce((p, c2, i) => {
  p[i] = c2;
  return p;
}, []);
const alphabetCharsToBytes = alphabet.reduce((p, c2, i) => {
  p[c2.codePointAt(0)] = i;
  return p;
}, []);
function encode$4(data) {
  return data.reduce((p, c2) => {
    p += alphabetBytesToChars[c2];
    return p;
  }, "");
}
function decode$6(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
const base256emoji = from$1({
  prefix: "🚀",
  name: "base256emoji",
  encode: encode$4,
  decode: decode$6
});
const base256emoji$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  base256emoji
}, Symbol.toStringTag, { value: "Module" }));
var encode_1$1 = encode$3;
var MSB = 128, MSBALL = -128, INT = Math.pow(2, 31);
function encode$3(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode$3.bytes = offset - oldOffset + 1;
  return out;
}
var decode$5 = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b2, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b2 = buf[counter++];
    res += shift < 28 ? (b2 & REST$1) << shift : (b2 & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b2 >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length$1 = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint$2 = {
  encode: encode_1$1,
  decode: decode$5,
  encodingLength: length$1
};
var _brrp_varint = varint$2;
const decode$4 = (data, offset = 0) => {
  const code2 = _brrp_varint.decode(data, offset);
  return [
    code2,
    _brrp_varint.decode.bytes
  ];
};
const encodeTo = (int, target, offset = 0) => {
  _brrp_varint.encode(int, target, offset);
  return target;
};
const encodingLength = (int) => {
  return _brrp_varint.encodingLength(int);
};
const varint$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: decode$4,
  encodeTo,
  encodingLength
}, Symbol.toStringTag, { value: "Module" }));
const create = (code2, digest2) => {
  const size = digest2.byteLength;
  const sizeOffset = encodingLength(code2);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes2 = new Uint8Array(digestOffset + size);
  encodeTo(code2, bytes2, 0);
  encodeTo(size, bytes2, sizeOffset);
  bytes2.set(digest2, digestOffset);
  return new Digest(code2, size, digest2, bytes2);
};
const decode$3 = (multihash) => {
  const bytes2 = coerce(multihash);
  const [code2, sizeOffset] = decode$4(bytes2);
  const [size, digestOffset] = decode$4(bytes2.subarray(sizeOffset));
  const digest2 = bytes2.subarray(sizeOffset + digestOffset);
  if (digest2.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code2, size, digest2, bytes2);
};
const equals = (a2, b2) => {
  if (a2 === b2) {
    return true;
  } else {
    return a2.code === b2.code && a2.size === b2.size && equals$1(a2.bytes, b2.bytes);
  }
};
class Digest {
  constructor(code2, size, digest2, bytes2) {
    this.code = code2;
    this.size = size;
    this.digest = digest2;
    this.bytes = bytes2;
  }
}
const digest$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Digest,
  create,
  decode: decode$3,
  equals
}, Symbol.toStringTag, { value: "Module" }));
const from = ({ name: name2, code: code2, encode: encode2 }) => new Hasher(name2, code2, encode2);
class Hasher {
  constructor(name2, code2, encode2) {
    this.name = name2;
    this.code = code2;
    this.encode = encode2;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
const hasher = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Hasher,
  from
}, Symbol.toStringTag, { value: "Module" }));
const sha = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
const sha256 = from({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
const sha512 = from({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});
const sha2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sha256,
  sha512
}, Symbol.toStringTag, { value: "Module" }));
const code$2 = 0;
const name$2 = "identity";
const encode$2 = coerce;
const digest = (input) => create(code$2, encode$2(input));
const identity = {
  code: code$2,
  name: name$2,
  encode: encode$2,
  digest
};
const identity$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  identity
}, Symbol.toStringTag, { value: "Module" }));
const name$1 = "raw";
const code$1 = 85;
const encode$1 = (node) => coerce(node);
const decode$2 = (data) => coerce(data);
const raw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  code: code$1,
  decode: decode$2,
  encode: encode$1,
  name: name$1
}, Symbol.toStringTag, { value: "Module" }));
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const name = "json";
const code = 512;
const encode = (node) => textEncoder.encode(JSON.stringify(node));
const decode$1 = (data) => JSON.parse(textDecoder.decode(data));
const json = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  code,
  decode: decode$1,
  encode,
  name
}, Symbol.toStringTag, { value: "Module" }));
class CID {
  constructor(version2, code2, multihash, bytes2) {
    this.code = code2;
    this.version = version2;
    this.multihash = multihash;
    this.bytes = bytes2;
    this.byteOffset = bytes2.byteOffset;
    this.byteLength = bytes2.byteLength;
    this.asCID = this;
    this._baseCache = /* @__PURE__ */ new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      default: {
        const { code: code2, multihash } = this;
        if (code2 !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code2, digest: digest2 } = this.multihash;
        const multihash = create(code2, digest2);
        return CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && equals(this.multihash, other.multihash);
  }
  toString(base3) {
    const { bytes: bytes2, version: version2, _baseCache } = this;
    switch (version2) {
      case 0:
        return toStringV0(bytes2, _baseCache, base3 || base58btc.encoder);
      default:
        return toStringV1(bytes2, _baseCache, base3 || base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "CID(" + this.toString() + ")";
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error("Deprecated, use .toString()");
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const { version: version2, code: code2, multihash, bytes: bytes2 } = value;
      return new CID(version2, code2, multihash, bytes2 || encodeCID(version2, code2, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const { version: version2, multihash, code: code2 } = value;
      const digest2 = decode$3(multihash);
      return CID.create(version2, code2, digest2);
    } else {
      return null;
    }
  }
  static create(version2, code2, digest2) {
    if (typeof code2 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    switch (version2) {
      case 0: {
        if (code2 !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
        } else {
          return new CID(version2, code2, digest2, digest2.bytes);
        }
      }
      case 1: {
        const bytes2 = encodeCID(version2, code2, digest2.bytes);
        return new CID(version2, code2, digest2, bytes2);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  static createV0(digest2) {
    return CID.create(0, DAG_PB_CODE, digest2);
  }
  static createV1(code2, digest2) {
    return CID.create(1, code2, digest2);
  }
  static decode(bytes2) {
    const [cid, remainder] = CID.decodeFirst(bytes2);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  static decodeFirst(bytes2) {
    const specs = CID.inspectBytes(bytes2);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes2.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? CID.createV0(digest2) : CID.createV1(specs.codec, digest2);
    return [
      cid,
      bytes2.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length2] = decode$4(initialBytes.subarray(offset));
      offset += length2;
      return i;
    };
    let version2 = next();
    let codec = DAG_PB_CODE;
    if (version2 === 18) {
      version2 = 0;
      offset = 0;
    } else if (version2 === 1) {
      codec = next();
    }
    if (version2 !== 0 && version2 !== 1) {
      throw new RangeError(`Invalid CID version ${version2}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version: version2,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base3) {
    const [prefix, bytes2] = parseCIDtoBytes(source, base3);
    const cid = CID.decode(bytes2);
    cid._baseCache.set(prefix, source);
    return cid;
  }
}
const parseCIDtoBytes = (source, base3) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(source)
      ];
    }
    case base32.prefix: {
      const decoder = base3 || base32;
      return [
        base32.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base3 == null) {
        throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
      }
      return [
        source[0],
        base3.decode(source)
      ];
    }
  }
};
const toStringV0 = (bytes2, cache, base3) => {
  const { prefix } = base3;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes2).slice(1);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
const toStringV1 = (bytes2, cache, base3) => {
  const { prefix } = base3;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes2);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version2, code2, multihash) => {
  const codeOffset = encodingLength(version2);
  const hashOffset = codeOffset + encodingLength(code2);
  const bytes2 = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version2, bytes2, 0);
  encodeTo(code2, bytes2, codeOffset);
  bytes2.set(multihash, hashOffset);
  return bytes2;
};
const cidSymbol = Symbol.for("@ipld/js-cid/CID");
const readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
const hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
const version = "0.0.0-dev";
const deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
const bases = {
  ...identityBase,
  ...base2$1,
  ...base8$1,
  ...base10$1,
  ...base16$1,
  ...base32$1,
  ...base36$1,
  ...base58,
  ...base64$1,
  ...base256emoji$1
};
const hashes = {
  ...sha2,
  ...identity$1
};
const codecs = {
  raw,
  json
};
const basics = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CID,
  bases,
  bytes,
  codecs,
  digest: digest$1,
  hasher,
  hashes,
  varint: varint$1
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(basics);
var bases_1;
var hasRequiredBases;
function requireBases() {
  if (hasRequiredBases) return bases_1;
  hasRequiredBases = 1;
  const { bases: bases2 } = require$$0;
  function createCodec2(name2, prefix, encode2, decode2) {
    return {
      name: name2,
      prefix,
      encoder: {
        name: name2,
        prefix,
        encode: encode2
      },
      decoder: {
        decode: decode2
      }
    };
  }
  const string2 = createCodec2("utf8", "u", (buf) => {
    const decoder = new TextDecoder("utf8");
    return "u" + decoder.decode(buf);
  }, (str) => {
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
  });
  const ascii2 = createCodec2("ascii", "a", (buf) => {
    let string3 = "a";
    for (let i = 0; i < buf.length; i++) {
      string3 += String.fromCharCode(buf[i]);
    }
    return string3;
  }, (str) => {
    str = str.substring(1);
    const buf = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
      buf[i] = str.charCodeAt(i);
    }
    return buf;
  });
  const BASES2 = {
    "utf8": string2,
    "utf-8": string2,
    "hex": bases2.base16,
    "latin1": ascii2,
    "ascii": ascii2,
    "binary": ascii2,
    ...bases2
  };
  bases_1 = BASES2;
  return bases_1;
}
var fromString_1;
var hasRequiredFromString;
function requireFromString() {
  if (hasRequiredFromString) return fromString_1;
  hasRequiredFromString = 1;
  const bases2 = requireBases();
  function fromString2(string2, encoding = "utf8") {
    const base3 = bases2[encoding];
    if (!base3) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    return base3.decoder.decode(`${base3.prefix}${string2}`);
  }
  fromString_1 = fromString2;
  return fromString_1;
}
var toString_1;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString_1;
  hasRequiredToString = 1;
  const bases2 = requireBases();
  function toString2(array, encoding = "utf8") {
    const base3 = bases2[encoding];
    if (!base3) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    return base3.encoder.encode(array).substring(1);
  }
  toString_1 = toString2;
  return toString_1;
}
var xor_1;
var hasRequiredXor;
function requireXor() {
  if (hasRequiredXor) return xor_1;
  hasRequiredXor = 1;
  function xor(a2, b2) {
    if (a2.length !== b2.length) {
      throw new Error("Inputs should have the same length");
    }
    const result = new Uint8Array(a2.length);
    for (let i = 0; i < a2.length; i++) {
      result[i] = a2[i] ^ b2[i];
    }
    return result;
  }
  xor_1 = xor;
  return xor_1;
}
var uint8arrays;
var hasRequiredUint8arrays;
function requireUint8arrays() {
  if (hasRequiredUint8arrays) return uint8arrays;
  hasRequiredUint8arrays = 1;
  const compare = requireCompare();
  const concat2 = requireConcat();
  const equals2 = requireEquals();
  const fromString2 = requireFromString();
  const toString2 = requireToString();
  const xor = requireXor();
  uint8arrays = {
    compare,
    concat: concat2,
    equals: equals2,
    fromString: fromString2,
    toString: toString2,
    xor
  };
  return uint8arrays;
}
var uint8arraysExports = requireUint8arrays();
var encode_1;
var hasRequiredEncode;
function requireEncode() {
  if (hasRequiredEncode) return encode_1;
  hasRequiredEncode = 1;
  encode_1 = encode2;
  var MSB2 = 128, MSBALL2 = -128, INT2 = Math.pow(2, 31);
  function encode2(num, out, offset) {
    if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
      encode2.bytes = 0;
      throw new RangeError("Could not encode varint");
    }
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT2) {
      out[offset++] = num & 255 | MSB2;
      num /= 128;
    }
    while (num & MSBALL2) {
      out[offset++] = num & 255 | MSB2;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode2.bytes = offset - oldOffset + 1;
    return out;
  }
  return encode_1;
}
var decode;
var hasRequiredDecode;
function requireDecode() {
  if (hasRequiredDecode) return decode;
  hasRequiredDecode = 1;
  decode = read2;
  var MSB2 = 128, REST = 127;
  function read2(buf, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b2, l = buf.length;
    do {
      if (counter >= l || shift > 49) {
        read2.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b2 = buf[counter++];
      res += shift < 28 ? (b2 & REST) << shift : (b2 & REST) * Math.pow(2, shift);
      shift += 7;
    } while (b2 >= MSB2);
    read2.bytes = counter - offset;
    return res;
  }
  return decode;
}
var length;
var hasRequiredLength;
function requireLength() {
  if (hasRequiredLength) return length;
  hasRequiredLength = 1;
  var N12 = Math.pow(2, 7);
  var N22 = Math.pow(2, 14);
  var N32 = Math.pow(2, 21);
  var N42 = Math.pow(2, 28);
  var N52 = Math.pow(2, 35);
  var N62 = Math.pow(2, 42);
  var N72 = Math.pow(2, 49);
  var N82 = Math.pow(2, 56);
  var N92 = Math.pow(2, 63);
  length = function(value) {
    return value < N12 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N42 ? 4 : value < N52 ? 5 : value < N62 ? 6 : value < N72 ? 7 : value < N82 ? 8 : value < N92 ? 9 : 10;
  };
  return length;
}
var varint;
var hasRequiredVarint;
function requireVarint() {
  if (hasRequiredVarint) return varint;
  hasRequiredVarint = 1;
  varint = {
    encode: requireEncode(),
    decode: requireDecode(),
    encodingLength: requireLength()
  };
  return varint;
}
function asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return asUint8Array(globalThis.Buffer.allocUnsafe(size));
  }
  return new Uint8Array(size);
}
function concat(arrays, length2) {
  if (!length2) {
    length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length2);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return asUint8Array(output);
}
const concat$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  concat
}, Symbol.toStringTag, { value: "Module" }));
const require$$1$1 = /* @__PURE__ */ getAugmentedNamespace(concat$1);
function createCodec(name2, prefix, encode2, decode2) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode2
    },
    decoder: { decode: decode2 }
  };
}
const string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i = 0; i < buf.length; i++) {
    string2 += String.fromCharCode(buf[i]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
function toString(array, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}
const toString$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toString
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(toString$1);
function fromString(string2, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return asUint8Array(globalThis.Buffer.from(string2, "utf-8"));
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
const fromString$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromString
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(fromString$1);
var util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util;
  hasRequiredUtil = 1;
  const varint2 = requireVarint();
  const { toString: uint8ArrayToString } = require$$1;
  const { fromString: uint8ArrayFromString } = require$$2;
  util = {
    numberToUint8Array,
    uint8ArrayToNumber,
    varintUint8ArrayEncode,
    varintEncode
  };
  function uint8ArrayToNumber(buf) {
    return parseInt(uint8ArrayToString(buf, "base16"), 16);
  }
  function numberToUint8Array(num) {
    let hexString = num.toString(16);
    if (hexString.length % 2 === 1) {
      hexString = "0" + hexString;
    }
    return uint8ArrayFromString(hexString, "base16");
  }
  function varintUint8ArrayEncode(input) {
    return Uint8Array.from(varint2.encode(uint8ArrayToNumber(input)));
  }
  function varintEncode(num) {
    return Uint8Array.from(varint2.encode(num));
  }
  return util;
}
var generatedTable;
var hasRequiredGeneratedTable;
function requireGeneratedTable() {
  if (hasRequiredGeneratedTable) return generatedTable;
  hasRequiredGeneratedTable = 1;
  const baseTable = Object.freeze({
    "identity": 0,
    "cidv1": 1,
    "cidv2": 2,
    "cidv3": 3,
    "ip4": 4,
    "tcp": 6,
    "sha1": 17,
    "sha2-256": 18,
    "sha2-512": 19,
    "sha3-512": 20,
    "sha3-384": 21,
    "sha3-256": 22,
    "sha3-224": 23,
    "shake-128": 24,
    "shake-256": 25,
    "keccak-224": 26,
    "keccak-256": 27,
    "keccak-384": 28,
    "keccak-512": 29,
    "blake3": 30,
    "dccp": 33,
    "murmur3-128": 34,
    "murmur3-32": 35,
    "ip6": 41,
    "ip6zone": 42,
    "path": 47,
    "multicodec": 48,
    "multihash": 49,
    "multiaddr": 50,
    "multibase": 51,
    "dns": 53,
    "dns4": 54,
    "dns6": 55,
    "dnsaddr": 56,
    "protobuf": 80,
    "cbor": 81,
    "raw": 85,
    "dbl-sha2-256": 86,
    "rlp": 96,
    "bencode": 99,
    "dag-pb": 112,
    "dag-cbor": 113,
    "libp2p-key": 114,
    "git-raw": 120,
    "torrent-info": 123,
    "torrent-file": 124,
    "leofcoin-block": 129,
    "leofcoin-tx": 130,
    "leofcoin-pr": 131,
    "sctp": 132,
    "dag-jose": 133,
    "dag-cose": 134,
    "eth-block": 144,
    "eth-block-list": 145,
    "eth-tx-trie": 146,
    "eth-tx": 147,
    "eth-tx-receipt-trie": 148,
    "eth-tx-receipt": 149,
    "eth-state-trie": 150,
    "eth-account-snapshot": 151,
    "eth-storage-trie": 152,
    "eth-receipt-log-trie": 153,
    "eth-reciept-log": 154,
    "bitcoin-block": 176,
    "bitcoin-tx": 177,
    "bitcoin-witness-commitment": 178,
    "zcash-block": 192,
    "zcash-tx": 193,
    "caip-50": 202,
    "streamid": 206,
    "stellar-block": 208,
    "stellar-tx": 209,
    "md4": 212,
    "md5": 213,
    "bmt": 214,
    "decred-block": 224,
    "decred-tx": 225,
    "ipld-ns": 226,
    "ipfs-ns": 227,
    "swarm-ns": 228,
    "ipns-ns": 229,
    "zeronet": 230,
    "secp256k1-pub": 231,
    "bls12_381-g1-pub": 234,
    "bls12_381-g2-pub": 235,
    "x25519-pub": 236,
    "ed25519-pub": 237,
    "bls12_381-g1g2-pub": 238,
    "dash-block": 240,
    "dash-tx": 241,
    "swarm-manifest": 250,
    "swarm-feed": 251,
    "udp": 273,
    "p2p-webrtc-star": 275,
    "p2p-webrtc-direct": 276,
    "p2p-stardust": 277,
    "p2p-circuit": 290,
    "dag-json": 297,
    "udt": 301,
    "utp": 302,
    "unix": 400,
    "thread": 406,
    "p2p": 421,
    "ipfs": 421,
    "https": 443,
    "onion": 444,
    "onion3": 445,
    "garlic64": 446,
    "garlic32": 447,
    "tls": 448,
    "noise": 454,
    "quic": 460,
    "ws": 477,
    "wss": 478,
    "p2p-websocket-star": 479,
    "http": 480,
    "swhid-1-snp": 496,
    "json": 512,
    "messagepack": 513,
    "libp2p-peer-record": 769,
    "libp2p-relay-rsvp": 770,
    "car-index-sorted": 1024,
    "sha2-256-trunc254-padded": 4114,
    "ripemd-128": 4178,
    "ripemd-160": 4179,
    "ripemd-256": 4180,
    "ripemd-320": 4181,
    "x11": 4352,
    "p256-pub": 4608,
    "p384-pub": 4609,
    "p521-pub": 4610,
    "ed448-pub": 4611,
    "x448-pub": 4612,
    "ed25519-priv": 4864,
    "secp256k1-priv": 4865,
    "x25519-priv": 4866,
    "kangarootwelve": 7425,
    "sm3-256": 21325,
    "blake2b-8": 45569,
    "blake2b-16": 45570,
    "blake2b-24": 45571,
    "blake2b-32": 45572,
    "blake2b-40": 45573,
    "blake2b-48": 45574,
    "blake2b-56": 45575,
    "blake2b-64": 45576,
    "blake2b-72": 45577,
    "blake2b-80": 45578,
    "blake2b-88": 45579,
    "blake2b-96": 45580,
    "blake2b-104": 45581,
    "blake2b-112": 45582,
    "blake2b-120": 45583,
    "blake2b-128": 45584,
    "blake2b-136": 45585,
    "blake2b-144": 45586,
    "blake2b-152": 45587,
    "blake2b-160": 45588,
    "blake2b-168": 45589,
    "blake2b-176": 45590,
    "blake2b-184": 45591,
    "blake2b-192": 45592,
    "blake2b-200": 45593,
    "blake2b-208": 45594,
    "blake2b-216": 45595,
    "blake2b-224": 45596,
    "blake2b-232": 45597,
    "blake2b-240": 45598,
    "blake2b-248": 45599,
    "blake2b-256": 45600,
    "blake2b-264": 45601,
    "blake2b-272": 45602,
    "blake2b-280": 45603,
    "blake2b-288": 45604,
    "blake2b-296": 45605,
    "blake2b-304": 45606,
    "blake2b-312": 45607,
    "blake2b-320": 45608,
    "blake2b-328": 45609,
    "blake2b-336": 45610,
    "blake2b-344": 45611,
    "blake2b-352": 45612,
    "blake2b-360": 45613,
    "blake2b-368": 45614,
    "blake2b-376": 45615,
    "blake2b-384": 45616,
    "blake2b-392": 45617,
    "blake2b-400": 45618,
    "blake2b-408": 45619,
    "blake2b-416": 45620,
    "blake2b-424": 45621,
    "blake2b-432": 45622,
    "blake2b-440": 45623,
    "blake2b-448": 45624,
    "blake2b-456": 45625,
    "blake2b-464": 45626,
    "blake2b-472": 45627,
    "blake2b-480": 45628,
    "blake2b-488": 45629,
    "blake2b-496": 45630,
    "blake2b-504": 45631,
    "blake2b-512": 45632,
    "blake2s-8": 45633,
    "blake2s-16": 45634,
    "blake2s-24": 45635,
    "blake2s-32": 45636,
    "blake2s-40": 45637,
    "blake2s-48": 45638,
    "blake2s-56": 45639,
    "blake2s-64": 45640,
    "blake2s-72": 45641,
    "blake2s-80": 45642,
    "blake2s-88": 45643,
    "blake2s-96": 45644,
    "blake2s-104": 45645,
    "blake2s-112": 45646,
    "blake2s-120": 45647,
    "blake2s-128": 45648,
    "blake2s-136": 45649,
    "blake2s-144": 45650,
    "blake2s-152": 45651,
    "blake2s-160": 45652,
    "blake2s-168": 45653,
    "blake2s-176": 45654,
    "blake2s-184": 45655,
    "blake2s-192": 45656,
    "blake2s-200": 45657,
    "blake2s-208": 45658,
    "blake2s-216": 45659,
    "blake2s-224": 45660,
    "blake2s-232": 45661,
    "blake2s-240": 45662,
    "blake2s-248": 45663,
    "blake2s-256": 45664,
    "skein256-8": 45825,
    "skein256-16": 45826,
    "skein256-24": 45827,
    "skein256-32": 45828,
    "skein256-40": 45829,
    "skein256-48": 45830,
    "skein256-56": 45831,
    "skein256-64": 45832,
    "skein256-72": 45833,
    "skein256-80": 45834,
    "skein256-88": 45835,
    "skein256-96": 45836,
    "skein256-104": 45837,
    "skein256-112": 45838,
    "skein256-120": 45839,
    "skein256-128": 45840,
    "skein256-136": 45841,
    "skein256-144": 45842,
    "skein256-152": 45843,
    "skein256-160": 45844,
    "skein256-168": 45845,
    "skein256-176": 45846,
    "skein256-184": 45847,
    "skein256-192": 45848,
    "skein256-200": 45849,
    "skein256-208": 45850,
    "skein256-216": 45851,
    "skein256-224": 45852,
    "skein256-232": 45853,
    "skein256-240": 45854,
    "skein256-248": 45855,
    "skein256-256": 45856,
    "skein512-8": 45857,
    "skein512-16": 45858,
    "skein512-24": 45859,
    "skein512-32": 45860,
    "skein512-40": 45861,
    "skein512-48": 45862,
    "skein512-56": 45863,
    "skein512-64": 45864,
    "skein512-72": 45865,
    "skein512-80": 45866,
    "skein512-88": 45867,
    "skein512-96": 45868,
    "skein512-104": 45869,
    "skein512-112": 45870,
    "skein512-120": 45871,
    "skein512-128": 45872,
    "skein512-136": 45873,
    "skein512-144": 45874,
    "skein512-152": 45875,
    "skein512-160": 45876,
    "skein512-168": 45877,
    "skein512-176": 45878,
    "skein512-184": 45879,
    "skein512-192": 45880,
    "skein512-200": 45881,
    "skein512-208": 45882,
    "skein512-216": 45883,
    "skein512-224": 45884,
    "skein512-232": 45885,
    "skein512-240": 45886,
    "skein512-248": 45887,
    "skein512-256": 45888,
    "skein512-264": 45889,
    "skein512-272": 45890,
    "skein512-280": 45891,
    "skein512-288": 45892,
    "skein512-296": 45893,
    "skein512-304": 45894,
    "skein512-312": 45895,
    "skein512-320": 45896,
    "skein512-328": 45897,
    "skein512-336": 45898,
    "skein512-344": 45899,
    "skein512-352": 45900,
    "skein512-360": 45901,
    "skein512-368": 45902,
    "skein512-376": 45903,
    "skein512-384": 45904,
    "skein512-392": 45905,
    "skein512-400": 45906,
    "skein512-408": 45907,
    "skein512-416": 45908,
    "skein512-424": 45909,
    "skein512-432": 45910,
    "skein512-440": 45911,
    "skein512-448": 45912,
    "skein512-456": 45913,
    "skein512-464": 45914,
    "skein512-472": 45915,
    "skein512-480": 45916,
    "skein512-488": 45917,
    "skein512-496": 45918,
    "skein512-504": 45919,
    "skein512-512": 45920,
    "skein1024-8": 45921,
    "skein1024-16": 45922,
    "skein1024-24": 45923,
    "skein1024-32": 45924,
    "skein1024-40": 45925,
    "skein1024-48": 45926,
    "skein1024-56": 45927,
    "skein1024-64": 45928,
    "skein1024-72": 45929,
    "skein1024-80": 45930,
    "skein1024-88": 45931,
    "skein1024-96": 45932,
    "skein1024-104": 45933,
    "skein1024-112": 45934,
    "skein1024-120": 45935,
    "skein1024-128": 45936,
    "skein1024-136": 45937,
    "skein1024-144": 45938,
    "skein1024-152": 45939,
    "skein1024-160": 45940,
    "skein1024-168": 45941,
    "skein1024-176": 45942,
    "skein1024-184": 45943,
    "skein1024-192": 45944,
    "skein1024-200": 45945,
    "skein1024-208": 45946,
    "skein1024-216": 45947,
    "skein1024-224": 45948,
    "skein1024-232": 45949,
    "skein1024-240": 45950,
    "skein1024-248": 45951,
    "skein1024-256": 45952,
    "skein1024-264": 45953,
    "skein1024-272": 45954,
    "skein1024-280": 45955,
    "skein1024-288": 45956,
    "skein1024-296": 45957,
    "skein1024-304": 45958,
    "skein1024-312": 45959,
    "skein1024-320": 45960,
    "skein1024-328": 45961,
    "skein1024-336": 45962,
    "skein1024-344": 45963,
    "skein1024-352": 45964,
    "skein1024-360": 45965,
    "skein1024-368": 45966,
    "skein1024-376": 45967,
    "skein1024-384": 45968,
    "skein1024-392": 45969,
    "skein1024-400": 45970,
    "skein1024-408": 45971,
    "skein1024-416": 45972,
    "skein1024-424": 45973,
    "skein1024-432": 45974,
    "skein1024-440": 45975,
    "skein1024-448": 45976,
    "skein1024-456": 45977,
    "skein1024-464": 45978,
    "skein1024-472": 45979,
    "skein1024-480": 45980,
    "skein1024-488": 45981,
    "skein1024-496": 45982,
    "skein1024-504": 45983,
    "skein1024-512": 45984,
    "skein1024-520": 45985,
    "skein1024-528": 45986,
    "skein1024-536": 45987,
    "skein1024-544": 45988,
    "skein1024-552": 45989,
    "skein1024-560": 45990,
    "skein1024-568": 45991,
    "skein1024-576": 45992,
    "skein1024-584": 45993,
    "skein1024-592": 45994,
    "skein1024-600": 45995,
    "skein1024-608": 45996,
    "skein1024-616": 45997,
    "skein1024-624": 45998,
    "skein1024-632": 45999,
    "skein1024-640": 46e3,
    "skein1024-648": 46001,
    "skein1024-656": 46002,
    "skein1024-664": 46003,
    "skein1024-672": 46004,
    "skein1024-680": 46005,
    "skein1024-688": 46006,
    "skein1024-696": 46007,
    "skein1024-704": 46008,
    "skein1024-712": 46009,
    "skein1024-720": 46010,
    "skein1024-728": 46011,
    "skein1024-736": 46012,
    "skein1024-744": 46013,
    "skein1024-752": 46014,
    "skein1024-760": 46015,
    "skein1024-768": 46016,
    "skein1024-776": 46017,
    "skein1024-784": 46018,
    "skein1024-792": 46019,
    "skein1024-800": 46020,
    "skein1024-808": 46021,
    "skein1024-816": 46022,
    "skein1024-824": 46023,
    "skein1024-832": 46024,
    "skein1024-840": 46025,
    "skein1024-848": 46026,
    "skein1024-856": 46027,
    "skein1024-864": 46028,
    "skein1024-872": 46029,
    "skein1024-880": 46030,
    "skein1024-888": 46031,
    "skein1024-896": 46032,
    "skein1024-904": 46033,
    "skein1024-912": 46034,
    "skein1024-920": 46035,
    "skein1024-928": 46036,
    "skein1024-936": 46037,
    "skein1024-944": 46038,
    "skein1024-952": 46039,
    "skein1024-960": 46040,
    "skein1024-968": 46041,
    "skein1024-976": 46042,
    "skein1024-984": 46043,
    "skein1024-992": 46044,
    "skein1024-1000": 46045,
    "skein1024-1008": 46046,
    "skein1024-1016": 46047,
    "skein1024-1024": 46048,
    "poseidon-bls12_381-a2-fc1": 46081,
    "poseidon-bls12_381-a2-fc1-sc": 46082,
    "zeroxcert-imprint-256": 52753,
    "fil-commitment-unsealed": 61697,
    "fil-commitment-sealed": 61698,
    "holochain-adr-v0": 8417572,
    "holochain-adr-v1": 8483108,
    "holochain-key-v0": 9728292,
    "holochain-key-v1": 9793828,
    "holochain-sig-v0": 10645796,
    "holochain-sig-v1": 10711332,
    "skynet-ns": 11639056,
    "arweave-ns": 11704592
  });
  generatedTable = { baseTable };
  return generatedTable;
}
var maps;
var hasRequiredMaps;
function requireMaps() {
  if (hasRequiredMaps) return maps;
  hasRequiredMaps = 1;
  const { baseTable } = requireGeneratedTable();
  const varintEncode = requireUtil().varintEncode;
  const nameToVarint = (
    /** @type {NameUint8ArrayMap} */
    {}
  );
  const constantToCode = (
    /** @type {ConstantCodeMap} */
    {}
  );
  const codeToName = (
    /** @type {CodeNameMap} */
    {}
  );
  for (const name2 in baseTable) {
    const codecName = (
      /** @type {CodecName} */
      name2
    );
    const code2 = baseTable[codecName];
    nameToVarint[codecName] = varintEncode(code2);
    const constant = (
      /** @type {CodecConstant} */
      codecName.toUpperCase().replace(/-/g, "_")
    );
    constantToCode[constant] = code2;
    if (!codeToName[code2]) {
      codeToName[code2] = codecName;
    }
  }
  Object.freeze(nameToVarint);
  Object.freeze(constantToCode);
  Object.freeze(codeToName);
  const nameToCode = Object.freeze(baseTable);
  maps = {
    nameToVarint,
    constantToCode,
    nameToCode,
    codeToName
  };
  return maps;
}
var src;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  const varint2 = requireVarint();
  const { concat: uint8ArrayConcat } = require$$1$1;
  const util2 = requireUtil();
  const { nameToVarint, constantToCode, nameToCode, codeToName } = requireMaps();
  function addPrefix(multicodecStrOrCode, data) {
    let prefix;
    if (multicodecStrOrCode instanceof Uint8Array) {
      prefix = util2.varintUint8ArrayEncode(multicodecStrOrCode);
    } else {
      if (nameToVarint[multicodecStrOrCode]) {
        prefix = nameToVarint[multicodecStrOrCode];
      } else {
        throw new Error("multicodec not recognized");
      }
    }
    return uint8ArrayConcat([prefix, data], prefix.length + data.length);
  }
  function rmPrefix(data) {
    varint2.decode(
      /** @type {Buffer} */
      data
    );
    return data.slice(varint2.decode.bytes);
  }
  function getNameFromData(prefixedData) {
    const code2 = (
      /** @type {CodecCode} */
      varint2.decode(
        /** @type {Buffer} */
        prefixedData
      )
    );
    const name2 = codeToName[code2];
    if (name2 === void 0) {
      throw new Error(`Code "${code2}" not found`);
    }
    return name2;
  }
  function getNameFromCode(codec) {
    return codeToName[codec];
  }
  function getCodeFromName(name2) {
    const code2 = nameToCode[name2];
    if (code2 === void 0) {
      throw new Error(`Codec "${name2}" not found`);
    }
    return code2;
  }
  function getCodeFromData(prefixedData) {
    return (
      /** @type {CodecCode} */
      varint2.decode(
        /** @type {Buffer} */
        prefixedData
      )
    );
  }
  function getVarintFromName(name2) {
    const code2 = nameToVarint[name2];
    if (code2 === void 0) {
      throw new Error(`Codec "${name2}" not found`);
    }
    return code2;
  }
  function getVarintFromCode(code2) {
    return util2.varintEncode(code2);
  }
  function getCodec(prefixedData) {
    return getNameFromData(prefixedData);
  }
  function getName(codec) {
    return getNameFromCode(codec);
  }
  function getNumber(name2) {
    return getCodeFromName(name2);
  }
  function getCode(prefixedData) {
    return getCodeFromData(prefixedData);
  }
  function getCodeVarint(name2) {
    return getVarintFromName(name2);
  }
  function getVarint(code2) {
    return Array.from(getVarintFromCode(code2));
  }
  src = {
    addPrefix,
    rmPrefix,
    getNameFromData,
    getNameFromCode,
    getCodeFromName,
    getCodeFromData,
    getVarintFromName,
    getVarintFromCode,
    // Deprecated
    getCodec,
    getName,
    getNumber,
    getCode,
    getCodeVarint,
    getVarint,
    // Make the constants top-level constants
    ...constantToCode,
    // Export the maps
    nameToVarint,
    nameToCode,
    codeToName
  };
  return src;
}
var srcExports = requireSrc();
const multicodec = /* @__PURE__ */ getDefaultExportFromCjs(srcExports);
function ECPointCompress(x, y) {
  const out = new Uint8Array(x.length + 1);
  out[0] = 2 + (y[y.length - 1] & 1);
  out.set(x, 1);
  return out;
}
function compressedKeyInHexfromRaw(publicKeyHex) {
  const xHex = publicKeyHex.slice(0, publicKeyHex.length / 2);
  const yHex = publicKeyHex.slice(publicKeyHex.length / 2, publicKeyHex.length);
  const xOctet = uint8arraysExports.fromString(xHex, "base16");
  const yOctet = uint8arraysExports.fromString(yHex, "base16");
  const compressedPoint = ECPointCompress(xOctet, yOctet);
  const compressedPointHex = uint8arraysExports.toString(compressedPoint, "base16");
  return compressedPointHex;
}
function rawKeyInHexfromUncompressed(publicKeyHex) {
  return publicKeyHex.slice(2);
}
function encodeDIDfromHexString(multicodecName, publicKeyHex) {
  const publicKey = uint8arraysExports.fromString(publicKeyHex, "base16");
  const didKey = encodeDIDfromBytes(multicodecName, publicKey);
  return didKey;
}
function encodeDIDfromBytes(multicodecName, publicKey) {
  const publicKeywPrefix = multicodec.addPrefix(multicodecName, publicKey);
  const bufAsString = base58btc.encode(publicKeywPrefix);
  return `did:key:${bufAsString}`;
}
const _BrowserKeyStorage = class _BrowserKeyStorage {
  constructor() {
    __privateAdd(this, _BrowserKeyStorage_instances);
    __privateAdd(this, _db);
    __privateSet(this, _db, new Promise((resolve, reject) => {
      const req = indexedDB.open(__privateGet(_BrowserKeyStorage, _DB_NAME), 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore(__privateGet(_BrowserKeyStorage, _STORE_NAME));
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    }));
  }
  async saveKeyPair(keyPair) {
    const store2 = await __privateMethod(this, _BrowserKeyStorage_instances, useStore_fn).call(this);
    const request = store2.put(keyPair, __privateGet(_BrowserKeyStorage, _KEY));
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = () => {
        reject(new Error("Failed to save key pair"));
      };
    });
  }
  async loadKeyPair() {
    const store2 = await __privateMethod(this, _BrowserKeyStorage_instances, useStore_fn).call(this, "readonly");
    const request = store2.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const keyPair = request.result.length ? request.result[0] : void 0;
        resolve(keyPair);
      };
      request.onerror = () => {
        reject(new Error("Failed to load key pair"));
      };
    });
  }
};
_DB_NAME = new WeakMap();
_STORE_NAME = new WeakMap();
_KEY = new WeakMap();
_db = new WeakMap();
_BrowserKeyStorage_instances = new WeakSet();
useStore_fn = async function(mode = "readwrite") {
  const database = await __privateGet(this, _db);
  const transaction = database.transaction(
    __privateGet(_BrowserKeyStorage, _STORE_NAME),
    mode
  );
  const store2 = transaction.objectStore(__privateGet(_BrowserKeyStorage, _STORE_NAME));
  return store2;
};
__privateAdd(_BrowserKeyStorage, _DB_NAME, "browserKeyDB");
__privateAdd(_BrowserKeyStorage, _STORE_NAME, "keyPairs");
__privateAdd(_BrowserKeyStorage, _KEY, "keyPair");
let BrowserKeyStorage = _BrowserKeyStorage;
function ab2hex(ab) {
  return Array.prototype.map.call(
    new Uint8Array(ab),
    (x) => ("00" + x.toString(16)).slice(-2)
  ).join("");
}
const _ConnectCrypto = class _ConnectCrypto {
  constructor(keyPairStorage) {
    __privateAdd(this, _ConnectCrypto_instances);
    __privateAdd(this, _subtleCrypto);
    __privateAdd(this, _keyPair);
    __privateAdd(this, _keyPairStorage);
    __privateAdd(this, _did);
    __privateAdd(this, _sign, async (...args) => {
      return (await __privateGet(this, _subtleCrypto)).sign(...args);
    });
    __privateAdd(this, _verify, async (...args) => {
      return (await __privateGet(this, _subtleCrypto)).verify(...args);
    });
    __privateSet(this, _keyPairStorage, keyPairStorage);
    __privateSet(this, _subtleCrypto, __privateMethod(this, _ConnectCrypto_instances, initCrypto_fn).call(this));
    __privateSet(this, _did, __privateMethod(this, _ConnectCrypto_instances, initialize_fn).call(this));
  }
  did() {
    return __privateGet(this, _did);
  }
  async regenerateDid() {
    __privateSet(this, _keyPair, await __privateMethod(this, _ConnectCrypto_instances, generateECDSAKeyPair_fn).call(this));
    await __privateGet(this, _keyPairStorage).saveKeyPair(await __privateMethod(this, _ConnectCrypto_instances, exportKeyPair_fn).call(this));
  }
  async sign(data) {
    var _a;
    if ((_a = __privateGet(this, _keyPair)) == null ? void 0 : _a.privateKey) {
      const subtleCrypto = await __privateGet(this, _subtleCrypto);
      const arrayBuffer = await subtleCrypto.sign(
        _ConnectCrypto.signAlgorithm,
        __privateGet(this, _keyPair).privateKey,
        data.buffer
      );
      return new Uint8Array(arrayBuffer);
    } else {
      throw new Error("No private key available");
    }
  }
};
_subtleCrypto = new WeakMap();
_keyPair = new WeakMap();
_keyPairStorage = new WeakMap();
_did = new WeakMap();
_ConnectCrypto_instances = new WeakSet();
initCrypto_fn = function() {
  return new Promise((resolve, reject) => {
    var _a;
    if (typeof window === "undefined") {
      __vitePreload(() => import("node:crypto"), true ? [] : void 0).then((module) => {
        resolve(module.webcrypto.subtle);
      }).catch(reject);
    } else {
      if (!((_a = window.crypto) == null ? void 0 : _a.subtle)) {
        reject(new Error("Crypto module not available"));
      }
      resolve(window.crypto.subtle);
    }
  });
};
initialize_fn = async function() {
  const loadedKeyPair = await __privateGet(this, _keyPairStorage).loadKeyPair();
  if (loadedKeyPair) {
    __privateSet(this, _keyPair, await __privateMethod(this, _ConnectCrypto_instances, importKeyPair_fn).call(this, loadedKeyPair));
    console.log("Found key pair");
  } else {
    __privateSet(this, _keyPair, await __privateMethod(this, _ConnectCrypto_instances, generateECDSAKeyPair_fn).call(this));
    console.log("Created key pair");
    await __privateGet(this, _keyPairStorage).saveKeyPair(await __privateMethod(this, _ConnectCrypto_instances, exportKeyPair_fn).call(this));
  }
  const did = await __privateMethod(this, _ConnectCrypto_instances, parseDid_fn).call(this);
  console.log("Connect DID:", did);
  return did;
};
parseDid_fn = async function() {
  if (!__privateGet(this, _keyPair)) {
    throw new Error("No key pair available");
  }
  const subtleCrypto = await __privateGet(this, _subtleCrypto);
  const publicKeyRaw = await subtleCrypto.exportKey(
    "raw",
    __privateGet(this, _keyPair).publicKey
  );
  const multicodecName = "p256-pub";
  const rawKey = rawKeyInHexfromUncompressed(ab2hex(publicKeyRaw));
  const compressedKey = compressedKeyInHexfromRaw(rawKey);
  const did = encodeDIDfromHexString(multicodecName, compressedKey);
  return did;
};
generateECDSAKeyPair_fn = async function() {
  const subtleCrypto = await __privateGet(this, _subtleCrypto);
  const keyPair = await subtleCrypto.generateKey(
    _ConnectCrypto.algorithm,
    true,
    ["sign", "verify"]
  );
  return keyPair;
};
exportKeyPair_fn = async function() {
  if (!__privateGet(this, _keyPair)) {
    throw new Error("No key pair available");
  }
  const subtleCrypto = await __privateGet(this, _subtleCrypto);
  const jwkKeyPair = {
    publicKey: await subtleCrypto.exportKey(
      "jwk",
      __privateGet(this, _keyPair).publicKey
    ),
    privateKey: await subtleCrypto.exportKey(
      "jwk",
      __privateGet(this, _keyPair).privateKey
    )
  };
  return jwkKeyPair;
};
importKeyPair_fn = async function(jwkKeyPair) {
  const subtleCrypto = await __privateGet(this, _subtleCrypto);
  return {
    publicKey: await subtleCrypto.importKey(
      "jwk",
      jwkKeyPair.publicKey,
      _ConnectCrypto.algorithm,
      true,
      ["verify"]
    ),
    privateKey: await subtleCrypto.importKey(
      "jwk",
      jwkKeyPair.privateKey,
      _ConnectCrypto.algorithm,
      true,
      ["sign"]
    )
  };
};
_sign = new WeakMap();
_verify = new WeakMap();
__publicField(_ConnectCrypto, "algorithm", {
  name: "ECDSA",
  namedCurve: "P-256"
});
__publicField(_ConnectCrypto, "signAlgorithm", {
  name: "ECDSA",
  namedCurve: "P-256",
  hash: "SHA-256"
});
let ConnectCrypto = _ConnectCrypto;
function parsePkhDid(did) {
  const parts = did.split(":");
  if (!did.startsWith("did:pkh:") || parts.length !== 5) {
    throw new Error("Invalid pkh did");
  }
  const [, , networkId, chainIdStr, address] = parts;
  if (!address.startsWith("0x")) {
    throw new Error(`Invalid address: ${address}`);
  }
  const chainId = Number(chainIdStr);
  if (isNaN(chainId)) {
    throw new Error(`Invalid chain id: ${chainIdStr}`);
  }
  return {
    chainId,
    networkId,
    address
  };
}
class BaseStorage {
  constructor(store2, namespace) {
    __privateAdd(this, _BaseStorage_instances);
    __privateAdd(this, _store);
    __privateAdd(this, _namespace);
    __privateSet(this, _store, store2);
    __privateSet(this, _namespace, namespace);
  }
  get(key) {
    return __privateGet(this, _store).get(__privateMethod(this, _BaseStorage_instances, buildKey_fn).call(this, key));
  }
  set(key, value) {
    return __privateGet(this, _store).set(__privateMethod(this, _BaseStorage_instances, buildKey_fn).call(this, key), value);
  }
  delete(key) {
    return __privateGet(this, _store).delete(__privateMethod(this, _BaseStorage_instances, buildKey_fn).call(this, key));
  }
}
_store = new WeakMap();
_namespace = new WeakMap();
_BaseStorage_instances = new WeakSet();
buildKey_fn = function(key) {
  return `${__privateGet(this, _namespace)}:${key.toString()}`;
};
const store = {
  get: function(key) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return void 0;
  },
  set: function(key, value) {
    return value ? localStorage.setItem(key, JSON.stringify(value)) : localStorage.removeItem(key);
  },
  delete: function(key) {
    return localStorage.removeItem(key);
  }
};
class BrowserStorage extends BaseStorage {
  constructor(namespace) {
    super(
      store,
      `${connectConfig.routerBasename}:${namespace}`
    );
  }
}
function initRenownBrowser(connectId) {
  return new Renown(new BrowserStorage("renown"), connectId);
}
class Renown {
  constructor(store2, connectId, baseUrl = RENOWN_URL) {
    __privateAdd(this, _Renown_instances);
    __privateAdd(this, _baseUrl);
    __privateAdd(this, _store2);
    __privateAdd(this, _connectId);
    __privateAdd(this, _eventEmitter, new eventsExports.EventEmitter());
    __privateSet(this, _store2, store2);
    __privateSet(this, _connectId, connectId);
    __privateSet(this, _baseUrl, baseUrl);
    if (this.user) {
      this.login(this.user.did).catch(() => void 0);
    }
  }
  get user() {
    return __privateGet(this, _store2).get("user");
  }
  set connectId(connectId) {
    __privateSet(this, _connectId, connectId);
    const user = this.user;
    __privateMethod(this, _Renown_instances, updateUser_fn).call(this, void 0);
    if (user) {
      this.login(user.did).catch((e) => {
        console.log("User no longer authenticated:", e);
      });
    }
  }
  async login(did) {
    try {
      const result = parsePkhDid(did);
      const credential = await __privateMethod(this, _Renown_instances, getCredential_fn).call(this, result.address, result.chainId, __privateGet(this, _connectId));
      if (!credential) {
        __privateMethod(this, _Renown_instances, updateUser_fn).call(this, void 0);
        throw new Error("Credential not found");
      }
      const user = {
        ...result,
        did,
        credential
      };
      getEnsInfo(user.address, user.chainId).then((ens) => {
        var _a;
        if (((_a = this.user) == null ? void 0 : _a.address) === user.address && this.user.chainId === user.chainId) {
          __privateMethod(this, _Renown_instances, updateUser_fn).call(this, { ...this.user, ens });
        }
      }).catch(logger.error);
      __privateMethod(this, _Renown_instances, updateUser_fn).call(this, user);
      return user;
    } catch (error) {
      logger.error(error);
      __privateMethod(this, _Renown_instances, updateUser_fn).call(this, void 0);
      throw error;
    }
  }
  logout() {
    __privateMethod(this, _Renown_instances, updateUser_fn).call(this, void 0);
  }
  on(event, listener) {
    __privateGet(this, _eventEmitter).on(event, listener);
    return () => {
      __privateGet(this, _eventEmitter).removeListener(event, listener);
    };
  }
}
_baseUrl = new WeakMap();
_store2 = new WeakMap();
_connectId = new WeakMap();
_eventEmitter = new WeakMap();
_Renown_instances = new WeakSet();
updateUser_fn = function(user) {
  user ? __privateGet(this, _store2).set("user", user) : __privateGet(this, _store2).delete("user");
  __privateGet(this, _eventEmitter).emit("user", user);
};
getCredential_fn = async function(address, chainId, connectId) {
  if (!__privateGet(this, _baseUrl)) {
    throw new Error("RENOWN_URL is not set");
  }
  const url = new URL(
    `/api/auth/credential?address=${encodeURIComponent(address)}&chainId=${encodeURIComponent(chainId)}&connectId=${encodeURIComponent(connectId)}`,
    __privateGet(this, _baseUrl)
  );
  const response = await fetch(url, {
    method: "GET"
  });
  if (response.ok) {
    const result = await response.json();
    return result.credential;
  } else {
    throw new Error("Failed to get credential");
  }
};
export {
  BaseStorage,
  BrowserKeyStorage,
  ConnectCrypto,
  d as RENOWN_CHAIN_ID,
  c as RENOWN_NETWORK_ID,
  RENOWN_URL,
  Renown,
  b as addExternalPackage,
  f as getChain,
  getEnsInfo,
  a as getHMRModule,
  initRenownBrowser,
  parsePkhDid,
  r as removeExternalPackage,
  s as subscribeExternalPackages
};
