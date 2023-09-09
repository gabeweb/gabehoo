/**
 * A JavaScript implementation of the SHA family of hashes, as defined in FIPS PUB 180-4 and FIPS PUB 202, as
 * well as the corresponding HMAC implementation as defined in FIPS PUB 198a
 *
 * Copyright 2008-2020 Brian Turek, 1998-2009 Paul Johnston & Contributors
 * Distributed under the BSD License
 * See http://caligatio.github.com/jsSHA/ for more information
 *
 * Two ECMAScript polyfill functions carry the following license:
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED,
 * INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
 */
!(function (n, r) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = r())
    : "function" == typeof define && define.amd
    ? define(r)
    : ((n = n || self).jsSHA = r());
})(this, function () {
  "use strict";
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function r(n, r, t, e) {
    var i,
      o,
      u,
      f = r || [0],
      w = (t = t || 0) >>> 3,
      s = -1 === e ? 3 : 0;
    for (i = 0; i < n.length; i += 1)
      (o = (u = i + w) >>> 2),
        f.length <= o && f.push(0),
        (f[o] |= n[i] << (8 * (s + e * (u % 4))));
    return { value: f, binLen: 8 * n.length + t };
  }
  function t(t, e, i) {
    switch (e) {
      case "UTF8":
      case "UTF16BE":
      case "UTF16LE":
        break;
      default:
        throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE");
    }
    switch (t) {
      case "HEX":
        return function (n, r, t) {
          return (function (n, r, t, e) {
            var i, o, u, f;
            if (0 != n.length % 2)
              throw new Error("String of HEX type must be in byte increments");
            var w = r || [0],
              s = (t = t || 0) >>> 3,
              a = -1 === e ? 3 : 0;
            for (i = 0; i < n.length; i += 2) {
              if (((o = parseInt(n.substr(i, 2), 16)), isNaN(o)))
                throw new Error(
                  "String of HEX type contains invalid characters"
                );
              for (u = (f = (i >>> 1) + s) >>> 2; w.length <= u; ) w.push(0);
              w[u] |= o << (8 * (a + e * (f % 4)));
            }
            return { value: w, binLen: 4 * n.length + t };
          })(n, r, t, i);
        };
      case "TEXT":
        return function (n, r, t) {
          return (function (n, r, t, e, i) {
            var o,
              u,
              f,
              w,
              s,
              a,
              h,
              c,
              v = 0,
              A = t || [0],
              E = (e = e || 0) >>> 3;
            if ("UTF8" === r)
              for (h = -1 === i ? 3 : 0, f = 0; f < n.length; f += 1)
                for (
                  u = [],
                    128 > (o = n.charCodeAt(f))
                      ? u.push(o)
                      : 2048 > o
                      ? (u.push(192 | (o >>> 6)), u.push(128 | (63 & o)))
                      : 55296 > o || 57344 <= o
                      ? u.push(
                          224 | (o >>> 12),
                          128 | ((o >>> 6) & 63),
                          128 | (63 & o)
                        )
                      : ((f += 1),
                        (o =
                          65536 +
                          (((1023 & o) << 10) | (1023 & n.charCodeAt(f)))),
                        u.push(
                          240 | (o >>> 18),
                          128 | ((o >>> 12) & 63),
                          128 | ((o >>> 6) & 63),
                          128 | (63 & o)
                        )),
                    w = 0;
                  w < u.length;
                  w += 1
                ) {
                  for (s = (a = v + E) >>> 2; A.length <= s; ) A.push(0);
                  (A[s] |= u[w] << (8 * (h + i * (a % 4)))), (v += 1);
                }
            else
              for (
                h = -1 === i ? 2 : 0,
                  c =
                    ("UTF16LE" === r && 1 !== i) ||
                    ("UTF16LE" !== r && 1 === i),
                  f = 0;
                f < n.length;
                f += 1
              ) {
                for (
                  o = n.charCodeAt(f),
                    !0 === c && (o = ((w = 255 & o) << 8) | (o >>> 8)),
                    s = (a = v + E) >>> 2;
                  A.length <= s;

                )
                  A.push(0);
                (A[s] |= o << (8 * (h + i * (a % 4)))), (v += 2);
              }
            return { value: A, binLen: 8 * v + e };
          })(n, e, r, t, i);
        };
      case "B64":
        return function (r, t, e) {
          return (function (r, t, e, i) {
            var o,
              u,
              f,
              w,
              s,
              a,
              h = 0,
              c = t || [0],
              v = (e = e || 0) >>> 3,
              A = -1 === i ? 3 : 0,
              E = r.indexOf("=");
            if (-1 === r.search(/^[a-zA-Z0-9=+/]+$/))
              throw new Error("Invalid character in base-64 string");
            if (((r = r.replace(/=/g, "")), -1 !== E && E < r.length))
              throw new Error("Invalid '=' found in base-64 string");
            for (o = 0; o < r.length; o += 4) {
              for (w = r.substr(o, 4), f = 0, u = 0; u < w.length; u += 1)
                f |= n.indexOf(w.charAt(u)) << (18 - 6 * u);
              for (u = 0; u < w.length - 1; u += 1) {
                for (s = (a = h + v) >>> 2; c.length <= s; ) c.push(0);
                (c[s] |=
                  ((f >>> (16 - 8 * u)) & 255) << (8 * (A + i * (a % 4)))),
                  (h += 1);
              }
            }
            return { value: c, binLen: 8 * h + e };
          })(r, t, e, i);
        };
      case "BYTES":
        return function (n, r, t) {
          return (function (n, r, t, e) {
            var i,
              o,
              u,
              f,
              w = r || [0],
              s = (t = t || 0) >>> 3,
              a = -1 === e ? 3 : 0;
            for (o = 0; o < n.length; o += 1)
              (i = n.charCodeAt(o)),
                (u = (f = o + s) >>> 2),
                w.length <= u && w.push(0),
                (w[u] |= i << (8 * (a + e * (f % 4))));
            return { value: w, binLen: 8 * n.length + t };
          })(n, r, t, i);
        };
      case "ARRAYBUFFER":
        try {
          new ArrayBuffer(0);
        } catch (n) {
          throw new Error("ARRAYBUFFER not supported by this environment");
        }
        return function (n, t, e) {
          return (function (n, t, e, i) {
            return r(new Uint8Array(n), t, e, i);
          })(n, t, e, i);
        };
      case "UINT8ARRAY":
        try {
          new Uint8Array(0);
        } catch (n) {
          throw new Error("UINT8ARRAY not supported by this environment");
        }
        return function (n, t, e) {
          return r(n, t, e, i);
        };
      default:
        throw new Error(
          "format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY"
        );
    }
  }
  function e(r, t, e, i) {
    switch (r) {
      case "HEX":
        return function (n) {
          return (function (n, r, t, e) {
            var i,
              o,
              u = "",
              f = r / 8,
              w = -1 === t ? 3 : 0;
            for (i = 0; i < f; i += 1)
              (o = n[i >>> 2] >>> (8 * (w + t * (i % 4)))),
                (u +=
                  "0123456789abcdef".charAt((o >>> 4) & 15) +
                  "0123456789abcdef".charAt(15 & o));
            return e.outputUpper ? u.toUpperCase() : u;
          })(n, t, e, i);
        };
      case "B64":
        return function (r) {
          return (function (r, t, e, i) {
            var o,
              u,
              f,
              w,
              s,
              a = "",
              h = t / 8,
              c = -1 === e ? 3 : 0;
            for (o = 0; o < h; o += 3)
              for (
                w = o + 1 < h ? r[(o + 1) >>> 2] : 0,
                  s = o + 2 < h ? r[(o + 2) >>> 2] : 0,
                  f =
                    (((r[o >>> 2] >>> (8 * (c + e * (o % 4)))) & 255) << 16) |
                    (((w >>> (8 * (c + e * ((o + 1) % 4)))) & 255) << 8) |
                    ((s >>> (8 * (c + e * ((o + 2) % 4)))) & 255),
                  u = 0;
                u < 4;
                u += 1
              )
                a +=
                  8 * o + 6 * u <= t
                    ? n.charAt((f >>> (6 * (3 - u))) & 63)
                    : i.b64Pad;
            return a;
          })(r, t, e, i);
        };
      case "BYTES":
        return function (n) {
          return (function (n, r, t) {
            var e,
              i,
              o = "",
              u = r / 8,
              f = -1 === t ? 3 : 0;
            for (e = 0; e < u; e += 1)
              (i = (n[e >>> 2] >>> (8 * (f + t * (e % 4)))) & 255),
                (o += String.fromCharCode(i));
            return o;
          })(n, t, e);
        };
      case "ARRAYBUFFER":
        try {
          new ArrayBuffer(0);
        } catch (n) {
          throw new Error("ARRAYBUFFER not supported by this environment");
        }
        return function (n) {
          return (function (n, r, t) {
            var e,
              i = r / 8,
              o = new ArrayBuffer(i),
              u = new Uint8Array(o),
              f = -1 === t ? 3 : 0;
            for (e = 0; e < i; e += 1)
              u[e] = (n[e >>> 2] >>> (8 * (f + t * (e % 4)))) & 255;
            return o;
          })(n, t, e);
        };
      case "UINT8ARRAY":
        try {
          new Uint8Array(0);
        } catch (n) {
          throw new Error("UINT8ARRAY not supported by this environment");
        }
        return function (n) {
          return (function (n, r, t) {
            var e,
              i = r / 8,
              o = -1 === t ? 3 : 0,
              u = new Uint8Array(i);
            for (e = 0; e < i; e += 1)
              u[e] = (n[e >>> 2] >>> (8 * (o + t * (e % 4)))) & 255;
            return u;
          })(n, t, e);
        };
      default:
        throw new Error(
          "format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY"
        );
    }
  }
  var i = [
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
      2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
      1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
      264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
      2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
      113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
      1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
      3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
      430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
      1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
      2428436474, 2756734187, 3204031479, 3329325298,
    ],
    o = [
      3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
      1694076839, 3204075428,
    ],
    u = [
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ],
    f = "Chosen SHA variant is not supported";
  function w(n, r) {
    var t,
      e,
      i = n.binLen >>> 3,
      o = r.binLen >>> 3,
      u = i << 3,
      f = (4 - i) << 3;
    if (i % 4 != 0) {
      for (t = 0; t < o; t += 4)
        (e = (i + t) >>> 2),
          (n.value[e] |= r.value[t >>> 2] << u),
          n.value.push(0),
          (n.value[e + 1] |= r.value[t >>> 2] >>> f);
      return (
        (n.value.length << 2) - 4 >= o + i && n.value.pop(),
        { value: n.value, binLen: n.binLen + r.binLen }
      );
    }
    return { value: n.value.concat(r.value), binLen: n.binLen + r.binLen };
  }
  function s(n) {
    var r = { outputUpper: !1, b64Pad: "=", outputLen: -1 },
      t = n || {},
      e = "Output length must be a multiple of 8";
    if (
      ((r.outputUpper = t.outputUpper || !1),
      t.b64Pad && (r.b64Pad = t.b64Pad),
      t.outputLen)
    ) {
      if (t.outputLen % 8 != 0) throw new Error(e);
      r.outputLen = t.outputLen;
    } else if (t.shakeLen) {
      if (t.shakeLen % 8 != 0) throw new Error(e);
      r.outputLen = t.shakeLen;
    }
    if ("boolean" != typeof r.outputUpper)
      throw new Error("Invalid outputUpper formatting option");
    if ("string" != typeof r.b64Pad)
      throw new Error("Invalid b64Pad formatting option");
    return r;
  }
  function a(n, r, e, i) {
    var o = n + " must include a value and format";
    if (!r) {
      if (!i) throw new Error(o);
      return i;
    }
    if (void 0 === r.value || !r.format) throw new Error(o);
    return t(r.format, r.encoding || "UTF8", e)(r.value);
  }
  var h = (function () {
      function n(n, r, t) {
        var e = t || {};
        if (
          ((this.t = r),
          (this.i = e.encoding || "UTF8"),
          (this.numRounds = e.numRounds || 1),
          isNaN(this.numRounds) ||
            this.numRounds !== parseInt(this.numRounds, 10) ||
            1 > this.numRounds)
        )
          throw new Error("numRounds must a integer >= 1");
        (this.o = n),
          (this.u = []),
          (this.s = 0),
          (this.h = !1),
          (this.v = 0),
          (this.A = !1),
          (this.l = []),
          (this.H = []);
      }
      return (
        (n.prototype.update = function (n) {
          var r,
            t = 0,
            e = this.S >>> 5,
            i = this.m(n, this.u, this.s),
            o = i.binLen,
            u = i.value,
            f = o >>> 5;
          for (r = 0; r < f; r += e)
            t + this.S <= o &&
              ((this.p = this.R(u.slice(r, r + e), this.p)), (t += this.S));
          (this.v += t),
            (this.u = u.slice(t >>> 5)),
            (this.s = o % this.S),
            (this.h = !0);
        }),
        (n.prototype.getHash = function (n, r) {
          var t,
            i,
            o = this.U,
            u = s(r);
          if (!0 === this.C) {
            if (-1 === u.outputLen)
              throw new Error("Output length must be specified in options");
            o = u.outputLen;
          }
          var f = e(n, o, this.T, u);
          if (!0 === this.A && this.F) return f(this.F(u));
          for (
            i = this.K(this.u.slice(), this.s, this.v, this.B(this.p), o),
              t = 1;
            t < this.numRounds;
            t += 1
          )
            !0 === this.C &&
              o % 32 != 0 &&
              (i[i.length - 1] &= 16777215 >>> (24 - (o % 32))),
              (i = this.K(i, o, 0, this.L(this.o), o));
          return f(i);
        }),
        (n.prototype.setHMACKey = function (n, r, e) {
          if (!0 !== this.g) throw new Error("Variant does not support HMAC");
          if (!0 === this.h)
            throw new Error("Cannot set MAC key after calling update");
          var i = t(r, (e || {}).encoding || "UTF8", this.T);
          this.k(i(n));
        }),
        (n.prototype.k = function (n) {
          var r,
            t = this.S >>> 3,
            e = t / 4 - 1;
          if (1 !== this.numRounds)
            throw new Error("Cannot set numRounds with MAC");
          if (!0 === this.A) throw new Error("MAC key already set");
          for (
            t < n.binLen / 8 &&
            (n.value = this.K(n.value, n.binLen, 0, this.L(this.o), this.U));
            n.value.length <= e;

          )
            n.value.push(0);
          for (r = 0; r <= e; r += 1)
            (this.l[r] = 909522486 ^ n.value[r]),
              (this.H[r] = 1549556828 ^ n.value[r]);
          (this.p = this.R(this.l, this.p)), (this.v = this.S), (this.A = !0);
        }),
        (n.prototype.getHMAC = function (n, r) {
          var t = s(r);
          return e(n, this.U, this.T, t)(this.Y());
        }),
        (n.prototype.Y = function () {
          var n;
          if (!1 === this.A)
            throw new Error(
              "Cannot call getHMAC without first setting MAC key"
            );
          var r = this.K(
            this.u.slice(),
            this.s,
            this.v,
            this.B(this.p),
            this.U
          );
          return (
            (n = this.R(this.H, this.L(this.o))),
            (n = this.K(r, this.U, this.S, n, this.U))
          );
        }),
        n
      );
    })(),
    c = function (n, r) {
      return (c =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var t in r) r.hasOwnProperty(t) && (n[t] = r[t]);
        })(n, r);
    };
  function v(n, r) {
    function t() {
      this.constructor = n;
    }
    c(n, r),
      (n.prototype =
        null === r ? Object.create(r) : ((t.prototype = r.prototype), new t()));
  }
  function A(n, r) {
    return (n << r) | (n >>> (32 - r));
  }
  function E(n, r) {
    return (n >>> r) | (n << (32 - r));
  }
  function l(n, r) {
    return n >>> r;
  }
  function b(n, r, t) {
    return n ^ r ^ t;
  }
  function H(n, r, t) {
    return (n & r) ^ (~n & t);
  }
  function S(n, r, t) {
    return (n & r) ^ (n & t) ^ (r & t);
  }
  function d(n) {
    return E(n, 2) ^ E(n, 13) ^ E(n, 22);
  }
  function m(n, r) {
    var t = (65535 & n) + (65535 & r);
    return (
      ((65535 & ((n >>> 16) + (r >>> 16) + (t >>> 16))) << 16) | (65535 & t)
    );
  }
  function p(n, r, t, e) {
    var i = (65535 & n) + (65535 & r) + (65535 & t) + (65535 & e);
    return (
      ((65535 &
        ((n >>> 16) + (r >>> 16) + (t >>> 16) + (e >>> 16) + (i >>> 16))) <<
        16) |
      (65535 & i)
    );
  }
  function y(n, r, t, e, i) {
    var o = (65535 & n) + (65535 & r) + (65535 & t) + (65535 & e) + (65535 & i);
    return (
      ((65535 &
        ((n >>> 16) +
          (r >>> 16) +
          (t >>> 16) +
          (e >>> 16) +
          (i >>> 16) +
          (o >>> 16))) <<
        16) |
      (65535 & o)
    );
  }
  function R(n) {
    return E(n, 7) ^ E(n, 18) ^ l(n, 3);
  }
  function U(n) {
    return E(n, 6) ^ E(n, 11) ^ E(n, 25);
  }
  function C(n) {
    return [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  }
  function T(n, r) {
    var t,
      e,
      i,
      o,
      u,
      f,
      w,
      s = [];
    for (
      t = r[0], e = r[1], i = r[2], o = r[3], u = r[4], w = 0;
      w < 80;
      w += 1
    )
      (s[w] =
        w < 16 ? n[w] : A(s[w - 3] ^ s[w - 8] ^ s[w - 14] ^ s[w - 16], 1)),
        (f =
          w < 20
            ? y(A(t, 5), H(e, i, o), u, 1518500249, s[w])
            : w < 40
            ? y(A(t, 5), b(e, i, o), u, 1859775393, s[w])
            : w < 60
            ? y(A(t, 5), S(e, i, o), u, 2400959708, s[w])
            : y(A(t, 5), b(e, i, o), u, 3395469782, s[w])),
        (u = o),
        (o = i),
        (i = A(e, 30)),
        (e = t),
        (t = f);
    return (
      (r[0] = m(t, r[0])),
      (r[1] = m(e, r[1])),
      (r[2] = m(i, r[2])),
      (r[3] = m(o, r[3])),
      (r[4] = m(u, r[4])),
      r
    );
  }
  function F(n, r, t, e) {
    for (var i, o = 15 + (((r + 65) >>> 9) << 4), u = r + t; n.length <= o; )
      n.push(0);
    for (
      n[r >>> 5] |= 128 << (24 - (r % 32)),
        n[o] = 4294967295 & u,
        n[o - 1] = (u / 4294967296) | 0,
        i = 0;
      i < n.length;
      i += 16
    )
      e = T(n.slice(i, i + 16), e);
    return e;
  }
  var K = (function (n) {
    function r(r, e, i) {
      var o = this;
      if ("SHA-1" !== r) throw new Error(f);
      var u = i || {};
      return (
        ((o = n.call(this, r, e, i) || this).g = !0),
        (o.F = o.Y),
        (o.T = -1),
        (o.m = t(o.t, o.i, o.T)),
        (o.R = T),
        (o.B = function (n) {
          return n.slice();
        }),
        (o.L = C),
        (o.K = F),
        (o.p = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
        (o.S = 512),
        (o.U = 160),
        (o.C = !1),
        u.hmacKey && o.k(a("hmacKey", u.hmacKey, o.T)),
        o
      );
    }
    return v(r, n), r;
  })(h);
  function B(n) {
    return "SHA-224" == n ? o.slice() : u.slice();
  }
  function L(n, r) {
    var t,
      e,
      o,
      u,
      f,
      w,
      s,
      a,
      h,
      c,
      v,
      A,
      b = [];
    for (
      t = r[0],
        e = r[1],
        o = r[2],
        u = r[3],
        f = r[4],
        w = r[5],
        s = r[6],
        a = r[7],
        v = 0;
      v < 64;
      v += 1
    )
      (b[v] =
        v < 16
          ? n[v]
          : p(
              E((A = b[v - 2]), 17) ^ E(A, 19) ^ l(A, 10),
              b[v - 7],
              R(b[v - 15]),
              b[v - 16]
            )),
        (h = y(a, U(f), H(f, w, s), i[v], b[v])),
        (c = m(d(t), S(t, e, o))),
        (a = s),
        (s = w),
        (w = f),
        (f = m(u, h)),
        (u = o),
        (o = e),
        (e = t),
        (t = m(h, c));
    return (
      (r[0] = m(t, r[0])),
      (r[1] = m(e, r[1])),
      (r[2] = m(o, r[2])),
      (r[3] = m(u, r[3])),
      (r[4] = m(f, r[4])),
      (r[5] = m(w, r[5])),
      (r[6] = m(s, r[6])),
      (r[7] = m(a, r[7])),
      r
    );
  }
  var g = (function (n) {
      function r(r, e, i) {
        var o = this;
        if (!1 == ("SHA-224" === r || "SHA-256" === r)) throw new Error(f);
        var u = i || {};
        return (
          ((o = n.call(this, r, e, i) || this).F = o.Y),
          (o.g = !0),
          (o.T = -1),
          (o.m = t(o.t, o.i, o.T)),
          (o.R = L),
          (o.B = function (n) {
            return n.slice();
          }),
          (o.L = B),
          (o.K = function (n, t, e, i) {
            return (function (n, r, t, e, i) {
              for (
                var o, u = 15 + (((r + 65) >>> 9) << 4), f = r + t;
                n.length <= u;

              )
                n.push(0);
              for (
                n[r >>> 5] |= 128 << (24 - (r % 32)),
                  n[u] = 4294967295 & f,
                  n[u - 1] = (f / 4294967296) | 0,
                  o = 0;
                o < n.length;
                o += 16
              )
                e = L(n.slice(o, o + 16), e);
              return "SHA-224" === i
                ? [e[0], e[1], e[2], e[3], e[4], e[5], e[6]]
                : e;
            })(n, t, e, i, r);
          }),
          (o.p = B(r)),
          (o.S = 512),
          (o.U = "SHA-224" === r ? 224 : 256),
          (o.C = !1),
          u.hmacKey && o.k(a("hmacKey", u.hmacKey, o.T)),
          o
        );
      }
      return v(r, n), r;
    })(h),
    k = function (n, r) {
      (this.N = n), (this.I = r);
    };
  function Y(n, r) {
    var t;
    return r > 32
      ? ((t = 64 - r),
        new k((n.I << r) | (n.N >>> t), (n.N << r) | (n.I >>> t)))
      : 0 !== r
      ? ((t = 32 - r),
        new k((n.N << r) | (n.I >>> t), (n.I << r) | (n.N >>> t)))
      : n;
  }
  function N(n, r) {
    var t;
    return r < 32
      ? ((t = 32 - r),
        new k((n.N >>> r) | (n.I << t), (n.I >>> r) | (n.N << t)))
      : ((t = 64 - r),
        new k((n.I >>> r) | (n.N << t), (n.N >>> r) | (n.I << t)));
  }
  function I(n, r) {
    return new k(n.N >>> r, (n.I >>> r) | (n.N << (32 - r)));
  }
  function M(n, r, t) {
    return new k((n.N & r.N) ^ (~n.N & t.N), (n.I & r.I) ^ (~n.I & t.I));
  }
  function X(n, r, t) {
    return new k(
      (n.N & r.N) ^ (n.N & t.N) ^ (r.N & t.N),
      (n.I & r.I) ^ (n.I & t.I) ^ (r.I & t.I)
    );
  }
  function z(n) {
    var r = N(n, 28),
      t = N(n, 34),
      e = N(n, 39);
    return new k(r.N ^ t.N ^ e.N, r.I ^ t.I ^ e.I);
  }
  function O(n, r) {
    var t, e;
    t = (65535 & n.I) + (65535 & r.I);
    var i =
      ((65535 & (e = (n.I >>> 16) + (r.I >>> 16) + (t >>> 16))) << 16) |
      (65535 & t);
    return (
      (t = (65535 & n.N) + (65535 & r.N) + (e >>> 16)),
      (e = (n.N >>> 16) + (r.N >>> 16) + (t >>> 16)),
      new k(((65535 & e) << 16) | (65535 & t), i)
    );
  }
  function j(n, r, t, e) {
    var i, o;
    i = (65535 & n.I) + (65535 & r.I) + (65535 & t.I) + (65535 & e.I);
    var u =
      ((65535 &
        (o =
          (n.I >>> 16) +
          (r.I >>> 16) +
          (t.I >>> 16) +
          (e.I >>> 16) +
          (i >>> 16))) <<
        16) |
      (65535 & i);
    return (
      (i =
        (65535 & n.N) +
        (65535 & r.N) +
        (65535 & t.N) +
        (65535 & e.N) +
        (o >>> 16)),
      (o =
        (n.N >>> 16) + (r.N >>> 16) + (t.N >>> 16) + (e.N >>> 16) + (i >>> 16)),
      new k(((65535 & o) << 16) | (65535 & i), u)
    );
  }
  function _(n, r, t, e, i) {
    var o, u;
    o =
      (65535 & n.I) +
      (65535 & r.I) +
      (65535 & t.I) +
      (65535 & e.I) +
      (65535 & i.I);
    var f =
      ((65535 &
        (u =
          (n.I >>> 16) +
          (r.I >>> 16) +
          (t.I >>> 16) +
          (e.I >>> 16) +
          (i.I >>> 16) +
          (o >>> 16))) <<
        16) |
      (65535 & o);
    return (
      (o =
        (65535 & n.N) +
        (65535 & r.N) +
        (65535 & t.N) +
        (65535 & e.N) +
        (65535 & i.N) +
        (u >>> 16)),
      (u =
        (n.N >>> 16) +
        (r.N >>> 16) +
        (t.N >>> 16) +
        (e.N >>> 16) +
        (i.N >>> 16) +
        (o >>> 16)),
      new k(((65535 & u) << 16) | (65535 & o), f)
    );
  }
  function P(n, r) {
    return new k(n.N ^ r.N, n.I ^ r.I);
  }
  function x(n) {
    var r = N(n, 1),
      t = N(n, 8),
      e = I(n, 7);
    return new k(r.N ^ t.N ^ e.N, r.I ^ t.I ^ e.I);
  }
  function V(n) {
    var r = N(n, 14),
      t = N(n, 18),
      e = N(n, 41);
    return new k(r.N ^ t.N ^ e.N, r.I ^ t.I ^ e.I);
  }
  var Z = [
    new k(i[0], 3609767458),
    new k(i[1], 602891725),
    new k(i[2], 3964484399),
    new k(i[3], 2173295548),
    new k(i[4], 4081628472),
    new k(i[5], 3053834265),
    new k(i[6], 2937671579),
    new k(i[7], 3664609560),
    new k(i[8], 2734883394),
    new k(i[9], 1164996542),
    new k(i[10], 1323610764),
    new k(i[11], 3590304994),
    new k(i[12], 4068182383),
    new k(i[13], 991336113),
    new k(i[14], 633803317),
    new k(i[15], 3479774868),
    new k(i[16], 2666613458),
    new k(i[17], 944711139),
    new k(i[18], 2341262773),
    new k(i[19], 2007800933),
    new k(i[20], 1495990901),
    new k(i[21], 1856431235),
    new k(i[22], 3175218132),
    new k(i[23], 2198950837),
    new k(i[24], 3999719339),
    new k(i[25], 766784016),
    new k(i[26], 2566594879),
    new k(i[27], 3203337956),
    new k(i[28], 1034457026),
    new k(i[29], 2466948901),
    new k(i[30], 3758326383),
    new k(i[31], 168717936),
    new k(i[32], 1188179964),
    new k(i[33], 1546045734),
    new k(i[34], 1522805485),
    new k(i[35], 2643833823),
    new k(i[36], 2343527390),
    new k(i[37], 1014477480),
    new k(i[38], 1206759142),
    new k(i[39], 344077627),
    new k(i[40], 1290863460),
    new k(i[41], 3158454273),
    new k(i[42], 3505952657),
    new k(i[43], 106217008),
    new k(i[44], 3606008344),
    new k(i[45], 1432725776),
    new k(i[46], 1467031594),
    new k(i[47], 851169720),
    new k(i[48], 3100823752),
    new k(i[49], 1363258195),
    new k(i[50], 3750685593),
    new k(i[51], 3785050280),
    new k(i[52], 3318307427),
    new k(i[53], 3812723403),
    new k(i[54], 2003034995),
    new k(i[55], 3602036899),
    new k(i[56], 1575990012),
    new k(i[57], 1125592928),
    new k(i[58], 2716904306),
    new k(i[59], 442776044),
    new k(i[60], 593698344),
    new k(i[61], 3733110249),
    new k(i[62], 2999351573),
    new k(i[63], 3815920427),
    new k(3391569614, 3928383900),
    new k(3515267271, 566280711),
    new k(3940187606, 3454069534),
    new k(4118630271, 4000239992),
    new k(116418474, 1914138554),
    new k(174292421, 2731055270),
    new k(289380356, 3203993006),
    new k(460393269, 320620315),
    new k(685471733, 587496836),
    new k(852142971, 1086792851),
    new k(1017036298, 365543100),
    new k(1126000580, 2618297676),
    new k(1288033470, 3409855158),
    new k(1501505948, 4234509866),
    new k(1607167915, 987167468),
    new k(1816402316, 1246189591),
  ];
  function q(n) {
    return "SHA-384" === n
      ? [
          new k(3418070365, o[0]),
          new k(1654270250, o[1]),
          new k(2438529370, o[2]),
          new k(355462360, o[3]),
          new k(1731405415, o[4]),
          new k(41048885895, o[5]),
          new k(3675008525, o[6]),
          new k(1203062813, o[7]),
        ]
      : [
          new k(u[0], 4089235720),
          new k(u[1], 2227873595),
          new k(u[2], 4271175723),
          new k(u[3], 1595750129),
          new k(u[4], 2917565137),
          new k(u[5], 725511199),
          new k(u[6], 4215389547),
          new k(u[7], 327033209),
        ];
  }
  function D(n, r) {
    var t,
      e,
      i,
      o,
      u,
      f,
      w,
      s,
      a,
      h,
      c,
      v,
      A,
      E,
      l,
      b,
      H = [];
    for (
      t = r[0],
        e = r[1],
        i = r[2],
        o = r[3],
        u = r[4],
        f = r[5],
        w = r[6],
        s = r[7],
        c = 0;
      c < 80;
      c += 1
    )
      c < 16
        ? ((v = 2 * c), (H[c] = new k(n[v], n[v + 1])))
        : (H[c] = j(
            ((A = H[c - 2]),
            (E = void 0),
            (l = void 0),
            (b = void 0),
            (E = N(A, 19)),
            (l = N(A, 61)),
            (b = I(A, 6)),
            new k(E.N ^ l.N ^ b.N, E.I ^ l.I ^ b.I)),
            H[c - 7],
            x(H[c - 15]),
            H[c - 16]
          )),
        (a = _(s, V(u), M(u, f, w), Z[c], H[c])),
        (h = O(z(t), X(t, e, i))),
        (s = w),
        (w = f),
        (f = u),
        (u = O(o, a)),
        (o = i),
        (i = e),
        (e = t),
        (t = O(a, h));
    return (
      (r[0] = O(t, r[0])),
      (r[1] = O(e, r[1])),
      (r[2] = O(i, r[2])),
      (r[3] = O(o, r[3])),
      (r[4] = O(u, r[4])),
      (r[5] = O(f, r[5])),
      (r[6] = O(w, r[6])),
      (r[7] = O(s, r[7])),
      r
    );
  }
  var G = (function (n) {
      function r(r, e, i) {
        var o = this;
        if (!1 == ("SHA-384" === r || "SHA-512" === r)) throw new Error(f);
        var u = i || {};
        return (
          ((o = n.call(this, r, e, i) || this).F = o.Y),
          (o.g = !0),
          (o.T = -1),
          (o.m = t(o.t, o.i, o.T)),
          (o.R = D),
          (o.B = function (n) {
            return n.slice();
          }),
          (o.L = q),
          (o.K = function (n, t, e, i) {
            return (function (n, r, t, e, i) {
              for (
                var o, u = 31 + (((r + 129) >>> 10) << 5), f = r + t;
                n.length <= u;

              )
                n.push(0);
              for (
                n[r >>> 5] |= 128 << (24 - (r % 32)),
                  n[u] = 4294967295 & f,
                  n[u - 1] = (f / 4294967296) | 0,
                  o = 0;
                o < n.length;
                o += 32
              )
                e = D(n.slice(o, o + 32), e);
              return "SHA-384" === i
                ? [
                    (e = e)[0].N,
                    e[0].I,
                    e[1].N,
                    e[1].I,
                    e[2].N,
                    e[2].I,
                    e[3].N,
                    e[3].I,
                    e[4].N,
                    e[4].I,
                    e[5].N,
                    e[5].I,
                  ]
                : [
                    e[0].N,
                    e[0].I,
                    e[1].N,
                    e[1].I,
                    e[2].N,
                    e[2].I,
                    e[3].N,
                    e[3].I,
                    e[4].N,
                    e[4].I,
                    e[5].N,
                    e[5].I,
                    e[6].N,
                    e[6].I,
                    e[7].N,
                    e[7].I,
                  ];
            })(n, t, e, i, r);
          }),
          (o.p = q(r)),
          (o.S = 1024),
          (o.U = "SHA-384" === r ? 384 : 512),
          (o.C = !1),
          u.hmacKey && o.k(a("hmacKey", u.hmacKey, o.T)),
          o
        );
      }
      return v(r, n), r;
    })(h),
    J = [
      new k(0, 1),
      new k(0, 32898),
      new k(2147483648, 32906),
      new k(2147483648, 2147516416),
      new k(0, 32907),
      new k(0, 2147483649),
      new k(2147483648, 2147516545),
      new k(2147483648, 32777),
      new k(0, 138),
      new k(0, 136),
      new k(0, 2147516425),
      new k(0, 2147483658),
      new k(0, 2147516555),
      new k(2147483648, 139),
      new k(2147483648, 32905),
      new k(2147483648, 32771),
      new k(2147483648, 32770),
      new k(2147483648, 128),
      new k(0, 32778),
      new k(2147483648, 2147483658),
      new k(2147483648, 2147516545),
      new k(2147483648, 32896),
      new k(0, 2147483649),
      new k(2147483648, 2147516424),
    ],
    Q = [
      [0, 36, 3, 41, 18],
      [1, 44, 10, 45, 2],
      [62, 6, 43, 15, 61],
      [28, 55, 25, 21, 56],
      [27, 20, 39, 8, 14],
    ];
  function W(n) {
    var r,
      t = [];
    for (r = 0; r < 5; r += 1)
      t[r] = [new k(0, 0), new k(0, 0), new k(0, 0), new k(0, 0), new k(0, 0)];
    return t;
  }
  function $(n) {
    var r,
      t = [];
    for (r = 0; r < 5; r += 1) t[r] = n[r].slice();
    return t;
  }
  function nn(n, r) {
    var t,
      e,
      i,
      o,
      u,
      f,
      w,
      s,
      a,
      h = [],
      c = [];
    if (null !== n)
      for (e = 0; e < n.length; e += 2)
        r[(e >>> 1) % 5][((e >>> 1) / 5) | 0] = P(
          r[(e >>> 1) % 5][((e >>> 1) / 5) | 0],
          new k(n[e + 1], n[e])
        );
    for (t = 0; t < 24; t += 1) {
      for (o = W(), e = 0; e < 5; e += 1)
        h[e] =
          ((u = r[e][0]),
          (f = r[e][1]),
          (w = r[e][2]),
          (s = r[e][3]),
          (a = r[e][4]),
          new k(u.N ^ f.N ^ w.N ^ s.N ^ a.N, u.I ^ f.I ^ w.I ^ s.I ^ a.I));
      for (e = 0; e < 5; e += 1) c[e] = P(h[(e + 4) % 5], Y(h[(e + 1) % 5], 1));
      for (e = 0; e < 5; e += 1)
        for (i = 0; i < 5; i += 1) r[e][i] = P(r[e][i], c[e]);
      for (e = 0; e < 5; e += 1)
        for (i = 0; i < 5; i += 1)
          o[i][(2 * e + 3 * i) % 5] = Y(r[e][i], Q[e][i]);
      for (e = 0; e < 5; e += 1)
        for (i = 0; i < 5; i += 1)
          r[e][i] = P(
            o[e][i],
            new k(
              ~o[(e + 1) % 5][i].N & o[(e + 2) % 5][i].N,
              ~o[(e + 1) % 5][i].I & o[(e + 2) % 5][i].I
            )
          );
      r[0][0] = P(r[0][0], J[t]);
    }
    return r;
  }
  function rn(n) {
    var r,
      t,
      e = 0,
      i = [0, 0],
      o = [4294967295 & n, (n / 4294967296) & 2097151];
    for (r = 6; r >= 0; r--)
      (0 === (t = (o[r >> 2] >>> (8 * r)) & 255) && 0 === e) ||
        ((i[(e + 1) >> 2] |= t << (8 * (e + 1))), (e += 1));
    return (
      (e = 0 !== e ? e : 1),
      (i[0] |= e),
      { value: e + 1 > 4 ? i : [i[0]], binLen: 8 + 8 * e }
    );
  }
  function tn(n) {
    return w(rn(n.binLen), n);
  }
  function en(n, r) {
    var t,
      e = rn(r),
      i = r >>> 2,
      o = (i - ((e = w(e, n)).value.length % i)) % i;
    for (t = 0; t < o; t++) e.value.push(0);
    return e.value;
  }
  var on = (function (n) {
    function r(r, e, i) {
      var o = this,
        u = 6,
        w = 0,
        s = i || {};
      if (1 !== (o = n.call(this, r, e, i) || this).numRounds) {
        if (s.kmacKey || s.hmacKey)
          throw new Error("Cannot set numRounds with MAC");
        if ("CSHAKE128" === o.o || "CSHAKE256" === o.o)
          throw new Error("Cannot set numRounds for CSHAKE variants");
      }
      switch (
        ((o.T = 1),
        (o.m = t(o.t, o.i, o.T)),
        (o.R = nn),
        (o.B = $),
        (o.L = W),
        (o.p = W()),
        (o.C = !1),
        r)
      ) {
        case "SHA3-224":
          (o.S = w = 1152), (o.U = 224), (o.g = !0), (o.F = o.Y);
          break;
        case "SHA3-256":
          (o.S = w = 1088), (o.U = 256), (o.g = !0), (o.F = o.Y);
          break;
        case "SHA3-384":
          (o.S = w = 832), (o.U = 384), (o.g = !0), (o.F = o.Y);
          break;
        case "SHA3-512":
          (o.S = w = 576), (o.U = 512), (o.g = !0), (o.F = o.Y);
          break;
        case "SHAKE128":
          (u = 31),
            (o.S = w = 1344),
            (o.U = -1),
            (o.C = !0),
            (o.g = !1),
            (o.F = null);
          break;
        case "SHAKE256":
          (u = 31),
            (o.S = w = 1088),
            (o.U = -1),
            (o.C = !0),
            (o.g = !1),
            (o.F = null);
          break;
        case "KMAC128":
          (u = 4),
            (o.S = w = 1344),
            o.M(i),
            (o.U = -1),
            (o.C = !0),
            (o.g = !1),
            (o.F = o.X);
          break;
        case "KMAC256":
          (u = 4),
            (o.S = w = 1088),
            o.M(i),
            (o.U = -1),
            (o.C = !0),
            (o.g = !1),
            (o.F = o.X);
          break;
        case "CSHAKE128":
          (o.S = w = 1344),
            (u = o.O(i)),
            (o.U = -1),
            (o.C = !0),
            (o.g = !1),
            (o.F = null);
          break;
        case "CSHAKE256":
          (o.S = w = 1088),
            (u = o.O(i)),
            (o.U = -1),
            (o.C = !0),
            (o.g = !1),
            (o.F = null);
          break;
        default:
          throw new Error(f);
      }
      return (
        (o.K = function (n, r, t, e, i) {
          return (function (n, r, t, e, i, o, u) {
            var f,
              w,
              s = 0,
              a = [],
              h = i >>> 5,
              c = r >>> 5;
            for (f = 0; f < c && r >= i; f += h)
              (e = nn(n.slice(f, f + h), e)), (r -= i);
            for (n = n.slice(f), r %= i; n.length < h; ) n.push(0);
            for (
              n[(f = r >>> 3) >> 2] ^= o << ((f % 4) * 8),
                n[h - 1] ^= 2147483648,
                e = nn(n, e);
              32 * a.length < u &&
              ((w = e[s % 5][(s / 5) | 0]), a.push(w.I), !(32 * a.length >= u));

            )
              a.push(w.N), 0 == (64 * (s += 1)) % i && (nn(null, e), (s = 0));
            return a;
          })(n, r, 0, e, w, u, i);
        }),
        s.hmacKey && o.k(a("hmacKey", s.hmacKey, o.T)),
        o
      );
    }
    return (
      v(r, n),
      (r.prototype.O = function (n, r) {
        var t = (function (n) {
          var r = n || {};
          return {
            funcName: a("funcName", r.funcName, 1, { value: [], binLen: 0 }),
            customization: a("Customization", r.customization, 1, {
              value: [],
              binLen: 0,
            }),
          };
        })(n || {});
        r && (t.funcName = r);
        var e = w(tn(t.funcName), tn(t.customization));
        if (0 !== t.customization.binLen || 0 !== t.funcName.binLen) {
          for (
            var i = en(e, this.S >>> 3), o = 0;
            o < i.length;
            o += this.S >>> 5
          )
            (this.p = this.R(i.slice(o, o + (this.S >>> 5)), this.p)),
              (this.v += this.S);
          return 4;
        }
        return 31;
      }),
      (r.prototype.M = function (n) {
        var r = (function (n) {
          var r = n || {};
          return {
            kmacKey: a("kmacKey", r.kmacKey, 1),
            funcName: { value: [1128353099], binLen: 32 },
            customization: a("Customization", r.customization, 1, {
              value: [],
              binLen: 0,
            }),
          };
        })(n || {});
        this.O(n, r.funcName);
        for (
          var t = en(tn(r.kmacKey), this.S >>> 3), e = 0;
          e < t.length;
          e += this.S >>> 5
        )
          (this.p = this.R(t.slice(e, e + (this.S >>> 5)), this.p)),
            (this.v += this.S);
        this.A = !0;
      }),
      (r.prototype.X = function (n) {
        var r = w(
          { value: this.u.slice(), binLen: this.s },
          (function (n) {
            var r,
              t,
              e = 0,
              i = [0, 0],
              o = [4294967295 & n, (n / 4294967296) & 2097151];
            for (r = 6; r >= 0; r--)
              (0 === (t = (o[r >> 2] >>> (8 * r)) & 255) && 0 === e) ||
                ((i[e >> 2] |= t << (8 * e)), (e += 1));
            return (
              (i[(e = 0 !== e ? e : 1) >> 2] |= e << (8 * e)),
              { value: e + 1 > 4 ? i : [i[0]], binLen: 8 + 8 * e }
            );
          })(n.outputLen)
        );
        return this.K(r.value, r.binLen, this.v, this.B(this.p), n.outputLen);
      }),
      r
    );
  })(h);
  return (function () {
    function n(n, r, t) {
      if ("SHA-1" == n) this.j = new K(n, r, t);
      else if ("SHA-224" == n || "SHA-256" == n) this.j = new g(n, r, t);
      else if ("SHA-384" == n || "SHA-512" == n) this.j = new G(n, r, t);
      else {
        if (
          "SHA3-224" != n &&
          "SHA3-256" != n &&
          "SHA3-384" != n &&
          "SHA3-512" != n &&
          "SHAKE128" != n &&
          "SHAKE256" != n &&
          "CSHAKE128" != n &&
          "CSHAKE256" != n &&
          "KMAC128" != n &&
          "KMAC256" != n
        )
          throw new Error(f);
        this.j = new on(n, r, t);
      }
    }
    return (
      (n.prototype.update = function (n) {
        this.j.update(n);
      }),
      (n.prototype.getHash = function (n, r) {
        return this.j.getHash(n, r);
      }),
      (n.prototype.setHMACKey = function (n, r, t) {
        this.j.setHMACKey(n, r, t);
      }),
      (n.prototype.getHMAC = function (n, r) {
        return this.j.getHMAC(n, r);
      }),
      n
    );
  })();
});
