import { inject as Le, ref as C, h as ae, getCurrentInstance as De, nextTick as qe, reactive as We, defineComponent as Z, createVNode as k, resolveComponent as ie, openBlock as d, createElementBlock as p, withCtx as le, createBlock as se, unref as fe, createTextVNode as Ye, toDisplayString as $, computed as Ue, normalizeClass as R, createElementVNode as g, createCommentVNode as E, defineCustomElement as Ge } from "vue";
function h(e, r) {
  Qe(e) && (e = "100%");
  var t = Ze(e);
  return e = r === 360 ? e : Math.min(r, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * r), 10) / 100), Math.abs(e - r) < 1e-6 ? 1 : (r === 360 ? e = (e < 0 ? e % r + r : e % r) / parseFloat(String(r)) : e = e % r / parseFloat(String(r)), e);
}
function Qe(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Ze(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Je(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function I(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function V(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Xe(e, r, t) {
  return {
    r: h(e, 255) * 255,
    g: h(r, 255) * 255,
    b: h(t, 255) * 255
  };
}
function L(e, r, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (r - e) * (6 * t) : t < 1 / 2 ? r : t < 2 / 3 ? e + (r - e) * (2 / 3 - t) * 6 : e;
}
function Ke(e, r, t) {
  var n, o, a;
  if (e = h(e, 360), r = h(r, 100), t = h(t, 100), r === 0)
    o = t, a = t, n = t;
  else {
    var s = t < 0.5 ? t * (1 + r) : t + r - t * r, i = 2 * t - s;
    n = L(i, s, e + 1 / 3), o = L(i, s, e), a = L(i, s, e - 1 / 3);
  }
  return { r: n * 255, g: o * 255, b: a * 255 };
}
function et(e, r, t) {
  e = h(e, 255), r = h(r, 255), t = h(t, 255);
  var n = Math.max(e, r, t), o = Math.min(e, r, t), a = 0, s = n, i = n - o, l = n === 0 ? 0 : i / n;
  if (n === o)
    a = 0;
  else {
    switch (n) {
      case e:
        a = (r - t) / i + (r < t ? 6 : 0);
        break;
      case r:
        a = (t - e) / i + 2;
        break;
      case t:
        a = (e - r) / i + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: l, v: s };
}
function tt(e, r, t) {
  e = h(e, 360) * 6, r = h(r, 100), t = h(t, 100);
  var n = Math.floor(e), o = e - n, a = t * (1 - r), s = t * (1 - o * r), i = t * (1 - (1 - o) * r), l = n % 6, f = [t, s, a, a, i, t][l], y = [i, t, t, s, a, a][l], x = [a, a, i, t, t, s][l];
  return { r: f * 255, g: y * 255, b: x * 255 };
}
function rt(e, r, t, n) {
  var o = [
    V(Math.round(e).toString(16)),
    V(Math.round(r).toString(16)),
    V(Math.round(t).toString(16))
  ];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function ue(e) {
  return b(e) / 255;
}
function b(e) {
  return parseInt(e, 16);
}
var ce = {
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
function _(e) {
  var r = { r: 0, g: 0, b: 0 }, t = 1, n = null, o = null, a = null, s = !1, i = !1;
  return typeof e == "string" && (e = at(e)), typeof e == "object" && (m(e.r) && m(e.g) && m(e.b) ? (r = Xe(e.r, e.g, e.b), s = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : m(e.h) && m(e.s) && m(e.v) ? (n = I(e.s), o = I(e.v), r = tt(e.h, n, o), s = !0, i = "hsv") : m(e.h) && m(e.s) && m(e.l) && (n = I(e.s), a = I(e.l), r = Ke(e.h, n, a), s = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = Je(t), {
    ok: s,
    format: e.format || i,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: t
  };
}
var nt = "[-\\+]?\\d+%?", ot = "[-\\+]?\\d*\\.\\d+%?", w = "(?:".concat(ot, ")|(?:").concat(nt, ")"), D = "[\\s|\\(]+(".concat(w, ")[,|\\s]+(").concat(w, ")[,|\\s]+(").concat(w, ")\\s*\\)?"), q = "[\\s|\\(]+(".concat(w, ")[,|\\s]+(").concat(w, ")[,|\\s]+(").concat(w, ")[,|\\s]+(").concat(w, ")\\s*\\)?"), v = {
  CSS_UNIT: new RegExp(w),
  rgb: new RegExp("rgb" + D),
  rgba: new RegExp("rgba" + q),
  hsl: new RegExp("hsl" + D),
  hsla: new RegExp("hsla" + q),
  hsv: new RegExp("hsv" + D),
  hsva: new RegExp("hsva" + q),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function at(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var r = !1;
  if (ce[e])
    e = ce[e], r = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = v.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = v.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = v.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = v.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = v.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = v.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = v.hex8.exec(e), t ? {
    r: b(t[1]),
    g: b(t[2]),
    b: b(t[3]),
    a: ue(t[4]),
    format: r ? "name" : "hex8"
  } : (t = v.hex6.exec(e), t ? {
    r: b(t[1]),
    g: b(t[2]),
    b: b(t[3]),
    format: r ? "name" : "hex"
  } : (t = v.hex4.exec(e), t ? {
    r: b(t[1] + t[1]),
    g: b(t[2] + t[2]),
    b: b(t[3] + t[3]),
    a: ue(t[4] + t[4]),
    format: r ? "name" : "hex8"
  } : (t = v.hex3.exec(e), t ? {
    r: b(t[1] + t[1]),
    g: b(t[2] + t[2]),
    b: b(t[3] + t[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function m(e) {
  return !!v.CSS_UNIT.exec(String(e));
}
var z = 2, de = 0.16, it = 0.05, lt = 0.05, st = 0.15, Oe = 5, Te = 4, ft = [{
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
function pe(e) {
  var r = e.r, t = e.g, n = e.b, o = et(r, t, n);
  return {
    h: o.h * 360,
    s: o.s,
    v: o.v
  };
}
function P(e) {
  var r = e.r, t = e.g, n = e.b;
  return "#".concat(rt(r, t, n, !1));
}
function ut(e, r, t) {
  var n = t / 100, o = {
    r: (r.r - e.r) * n + e.r,
    g: (r.g - e.g) * n + e.g,
    b: (r.b - e.b) * n + e.b
  };
  return o;
}
function be(e, r, t) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = t ? Math.round(e.h) - z * r : Math.round(e.h) + z * r : n = t ? Math.round(e.h) + z * r : Math.round(e.h) - z * r, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function he(e, r, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return t ? n = e.s - de * r : r === Te ? n = e.s + de : n = e.s + it * r, n > 1 && (n = 1), t && r === Oe && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function ge(e, r, t) {
  var n;
  return t ? n = e.v + lt * r : n = e.v - st * r, n > 1 && (n = 1), Number(n.toFixed(2));
}
function U(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], n = _(e), o = Oe; o > 0; o -= 1) {
    var a = pe(n), s = P(_({
      h: be(a, o, !0),
      s: he(a, o, !0),
      v: ge(a, o, !0)
    }));
    t.push(s);
  }
  t.push(P(n));
  for (var i = 1; i <= Te; i += 1) {
    var l = pe(n), f = P(_({
      h: be(l, i),
      s: he(l, i),
      v: ge(l, i)
    }));
    t.push(f);
  }
  return r.theme === "dark" ? ft.map(function(y) {
    var x = y.index, u = y.opacity, c = P(ut(_(r.backgroundColor || "#141414"), _(t[x]), u * 100));
    return c;
  }) : t;
}
var W = {
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
}, B = {}, Y = {};
Object.keys(W).forEach(function(e) {
  B[e] = U(W[e]), B[e].primary = B[e][5], Y[e] = U(W[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Y[e].primary = Y[e][5];
});
var ct = B.blue, dt = Symbol("iconContext"), _e = function() {
  return Le(dt, {
    prefixCls: C("anticon"),
    rootClassName: C(""),
    csp: C()
  });
};
function J() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function pt(e, r) {
  return e && e.contains ? e.contains(r) : !1;
}
var ve = "data-vc-order", bt = "vc-icon-key", G = /* @__PURE__ */ new Map();
function Ae() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.mark;
  return r ? r.startsWith("data-") ? r : "data-".concat(r) : bt;
}
function X(e) {
  if (e.attachTo)
    return e.attachTo;
  var r = document.querySelector("head");
  return r || document.body;
}
function ht(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Me(e) {
  return Array.from((G.get(e) || e).children).filter(function(r) {
    return r.tagName === "STYLE";
  });
}
function je(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!J())
    return null;
  var t = r.csp, n = r.prepend, o = document.createElement("style");
  o.setAttribute(ve, ht(n)), t && t.nonce && (o.nonce = t.nonce), o.innerHTML = e;
  var a = X(r), s = a.firstChild;
  if (n) {
    if (n === "queue") {
      var i = Me(a).filter(function(l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(ve));
      });
      if (i.length)
        return a.insertBefore(o, i[i.length - 1].nextSibling), o;
    }
    a.insertBefore(o, s);
  } else
    a.appendChild(o);
  return o;
}
function gt(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = X(r);
  return Me(t).find(function(n) {
    return n.getAttribute(Ae(r)) === e;
  });
}
function vt(e, r) {
  var t = G.get(e);
  if (!t || !pt(document, t)) {
    var n = je("", r), o = n.parentNode;
    G.set(e, o), e.removeChild(n);
  }
}
function mt(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = X(t);
  vt(n, t);
  var o = gt(r, t);
  if (o)
    return t.csp && t.csp.nonce && o.nonce !== t.csp.nonce && (o.nonce = t.csp.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
  var a = je(e, t);
  return a.setAttribute(Ae(t), r), a;
}
function me(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    }))), n.forEach(function(o) {
      yt(e, o, t[o]);
    });
  }
  return e;
}
function yt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function xt(e, r) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(r));
}
function Ct(e, r) {
  xt(e, "[@ant-design/icons-vue] ".concat(r));
}
function ye(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Q(e, r, t) {
  return t ? ae(e.tag, me({
    key: r
  }, t, e.attrs), (e.children || []).map(function(n, o) {
    return Q(n, "".concat(r, "-").concat(e.tag, "-").concat(o));
  })) : ae(e.tag, me({
    key: r
  }, e.attrs), (e.children || []).map(function(n, o) {
    return Q(n, "".concat(r, "-").concat(e.tag, "-").concat(o));
  }));
}
function Ee(e) {
  return U(e)[0];
}
function Ie(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var wt = `
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
function kt(e) {
  return J() ? ze(e) instanceof ShadowRoot : !1;
}
function St(e) {
  return kt(e) ? ze(e) : null;
}
var Ot = function() {
  var r = _e(), t = r.prefixCls, n = r.csp, o = De(), a = wt;
  t && (a = a.replace(/anticon/g, t.value)), qe(function() {
    if (J()) {
      var s = o.vnode.el, i = St(s);
      mt(a, "@ant-design-vue-icons", {
        prepend: !0,
        csp: n.value,
        attachTo: i
      });
    }
  });
}, Tt = ["icon", "primaryColor", "secondaryColor"];
function _t(e, r) {
  if (e == null)
    return {};
  var t = At(e, r), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function At(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function N(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    }))), n.forEach(function(o) {
      Mt(e, o, t[o]);
    });
  }
  return e;
}
function Mt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var M = We({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function jt(e) {
  var r = e.primaryColor, t = e.secondaryColor;
  M.primaryColor = r, M.secondaryColor = t || Ee(r), M.calculated = !!t;
}
function Et() {
  return N({}, M);
}
var S = function(r, t) {
  var n = N({}, r, t.attrs), o = n.icon, a = n.primaryColor, s = n.secondaryColor, i = _t(n, Tt), l = M;
  if (a && (l = {
    primaryColor: a,
    secondaryColor: s || Ee(a)
  }), Ct(ye(o), "icon should be icon definiton, but got ".concat(o)), !ye(o))
    return null;
  var f = o;
  return f && typeof f.icon == "function" && (f = N({}, f, {
    icon: f.icon(l.primaryColor, l.secondaryColor)
  })), Q(f.icon, "svg-".concat(f.name), N({}, i, {
    "data-icon": f.name,
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
S.getTwoToneColors = Et;
S.setTwoToneColors = jt;
const K = S;
function It(e, r) {
  return Bt(e) || $t(e, r) || Pt(e, r) || zt();
}
function zt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pt(e, r) {
  if (e) {
    if (typeof e == "string")
      return xe(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return xe(e, r);
  }
}
function xe(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function $t(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], o = !0, a = !1, s, i;
    try {
      for (t = t.call(e); !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); o = !0)
        ;
    } catch (l) {
      a = !0, i = l;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a)
          throw i;
      }
    }
    return n;
  }
}
function Bt(e) {
  if (Array.isArray(e))
    return e;
}
function Pe(e) {
  var r = Ie(e), t = It(r, 2), n = t[0], o = t[1];
  return K.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function Nt() {
  var e = K.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Ht = Z({
  name: "InsertStyles",
  setup: function() {
    return Ot(), function() {
      return null;
    };
  }
}), Ft = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Rt(e, r) {
  return qt(e) || Dt(e, r) || Lt(e, r) || Vt();
}
function Vt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lt(e, r) {
  if (e) {
    if (typeof e == "string")
      return Ce(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ce(e, r);
  }
}
function Ce(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Dt(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n = [], o = !0, a = !1, s, i;
    try {
      for (t = t.call(e); !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r)); o = !0)
        ;
    } catch (l) {
      a = !0, i = l;
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a)
          throw i;
      }
    }
    return n;
  }
}
function qt(e) {
  if (Array.isArray(e))
    return e;
}
function we(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    }))), n.forEach(function(o) {
      A(e, o, t[o]);
    });
  }
  return e;
}
function A(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Wt(e, r) {
  if (e == null)
    return {};
  var t = Yt(e, r), n, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      n = a[o], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Yt(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
Pe(ct.primary);
var O = function(r, t) {
  var n, o = we({}, r, t.attrs), a = o.class, s = o.icon, i = o.spin, l = o.rotate, f = o.tabindex, y = o.twoToneColor, x = o.onClick, u = Wt(o, Ft), c = _e(), T = c.prefixCls, j = c.rootClassName, H = (n = {}, A(n, j.value, !!j.value), A(n, T.value, !0), A(n, "".concat(T.value, "-").concat(s.name), !!s.name), A(n, "".concat(T.value, "-spin"), !!i || s.name === "loading"), n), F = f;
  F === void 0 && x && (F = -1);
  var He = l ? {
    msTransform: "rotate(".concat(l, "deg)"),
    transform: "rotate(".concat(l, "deg)")
  } : void 0, Fe = Ie(y), oe = Rt(Fe, 2), Re = oe[0], Ve = oe[1];
  return k("span", we({
    role: "img",
    "aria-label": s.name
  }, u, {
    onClick: x,
    class: [H, a],
    tabindex: F
  }), [k(K, {
    icon: s,
    primaryColor: Re,
    secondaryColor: Ve,
    style: He
  }, null), k(Ht, null, null)]);
};
O.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
O.displayName = "AntdIcon";
O.inheritAttrs = !1;
O.getTwoToneColor = Nt;
O.setTwoToneColor = Pe;
const $e = O;
var Ut = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" };
const Gt = Ut;
function ke(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    }))), n.forEach(function(o) {
      Qt(e, o, t[o]);
    });
  }
  return e;
}
function Qt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var ee = function(r, t) {
  var n = ke({}, r, t.attrs);
  return k($e, ke({}, n, {
    icon: Gt
  }), null);
};
ee.displayName = "CopyOutlined";
ee.inheritAttrs = !1;
const Zt = ee;
var Jt = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Xt = Jt;
function Se(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? Object(arguments[r]) : {}, n = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    }))), n.forEach(function(o) {
      Kt(e, o, t[o]);
    });
  }
  return e;
}
function Kt(e, r, t) {
  return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
var te = function(r, t) {
  var n = Se({}, r, t.attrs);
  return k($e, Se({}, n, {
    icon: Xt
  }), null);
};
te.displayName = "LoadingOutlined";
te.inheritAttrs = !1;
const er = te, tr = { class: "copy-button-container" }, rr = /* @__PURE__ */ Z({
  __name: "ShareButton",
  props: {
    text: { default: () => window.location.href },
    buttonText: { default: "复制" },
    variant: { default: "primary" },
    size: { default: "middle" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["copy", "error"],
  setup(e, { emit: r }) {
    const t = e, n = r, o = C(!1), a = C(!1), s = C("info"), i = C(""), l = async () => {
      if (!(t.disabled || o.value)) {
        o.value = !0;
        try {
          await f(t.text), y("复制成功"), n("copy", t.text);
        } catch (u) {
          console.error("复制失败:", u), x("复制失败，请重试"), n("error", u);
        } finally {
          o.value = !1;
        }
      }
    }, f = async (u) => {
      try {
        if (navigator.clipboard)
          await navigator.clipboard.writeText(u);
        else {
          const c = document.createElement("textarea");
          c.value = u, c.style.position = "fixed", c.style.left = "-999999px", c.style.top = "-999999px", document.body.appendChild(c), c.focus(), c.select(), document.execCommand("copy"), document.body.removeChild(c);
        }
      } catch {
        throw new Error("复制失败");
      }
    }, y = (u) => {
      i.value = u, s.value = "success", a.value = !0;
    }, x = (u) => {
      i.value = u, s.value = "error", a.value = !0;
    };
    return (u, c) => {
      const T = ie("a-button"), j = ie("a-message");
      return d(), p("div", tr, [
        k(T, {
          type: u.variant,
          size: u.size,
          disabled: u.disabled || o.value,
          onClick: l
        }, {
          icon: le(() => [
            o.value ? (d(), se(fe(er), { key: 0 })) : (d(), se(fe(Zt), { key: 1 }))
          ]),
          default: le(() => [
            Ye(" " + $(u.buttonText), 1)
          ]),
          _: 1
        }, 8, ["type", "size", "disabled"]),
        k(j, {
          open: a.value,
          "onUpdate:open": c[0] || (c[0] = (H) => a.value = H),
          type: s.value,
          content: i.value,
          duration: 3
        }, null, 8, ["open", "type", "content"])
      ]);
    };
  }
});
const Be = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of r)
    t[n] = o;
  return t;
}, re = /* @__PURE__ */ Be(rr, [["__scopeId", "data-v-c7b4f365"]]), nr = { class: "help-link-container" }, or = ["href", "target", "rel"], ar = {
  key: 0,
  class: "help-icon book",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, ir = {
  key: 1,
  class: "help-icon question",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, lr = {
  key: 2,
  class: "help-icon info",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, sr = {
  key: 3,
  class: "help-icon external",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, fr = { class: "help-text" }, ur = {
  key: 4,
  class: "external-arrow",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, cr = ["disabled"], dr = {
  key: 0,
  class: "help-icon book",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, pr = {
  key: 1,
  class: "help-icon question",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, br = {
  key: 2,
  class: "help-icon info",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, hr = {
  key: 3,
  class: "help-icon external",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, gr = { class: "help-text" }, vr = /* @__PURE__ */ Z({
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
  setup(e, { emit: r }) {
    const t = e, n = r, o = C(!1), a = Ue(() => t.href && t.target === "_blank"), s = (i) => {
      if (t.disabled) {
        i.preventDefault();
        return;
      }
      n("click", i), n("help", { text: t.text, href: t.href });
    };
    return (i, l) => (d(), p("div", nr, [
      i.href ? (d(), p("a", {
        key: 0,
        href: i.href,
        target: i.target,
        rel: i.rel,
        class: R(["help-link", [i.variant, i.size, { disabled: i.disabled }]]),
        onClick: s,
        onMouseenter: l[0] || (l[0] = (f) => o.value = !0),
        onMouseleave: l[1] || (l[1] = (f) => o.value = !1)
      }, [
        i.iconType === "book" ? (d(), p("svg", ar, l[4] || (l[4] = [
          g("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }, null, -1)
        ]))) : i.iconType === "question" ? (d(), p("svg", ir, l[5] || (l[5] = [
          g("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }, null, -1)
        ]))) : i.iconType === "info" ? (d(), p("svg", lr, l[6] || (l[6] = [
          g("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }, null, -1)
        ]))) : i.iconType === "external" ? (d(), p("svg", sr, l[7] || (l[7] = [
          g("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }, null, -1)
        ]))) : E("", !0),
        g("span", fr, $(i.text), 1),
        a.value ? (d(), p("svg", ur, l[8] || (l[8] = [
          g("path", { d: "M7 17L17 7M17 7H7M17 7V17" }, null, -1)
        ]))) : E("", !0)
      ], 42, or)) : (d(), p("button", {
        key: 1,
        class: R(["help-link", [i.variant, i.size, { disabled: i.disabled }]]),
        onClick: s,
        onMouseenter: l[2] || (l[2] = (f) => o.value = !0),
        onMouseleave: l[3] || (l[3] = (f) => o.value = !1),
        disabled: i.disabled
      }, [
        i.iconType === "book" ? (d(), p("svg", dr, l[9] || (l[9] = [
          g("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }, null, -1)
        ]))) : i.iconType === "question" ? (d(), p("svg", pr, l[10] || (l[10] = [
          g("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }, null, -1)
        ]))) : i.iconType === "info" ? (d(), p("svg", br, l[11] || (l[11] = [
          g("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }, null, -1)
        ]))) : i.iconType === "external" ? (d(), p("svg", hr, l[12] || (l[12] = [
          g("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }, null, -1)
        ]))) : E("", !0),
        g("span", gr, $(i.text), 1)
      ], 42, cr)),
      o.value && i.tooltip ? (d(), p("div", {
        key: 2,
        class: R(["tooltip", i.tooltipPosition])
      }, $(i.tooltip), 3)) : E("", !0)
    ]));
  }
});
const ne = /* @__PURE__ */ Be(vr, [["__scopeId", "data-v-08021254"]]), mr = `.share-button-container{display:inline-block}.share-button{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border:none;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all .2s ease;text-decoration:none;background:var(--share-button-bg, #007bff);color:var(--share-button-color, white);border:1px solid var(--share-button-border, #007bff)}.share-button:hover:not(.disabled){background:var(--share-button-hover-bg, #0056b3);border-color:var(--share-button-hover-border, #0056b3);transform:translateY(-1px);box-shadow:0 4px 8px #007bff4d}.share-button:active:not(.disabled){transform:translateY(0);box-shadow:0 2px 4px #007bff4d}.share-button.disabled{opacity:.6;cursor:not-allowed;transform:none;box-shadow:none}.share-button.primary{--share-button-bg: #007bff;--share-button-color: white;--share-button-border: #007bff;--share-button-hover-bg: #0056b3;--share-button-hover-border: #0056b3}.share-button.success{--share-button-bg: #28a745;--share-button-color: white;--share-button-border: #28a745;--share-button-hover-bg: #218838;--share-button-hover-border: #218838}.share-button.warning{--share-button-bg: #ffc107;--share-button-color: #212529;--share-button-border: #ffc107;--share-button-hover-bg: #e0a800;--share-button-hover-border: #e0a800}.share-button.danger{--share-button-bg: #dc3545;--share-button-color: white;--share-button-border: #dc3545;--share-button-hover-bg: #c82333;--share-button-hover-border: #c82333}.share-button.small{padding:6px 12px;font-size:12px}.share-button.large{padding:12px 20px;font-size:16px}.share-icon{width:16px;height:16px;flex-shrink:0}.help-link-container{position:relative;display:inline-block}.help-link{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;border:none;border-radius:6px;font-size:14px;font-weight:500;text-decoration:none;cursor:pointer;transition:all .2s ease;background:var(--help-link-bg, #007bff);color:var(--help-link-color, white);border:1px solid var(--help-link-border, #007bff)}.help-link:hover:not(.disabled){background:var(--help-link-hover-bg, #0056b3);border-color:var(--help-link-hover-border, #0056b3);transform:translateY(-1px);box-shadow:0 4px 8px #007bff4d}.help-link:active:not(.disabled){transform:translateY(0);box-shadow:0 2px 4px #007bff4d}.help-link.disabled{opacity:.6;cursor:not-allowed;transform:none;box-shadow:none}.help-link.info{--help-link-bg: #17a2b8;--help-link-color: white;--help-link-border: #17a2b8;--help-link-hover-bg: #138496;--help-link-hover-border: #138496}.help-link.warning{--help-link-bg: #ffc107;--help-link-color: #212529;--help-link-border: #ffc107;--help-link-hover-bg: #e0a800;--help-link-hover-border: #e0a800}.help-link.danger{--help-link-bg: #dc3545;--help-link-color: white;--help-link-border: #dc3545;--help-link-hover-bg: #c82333;--help-link-hover-border: #c82333}.help-link.small{padding:6px 12px;font-size:12px}.help-link.large{padding:12px 20px;font-size:16px}.help-icon{width:16px;height:16px;flex-shrink:0}.external-arrow{width:14px;height:14px;opacity:.7}.tooltip{position:absolute;padding:8px 12px;border-radius:4px;font-size:12px;white-space:nowrap;z-index:1000;background:#333;color:#fff;animation:fadeIn .2s ease}.tooltip.top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.tooltip.bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.tooltip.left{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}.tooltip.right{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}.tooltip:after{content:"";position:absolute;border:4px solid transparent}.tooltip.top:after{top:100%;left:50%;transform:translate(-50%);border-top-color:#333}.tooltip.bottom:after{bottom:100%;left:50%;transform:translate(-50%);border-bottom-color:#333}.tooltip.left:after{left:100%;top:50%;transform:translateY(-50%);border-left-color:#333}.tooltip.right:after{right:100%;top:50%;transform:translateY(-50%);border-right-color:#333}@keyframes fadeIn{0%{opacity:0;transform:translate(-50%) translateY(10px)}to{opacity:1;transform:translate(-50%) translateY(0)}}:host{--share-button-bg: #007bff;--share-button-color: white;--share-button-border: #007bff;--share-button-hover-bg: #0056b3;--share-button-hover-border: #0056b3;--help-link-bg: #007bff;--help-link-color: white;--help-link-border: #007bff;--help-link-hover-bg: #0056b3;--help-link-hover-border: #0056b3}
`;
function Ne(e) {
  return Ge({
    ...e,
    styles: [mr],
    // 确保样式在 Shadow DOM 中正确应用
    shadowRootMode: "open"
  });
}
const yr = Ne(re), xr = Ne(ne);
function Cr() {
  customElements.get("share-button") || customElements.define("share-button", yr), customElements.get("help-link") || customElements.define("help-link", xr);
}
const wr = {
  install(e) {
    e.component("ShareButton", re), e.component("HelpLink", ne);
  }
}, Sr = {
  ShareButton: re,
  HelpLink: ne,
  registerWebComponents: Cr,
  install: wr
};
export {
  ne as HelpLink,
  re as ShareButton,
  Sr as default,
  wr as install,
  Cr as registerWebComponents
};
