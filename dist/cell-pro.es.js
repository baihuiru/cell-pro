var De = Object.defineProperty;
var qe = (e, n, t) => n in e ? De(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var j = (e, n, t) => (qe(e, typeof n != "symbol" ? n + "" : n, t), t);
import { inject as We, ref as w, h as Q, getCurrentInstance as Ue, nextTick as Ge, reactive as Qe, defineComponent as X, createVNode as x, resolveComponent as le, openBlock as d, createElementBlock as p, withCtx as se, createBlock as ce, unref as ue, createTextVNode as Ye, toDisplayString as N, computed as Ze, normalizeClass as R, createElementVNode as g, createCommentVNode as P, createApp as Je } from "vue";
function v(e, n) {
  Xe(e) && (e = "100%");
  var t = Ke(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function Xe(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Ke(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function et(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function I(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function V(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function tt(e, n, t) {
  return {
    r: v(e, 255) * 255,
    g: v(n, 255) * 255,
    b: v(t, 255) * 255
  };
}
function D(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * (6 * t) : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function nt(e, n, t) {
  var r, a, o;
  if (e = v(e, 360), n = v(n, 100), t = v(t, 100), n === 0)
    a = t, o = t, r = t;
  else {
    var s = t < 0.5 ? t * (1 + n) : t + n - t * n, i = 2 * t - s;
    r = D(i, s, e + 1 / 3), a = D(i, s, e), o = D(i, s, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function rt(e, n, t) {
  e = v(e, 255), n = v(n, 255), t = v(t, 255);
  var r = Math.max(e, n, t), a = Math.min(e, n, t), o = 0, s = r, i = r - a, l = r === 0 ? 0 : i / r;
  if (r === a)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (n - t) / i + (n < t ? 6 : 0);
        break;
      case n:
        o = (t - e) / i + 2;
        break;
      case t:
        o = (e - n) / i + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: s };
}
function at(e, n, t) {
  e = v(e, 360) * 6, n = v(n, 100), t = v(t, 100);
  var r = Math.floor(e), a = e - r, o = t * (1 - n), s = t * (1 - a * n), i = t * (1 - (1 - a) * n), l = r % 6, c = [t, s, o, o, i, t][l], y = [i, t, t, s, o, o][l], C = [o, o, i, t, t, s][l];
  return { r: c * 255, g: y * 255, b: C * 255 };
}
function ot(e, n, t, r) {
  var a = [
    V(Math.round(e).toString(16)),
    V(Math.round(n).toString(16)),
    V(Math.round(t).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function fe(e) {
  return b(e) / 255;
}
function b(e) {
  return parseInt(e, 16);
}
var de = {
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
function A(e) {
  var n = { r: 0, g: 0, b: 0 }, t = 1, r = null, a = null, o = null, s = !1, i = !1;
  return typeof e == "string" && (e = st(e)), typeof e == "object" && (m(e.r) && m(e.g) && m(e.b) ? (n = tt(e.r, e.g, e.b), s = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : m(e.h) && m(e.s) && m(e.v) ? (r = I(e.s), a = I(e.v), n = at(e.h, r, a), s = !0, i = "hsv") : m(e.h) && m(e.s) && m(e.l) && (r = I(e.s), o = I(e.l), n = nt(e.h, r, o), s = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = et(t), {
    ok: s,
    format: e.format || i,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: t
  };
}
var it = "[-\\+]?\\d+%?", lt = "[-\\+]?\\d*\\.\\d+%?", k = "(?:".concat(lt, ")|(?:").concat(it, ")"), q = "[\\s|\\(]+(".concat(k, ")[,|\\s]+(").concat(k, ")[,|\\s]+(").concat(k, ")\\s*\\)?"), W = "[\\s|\\(]+(".concat(k, ")[,|\\s]+(").concat(k, ")[,|\\s]+(").concat(k, ")[,|\\s]+(").concat(k, ")\\s*\\)?"), h = {
  CSS_UNIT: new RegExp(k),
  rgb: new RegExp("rgb" + q),
  rgba: new RegExp("rgba" + W),
  hsl: new RegExp("hsl" + q),
  hsla: new RegExp("hsla" + W),
  hsv: new RegExp("hsv" + q),
  hsva: new RegExp("hsva" + W),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function st(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (de[e])
    e = de[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = h.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = h.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = h.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = h.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = h.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = h.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = h.hex8.exec(e), t ? {
    r: b(t[1]),
    g: b(t[2]),
    b: b(t[3]),
    a: fe(t[4]),
    format: n ? "name" : "hex8"
  } : (t = h.hex6.exec(e), t ? {
    r: b(t[1]),
    g: b(t[2]),
    b: b(t[3]),
    format: n ? "name" : "hex"
  } : (t = h.hex4.exec(e), t ? {
    r: b(t[1] + t[1]),
    g: b(t[2] + t[2]),
    b: b(t[3] + t[3]),
    a: fe(t[4] + t[4]),
    format: n ? "name" : "hex8"
  } : (t = h.hex3.exec(e), t ? {
    r: b(t[1] + t[1]),
    g: b(t[2] + t[2]),
    b: b(t[3] + t[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function m(e) {
  return !!h.CSS_UNIT.exec(String(e));
}
var z = 2, pe = 0.16, ct = 0.05, ut = 0.05, ft = 0.15, Te = 5, Ae = 4, dt = [{
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
function be(e) {
  var n = e.r, t = e.g, r = e.b, a = rt(n, t, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function $(e) {
  var n = e.r, t = e.g, r = e.b;
  return "#".concat(ot(n, t, r, !1));
}
function pt(e, n, t) {
  var r = t / 100, a = {
    r: (n.r - e.r) * r + e.r,
    g: (n.g - e.g) * r + e.g,
    b: (n.b - e.b) * r + e.b
  };
  return a;
}
function ve(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - z * n : Math.round(e.h) + z * n : r = t ? Math.round(e.h) + z * n : Math.round(e.h) - z * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function ge(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - pe * n : n === Ae ? r = e.s + pe : r = e.s + ct * n, r > 1 && (r = 1), t && n === Te && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function he(e, n, t) {
  var r;
  return t ? r = e.v + ut * n : r = e.v - ft * n, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Y(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = A(e), a = Te; a > 0; a -= 1) {
    var o = be(r), s = $(A({
      h: ve(o, a, !0),
      s: ge(o, a, !0),
      v: he(o, a, !0)
    }));
    t.push(s);
  }
  t.push($(r));
  for (var i = 1; i <= Ae; i += 1) {
    var l = be(r), c = $(A({
      h: ve(l, i),
      s: ge(l, i),
      v: he(l, i)
    }));
    t.push(c);
  }
  return n.theme === "dark" ? dt.map(function(y) {
    var C = y.index, u = y.opacity, f = $(pt(A(n.backgroundColor || "#141414"), A(t[C]), u * 100));
    return f;
  }) : t;
}
var U = {
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
}, B = {}, G = {};
Object.keys(U).forEach(function(e) {
  B[e] = Y(U[e]), B[e].primary = B[e][5], G[e] = Y(U[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), G[e].primary = G[e][5];
});
var bt = B.blue, vt = Symbol("iconContext"), _e = function() {
  return We(vt, {
    prefixCls: w("anticon"),
    rootClassName: w(""),
    csp: w()
  });
};
function K() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function gt(e, n) {
  return e && e.contains ? e.contains(n) : !1;
}
var me = "data-vc-order", ht = "vc-icon-key", Z = /* @__PURE__ */ new Map();
function Ee() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : ht;
}
function ee(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function mt(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Me(e) {
  return Array.from((Z.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function je(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!K())
    return null;
  var t = n.csp, r = n.prepend, a = document.createElement("style");
  a.setAttribute(me, mt(r)), t && t.nonce && (a.nonce = t.nonce), a.innerHTML = e;
  var o = ee(n), s = o.firstChild;
  if (r) {
    if (r === "queue") {
      var i = Me(o).filter(function(l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(me));
      });
      if (i.length)
        return o.insertBefore(a, i[i.length - 1].nextSibling), a;
    }
    o.insertBefore(a, s);
  } else
    o.appendChild(a);
  return a;
}
function yt(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = ee(n);
  return Me(t).find(function(r) {
    return r.getAttribute(Ee(n)) === e;
  });
}
function Ct(e, n) {
  var t = Z.get(e);
  if (!t || !gt(document, t)) {
    var r = je("", n), a = r.parentNode;
    Z.set(e, a), e.removeChild(r);
  }
}
function wt(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ee(t);
  Ct(r, t);
  var a = yt(n, t);
  if (a)
    return t.csp && t.csp.nonce && a.nonce !== t.csp.nonce && (a.nonce = t.csp.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  var o = je(e, t);
  return o.setAttribute(Ee(t), n), o;
}
function ye(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), r.forEach(function(a) {
      kt(e, a, t[a]);
    });
  }
  return e;
}
function kt(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function xt(e, n) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(n));
}
function St(e, n) {
  xt(e, "[@ant-design/icons-vue] ".concat(n));
}
function Ce(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function J(e, n, t) {
  return t ? Q(e.tag, ye({
    key: n
  }, t, e.attrs), (e.children || []).map(function(r, a) {
    return J(r, "".concat(n, "-").concat(e.tag, "-").concat(a));
  })) : Q(e.tag, ye({
    key: n
  }, e.attrs), (e.children || []).map(function(r, a) {
    return J(r, "".concat(n, "-").concat(e.tag, "-").concat(a));
  }));
}
function Pe(e) {
  return Y(e)[0];
}
function Ie(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Ot = `
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
function ze(e) {
  return e && e.getRootNode && e.getRootNode();
}
function Tt(e) {
  return K() ? ze(e) instanceof ShadowRoot : !1;
}
function At(e) {
  return Tt(e) ? ze(e) : null;
}
var _t = function() {
  var n = _e(), t = n.prefixCls, r = n.csp, a = Ue(), o = Ot;
  t && (o = o.replace(/anticon/g, t.value)), Ge(function() {
    if (K()) {
      var s = a.vnode.el, i = At(s);
      wt(o, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: i
      });
    }
  });
}, Et = ["icon", "primaryColor", "secondaryColor"];
function Mt(e, n) {
  if (e == null)
    return {};
  var t = jt(e, n), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function jt(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function H(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), r.forEach(function(a) {
      Pt(e, a, t[a]);
    });
  }
  return e;
}
function Pt(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var E = Qe({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function It(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  E.primaryColor = n, E.secondaryColor = t || Pe(n), E.calculated = !!t;
}
function zt() {
  return H({}, E);
}
var S = function(n, t) {
  var r = H({}, n, t.attrs), a = r.icon, o = r.primaryColor, s = r.secondaryColor, i = Mt(r, Et), l = E;
  if (o && (l = {
    primaryColor: o,
    secondaryColor: s || Pe(o)
  }), St(Ce(a), "icon should be icon definiton, but got ".concat(a)), !Ce(a))
    return null;
  var c = a;
  return c && typeof c.icon == "function" && (c = H({}, c, {
    icon: c.icon(l.primaryColor, l.secondaryColor)
  })), J(c.icon, "svg-".concat(c.name), H({}, i, {
    "data-icon": c.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
S.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
S.inheritAttrs = !1;
S.displayName = "IconBase";
S.getTwoToneColors = zt;
S.setTwoToneColors = It;
const te = S;
function $t(e, n) {
  return Ft(e) || Ht(e, n) || Bt(e, n) || Nt();
}
function Nt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bt(e, n) {
  if (e) {
    if (typeof e == "string")
      return we(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return we(e, n);
  }
}
function we(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Ht(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], a = !0, o = !1, s, i;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (r.push(s.value), !(n && r.length === n)); a = !0)
        ;
    } catch (l) {
      o = !0, i = l;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function Ft(e) {
  if (Array.isArray(e))
    return e;
}
function $e(e) {
  var n = Ie(e), t = $t(n, 2), r = t[0], a = t[1];
  return te.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function Lt() {
  var e = te.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Rt = X({
  name: "InsertStyles",
  setup: function() {
    return _t(), function() {
      return null;
    };
  }
}), Vt = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Dt(e, n) {
  return Gt(e) || Ut(e, n) || Wt(e, n) || qt();
}
function qt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wt(e, n) {
  if (e) {
    if (typeof e == "string")
      return ke(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ke(e, n);
  }
}
function ke(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Ut(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], a = !0, o = !1, s, i;
    try {
      for (t = t.call(e); !(a = (s = t.next()).done) && (r.push(s.value), !(n && r.length === n)); a = !0)
        ;
    } catch (l) {
      o = !0, i = l;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (o)
          throw i;
      }
    }
    return r;
  }
}
function Gt(e) {
  if (Array.isArray(e))
    return e;
}
function xe(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), r.forEach(function(a) {
      _(e, a, t[a]);
    });
  }
  return e;
}
function _(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Qt(e, n) {
  if (e == null)
    return {};
  var t = Yt(e, n), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Yt(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
$e(bt.primary);
var O = function(n, t) {
  var r, a = xe({}, n, t.attrs), o = a.class, s = a.icon, i = a.spin, l = a.rotate, c = a.tabindex, y = a.twoToneColor, C = a.onClick, u = Qt(a, Vt), f = _e(), T = f.prefixCls, M = f.rootClassName, F = (r = {}, _(r, M.value, !!M.value), _(r, T.value, !0), _(r, "".concat(T.value, "-").concat(s.name), !!s.name), _(r, "".concat(T.value, "-spin"), !!i || s.name === "loading"), r), L = c;
  L === void 0 && C && (L = -1);
  var Fe = l ? {
    msTransform: "rotate(".concat(l, "deg)"),
    transform: "rotate(".concat(l, "deg)")
  } : void 0, Le = Ie(y), ie = Dt(Le, 2), Re = ie[0], Ve = ie[1];
  return x("span", xe({
    role: "img",
    "aria-label": s.name
  }, u, {
    onClick: C,
    class: [F, o],
    tabindex: L
  }), [x(te, {
    icon: s,
    primaryColor: Re,
    secondaryColor: Ve,
    style: Fe
  }, null), x(Rt, null, null)]);
};
O.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
O.displayName = "AntdIcon";
O.inheritAttrs = !1;
O.getTwoToneColor = Lt;
O.setTwoToneColor = $e;
const Ne = O;
var Zt = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" };
const Jt = Zt;
function Se(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), r.forEach(function(a) {
      Xt(e, a, t[a]);
    });
  }
  return e;
}
function Xt(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var ne = function(n, t) {
  var r = Se({}, n, t.attrs);
  return x(Ne, Se({}, r, {
    icon: Jt
  }), null);
};
ne.displayName = "CopyOutlined";
ne.inheritAttrs = !1;
const Kt = ne;
var en = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const tn = en;
function Oe(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), r.forEach(function(a) {
      nn(e, a, t[a]);
    });
  }
  return e;
}
function nn(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var re = function(n, t) {
  var r = Oe({}, n, t.attrs);
  return x(Ne, Oe({}, r, {
    icon: tn
  }), null);
};
re.displayName = "LoadingOutlined";
re.inheritAttrs = !1;
const rn = re, an = { class: "copy-button-container" }, on = /* @__PURE__ */ X({
  __name: "ShareButton",
  props: {
    text: { default: () => window.location.href },
    buttonText: { default: "复制" },
    variant: { default: "primary" },
    size: { default: "middle" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["copy", "error"],
  setup(e, { emit: n }) {
    const t = e, r = n, a = w(!1), o = w(!1), s = w("info"), i = w(""), l = async () => {
      if (!(t.disabled || a.value)) {
        a.value = !0;
        try {
          await c(t.text), y("复制成功"), r("copy", t.text);
        } catch (u) {
          console.error("复制失败:", u), C("复制失败，请重试"), r("error", u);
        } finally {
          a.value = !1;
        }
      }
    }, c = async (u) => {
      try {
        if (navigator.clipboard)
          await navigator.clipboard.writeText(u);
        else {
          const f = document.createElement("textarea");
          f.value = u, f.style.position = "fixed", f.style.left = "-999999px", f.style.top = "-999999px", document.body.appendChild(f), f.focus(), f.select(), document.execCommand("copy"), document.body.removeChild(f);
        }
      } catch {
        throw new Error("复制失败");
      }
    }, y = (u) => {
      i.value = u, s.value = "success", o.value = !0;
    }, C = (u) => {
      i.value = u, s.value = "error", o.value = !0;
    };
    return (u, f) => {
      const T = le("a-button"), M = le("a-message");
      return d(), p("div", an, [
        x(T, {
          type: u.variant,
          size: u.size,
          disabled: u.disabled || a.value,
          onClick: l
        }, {
          icon: se(() => [
            a.value ? (d(), ce(ue(rn), { key: 0 })) : (d(), ce(ue(Kt), { key: 1 }))
          ]),
          default: se(() => [
            Ye(" " + N(u.buttonText), 1)
          ]),
          _: 1
        }, 8, ["type", "size", "disabled"]),
        x(M, {
          open: o.value,
          "onUpdate:open": f[0] || (f[0] = (F) => o.value = F),
          type: s.value,
          content: i.value,
          duration: 3
        }, null, 8, ["open", "type", "content"])
      ]);
    };
  }
});
const Be = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, a] of n)
    t[r] = a;
  return t;
}, ae = /* @__PURE__ */ Be(on, [["__scopeId", "data-v-c7b4f365"]]), ln = { class: "help-link-container" }, sn = ["href", "target", "rel"], cn = {
  key: 0,
  class: "help-icon book",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, un = {
  key: 1,
  class: "help-icon question",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, fn = {
  key: 2,
  class: "help-icon info",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, dn = {
  key: 3,
  class: "help-icon external",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, pn = { class: "help-text" }, bn = {
  key: 4,
  class: "external-arrow",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, vn = ["disabled"], gn = {
  key: 0,
  class: "help-icon book",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, hn = {
  key: 1,
  class: "help-icon question",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, mn = {
  key: 2,
  class: "help-icon info",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, yn = {
  key: 3,
  class: "help-icon external",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, Cn = { class: "help-text" }, wn = /* @__PURE__ */ X({
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
  setup(e, { emit: n }) {
    const t = e, r = n, a = w(!1), o = Ze(() => t.href && t.target === "_blank"), s = (i) => {
      if (t.disabled) {
        i.preventDefault();
        return;
      }
      r("click", i), r("help", { text: t.text, href: t.href });
    };
    return (i, l) => (d(), p("div", ln, [
      i.href ? (d(), p("a", {
        key: 0,
        href: i.href,
        target: i.target,
        rel: i.rel,
        class: R(["help-link", [i.variant, i.size, { disabled: i.disabled }]]),
        onClick: s,
        onMouseenter: l[0] || (l[0] = (c) => a.value = !0),
        onMouseleave: l[1] || (l[1] = (c) => a.value = !1)
      }, [
        i.iconType === "book" ? (d(), p("svg", cn, l[4] || (l[4] = [
          g("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }, null, -1)
        ]))) : i.iconType === "question" ? (d(), p("svg", un, l[5] || (l[5] = [
          g("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }, null, -1)
        ]))) : i.iconType === "info" ? (d(), p("svg", fn, l[6] || (l[6] = [
          g("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }, null, -1)
        ]))) : i.iconType === "external" ? (d(), p("svg", dn, l[7] || (l[7] = [
          g("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }, null, -1)
        ]))) : P("", !0),
        g("span", pn, N(i.text), 1),
        o.value ? (d(), p("svg", bn, l[8] || (l[8] = [
          g("path", { d: "M7 17L17 7M17 7H7M17 7V17" }, null, -1)
        ]))) : P("", !0)
      ], 42, sn)) : (d(), p("button", {
        key: 1,
        class: R(["help-link", [i.variant, i.size, { disabled: i.disabled }]]),
        onClick: s,
        onMouseenter: l[2] || (l[2] = (c) => a.value = !0),
        onMouseleave: l[3] || (l[3] = (c) => a.value = !1),
        disabled: i.disabled
      }, [
        i.iconType === "book" ? (d(), p("svg", gn, l[9] || (l[9] = [
          g("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }, null, -1)
        ]))) : i.iconType === "question" ? (d(), p("svg", hn, l[10] || (l[10] = [
          g("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }, null, -1)
        ]))) : i.iconType === "info" ? (d(), p("svg", mn, l[11] || (l[11] = [
          g("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }, null, -1)
        ]))) : i.iconType === "external" ? (d(), p("svg", yn, l[12] || (l[12] = [
          g("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }, null, -1)
        ]))) : P("", !0),
        g("span", Cn, N(i.text), 1)
      ], 42, vn)),
      a.value && i.tooltip ? (d(), p("div", {
        key: 2,
        class: R(["tooltip", i.tooltipPosition])
      }, N(i.tooltip), 3)) : P("", !0)
    ]));
  }
});
const oe = /* @__PURE__ */ Be(wn, [["__scopeId", "data-v-08021254"]]);
class He extends HTMLElement {
  constructor(t) {
    super();
    j(this, "app");
    j(this, "component");
    j(this, "props", {});
    this.component = t, this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this.app && this.app.unmount();
  }
  render() {
    const t = document.createElement("div");
    this.shadowRoot.appendChild(t), this.app = Je({
      render: () => Q(this.component, this.props)
    }), this.app.mount(t);
  }
  setProps(t) {
    this.props = t, this.app && this.render();
  }
}
class kn extends He {
  static get observedAttributes() {
    return ["url", "title", "description", "button-text", "variant", "size", "disabled"];
  }
  constructor() {
    super(ae);
  }
  attributeChangedCallback(n, t, r) {
    if (t !== r) {
      const a = {}, o = {
        "button-text": "buttonText",
        url: "url",
        title: "title",
        description: "description",
        variant: "variant",
        size: "size",
        disabled: "disabled"
      };
      if (o[n]) {
        const s = o[n];
        n === "disabled" ? a[s] = r !== null : a[s] = r, this.setProps(a);
      }
    }
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("share", (n) => {
      this.dispatchEvent(new CustomEvent("share", {
        detail: n.detail,
        bubbles: !0,
        composed: !0
      }));
    }), this.addEventListener("copy", (n) => {
      this.dispatchEvent(new CustomEvent("copy", {
        detail: n.detail,
        bubbles: !0,
        composed: !0
      }));
    }), this.addEventListener("error", (n) => {
      this.dispatchEvent(new CustomEvent("error", {
        detail: n.detail,
        bubbles: !0,
        composed: !0
      }));
    });
  }
}
class xn extends He {
  static get observedAttributes() {
    return ["text", "href", "target", "rel", "icon-type", "variant", "size", "disabled", "tooltip", "tooltip-position"];
  }
  constructor() {
    super(oe);
  }
  attributeChangedCallback(n, t, r) {
    if (t !== r) {
      const a = {}, o = {
        text: "text",
        href: "href",
        target: "target",
        rel: "rel",
        "icon-type": "iconType",
        variant: "variant",
        size: "size",
        disabled: "disabled",
        tooltip: "tooltip",
        "tooltip-position": "tooltipPosition"
      };
      if (o[n]) {
        const s = o[n];
        n === "disabled" ? a[s] = r !== null : a[s] = r, this.setProps(a);
      }
    }
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("click", (n) => {
      this.dispatchEvent(new CustomEvent("click", {
        detail: n.detail,
        bubbles: !0,
        composed: !0
      }));
    }), this.addEventListener("help", (n) => {
      this.dispatchEvent(new CustomEvent("help", {
        detail: n.detail,
        bubbles: !0,
        composed: !0
      }));
    });
  }
}
function Sn() {
  customElements.get("share-button") || customElements.define("share-button", kn), customElements.get("help-link") || customElements.define("help-link", xn);
}
const On = {
  install(e) {
    e.component("ShareButton", ae), e.component("HelpLink", oe);
  }
}, _n = {
  ShareButton: ae,
  HelpLink: oe,
  registerWebComponents: Sn,
  install: On
};
export {
  oe as HelpLink,
  ae as ShareButton,
  _n as default,
  On as install,
  Sn as registerWebComponents
};
