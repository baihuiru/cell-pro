import { inject as Le, ref as w, h as oe, getCurrentInstance as De, nextTick as qe, reactive as We, defineComponent as Z, createVNode as S, resolveComponent as ie, openBlock as d, createElementBlock as p, withCtx as le, createBlock as ue, unref as fe, createTextVNode as Ue, toDisplayString as $, computed as Ge, normalizeClass as V, createElementVNode as m, createCommentVNode as E, defineCustomElement as Oe } from "vue";
function v(e, n) {
  Qe(e) && (e = "100%");
  var t = Ye(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), t && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function Qe(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Ye(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ze(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function I(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function R(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Je(e, n, t) {
  return {
    r: v(e, 255) * 255,
    g: v(n, 255) * 255,
    b: v(t, 255) * 255
  };
}
function L(e, n, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (n - e) * (6 * t) : t < 1 / 2 ? n : t < 2 / 3 ? e + (n - e) * (2 / 3 - t) * 6 : e;
}
function Xe(e, n, t) {
  var r, a, o;
  if (e = v(e, 360), n = v(n, 100), t = v(t, 100), n === 0)
    a = t, o = t, r = t;
  else {
    var u = t < 0.5 ? t * (1 + n) : t + n - t * n, i = 2 * t - u;
    r = L(i, u, e + 1 / 3), a = L(i, u, e), o = L(i, u, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function Ke(e, n, t) {
  e = v(e, 255), n = v(n, 255), t = v(t, 255);
  var r = Math.max(e, n, t), a = Math.min(e, n, t), o = 0, u = r, i = r - a, l = r === 0 ? 0 : i / r;
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
  return { h: o, s: l, v: u };
}
function et(e, n, t) {
  e = v(e, 360) * 6, n = v(n, 100), t = v(t, 100);
  var r = Math.floor(e), a = e - r, o = t * (1 - n), u = t * (1 - a * n), i = t * (1 - (1 - a) * n), l = r % 6, f = [t, u, o, o, i, t][l], y = [i, t, t, u, o, o][l], C = [o, o, i, t, t, u][l];
  return { r: f * 255, g: y * 255, b: C * 255 };
}
function tt(e, n, t, r) {
  var a = [
    R(Math.round(e).toString(16)),
    R(Math.round(n).toString(16)),
    R(Math.round(t).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function se(e) {
  return g(e) / 255;
}
function g(e) {
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
  var n = { r: 0, g: 0, b: 0 }, t = 1, r = null, a = null, o = null, u = !1, i = !1;
  return typeof e == "string" && (e = at(e)), typeof e == "object" && (h(e.r) && h(e.g) && h(e.b) ? (n = Je(e.r, e.g, e.b), u = !0, i = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : h(e.h) && h(e.s) && h(e.v) ? (r = I(e.s), a = I(e.v), n = et(e.h, r, a), u = !0, i = "hsv") : h(e.h) && h(e.s) && h(e.l) && (r = I(e.s), o = I(e.l), n = Xe(e.h, r, o), u = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (t = e.a)), t = Ze(t), {
    ok: u,
    format: e.format || i,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: t
  };
}
var nt = "[-\\+]?\\d+%?", rt = "[-\\+]?\\d*\\.\\d+%?", k = "(?:".concat(rt, ")|(?:").concat(nt, ")"), D = "[\\s|\\(]+(".concat(k, ")[,|\\s]+(").concat(k, ")[,|\\s]+(").concat(k, ")\\s*\\)?"), q = "[\\s|\\(]+(".concat(k, ")[,|\\s]+(").concat(k, ")[,|\\s]+(").concat(k, ")[,|\\s]+(").concat(k, ")\\s*\\)?"), b = {
  CSS_UNIT: new RegExp(k),
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
  var n = !1;
  if (ce[e])
    e = ce[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var t = b.rgb.exec(e);
  return t ? { r: t[1], g: t[2], b: t[3] } : (t = b.rgba.exec(e), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = b.hsl.exec(e), t ? { h: t[1], s: t[2], l: t[3] } : (t = b.hsla.exec(e), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = b.hsv.exec(e), t ? { h: t[1], s: t[2], v: t[3] } : (t = b.hsva.exec(e), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = b.hex8.exec(e), t ? {
    r: g(t[1]),
    g: g(t[2]),
    b: g(t[3]),
    a: se(t[4]),
    format: n ? "name" : "hex8"
  } : (t = b.hex6.exec(e), t ? {
    r: g(t[1]),
    g: g(t[2]),
    b: g(t[3]),
    format: n ? "name" : "hex"
  } : (t = b.hex4.exec(e), t ? {
    r: g(t[1] + t[1]),
    g: g(t[2] + t[2]),
    b: g(t[3] + t[3]),
    a: se(t[4] + t[4]),
    format: n ? "name" : "hex8"
  } : (t = b.hex3.exec(e), t ? {
    r: g(t[1] + t[1]),
    g: g(t[2] + t[2]),
    b: g(t[3] + t[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function h(e) {
  return !!b.CSS_UNIT.exec(String(e));
}
var P = 2, de = 0.16, ot = 0.05, it = 0.05, lt = 0.15, Te = 5, _e = 4, ut = [{
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
  var n = e.r, t = e.g, r = e.b, a = Ke(n, t, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function z(e) {
  var n = e.r, t = e.g, r = e.b;
  return "#".concat(tt(n, t, r, !1));
}
function ft(e, n, t) {
  var r = t / 100, a = {
    r: (n.r - e.r) * r + e.r,
    g: (n.g - e.g) * r + e.g,
    b: (n.b - e.b) * r + e.b
  };
  return a;
}
function ge(e, n, t) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = t ? Math.round(e.h) - P * n : Math.round(e.h) + P * n : r = t ? Math.round(e.h) + P * n : Math.round(e.h) - P * n, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function ve(e, n, t) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return t ? r = e.s - de * n : n === _e ? r = e.s + de : r = e.s + ot * n, r > 1 && (r = 1), t && n === Te && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function me(e, n, t) {
  var r;
  return t ? r = e.v + it * n : r = e.v - lt * n, r > 1 && (r = 1), Number(r.toFixed(2));
}
function G(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], r = _(e), a = Te; a > 0; a -= 1) {
    var o = pe(r), u = z(_({
      h: ge(o, a, !0),
      s: ve(o, a, !0),
      v: me(o, a, !0)
    }));
    t.push(u);
  }
  t.push(z(r));
  for (var i = 1; i <= _e; i += 1) {
    var l = pe(r), f = z(_({
      h: ge(l, i),
      s: ve(l, i),
      v: me(l, i)
    }));
    t.push(f);
  }
  return n.theme === "dark" ? ut.map(function(y) {
    var C = y.index, s = y.opacity, c = z(ft(_(n.backgroundColor || "#141414"), _(t[C]), s * 100));
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
}, B = {}, U = {};
Object.keys(W).forEach(function(e) {
  B[e] = G(W[e]), B[e].primary = B[e][5], U[e] = G(W[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), U[e].primary = U[e][5];
});
var st = B.blue, ct = Symbol("iconContext"), Ae = function() {
  return Le(ct, {
    prefixCls: w("anticon"),
    rootClassName: w(""),
    csp: w()
  });
};
function J() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function dt(e, n) {
  return e && e.contains ? e.contains(n) : !1;
}
var be = "data-vc-order", pt = "vc-icon-key", Q = /* @__PURE__ */ new Map();
function Me() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.mark;
  return n ? n.startsWith("data-") ? n : "data-".concat(n) : pt;
}
function X(e) {
  if (e.attachTo)
    return e.attachTo;
  var n = document.querySelector("head");
  return n || document.body;
}
function gt(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function je(e) {
  return Array.from((Q.get(e) || e).children).filter(function(n) {
    return n.tagName === "STYLE";
  });
}
function Ee(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!J())
    return null;
  var t = n.csp, r = n.prepend, a = document.createElement("style");
  a.setAttribute(be, gt(r)), t && t.nonce && (a.nonce = t.nonce), a.innerHTML = e;
  var o = X(n), u = o.firstChild;
  if (r) {
    if (r === "queue") {
      var i = je(o).filter(function(l) {
        return ["prepend", "prependQueue"].includes(l.getAttribute(be));
      });
      if (i.length)
        return o.insertBefore(a, i[i.length - 1].nextSibling), a;
    }
    o.insertBefore(a, u);
  } else
    o.appendChild(a);
  return a;
}
function vt(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = X(n);
  return je(t).find(function(r) {
    return r.getAttribute(Me(n)) === e;
  });
}
function mt(e, n) {
  var t = Q.get(e);
  if (!t || !dt(document, t)) {
    var r = Ee("", n), a = r.parentNode;
    Q.set(e, a), e.removeChild(r);
  }
}
function bt(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = X(t);
  mt(r, t);
  var a = vt(n, t);
  if (a)
    return t.csp && t.csp.nonce && a.nonce !== t.csp.nonce && (a.nonce = t.csp.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  var o = Ee(e, t);
  return o.setAttribute(Me(t), n), o;
}
function he(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), r.forEach(function(a) {
      ht(e, a, t[a]);
    });
  }
  return e;
}
function ht(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function yt(e, n) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(n));
}
function Ct(e, n) {
  yt(e, "[@ant-design/icons-vue] ".concat(n));
}
function ye(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Y(e, n, t) {
  return t ? oe(e.tag, he({
    key: n
  }, t, e.attrs), (e.children || []).map(function(r, a) {
    return Y(r, "".concat(n, "-").concat(e.tag, "-").concat(a));
  })) : oe(e.tag, he({
    key: n
  }, e.attrs), (e.children || []).map(function(r, a) {
    return Y(r, "".concat(n, "-").concat(e.tag, "-").concat(a));
  }));
}
function Ie(e) {
  return G(e)[0];
}
function Pe(e) {
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
var xt = function() {
  var n = Ae(), t = n.prefixCls, r = n.csp, a = De(), o = wt;
  t && (o = o.replace(/anticon/g, t.value)), qe(function() {
    if (J()) {
      var u = a.vnode.el, i = St(u);
      bt(o, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: i
      });
    }
  });
}, Ot = ["icon", "primaryColor", "secondaryColor"];
function Tt(e, n) {
  if (e == null)
    return {};
  var t = _t(e, n), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function _t(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function N(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), r.forEach(function(a) {
      At(e, a, t[a]);
    });
  }
  return e;
}
function At(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var M = We({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function Mt(e) {
  var n = e.primaryColor, t = e.secondaryColor;
  M.primaryColor = n, M.secondaryColor = t || Ie(n), M.calculated = !!t;
}
function jt() {
  return N({}, M);
}
var x = function(n, t) {
  var r = N({}, n, t.attrs), a = r.icon, o = r.primaryColor, u = r.secondaryColor, i = Tt(r, Ot), l = M;
  if (o && (l = {
    primaryColor: o,
    secondaryColor: u || Ie(o)
  }), Ct(ye(a), "icon should be icon definiton, but got ".concat(a)), !ye(a))
    return null;
  var f = a;
  return f && typeof f.icon == "function" && (f = N({}, f, {
    icon: f.icon(l.primaryColor, l.secondaryColor)
  })), Y(f.icon, "svg-".concat(f.name), N({}, i, {
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
x.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
x.inheritAttrs = !1;
x.displayName = "IconBase";
x.getTwoToneColors = jt;
x.setTwoToneColors = Mt;
const K = x;
function Et(e, n) {
  return $t(e) || zt(e, n) || Pt(e, n) || It();
}
function It() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pt(e, n) {
  if (e) {
    if (typeof e == "string")
      return Ce(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ce(e, n);
  }
}
function Ce(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function zt(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], a = !0, o = !1, u, i;
    try {
      for (t = t.call(e); !(a = (u = t.next()).done) && (r.push(u.value), !(n && r.length === n)); a = !0)
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
function $t(e) {
  if (Array.isArray(e))
    return e;
}
function $e(e) {
  var n = Pe(e), t = Et(n, 2), r = t[0], a = t[1];
  return K.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function Bt() {
  var e = K.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Nt = Z({
  name: "InsertStyles",
  setup: function() {
    return xt(), function() {
      return null;
    };
  }
}), Ht = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function Ft(e, n) {
  return Dt(e) || Lt(e, n) || Rt(e, n) || Vt();
}
function Vt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rt(e, n) {
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
function Lt(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], a = !0, o = !1, u, i;
    try {
      for (t = t.call(e); !(a = (u = t.next()).done) && (r.push(u.value), !(n && r.length === n)); a = !0)
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
function Dt(e) {
  if (Array.isArray(e))
    return e;
}
function ke(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), r.forEach(function(a) {
      A(e, a, t[a]);
    });
  }
  return e;
}
function A(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function qt(e, n) {
  if (e == null)
    return {};
  var t = Wt(e, n), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Wt(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
$e(st.primary);
var O = function(n, t) {
  var r, a = ke({}, n, t.attrs), o = a.class, u = a.icon, i = a.spin, l = a.rotate, f = a.tabindex, y = a.twoToneColor, C = a.onClick, s = qt(a, Ht), c = Ae(), T = c.prefixCls, j = c.rootClassName, H = (r = {}, A(r, j.value, !!j.value), A(r, T.value, !0), A(r, "".concat(T.value, "-").concat(u.name), !!u.name), A(r, "".concat(T.value, "-spin"), !!i || u.name === "loading"), r), F = f;
  F === void 0 && C && (F = -1);
  var He = l ? {
    msTransform: "rotate(".concat(l, "deg)"),
    transform: "rotate(".concat(l, "deg)")
  } : void 0, Fe = Pe(y), ae = Ft(Fe, 2), Ve = ae[0], Re = ae[1];
  return S("span", ke({
    role: "img",
    "aria-label": u.name
  }, s, {
    onClick: C,
    class: [H, o],
    tabindex: F
  }), [S(K, {
    icon: u,
    primaryColor: Ve,
    secondaryColor: Re,
    style: He
  }, null), S(Nt, null, null)]);
};
O.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
O.displayName = "AntdIcon";
O.inheritAttrs = !1;
O.getTwoToneColor = Bt;
O.setTwoToneColor = $e;
const Be = O;
var Ut = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" };
const Gt = Ut;
function Se(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? Object(arguments[n]) : {}, r = Object.keys(t);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    }))), r.forEach(function(a) {
      Qt(e, a, t[a]);
    });
  }
  return e;
}
function Qt(e, n, t) {
  return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
var ee = function(n, t) {
  var r = Se({}, n, t.attrs);
  return S(Be, Se({}, r, {
    icon: Gt
  }), null);
};
ee.displayName = "CopyOutlined";
ee.inheritAttrs = !1;
const Yt = ee;
var Zt = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const Jt = Zt;
function xe(e) {
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
var te = function(n, t) {
  var r = xe({}, n, t.attrs);
  return S(Be, xe({}, r, {
    icon: Jt
  }), null);
};
te.displayName = "LoadingOutlined";
te.inheritAttrs = !1;
const Kt = te, en = { class: "copy-button-container" }, tn = /* @__PURE__ */ Z({
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
    const t = e, r = n, a = w(!1), o = w(!1), u = w("info"), i = w(""), l = async () => {
      if (!(t.disabled || a.value)) {
        a.value = !0;
        try {
          await f(t.text), y("复制成功"), r("copy", t.text);
        } catch (s) {
          console.error("复制失败:", s), C("复制失败，请重试"), r("error", s);
        } finally {
          a.value = !1;
        }
      }
    }, f = async (s) => {
      try {
        if (navigator.clipboard)
          await navigator.clipboard.writeText(s);
        else {
          const c = document.createElement("textarea");
          c.value = s, c.style.position = "fixed", c.style.left = "-999999px", c.style.top = "-999999px", document.body.appendChild(c), c.focus(), c.select(), document.execCommand("copy"), document.body.removeChild(c);
        }
      } catch {
        throw new Error("复制失败");
      }
    }, y = (s) => {
      i.value = s, u.value = "success", o.value = !0;
    }, C = (s) => {
      i.value = s, u.value = "error", o.value = !0;
    };
    return (s, c) => {
      const T = ie("a-button"), j = ie("a-message");
      return d(), p("div", en, [
        S(T, {
          type: s.variant,
          size: s.size,
          disabled: s.disabled || a.value,
          onClick: l
        }, {
          icon: le(() => [
            a.value ? (d(), ue(fe(Kt), { key: 0 })) : (d(), ue(fe(Yt), { key: 1 }))
          ]),
          default: le(() => [
            Ue(" " + $(s.buttonText), 1)
          ]),
          _: 1
        }, 8, ["type", "size", "disabled"]),
        S(j, {
          open: o.value,
          "onUpdate:open": c[0] || (c[0] = (H) => o.value = H),
          type: u.value,
          content: i.value,
          duration: 3
        }, null, 8, ["open", "type", "content"])
      ]);
    };
  }
});
const Ne = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, a] of n)
    t[r] = a;
  return t;
}, ne = /* @__PURE__ */ Ne(tn, [["__scopeId", "data-v-c7b4f365"]]), nn = { class: "help-link-container" }, rn = ["href", "target", "rel"], an = {
  key: 0,
  class: "help-icon book",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, on = {
  key: 1,
  class: "help-icon question",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, ln = {
  key: 2,
  class: "help-icon info",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, un = {
  key: 3,
  class: "help-icon external",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, fn = { class: "help-text" }, sn = {
  key: 4,
  class: "external-arrow",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, cn = ["disabled"], dn = {
  key: 0,
  class: "help-icon book",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, pn = {
  key: 1,
  class: "help-icon question",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, gn = {
  key: 2,
  class: "help-icon info",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, vn = {
  key: 3,
  class: "help-icon external",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, mn = { class: "help-text" }, bn = /* @__PURE__ */ Z({
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
    const t = e, r = n, a = w(!1), o = Ge(() => t.href && t.target === "_blank"), u = (i) => {
      if (t.disabled) {
        i.preventDefault();
        return;
      }
      r("click", i), r("help", { text: t.text, href: t.href });
    };
    return (i, l) => (d(), p("div", nn, [
      i.href ? (d(), p("a", {
        key: 0,
        href: i.href,
        target: i.target,
        rel: i.rel,
        class: V(["help-link", [i.variant, i.size, { disabled: i.disabled }]]),
        onClick: u,
        onMouseenter: l[0] || (l[0] = (f) => a.value = !0),
        onMouseleave: l[1] || (l[1] = (f) => a.value = !1)
      }, [
        i.iconType === "book" ? (d(), p("svg", an, l[4] || (l[4] = [
          m("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }, null, -1)
        ]))) : i.iconType === "question" ? (d(), p("svg", on, l[5] || (l[5] = [
          m("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }, null, -1)
        ]))) : i.iconType === "info" ? (d(), p("svg", ln, l[6] || (l[6] = [
          m("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }, null, -1)
        ]))) : i.iconType === "external" ? (d(), p("svg", un, l[7] || (l[7] = [
          m("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }, null, -1)
        ]))) : E("", !0),
        m("span", fn, $(i.text), 1),
        o.value ? (d(), p("svg", sn, l[8] || (l[8] = [
          m("path", { d: "M7 17L17 7M17 7H7M17 7V17" }, null, -1)
        ]))) : E("", !0)
      ], 42, rn)) : (d(), p("button", {
        key: 1,
        class: V(["help-link", [i.variant, i.size, { disabled: i.disabled }]]),
        onClick: u,
        onMouseenter: l[2] || (l[2] = (f) => a.value = !0),
        onMouseleave: l[3] || (l[3] = (f) => a.value = !1),
        disabled: i.disabled
      }, [
        i.iconType === "book" ? (d(), p("svg", dn, l[9] || (l[9] = [
          m("path", { d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" }, null, -1)
        ]))) : i.iconType === "question" ? (d(), p("svg", pn, l[10] || (l[10] = [
          m("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" }, null, -1)
        ]))) : i.iconType === "info" ? (d(), p("svg", gn, l[11] || (l[11] = [
          m("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" }, null, -1)
        ]))) : i.iconType === "external" ? (d(), p("svg", vn, l[12] || (l[12] = [
          m("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }, null, -1)
        ]))) : E("", !0),
        m("span", mn, $(i.text), 1)
      ], 42, cn)),
      a.value && i.tooltip ? (d(), p("div", {
        key: 2,
        class: V(["tooltip", i.tooltipPosition])
      }, $(i.tooltip), 3)) : E("", !0)
    ]));
  }
});
const re = /* @__PURE__ */ Ne(bn, [["__scopeId", "data-v-08021254"]]), hn = Oe(ne), yn = Oe(re);
function Cn() {
  customElements.get("share-button") || customElements.define("share-button", hn), customElements.get("help-link") || customElements.define("help-link", yn);
}
const wn = {
  install(e) {
    e.component("ShareButton", ne), e.component("HelpLink", re);
  }
}, Sn = {
  ShareButton: ne,
  HelpLink: re,
  registerWebComponents: Cn,
  install: wn
};
export {
  re as HelpLink,
  ne as ShareButton,
  Sn as default,
  wn as install,
  Cn as registerWebComponents
};
