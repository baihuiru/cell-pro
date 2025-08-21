(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.cell-pro-hidden{display:none!important}.cell-pro-visible{display:block!important}@media (max-width: 768px){.cell-pro-mobile-hidden{display:none!important}}@media (min-width: 769px){.cell-pro-desktop-hidden{display:none!important}}.cell-pro-share-button-container[data-v-20b7288b]{display:inline-block}.cell-pro-help-link-container[data-v-0690c573]{position:relative;display:inline-block}.cell-pro-help-link[data-v-0690c573]{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border:none;border-radius:6px;font-size:14px;font-weight:500;text-decoration:none;cursor:pointer;transition:all .2s ease;background:var(--help-link-bg, #007bff);color:var(--help-link-color, white);border:1px solid var(--help-link-border, #007bff)}.cell-pro-help-link[data-v-0690c573]:hover:not(.disabled){background:var(--help-link-hover-bg, #0056b3);border-color:var(--help-link-hover-border, #0056b3);transform:translateY(-1px);box-shadow:0 4px 8px #007bff4d}.cell-pro-help-link[data-v-0690c573]:active:not(.disabled){transform:translateY(0);box-shadow:0 2px 4px #007bff4d}.cell-pro-help-link.disabled[data-v-0690c573]{opacity:.6;cursor:not-allowed;transform:none;box-shadow:none}.cell-pro-help-link.secondary[data-v-0690c573]{background:var(--help-link-secondary-bg, #6c757d);border-color:var(--help-link-secondary-border, #6c757d)}.cell-pro-help-link.outline[data-v-0690c573]{background:transparent;color:var(--help-link-outline-color, #007bff);border-color:var(--help-link-outline-border, #007bff)}.cell-pro-help-link.outline[data-v-0690c573]:hover:not(.disabled){background:var(--help-link-outline-hover-bg, #007bff);color:#fff}.cell-pro-help-link.text[data-v-0690c573]{background:transparent;border:none;color:var(--help-link-text-color, #007bff);padding:4px 8px}.cell-pro-help-link.text[data-v-0690c573]:hover:not(.disabled){background:var(--help-link-text-hover-bg, rgba(0, 123, 255, .1));transform:none;box-shadow:none}.cell-pro-help-link.small[data-v-0690c573]{padding:6px 12px;font-size:12px}.cell-pro-help-link.large[data-v-0690c573]{padding:12px 20px;font-size:16px}.help-icon[data-v-0690c573]{width:16px;height:16px;flex-shrink:0}.cell-pro-external-arrow[data-v-0690c573]{width:14px;height:14px;flex-shrink:0;opacity:.7}.cell-pro-tooltip[data-v-0690c573]{position:absolute;padding:8px 12px;border-radius:4px;font-size:12px;white-space:nowrap;z-index:1000;background:#333;color:#fff;animation:fadeIn-0690c573 .2s ease}.cell-pro-tooltip.top[data-v-0690c573]{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.cell-pro-tooltip.bottom[data-v-0690c573]{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.cell-pro-tooltip.left[data-v-0690c573]{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}.cell-pro-tooltip.right[data-v-0690c573]{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}.cell-pro-tooltip[data-v-0690c573]:after{content:"";position:absolute;border:4px solid transparent}.cell-pro-tooltip.top[data-v-0690c573]:after{top:100%;left:50%;transform:translate(-50%);border-top-color:#333}.cell-pro-tooltip.bottom[data-v-0690c573]:after{bottom:100%;left:50%;transform:translate(-50%);border-bottom-color:#333}.cell-pro-tooltip.left[data-v-0690c573]:after{left:100%;top:50%;transform:translateY(-50%);border-left-color:#333}.cell-pro-tooltip.right[data-v-0690c573]:after{right:100%;top:50%;transform:translateY(-50%);border-right-color:#333}@keyframes fadeIn-0690c573{0%{opacity:0;transform:translate(-50%) translateY(10px)}to{opacity:1;transform:translate(-50%) translateY(0)}}[data-v-0690c573]:host{--help-link-bg: #007bff;--help-link-color: white;--help-link-border: #007bff;--help-link-hover-bg: #0056b3;--help-link-hover-border: #0056b3;--help-link-secondary-bg: #6c757d;--help-link-secondary-border: #6c757d;--help-link-outline-color: #007bff;--help-link-outline-border: #007bff;--help-link-outline-hover-bg: #007bff;--help-link-text-color: #007bff;--help-link-text-hover-bg: rgba(0, 123, 255, .1)}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { inject as ce, ref as U, h as Ce, getCurrentInstance as Kr, nextTick as Yr, reactive as Ee, defineComponent as k, createVNode as v, Fragment as Qr, Comment as Ha, Text as Na, provide as pe, computed as x, shallowRef as Z, watch as se, unref as Me, watchEffect as xt, onBeforeUnmount as za, triggerRef as Ra, onBeforeMount as La, onMounted as bn, onUpdated as Da, Teleport as Jr, onUnmounted as Fa, TransitionGroup as Zr, render as Jn, toRaw as Ba, openBlock as H, createBlock as Ge, withCtx as Xe, renderSlot as Va, resolveComponent as Zn, createElementVNode as W, createTextVNode as Wa, toDisplayString as ut, createElementBlock as Y, normalizeClass as Lt, createCommentVNode as rt, defineCustomElement as Ga } from "vue";
function z(e, t) {
  Xa(e) && (e = "100%");
  var n = Ua(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ot(e) {
  return Math.min(1, Math.max(0, e));
}
function Xa(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Ua(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function eo(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function at(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function me(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function qa(e, t, n) {
  return {
    r: z(e, 255) * 255,
    g: z(t, 255) * 255,
    b: z(n, 255) * 255
  };
}
function er(e, t, n) {
  e = z(e, 255), t = z(t, 255), n = z(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = 0, l = (r + o) / 2;
  if (r === o)
    i = 0, a = 0;
  else {
    var c = r - o;
    switch (i = l > 0.5 ? c / (2 - r - o) : c / (r + o), r) {
      case e:
        a = (t - n) / c + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / c + 2;
        break;
      case n:
        a = (e - t) / c + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: i, l };
}
function Dt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ka(e, t, n) {
  var r, o, a;
  if (e = z(e, 360), t = z(t, 100), n = z(n, 100), t === 0)
    o = n, a = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = Dt(l, i, e + 1 / 3), o = Dt(l, i, e), a = Dt(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function Jt(e, t, n) {
  e = z(e, 255), t = z(t, 255), n = z(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, i = r, l = r - o, c = r === 0 ? 0 : l / r;
  if (r === o)
    a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: c, v: i };
}
function Ya(e, t, n) {
  e = z(e, 360) * 6, t = z(t, 100), n = z(n, 100);
  var r = Math.floor(e), o = e - r, a = n * (1 - t), i = n * (1 - o * t), l = n * (1 - (1 - o) * t), c = r % 6, s = [n, i, a, a, l, n][c], f = [l, n, n, i, a, a][c], u = [a, a, l, n, n, i][c];
  return { r: s * 255, g: f * 255, b: u * 255 };
}
function Zt(e, t, n, r) {
  var o = [
    me(Math.round(e).toString(16)),
    me(Math.round(t).toString(16)),
    me(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Qa(e, t, n, r, o) {
  var a = [
    me(Math.round(e).toString(16)),
    me(Math.round(t).toString(16)),
    me(Math.round(n).toString(16)),
    me(Ja(r))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Ja(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function tr(e) {
  return G(e) / 255;
}
function G(e) {
  return parseInt(e, 16);
}
function Za(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var en = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function $e(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, i = !1, l = !1;
  return typeof e == "string" && (e = ni(e)), typeof e == "object" && (ie(e.r) && ie(e.g) && ie(e.b) ? (t = qa(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : ie(e.h) && ie(e.s) && ie(e.v) ? (r = at(e.s), o = at(e.v), t = Ya(e.h, r, o), i = !0, l = "hsv") : ie(e.h) && ie(e.s) && ie(e.l) && (r = at(e.s), a = at(e.l), t = Ka(e.h, r, a), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = eo(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var ei = "[-\\+]?\\d+%?", ti = "[-\\+]?\\d*\\.\\d+%?", fe = "(?:".concat(ti, ")|(?:").concat(ei, ")"), Ft = "[\\s|\\(]+(".concat(fe, ")[,|\\s]+(").concat(fe, ")[,|\\s]+(").concat(fe, ")\\s*\\)?"), Bt = "[\\s|\\(]+(".concat(fe, ")[,|\\s]+(").concat(fe, ")[,|\\s]+(").concat(fe, ")[,|\\s]+(").concat(fe, ")\\s*\\)?"), J = {
  CSS_UNIT: new RegExp(fe),
  rgb: new RegExp("rgb" + Ft),
  rgba: new RegExp("rgba" + Bt),
  hsl: new RegExp("hsl" + Ft),
  hsla: new RegExp("hsla" + Bt),
  hsv: new RegExp("hsv" + Ft),
  hsva: new RegExp("hsva" + Bt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function ni(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (en[e])
    e = en[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = J.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = J.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = J.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = J.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = J.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = J.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = J.hex8.exec(e), n ? {
    r: G(n[1]),
    g: G(n[2]),
    b: G(n[3]),
    a: tr(n[4]),
    format: t ? "name" : "hex8"
  } : (n = J.hex6.exec(e), n ? {
    r: G(n[1]),
    g: G(n[2]),
    b: G(n[3]),
    format: t ? "name" : "hex"
  } : (n = J.hex4.exec(e), n ? {
    r: G(n[1] + n[1]),
    g: G(n[2] + n[2]),
    b: G(n[3] + n[3]),
    a: tr(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = J.hex3.exec(e), n ? {
    r: G(n[1] + n[1]),
    g: G(n[2] + n[2]),
    b: G(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function ie(e) {
  return !!J.CSS_UNIT.exec(String(e));
}
var N = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Za(t)), this.originalInput = t;
      var o = $e(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, a = t.r / 255, i = t.g / 255, l = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? o = l / 12.92 : o = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = eo(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Jt(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Jt(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = er(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = er(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Zt(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Qa(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(z(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(z(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Zt(this.r, this.g, this.b, !1), n = 0, r = Object.entries(en); n < r.length; n++) {
        var o = r[n], a = o[0], i = o[1];
        if (t === i)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, a = !n && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = ot(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = ot(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = ot(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = ot(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100, i = {
        r: (o.r - r.r) * a + r.r,
        g: (o.g - r.g) * a + r.g,
        b: (o.b - r.b) * a + r.b,
        a: (o.a - r.a) * a + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, a = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, a.push(new e(r));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, i = [], l = 1 / t; t--; )
        i.push(new e({ h: r, s: o, v: a })), a = (a + l) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1; i < t; i++)
        o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), it = 2, nr = 0.16, ri = 0.05, oi = 0.05, ai = 0.15, to = 5, no = 4, ii = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function rr(e) {
  var t = e.r, n = e.g, r = e.b, o = Jt(t, n, r);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function lt(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(Zt(t, n, r, !1));
}
function li(e, t, n) {
  var r = n / 100, o = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return o;
}
function or(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - it * t : Math.round(e.h) + it * t : r = n ? Math.round(e.h) + it * t : Math.round(e.h) - it * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function ar(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - nr * t : t === no ? r = e.s + nr : r = e.s + ri * t, r > 1 && (r = 1), n && t === to && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function ir(e, t, n) {
  var r;
  return n ? r = e.v + oi * t : r = e.v - ai * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function xe(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = $e(e), o = to; o > 0; o -= 1) {
    var a = rr(r), i = lt($e({
      h: or(a, o, !0),
      s: ar(a, o, !0),
      v: ir(a, o, !0)
    }));
    n.push(i);
  }
  n.push(lt(r));
  for (var l = 1; l <= no; l += 1) {
    var c = rr(r), s = lt($e({
      h: or(c, l),
      s: ar(c, l),
      v: ir(c, l)
    }));
    n.push(s);
  }
  return t.theme === "dark" ? ii.map(function(f) {
    var u = f.index, d = f.opacity, p = lt(li($e(t.backgroundColor || "#141414"), $e(n[u]), d * 100));
    return p;
  }) : n;
}
var Vt = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, ft = {}, Wt = {};
Object.keys(Vt).forEach(function(e) {
  ft[e] = xe(Vt[e]), ft[e].primary = ft[e][5], Wt[e] = xe(Vt[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Wt[e].primary = Wt[e][5];
});
var ci = ft.blue, si = Symbol("iconContext"), ro = function() {
  return ce(si, {
    prefixCls: U("anticon"),
    rootClassName: U(""),
    csp: U()
  });
};
function Cn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ui(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var lr = "data-vc-order", fi = "vc-icon-key", tn = /* @__PURE__ */ new Map();
function oo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : fi;
}
function xn(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function di(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ao(e) {
  return Array.from((tn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function io(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Cn())
    return null;
  var n = t.csp, r = t.prepend, o = document.createElement("style");
  o.setAttribute(lr, di(r)), n && n.nonce && (o.nonce = n.nonce), o.innerHTML = e;
  var a = xn(t), i = a.firstChild;
  if (r) {
    if (r === "queue") {
      var l = ao(a).filter(function(c) {
        return ["prepend", "prependQueue"].includes(c.getAttribute(lr));
      });
      if (l.length)
        return a.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    a.insertBefore(o, i);
  } else
    a.appendChild(o);
  return o;
}
function pi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = xn(t);
  return ao(n).find(function(r) {
    return r.getAttribute(oo(t)) === e;
  });
}
function gi(e, t) {
  var n = tn.get(e);
  if (!n || !ui(document, n)) {
    var r = io("", t), o = r.parentNode;
    tn.set(e, o), e.removeChild(r);
  }
}
function vi(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = xn(n);
  gi(r, n);
  var o = pi(t, n);
  if (o)
    return n.csp && n.csp.nonce && o.nonce !== n.csp.nonce && (o.nonce = n.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
  var a = io(e, n);
  return a.setAttribute(oo(n), t), a;
}
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      mi(e, o, n[o]);
    });
  }
  return e;
}
function mi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function hi(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function yi(e, t) {
  hi(e, "[@ant-design/icons-vue] ".concat(t));
}
function sr(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function nn(e, t, n) {
  return n ? Ce(e.tag, cr({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, o) {
    return nn(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : Ce(e.tag, cr({
    key: t
  }, e.attrs), (e.children || []).map(function(r, o) {
    return nn(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function lo(e) {
  return xe(e)[0];
}
function co(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var bi = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function so(e) {
  return e && e.getRootNode && e.getRootNode();
}
function Ci(e) {
  return Cn() ? so(e) instanceof ShadowRoot : !1;
}
function xi(e) {
  return Ci(e) ? so(e) : null;
}
var Si = function() {
  var t = ro(), n = t.prefixCls, r = t.csp, o = Kr(), a = bi;
  n && (a = a.replace(/anticon/g, n.value)), Yr(function() {
    if (Cn()) {
      var i = o.vnode.el, l = xi(i);
      vi(a, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: l
      });
    }
  });
}, wi = ["icon", "primaryColor", "secondaryColor"];
function $i(e, t) {
  if (e == null)
    return {};
  var n = Oi(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Oi(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Pi(e, o, n[o]);
    });
  }
  return e;
}
function Pi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Ue = Ee({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function Ti(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Ue.primaryColor = t, Ue.secondaryColor = n || lo(t), Ue.calculated = !!n;
}
function _i() {
  return dt({}, Ue);
}
var ze = function(t, n) {
  var r = dt({}, t, n.attrs), o = r.icon, a = r.primaryColor, i = r.secondaryColor, l = $i(r, wi), c = Ue;
  if (a && (c = {
    primaryColor: a,
    secondaryColor: i || lo(a)
  }), yi(sr(o), "icon should be icon definiton, but got ".concat(o)), !sr(o))
    return null;
  var s = o;
  return s && typeof s.icon == "function" && (s = dt({}, s, {
    icon: s.icon(c.primaryColor, c.secondaryColor)
  })), nn(s.icon, "svg-".concat(s.name), dt({}, l, {
    "data-icon": s.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
ze.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
ze.inheritAttrs = !1;
ze.displayName = "IconBase";
ze.getTwoToneColors = _i;
ze.setTwoToneColors = Ti;
const Sn = ze;
function Ei(e, t) {
  return Ai(e) || Ii(e, t) || ki(e, t) || Mi();
}
function Mi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ki(e, t) {
  if (e) {
    if (typeof e == "string")
      return ur(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ur(e, t);
  }
}
function ur(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ii(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, a = !1, i, l;
    try {
      for (n = n.call(e); !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      a = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a)
          throw l;
      }
    }
    return r;
  }
}
function Ai(e) {
  if (Array.isArray(e))
    return e;
}
function uo(e) {
  var t = co(e), n = Ei(t, 2), r = n[0], o = n[1];
  return Sn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function ji() {
  var e = Sn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Hi = k({
  name: "InsertStyles",
  setup: function() {
    return Si(), function() {
      return null;
    };
  }
}), Ni = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function zi(e, t) {
  return Fi(e) || Di(e, t) || Li(e, t) || Ri();
}
function Ri() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Li(e, t) {
  if (e) {
    if (typeof e == "string")
      return fr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fr(e, t);
  }
}
function fr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Di(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], o = !0, a = !1, i, l;
    try {
      for (n = n.call(e); !(o = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); o = !0)
        ;
    } catch (c) {
      a = !0, l = c;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a)
          throw l;
      }
    }
    return r;
  }
}
function Fi(e) {
  if (Array.isArray(e))
    return e;
}
function dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      We(e, o, n[o]);
    });
  }
  return e;
}
function We(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Bi(e, t) {
  if (e == null)
    return {};
  var n = Vi(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Vi(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
uo(ci.primary);
var Re = function(t, n) {
  var r, o = dr({}, t, n.attrs), a = o.class, i = o.icon, l = o.spin, c = o.rotate, s = o.tabindex, f = o.twoToneColor, u = o.onClick, d = Bi(o, Ni), p = ro(), y = p.prefixCls, h = p.rootClassName, S = (r = {}, We(r, h.value, !!h.value), We(r, y.value, !0), We(r, "".concat(y.value, "-").concat(i.name), !!i.name), We(r, "".concat(y.value, "-spin"), !!l || i.name === "loading"), r), b = s;
  b === void 0 && u && (b = -1);
  var $ = c ? {
    msTransform: "rotate(".concat(c, "deg)"),
    transform: "rotate(".concat(c, "deg)")
  } : void 0, _ = co(f), O = zi(_, 2), w = O[0], T = O[1];
  return v("span", dr({
    role: "img",
    "aria-label": i.name
  }, d, {
    onClick: u,
    class: [S, a],
    tabindex: b
  }), [v(Sn, {
    icon: i,
    primaryColor: w,
    secondaryColor: T,
    style: $
  }, null), v(Hi, null, null)]);
};
Re.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Re.displayName = "AntdIcon";
Re.inheritAttrs = !1;
Re.getTwoToneColor = ji;
Re.setTwoToneColor = uo;
const te = Re;
var Wi = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
const Gi = Wi;
function pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Xi(e, o, n[o]);
    });
  }
  return e;
}
function Xi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wn = function(t, n) {
  var r = pr({}, t, n.attrs);
  return v(te, pr({}, r, {
    icon: Gi
  }), null);
};
wn.displayName = "CheckCircleFilled";
wn.inheritAttrs = !1;
const St = wn;
var Ui = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, name: "check-circle", theme: "outlined" };
const qi = Ui;
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Ki(e, o, n[o]);
    });
  }
  return e;
}
function Ki(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $n = function(t, n) {
  var r = gr({}, t, n.attrs);
  return v(te, gr({}, r, {
    icon: qi
  }), null);
};
$n.displayName = "CheckCircleOutlined";
$n.inheritAttrs = !1;
const Yi = $n;
var Qi = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" };
const Ji = Qi;
function vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Zi(e, o, n[o]);
    });
  }
  return e;
}
function Zi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var On = function(t, n) {
  var r = vr({}, t, n.attrs);
  return v(te, vr({}, r, {
    icon: Ji
  }), null);
};
On.displayName = "CloseCircleFilled";
On.inheritAttrs = !1;
const wt = On;
var el = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" };
const tl = el;
function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      nl(e, o, n[o]);
    });
  }
  return e;
}
function nl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Pn = function(t, n) {
  var r = mr({}, t, n.attrs);
  return v(te, mr({}, r, {
    icon: tl
  }), null);
};
Pn.displayName = "CloseCircleOutlined";
Pn.inheritAttrs = !1;
const rl = Pn;
var ol = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" };
const al = ol;
function hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      il(e, o, n[o]);
    });
  }
  return e;
}
function il(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tn = function(t, n) {
  var r = hr({}, t, n.attrs);
  return v(te, hr({}, r, {
    icon: al
  }), null);
};
Tn.displayName = "CloseOutlined";
Tn.inheritAttrs = !1;
const _n = Tn;
var ll = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" };
const cl = ll;
function yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      sl(e, o, n[o]);
    });
  }
  return e;
}
function sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var En = function(t, n) {
  var r = yr({}, t, n.attrs);
  return v(te, yr({}, r, {
    icon: cl
  }), null);
};
En.displayName = "CopyOutlined";
En.inheritAttrs = !1;
const ul = En;
var fl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" };
const dl = fl;
function br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      pl(e, o, n[o]);
    });
  }
  return e;
}
function pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Mn = function(t, n) {
  var r = br({}, t, n.attrs);
  return v(te, br({}, r, {
    icon: dl
  }), null);
};
Mn.displayName = "ExclamationCircleFilled";
Mn.inheritAttrs = !1;
const $t = Mn;
var gl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, name: "exclamation-circle", theme: "outlined" };
const vl = gl;
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      ml(e, o, n[o]);
    });
  }
  return e;
}
function ml(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var kn = function(t, n) {
  var r = Cr({}, t, n.attrs);
  return v(te, Cr({}, r, {
    icon: vl
  }), null);
};
kn.displayName = "ExclamationCircleOutlined";
kn.inheritAttrs = !1;
const hl = kn;
var yl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" };
const bl = yl;
function xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Cl(e, o, n[o]);
    });
  }
  return e;
}
function Cl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var In = function(t, n) {
  var r = xr({}, t, n.attrs);
  return v(te, xr({}, r, {
    icon: bl
  }), null);
};
In.displayName = "InfoCircleFilled";
In.inheritAttrs = !1;
const Ot = In;
var xl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] }, name: "info-circle", theme: "outlined" };
const Sl = xl;
function Sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      wl(e, o, n[o]);
    });
  }
  return e;
}
function wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var An = function(t, n) {
  var r = Sr({}, t, n.attrs);
  return v(te, Sr({}, r, {
    icon: Sl
  }), null);
};
An.displayName = "InfoCircleOutlined";
An.inheritAttrs = !1;
const $l = An;
var Ol = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Pl = Ol;
function wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
      return Object.getOwnPropertyDescriptor(n, o).enumerable;
    }))), r.forEach(function(o) {
      Tl(e, o, n[o]);
    });
  }
  return e;
}
function Tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jn = function(t, n) {
  var r = wr({}, t, n.attrs);
  return v(te, wr({}, r, {
    icon: Pl
  }), null);
};
jn.displayName = "LoadingOutlined";
jn.inheritAttrs = !1;
const Pt = jn;
function Ye(e) {
  "@babel/helpers - typeof";
  return Ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ye(e);
}
function _l(e, t) {
  if (Ye(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Ye(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function El(e) {
  var t = _l(e, "string");
  return Ye(t) == "symbol" ? t : t + "";
}
function Ml(e, t, n) {
  return (t = El(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function $r(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $r(Object(n), !0).forEach(function(r) {
      Ml(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function m() {
  return m = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, m.apply(null, arguments);
}
const kl = Array.isArray, Il = (e) => typeof e == "string", Al = (e) => e !== null && typeof e == "object";
function Oe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  return typeof e == "function" ? e(t) : e ?? n;
}
function jl(e) {
  let t;
  const n = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), r = () => {
    t == null || t();
  };
  return r.then = (o, a) => n.then(o, a), r.promise = n, r;
}
function F() {
  const e = [];
  for (let t = 0; t < arguments.length; t++) {
    const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (Il(n))
        e.push(n);
      else if (kl(n))
        for (let r = 0; r < n.length; r++) {
          const o = F(n[r]);
          o && e.push(o);
        }
      else if (Al(n))
        for (const r in n)
          n[r] && e.push(r);
    }
  }
  return e.join(" ");
}
function Hl(e) {
  return e && (e.type === Ha || e.type === Qr && e.children.length === 0 || e.type === Na && e.children.trim() === "");
}
function fo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const t = [];
  return e.forEach((n) => {
    Array.isArray(n) ? t.push(...n) : (n == null ? void 0 : n.type) === Qr ? t.push(...fo(n.children)) : t.push(n);
  }), t.filter((n) => !Hl(n));
}
const Nl = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
}, Hn = (e) => {
  const t = e;
  return t.install = function(n) {
    n.component(t.displayName || t.name, e);
  }, e;
};
function X(e) {
  return {
    type: Object,
    default: e
  };
}
function Gt(e) {
  return {
    type: Boolean,
    default: e
  };
}
function rn(e, t) {
  const n = {
    validator: () => !0,
    default: e
  };
  return n;
}
function Or(e) {
  return {
    type: Array,
    default: e
  };
}
function Pr(e) {
  return {
    type: String,
    default: e
  };
}
function zl(e, t) {
  return e ? {
    type: e,
    default: t
  } : rn(t);
}
const Nn = "anticon", Rl = Symbol("GlobalFormContextKey"), Ll = (e) => {
  pe(Rl, e);
}, Dl = () => ({
  iconPrefixCls: String,
  getTargetContainer: {
    type: Function
  },
  getPopupContainer: {
    type: Function
  },
  prefixCls: String,
  getPrefixCls: {
    type: Function
  },
  renderEmpty: {
    type: Function
  },
  transformCellText: {
    type: Function
  },
  csp: X(),
  input: X(),
  autoInsertSpaceInButton: {
    type: Boolean,
    default: void 0
  },
  locale: X(),
  pageHeader: X(),
  componentSize: {
    type: String
  },
  componentDisabled: {
    type: Boolean,
    default: void 0
  },
  direction: {
    type: String,
    default: "ltr"
  },
  space: X(),
  virtual: {
    type: Boolean,
    default: void 0
  },
  dropdownMatchSelectWidth: {
    type: [Number, Boolean],
    default: !0
  },
  form: X(),
  pagination: X(),
  theme: X(),
  select: X(),
  wave: X()
}), zn = Symbol("configProvider"), po = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: x(() => Nn),
  getPopupContainer: x(() => () => document.body),
  direction: x(() => "ltr")
}, Rn = () => ce(zn, po), Fl = (e) => pe(zn, e), go = Symbol("DisabledContextKey"), vo = () => ce(go, U(void 0)), Bl = (e) => {
  const t = vo();
  return pe(go, x(() => {
    var n;
    return (n = e.value) !== null && n !== void 0 ? n : t.value;
  })), e;
}, Vl = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
}, Wl = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, Gl = Wl, Xl = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, mo = Xl, Ul = {
  lang: m({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, Gl),
  timePickerLocale: m({}, mo)
}, Tr = Ul, V = "${label} is not a valid ${type}", ql = {
  locale: "en",
  Pagination: Vl,
  DatePicker: Tr,
  TimePicker: mo,
  Calendar: Tr,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: V,
        method: V,
        array: V,
        object: V,
        number: V,
        date: V,
        boolean: V,
        integer: V,
        float: V,
        regexp: V,
        email: V,
        url: V,
        hex: V
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
}, Qe = ql, ho = k({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = ce("localeData", {}), o = x(() => {
      const {
        componentName: i = "global",
        defaultLocale: l
      } = e, c = l || Qe[i || "global"], {
        antLocale: s
      } = r, f = i && s ? s[i] : {};
      return m(m({}, typeof c == "function" ? c() : c), f || {});
    }), a = x(() => {
      const {
        antLocale: i
      } = r, l = i && i.locale;
      return i && i.exist && !l ? Qe.locale : l;
    });
    return () => {
      const i = e.children || n.default, {
        antLocale: l
      } = r;
      return i == null ? void 0 : i(o.value, a.value, l);
    };
  }
});
function Ln(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
const _r = "%";
class Kl {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.instanceId = t;
  }
  get(t) {
    return this.cache.get(Array.isArray(t) ? t.join(_r) : t) || null;
  }
  update(t, n) {
    const r = Array.isArray(t) ? t.join(_r) : t, o = this.cache.get(r), a = n(o);
    a === null ? this.cache.delete(r) : this.cache.set(r, a);
  }
}
const Yl = Kl, yo = "data-token-hash", he = "data-css-hash", Ql = "data-cache-path", Pe = "__cssinjs_instance__";
function Je() {
  const e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    const t = document.body.querySelectorAll(`style[${he}]`) || [], {
      firstChild: n
    } = document.head;
    Array.from(t).forEach((o) => {
      o[Pe] = o[Pe] || e, o[Pe] === e && document.head.insertBefore(o, n);
    });
    const r = {};
    Array.from(document.querySelectorAll(`style[${he}]`)).forEach((o) => {
      var a;
      const i = o.getAttribute(he);
      r[i] ? o[Pe] === e && ((a = o.parentNode) === null || a === void 0 || a.removeChild(o)) : r[i] = !0;
    });
  }
  return new Yl(e);
}
const bo = Symbol("StyleContextKey"), Jl = () => {
  var e, t, n;
  const r = Kr();
  let o;
  if (r && r.appContext) {
    const a = (n = (t = (e = r.appContext) === null || e === void 0 ? void 0 : e.config) === null || t === void 0 ? void 0 : t.globalProperties) === null || n === void 0 ? void 0 : n.__ANTDV_CSSINJS_CACHE__;
    a ? o = a : (o = Je(), r.appContext.config.globalProperties && (r.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = o));
  } else
    o = Je();
  return o;
}, Co = {
  cache: Je(),
  defaultCache: !0,
  hashPriority: "low"
}, Tt = () => {
  const e = Jl();
  return ce(bo, Z(m(m({}, Co), {
    cache: e
  })));
}, Zl = (e) => {
  const t = Tt(), n = Z(m(m({}, Co), {
    cache: Je()
  }));
  return se([() => Me(e), t], () => {
    const r = m({}, t.value), o = Me(e);
    Object.keys(o).forEach((i) => {
      const l = o[i];
      o[i] !== void 0 && (r[i] = l);
    });
    const {
      cache: a
    } = o;
    r.cache = r.cache || Je(), r.defaultCache = !a && t.value.defaultCache, n.value = r;
  }, {
    immediate: !0
  }), pe(bo, n), n;
}, ec = () => ({
  autoClear: Gt(),
  /** @private Test only. Not work in production. */
  mock: Pr(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: X(),
  /** Tell children that this context is default generated context */
  defaultCache: Gt(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: Pr(),
  /** Tell cssinjs where to inject style in */
  container: zl(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: Gt(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: Or(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: Or()
});
Hn(k({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: ec(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Zl(e), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
}));
function tc() {
  return !1;
}
let on = !1;
function nc() {
  return on;
}
const rc = process.env.NODE_ENV === "production" ? tc : nc;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  const e = window;
  if (typeof e.webpackHotUpdate == "function") {
    const t = e.webpackHotUpdate;
    e.webpackHotUpdate = function() {
      return on = !0, setTimeout(() => {
        on = !1;
      }, 0), t(...arguments);
    };
  }
}
function xo(e, t, n, r) {
  const o = Tt(), a = Z(""), i = Z();
  xt(() => {
    a.value = [e, ...t.value].join("%");
  });
  const l = rc(), c = (s) => {
    o.value.cache.update(s, (f) => {
      const [u = 0, d] = f || [];
      return u - 1 === 0 ? (r == null || r(d, !1), null) : [u - 1, d];
    });
  };
  return se(a, (s, f) => {
    f && c(f), o.value.cache.update(s, (u) => {
      const [d = 0, p] = u || [];
      let y = p;
      process.env.NODE_ENV !== "production" && p && l && (r == null || r(y, l), y = null);
      const h = y || n();
      return [d + 1, h];
    }), i.value = o.value.cache.get(a.value)[1];
  }, {
    immediate: !0
  }), za(() => {
    c(a.value);
  }), i;
}
function Le() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function oc(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
const Er = "data-vc-order", ac = "vc-util-key", an = /* @__PURE__ */ new Map();
function So() {
  let {
    mark: e
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return e ? e.startsWith("data-") ? e : `data-${e}` : ac;
}
function _t(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function ic(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function wo(e) {
  return Array.from((an.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function $o(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Le())
    return null;
  const {
    csp: n,
    prepend: r
  } = t, o = document.createElement("style");
  o.setAttribute(Er, ic(r)), n != null && n.nonce && (o.nonce = n == null ? void 0 : n.nonce), o.innerHTML = e;
  const a = _t(t), {
    firstChild: i
  } = a;
  if (r) {
    if (r === "queue") {
      const l = wo(a).filter((c) => ["prepend", "prependQueue"].includes(c.getAttribute(Er)));
      if (l.length)
        return a.insertBefore(o, l[l.length - 1].nextSibling), o;
    }
    a.insertBefore(o, i);
  } else
    a.appendChild(o);
  return o;
}
function Oo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = _t(t);
  return wo(n).find((r) => r.getAttribute(So(t)) === e);
}
function Po(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = Oo(e, t);
  n && _t(t).removeChild(n);
}
function lc(e, t) {
  const n = an.get(e);
  if (!n || !oc(document, n)) {
    const r = $o("", t), {
      parentNode: o
    } = r;
    an.set(e, o), e.removeChild(r);
  }
}
function yt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var r, o, a;
  const i = _t(n);
  lc(i, n);
  const l = Oo(t, n);
  if (l)
    return !((r = n.csp) === null || r === void 0) && r.nonce && l.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce) && (l.nonce = (a = n.csp) === null || a === void 0 ? void 0 : a.nonce), l.innerHTML !== e && (l.innerHTML = e), l;
  const c = $o(e, n);
  return c.setAttribute(So(n), t), c;
}
function cc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
class ke {
  constructor() {
    this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = {
      map: this.cache
    };
    return t.forEach((o) => {
      var a;
      r ? r = (a = r == null ? void 0 : r.map) === null || a === void 0 ? void 0 : a.get(o) : r = void 0;
    }), r != null && r.value && n && (r.value[1] = this.cacheCallTimes++), r == null ? void 0 : r.value;
  }
  get(t) {
    var n;
    return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
  }
  has(t) {
    return !!this.internalGet(t);
  }
  set(t, n) {
    if (!this.has(t)) {
      if (this.size() + 1 > ke.MAX_CACHE_SIZE + ke.MAX_CACHE_OFFSET) {
        const [o] = this.keys.reduce((a, i) => {
          const [, l] = a;
          return this.internalGet(i)[1] < l ? [i, this.internalGet(i)[1]] : a;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(o);
      }
      this.keys.push(t);
    }
    let r = this.cache;
    t.forEach((o, a) => {
      if (a === t.length - 1)
        r.set(o, {
          value: [n, this.cacheCallTimes++]
        });
      else {
        const i = r.get(o);
        i ? i.map || (i.map = /* @__PURE__ */ new Map()) : r.set(o, {
          map: /* @__PURE__ */ new Map()
        }), r = r.get(o).map;
      }
    });
  }
  deleteByPath(t, n) {
    var r;
    const o = t.get(n[0]);
    if (n.length === 1)
      return o.map ? t.set(n[0], {
        map: o.map
      }) : t.delete(n[0]), (r = o.value) === null || r === void 0 ? void 0 : r[0];
    const a = this.deleteByPath(o.map, n.slice(1));
    return (!o.map || o.map.size === 0) && !o.value && t.delete(n[0]), a;
  }
  delete(t) {
    if (this.has(t))
      return this.keys = this.keys.filter((n) => !cc(n, t)), this.deleteByPath(this.cache, t);
  }
}
ke.MAX_CACHE_SIZE = 20;
ke.MAX_CACHE_OFFSET = 5;
let ln = {};
function sc(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error(`Warning: ${t}`);
}
function uc() {
  ln = {};
}
function fc(e, t, n) {
  !t && !ln[n] && (e(!1, n), ln[n] = !0);
}
function To(e, t) {
  fc(sc, e, t);
}
function dc() {
}
let _o = dc;
process.env.NODE_ENV !== "production" && (_o = (e, t, n) => {
  To(e, `[ant-design-vue: ${t}] ${n}`), process.env.NODE_ENV === "test" && uc();
});
const Dn = _o;
let Mr = 0;
class Eo {
  constructor(t) {
    this.derivatives = Array.isArray(t) ? t : [t], this.id = Mr, t.length === 0 && Dn(t.length > 0, "[Ant Design Vue CSS-in-JS] Theme should have at least one derivative function."), Mr += 1;
  }
  getDerivativeToken(t) {
    return this.derivatives.reduce((n, r) => r(t, n), void 0);
  }
}
const Xt = new ke();
function Mo(e) {
  const t = Array.isArray(e) ? e : [e];
  return Xt.has(t) || Xt.set(t, new Eo(t)), Xt.get(t);
}
const kr = /* @__PURE__ */ new WeakMap();
function bt(e) {
  let t = kr.get(e) || "";
  return t || (Object.keys(e).forEach((n) => {
    const r = e[n];
    t += n, r instanceof Eo ? t += r.id : r && typeof r == "object" ? t += bt(r) : t += r;
  }), kr.set(e, t)), t;
}
function pc(e, t) {
  return Ln(`${t}_${bt(e)}`);
}
const qe = `random-${Date.now()}-${Math.random()}`.replace(/\./g, ""), ko = "_bAmBoO_";
function gc(e, t, n) {
  var r, o;
  if (Le()) {
    yt(e, qe);
    const a = document.createElement("div");
    a.style.position = "fixed", a.style.left = "0", a.style.top = "0", t == null || t(a), document.body.appendChild(a), process.env.NODE_ENV !== "production" && (a.innerHTML = "Test", a.style.zIndex = "9999999");
    const i = n ? n(a) : (r = getComputedStyle(a).content) === null || r === void 0 ? void 0 : r.includes(ko);
    return (o = a.parentNode) === null || o === void 0 || o.removeChild(a), Po(qe), i;
  }
  return !1;
}
let Ut;
function vc() {
  return Ut === void 0 && (Ut = gc(`@layer ${qe} { .${qe} { content: "${ko}"!important; } }`, (e) => {
    e.className = qe;
  })), Ut;
}
const Ir = {}, mc = process.env.NODE_ENV === "production", hc = process.env.NODE_ENV === "prerender", yc = !mc && !hc ? "css-dev-only-do-not-override" : "css", ge = /* @__PURE__ */ new Map();
function bc(e) {
  ge.set(e, (ge.get(e) || 0) + 1);
}
function Cc(e, t) {
  typeof document < "u" && document.querySelectorAll(`style[${yo}="${e}"]`).forEach((r) => {
    var o;
    r[Pe] === t && ((o = r.parentNode) === null || o === void 0 || o.removeChild(r));
  });
}
const xc = 0;
function Sc(e, t) {
  ge.set(e, (ge.get(e) || 0) - 1);
  const n = Array.from(ge.keys()), r = n.filter((o) => (ge.get(o) || 0) <= 0);
  n.length - r.length > xc && r.forEach((o) => {
    Cc(o, t), ge.delete(o);
  });
}
const wc = (e, t, n, r) => {
  const o = n.getDerivativeToken(e);
  let a = m(m({}, o), t);
  return r && (a = r(a)), a;
};
function $c(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : U({});
  const r = Tt(), o = x(() => m({}, ...t.value)), a = x(() => bt(o.value)), i = x(() => bt(n.value.override || Ir));
  return xo("token", x(() => [n.value.salt || "", e.value.id, a.value, i.value]), () => {
    const {
      salt: c = "",
      override: s = Ir,
      formatToken: f,
      getComputedToken: u
    } = n.value, d = u ? u(o.value, s, e.value) : wc(o.value, s, e.value, f), p = pc(d, c);
    d._tokenKey = p, bc(p);
    const y = `${yc}-${Ln(p)}`;
    return d._hashId = y, [d, y];
  }, (c) => {
    var s;
    Sc(c[0]._tokenKey, (s = r.value) === null || s === void 0 ? void 0 : s.cache.instanceId);
  });
}
var Oc = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Io = "comm", Ao = "rule", jo = "decl", Pc = "@import", Tc = "@namespace", _c = "@keyframes", Ec = "@layer", Ho = Math.abs, Fn = String.fromCharCode;
function No(e) {
  return e.trim();
}
function pt(e, t, n) {
  return e.replace(t, n);
}
function Mc(e, t, n) {
  return e.indexOf(t, n);
}
function Te(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ie(e, t, n) {
  return e.slice(t, n);
}
function oe(e) {
  return e.length;
}
function kc(e) {
  return e.length;
}
function ct(e, t) {
  return t.push(e), e;
}
var Et = 1, Ae = 1, zo = 0, Q = 0, A = 0, De = "";
function Bn(e, t, n, r, o, a, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: Et, column: Ae, length: i, return: "", siblings: l };
}
function Ic() {
  return A;
}
function Ac() {
  return A = Q > 0 ? Te(De, --Q) : 0, Ae--, A === 10 && (Ae = 1, Et--), A;
}
function ee() {
  return A = Q < zo ? Te(De, Q++) : 0, Ae++, A === 10 && (Ae = 1, Et++), A;
}
function de() {
  return Te(De, Q);
}
function gt() {
  return Q;
}
function Mt(e, t) {
  return Ie(De, e, t);
}
function Ze(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function jc(e) {
  return Et = Ae = 1, zo = oe(De = e), Q = 0, [];
}
function Hc(e) {
  return De = "", e;
}
function qt(e) {
  return No(Mt(Q - 1, cn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Nc(e) {
  for (; (A = de()) && A < 33; )
    ee();
  return Ze(e) > 2 || Ze(A) > 3 ? "" : " ";
}
function zc(e, t) {
  for (; --t && ee() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return Mt(e, gt() + (t < 6 && de() == 32 && ee() == 32));
}
function cn(e) {
  for (; ee(); )
    switch (A) {
      case e:
        return Q;
      case 34:
      case 39:
        e !== 34 && e !== 39 && cn(A);
        break;
      case 40:
        e === 41 && cn(e);
        break;
      case 92:
        ee();
        break;
    }
  return Q;
}
function Rc(e, t) {
  for (; ee() && e + A !== 47 + 10; )
    if (e + A === 42 + 42 && de() === 47)
      break;
  return "/*" + Mt(t, Q - 1) + "*" + Fn(e === 47 ? e : ee());
}
function Lc(e) {
  for (; !Ze(de()); )
    ee();
  return Mt(e, Q);
}
function Dc(e) {
  return Hc(vt("", null, null, null, [""], e = jc(e), 0, [0], e));
}
function vt(e, t, n, r, o, a, i, l, c) {
  for (var s = 0, f = 0, u = i, d = 0, p = 0, y = 0, h = 1, S = 1, b = 1, $ = 0, _ = "", O = o, w = a, T = r, g = _; S; )
    switch (y = $, $ = ee()) {
      case 40:
        if (y != 108 && Te(g, u - 1) == 58) {
          Mc(g += pt(qt($), "&", "&\f"), "&\f", Ho(s ? l[s - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += qt($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += Nc(y);
        break;
      case 92:
        g += zc(gt() - 1, 7);
        continue;
      case 47:
        switch (de()) {
          case 42:
          case 47:
            ct(Fc(Rc(ee(), gt()), t, n, c), c), (Ze(y || 1) == 5 || Ze(de() || 1) == 5) && oe(g) && Ie(g, -1, void 0) !== " " && (g += " ");
            break;
          default:
            g += "/";
        }
        break;
      case 123 * h:
        l[s++] = oe(g) * b;
      case 125 * h:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            S = 0;
          case 59 + f:
            b == -1 && (g = pt(g, /\f/g, "")), p > 0 && (oe(g) - u || h === 0 && y === 47) && ct(p > 32 ? jr(g + ";", r, n, u - 1, c) : jr(pt(g, " ", "") + ";", r, n, u - 2, c), c);
            break;
          case 59:
            g += ";";
          default:
            if (ct(T = Ar(g, t, n, s, f, o, l, _, O = [], w = [], u, a), a), $ === 123)
              if (f === 0)
                vt(g, t, T, T, O, a, u, l, w);
              else {
                switch (d) {
                  case 99:
                    if (Te(g, 3) === 110)
                      break;
                  case 108:
                    if (Te(g, 2) === 97)
                      break;
                  default:
                    f = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                f ? vt(e, T, T, r && ct(Ar(e, T, T, 0, 0, o, l, _, o, O = [], u, w), w), o, w, u, l, r ? O : w) : vt(g, T, T, T, [""], w, 0, l, w);
              }
        }
        s = f = p = 0, h = b = 1, _ = g = "", u = i;
        break;
      case 58:
        u = 1 + oe(g), p = y;
      default:
        if (h < 1) {
          if ($ == 123)
            --h;
          else if ($ == 125 && h++ == 0 && Ac() == 125)
            continue;
        }
        switch (g += Fn($), $ * h) {
          case 38:
            b = f > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            l[s++] = (oe(g) - 1) * b, b = 1;
            break;
          case 64:
            de() === 45 && (g += qt(ee())), d = de(), f = u = oe(_ = g += Lc(gt())), $++;
            break;
          case 45:
            y === 45 && oe(g) == 2 && (h = 0);
        }
    }
  return a;
}
function Ar(e, t, n, r, o, a, i, l, c, s, f, u) {
  for (var d = o - 1, p = o === 0 ? a : [""], y = kc(p), h = 0, S = 0, b = 0; h < r; ++h)
    for (var $ = 0, _ = Ie(e, d + 1, d = Ho(S = i[h])), O = e; $ < y; ++$)
      (O = No(S > 0 ? p[$] + " " + _ : pt(_, /&\f/g, p[$]))) && (c[b++] = O);
  return Bn(e, t, n, o === 0 ? Ao : l, c, s, f, u);
}
function Fc(e, t, n, r) {
  return Bn(e, t, n, Io, Fn(Ic()), Ie(e, 2, -2), 0, r);
}
function jr(e, t, n, r, o) {
  return Bn(e, t, n, jo, Ie(e, 0, r), Ie(e, r + 1, -1), r, o);
}
function sn(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Bc(e, t, n, r) {
  switch (e.type) {
    case Ec:
      if (e.children.length)
        break;
    case Pc:
    case Tc:
    case jo:
      return e.return = e.return || e.value;
    case Io:
      return "";
    case _c:
      return e.return = e.value + "{" + sn(e.children, r) + "}";
    case Ao:
      if (!oe(e.value = e.props.join(",")))
        return "";
  }
  return oe(n = sn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Ro(e, t) {
  const {
    path: n,
    parentSelectors: r
  } = t;
  To(!1, `[Ant Design Vue CSS-in-JS] ${n ? `Error in '${n}': ` : ""}${e}${r.length ? ` Selector info: ${r.join(" -> ")}` : ""}`);
}
const Vc = (e, t, n) => {
  if (e === "content") {
    const r = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    (typeof t != "string" || ["normal", "none", "initial", "inherit", "unset"].indexOf(t) === -1 && !r.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && Ro(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
  }
}, Wc = Vc, Gc = (e, t, n) => {
  e === "animation" && n.hashId && t !== "none" && Ro(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, Xc = Gc, Hr = "data-ant-cssinjs-cache-path", Uc = "_FILE_STYLE__";
let ye, Lo = !0;
function qc() {
  var e;
  if (!ye && (ye = {}, Le())) {
    const t = document.createElement("div");
    t.className = Hr, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    let n = getComputedStyle(t).content || "";
    n = n.replace(/^"/, "").replace(/"$/, ""), n.split(";").forEach((o) => {
      const [a, i] = o.split(":");
      ye[a] = i;
    });
    const r = document.querySelector(`style[${Hr}]`);
    r && (Lo = !1, (e = r.parentNode) === null || e === void 0 || e.removeChild(r)), document.body.removeChild(t);
  }
}
function Kc(e) {
  return qc(), !!ye[e];
}
function Yc(e) {
  const t = ye[e];
  let n = null;
  if (t && Le())
    if (Lo)
      n = Uc;
    else {
      const r = document.querySelector(`style[${he}="${ye[e]}"]`);
      r ? n = r.innerHTML : delete ye[e];
    }
  return [n, t];
}
const Nr = Le(), Do = "_skip_check_", Fo = "_multi_value_";
function zr(e) {
  return sn(Dc(e), Bc).replace(/\{%%%\:[^;];}/g, ";");
}
function Qc(e) {
  return typeof e == "object" && e && (Do in e || Fo in e);
}
function Jc(e, t, n) {
  if (!t)
    return e;
  const r = `.${t}`, o = n === "low" ? `:where(${r})` : r;
  return e.split(",").map((i) => {
    var l;
    const c = i.trim().split(/\s+/);
    let s = c[0] || "";
    const f = ((l = s.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return s = `${f}${o}${s.slice(f.length)}`, [s, ...c.slice(1)].join(" ");
  }).join(",");
}
const un = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
const fn = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    root: n,
    injectHash: r,
    parentSelectors: o
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  };
  const {
    hashId: a,
    layer: i,
    path: l,
    hashPriority: c,
    transformers: s = [],
    linters: f = []
  } = t;
  let u = "", d = {};
  function p(S) {
    const b = S.getName(a);
    if (!d[b]) {
      const [$] = fn(S.style, t, {
        root: !1,
        parentSelectors: o
      });
      d[b] = `@keyframes ${S.getName(a)}${$}`;
    }
  }
  function y(S) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return S.forEach(($) => {
      Array.isArray($) ? y($, b) : $ && b.push($);
    }), b;
  }
  if (y(Array.isArray(e) ? e : [e]).forEach((S) => {
    const b = typeof S == "string" && !n ? {} : S;
    if (typeof b == "string")
      u += `${b}
`;
    else if (b._keyframe)
      p(b);
    else {
      const $ = s.reduce((_, O) => {
        var w;
        return ((w = O == null ? void 0 : O.visit) === null || w === void 0 ? void 0 : w.call(O, _)) || _;
      }, b);
      Object.keys($).forEach((_) => {
        var O;
        const w = $[_];
        if (typeof w == "object" && w && (_ !== "animationName" || !w._keyframe) && !Qc(w)) {
          let T = !1, g = _.trim(), P = !1;
          (n || r) && a ? g.startsWith("@") ? T = !0 : g = Jc(_, a, c) : n && !a && (g === "&" || g === "") && (g = "", P = !0);
          const [M, B] = fn(w, t, {
            root: P,
            injectHash: T,
            parentSelectors: [...o, g]
          });
          d = m(m({}, d), B), u += `${g}${M}`;
        } else {
          let T = function(P, M) {
            process.env.NODE_ENV !== "production" && (typeof w != "object" || !(w != null && w[Do])) && [Wc, Xc, ...f].forEach((K) => K(P, M, {
              path: l,
              hashId: a,
              parentSelectors: o
            }));
            const B = P.replace(/[A-Z]/g, (K) => `-${K.toLowerCase()}`);
            let ne = M;
            !Oc[P] && typeof ne == "number" && ne !== 0 && (ne = `${ne}px`), P === "animationName" && (M != null && M._keyframe) && (p(M), ne = M.getName(a)), u += `${B}:${ne};`;
          };
          const g = (O = w == null ? void 0 : w.value) !== null && O !== void 0 ? O : w;
          typeof w == "object" && (w != null && w[Fo]) && Array.isArray(g) ? g.forEach((P) => {
            T(_, P);
          }) : T(_, g);
        }
      });
    }
  }), !n)
    u = `{${u}}`;
  else if (i && vc()) {
    const S = i.split(",");
    u = `@layer ${S[S.length - 1].trim()} {${u}}`, S.length > 1 && (u = `@layer ${i}{%%%:%}${u}`);
  }
  return [u, d];
};
function Zc(e, t) {
  return Ln(`${e.join("%")}${t}`);
}
function dn(e, t) {
  const n = Tt(), r = x(() => e.value.token._tokenKey), o = x(() => [r.value, ...e.value.path]);
  let a = Nr;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (a = n.value.mock === "client"), xo(
    "style",
    o,
    // Create cache if needed
    () => {
      const {
        path: i,
        hashId: l,
        layer: c,
        nonce: s,
        clientOnly: f,
        order: u = 0
      } = e.value, d = o.value.join("|");
      if (Kc(d)) {
        const [g, P] = Yc(d);
        if (g)
          return [g, r.value, P, {}, f, u];
      }
      const p = t(), {
        hashPriority: y,
        container: h,
        transformers: S,
        linters: b,
        cache: $
      } = n.value, [_, O] = fn(p, {
        hashId: l,
        hashPriority: y,
        layer: c,
        path: i.join("-"),
        transformers: S,
        linters: b
      }), w = zr(_), T = Zc(o.value, w);
      if (a) {
        const g = {
          mark: he,
          prepend: "queue",
          attachTo: h,
          priority: u
        }, P = typeof s == "function" ? s() : s;
        P && (g.csp = {
          nonce: P
        });
        const M = yt(w, T, g);
        M[Pe] = $.instanceId, M.setAttribute(yo, r.value), process.env.NODE_ENV !== "production" && M.setAttribute(Ql, o.value.join("|")), Object.keys(O).forEach((B) => {
          un.has(B) || (un.add(B), yt(zr(O[B]), `_effect-${B}`, {
            mark: he,
            prepend: "queue",
            attachTo: h
          }));
        });
      }
      return [w, r.value, T, O, f, u];
    },
    // Remove cache if no need
    (i, l) => {
      let [, , c] = i;
      (l || n.value.autoClear) && Nr && Po(c, {
        mark: he
      });
    }
  ), (i) => i;
}
class es {
  constructor(t, n) {
    this._keyframe = !0, this.name = t, this.style = n;
  }
  getName() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return t ? `${t}-${this.name}` : this.name;
  }
}
const be = es, ts = "4.2.6", ns = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
}, rs = ns;
function os(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Bo = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, as = m(m({}, Bo), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1
}), kt = as;
function is(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: o,
    colorWarning: a,
    colorError: i,
    colorInfo: l,
    colorPrimary: c,
    colorBgBase: s,
    colorTextBase: f
  } = e, u = n(c), d = n(o), p = n(a), y = n(i), h = n(l), S = r(s, f);
  return m(m({}, S), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: y[1],
    colorErrorBgHover: y[2],
    colorErrorBorder: y[3],
    colorErrorBorderHover: y[4],
    colorErrorHover: y[5],
    colorError: y[6],
    colorErrorActive: y[7],
    colorErrorTextHover: y[8],
    colorErrorText: y[9],
    colorErrorTextActive: y[10],
    colorWarningBg: p[1],
    colorWarningBgHover: p[2],
    colorWarningBorder: p[3],
    colorWarningBorderHover: p[4],
    colorWarningHover: p[4],
    colorWarning: p[6],
    colorWarningActive: p[7],
    colorWarningTextHover: p[8],
    colorWarningText: p[9],
    colorWarningTextActive: p[10],
    colorInfoBg: h[1],
    colorInfoBgHover: h[2],
    colorInfoBorder: h[3],
    colorInfoBorderHover: h[4],
    colorInfoHover: h[4],
    colorInfo: h[6],
    colorInfoActive: h[7],
    colorInfoTextHover: h[8],
    colorInfoText: h[9],
    colorInfoTextActive: h[10],
    colorBgMask: new N("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const ls = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e > 16 ? 16 : e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
}, cs = ls;
function ss(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return m({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, cs(r));
}
const le = (e, t) => new N(e).setAlpha(t).toRgbString(), Be = (e, t) => new N(e).darken(t).toHexString(), us = (e) => {
  const t = xe(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, fs = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: le(r, 0.88),
    colorTextSecondary: le(r, 0.65),
    colorTextTertiary: le(r, 0.45),
    colorTextQuaternary: le(r, 0.25),
    colorFill: le(r, 0.15),
    colorFillSecondary: le(r, 0.06),
    colorFillTertiary: le(r, 0.04),
    colorFillQuaternary: le(r, 0.02),
    colorBgLayout: Be(n, 4),
    colorBgContainer: Be(n, 0),
    colorBgElevated: Be(n, 0),
    colorBgSpotlight: le(r, 0.85),
    colorBorder: Be(n, 15),
    colorBorderSecondary: Be(n, 6)
  };
};
function ds(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const o = r - 1, a = e * Math.pow(2.71828, o / 5), i = r > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => {
    const r = n + 8;
    return {
      size: n,
      lineHeight: r / n
    };
  });
}
const ps = (e) => {
  const t = ds(e), n = t.map((o) => o.size), r = t.map((o) => o.lineHeight);
  return {
    fontSizeSM: n[0],
    fontSize: n[1],
    fontSizeLG: n[2],
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: r[1],
    lineHeightLG: r[2],
    lineHeightSM: r[0],
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
}, gs = ps;
function vs(e) {
  const t = Object.keys(Bo).map((n) => {
    const r = xe(e[n]);
    return new Array(10).fill(1).reduce((o, a, i) => (o[`${n}-${i + 1}`] = r[i], o), {});
  }).reduce((n, r) => (n = m(m({}, n), r), n), {});
  return m(m(m(m(m(m(m({}, e), t), is(e, {
    generateColorPalettes: us,
    generateNeutralColorPalettes: fs
  })), gs(e.fontSize)), os(e)), rs(e)), ss(e));
}
function Kt(e) {
  return e >= 0 && e <= 255;
}
function st(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = new N(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: l,
    b: c
  } = new N(t).toRgb();
  for (let s = 0.01; s <= 1; s += 0.01) {
    const f = Math.round((n - i * (1 - s)) / s), u = Math.round((r - l * (1 - s)) / s), d = Math.round((o - c * (1 - s)) / s);
    if (Kt(f) && Kt(u) && Kt(d))
      return new N({
        r: f,
        g: u,
        b: d,
        a: Math.round(s * 100) / 100
      }).toRgbString();
  }
  return new N({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var ms = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function hs(e) {
  const {
    override: t
  } = e, n = ms(e, ["override"]), r = m({}, t);
  Object.keys(kt).forEach((p) => {
    delete r[p];
  });
  const o = m(m({}, n), r), a = 480, i = 576, l = 768, c = 992, s = 1200, f = 1600, u = 2e3;
  return m(m(m({}, o), {
    colorLink: o.colorInfoText,
    colorLinkHover: o.colorInfoHover,
    colorLinkActive: o.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: st(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: st(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: st(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: st(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: s - 1,
    screenXL: s,
    screenXLMin: s,
    screenXLMax: f - 1,
    screenXXL: f,
    screenXXLMin: f,
    screenXXLMax: u - 1,
    screenXXXL: u,
    screenXXXLMin: u,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new N("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new N("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new N("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
const Vo = (e) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: e.fontFamily
}), ys = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), bs = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Cs = (e, t) => {
  const {
    fontFamily: n,
    fontSize: r
  } = e, o = `[class^="${t}"], [class*=" ${t}"]`;
  return {
    [o]: {
      fontFamily: n,
      fontSize: r,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [o]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
function Vn(e, t, n) {
  return (r) => {
    const o = x(() => r == null ? void 0 : r.value), [a, i, l] = At(), {
      getPrefixCls: c,
      iconPrefixCls: s
    } = Rn(), f = x(() => c()), u = x(() => ({
      theme: a.value,
      token: i.value,
      hashId: l.value,
      path: ["Shared", f.value]
    }));
    dn(u, () => [{
      // Link
      "&": bs(i.value)
    }]);
    const d = x(() => ({
      theme: a.value,
      token: i.value,
      hashId: l.value,
      path: [e, o.value, s.value]
    }));
    return [dn(d, () => {
      const {
        token: p,
        flush: y
      } = Ss(i.value), h = typeof n == "function" ? n(p) : n, S = m(m({}, h), i.value[e]), b = `.${o.value}`, $ = It(p, {
        componentCls: b,
        prefixCls: o.value,
        iconCls: `.${s.value}`,
        antCls: `.${f.value}`
      }, S), _ = t($, {
        hashId: l.value,
        prefixCls: o.value,
        rootPrefixCls: f.value,
        iconPrefixCls: s.value,
        overrideComponentToken: i.value[e]
      });
      return y(e, S), [Cs(i.value, o.value), _];
    }), l];
  };
}
const Wo = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let pn = !0;
function It() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Wo)
    return m({}, ...t);
  pn = !1;
  const r = {};
  return t.forEach((o) => {
    Object.keys(o).forEach((i) => {
      Object.defineProperty(r, i, {
        configurable: !0,
        enumerable: !0,
        get: () => o[i]
      });
    });
  }), pn = !0, r;
}
function xs() {
}
function Ss(e) {
  let t, n = e, r = xs;
  return Wo && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, {
    get(o, a) {
      return pn && t.add(a), o[a];
    }
  }), r = (o, a) => {
    Array.from(t);
  }), {
    token: n,
    keys: t,
    flush: r
  };
}
const ws = Mo(vs), Go = {
  token: kt,
  hashed: !0
}, Xo = Symbol("DesignTokenContext"), gn = Z(), $s = (e) => {
  pe(Xo, e), se(e, () => {
    gn.value = Me(e), Ra(gn);
  }, {
    immediate: !0,
    deep: !0
  });
}, Os = k({
  props: {
    value: X()
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    return $s(x(() => e.value)), () => {
      var r;
      return (r = n.default) === null || r === void 0 ? void 0 : r.call(n);
    };
  }
});
function At() {
  const e = ce(Xo, x(() => gn.value || Go)), t = x(() => `${ts}-${e.value.hashed || ""}`), n = x(() => e.value.theme || ws), r = $c(n, x(() => [kt, e.value.token]), x(() => ({
    salt: t.value,
    override: m({
      override: e.value.token
    }, e.value.components),
    formatToken: hs
  })));
  return [n, x(() => r.value[0]), x(() => e.value.hashed ? r.value[1] : "")];
}
const Uo = k({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = At(), t = x(() => new N(e.value.colorBgBase).toHsl().l < 0.5 ? {
      opacity: 0.65
    } : {});
    return () => v("svg", {
      style: t.value,
      width: "184",
      height: "152",
      viewBox: "0 0 184 152",
      xmlns: "http://www.w3.org/2000/svg"
    }, [v("g", {
      fill: "none",
      "fill-rule": "evenodd"
    }, [v("g", {
      transform: "translate(24 31.67)"
    }, [v("ellipse", {
      "fill-opacity": ".8",
      fill: "#F5F5F7",
      cx: "67.797",
      cy: "106.89",
      rx: "67.797",
      ry: "12.668"
    }, null), v("path", {
      d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      fill: "#AEB8C2"
    }, null), v("path", {
      d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      fill: "url(#linearGradient-1)",
      transform: "translate(13.56)"
    }, null), v("path", {
      d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      fill: "#F5F5F7"
    }, null), v("path", {
      d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      fill: "#DCE0E6"
    }, null)]), v("path", {
      d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      fill: "#DCE0E6"
    }, null), v("g", {
      transform: "translate(149.65 15.383)",
      fill: "#FFF"
    }, [v("ellipse", {
      cx: "20.654",
      cy: "3.167",
      rx: "2.849",
      ry: "2.815"
    }, null), v("path", {
      d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Uo.PRESENTED_IMAGE_DEFAULT = !0;
const qo = Uo, Ko = k({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, e] = At(), t = x(() => {
      const {
        colorFill: n,
        colorFillTertiary: r,
        colorFillQuaternary: o,
        colorBgContainer: a
      } = e.value;
      return {
        borderColor: new N(n).onBackground(a).toHexString(),
        shadowColor: new N(r).onBackground(a).toHexString(),
        contentColor: new N(o).onBackground(a).toHexString()
      };
    });
    return () => v("svg", {
      width: "64",
      height: "41",
      viewBox: "0 0 64 41",
      xmlns: "http://www.w3.org/2000/svg"
    }, [v("g", {
      transform: "translate(0 1)",
      fill: "none",
      "fill-rule": "evenodd"
    }, [v("ellipse", {
      fill: t.value.shadowColor,
      cx: "32",
      cy: "33",
      rx: "32",
      ry: "7"
    }, null), v("g", {
      "fill-rule": "nonzero",
      stroke: t.value.borderColor
    }, [v("path", {
      d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), v("path", {
      d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      fill: t.value.contentColor
    }, null)])])]);
  }
});
Ko.PRESENTED_IMAGE_SIMPLE = !0;
const Ps = Ko, Ts = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: o,
    fontSize: a,
    lineHeight: i
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: a,
      lineHeight: i,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: o,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDisabled,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, _s = Vn("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n
  } = e, r = It(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: n * 2.5,
    emptyImgHeightMD: n,
    emptyImgHeightSM: n * 0.875
  });
  return [Ts(r)];
});
var Es = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ms = () => ({
  prefixCls: String,
  imageStyle: X(),
  image: rn(),
  description: rn()
}), Wn = k({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: !1,
  props: Ms(),
  setup(e, t) {
    let {
      slots: n = {},
      attrs: r
    } = t;
    const {
      direction: o,
      prefixCls: a
    } = nt("empty", e), [i, l] = _s(a);
    return () => {
      var c, s;
      const f = a.value, u = m(m({}, e), r), {
        image: d = ((c = n.image) === null || c === void 0 ? void 0 : c.call(n)) || Ce(qo),
        description: p = ((s = n.description) === null || s === void 0 ? void 0 : s.call(n)) || void 0,
        imageStyle: y,
        class: h = ""
      } = u, S = Es(u, ["image", "description", "imageStyle", "class"]), b = typeof d == "function" ? d() : d, $ = typeof b == "object" && "type" in b && b.type.PRESENTED_IMAGE_SIMPLE;
      return i(v(ho, {
        componentName: "Empty",
        children: (_) => {
          const O = typeof p < "u" ? p : _.description, w = typeof O == "string" ? O : "empty";
          let T = null;
          return typeof b == "string" ? T = v("img", {
            alt: w,
            src: b
          }, null) : T = b, v("div", I({
            class: F(f, h, l.value, {
              [`${f}-normal`]: $,
              [`${f}-rtl`]: o.value === "rtl"
            })
          }, S), [v("div", {
            class: `${f}-image`,
            style: y
          }, [T]), O && v("p", {
            class: `${f}-description`
          }, [O]), n.default && v("div", {
            class: `${f}-footer`
          }, [fo(n.default())])]);
        }
      }, null));
    };
  }
});
Wn.PRESENTED_IMAGE_DEFAULT = () => Ce(qo);
Wn.PRESENTED_IMAGE_SIMPLE = () => Ce(Ps);
const Ve = Hn(Wn), Yo = (e) => {
  const {
    prefixCls: t
  } = nt("empty", e);
  return ((r) => {
    switch (r) {
      case "Table":
      case "List":
        return v(Ve, {
          image: Ve.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return v(Ve, {
          image: Ve.PRESENTED_IMAGE_SIMPLE,
          class: `${t.value}-small`
        }, null);
      default:
        return v(Ve, null, null);
    }
  })(e.componentName);
};
function ks(e) {
  return v(Yo, {
    componentName: e
  }, null);
}
const Qo = Symbol("SizeContextKey"), Jo = () => ce(Qo, U(void 0)), Is = (e) => {
  const t = Jo();
  return pe(Qo, x(() => e.value || t.value)), e;
}, nt = (e, t) => {
  const n = Jo(), r = vo(), o = ce(zn, m(m({}, po), {
    renderEmpty: (g) => Ce(Yo, {
      componentName: g
    })
  })), a = x(() => o.getPrefixCls(e, t.prefixCls)), i = x(() => {
    var g, P;
    return (g = t.direction) !== null && g !== void 0 ? g : (P = o.direction) === null || P === void 0 ? void 0 : P.value;
  }), l = x(() => {
    var g;
    return (g = t.iconPrefixCls) !== null && g !== void 0 ? g : o.iconPrefixCls.value;
  }), c = x(() => o.getPrefixCls()), s = x(() => {
    var g;
    return (g = o.autoInsertSpaceInButton) === null || g === void 0 ? void 0 : g.value;
  }), f = o.renderEmpty, u = o.space, d = o.pageHeader, p = o.form, y = x(() => {
    var g, P;
    return (g = t.getTargetContainer) !== null && g !== void 0 ? g : (P = o.getTargetContainer) === null || P === void 0 ? void 0 : P.value;
  }), h = x(() => {
    var g, P, M;
    return (P = (g = t.getContainer) !== null && g !== void 0 ? g : t.getPopupContainer) !== null && P !== void 0 ? P : (M = o.getPopupContainer) === null || M === void 0 ? void 0 : M.value;
  }), S = x(() => {
    var g, P;
    return (g = t.dropdownMatchSelectWidth) !== null && g !== void 0 ? g : (P = o.dropdownMatchSelectWidth) === null || P === void 0 ? void 0 : P.value;
  }), b = x(() => {
    var g;
    return (t.virtual === void 0 ? ((g = o.virtual) === null || g === void 0 ? void 0 : g.value) !== !1 : t.virtual !== !1) && S.value !== !1;
  }), $ = x(() => t.size || n.value), _ = x(() => {
    var g, P, M;
    return (g = t.autocomplete) !== null && g !== void 0 ? g : (M = (P = o.input) === null || P === void 0 ? void 0 : P.value) === null || M === void 0 ? void 0 : M.autocomplete;
  }), O = x(() => {
    var g;
    return (g = t.disabled) !== null && g !== void 0 ? g : r.value;
  }), w = x(() => {
    var g;
    return (g = t.csp) !== null && g !== void 0 ? g : o.csp;
  }), T = x(() => {
    var g, P;
    return (g = t.wave) !== null && g !== void 0 ? g : (P = o.wave) === null || P === void 0 ? void 0 : P.value;
  });
  return {
    configProvider: o,
    prefixCls: a,
    direction: i,
    size: $,
    getTargetContainer: y,
    getPopupContainer: h,
    space: u,
    pageHeader: d,
    form: p,
    autoInsertSpaceInButton: s,
    renderEmpty: f,
    virtual: b,
    dropdownMatchSelectWidth: S,
    rootPrefixCls: c,
    getPrefixCls: o.getPrefixCls,
    autocomplete: _,
    csp: w,
    iconPrefixCls: l,
    disabled: O,
    select: o.select,
    wave: T
  };
};
function Rr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Zo(e, t, n) {
  return t && Rr(e.prototype, t), n && Rr(e, n), e;
}
function mt() {
  return (mt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function ea(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ta(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function Lr(e) {
  return ((t = e) != null && typeof t == "object" && Array.isArray(t) === !1) == 1 && Object.prototype.toString.call(e) === "[object Object]";
  var t;
}
var na = Object.prototype, ra = na.toString, As = na.hasOwnProperty, oa = /^\s*function (\w+)/;
function Dr(e) {
  var t, n = (t = e == null ? void 0 : e.type) !== null && t !== void 0 ? t : e;
  if (n) {
    var r = n.toString().match(oa);
    return r ? r[1] : "";
  }
  return "";
}
var Se = function(e) {
  var t, n;
  return Lr(e) !== !1 && typeof (t = e.constructor) == "function" && Lr(n = t.prototype) !== !1 && n.hasOwnProperty("isPrototypeOf") !== !1;
}, aa = function(e) {
  return e;
}, L = aa;
if (process.env.NODE_ENV !== "production") {
  var js = typeof console < "u";
  L = js ? function(e) {
    console.warn("[VueTypes warn]: " + e);
  } : aa;
}
var et = function(e, t) {
  return As.call(e, t);
}, Hs = Number.isInteger || function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}, je = Array.isArray || function(e) {
  return ra.call(e) === "[object Array]";
}, He = function(e) {
  return ra.call(e) === "[object Function]";
}, Ct = function(e) {
  return Se(e) && et(e, "_vueTypes_name");
}, ia = function(e) {
  return Se(e) && (et(e, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t) {
    return et(e, t);
  }));
};
function Gn(e, t) {
  return Object.defineProperty(e.bind(t), "__original", { value: e });
}
function we(e, t, n) {
  var r;
  n === void 0 && (n = !1);
  var o = !0, a = "";
  r = Se(e) ? e : { type: e };
  var i = Ct(r) ? r._vueTypes_name + " - " : "";
  if (ia(r) && r.type !== null) {
    if (r.type === void 0 || r.type === !0 || !r.required && t === void 0)
      return o;
    je(r.type) ? (o = r.type.some(function(u) {
      return we(u, t, !0) === !0;
    }), a = r.type.map(function(u) {
      return Dr(u);
    }).join(" or ")) : o = (a = Dr(r)) === "Array" ? je(t) : a === "Object" ? Se(t) : a === "String" || a === "Number" || a === "Boolean" || a === "Function" ? function(u) {
      if (u == null)
        return "";
      var d = u.constructor.toString().match(oa);
      return d ? d[1] : "";
    }(t) === a : t instanceof r.type;
  }
  if (!o) {
    var l = i + 'value "' + t + '" should be of type "' + a + '"';
    return n === !1 ? (L(l), !1) : l;
  }
  if (et(r, "validator") && He(r.validator)) {
    var c = L, s = [];
    if (L = function(u) {
      s.push(u);
    }, o = r.validator(t), L = c, !o) {
      var f = (s.length > 1 ? "* " : "") + s.join(`
* `);
      return s.length = 0, n === !1 ? (L(f), o) : f;
    }
  }
  return o;
}
function q(e, t) {
  var n = Object.defineProperties(t, { _vueTypes_name: { value: e, writable: !0 }, isRequired: { get: function() {
    return this.required = !0, this;
  } }, def: { value: function(o) {
    return o !== void 0 || this.default ? He(o) || we(this, o, !0) === !0 ? (this.default = je(o) ? function() {
      return [].concat(o);
    } : Se(o) ? function() {
      return Object.assign({}, o);
    } : o, this) : (L(this._vueTypes_name + ' - invalid default value: "' + o + '"'), this) : this;
  } } }), r = n.validator;
  return He(r) && (n.validator = Gn(r, n)), n;
}
function ae(e, t) {
  var n = q(e, t);
  return Object.defineProperty(n, "validate", { value: function(r) {
    return He(this.validator) && L(this._vueTypes_name + ` - calling .validate() will overwrite the current custom validator function. Validator info:
` + JSON.stringify(this)), this.validator = Gn(r, this), this;
  } });
}
function Fr(e, t, n) {
  var r, o, a = (r = t, o = {}, Object.getOwnPropertyNames(r).forEach(function(u) {
    o[u] = Object.getOwnPropertyDescriptor(r, u);
  }), Object.defineProperties({}, o));
  if (a._vueTypes_name = e, !Se(n))
    return a;
  var i, l, c = n.validator, s = ta(n, ["validator"]);
  if (He(c)) {
    var f = a.validator;
    f && (f = (l = (i = f).__original) !== null && l !== void 0 ? l : i), a.validator = Gn(f ? function(u) {
      return f.call(this, u) && c.call(this, u);
    } : c, a);
  }
  return Object.assign(a, s);
}
function jt(e) {
  return e.replace(/^(?!\s*$)/gm, "  ");
}
var Ns = function() {
  return ae("any", {});
}, zs = function() {
  return ae("function", { type: Function });
}, Rs = function() {
  return ae("boolean", { type: Boolean });
}, Ls = function() {
  return ae("string", { type: String });
}, Ds = function() {
  return ae("number", { type: Number });
}, Fs = function() {
  return ae("array", { type: Array });
}, Bs = function() {
  return ae("object", { type: Object });
}, Vs = function() {
  return q("integer", { type: Number, validator: function(e) {
    return Hs(e);
  } });
}, Ws = function() {
  return q("symbol", { validator: function(e) {
    return typeof e == "symbol";
  } });
};
function Gs(e, t) {
  if (t === void 0 && (t = "custom validation failed"), typeof e != "function")
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return q(e.name || "<<anonymous function>>", { validator: function(n) {
    var r = e(n);
    return r || L(this._vueTypes_name + " - " + t), r;
  } });
}
function Xs(e) {
  if (!je(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t = 'oneOf - value should be one of "' + e.join('", "') + '".', n = e.reduce(function(r, o) {
    if (o != null) {
      var a = o.constructor;
      r.indexOf(a) === -1 && r.push(a);
    }
    return r;
  }, []);
  return q("oneOf", { type: n.length > 0 ? n : void 0, validator: function(r) {
    var o = e.indexOf(r) !== -1;
    return o || L(t), o;
  } });
}
function Us(e) {
  if (!je(e))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t = !1, n = [], r = 0; r < e.length; r += 1) {
    var o = e[r];
    if (ia(o)) {
      if (Ct(o) && o._vueTypes_name === "oneOf") {
        n = n.concat(o.type);
        continue;
      }
      if (He(o.validator) && (t = !0), o.type !== !0 && o.type) {
        n = n.concat(o.type);
        continue;
      }
    }
    n.push(o);
  }
  return n = n.filter(function(a, i) {
    return n.indexOf(a) === i;
  }), q("oneOfType", t ? { type: n, validator: function(a) {
    var i = [], l = e.some(function(c) {
      var s = we(Ct(c) && c._vueTypes_name === "oneOf" ? c.type || null : c, a, !0);
      return typeof s == "string" && i.push(s), s === !0;
    });
    return l || L("oneOfType - provided value does not match any of the " + i.length + ` passed-in validators:
` + jt(i.join(`
`))), l;
  } } : { type: n });
}
function qs(e) {
  return q("arrayOf", { type: Array, validator: function(t) {
    var n, r = t.every(function(o) {
      return (n = we(e, o, !0)) === !0;
    });
    return r || L(`arrayOf - value validation error:
` + jt(n)), r;
  } });
}
function Ks(e) {
  return q("instanceOf", { type: e });
}
function Ys(e) {
  return q("objectOf", { type: Object, validator: function(t) {
    var n, r = Object.keys(t).every(function(o) {
      return (n = we(e, t[o], !0)) === !0;
    });
    return r || L(`objectOf - value validation error:
` + jt(n)), r;
  } });
}
function Qs(e) {
  var t = Object.keys(e), n = t.filter(function(o) {
    var a;
    return !!(!((a = e[o]) === null || a === void 0) && a.required);
  }), r = q("shape", { type: Object, validator: function(o) {
    var a = this;
    if (!Se(o))
      return !1;
    var i = Object.keys(o);
    if (n.length > 0 && n.some(function(c) {
      return i.indexOf(c) === -1;
    })) {
      var l = n.filter(function(c) {
        return i.indexOf(c) === -1;
      });
      return L(l.length === 1 ? 'shape - required property "' + l[0] + '" is not defined.' : 'shape - required properties "' + l.join('", "') + '" are not defined.'), !1;
    }
    return i.every(function(c) {
      if (t.indexOf(c) === -1)
        return a._vueTypes_isLoose === !0 || (L('shape - shape definition does not include a "' + c + '" property. Allowed keys: "' + t.join('", "') + '".'), !1);
      var s = we(e[c], o[c], !0);
      return typeof s == "string" && L('shape - "' + c + `" property validation error:
 ` + jt(s)), s === !0;
    });
  } });
  return Object.defineProperty(r, "_vueTypes_isLoose", { writable: !0, value: !1 }), Object.defineProperty(r, "loose", { get: function() {
    return this._vueTypes_isLoose = !0, this;
  } }), r;
}
var re = function() {
  function e() {
  }
  return e.extend = function(t) {
    var n = this;
    if (je(t))
      return t.forEach(function(u) {
        return n.extend(u);
      }), this;
    var r = t.name, o = t.validate, a = o !== void 0 && o, i = t.getter, l = i !== void 0 && i, c = ta(t, ["name", "validate", "getter"]);
    if (et(this, r))
      throw new TypeError('[VueTypes error]: Type "' + r + '" already defined');
    var s, f = c.type;
    return Ct(f) ? (delete c.type, Object.defineProperty(this, r, l ? { get: function() {
      return Fr(r, f, c);
    } } : { value: function() {
      var u, d = Fr(r, f, c);
      return d.validator && (d.validator = (u = d.validator).bind.apply(u, [d].concat([].slice.call(arguments)))), d;
    } })) : (s = l ? { get: function() {
      var u = Object.assign({}, c);
      return a ? ae(r, u) : q(r, u);
    }, enumerable: !0 } : { value: function() {
      var u, d, p = Object.assign({}, c);
      return u = a ? ae(r, p) : q(r, p), p.validator && (u.validator = (d = p.validator).bind.apply(d, [u].concat([].slice.call(arguments)))), u;
    }, enumerable: !0 }, Object.defineProperty(this, r, s));
  }, Zo(e, null, [{ key: "any", get: function() {
    return Ns();
  } }, { key: "func", get: function() {
    return zs().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return Rs().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return Ls().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return Ds().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return Fs().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return Bs().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return Vs().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return Ws();
  } }]), e;
}();
function la(e) {
  var t;
  return e === void 0 && (e = { func: function() {
  }, bool: !0, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (t = function(n) {
    function r() {
      return n.apply(this, arguments) || this;
    }
    return ea(r, n), Zo(r, null, [{ key: "sensibleDefaults", get: function() {
      return mt({}, this.defaults);
    }, set: function(o) {
      this.defaults = o !== !1 ? mt({}, o !== !0 ? o : e) : {};
    } }]), r;
  }(re)).defaults = mt({}, e), t;
}
re.defaults = {}, re.custom = Gs, re.oneOf = Xs, re.instanceOf = Ks, re.oneOfType = Us, re.arrayOf = qs, re.objectOf = Ys, re.shape = Qs, re.utils = { validate: function(e, t) {
  return we(t, e, !0) === !0;
}, toType: function(e, t, n) {
  return n === void 0 && (n = !1), n ? ae(e, t) : q(e, t);
} };
(function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  return ea(t, e), t;
})(la());
const ca = la({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
ca.extend([{
  name: "looseBool",
  getter: !0,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: !0,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: !0,
  type: null
}]);
const Js = ca;
function Zs(e) {
  let {
    prefixCls: t,
    animation: n,
    transitionName: r
  } = e;
  return n ? {
    name: `${t}-${n}`
  } : r ? {
    name: r
  } : {};
}
Nl("bottomLeft", "bottomRight", "topLeft", "topRight");
const sa = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return m(e ? {
    name: e,
    appear: !0,
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    appearActiveClass: `${e}`,
    appearToClass: `${e}-appear ${e}-appear-active`,
    enterFromClass: `${e}-appear ${e}-enter ${e}-appear-prepare ${e}-enter-prepare`,
    enterActiveClass: `${e}`,
    enterToClass: `${e}-enter ${e}-appear ${e}-appear-active ${e}-enter-active`,
    leaveActiveClass: `${e} ${e}-leave`,
    leaveToClass: `${e}-leave-active`
  } : {
    css: !1
  }, t);
}, ua = Symbol("PortalContextKey"), eu = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: !0
  };
  pe(ua, {
    inTriggerContext: t.inTriggerContext,
    shouldRender: x(() => {
      const {
        sPopupVisible: n,
        popupRef: r,
        forceRender: o,
        autoDestroy: a
      } = e || {};
      let i = !1;
      return (n || r || o) && (i = !0), !n && a && (i = !1), i;
    })
  });
}, tu = () => {
  eu({}, {
    inTriggerContext: !1
  });
  const e = ce(ua, {
    shouldRender: x(() => !1),
    inTriggerContext: !1
  });
  return {
    shouldRender: x(() => e.shouldRender.value || e.inTriggerContext === !1)
  };
}, nu = k({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: !1,
  props: {
    getContainer: Js.func.isRequired,
    didUpdate: Function
  },
  setup(e, t) {
    let {
      slots: n
    } = t, r = !0, o;
    const {
      shouldRender: a
    } = tu();
    function i() {
      a.value && (o = e.getContainer());
    }
    La(() => {
      r = !1, i();
    }), bn(() => {
      o || i();
    });
    const l = se(a, () => {
      a.value && !o && (o = e.getContainer()), o && l();
    });
    return Da(() => {
      Yr(() => {
        var c;
        a.value && ((c = e.didUpdate) === null || c === void 0 || c.call(e, e));
      });
    }), () => {
      var c;
      return a.value ? r ? (c = n.default) === null || c === void 0 ? void 0 : c.call(n) : o ? v(Jr, {
        to: o
      }, n) : null : null;
    };
  }
});
let Yt = m({}, Qe.Modal);
function ru(e) {
  e ? Yt = m(m({}, Yt), e) : Yt = m({}, Qe.Modal);
}
const vn = "internalMark", ht = k({
  compatConfig: {
    MODE: 3
  },
  name: "ALocaleProvider",
  props: {
    locale: {
      type: Object
    },
    ANT_MARK__: String
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    Dn(e.ANT_MARK__ === vn, "LocaleProvider", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");
    const r = Ee({
      antLocale: m(m({}, e.locale), {
        exist: !0
      }),
      ANT_MARK__: vn
    });
    return pe("localeData", r), se(() => e.locale, (o) => {
      ru(o && o.Modal), r.antLocale = m(m({}, o), {
        exist: !0
      });
    }, {
      immediate: !0
    }), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
});
ht.install = function(e) {
  return e.component(ht.name, ht), e;
};
const ou = Hn(ht), Ht = k({
  name: "Notice",
  inheritAttrs: !1,
  props: ["prefixCls", "duration", "updateMark", "noticeKey", "closeIcon", "closable", "props", "onClick", "onClose", "holder", "visible"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t, o, a = !1;
    const i = x(() => e.duration === void 0 ? 4.5 : e.duration), l = () => {
      i.value && !a && (o = setTimeout(() => {
        s();
      }, i.value * 1e3));
    }, c = () => {
      o && (clearTimeout(o), o = null);
    }, s = (u) => {
      u && u.stopPropagation(), c();
      const {
        onClose: d,
        noticeKey: p
      } = e;
      d && d(p);
    }, f = () => {
      c(), l();
    };
    return bn(() => {
      l();
    }), Fa(() => {
      a = !0, c();
    }), se([i, () => e.updateMark, () => e.visible], (u, d) => {
      let [p, y, h] = u, [S, b, $] = d;
      (p !== S || y !== b || h !== $ && $) && f();
    }, {
      flush: "post"
    }), () => {
      var u, d;
      const {
        prefixCls: p,
        closable: y,
        closeIcon: h = (u = r.closeIcon) === null || u === void 0 ? void 0 : u.call(r),
        onClick: S,
        holder: b
      } = e, {
        class: $,
        style: _
      } = n, O = `${p}-notice`, w = Object.keys(n).reduce((g, P) => ((P.startsWith("data-") || P.startsWith("aria-") || P === "role") && (g[P] = n[P]), g), {}), T = v("div", I({
        class: F(O, $, {
          [`${O}-closable`]: y
        }),
        style: _,
        onMouseenter: c,
        onMouseleave: l,
        onClick: S
      }, w), [v("div", {
        class: `${O}-content`
      }, [(d = r.default) === null || d === void 0 ? void 0 : d.call(r)]), y ? v("a", {
        tabindex: 0,
        onClick: s,
        class: `${O}-close`
      }, [h || v("span", {
        class: `${O}-close-x`
      }, null)]) : null]);
      return b ? v(Jr, {
        to: b
      }, {
        default: () => T
      }) : T;
    };
  }
});
var au = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Br = 0;
const iu = Date.now();
function Vr() {
  const e = Br;
  return Br += 1, `rcNotification_${iu}_${e}`;
}
const mn = k({
  name: "Notification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId"],
  setup(e, t) {
    let {
      attrs: n,
      expose: r,
      slots: o
    } = t;
    const a = /* @__PURE__ */ new Map(), i = U([]), l = x(() => {
      const {
        prefixCls: f,
        animation: u = "fade"
      } = e;
      let d = e.transitionName;
      return !d && u && (d = `${f}-${u}`), sa(d);
    }), c = (f, u) => {
      const d = f.key || Vr(), p = m(m({}, f), {
        key: d
      }), {
        maxCount: y
      } = e, h = i.value.map((b) => b.notice.key).indexOf(d), S = i.value.concat();
      h !== -1 ? S.splice(h, 1, {
        notice: p,
        holderCallback: u
      }) : (y && i.value.length >= y && (p.key = S[0].notice.key, p.updateMark = Vr(), p.userPassKey = d, S.shift()), S.push({
        notice: p,
        holderCallback: u
      })), i.value = S;
    }, s = (f) => {
      i.value = Ba(i.value).filter((u) => {
        let {
          notice: {
            key: d,
            userPassKey: p
          }
        } = u;
        return (p || d) !== f;
      });
    };
    return r({
      add: c,
      remove: s,
      notices: i
    }), () => {
      var f;
      const {
        prefixCls: u,
        closeIcon: d = (f = o.closeIcon) === null || f === void 0 ? void 0 : f.call(o, {
          prefixCls: u
        })
      } = e, p = i.value.map((h, S) => {
        let {
          notice: b,
          holderCallback: $
        } = h;
        const _ = S === i.value.length - 1 ? b.updateMark : void 0, {
          key: O,
          userPassKey: w
        } = b, {
          content: T
        } = b, g = m(m(m({
          prefixCls: u,
          closeIcon: typeof d == "function" ? d({
            prefixCls: u
          }) : d
        }, b), b.props), {
          key: O,
          noticeKey: w || O,
          updateMark: _,
          onClose: (P) => {
            var M;
            s(P), (M = b.onClose) === null || M === void 0 || M.call(b);
          },
          onClick: b.onClick
        });
        return $ ? v("div", {
          key: O,
          class: `${u}-hook-holder`,
          ref: (P) => {
            typeof O > "u" || (P ? (a.set(O, P), $(P, g)) : a.delete(O));
          }
        }, null) : v(Ht, I(I({}, g), {}, {
          class: F(g.class, e.hashId)
        }), {
          default: () => [typeof T == "function" ? T({
            prefixCls: u
          }) : T]
        });
      }), y = {
        [u]: 1,
        [n.class]: !!n.class,
        [e.hashId]: !0
      };
      return v("div", {
        class: y,
        style: n.style || {
          top: "65px",
          left: "50%"
        }
      }, [v(Zr, I({
        tag: "div"
      }, l.value), {
        default: () => [p]
      })]);
    };
  }
});
mn.newInstance = function(t, n) {
  const r = t || {}, {
    name: o = "notification",
    getContainer: a,
    appContext: i,
    prefixCls: l,
    rootPrefixCls: c,
    transitionName: s,
    hasTransitionName: f,
    useStyle: u
  } = r, d = au(r, ["name", "getContainer", "appContext", "prefixCls", "rootPrefixCls", "transitionName", "hasTransitionName", "useStyle"]), p = document.createElement("div");
  a ? a().appendChild(p) : document.body.appendChild(p);
  const y = k({
    compatConfig: {
      MODE: 3
    },
    name: "NotificationWrapper",
    setup(S, b) {
      let {
        attrs: $
      } = b;
      const _ = Z(), O = x(() => R.getPrefixCls(o, l)), [, w] = u(O);
      return bn(() => {
        n({
          notice(T) {
            var g;
            (g = _.value) === null || g === void 0 || g.add(T);
          },
          removeNotice(T) {
            var g;
            (g = _.value) === null || g === void 0 || g.remove(T);
          },
          destroy() {
            Jn(null, p), p.parentNode && p.parentNode.removeChild(p);
          },
          component: _
        });
      }), () => {
        const T = R, g = T.getRootPrefixCls(c, O.value), P = f ? s : `${O.value}-${s}`;
        return v(ja, I(I({}, T), {}, {
          prefixCls: g
        }), {
          default: () => [v(mn, I(I({
            ref: _
          }, $), {}, {
            prefixCls: O.value,
            transitionName: P,
            hashId: w.value
          }), null)]
        });
      };
    }
  }), h = v(y, d);
  h.appContext = i || h.appContext, Jn(h, p);
};
const fa = mn;
let Wr = 0;
const lu = Date.now();
function Gr() {
  const e = Wr;
  return Wr += 1, `rcNotification_${lu}_${e}`;
}
const cu = k({
  name: "HookNotification",
  inheritAttrs: !1,
  props: ["prefixCls", "transitionName", "animation", "maxCount", "closeIcon", "hashId", "remove", "notices", "getStyles", "getClassName", "onAllRemoved", "getContainer"],
  setup(e, t) {
    let {
      attrs: n,
      slots: r
    } = t;
    const o = /* @__PURE__ */ new Map(), a = x(() => e.notices), i = x(() => {
      let f = e.transitionName;
      if (!f && e.animation)
        switch (typeof e.animation) {
          case "string":
            f = e.animation;
            break;
          case "function":
            f = e.animation().name;
            break;
          case "object":
            f = e.animation.name;
            break;
          default:
            f = `${e.prefixCls}-fade`;
            break;
        }
      return sa(f);
    }), l = (f) => e.remove(f), c = U({});
    se(a, () => {
      const f = {};
      Object.keys(c.value).forEach((u) => {
        f[u] = [];
      }), e.notices.forEach((u) => {
        const {
          placement: d = "topRight"
        } = u.notice;
        d && (f[d] = f[d] || [], f[d].push(u));
      }), c.value = f;
    });
    const s = x(() => Object.keys(c.value));
    return () => {
      var f;
      const {
        prefixCls: u,
        closeIcon: d = (f = r.closeIcon) === null || f === void 0 ? void 0 : f.call(r, {
          prefixCls: u
        })
      } = e, p = s.value.map((y) => {
        var h, S;
        const b = c.value[y], $ = (h = e.getClassName) === null || h === void 0 ? void 0 : h.call(e, y), _ = (S = e.getStyles) === null || S === void 0 ? void 0 : S.call(e, y), O = b.map((g, P) => {
          let {
            notice: M,
            holderCallback: B
          } = g;
          const ne = P === a.value.length - 1 ? M.updateMark : void 0, {
            key: K,
            userPassKey: zt
          } = M, {
            content: Fe
          } = M, C = m(m(m({
            prefixCls: u,
            closeIcon: typeof d == "function" ? d({
              prefixCls: u
            }) : d
          }, M), M.props), {
            key: K,
            noticeKey: zt || K,
            updateMark: ne,
            onClose: (E) => {
              var j;
              l(E), (j = M.onClose) === null || j === void 0 || j.call(M);
            },
            onClick: M.onClick
          });
          return B ? v("div", {
            key: K,
            class: `${u}-hook-holder`,
            ref: (E) => {
              typeof K > "u" || (E ? (o.set(K, E), B(E, C)) : o.delete(K));
            }
          }, null) : v(Ht, I(I({}, C), {}, {
            class: F(C.class, e.hashId)
          }), {
            default: () => [typeof Fe == "function" ? Fe({
              prefixCls: u
            }) : Fe]
          });
        }), w = {
          [u]: 1,
          [`${u}-${y}`]: 1,
          [n.class]: !!n.class,
          [e.hashId]: !0,
          [$]: !!$
        };
        function T() {
          var g;
          b.length > 0 || (Reflect.deleteProperty(c.value, y), (g = e.onAllRemoved) === null || g === void 0 || g.call(e));
        }
        return v("div", {
          key: y,
          class: w,
          style: n.style || _ || {
            top: "65px",
            left: "50%"
          }
        }, [v(Zr, I(I({
          tag: "div"
        }, i.value), {}, {
          onAfterLeave: T
        }), {
          default: () => [O]
        })]);
      });
      return v(nu, {
        getContainer: e.getContainer
      }, {
        default: () => [p]
      });
    };
  }
}), su = cu;
var uu = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const fu = () => document.body;
let Xr = 0;
function du() {
  const e = {};
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach((o) => {
    o && Object.keys(o).forEach((a) => {
      const i = o[a];
      i !== void 0 && (e[a] = i);
    });
  }), e;
}
function da() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    getContainer: t = fu,
    motion: n,
    prefixCls: r,
    maxCount: o,
    getClassName: a,
    getStyles: i,
    onAllRemoved: l
  } = e, c = uu(e, ["getContainer", "motion", "prefixCls", "maxCount", "getClassName", "getStyles", "onAllRemoved"]), s = Z([]), f = Z(), u = (b, $) => {
    const _ = b.key || Gr(), O = m(m({}, b), {
      key: _
    }), w = s.value.map((g) => g.notice.key).indexOf(_), T = s.value.concat();
    w !== -1 ? T.splice(w, 1, {
      notice: O,
      holderCallback: $
    }) : (o && s.value.length >= o && (O.key = T[0].notice.key, O.updateMark = Gr(), O.userPassKey = _, T.shift()), T.push({
      notice: O,
      holderCallback: $
    })), s.value = T;
  }, d = (b) => {
    s.value = s.value.filter(($) => {
      let {
        notice: {
          key: _,
          userPassKey: O
        }
      } = $;
      return (O || _) !== b;
    });
  }, p = () => {
    s.value = [];
  }, y = () => v(su, {
    ref: f,
    prefixCls: r,
    maxCount: o,
    notices: s.value,
    remove: d,
    getClassName: a,
    getStyles: i,
    animation: n,
    hashId: e.hashId,
    onAllRemoved: l,
    getContainer: t
  }, null), h = Z([]), S = {
    open: (b) => {
      const $ = du(c, b);
      ($.key === null || $.key === void 0) && ($.key = `vc-notification-${Xr}`, Xr += 1), h.value = [...h.value, {
        type: "open",
        config: $
      }];
    },
    close: (b) => {
      h.value = [...h.value, {
        type: "close",
        key: b
      }];
    },
    destroy: () => {
      h.value = [...h.value, {
        type: "destroy"
      }];
    }
  };
  return se(h, () => {
    h.value.length && (h.value.forEach((b) => {
      switch (b.type) {
        case "open":
          u(b.config);
          break;
        case "close":
          d(b.key);
          break;
        case "destroy":
          p();
          break;
      }
    }), h.value = []);
  }), [S, y];
}
const pu = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadowSecondary: r,
    colorBgElevated: o,
    colorSuccess: a,
    colorError: i,
    colorWarning: l,
    colorInfo: c,
    fontSizeLG: s,
    motionEaseInOutCirc: f,
    motionDurationSlow: u,
    marginXS: d,
    paddingXS: p,
    borderRadiusLG: y,
    zIndexPopup: h,
    // Custom token
    messageNoticeContentPadding: S
  } = e, b = new be("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: p,
      transform: "translateY(0)",
      opacity: 1
    }
  }), $ = new be("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: p,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [t]: m(m({}, Vo(e)), {
        position: "fixed",
        top: d,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        pointerEvents: "none",
        zIndex: h,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: b,
          animationDuration: u,
          animationPlayState: "paused",
          animationTimingFunction: f
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: $,
          animationDuration: u,
          animationPlayState: "paused",
          animationTimingFunction: f
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [`${t}-notice`]: {
        padding: p,
        textAlign: "center",
        [n]: {
          verticalAlign: "text-bottom",
          marginInlineEnd: d,
          fontSize: s
        },
        [`${t}-notice-content`]: {
          display: "inline-block",
          padding: S,
          background: o,
          borderRadius: y,
          boxShadow: r,
          pointerEvents: "all"
        },
        [`${t}-success ${n}`]: {
          color: a
        },
        [`${t}-error ${n}`]: {
          color: i
        },
        [`${t}-warning ${n}`]: {
          color: l
        },
        [`
        ${t}-info ${n},
        ${t}-loading ${n}`]: {
          color: c
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: {
        padding: 0,
        textAlign: "start"
      }
    }
  ];
}, Xn = Vn("Message", (e) => {
  const t = It(e, {
    messageNoticeContentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
  });
  return [pu(t)];
}, (e) => ({
  height: 150,
  zIndexPopup: e.zIndexPopupBase + 10
})), gu = {
  info: v(Ot, null, null),
  success: v(St, null, null),
  error: v(wt, null, null),
  warning: v($t, null, null),
  loading: v(Pt, null, null)
}, pa = k({
  name: "PureContent",
  inheritAttrs: !1,
  props: ["prefixCls", "type", "icon"],
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      var r;
      return v("div", {
        class: F(`${e.prefixCls}-custom-content`, `${e.prefixCls}-${e.type}`)
      }, [e.icon || gu[e.type], v("span", null, [(r = n.default) === null || r === void 0 ? void 0 : r.call(n)])]);
    };
  }
});
k({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content"],
  setup(e, t) {
    let {
      slots: n,
      attrs: r
    } = t;
    var o;
    const {
      getPrefixCls: a
    } = Rn(), i = x(() => e.prefixCls || a("message")), [, l] = Xn(i);
    return v(Ht, I(I({}, r), {}, {
      prefixCls: i.value,
      class: F(l.value, `${i.value}-notice-pure-panel`),
      noticeKey: "pure",
      duration: null
    }), {
      default: () => [v(pa, {
        prefixCls: i.value,
        type: e.type,
        icon: e.icon
      }, {
        default: () => [(o = n.default) === null || o === void 0 ? void 0 : o.call(n)]
      })]
    });
  }
});
var vu = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const mu = 8, hu = 3, yu = k({
  name: "Holder",
  inheritAttrs: !1,
  props: ["top", "prefixCls", "getContainer", "maxCount", "duration", "rtl", "transitionName", "onAllRemoved", "animation", "staticGetContainer"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    var r, o;
    const {
      getPrefixCls: a,
      getPopupContainer: i
    } = nt("message", e), l = x(() => a("message", e.prefixCls)), [, c] = Xn(l), s = () => {
      var h;
      const S = (h = e.top) !== null && h !== void 0 ? h : mu;
      return {
        left: "50%",
        transform: "translateX(-50%)",
        top: typeof S == "number" ? `${S}px` : S
      };
    }, f = () => F(c.value, e.rtl ? `${l.value}-rtl` : ""), u = () => {
      var h;
      return Zs({
        prefixCls: l.value,
        animation: (h = e.animation) !== null && h !== void 0 ? h : "move-up",
        transitionName: e.transitionName
      });
    }, d = v("span", {
      class: `${l.value}-close-x`
    }, [v(_n, {
      class: `${l.value}-close-icon`
    }, null)]), [p, y] = da({
      //@ts-ignore
      getStyles: s,
      prefixCls: l.value,
      getClassName: f,
      motion: u,
      closable: !1,
      closeIcon: d,
      duration: (r = e.duration) !== null && r !== void 0 ? r : hu,
      getContainer: (o = e.staticGetContainer) !== null && o !== void 0 ? o : i.value,
      maxCount: e.maxCount,
      onAllRemoved: e.onAllRemoved
    });
    return n(m(m({}, p), {
      prefixCls: l,
      hashId: c
    })), y;
  }
});
let Ur = 0;
function bu(e) {
  const t = Z(null), n = Symbol("messageHolderKey"), r = (c) => {
    var s;
    (s = t.value) === null || s === void 0 || s.close(c);
  }, o = (c) => {
    if (!t.value) {
      const w = () => {
      };
      return w.then = () => {
      }, w;
    }
    const {
      open: s,
      prefixCls: f,
      hashId: u
    } = t.value, d = `${f}-notice`, {
      content: p,
      icon: y,
      type: h,
      key: S,
      class: b,
      onClose: $
    } = c, _ = vu(c, ["content", "icon", "type", "key", "class", "onClose"]);
    let O = S;
    return O == null && (Ur += 1, O = `antd-message-${Ur}`), jl((w) => (s(m(m({}, _), {
      key: O,
      content: () => v(pa, {
        prefixCls: f,
        type: h,
        icon: typeof y == "function" ? y() : y
      }, {
        default: () => [typeof p == "function" ? p() : p]
      }),
      placement: "top",
      // @ts-ignore
      class: F(h && `${d}-${h}`, u, b),
      onClose: () => {
        $ == null || $(), w();
      }
    })), () => {
      r(O);
    }));
  }, i = {
    open: o,
    destroy: (c) => {
      var s;
      c !== void 0 ? r(c) : (s = t.value) === null || s === void 0 || s.destroy();
    }
  };
  return ["info", "success", "warning", "error", "loading"].forEach((c) => {
    const s = (f, u, d) => {
      let p;
      f && typeof f == "object" && "content" in f ? p = f : p = {
        content: f
      };
      let y, h;
      typeof u == "function" ? h = u : (y = u, h = d);
      const S = m(m({
        onClose: h,
        duration: y
      }, p), {
        type: c
      });
      return o(S);
    };
    i[c] = s;
  }), [i, () => v(yu, I(I({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function Cu(e) {
  return bu(e);
}
let ga = 3, va, D, xu = 1, ma = "", ha = "move-up", ya = !1, ba = () => document.body, Ca, xa = !1;
function Su() {
  return xu++;
}
function wu(e) {
  e.top !== void 0 && (va = e.top, D = null), e.duration !== void 0 && (ga = e.duration), e.prefixCls !== void 0 && (ma = e.prefixCls), e.getContainer !== void 0 && (ba = e.getContainer, D = null), e.transitionName !== void 0 && (ha = e.transitionName, D = null, ya = !0), e.maxCount !== void 0 && (Ca = e.maxCount, D = null), e.rtl !== void 0 && (xa = e.rtl);
}
function $u(e, t) {
  if (D) {
    t(D);
    return;
  }
  fa.newInstance({
    appContext: e.appContext,
    prefixCls: e.prefixCls || ma,
    rootPrefixCls: e.rootPrefixCls,
    transitionName: ha,
    hasTransitionName: ya,
    style: {
      top: va
    },
    getContainer: ba || e.getPopupContainer,
    maxCount: Ca,
    name: "message",
    useStyle: Xn
  }, (n) => {
    if (D) {
      t(D);
      return;
    }
    D = n, t(n);
  });
}
const Sa = {
  info: Ot,
  success: St,
  error: wt,
  warning: $t,
  loading: Pt
}, Ou = Object.keys(Sa);
function Pu(e) {
  const t = e.duration !== void 0 ? e.duration : ga, n = e.key || Su(), r = new Promise((a) => {
    const i = () => (typeof e.onClose == "function" && e.onClose(), a(!0));
    $u(e, (l) => {
      l.notice({
        key: n,
        duration: t,
        style: e.style || {},
        class: e.class,
        content: (c) => {
          let {
            prefixCls: s
          } = c;
          const f = Sa[e.type], u = f ? v(f, null, null) : "", d = F(`${s}-custom-content`, {
            [`${s}-${e.type}`]: e.type,
            [`${s}-rtl`]: xa === !0
          });
          return v("div", {
            class: d
          }, [typeof e.icon == "function" ? e.icon() : e.icon || u, v("span", null, [typeof e.content == "function" ? e.content() : e.content])]);
        },
        onClose: i,
        onClick: e.onClick
      });
    });
  }), o = () => {
    D && D.removeNotice(n);
  };
  return o.then = (a, i) => r.then(a, i), o.promise = r, o;
}
function Tu(e) {
  return Object.prototype.toString.call(e) === "[object Object]" && !!e.content;
}
const tt = {
  open: Pu,
  config: wu,
  destroy(e) {
    if (D)
      if (e) {
        const {
          removeNotice: t
        } = D;
        t(e);
      } else {
        const {
          destroy: t
        } = D;
        t(), D = null;
      }
  }
};
function _u(e, t) {
  e[t] = (n, r, o) => Tu(n) ? e.open(m(m({}, n), {
    type: t
  })) : (typeof r == "function" && (o = r, r = void 0), e.open({
    content: n,
    duration: r,
    type: t,
    onClose: o
  }));
}
Ou.forEach((e) => _u(tt, e));
tt.warn = tt.warning;
tt.useMessage = Cu;
const Eu = tt, Mu = (e) => {
  const {
    componentCls: t,
    width: n,
    notificationMarginEdge: r
  } = e, o = new be("antNotificationTopFadeIn", {
    "0%": {
      marginTop: "-100%",
      opacity: 0
    },
    "100%": {
      marginTop: 0,
      opacity: 1
    }
  }), a = new be("antNotificationBottomFadeIn", {
    "0%": {
      marginBottom: "-100%",
      opacity: 0
    },
    "100%": {
      marginBottom: 0,
      opacity: 1
    }
  }), i = new be("antNotificationLeftFadeIn", {
    "0%": {
      right: {
        _skip_check_: !0,
        value: n
      },
      opacity: 0
    },
    "100%": {
      right: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  });
  return {
    [`&${t}-top, &${t}-bottom`]: {
      marginInline: 0
    },
    [`&${t}-top`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: o
      }
    },
    [`&${t}-bottom`]: {
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: a
      }
    },
    [`&${t}-topLeft, &${t}-bottomLeft`]: {
      marginInlineEnd: 0,
      marginInlineStart: r,
      [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
        animationName: i
      }
    }
  };
}, ku = Mu, Iu = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadowSecondary: r,
    fontSizeLG: o,
    notificationMarginBottom: a,
    borderRadiusLG: i,
    colorSuccess: l,
    colorInfo: c,
    colorWarning: s,
    colorError: f,
    colorTextHeading: u,
    notificationBg: d,
    notificationPadding: p,
    notificationMarginEdge: y,
    motionDurationMid: h,
    motionEaseInOut: S,
    fontSize: b,
    lineHeight: $,
    width: _,
    notificationIconSize: O
  } = e, w = `${n}-notice`, T = new be("antNotificationFadeIn", {
    "0%": {
      left: {
        _skip_check_: !0,
        value: _
      },
      opacity: 0
    },
    "100%": {
      left: {
        _skip_check_: !0,
        value: 0
      },
      opacity: 1
    }
  }), g = new be("antNotificationFadeOut", {
    "0%": {
      maxHeight: e.animationMaxHeight,
      marginBottom: a,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [n]: m(m(m(m({}, Vo(e)), {
        position: "fixed",
        zIndex: e.zIndexPopup,
        marginInlineEnd: y,
        [`${n}-hook-holder`]: {
          position: "relative"
        },
        [`&${n}-top, &${n}-bottom`]: {
          [`${n}-notice`]: {
            marginInline: "auto auto"
          }
        },
        [`&${n}-topLeft, &${n}-bottomLeft`]: {
          [`${n}-notice`]: {
            marginInlineEnd: "auto",
            marginInlineStart: 0
          }
        },
        //  animation
        [`${n}-fade-enter, ${n}-fade-appear`]: {
          animationDuration: e.motionDurationMid,
          animationTimingFunction: S,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${n}-fade-leave`]: {
          animationTimingFunction: S,
          animationFillMode: "both",
          animationDuration: h,
          animationPlayState: "paused"
        },
        [`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]: {
          animationName: T,
          animationPlayState: "running"
        },
        [`${n}-fade-leave${n}-fade-leave-active`]: {
          animationName: g,
          animationPlayState: "running"
        }
      }), ku(e)), {
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${n}-notice-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [w]: {
        position: "relative",
        width: _,
        maxWidth: `calc(100vw - ${y * 2}px)`,
        marginBottom: a,
        marginInlineStart: "auto",
        padding: p,
        overflow: "hidden",
        lineHeight: $,
        wordWrap: "break-word",
        background: d,
        borderRadius: i,
        boxShadow: r,
        [`${n}-close-icon`]: {
          fontSize: b,
          cursor: "pointer"
        },
        [`${w}-message`]: {
          marginBottom: e.marginXS,
          color: u,
          fontSize: o,
          lineHeight: e.lineHeightLG
        },
        [`${w}-description`]: {
          fontSize: b
        },
        [`&${w}-closable ${w}-message`]: {
          paddingInlineEnd: e.paddingLG
        },
        [`${w}-with-icon ${w}-message`]: {
          marginBottom: e.marginXS,
          marginInlineStart: e.marginSM + O,
          fontSize: o
        },
        [`${w}-with-icon ${w}-description`]: {
          marginInlineStart: e.marginSM + O,
          fontSize: b
        },
        // Icon & color style in different selector level
        // https://github.com/ant-design/ant-design/issues/16503
        // https://github.com/ant-design/ant-design/issues/15512
        [`${w}-icon`]: {
          position: "absolute",
          fontSize: O,
          lineHeight: 0,
          // icon-font
          [`&-success${t}`]: {
            color: l
          },
          [`&-info${t}`]: {
            color: c
          },
          [`&-warning${t}`]: {
            color: s
          },
          [`&-error${t}`]: {
            color: f
          }
        },
        [`${w}-close`]: {
          position: "absolute",
          top: e.notificationPaddingVertical,
          insetInlineEnd: e.notificationPaddingHorizontal,
          color: e.colorIcon,
          outline: "none",
          width: e.notificationCloseButtonSize,
          height: e.notificationCloseButtonSize,
          borderRadius: e.borderRadiusSM,
          transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: e.colorIconHover,
            backgroundColor: e.wireframe ? "transparent" : e.colorFillContent
          }
        },
        [`${w}-btn`]: {
          float: "right",
          marginTop: e.marginSM
        }
      }
    },
    // ============================= Pure =============================
    {
      [`${w}-pure-panel`]: {
        margin: 0
      }
    }
  ];
}, Un = Vn("Notification", (e) => {
  const t = e.paddingMD, n = e.paddingLG, r = It(e, {
    // default.less variables
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    // index.less variables
    notificationPadding: `${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,
    notificationMarginBottom: e.margin,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationIconSize: e.fontSizeLG * e.lineHeightLG,
    notificationCloseButtonSize: e.controlHeightLG * 0.55
  });
  return [Iu(r)];
}, (e) => ({
  zIndexPopup: e.zIndexPopupBase + 50,
  width: 384
}));
function wa(e, t) {
  return t || v("span", {
    class: `${e}-close-x`
  }, [v(_n, {
    class: `${e}-close-icon`
  }, null)]);
}
v(Ot, null, null), v(St, null, null), v(wt, null, null), v($t, null, null), v(Pt, null, null);
const Au = {
  success: St,
  info: Ot,
  error: wt,
  warning: $t
};
function $a(e) {
  let {
    prefixCls: t,
    icon: n,
    type: r,
    message: o,
    description: a,
    btn: i
  } = e, l = null;
  if (n)
    l = v("span", {
      class: `${t}-icon`
    }, [Oe(n)]);
  else if (r) {
    const c = Au[r];
    l = v(c, {
      class: `${t}-icon ${t}-icon-${r}`
    }, null);
  }
  return v("div", {
    class: F({
      [`${t}-with-icon`]: l
    }),
    role: "alert"
  }, [l, v("div", {
    class: `${t}-message`
  }, [o]), v("div", {
    class: `${t}-description`
  }, [a]), i && v("div", {
    class: `${t}-btn`
  }, [i])]);
}
k({
  name: "PurePanel",
  inheritAttrs: !1,
  props: ["prefixCls", "icon", "type", "message", "description", "btn", "closeIcon"],
  setup(e) {
    const {
      getPrefixCls: t
    } = nt("notification", e), n = x(() => e.prefixCls || t("notification")), r = x(() => `${n.value}-notice`), [, o] = Un(n);
    return () => v(Ht, I(I({}, e), {}, {
      prefixCls: n.value,
      class: F(o.value, `${r.value}-pure-panel`),
      noticeKey: "pure",
      duration: null,
      closable: e.closable,
      closeIcon: wa(n.value, e.closeIcon)
    }), {
      default: () => [v($a, {
        prefixCls: r.value,
        icon: e.icon,
        type: e.type,
        message: e.message,
        description: e.description,
        btn: e.btn
      }, null)]
    });
  }
});
function Oa(e, t, n) {
  let r;
  switch (t = typeof t == "number" ? `${t}px` : t, n = typeof n == "number" ? `${n}px` : n, e) {
    case "top":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      r = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      r = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function ju(e) {
  return {
    name: `${e}-fade`
  };
}
var Hu = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const qr = 24, Nu = 4.5, zu = k({
  name: "Holder",
  inheritAttrs: !1,
  props: ["prefixCls", "class", "type", "icon", "content", "onAllRemoved"],
  setup(e, t) {
    let {
      expose: n
    } = t;
    const {
      getPrefixCls: r,
      getPopupContainer: o
    } = nt("notification", e), a = x(() => e.prefixCls || r("notification")), i = (d) => {
      var p, y;
      return Oa(d, (p = e.top) !== null && p !== void 0 ? p : qr, (y = e.bottom) !== null && y !== void 0 ? y : qr);
    }, [, l] = Un(a), c = () => F(l.value, {
      [`${a.value}-rtl`]: e.rtl
    }), s = () => ju(a.value), [f, u] = da({
      prefixCls: a.value,
      getStyles: i,
      getClassName: c,
      motion: s,
      closable: !0,
      closeIcon: wa(a.value),
      duration: Nu,
      getContainer: () => {
        var d, p;
        return ((d = e.getPopupContainer) === null || d === void 0 ? void 0 : d.call(e)) || ((p = o.value) === null || p === void 0 ? void 0 : p.call(o)) || document.body;
      },
      maxCount: e.maxCount,
      hashId: l.value,
      onAllRemoved: e.onAllRemoved
    });
    return n(m(m({}, f), {
      prefixCls: a.value,
      hashId: l
    })), u;
  }
});
function Ru(e) {
  const t = Z(null), n = Symbol("notificationHolderKey"), r = (l) => {
    if (!t.value)
      return;
    const {
      open: c,
      prefixCls: s,
      hashId: f
    } = t.value, u = `${s}-notice`, {
      message: d,
      description: p,
      icon: y,
      type: h,
      btn: S,
      class: b
    } = l, $ = Hu(l, ["message", "description", "icon", "type", "btn", "class"]);
    return c(m(m({
      placement: "topRight"
    }, $), {
      content: () => v($a, {
        prefixCls: u,
        icon: typeof y == "function" ? y() : y,
        type: h,
        message: typeof d == "function" ? d() : d,
        description: typeof p == "function" ? p() : p,
        btn: typeof S == "function" ? S() : S
      }, null),
      // @ts-ignore
      class: F(h && `${u}-${h}`, f, b)
    }));
  }, a = {
    open: r,
    destroy: (l) => {
      var c, s;
      l !== void 0 ? (c = t.value) === null || c === void 0 || c.close(l) : (s = t.value) === null || s === void 0 || s.destroy();
    }
  };
  return ["success", "info", "warning", "error"].forEach((l) => {
    a[l] = (c) => r(m(m({}, c), {
      type: l
    }));
  }), [a, () => v(zu, I(I({
    key: n
  }, e), {}, {
    ref: t
  }), null)];
}
function Lu(e) {
  return Ru(e);
}
globalThis && globalThis.__awaiter;
const ve = {};
let Pa = 4.5, Ta = "24px", _a = "24px", hn = "", Ea = "topRight", Ma = () => document.body, ka = null, yn = !1, Ia;
function Du(e) {
  const {
    duration: t,
    placement: n,
    bottom: r,
    top: o,
    getContainer: a,
    closeIcon: i,
    prefixCls: l
  } = e;
  l !== void 0 && (hn = l), t !== void 0 && (Pa = t), n !== void 0 && (Ea = n), r !== void 0 && (_a = typeof r == "number" ? `${r}px` : r), o !== void 0 && (Ta = typeof o == "number" ? `${o}px` : o), a !== void 0 && (Ma = a), i !== void 0 && (ka = i), e.rtl !== void 0 && (yn = e.rtl), e.maxCount !== void 0 && (Ia = e.maxCount);
}
function Fu(e, t) {
  let {
    prefixCls: n,
    placement: r = Ea,
    getContainer: o = Ma,
    top: a,
    bottom: i,
    closeIcon: l = ka,
    appContext: c
  } = e;
  const {
    getPrefixCls: s
  } = tf(), f = s("notification", n || hn), u = `${f}-${r}-${yn}`, d = ve[u];
  if (d) {
    Promise.resolve(d).then((y) => {
      t(y);
    });
    return;
  }
  const p = F(`${f}-${r}`, {
    [`${f}-rtl`]: yn === !0
  });
  fa.newInstance({
    name: "notification",
    prefixCls: n || hn,
    useStyle: Un,
    class: p,
    style: Oa(r, a ?? Ta, i ?? _a),
    appContext: c,
    getContainer: o,
    closeIcon: (y) => {
      let {
        prefixCls: h
      } = y;
      return v("span", {
        class: `${h}-close-x`
      }, [Oe(l, {}, v(_n, {
        class: `${h}-close-icon`
      }, null))]);
    },
    maxCount: Ia,
    hasTransitionName: !0
  }, (y) => {
    ve[u] = y, t(y);
  });
}
const Bu = {
  success: Yi,
  info: $l,
  error: rl,
  warning: hl
};
function Vu(e) {
  const {
    icon: t,
    type: n,
    description: r,
    message: o,
    btn: a
  } = e, i = e.duration === void 0 ? Pa : e.duration;
  Fu(e, (l) => {
    l.notice({
      content: (c) => {
        let {
          prefixCls: s
        } = c;
        const f = `${s}-notice`;
        let u = null;
        if (t)
          u = () => v("span", {
            class: `${f}-icon`
          }, [Oe(t)]);
        else if (n) {
          const d = Bu[n];
          u = () => v(d, {
            class: `${f}-icon ${f}-icon-${n}`
          }, null);
        }
        return v("div", {
          class: u ? `${f}-with-icon` : ""
        }, [u && u(), v("div", {
          class: `${f}-message`
        }, [!r && u ? v("span", {
          class: `${f}-message-single-line-auto-margin`
        }, null) : null, Oe(o)]), v("div", {
          class: `${f}-description`
        }, [Oe(r)]), a ? v("span", {
          class: `${f}-btn`
        }, [Oe(a)]) : null]);
      },
      duration: i,
      closable: !0,
      onClose: e.onClose,
      onClick: e.onClick,
      key: e.key,
      style: e.style || {},
      class: e.class
    });
  });
}
const Ne = {
  open: Vu,
  close(e) {
    Object.keys(ve).forEach((t) => Promise.resolve(ve[t]).then((n) => {
      n.removeNotice(e);
    }));
  },
  config: Du,
  destroy() {
    Object.keys(ve).forEach((e) => {
      Promise.resolve(ve[e]).then((t) => {
        t.destroy();
      }), delete ve[e];
    });
  }
}, Wu = ["success", "info", "warning", "error"];
Wu.forEach((e) => {
  Ne[e] = (t) => Ne.open(m(m({}, t), {
    type: e
  }));
});
Ne.warn = Ne.warning;
Ne.useNotification = Lu;
const Gu = Ne, Xu = `-ant-${Date.now()}-${Math.random()}`;
function Uu(e, t) {
  const n = {}, r = (i, l) => {
    let c = i.clone();
    return c = (l == null ? void 0 : l(c)) || c, c.toRgbString();
  }, o = (i, l) => {
    const c = new N(i), s = xe(c.toRgbString());
    n[`${l}-color`] = r(c), n[`${l}-color-disabled`] = s[1], n[`${l}-color-hover`] = s[4], n[`${l}-color-active`] = s[6], n[`${l}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = s[0], n[`${l}-color-deprecated-border`] = s[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new N(t.primaryColor), l = xe(i.toRgbString());
    l.forEach((s, f) => {
      n[`primary-${f + 1}`] = s;
    }), n["primary-color-deprecated-l-35"] = r(i, (s) => s.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (s) => s.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (s) => s.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (s) => s.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (s) => s.setAlpha(s.getAlpha() * 0.12));
    const c = new N(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (s) => s.setAlpha(s.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (s) => s.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function qu(e, t) {
  const n = Uu(e, t);
  Le() ? yt(n, `${Xu}-dynamic-theme`) : Dn(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Ku = (e) => {
  const [t, n] = At();
  return dn(x(() => ({
    theme: t.value,
    token: n.value,
    hashId: "",
    path: ["ant-design-icons", e.value]
  })), () => [{
    [`.${e.value}`]: m(m({}, ys()), {
      [`.${e.value} .${e.value}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Yu = Ku;
function Qu(e, t) {
  const n = x(() => (e == null ? void 0 : e.value) || {}), r = x(() => n.value.inherit === !1 || !(t != null && t.value) ? Go : t.value);
  return x(() => {
    if (!(e != null && e.value))
      return t == null ? void 0 : t.value;
    const a = m({}, r.value.components);
    return Object.keys(e.value.components || {}).forEach((i) => {
      a[i] = m(m({}, a[i]), e.value.components[i]);
    }), m(m(m({}, r.value), n.value), {
      token: m(m({}, r.value.token), n.value.token),
      components: a
    });
  });
}
var Ju = globalThis && globalThis.__rest || function(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Zu = "ant";
function _e() {
  return R.prefixCls || Zu;
}
function Aa() {
  return R.iconPrefixCls || Nn;
}
const qn = Ee({}), R = Ee({});
xt(() => {
  m(R, qn), R.prefixCls = _e(), R.iconPrefixCls = Aa(), R.getPrefixCls = (e, t) => t || (e ? `${R.prefixCls}-${e}` : R.prefixCls), R.getRootPrefixCls = () => R.prefixCls ? R.prefixCls : _e();
});
let Qt;
const ef = (e) => {
  Qt && Qt(), Qt = xt(() => {
    m(qn, Ee(e)), m(R, Ee(e));
  }), e.theme && qu(_e(), e.theme);
}, tf = () => ({
  getPrefixCls: (e, t) => t || (e ? `${_e()}-${e}` : _e()),
  getIconPrefixCls: Aa,
  getRootPrefixCls: () => R.prefixCls ? R.prefixCls : _e()
}), Ke = k({
  compatConfig: {
    MODE: 3
  },
  name: "AConfigProvider",
  inheritAttrs: !1,
  props: Dl(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const r = Rn(), o = (C, E) => {
      const {
        prefixCls: j = "ant"
      } = e;
      if (E)
        return E;
      const ue = j || r.getPrefixCls("");
      return C ? `${ue}-${C}` : ue;
    }, a = x(() => e.iconPrefixCls || r.iconPrefixCls.value || Nn), i = x(() => a.value !== r.iconPrefixCls.value), l = x(() => {
      var C;
      return e.csp || ((C = r.csp) === null || C === void 0 ? void 0 : C.value);
    }), c = Yu(a), s = Qu(x(() => e.theme), x(() => {
      var C;
      return (C = r.theme) === null || C === void 0 ? void 0 : C.value;
    })), f = (C) => (e.renderEmpty || n.renderEmpty || r.renderEmpty || ks)(C), u = x(() => {
      var C, E;
      return (C = e.autoInsertSpaceInButton) !== null && C !== void 0 ? C : (E = r.autoInsertSpaceInButton) === null || E === void 0 ? void 0 : E.value;
    }), d = x(() => {
      var C;
      return e.locale || ((C = r.locale) === null || C === void 0 ? void 0 : C.value);
    });
    se(d, () => {
      qn.locale = d.value;
    }, {
      immediate: !0
    });
    const p = x(() => {
      var C;
      return e.direction || ((C = r.direction) === null || C === void 0 ? void 0 : C.value);
    }), y = x(() => {
      var C, E;
      return (C = e.space) !== null && C !== void 0 ? C : (E = r.space) === null || E === void 0 ? void 0 : E.value;
    }), h = x(() => {
      var C, E;
      return (C = e.virtual) !== null && C !== void 0 ? C : (E = r.virtual) === null || E === void 0 ? void 0 : E.value;
    }), S = x(() => {
      var C, E;
      return (C = e.dropdownMatchSelectWidth) !== null && C !== void 0 ? C : (E = r.dropdownMatchSelectWidth) === null || E === void 0 ? void 0 : E.value;
    }), b = x(() => {
      var C;
      return e.getTargetContainer !== void 0 ? e.getTargetContainer : (C = r.getTargetContainer) === null || C === void 0 ? void 0 : C.value;
    }), $ = x(() => {
      var C;
      return e.getPopupContainer !== void 0 ? e.getPopupContainer : (C = r.getPopupContainer) === null || C === void 0 ? void 0 : C.value;
    }), _ = x(() => {
      var C;
      return e.pageHeader !== void 0 ? e.pageHeader : (C = r.pageHeader) === null || C === void 0 ? void 0 : C.value;
    }), O = x(() => {
      var C;
      return e.input !== void 0 ? e.input : (C = r.input) === null || C === void 0 ? void 0 : C.value;
    }), w = x(() => {
      var C;
      return e.pagination !== void 0 ? e.pagination : (C = r.pagination) === null || C === void 0 ? void 0 : C.value;
    }), T = x(() => {
      var C;
      return e.form !== void 0 ? e.form : (C = r.form) === null || C === void 0 ? void 0 : C.value;
    }), g = x(() => {
      var C;
      return e.select !== void 0 ? e.select : (C = r.select) === null || C === void 0 ? void 0 : C.value;
    }), P = x(() => e.componentSize), M = x(() => e.componentDisabled), B = x(() => {
      var C, E;
      return (C = e.wave) !== null && C !== void 0 ? C : (E = r.wave) === null || E === void 0 ? void 0 : E.value;
    }), ne = {
      csp: l,
      autoInsertSpaceInButton: u,
      locale: d,
      direction: p,
      space: y,
      virtual: h,
      dropdownMatchSelectWidth: S,
      getPrefixCls: o,
      iconPrefixCls: a,
      theme: x(() => {
        var C, E;
        return (C = s.value) !== null && C !== void 0 ? C : (E = r.theme) === null || E === void 0 ? void 0 : E.value;
      }),
      renderEmpty: f,
      getTargetContainer: b,
      getPopupContainer: $,
      pageHeader: _,
      input: O,
      pagination: w,
      form: T,
      select: g,
      componentSize: P,
      componentDisabled: M,
      transformCellText: x(() => e.transformCellText),
      wave: B
    }, K = x(() => {
      const C = s.value || {}, {
        algorithm: E,
        token: j
      } = C, ue = Ju(C, ["algorithm", "token"]), Rt = E && (!Array.isArray(E) || E.length > 0) ? Mo(E) : void 0;
      return m(m({}, ue), {
        theme: Rt,
        token: m(m({}, kt), j)
      });
    }), zt = x(() => {
      var C, E;
      let j = {};
      return d.value && (j = ((C = d.value.Form) === null || C === void 0 ? void 0 : C.defaultValidateMessages) || ((E = Qe.Form) === null || E === void 0 ? void 0 : E.defaultValidateMessages) || {}), e.form && e.form.validateMessages && (j = m(m({}, j), e.form.validateMessages)), j;
    });
    Fl(ne), Ll({
      validateMessages: zt
    }), Is(P), Bl(M);
    const Fe = (C) => {
      var E, j;
      let ue = i.value ? c((E = n.default) === null || E === void 0 ? void 0 : E.call(n)) : (j = n.default) === null || j === void 0 ? void 0 : j.call(n);
      if (e.theme) {
        const Rt = function() {
          return ue;
        }();
        ue = v(Os, {
          value: K.value
        }, {
          default: () => [Rt]
        });
      }
      return v(ou, {
        locale: d.value || C,
        ANT_MARK__: vn
      }, {
        default: () => [ue]
      });
    };
    return xt(() => {
      p.value && (Eu.config({
        rtl: p.value === "rtl"
      }), Gu.config({
        rtl: p.value === "rtl"
      }));
    }), () => v(ho, {
      children: (C, E, j) => Fe(j)
    }, null);
  }
});
Ke.config = ef;
Ke.install = function(e) {
  e.component(Ke.name, Ke);
};
const ja = Ke;
const nf = /* @__PURE__ */ k({
  __name: "StyleProvider",
  props: {
    prefixCls: { default: "cell-pro" }
  },
  setup(e) {
    return (t, n) => (H(), Ge(Me(ja), { "prefix-cls": t.prefixCls }, {
      default: Xe(() => [
        Va(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["prefix-cls"]));
  }
});
const Kn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Nt = /* @__PURE__ */ Kn(nf, [["__scopeId", "data-v-97d81fdd"]]), rf = { class: "cell-pro-share-button-container" }, of = /* @__PURE__ */ k({
  __name: "ShareButton",
  props: {
    text: { default: () => window.location.href },
    buttonText: { default: "复制" },
    variant: { default: "primary" },
    size: { default: "middle" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["copy", "error"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = U(!1), a = U(!1), i = U("info"), l = U(""), c = async () => {
      if (!(n.disabled || o.value)) {
        o.value = !0;
        try {
          await s(n.text), f("复制成功"), r("copy", n.text);
        } catch (d) {
          console.error("复制失败:", d), u("复制失败，请重试"), r("error", d);
        } finally {
          o.value = !1;
        }
      }
    }, s = async (d) => {
      try {
        if (navigator.clipboard)
          await navigator.clipboard.writeText(d);
        else {
          const p = document.createElement("textarea");
          p.value = d, p.style.position = "fixed", p.style.left = "-999999px", p.style.top = "-999999px", document.body.appendChild(p), p.focus(), p.select(), document.execCommand("copy"), document.body.removeChild(p);
        }
      } catch {
        throw new Error("复制失败");
      }
    }, f = (d) => {
      l.value = d, i.value = "success", a.value = !0;
    }, u = (d) => {
      l.value = d, i.value = "error", a.value = !0;
    };
    return (d, p) => {
      const y = Zn("a-button"), h = Zn("a-message");
      return H(), Ge(Nt, null, {
        default: Xe(() => [
          W("div", rf, [
            v(y, {
              type: d.variant,
              size: d.size,
              disabled: d.disabled || o.value,
              onClick: c
            }, {
              icon: Xe(() => [
                o.value ? (H(), Ge(Me(Pt), { key: 0 })) : (H(), Ge(Me(ul), { key: 1 }))
              ]),
              default: Xe(() => [
                Wa(" " + ut(d.buttonText), 1)
              ]),
              _: 1
            }, 8, ["type", "size", "disabled"]),
            v(h, {
              open: a.value,
              "onUpdate:open": p[0] || (p[0] = (S) => a.value = S),
              type: i.value,
              content: l.value,
              duration: 3
            }, null, 8, ["open", "type", "content"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const Yn = /* @__PURE__ */ Kn(of, [["__scopeId", "data-v-20b7288b"]]), af = { class: "cell-pro-help-link-container" }, lf = ["href", "target", "rel"], cf = {
  key: 0,
  class: "help-icon book",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, sf = {
  key: 1,
  class: "help-icon question",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, uf = {
  key: 2,
  class: "help-icon info",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, ff = {
  key: 3,
  class: "help-icon external",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, df = { class: "cell-pro-help-text" }, pf = {
  key: 4,
  class: "cell-pro-external-arrow",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, gf = ["disabled"], vf = {
  key: 0,
  class: "help-icon book",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, mf = {
  key: 1,
  class: "help-icon question",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, hf = {
  key: 2,
  class: "help-icon info",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, yf = {
  key: 3,
  class: "help-icon external",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, bf = { class: "cell-pro-help-text" }, Cf = /* @__PURE__ */ k({
  __name: "HelpLink",
  props: {
    text: { default: "帮助" },
    href: { default: "" },
    target: { default: "_blank" },
    rel: { default: "noopener noreferrer" },
    iconType: { default: "question" },
    variant: { default: "primary" },
    size: { default: "medium" },
    disabled: { type: Boolean, default: !1 },
    tooltip: { default: "" },
    tooltipPosition: { default: "top" }
  },
  emits: ["click", "help"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = U(!1), a = x(() => n.href && n.target === "_blank"), i = (l) => {
      if (n.disabled) {
        l.preventDefault();
        return;
      }
      r("click", l), r("help", { text: n.text, href: n.href });
    };
    return (l, c) => (H(), Ge(Nt, null, {
      default: Xe(() => [
        W("div", af, [
          l.href ? (H(), Y("a", {
            key: 0,
            href: l.href,
            target: l.target,
            rel: l.rel,
            class: Lt(["cell-pro-help-link", [l.variant, l.size, { disabled: l.disabled }]]),
            onClick: i,
            onMouseenter: c[0] || (c[0] = (s) => o.value = !0),
            onMouseleave: c[1] || (c[1] = (s) => o.value = !1)
          }, [
            l.iconType === "book" ? (H(), Y("svg", cf, c[4] || (c[4] = [
              W("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }, null, -1)
            ]))) : l.iconType === "question" ? (H(), Y("svg", sf, c[5] || (c[5] = [
              W("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }, null, -1)
            ]))) : l.iconType === "info" ? (H(), Y("svg", uf, c[6] || (c[6] = [
              W("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }, null, -1)
            ]))) : l.iconType === "external" ? (H(), Y("svg", ff, c[7] || (c[7] = [
              W("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }, null, -1)
            ]))) : rt("", !0),
            W("span", df, ut(l.text), 1),
            a.value ? (H(), Y("svg", pf, c[8] || (c[8] = [
              W("path", { d: "M7 17L17 7M17 7H7M17 7V17" }, null, -1)
            ]))) : rt("", !0)
          ], 42, lf)) : (H(), Y("button", {
            key: 1,
            class: Lt(["cell-pro-help-link", [l.variant, l.size, { disabled: l.disabled }]]),
            onClick: i,
            onMouseenter: c[2] || (c[2] = (s) => o.value = !0),
            onMouseleave: c[3] || (c[3] = (s) => o.value = !1),
            disabled: l.disabled
          }, [
            l.iconType === "book" ? (H(), Y("svg", vf, c[9] || (c[9] = [
              W("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }, null, -1)
            ]))) : l.iconType === "question" ? (H(), Y("svg", mf, c[10] || (c[10] = [
              W("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }, null, -1)
            ]))) : l.iconType === "info" ? (H(), Y("svg", hf, c[11] || (c[11] = [
              W("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }, null, -1)
            ]))) : l.iconType === "external" ? (H(), Y("svg", yf, c[12] || (c[12] = [
              W("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }, null, -1)
            ]))) : rt("", !0),
            W("span", bf, ut(l.text), 1)
          ], 42, gf)),
          o.value && l.tooltip ? (H(), Y("div", {
            key: 2,
            class: Lt(["cell-pro-tooltip", l.tooltipPosition])
          }, ut(l.tooltip), 3)) : rt("", !0)
        ])
      ]),
      _: 1
    }));
  }
});
const Qn = /* @__PURE__ */ Kn(Cf, [["__scopeId", "data-v-0690c573"]]);
function xf(e, t, n = {}) {
  const {
    shadowRoot: r = !1,
    styles: o = [],
    prefixCls: a = "cell-pro"
  } = n;
  return Ga({
    name: t,
    shadowRoot: r,
    styles: o,
    // 使用 render 函数确保组件正确渲染
    render() {
      return Ce(e, {
        ...this.$attrs,
        // 确保样式前缀正确传递
        prefixCls: this.prefixCls || a
      }, this.$slots);
    },
    // 定义组件属性
    props: {
      prefixCls: {
        type: String,
        default: a
      }
    }
  });
}
function Sf(e, t, n) {
  if (typeof customElements > "u") {
    console.warn("Web Components not supported in this environment");
    return;
  }
  if (customElements.get(e)) {
    console.warn(`Web Component ${e} is already registered`);
    return;
  }
  const r = xf(t, e, n);
  return customElements.define(e, r), r;
}
function wf(e) {
  e.forEach(({ tagName: t, component: n, options: r }) => {
    Sf(t, n, r);
  });
}
function $f() {
  wf([
    {
      tagName: "share-button",
      component: Yn,
      options: {
        shadowRoot: !1,
        styles: [],
        prefixCls: "cell-pro"
      }
    },
    {
      tagName: "help-link",
      component: Qn,
      options: {
        shadowRoot: !1,
        styles: [],
        prefixCls: "cell-pro"
      }
    }
  ]);
}
const Of = {
  install(e) {
    e.component("ShareButton", Yn), e.component("HelpLink", Qn), e.component("StyleProvider", Nt);
  }
}, Tf = {
  ShareButton: Yn,
  HelpLink: Qn,
  StyleProvider: Nt,
  registerWebComponents: $f,
  install: Of
};
export {
  Qn as HelpLink,
  Yn as ShareButton,
  Nt as StyleProvider,
  Tf as default,
  Of as install,
  $f as registerWebComponents
};
