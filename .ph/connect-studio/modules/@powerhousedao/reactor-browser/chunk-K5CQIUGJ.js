import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-2ESYSVXG.js";

// node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/compare.js
var require_compare = __commonJS({
  "node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/compare.js"(exports, module) {
    "use strict";
    function compare(a, b) {
      for (let i = 0; i < a.byteLength; i++) {
        if (a[i] < b[i]) {
          return -1;
        }
        if (a[i] > b[i]) {
          return 1;
        }
      }
      if (a.byteLength > b.byteLength) {
        return 1;
      }
      if (a.byteLength < b.byteLength) {
        return -1;
      }
      return 0;
    }
    module.exports = compare;
  }
});

// node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/concat.js
var require_concat = __commonJS({
  "node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/concat.js"(exports, module) {
    "use strict";
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
    module.exports = concat2;
  }
});

// node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/equals.js
var require_equals = __commonJS({
  "node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/equals.js"(exports, module) {
    "use strict";
    function equals3(a, b) {
      if (a === b) {
        return true;
      }
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      for (let i = 0; i < a.byteLength; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    module.exports = equals3;
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/vendor/base-x.js
function base(ALPHABET, name4) {
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
  function encode7(source) {
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
  function decode8(string2) {
    var buffer = decodeUnsafe(string2);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name4} character`);
  }
  return {
    encode: encode7,
    decodeUnsafe,
    decode: decode8
  };
}
var src, _brrp__multiformats_scope_baseX, base_x_default;
var init_base_x = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/vendor/base-x.js"() {
    src = base;
    _brrp__multiformats_scope_baseX = src;
    base_x_default = _brrp__multiformats_scope_baseX;
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bytes.js
var bytes_exports = {};
__export(bytes_exports, {
  coerce: () => coerce,
  empty: () => empty,
  equals: () => equals,
  fromHex: () => fromHex,
  fromString: () => fromString,
  isBinary: () => isBinary,
  toHex: () => toHex,
  toString: () => toString
});
var empty, toHex, fromHex, equals, coerce, isBinary, fromString, toString;
var init_bytes = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bytes.js"() {
    empty = new Uint8Array(0);
    toHex = (d) => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, "0"), "");
    fromHex = (hex) => {
      const hexes = hex.match(/../g);
      return hexes ? new Uint8Array(hexes.map((b) => parseInt(b, 16))) : empty;
    };
    equals = (aa, bb) => {
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
    coerce = (o) => {
      if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
        return o;
      if (o instanceof ArrayBuffer)
        return new Uint8Array(o);
      if (ArrayBuffer.isView(o)) {
        return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
      }
      throw new Error("Unknown type, must be binary type");
    };
    isBinary = (o) => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
    fromString = (str) => new TextEncoder().encode(str);
    toString = (b) => new TextDecoder().decode(b);
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base.js
var Encoder, Decoder, ComposedDecoder, or, Codec, from, baseX, decode, encode, rfc4648;
var init_base = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base.js"() {
    init_base_x();
    init_bytes();
    Encoder = class {
      constructor(name4, prefix, baseEncode) {
        this.name = name4;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
      }
      encode(bytes) {
        if (bytes instanceof Uint8Array) {
          return `${this.prefix}${this.baseEncode(bytes)}`;
        } else {
          throw Error("Unknown type, must be binary type");
        }
      }
    };
    Decoder = class {
      constructor(name4, prefix, baseDecode) {
        this.name = name4;
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
    };
    ComposedDecoder = class {
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
    };
    or = (left, right) => new ComposedDecoder({
      ...left.decoders || { [left.prefix]: left },
      ...right.decoders || { [right.prefix]: right }
    });
    Codec = class {
      constructor(name4, prefix, baseEncode, baseDecode) {
        this.name = name4;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
        this.baseDecode = baseDecode;
        this.encoder = new Encoder(name4, prefix, baseEncode);
        this.decoder = new Decoder(name4, prefix, baseDecode);
      }
      encode(input) {
        return this.encoder.encode(input);
      }
      decode(input) {
        return this.decoder.decode(input);
      }
    };
    from = ({ name: name4, prefix, encode: encode7, decode: decode8 }) => new Codec(name4, prefix, encode7, decode8);
    baseX = ({ prefix, name: name4, alphabet: alphabet2 }) => {
      const { encode: encode7, decode: decode8 } = base_x_default(alphabet2, name4);
      return from({
        prefix,
        name: name4,
        encode: encode7,
        decode: (text) => coerce(decode8(text))
      });
    };
    decode = (string2, alphabet2, bitsPerChar, name4) => {
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
          throw new SyntaxError(`Non-${name4} character`);
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
    encode = (data, alphabet2, bitsPerChar) => {
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
    rfc4648 = ({ name: name4, prefix, bitsPerChar, alphabet: alphabet2 }) => {
      return from({
        prefix,
        name: name4,
        encode(input) {
          return encode(input, alphabet2, bitsPerChar);
        },
        decode(input) {
          return decode(input, alphabet2, bitsPerChar, name4);
        }
      });
    };
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/identity.js
var identity_exports = {};
__export(identity_exports, {
  identity: () => identity
});
var identity;
var init_identity = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/identity.js"() {
    init_base();
    init_bytes();
    identity = from({
      prefix: "\0",
      name: "identity",
      encode: (buf) => toString(buf),
      decode: (str) => fromString(str)
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base2.js
var base2_exports = {};
__export(base2_exports, {
  base2: () => base2
});
var base2;
var init_base2 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base2.js"() {
    init_base();
    base2 = rfc4648({
      prefix: "0",
      name: "base2",
      alphabet: "01",
      bitsPerChar: 1
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base8.js
var base8_exports = {};
__export(base8_exports, {
  base8: () => base8
});
var base8;
var init_base8 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base8.js"() {
    init_base();
    base8 = rfc4648({
      prefix: "7",
      name: "base8",
      alphabet: "01234567",
      bitsPerChar: 3
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base10.js
var base10_exports = {};
__export(base10_exports, {
  base10: () => base10
});
var base10;
var init_base10 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base10.js"() {
    init_base();
    base10 = baseX({
      prefix: "9",
      name: "base10",
      alphabet: "0123456789"
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base16.js
var base16_exports = {};
__export(base16_exports, {
  base16: () => base16,
  base16upper: () => base16upper
});
var base16, base16upper;
var init_base16 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base16.js"() {
    init_base();
    base16 = rfc4648({
      prefix: "f",
      name: "base16",
      alphabet: "0123456789abcdef",
      bitsPerChar: 4
    });
    base16upper = rfc4648({
      prefix: "F",
      name: "base16upper",
      alphabet: "0123456789ABCDEF",
      bitsPerChar: 4
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base32.js
var base32_exports = {};
__export(base32_exports, {
  base32: () => base32,
  base32hex: () => base32hex,
  base32hexpad: () => base32hexpad,
  base32hexpadupper: () => base32hexpadupper,
  base32hexupper: () => base32hexupper,
  base32pad: () => base32pad,
  base32padupper: () => base32padupper,
  base32upper: () => base32upper,
  base32z: () => base32z
});
var base32, base32upper, base32pad, base32padupper, base32hex, base32hexupper, base32hexpad, base32hexpadupper, base32z;
var init_base32 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base32.js"() {
    init_base();
    base32 = rfc4648({
      prefix: "b",
      name: "base32",
      alphabet: "abcdefghijklmnopqrstuvwxyz234567",
      bitsPerChar: 5
    });
    base32upper = rfc4648({
      prefix: "B",
      name: "base32upper",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
      bitsPerChar: 5
    });
    base32pad = rfc4648({
      prefix: "c",
      name: "base32pad",
      alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
      bitsPerChar: 5
    });
    base32padupper = rfc4648({
      prefix: "C",
      name: "base32padupper",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
      bitsPerChar: 5
    });
    base32hex = rfc4648({
      prefix: "v",
      name: "base32hex",
      alphabet: "0123456789abcdefghijklmnopqrstuv",
      bitsPerChar: 5
    });
    base32hexupper = rfc4648({
      prefix: "V",
      name: "base32hexupper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
      bitsPerChar: 5
    });
    base32hexpad = rfc4648({
      prefix: "t",
      name: "base32hexpad",
      alphabet: "0123456789abcdefghijklmnopqrstuv=",
      bitsPerChar: 5
    });
    base32hexpadupper = rfc4648({
      prefix: "T",
      name: "base32hexpadupper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
      bitsPerChar: 5
    });
    base32z = rfc4648({
      prefix: "h",
      name: "base32z",
      alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
      bitsPerChar: 5
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base36.js
var base36_exports = {};
__export(base36_exports, {
  base36: () => base36,
  base36upper: () => base36upper
});
var base36, base36upper;
var init_base36 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base36.js"() {
    init_base();
    base36 = baseX({
      prefix: "k",
      name: "base36",
      alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    });
    base36upper = baseX({
      prefix: "K",
      name: "base36upper",
      alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base58.js
var base58_exports = {};
__export(base58_exports, {
  base58btc: () => base58btc,
  base58flickr: () => base58flickr
});
var base58btc, base58flickr;
var init_base58 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base58.js"() {
    init_base();
    base58btc = baseX({
      name: "base58btc",
      prefix: "z",
      alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    });
    base58flickr = baseX({
      name: "base58flickr",
      prefix: "Z",
      alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  base64pad: () => base64pad,
  base64url: () => base64url,
  base64urlpad: () => base64urlpad
});
var base64, base64pad, base64url, base64urlpad;
var init_base64 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base64.js"() {
    init_base();
    base64 = rfc4648({
      prefix: "m",
      name: "base64",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      bitsPerChar: 6
    });
    base64pad = rfc4648({
      prefix: "M",
      name: "base64pad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      bitsPerChar: 6
    });
    base64url = rfc4648({
      prefix: "u",
      name: "base64url",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      bitsPerChar: 6
    });
    base64urlpad = rfc4648({
      prefix: "U",
      name: "base64urlpad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
      bitsPerChar: 6
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_exports = {};
__export(base256emoji_exports, {
  base256emoji: () => base256emoji
});
function encode2(data) {
  return data.reduce((p, c) => {
    p += alphabetBytesToChars[c];
    return p;
  }, "");
}
function decode2(str) {
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
var alphabet, alphabetBytesToChars, alphabetCharsToBytes, base256emoji;
var init_base256emoji = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/bases/base256emoji.js"() {
    init_base();
    alphabet = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
    alphabetBytesToChars = alphabet.reduce((p, c, i) => {
      p[i] = c;
      return p;
    }, []);
    alphabetCharsToBytes = alphabet.reduce((p, c, i) => {
      p[c.codePointAt(0)] = i;
      return p;
    }, []);
    base256emoji = from({
      prefix: "\u{1F680}",
      name: "base256emoji",
      encode: encode2,
      decode: decode2
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/vendor/varint.js
function encode3(num, out, offset) {
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
  encode3.bytes = offset - oldOffset + 1;
  return out;
}
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var encode_1, MSB, REST, MSBALL, INT, decode3, MSB$1, REST$1, N1, N2, N3, N4, N5, N6, N7, N8, N9, length, varint, _brrp_varint, varint_default;
var init_varint = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/vendor/varint.js"() {
    encode_1 = encode3;
    MSB = 128;
    REST = 127;
    MSBALL = ~REST;
    INT = Math.pow(2, 31);
    decode3 = read;
    MSB$1 = 128;
    REST$1 = 127;
    N1 = Math.pow(2, 7);
    N2 = Math.pow(2, 14);
    N3 = Math.pow(2, 21);
    N4 = Math.pow(2, 28);
    N5 = Math.pow(2, 35);
    N6 = Math.pow(2, 42);
    N7 = Math.pow(2, 49);
    N8 = Math.pow(2, 56);
    N9 = Math.pow(2, 63);
    length = function(value) {
      return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
    };
    varint = {
      encode: encode_1,
      decode: decode3,
      encodingLength: length
    };
    _brrp_varint = varint;
    varint_default = _brrp_varint;
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/varint.js
var varint_exports = {};
__export(varint_exports, {
  decode: () => decode4,
  encodeTo: () => encodeTo,
  encodingLength: () => encodingLength
});
var decode4, encodeTo, encodingLength;
var init_varint2 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/varint.js"() {
    init_varint();
    decode4 = (data, offset = 0) => {
      const code4 = varint_default.decode(data, offset);
      return [
        code4,
        varint_default.decode.bytes
      ];
    };
    encodeTo = (int, target, offset = 0) => {
      varint_default.encode(int, target, offset);
      return target;
    };
    encodingLength = (int) => {
      return varint_default.encodingLength(int);
    };
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/hashes/digest.js
var digest_exports = {};
__export(digest_exports, {
  Digest: () => Digest,
  create: () => create,
  decode: () => decode5,
  equals: () => equals2
});
var create, decode5, equals2, Digest;
var init_digest = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/hashes/digest.js"() {
    init_bytes();
    init_varint2();
    create = (code4, digest2) => {
      const size = digest2.byteLength;
      const sizeOffset = encodingLength(code4);
      const digestOffset = sizeOffset + encodingLength(size);
      const bytes = new Uint8Array(digestOffset + size);
      encodeTo(code4, bytes, 0);
      encodeTo(size, bytes, sizeOffset);
      bytes.set(digest2, digestOffset);
      return new Digest(code4, size, digest2, bytes);
    };
    decode5 = (multihash) => {
      const bytes = coerce(multihash);
      const [code4, sizeOffset] = decode4(bytes);
      const [size, digestOffset] = decode4(bytes.subarray(sizeOffset));
      const digest2 = bytes.subarray(sizeOffset + digestOffset);
      if (digest2.byteLength !== size) {
        throw new Error("Incorrect length");
      }
      return new Digest(code4, size, digest2, bytes);
    };
    equals2 = (a, b) => {
      if (a === b) {
        return true;
      } else {
        return a.code === b.code && a.size === b.size && equals(a.bytes, b.bytes);
      }
    };
    Digest = class {
      constructor(code4, size, digest2, bytes) {
        this.code = code4;
        this.size = size;
        this.digest = digest2;
        this.bytes = bytes;
      }
    };
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/hashes/hasher.js
var hasher_exports = {};
__export(hasher_exports, {
  Hasher: () => Hasher,
  from: () => from2
});
var from2, Hasher;
var init_hasher = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/hashes/hasher.js"() {
    init_digest();
    from2 = ({ name: name4, code: code4, encode: encode7 }) => new Hasher(name4, code4, encode7);
    Hasher = class {
      constructor(name4, code4, encode7) {
        this.name = name4;
        this.code = code4;
        this.encode = encode7;
      }
      digest(input) {
        if (input instanceof Uint8Array) {
          const result = this.encode(input);
          return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
        } else {
          throw Error("Unknown type, must be binary type");
        }
      }
    };
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_exports = {};
__export(sha2_browser_exports, {
  sha256: () => sha256,
  sha512: () => sha512
});
var sha, sha256, sha512;
var init_sha2_browser = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/hashes/sha2-browser.js"() {
    init_hasher();
    sha = (name4) => async (data) => new Uint8Array(await crypto.subtle.digest(name4, data));
    sha256 = from2({
      name: "sha2-256",
      code: 18,
      encode: sha("SHA-256")
    });
    sha512 = from2({
      name: "sha2-512",
      code: 19,
      encode: sha("SHA-512")
    });
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/hashes/identity.js
var identity_exports2 = {};
__export(identity_exports2, {
  identity: () => identity2
});
var code, name, encode4, digest, identity2;
var init_identity2 = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/hashes/identity.js"() {
    init_bytes();
    init_digest();
    code = 0;
    name = "identity";
    encode4 = coerce;
    digest = (input) => create(code, encode4(input));
    identity2 = {
      code,
      name,
      encode: encode4,
      digest
    };
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/codecs/raw.js
var raw_exports = {};
__export(raw_exports, {
  code: () => code2,
  decode: () => decode6,
  encode: () => encode5,
  name: () => name2
});
var name2, code2, encode5, decode6;
var init_raw = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/codecs/raw.js"() {
    init_bytes();
    name2 = "raw";
    code2 = 85;
    encode5 = (node) => coerce(node);
    decode6 = (data) => coerce(data);
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/codecs/json.js
var json_exports = {};
__export(json_exports, {
  code: () => code3,
  decode: () => decode7,
  encode: () => encode6,
  name: () => name3
});
var textEncoder, textDecoder, name3, code3, encode6, decode7;
var init_json = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/codecs/json.js"() {
    textEncoder = new TextEncoder();
    textDecoder = new TextDecoder();
    name3 = "json";
    code3 = 512;
    encode6 = (node) => textEncoder.encode(JSON.stringify(node));
    decode7 = (data) => JSON.parse(textDecoder.decode(data));
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/cid.js
var CID, parseCIDtoBytes, toStringV0, toStringV1, DAG_PB_CODE, SHA_256_CODE, encodeCID, cidSymbol, readonly, hidden, version, deprecate, IS_CID_DEPRECATION;
var init_cid = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/cid.js"() {
    init_varint2();
    init_digest();
    init_base58();
    init_base32();
    init_bytes();
    CID = class _CID {
      constructor(version2, code4, multihash, bytes) {
        this.code = code4;
        this.version = version2;
        this.multihash = multihash;
        this.bytes = bytes;
        this.byteOffset = bytes.byteOffset;
        this.byteLength = bytes.byteLength;
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
            const { code: code4, multihash } = this;
            if (code4 !== DAG_PB_CODE) {
              throw new Error("Cannot convert a non dag-pb CID to CIDv0");
            }
            if (multihash.code !== SHA_256_CODE) {
              throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
            }
            return _CID.createV0(multihash);
          }
        }
      }
      toV1() {
        switch (this.version) {
          case 0: {
            const { code: code4, digest: digest2 } = this.multihash;
            const multihash = create(code4, digest2);
            return _CID.createV1(this.code, multihash);
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
        return other && this.code === other.code && this.version === other.version && equals2(this.multihash, other.multihash);
      }
      toString(base3) {
        const { bytes, version: version2, _baseCache } = this;
        switch (version2) {
          case 0:
            return toStringV0(bytes, _baseCache, base3 || base58btc.encoder);
          default:
            return toStringV1(bytes, _baseCache, base3 || base32.encoder);
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
        if (value instanceof _CID) {
          return value;
        } else if (value != null && value.asCID === value) {
          const { version: version2, code: code4, multihash, bytes } = value;
          return new _CID(version2, code4, multihash, bytes || encodeCID(version2, code4, multihash.bytes));
        } else if (value != null && value[cidSymbol] === true) {
          const { version: version2, multihash, code: code4 } = value;
          const digest2 = decode5(multihash);
          return _CID.create(version2, code4, digest2);
        } else {
          return null;
        }
      }
      static create(version2, code4, digest2) {
        if (typeof code4 !== "number") {
          throw new Error("String codecs are no longer supported");
        }
        switch (version2) {
          case 0: {
            if (code4 !== DAG_PB_CODE) {
              throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
            } else {
              return new _CID(version2, code4, digest2, digest2.bytes);
            }
          }
          case 1: {
            const bytes = encodeCID(version2, code4, digest2.bytes);
            return new _CID(version2, code4, digest2, bytes);
          }
          default: {
            throw new Error("Invalid version");
          }
        }
      }
      static createV0(digest2) {
        return _CID.create(0, DAG_PB_CODE, digest2);
      }
      static createV1(code4, digest2) {
        return _CID.create(1, code4, digest2);
      }
      static decode(bytes) {
        const [cid, remainder] = _CID.decodeFirst(bytes);
        if (remainder.length) {
          throw new Error("Incorrect length");
        }
        return cid;
      }
      static decodeFirst(bytes) {
        const specs = _CID.inspectBytes(bytes);
        const prefixSize = specs.size - specs.multihashSize;
        const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
        if (multihashBytes.byteLength !== specs.multihashSize) {
          throw new Error("Incorrect length");
        }
        const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
        const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
        const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
        return [
          cid,
          bytes.subarray(specs.size)
        ];
      }
      static inspectBytes(initialBytes) {
        let offset = 0;
        const next = () => {
          const [i, length2] = decode4(initialBytes.subarray(offset));
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
        const [prefix, bytes] = parseCIDtoBytes(source, base3);
        const cid = _CID.decode(bytes);
        cid._baseCache.set(prefix, source);
        return cid;
      }
    };
    parseCIDtoBytes = (source, base3) => {
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
    toStringV0 = (bytes, cache, base3) => {
      const { prefix } = base3;
      if (prefix !== base58btc.prefix) {
        throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
      }
      const cid = cache.get(prefix);
      if (cid == null) {
        const cid2 = base3.encode(bytes).slice(1);
        cache.set(prefix, cid2);
        return cid2;
      } else {
        return cid;
      }
    };
    toStringV1 = (bytes, cache, base3) => {
      const { prefix } = base3;
      const cid = cache.get(prefix);
      if (cid == null) {
        const cid2 = base3.encode(bytes);
        cache.set(prefix, cid2);
        return cid2;
      } else {
        return cid;
      }
    };
    DAG_PB_CODE = 112;
    SHA_256_CODE = 18;
    encodeCID = (version2, code4, multihash) => {
      const codeOffset = encodingLength(version2);
      const hashOffset = codeOffset + encodingLength(code4);
      const bytes = new Uint8Array(hashOffset + multihash.byteLength);
      encodeTo(version2, bytes, 0);
      encodeTo(code4, bytes, codeOffset);
      bytes.set(multihash, hashOffset);
      return bytes;
    };
    cidSymbol = Symbol.for("@ipld/js-cid/CID");
    readonly = {
      writable: false,
      configurable: false,
      enumerable: true
    };
    hidden = {
      writable: false,
      enumerable: false,
      configurable: false
    };
    version = "0.0.0-dev";
    deprecate = (range, message) => {
      if (range.test(version)) {
        console.warn(message);
      } else {
        throw new Error(message);
      }
    };
    IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
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
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/index.js
var init_src = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/index.js"() {
    init_cid();
    init_varint2();
    init_bytes();
    init_hasher();
    init_digest();
  }
});

// node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/basics.js
var basics_exports = {};
__export(basics_exports, {
  CID: () => CID,
  bases: () => bases,
  bytes: () => bytes_exports,
  codecs: () => codecs,
  digest: () => digest_exports,
  hasher: () => hasher_exports,
  hashes: () => hashes,
  varint: () => varint_exports
});
var bases, hashes, codecs;
var init_basics = __esm({
  "node_modules/.pnpm/multiformats@9.9.0/node_modules/multiformats/esm/src/basics.js"() {
    init_identity();
    init_base2();
    init_base8();
    init_base10();
    init_base16();
    init_base32();
    init_base36();
    init_base58();
    init_base64();
    init_base256emoji();
    init_sha2_browser();
    init_identity2();
    init_raw();
    init_json();
    init_src();
    bases = {
      ...identity_exports,
      ...base2_exports,
      ...base8_exports,
      ...base10_exports,
      ...base16_exports,
      ...base32_exports,
      ...base36_exports,
      ...base58_exports,
      ...base64_exports,
      ...base256emoji_exports
    };
    hashes = {
      ...sha2_browser_exports,
      ...identity_exports2
    };
    codecs = {
      raw: raw_exports,
      json: json_exports
    };
  }
});

// node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/util/bases.js
var require_bases = __commonJS({
  "node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/util/bases.js"(exports, module) {
    "use strict";
    var { bases: bases2 } = (init_basics(), __toCommonJS(basics_exports));
    function createCodec2(name4, prefix, encode7, decode8) {
      return {
        name: name4,
        prefix,
        encoder: {
          name: name4,
          prefix,
          encode: encode7
        },
        decoder: {
          decode: decode8
        }
      };
    }
    var string2 = createCodec2("utf8", "u", (buf) => {
      const decoder = new TextDecoder("utf8");
      return "u" + decoder.decode(buf);
    }, (str) => {
      const encoder = new TextEncoder();
      return encoder.encode(str.substring(1));
    });
    var ascii2 = createCodec2("ascii", "a", (buf) => {
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
    var BASES2 = {
      "utf8": string2,
      "utf-8": string2,
      "hex": bases2.base16,
      "latin1": ascii2,
      "ascii": ascii2,
      "binary": ascii2,
      ...bases2
    };
    module.exports = BASES2;
  }
});

// node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/from-string.js
var require_from_string = __commonJS({
  "node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/from-string.js"(exports, module) {
    "use strict";
    var bases2 = require_bases();
    function fromString5(string2, encoding = "utf8") {
      const base3 = bases2[encoding];
      if (!base3) {
        throw new Error(`Unsupported encoding "${encoding}"`);
      }
      return base3.decoder.decode(`${base3.prefix}${string2}`);
    }
    module.exports = fromString5;
  }
});

// node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/to-string.js"(exports, module) {
    "use strict";
    var bases2 = require_bases();
    function toString4(array, encoding = "utf8") {
      const base3 = bases2[encoding];
      if (!base3) {
        throw new Error(`Unsupported encoding "${encoding}"`);
      }
      return base3.encoder.encode(array).substring(1);
    }
    module.exports = toString4;
  }
});

// node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/xor.js
var require_xor = __commonJS({
  "node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/xor.js"(exports, module) {
    "use strict";
    function xor(a, b) {
      if (a.length !== b.length) {
        throw new Error("Inputs should have the same length");
      }
      const result = new Uint8Array(a.length);
      for (let i = 0; i < a.length; i++) {
        result[i] = a[i] ^ b[i];
      }
      return result;
    }
    module.exports = xor;
  }
});

// node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/index.js
var require_uint8arrays = __commonJS({
  "node_modules/.pnpm/uint8arrays@2.1.10/node_modules/uint8arrays/index.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var concat2 = require_concat();
    var equals3 = require_equals();
    var fromString5 = require_from_string();
    var toString4 = require_to_string();
    var xor = require_xor();
    module.exports = {
      compare,
      concat: concat2,
      equals: equals3,
      fromString: fromString5,
      toString: toString4,
      xor
    };
  }
});

// node_modules/.pnpm/varint@6.0.0/node_modules/varint/encode.js
var require_encode = __commonJS({
  "node_modules/.pnpm/varint@6.0.0/node_modules/varint/encode.js"(exports, module) {
    module.exports = encode7;
    var MSB2 = 128;
    var REST2 = 127;
    var MSBALL2 = ~REST2;
    var INT2 = Math.pow(2, 31);
    function encode7(num, out, offset) {
      if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
        encode7.bytes = 0;
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
      encode7.bytes = offset - oldOffset + 1;
      return out;
    }
  }
});

// node_modules/.pnpm/varint@6.0.0/node_modules/varint/decode.js
var require_decode = __commonJS({
  "node_modules/.pnpm/varint@6.0.0/node_modules/varint/decode.js"(exports, module) {
    module.exports = read2;
    var MSB2 = 128;
    var REST2 = 127;
    function read2(buf, offset) {
      var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
      do {
        if (counter >= l || shift > 49) {
          read2.bytes = 0;
          throw new RangeError("Could not decode varint");
        }
        b = buf[counter++];
        res += shift < 28 ? (b & REST2) << shift : (b & REST2) * Math.pow(2, shift);
        shift += 7;
      } while (b >= MSB2);
      read2.bytes = counter - offset;
      return res;
    }
  }
});

// node_modules/.pnpm/varint@6.0.0/node_modules/varint/length.js
var require_length = __commonJS({
  "node_modules/.pnpm/varint@6.0.0/node_modules/varint/length.js"(exports, module) {
    var N12 = Math.pow(2, 7);
    var N22 = Math.pow(2, 14);
    var N32 = Math.pow(2, 21);
    var N42 = Math.pow(2, 28);
    var N52 = Math.pow(2, 35);
    var N62 = Math.pow(2, 42);
    var N72 = Math.pow(2, 49);
    var N82 = Math.pow(2, 56);
    var N92 = Math.pow(2, 63);
    module.exports = function(value) {
      return value < N12 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N42 ? 4 : value < N52 ? 5 : value < N62 ? 6 : value < N72 ? 7 : value < N82 ? 8 : value < N92 ? 9 : 10;
    };
  }
});

// node_modules/.pnpm/varint@6.0.0/node_modules/varint/index.js
var require_varint = __commonJS({
  "node_modules/.pnpm/varint@6.0.0/node_modules/varint/index.js"(exports, module) {
    module.exports = {
      encode: require_encode(),
      decode: require_decode(),
      encodingLength: require_length()
    };
  }
});

// node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/alloc.js
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}
var init_alloc = __esm({
  "node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/alloc.js"() {
  }
});

// node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/concat.js
var concat_exports = {};
__export(concat_exports, {
  concat: () => concat
});
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
  return output;
}
var init_concat = __esm({
  "node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/concat.js"() {
    init_alloc();
  }
});

// node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/util/bases.js
function createCodec(name4, prefix, encode7, decode8) {
  return {
    name: name4,
    prefix,
    encoder: {
      name: name4,
      prefix,
      encode: encode7
    },
    decoder: { decode: decode8 }
  };
}
var string, ascii, BASES, bases_default;
var init_bases = __esm({
  "node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/util/bases.js"() {
    init_basics();
    init_alloc();
    string = createCodec("utf8", "u", (buf) => {
      const decoder = new TextDecoder("utf8");
      return "u" + decoder.decode(buf);
    }, (str) => {
      const encoder = new TextEncoder();
      return encoder.encode(str.substring(1));
    });
    ascii = createCodec("ascii", "a", (buf) => {
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
    BASES = {
      utf8: string,
      "utf-8": string,
      hex: bases.base16,
      latin1: ascii,
      ascii,
      binary: ascii,
      ...bases
    };
    bases_default = BASES;
  }
});

// node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/to-string.js
var to_string_exports = {};
__export(to_string_exports, {
  toString: () => toString2
});
function toString2(array, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}
var init_to_string = __esm({
  "node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/to-string.js"() {
    init_bases();
  }
});

// node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/from-string.js
var from_string_exports = {};
__export(from_string_exports, {
  fromString: () => fromString2
});
function fromString2(string2, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(string2, "utf8");
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
var init_from_string = __esm({
  "node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/from-string.js"() {
    init_bases();
  }
});

// node_modules/.pnpm/multicodec@3.2.1/node_modules/multicodec/src/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/multicodec@3.2.1/node_modules/multicodec/src/util.js"(exports, module) {
    "use strict";
    var varint2 = require_varint();
    var { toString: uint8ArrayToString } = (init_to_string(), __toCommonJS(to_string_exports));
    var { fromString: uint8ArrayFromString } = (init_from_string(), __toCommonJS(from_string_exports));
    module.exports = {
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
  }
});

// node_modules/.pnpm/multicodec@3.2.1/node_modules/multicodec/src/generated-table.js
var require_generated_table = __commonJS({
  "node_modules/.pnpm/multicodec@3.2.1/node_modules/multicodec/src/generated-table.js"(exports, module) {
    "use strict";
    var baseTable = Object.freeze({
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
    module.exports = { baseTable };
  }
});

// node_modules/.pnpm/multicodec@3.2.1/node_modules/multicodec/src/maps.js
var require_maps = __commonJS({
  "node_modules/.pnpm/multicodec@3.2.1/node_modules/multicodec/src/maps.js"(exports, module) {
    "use strict";
    var { baseTable } = require_generated_table();
    var varintEncode = require_util().varintEncode;
    var nameToVarint = (
      /** @type {NameUint8ArrayMap} */
      {}
    );
    var constantToCode = (
      /** @type {ConstantCodeMap} */
      {}
    );
    var codeToName = (
      /** @type {CodeNameMap} */
      {}
    );
    for (const name4 in baseTable) {
      const codecName = (
        /** @type {CodecName} */
        name4
      );
      const code4 = baseTable[codecName];
      nameToVarint[codecName] = varintEncode(code4);
      const constant = (
        /** @type {CodecConstant} */
        codecName.toUpperCase().replace(/-/g, "_")
      );
      constantToCode[constant] = code4;
      if (!codeToName[code4]) {
        codeToName[code4] = codecName;
      }
    }
    Object.freeze(nameToVarint);
    Object.freeze(constantToCode);
    Object.freeze(codeToName);
    var nameToCode = Object.freeze(baseTable);
    module.exports = {
      nameToVarint,
      constantToCode,
      nameToCode,
      codeToName
    };
  }
});

// node_modules/.pnpm/multicodec@3.2.1/node_modules/multicodec/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/multicodec@3.2.1/node_modules/multicodec/src/index.js"(exports, module) {
    "use strict";
    var varint2 = require_varint();
    var { concat: uint8ArrayConcat } = (init_concat(), __toCommonJS(concat_exports));
    var util = require_util();
    var { nameToVarint, constantToCode, nameToCode, codeToName } = require_maps();
    function addPrefix(multicodecStrOrCode, data) {
      let prefix;
      if (multicodecStrOrCode instanceof Uint8Array) {
        prefix = util.varintUint8ArrayEncode(multicodecStrOrCode);
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
      const code4 = (
        /** @type {CodecCode} */
        varint2.decode(
          /** @type {Buffer} */
          prefixedData
        )
      );
      const name4 = codeToName[code4];
      if (name4 === void 0) {
        throw new Error(`Code "${code4}" not found`);
      }
      return name4;
    }
    function getNameFromCode(codec) {
      return codeToName[codec];
    }
    function getCodeFromName(name4) {
      const code4 = nameToCode[name4];
      if (code4 === void 0) {
        throw new Error(`Codec "${name4}" not found`);
      }
      return code4;
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
    function getVarintFromName(name4) {
      const code4 = nameToVarint[name4];
      if (code4 === void 0) {
        throw new Error(`Codec "${name4}" not found`);
      }
      return code4;
    }
    function getVarintFromCode(code4) {
      return util.varintEncode(code4);
    }
    function getCodec(prefixedData) {
      return getNameFromData(prefixedData);
    }
    function getName(codec) {
      return getNameFromCode(codec);
    }
    function getNumber(name4) {
      return getCodeFromName(name4);
    }
    function getCode(prefixedData) {
      return getCodeFromData(prefixedData);
    }
    function getCodeVarint(name4) {
      return getVarintFromName(name4);
    }
    function getVarint(code4) {
      return Array.from(getVarintFromCode(code4));
    }
    module.exports = {
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
  }
});

// node_modules/.pnpm/did-key-creator@1.2.0/node_modules/did-key-creator/lib/did_key_utils.js
var u8a = __toESM(require_uint8arrays(), 1);
var import_multicodec = __toESM(require_src(), 1);
init_base58();
function ECPointCompress(x, y) {
  const out = new Uint8Array(x.length + 1);
  out[0] = 2 + (y[y.length - 1] & 1);
  out.set(x, 1);
  return out;
}
function compressedKeyInHexfromRaw(publicKeyHex) {
  const xHex = publicKeyHex.slice(0, publicKeyHex.length / 2);
  const yHex = publicKeyHex.slice(publicKeyHex.length / 2, publicKeyHex.length);
  const xOctet = u8a.fromString(xHex, "base16");
  const yOctet = u8a.fromString(yHex, "base16");
  const compressedPoint = ECPointCompress(xOctet, yOctet);
  const compressedPointHex = u8a.toString(compressedPoint, "base16");
  return compressedPointHex;
}
function rawKeyInHexfromUncompressed(publicKeyHex) {
  return publicKeyHex.slice(2);
}

// node_modules/.pnpm/did-key-creator@1.2.0/node_modules/did-key-creator/lib/encodeDIDkey.js
var u8a2 = __toESM(require_uint8arrays(), 1);
var import_multicodec2 = __toESM(require_src(), 1);
init_base58();
function encodeDIDfromHexString(multicodecName, publicKeyHex) {
  const publicKey = u8a2.fromString(publicKeyHex, "base16");
  const didKey = encodeDIDfromBytes(multicodecName, publicKey);
  return didKey;
}
function encodeDIDfromBytes(multicodecName, publicKey) {
  const publicKeywPrefix = import_multicodec2.default.addPrefix(multicodecName, publicKey);
  const bufAsString = base58btc.encode(publicKeywPrefix);
  return `did:key:${bufAsString}`;
}

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/crypto/index.js
function ab2hex(ab) {
  return Array.prototype.map.call(new Uint8Array(ab), (x) => ("00" + x.toString(16)).slice(-2)).join("");
}
var ConnectCrypto = class _ConnectCrypto {
  #subtleCrypto;
  #keyPair;
  #keyPairStorage;
  #did;
  static algorithm = {
    name: "ECDSA",
    namedCurve: "P-256"
  };
  static signAlgorithm = {
    name: "ECDSA",
    namedCurve: "P-256",
    hash: "SHA-256"
  };
  constructor(keyPairStorage) {
    this.#keyPairStorage = keyPairStorage;
    this.#subtleCrypto = this.#initCrypto();
    this.#did = this.#initialize();
  }
  #initCrypto() {
    return new Promise((resolve, reject) => {
      if (typeof window === "undefined") {
        import("node:crypto").then((module) => {
          resolve(module.webcrypto.subtle);
        }).catch(reject);
      } else {
        if (!window.crypto?.subtle) {
          reject(new Error("Crypto module not available"));
        }
        resolve(window.crypto.subtle);
      }
    });
  }
  // loads the key pair from storage or generates a new one if none is stored
  async #initialize() {
    const loadedKeyPair = await this.#keyPairStorage.loadKeyPair();
    if (loadedKeyPair) {
      this.#keyPair = await this.#importKeyPair(loadedKeyPair);
      console.log("Found key pair");
    } else {
      this.#keyPair = await this.#generateECDSAKeyPair();
      console.log("Created key pair");
      await this.#keyPairStorage.saveKeyPair(await this.#exportKeyPair());
    }
    const did = await this.#parseDid();
    console.log("Connect DID:", did);
    return did;
  }
  did() {
    return this.#did;
  }
  async regenerateDid() {
    this.#keyPair = await this.#generateECDSAKeyPair();
    await this.#keyPairStorage.saveKeyPair(await this.#exportKeyPair());
  }
  async #parseDid() {
    if (!this.#keyPair) {
      throw new Error("No key pair available");
    }
    const subtleCrypto = await this.#subtleCrypto;
    const publicKeyRaw = await subtleCrypto.exportKey("raw", this.#keyPair.publicKey);
    const multicodecName = "p256-pub";
    const rawKey = rawKeyInHexfromUncompressed(ab2hex(publicKeyRaw));
    const compressedKey = compressedKeyInHexfromRaw(rawKey);
    const did = encodeDIDfromHexString(multicodecName, compressedKey);
    return did;
  }
  async #generateECDSAKeyPair() {
    const subtleCrypto = await this.#subtleCrypto;
    const keyPair = await subtleCrypto.generateKey(_ConnectCrypto.algorithm, true, ["sign", "verify"]);
    return keyPair;
  }
  async #exportKeyPair() {
    if (!this.#keyPair) {
      throw new Error("No key pair available");
    }
    const subtleCrypto = await this.#subtleCrypto;
    const jwkKeyPair = {
      publicKey: await subtleCrypto.exportKey("jwk", this.#keyPair.publicKey),
      privateKey: await subtleCrypto.exportKey("jwk", this.#keyPair.privateKey)
    };
    return jwkKeyPair;
  }
  async #importKeyPair(jwkKeyPair) {
    const subtleCrypto = await this.#subtleCrypto;
    return {
      publicKey: await subtleCrypto.importKey("jwk", jwkKeyPair.publicKey, _ConnectCrypto.algorithm, true, ["verify"]),
      privateKey: await subtleCrypto.importKey("jwk", jwkKeyPair.privateKey, _ConnectCrypto.algorithm, true, ["sign"])
    };
  }
  // eslint-disable-next-line no-unused-private-class-members
  #sign = async (...args) => {
    return (await this.#subtleCrypto).sign(...args);
  };
  // eslint-disable-next-line no-unused-private-class-members
  #verify = async (...args) => {
    return (await this.#subtleCrypto).verify(...args);
  };
  async sign(data) {
    if (this.#keyPair?.privateKey) {
      const subtleCrypto = await this.#subtleCrypto;
      const arrayBuffer = await subtleCrypto.sign(_ConnectCrypto.signAlgorithm, this.#keyPair.privateKey, data.buffer);
      return new Uint8Array(arrayBuffer);
    } else {
      throw new Error("No private key available");
    }
  }
};

export {
  ConnectCrypto
};
