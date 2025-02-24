/*! For license information please see vendor.chartjs-fa806d9e.a9b5ba2643b0ec3d0ad5.bundle.js.LICENSE.txt */
'use strict';
(self.webpackChunkplayground = self.webpackChunkplayground || []).push([
  [128],
  {
    7154: (t, e, n) => {
      n.d(e, { t1: () => o.t1 });
      var o = n(6118);
      o.t1.register(...o.$L);
    },
    7715: (t, e, n) => {
      n.d(e, {
        $: () => Kt,
        A: () => it,
        B: () => rt,
        C: () => qt,
        D: () => G,
        E: () => ae,
        F: () => g,
        G: () => He,
        H: () => A,
        I: () => We,
        J: () => qe,
        K: () => Qe,
        L: () => ft,
        M: () => Re,
        N: () => F,
        O: () => u,
        P: () => I,
        Q: () => p,
        R: () => le,
        S: () => tt,
        T: () => j,
        U: () => J,
        V: () => Lt,
        W: () => et,
        X: () => Et,
        Y: () => $t,
        Z: () => Ut,
        _: () => ut,
        a: () => ce,
        a0: () => se,
        a1: () => pt,
        a2: () => gt,
        a3: () => Rt,
        a4: () => v,
        a5: () => O,
        a6: () => Wt,
        a7: () => T,
        a8: () => fe,
        a9: () => he,
        aA: () => Ue,
        aB: () => yt,
        aC: () => Xe,
        aD: () => Qt,
        aE: () => Y,
        aF: () => r,
        aG: () => $,
        aH: () => H,
        aI: () => q,
        aJ: () => E,
        aK: () => V,
        aL: () => jt,
        aM: () => L,
        aN: () => zt,
        aO: () => at,
        aP: () => ot,
        aa: () => de,
        ab: () => w,
        ac: () => i,
        ad: () => dt,
        ae: () => Fe,
        af: () => Ht,
        ag: () => C,
        ah: () => y,
        ai: () => S,
        aj: () => nt,
        ak: () => oe,
        al: () => je,
        am: () => on,
        an: () => nn,
        ao: () => Ke,
        ap: () => Je,
        aq: () => $e,
        ar: () => Jt,
        as: () => Vt,
        at: () => Ft,
        au: () => Xt,
        av: () => re,
        aw: () => ie,
        ax: () => en,
        ay: () => X,
        az: () => Ye,
        b: () => s,
        c: () => _t,
        d: () => Nt,
        e: () => Mt,
        f: () => _,
        g: () => l,
        h: () => P,
        i: () => c,
        j: () => ue,
        k: () => a,
        l: () => ct,
        m: () => f,
        n: () => d,
        o: () => St,
        p: () => Z,
        q: () => bt,
        r: () => ht,
        s: () => z,
        t: () => K,
        u: () => lt,
        v: () => h,
        w: () => xt,
        x: () => Q,
        y: () => _e,
        z: () => ze,
      });
      var o = n(6447);
      function r() {}
      const i = (() => {
        let t = 0;
        return () => t++;
      })();
      function a(t) {
        return null == t;
      }
      function s(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
      }
      function c(t) {
        return null !== t && '[object Object]' === Object.prototype.toString.call(t);
      }
      function l(t) {
        return ('number' == typeof t || t instanceof Number) && isFinite(+t);
      }
      function u(t, e) {
        return l(t) ? t : e;
      }
      function h(t, e) {
        return void 0 === t ? e : t;
      }
      const f = (t, e) => ('string' == typeof t && t.endsWith('%') ? parseFloat(t) / 100 : +t / e),
        d = (t, e) => ('string' == typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t);
      function p(t, e, n) {
        if (t && 'function' == typeof t.call) return t.apply(n, e);
      }
      function g(t, e, n, o) {
        let r, i, a;
        if (s(t))
          if (((i = t.length), o)) for (r = i - 1; r >= 0; r--) e.call(n, t[r], r);
          else for (r = 0; r < i; r++) e.call(n, t[r], r);
        else if (c(t))
          for (a = Object.keys(t), i = a.length, r = 0; r < i; r++) e.call(n, t[a[r]], a[r]);
      }
      function y(t, e) {
        let n, o, r, i;
        if (!t || !e || t.length !== e.length) return !1;
        for (n = 0, o = t.length; n < o; ++n)
          if (((r = t[n]), (i = e[n]), r.datasetIndex !== i.datasetIndex || r.index !== i.index))
            return !1;
        return !0;
      }
      function b(t) {
        if (s(t)) return t.map(b);
        if (c(t)) {
          const e = Object.create(null),
            n = Object.keys(t),
            o = n.length;
          let r = 0;
          for (; r < o; ++r) e[n[r]] = b(t[n[r]]);
          return e;
        }
        return t;
      }
      function x(t) {
        return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
      }
      function m(t, e, n, o) {
        if (!x(t)) return;
        const r = e[t],
          i = n[t];
        c(r) && c(i) ? v(r, i, o) : (e[t] = b(i));
      }
      function v(t, e, n) {
        const o = s(e) ? e : [e],
          r = o.length;
        if (!c(t)) return t;
        const i = (n = n || {}).merger || m;
        let a;
        for (let e = 0; e < r; ++e) {
          if (((a = o[e]), !c(a))) continue;
          const r = Object.keys(a);
          for (let e = 0, o = r.length; e < o; ++e) i(r[e], t, a, n);
        }
        return t;
      }
      function w(t, e) {
        return v(t, e, { merger: M });
      }
      function M(t, e, n) {
        if (!x(t)) return;
        const o = e[t],
          r = n[t];
        c(o) && c(r) ? w(o, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = b(r));
      }
      const k = { '': (t) => t, x: (t) => t.x, y: (t) => t.y };
      function _(t, e) {
        const n =
          k[e] ||
          (k[e] = (function (t) {
            const e = (function (t) {
              const e = t.split('.'),
                n = [];
              let o = '';
              for (const t of e)
                (o += t), o.endsWith('\\') ? (o = o.slice(0, -1) + '.') : (n.push(o), (o = ''));
              return n;
            })(t);
            return (t) => {
              for (const n of e) {
                if ('' === n) break;
                t = t && t[n];
              }
              return t;
            };
          })(e));
        return n(t);
      }
      function O(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      const P = (t) => void 0 !== t,
        T = (t) => 'function' == typeof t,
        C = (t, e) => {
          if (t.size !== e.size) return !1;
          for (const n of t) if (!e.has(n)) return !1;
          return !0;
        };
      function S(t) {
        return 'mouseup' === t.type || 'click' === t.type || 'contextmenu' === t.type;
      }
      const I = Math.PI,
        j = 2 * I,
        R = j + I,
        W = Number.POSITIVE_INFINITY,
        B = I / 180,
        A = I / 2,
        D = I / 4,
        N = (2 * I) / 3,
        L = Math.log10,
        z = Math.sign;
      function E(t, e, n) {
        return Math.abs(t - e) < n;
      }
      function H(t) {
        const e = Math.round(t);
        t = E(t, e, t / 1e3) ? e : t;
        const n = Math.pow(10, Math.floor(L(t))),
          o = t / n;
        return (o <= 1 ? 1 : o <= 2 ? 2 : o <= 5 ? 5 : 10) * n;
      }
      function F(t) {
        const e = [],
          n = Math.sqrt(t);
        let o;
        for (o = 1; o < n; o++) t % o == 0 && (e.push(o), e.push(t / o));
        return n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e;
      }
      function Q(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function q(t, e) {
        const n = Math.round(t);
        return n - e <= t && n + e >= t;
      }
      function $(t, e, n) {
        let o, r, i;
        for (o = 0, r = t.length; o < r; o++)
          (i = t[o][n]), isNaN(i) || ((e.min = Math.min(e.min, i)), (e.max = Math.max(e.max, i)));
      }
      function K(t) {
        return t * (I / 180);
      }
      function J(t) {
        return t * (180 / I);
      }
      function V(t) {
        if (!l(t)) return;
        let e = 1,
          n = 0;
        for (; Math.round(t * e) / e !== t; ) (e *= 10), n++;
        return n;
      }
      function G(t, e) {
        const n = e.x - t.x,
          o = e.y - t.y,
          r = Math.sqrt(n * n + o * o);
        let i = Math.atan2(o, n);
        return i < -0.5 * I && (i += j), { angle: i, distance: r };
      }
      function Y(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function U(t, e) {
        return ((t - e + R) % j) - I;
      }
      function X(t) {
        return ((t % j) + j) % j;
      }
      function Z(t, e, n, o) {
        const r = X(t),
          i = X(e),
          a = X(n),
          s = X(i - r),
          c = X(a - r),
          l = X(r - i),
          u = X(r - a);
        return r === i || r === a || (o && i === a) || (s > c && l < u);
      }
      function tt(t, e, n) {
        return Math.max(e, Math.min(n, t));
      }
      function et(t) {
        return tt(t, -32768, 32767);
      }
      function nt(t, e, n, o = 1e-6) {
        return t >= Math.min(e, n) - o && t <= Math.max(e, n) + o;
      }
      function ot(t, e, n) {
        n = n || ((n) => t[n] < e);
        let o,
          r = t.length - 1,
          i = 0;
        for (; r - i > 1; ) (o = (i + r) >> 1), n(o) ? (i = o) : (r = o);
        return { lo: i, hi: r };
      }
      const rt = (t, e, n, o) =>
          ot(
            t,
            n,
            o
              ? (o) => {
                  const r = t[o][e];
                  return r < n || (r === n && t[o + 1][e] === n);
                }
              : (o) => t[o][e] < n
          ),
        it = (t, e, n) => ot(t, n, (o) => t[o][e] >= n);
      function at(t, e, n) {
        let o = 0,
          r = t.length;
        for (; o < r && t[o] < e; ) o++;
        for (; r > o && t[r - 1] > n; ) r--;
        return o > 0 || r < t.length ? t.slice(o, r) : t;
      }
      const st = ['push', 'pop', 'shift', 'splice', 'unshift'];
      function ct(t, e) {
        t._chartjs
          ? t._chartjs.listeners.push(e)
          : (Object.defineProperty(t, '_chartjs', {
              configurable: !0,
              enumerable: !1,
              value: { listeners: [e] },
            }),
            st.forEach((e) => {
              const n = '_onData' + O(e),
                o = t[e];
              Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value(...e) {
                  const r = o.apply(this, e);
                  return (
                    t._chartjs.listeners.forEach((t) => {
                      'function' == typeof t[n] && t[n](...e);
                    }),
                    r
                  );
                },
              });
            }));
      }
      function lt(t, e) {
        const n = t._chartjs;
        if (!n) return;
        const o = n.listeners,
          r = o.indexOf(e);
        -1 !== r && o.splice(r, 1),
          o.length > 0 ||
            (st.forEach((e) => {
              delete t[e];
            }),
            delete t._chartjs);
      }
      function ut(t) {
        const e = new Set(t);
        return e.size === t.length ? t : Array.from(e);
      }
      const ht =
        'undefined' == typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      function ft(t, e) {
        let n = [],
          o = !1;
        return function (...r) {
          (n = r),
            o ||
              ((o = !0),
              ht.call(window, () => {
                (o = !1), t.apply(e, n);
              }));
        };
      }
      function dt(t, e) {
        let n;
        return function (...o) {
          return e ? (clearTimeout(n), (n = setTimeout(t, e, o))) : t.apply(this, o), e;
        };
      }
      const pt = (t) => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
        gt = (t, e, n) => ('start' === t ? e : 'end' === t ? n : (e + n) / 2),
        yt = (t, e, n, o) => (t === (o ? 'left' : 'right') ? n : 'center' === t ? (e + n) / 2 : e);
      function bt(t, e, n) {
        const o = e.length;
        let r = 0,
          i = o;
        if (t._sorted) {
          const { iScale: a, _parsed: s } = t,
            c = a.axis,
            { min: l, max: u, minDefined: h, maxDefined: f } = a.getUserBounds();
          h &&
            (r = tt(
              Math.min(rt(s, c, l).lo, n ? o : rt(e, c, a.getPixelForValue(l)).lo),
              0,
              o - 1
            )),
            (i = f
              ? tt(
                  Math.max(
                    rt(s, a.axis, u, !0).hi + 1,
                    n ? 0 : rt(e, c, a.getPixelForValue(u), !0).hi + 1
                  ),
                  r,
                  o
                ) - r
              : o - r);
        }
        return { start: r, count: i };
      }
      function xt(t) {
        const { xScale: e, yScale: n, _scaleRanges: o } = t,
          r = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
        if (!o) return (t._scaleRanges = r), !0;
        const i = o.xmin !== e.min || o.xmax !== e.max || o.ymin !== n.min || o.ymax !== n.max;
        return Object.assign(o, r), i;
      }
      const mt = (t) => 0 === t || 1 === t,
        vt = (t, e, n) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * j) / n),
        wt = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * j) / n) + 1,
        Mt = {
          linear: (t) => t,
          easeInQuad: (t) => t * t,
          easeOutQuad: (t) => -t * (t - 2),
          easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
          easeInCubic: (t) => t * t * t,
          easeOutCubic: (t) => (t -= 1) * t * t + 1,
          easeInOutCubic: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2)),
          easeInQuart: (t) => t * t * t * t,
          easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: (t) => t * t * t * t * t,
          easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: (t) => 1 - Math.cos(t * A),
          easeOutSine: (t) => Math.sin(t * A),
          easeInOutSine: (t) => -0.5 * (Math.cos(I * t) - 1),
          easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
          easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
          easeInOutExpo: (t) =>
            mt(t)
              ? t
              : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
          easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: (t) =>
            (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: (t) => (mt(t) ? t : vt(t, 0.075, 0.3)),
          easeOutElastic: (t) => (mt(t) ? t : wt(t, 0.075, 0.3)),
          easeInOutElastic(t) {
            const e = 0.1125;
            return mt(t)
              ? t
              : t < 0.5
                ? 0.5 * vt(2 * t, e, 0.45)
                : 0.5 + 0.5 * wt(2 * t - 1, e, 0.45);
          },
          easeInBack(t) {
            const e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack(t) {
            const e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: (t) => 1 - Mt.easeOutBounce(1 - t),
          easeOutBounce(t) {
            const e = 7.5625,
              n = 2.75;
            return t < 1 / n
              ? e * t * t
              : t < 2 / n
                ? e * (t -= 1.5 / n) * t + 0.75
                : t < 2.5 / n
                  ? e * (t -= 2.25 / n) * t + 0.9375
                  : e * (t -= 2.625 / n) * t + 0.984375;
          },
          easeInOutBounce: (t) =>
            t < 0.5 ? 0.5 * Mt.easeInBounce(2 * t) : 0.5 * Mt.easeOutBounce(2 * t - 1) + 0.5,
        };
      function kt(t) {
        if (t && 'object' == typeof t) {
          const e = t.toString();
          return '[object CanvasPattern]' === e || '[object CanvasGradient]' === e;
        }
        return !1;
      }
      function _t(t) {
        return kt(t) ? t : new o.Q1(t);
      }
      function Ot(t) {
        return kt(t) ? t : new o.Q1(t).saturate(0.5).darken(0.1).hexString();
      }
      const Pt = ['x', 'y', 'borderWidth', 'radius', 'tension'],
        Tt = ['color', 'borderColor', 'backgroundColor'];
      const Ct = new Map();
      function St(t, e, n) {
        return (function (t, e) {
          e = e || {};
          const n = t + JSON.stringify(e);
          let o = Ct.get(n);
          return o || ((o = new Intl.NumberFormat(t, e)), Ct.set(n, o)), o;
        })(e, n).format(t);
      }
      const It = {
        values: (t) => (s(t) ? t : '' + t),
        numeric(t, e, n) {
          if (0 === t) return '0';
          const o = this.chart.options.locale;
          let r,
            i = t;
          if (n.length > 1) {
            const e = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
            (e < 1e-4 || e > 1e15) && (r = 'scientific'),
              (i = (function (t, e) {
                let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
                return n;
              })(t, n));
          }
          const a = L(Math.abs(i)),
            s = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
            c = { notation: r, minimumFractionDigits: s, maximumFractionDigits: s };
          return Object.assign(c, this.options.ticks.format), St(t, o, c);
        },
        logarithmic(t, e, n) {
          if (0 === t) return '0';
          const o = n[e].significand || t / Math.pow(10, Math.floor(L(t)));
          return [1, 2, 3, 5, 10, 15].includes(o) || e > 0.8 * n.length
            ? It.numeric.call(this, t, e, n)
            : '';
        },
      };
      var jt = { formatters: It };
      const Rt = Object.create(null),
        Wt = Object.create(null);
      function Bt(t, e) {
        if (!e) return t;
        const n = e.split('.');
        for (let e = 0, o = n.length; e < o; ++e) {
          const o = n[e];
          t = t[o] || (t[o] = Object.create(null));
        }
        return t;
      }
      function At(t, e, n) {
        return 'string' == typeof e ? v(Bt(t, e), n) : v(Bt(t, ''), e);
      }
      class Dt {
        constructor(t, e) {
          (this.animation = void 0),
            (this.backgroundColor = 'rgba(0,0,0,0.1)'),
            (this.borderColor = 'rgba(0,0,0,0.1)'),
            (this.color = '#666'),
            (this.datasets = {}),
            (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: 'normal',
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (t, e) => Ot(e.backgroundColor)),
            (this.hoverBorderColor = (t, e) => Ot(e.borderColor)),
            (this.hoverColor = (t, e) => Ot(e.color)),
            (this.indexAxis = 'x'),
            (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t),
            this.apply(e);
        }
        set(t, e) {
          return At(this, t, e);
        }
        get(t) {
          return Bt(this, t);
        }
        describe(t, e) {
          return At(Wt, t, e);
        }
        override(t, e) {
          return At(Rt, t, e);
        }
        route(t, e, n, o) {
          const r = Bt(this, t),
            i = Bt(this, n),
            a = '_' + e;
          Object.defineProperties(r, {
            [a]: { value: r[e], writable: !0 },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[a],
                  e = i[o];
                return c(t) ? Object.assign({}, e, t) : h(t, e);
              },
              set(t) {
                this[a] = t;
              },
            },
          });
        }
        apply(t) {
          t.forEach((t) => t(this));
        }
      }
      var Nt = new Dt(
        {
          _scriptable: (t) => !t.startsWith('on'),
          _indexable: (t) => 'events' !== t,
          hover: { _fallback: 'interaction' },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function (t) {
            t.set('animation', {
              delay: void 0,
              duration: 1e3,
              easing: 'easeOutQuart',
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              t.describe('animation', {
                _fallback: !1,
                _indexable: !1,
                _scriptable: (t) => 'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
              }),
              t.set('animations', {
                colors: { type: 'color', properties: Tt },
                numbers: { type: 'number', properties: Pt },
              }),
              t.describe('animations', { _fallback: 'animation' }),
              t.set('transitions', {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: 'transparent' },
                    visible: { type: 'boolean', duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: 'transparent' },
                    visible: { type: 'boolean', easing: 'linear', fn: (t) => 0 | t },
                  },
                },
              });
          },
          function (t) {
            t.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } });
          },
          function (t) {
            t.set('scale', {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: 'ticks',
              clip: !0,
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: '',
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: jt.formatters.values,
                minor: {},
                major: {},
                align: 'center',
                crossAlign: 'near',
                showLabelBackdrop: !1,
                backdropColor: 'rgba(255, 255, 255, 0.75)',
                backdropPadding: 2,
              },
            }),
              t.route('scale.ticks', 'color', '', 'color'),
              t.route('scale.grid', 'color', '', 'borderColor'),
              t.route('scale.border', 'color', '', 'borderColor'),
              t.route('scale.title', 'color', '', 'color'),
              t.describe('scale', {
                _fallback: !1,
                _scriptable: (t) =>
                  !t.startsWith('before') &&
                  !t.startsWith('after') &&
                  'callback' !== t &&
                  'parser' !== t,
                _indexable: (t) => 'borderDash' !== t && 'tickBorderDash' !== t && 'dash' !== t,
              }),
              t.describe('scales', { _fallback: 'scale' }),
              t.describe('scale.ticks', {
                _scriptable: (t) => 'backdropPadding' !== t && 'callback' !== t,
                _indexable: (t) => 'backdropPadding' !== t,
              });
          },
        ]
      );
      function Lt(t, e, n, o, r) {
        let i = e[r];
        return i || ((i = e[r] = t.measureText(r).width), n.push(r)), i > o && (o = i), o;
      }
      function zt(t, e, n, o) {
        let r = ((o = o || {}).data = o.data || {}),
          i = (o.garbageCollect = o.garbageCollect || []);
        o.font !== e && ((r = o.data = {}), (i = o.garbageCollect = []), (o.font = e)),
          t.save(),
          (t.font = e);
        let a = 0;
        const c = n.length;
        let l, u, h, f, d;
        for (l = 0; l < c; l++)
          if (((f = n[l]), null == f || s(f))) {
            if (s(f))
              for (u = 0, h = f.length; u < h; u++)
                (d = f[u]), null == d || s(d) || (a = Lt(t, r, i, a, d));
          } else a = Lt(t, r, i, a, f);
        t.restore();
        const p = i.length / 2;
        if (p > n.length) {
          for (l = 0; l < p; l++) delete r[i[l]];
          i.splice(0, p);
        }
        return a;
      }
      function Et(t, e, n) {
        const o = t.currentDevicePixelRatio,
          r = 0 !== n ? Math.max(n / 2, 0.5) : 0;
        return Math.round((e - r) * o) / o + r;
      }
      function Ht(t, e) {
        (e || t) &&
          ((e = e || t.getContext('2d')).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore());
      }
      function Ft(t, e, n, o) {
        Qt(t, e, n, o, null);
      }
      function Qt(t, e, n, o, r) {
        let i, a, s, c, l, u, h, f;
        const d = e.pointStyle,
          p = e.rotation,
          g = e.radius;
        let y = (p || 0) * B;
        if (
          d &&
          'object' == typeof d &&
          ((i = d.toString()),
          '[object HTMLImageElement]' === i || '[object HTMLCanvasElement]' === i)
        )
          return (
            t.save(),
            t.translate(n, o),
            t.rotate(y),
            t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height),
            void t.restore()
          );
        if (!(isNaN(g) || g <= 0)) {
          switch ((t.beginPath(), d)) {
            default:
              r ? t.ellipse(n, o, r / 2, g, 0, 0, j) : t.arc(n, o, g, 0, j), t.closePath();
              break;
            case 'triangle':
              (u = r ? r / 2 : g),
                t.moveTo(n + Math.sin(y) * u, o - Math.cos(y) * g),
                (y += N),
                t.lineTo(n + Math.sin(y) * u, o - Math.cos(y) * g),
                (y += N),
                t.lineTo(n + Math.sin(y) * u, o - Math.cos(y) * g),
                t.closePath();
              break;
            case 'rectRounded':
              (l = 0.516 * g),
                (c = g - l),
                (a = Math.cos(y + D) * c),
                (h = Math.cos(y + D) * (r ? r / 2 - l : c)),
                (s = Math.sin(y + D) * c),
                (f = Math.sin(y + D) * (r ? r / 2 - l : c)),
                t.arc(n - h, o - s, l, y - I, y - A),
                t.arc(n + f, o - a, l, y - A, y),
                t.arc(n + h, o + s, l, y, y + A),
                t.arc(n - f, o + a, l, y + A, y + I),
                t.closePath();
              break;
            case 'rect':
              if (!p) {
                (c = Math.SQRT1_2 * g), (u = r ? r / 2 : c), t.rect(n - u, o - c, 2 * u, 2 * c);
                break;
              }
              y += D;
            case 'rectRot':
              (h = Math.cos(y) * (r ? r / 2 : g)),
                (a = Math.cos(y) * g),
                (s = Math.sin(y) * g),
                (f = Math.sin(y) * (r ? r / 2 : g)),
                t.moveTo(n - h, o - s),
                t.lineTo(n + f, o - a),
                t.lineTo(n + h, o + s),
                t.lineTo(n - f, o + a),
                t.closePath();
              break;
            case 'crossRot':
              y += D;
            case 'cross':
              (h = Math.cos(y) * (r ? r / 2 : g)),
                (a = Math.cos(y) * g),
                (s = Math.sin(y) * g),
                (f = Math.sin(y) * (r ? r / 2 : g)),
                t.moveTo(n - h, o - s),
                t.lineTo(n + h, o + s),
                t.moveTo(n + f, o - a),
                t.lineTo(n - f, o + a);
              break;
            case 'star':
              (h = Math.cos(y) * (r ? r / 2 : g)),
                (a = Math.cos(y) * g),
                (s = Math.sin(y) * g),
                (f = Math.sin(y) * (r ? r / 2 : g)),
                t.moveTo(n - h, o - s),
                t.lineTo(n + h, o + s),
                t.moveTo(n + f, o - a),
                t.lineTo(n - f, o + a),
                (y += D),
                (h = Math.cos(y) * (r ? r / 2 : g)),
                (a = Math.cos(y) * g),
                (s = Math.sin(y) * g),
                (f = Math.sin(y) * (r ? r / 2 : g)),
                t.moveTo(n - h, o - s),
                t.lineTo(n + h, o + s),
                t.moveTo(n + f, o - a),
                t.lineTo(n - f, o + a);
              break;
            case 'line':
              (a = r ? r / 2 : Math.cos(y) * g),
                (s = Math.sin(y) * g),
                t.moveTo(n - a, o - s),
                t.lineTo(n + a, o + s);
              break;
            case 'dash':
              t.moveTo(n, o), t.lineTo(n + Math.cos(y) * (r ? r / 2 : g), o + Math.sin(y) * g);
              break;
            case !1:
              t.closePath();
          }
          t.fill(), e.borderWidth > 0 && t.stroke();
        }
      }
      function qt(t, e, n) {
        return (
          (n = n || 0.5),
          !e ||
            (t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n)
        );
      }
      function $t(t, e) {
        t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip();
      }
      function Kt(t) {
        t.restore();
      }
      function Jt(t, e, n, o, r) {
        if (!e) return t.lineTo(n.x, n.y);
        if ('middle' === r) {
          const o = (e.x + n.x) / 2;
          t.lineTo(o, e.y), t.lineTo(o, n.y);
        } else ('after' === r) != !!o ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
        t.lineTo(n.x, n.y);
      }
      function Vt(t, e, n, o) {
        if (!e) return t.lineTo(n.x, n.y);
        t.bezierCurveTo(
          o ? e.cp1x : e.cp2x,
          o ? e.cp1y : e.cp2y,
          o ? n.cp2x : n.cp1x,
          o ? n.cp2y : n.cp1y,
          n.x,
          n.y
        );
      }
      function Gt(t, e, n, o, r) {
        if (r.strikethrough || r.underline) {
          const i = t.measureText(o),
            a = e - i.actualBoundingBoxLeft,
            s = e + i.actualBoundingBoxRight,
            c = n - i.actualBoundingBoxAscent,
            l = n + i.actualBoundingBoxDescent,
            u = r.strikethrough ? (c + l) / 2 : l;
          (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = r.decorationWidth || 2),
            t.moveTo(a, u),
            t.lineTo(s, u),
            t.stroke();
        }
      }
      function Yt(t, e) {
        const n = t.fillStyle;
        (t.fillStyle = e.color), t.fillRect(e.left, e.top, e.width, e.height), (t.fillStyle = n);
      }
      function Ut(t, e, n, o, r, i = {}) {
        const c = s(e) ? e : [e],
          l = i.strokeWidth > 0 && '' !== i.strokeColor;
        let u, h;
        for (
          t.save(),
            t.font = r.string,
            (function (t, e) {
              e.translation && t.translate(e.translation[0], e.translation[1]),
                a(e.rotation) || t.rotate(e.rotation),
                e.color && (t.fillStyle = e.color),
                e.textAlign && (t.textAlign = e.textAlign),
                e.textBaseline && (t.textBaseline = e.textBaseline);
            })(t, i),
            u = 0;
          u < c.length;
          ++u
        )
          (h = c[u]),
            i.backdrop && Yt(t, i.backdrop),
            l &&
              (i.strokeColor && (t.strokeStyle = i.strokeColor),
              a(i.strokeWidth) || (t.lineWidth = i.strokeWidth),
              t.strokeText(h, n, o, i.maxWidth)),
            t.fillText(h, n, o, i.maxWidth),
            Gt(t, n, o, h, i),
            (o += Number(r.lineHeight));
        t.restore();
      }
      function Xt(t, e) {
        const { x: n, y: o, w: r, h: i, radius: a } = e;
        t.arc(n + a.topLeft, o + a.topLeft, a.topLeft, 1.5 * I, I, !0),
          t.lineTo(n, o + i - a.bottomLeft),
          t.arc(n + a.bottomLeft, o + i - a.bottomLeft, a.bottomLeft, I, A, !0),
          t.lineTo(n + r - a.bottomRight, o + i),
          t.arc(n + r - a.bottomRight, o + i - a.bottomRight, a.bottomRight, A, 0, !0),
          t.lineTo(n + r, o + a.topRight),
          t.arc(n + r - a.topRight, o + a.topRight, a.topRight, 0, -A, !0),
          t.lineTo(n + a.topLeft, o);
      }
      const Zt = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        te = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
      function ee(t, e) {
        const n = ('' + t).match(Zt);
        if (!n || 'normal' === n[1]) return 1.2 * e;
        switch (((t = +n[2]), n[3])) {
          case 'px':
            return t;
          case '%':
            t /= 100;
        }
        return e * t;
      }
      const ne = (t) => +t || 0;
      function oe(t, e) {
        const n = {},
          o = c(e),
          r = o ? Object.keys(e) : e,
          i = c(t) ? (o ? (n) => h(t[n], t[e[n]]) : (e) => t[e]) : () => t;
        for (const t of r) n[t] = ne(i(t));
        return n;
      }
      function re(t) {
        return oe(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
      }
      function ie(t) {
        return oe(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
      }
      function ae(t) {
        const e = re(t);
        return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
      }
      function se(t, e) {
        (t = t || {}), (e = e || Nt.font);
        let n = h(t.size, e.size);
        'string' == typeof n && (n = parseInt(n, 10));
        let o = h(t.style, e.style);
        o &&
          !('' + o).match(te) &&
          (console.warn('Invalid font style specified: "' + o + '"'), (o = void 0));
        const r = {
          family: h(t.family, e.family),
          lineHeight: ee(h(t.lineHeight, e.lineHeight), n),
          size: n,
          style: o,
          weight: h(t.weight, e.weight),
          string: '',
        };
        return (
          (r.string = (function (t) {
            return !t || a(t.size) || a(t.family)
              ? null
              : (t.style ? t.style + ' ' : '') +
                  (t.weight ? t.weight + ' ' : '') +
                  t.size +
                  'px ' +
                  t.family;
          })(r)),
          r
        );
      }
      function ce(t, e, n, o) {
        let r,
          i,
          a,
          c = !0;
        for (r = 0, i = t.length; r < i; ++r)
          if (
            ((a = t[r]),
            void 0 !== a &&
              (void 0 !== e && 'function' == typeof a && ((a = a(e)), (c = !1)),
              void 0 !== n && s(a) && ((a = a[n % a.length]), (c = !1)),
              void 0 !== a))
          )
            return o && !c && (o.cacheable = !1), a;
      }
      function le(t, e, n) {
        const { min: o, max: r } = t,
          i = d(e, (r - o) / 2),
          a = (t, e) => (n && 0 === t ? 0 : t + e);
        return { min: a(o, -Math.abs(i)), max: a(r, i) };
      }
      function ue(t, e) {
        return Object.assign(Object.create(t), e);
      }
      function he(t, e = [''], n, o, r = () => t[0]) {
        const i = n || t;
        void 0 === o && (o = Me('_fallback', t));
        const a = {
          [Symbol.toStringTag]: 'Object',
          _cacheable: !0,
          _scopes: t,
          _rootScopes: i,
          _fallback: o,
          _getTarget: r,
          override: (n) => he([n, ...t], e, i, o),
        };
        return new Proxy(a, {
          deleteProperty: (e, n) => (delete e[n], delete e._keys, delete t[0][n], !0),
          get: (n, o) =>
            ye(n, o, () =>
              (function (t, e, n, o) {
                let r;
                for (const i of e)
                  if (((r = Me(pe(i, t), n)), void 0 !== r)) return ge(t, r) ? ve(n, o, t, r) : r;
              })(o, e, t, n)
            ),
          getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, e) => ke(t).includes(e),
          ownKeys: (t) => ke(t),
          set(t, e, n) {
            const o = t._storage || (t._storage = r());
            return (t[e] = o[e] = n), delete t._keys, !0;
          },
        });
      }
      function fe(t, e, n, o) {
        const r = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: n,
          _stack: new Set(),
          _descriptors: de(t, o),
          setContext: (e) => fe(t, e, n, o),
          override: (r) => fe(t.override(r), e, n, o),
        };
        return new Proxy(r, {
          deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
          get: (t, e, n) =>
            ye(t, e, () =>
              (function (t, e, n) {
                const { _proxy: o, _context: r, _subProxy: i, _descriptors: a } = t;
                let l = o[e];
                T(l) &&
                  a.isScriptable(e) &&
                  (l = (function (t, e, n, o) {
                    const { _proxy: r, _context: i, _subProxy: a, _stack: s } = n;
                    if (s.has(t))
                      throw new Error('Recursion detected: ' + Array.from(s).join('->') + '->' + t);
                    s.add(t);
                    let c = e(i, a || o);
                    s.delete(t), ge(t, c) && (c = ve(r._scopes, r, t, c));
                    return c;
                  })(e, l, t, n));
                s(l) &&
                  l.length &&
                  (l = (function (t, e, n, o) {
                    const { _proxy: r, _context: i, _subProxy: a, _descriptors: s } = n;
                    if (void 0 !== i.index && o(t)) return e[i.index % e.length];
                    if (c(e[0])) {
                      const n = e,
                        o = r._scopes.filter((t) => t !== n);
                      e = [];
                      for (const c of n) {
                        const n = ve(o, r, t, c);
                        e.push(fe(n, i, a && a[t], s));
                      }
                    }
                    return e;
                  })(e, l, t, a.isIndexable));
                ge(e, l) && (l = fe(l, r, i && i[e], a));
                return l;
              })(t, e, n)
            ),
          getOwnPropertyDescriptor: (e, n) =>
            e._descriptors.allKeys
              ? Reflect.has(t, n)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, n),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (e, n) => Reflect.has(t, n),
          ownKeys: () => Reflect.ownKeys(t),
          set: (e, n, o) => ((t[n] = o), delete e[n], !0),
        });
      }
      function de(t, e = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: n = e.scriptable,
          _indexable: o = e.indexable,
          _allKeys: r = e.allKeys,
        } = t;
        return {
          allKeys: r,
          scriptable: n,
          indexable: o,
          isScriptable: T(n) ? n : () => n,
          isIndexable: T(o) ? o : () => o,
        };
      }
      const pe = (t, e) => (t ? t + O(e) : e),
        ge = (t, e) =>
          c(e) &&
          'adapters' !== t &&
          (null === Object.getPrototypeOf(e) || e.constructor === Object);
      function ye(t, e, n) {
        if (Object.prototype.hasOwnProperty.call(t, e) || 'constructor' === e) return t[e];
        const o = n();
        return (t[e] = o), o;
      }
      function be(t, e, n) {
        return T(t) ? t(e, n) : t;
      }
      const xe = (t, e) => (!0 === t ? e : 'string' == typeof t ? _(e, t) : void 0);
      function me(t, e, n, o, r) {
        for (const i of e) {
          const e = xe(n, i);
          if (e) {
            t.add(e);
            const i = be(e._fallback, n, r);
            if (void 0 !== i && i !== n && i !== o) return i;
          } else if (!1 === e && void 0 !== o && n !== o) return null;
        }
        return !1;
      }
      function ve(t, e, n, o) {
        const r = e._rootScopes,
          i = be(e._fallback, n, o),
          a = [...t, ...r],
          l = new Set();
        l.add(o);
        let u = we(l, a, n, i || n, o);
        return (
          null !== u &&
          (void 0 === i || i === n || ((u = we(l, a, i, u, o)), null !== u)) &&
          he(Array.from(l), [''], r, i, () =>
            (function (t, e, n) {
              const o = t._getTarget();
              e in o || (o[e] = {});
              const r = o[e];
              if (s(r) && c(n)) return n;
              return r || {};
            })(e, n, o)
          )
        );
      }
      function we(t, e, n, o, r) {
        for (; n; ) n = me(t, e, n, o, r);
        return n;
      }
      function Me(t, e) {
        for (const n of e) {
          if (!n) continue;
          const e = n[t];
          if (void 0 !== e) return e;
        }
      }
      function ke(t) {
        let e = t._keys;
        return (
          e ||
            (e = t._keys =
              (function (t) {
                const e = new Set();
                for (const n of t)
                  for (const t of Object.keys(n).filter((t) => !t.startsWith('_'))) e.add(t);
                return Array.from(e);
              })(t._scopes)),
          e
        );
      }
      function _e(t, e, n, o) {
        const { iScale: r } = t,
          { key: i = 'r' } = this._parsing,
          a = new Array(o);
        let s, c, l, u;
        for (s = 0, c = o; s < c; ++s) (l = s + n), (u = e[l]), (a[s] = { r: r.parse(_(u, i), l) });
        return a;
      }
      const Oe = Number.EPSILON || 1e-14,
        Pe = (t, e) => e < t.length && !t[e].skip && t[e],
        Te = (t) => ('x' === t ? 'y' : 'x');
      function Ce(t, e, n, o) {
        const r = t.skip ? e : t,
          i = e,
          a = n.skip ? e : n,
          s = Y(i, r),
          c = Y(a, i);
        let l = s / (s + c),
          u = c / (s + c);
        (l = isNaN(l) ? 0 : l), (u = isNaN(u) ? 0 : u);
        const h = o * l,
          f = o * u;
        return {
          previous: { x: i.x - h * (a.x - r.x), y: i.y - h * (a.y - r.y) },
          next: { x: i.x + f * (a.x - r.x), y: i.y + f * (a.y - r.y) },
        };
      }
      function Se(t, e = 'x') {
        const n = Te(e),
          o = t.length,
          r = Array(o).fill(0),
          i = Array(o);
        let a,
          s,
          c,
          l = Pe(t, 0);
        for (a = 0; a < o; ++a)
          if (((s = c), (c = l), (l = Pe(t, a + 1)), c)) {
            if (l) {
              const t = l[e] - c[e];
              r[a] = 0 !== t ? (l[n] - c[n]) / t : 0;
            }
            i[a] = s
              ? l
                ? z(r[a - 1]) !== z(r[a])
                  ? 0
                  : (r[a - 1] + r[a]) / 2
                : r[a - 1]
              : r[a];
          }
        !(function (t, e, n) {
          const o = t.length;
          let r,
            i,
            a,
            s,
            c,
            l = Pe(t, 0);
          for (let u = 0; u < o - 1; ++u)
            (c = l),
              (l = Pe(t, u + 1)),
              c &&
                l &&
                (E(e[u], 0, Oe)
                  ? (n[u] = n[u + 1] = 0)
                  : ((r = n[u] / e[u]),
                    (i = n[u + 1] / e[u]),
                    (s = Math.pow(r, 2) + Math.pow(i, 2)),
                    s <= 9 ||
                      ((a = 3 / Math.sqrt(s)), (n[u] = r * a * e[u]), (n[u + 1] = i * a * e[u]))));
        })(t, r, i),
          (function (t, e, n = 'x') {
            const o = Te(n),
              r = t.length;
            let i,
              a,
              s,
              c = Pe(t, 0);
            for (let l = 0; l < r; ++l) {
              if (((a = s), (s = c), (c = Pe(t, l + 1)), !s)) continue;
              const r = s[n],
                u = s[o];
              a && ((i = (r - a[n]) / 3), (s[`cp1${n}`] = r - i), (s[`cp1${o}`] = u - i * e[l])),
                c && ((i = (c[n] - r) / 3), (s[`cp2${n}`] = r + i), (s[`cp2${o}`] = u + i * e[l]));
            }
          })(t, i, e);
      }
      function Ie(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }
      function je(t, e, n, o, r) {
        let i, a, s, c;
        if ((e.spanGaps && (t = t.filter((t) => !t.skip)), 'monotone' === e.cubicInterpolationMode))
          Se(t, r);
        else {
          let n = o ? t[t.length - 1] : t[0];
          for (i = 0, a = t.length; i < a; ++i)
            (s = t[i]),
              (c = Ce(n, s, t[Math.min(i + 1, a - (o ? 0 : 1)) % a], e.tension)),
              (s.cp1x = c.previous.x),
              (s.cp1y = c.previous.y),
              (s.cp2x = c.next.x),
              (s.cp2y = c.next.y),
              (n = s);
        }
        e.capBezierPoints &&
          (function (t, e) {
            let n,
              o,
              r,
              i,
              a,
              s = qt(t[0], e);
            for (n = 0, o = t.length; n < o; ++n)
              (a = i),
                (i = s),
                (s = n < o - 1 && qt(t[n + 1], e)),
                i &&
                  ((r = t[n]),
                  a &&
                    ((r.cp1x = Ie(r.cp1x, e.left, e.right)),
                    (r.cp1y = Ie(r.cp1y, e.top, e.bottom))),
                  s &&
                    ((r.cp2x = Ie(r.cp2x, e.left, e.right)),
                    (r.cp2y = Ie(r.cp2y, e.top, e.bottom))));
          })(t, n);
      }
      function Re() {
        return 'undefined' != typeof window && 'undefined' != typeof document;
      }
      function We(t) {
        let e = t.parentNode;
        return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e;
      }
      function Be(t, e, n) {
        let o;
        return (
          'string' == typeof t
            ? ((o = parseInt(t, 10)), -1 !== t.indexOf('%') && (o = (o / 100) * e.parentNode[n]))
            : (o = t),
          o
        );
      }
      const Ae = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
      const De = ['top', 'right', 'bottom', 'left'];
      function Ne(t, e, n) {
        const o = {};
        n = n ? '-' + n : '';
        for (let r = 0; r < 4; r++) {
          const i = De[r];
          o[i] = parseFloat(t[e + '-' + i + n]) || 0;
        }
        return (o.width = o.left + o.right), (o.height = o.top + o.bottom), o;
      }
      const Le = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
      function ze(t, e) {
        if ('native' in t) return t;
        const { canvas: n, currentDevicePixelRatio: o } = e,
          r = Ae(n),
          i = 'border-box' === r.boxSizing,
          a = Ne(r, 'padding'),
          s = Ne(r, 'border', 'width'),
          {
            x: c,
            y: l,
            box: u,
          } = (function (t, e) {
            const n = t.touches,
              o = n && n.length ? n[0] : t,
              { offsetX: r, offsetY: i } = o;
            let a,
              s,
              c = !1;
            if (Le(r, i, t.target)) (a = r), (s = i);
            else {
              const t = e.getBoundingClientRect();
              (a = o.clientX - t.left), (s = o.clientY - t.top), (c = !0);
            }
            return { x: a, y: s, box: c };
          })(t, n),
          h = a.left + (u && s.left),
          f = a.top + (u && s.top);
        let { width: d, height: p } = e;
        return (
          i && ((d -= a.width + s.width), (p -= a.height + s.height)),
          {
            x: Math.round((((c - h) / d) * n.width) / o),
            y: Math.round((((l - f) / p) * n.height) / o),
          }
        );
      }
      const Ee = (t) => Math.round(10 * t) / 10;
      function He(t, e, n, o) {
        const r = Ae(t),
          i = Ne(r, 'margin'),
          a = Be(r.maxWidth, t, 'clientWidth') || W,
          s = Be(r.maxHeight, t, 'clientHeight') || W,
          c = (function (t, e, n) {
            let o, r;
            if (void 0 === e || void 0 === n) {
              const i = t && We(t);
              if (i) {
                const t = i.getBoundingClientRect(),
                  a = Ae(i),
                  s = Ne(a, 'border', 'width'),
                  c = Ne(a, 'padding');
                (e = t.width - c.width - s.width),
                  (n = t.height - c.height - s.height),
                  (o = Be(a.maxWidth, i, 'clientWidth')),
                  (r = Be(a.maxHeight, i, 'clientHeight'));
              } else (e = t.clientWidth), (n = t.clientHeight);
            }
            return { width: e, height: n, maxWidth: o || W, maxHeight: r || W };
          })(t, e, n);
        let { width: l, height: u } = c;
        if ('content-box' === r.boxSizing) {
          const t = Ne(r, 'border', 'width'),
            e = Ne(r, 'padding');
          (l -= e.width + t.width), (u -= e.height + t.height);
        }
        (l = Math.max(0, l - i.width)),
          (u = Math.max(0, o ? l / o : u - i.height)),
          (l = Ee(Math.min(l, a, c.maxWidth))),
          (u = Ee(Math.min(u, s, c.maxHeight))),
          l && !u && (u = Ee(l / 2));
        return (
          (void 0 !== e || void 0 !== n) &&
            o &&
            c.height &&
            u > c.height &&
            ((u = c.height), (l = Ee(Math.floor(u * o)))),
          { width: l, height: u }
        );
      }
      function Fe(t, e, n) {
        const o = e || 1,
          r = Math.floor(t.height * o),
          i = Math.floor(t.width * o);
        (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
        const a = t.canvas;
        return (
          a.style &&
            (n || (!a.style.height && !a.style.width)) &&
            ((a.style.height = `${t.height}px`), (a.style.width = `${t.width}px`)),
          (t.currentDevicePixelRatio !== o || a.height !== r || a.width !== i) &&
            ((t.currentDevicePixelRatio = o),
            (a.height = r),
            (a.width = i),
            t.ctx.setTransform(o, 0, 0, o, 0, 0),
            !0)
        );
      }
      const Qe = (function () {
        let t = !1;
        try {
          const e = {
            get passive() {
              return (t = !0), !1;
            },
          };
          Re() &&
            (window.addEventListener('test', null, e), window.removeEventListener('test', null, e));
        } catch (t) {}
        return t;
      })();
      function qe(t, e) {
        const n = (function (t, e) {
            return Ae(t).getPropertyValue(e);
          })(t, e),
          o = n && n.match(/^(\d+)(\.\d+)?px$/);
        return o ? +o[1] : void 0;
      }
      function $e(t, e, n, o) {
        return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
      }
      function Ke(t, e, n, o) {
        return {
          x: t.x + n * (e.x - t.x),
          y:
            'middle' === o
              ? n < 0.5
                ? t.y
                : e.y
              : 'after' === o
                ? n < 1
                  ? t.y
                  : e.y
                : n > 0
                  ? e.y
                  : t.y,
        };
      }
      function Je(t, e, n, o) {
        const r = { x: t.cp2x, y: t.cp2y },
          i = { x: e.cp1x, y: e.cp1y },
          a = $e(t, r, n),
          s = $e(r, i, n),
          c = $e(i, e, n),
          l = $e(a, s, n),
          u = $e(s, c, n);
        return $e(l, u, n);
      }
      const Ve = function (t, e) {
          return {
            x: (n) => t + t + e - n,
            setWidth(t) {
              e = t;
            },
            textAlign: (t) => ('center' === t ? t : 'right' === t ? 'left' : 'right'),
            xPlus: (t, e) => t - e,
            leftForLtr: (t, e) => t - e,
          };
        },
        Ge = function () {
          return {
            x: (t) => t,
            setWidth(t) {},
            textAlign: (t) => t,
            xPlus: (t, e) => t + e,
            leftForLtr: (t, e) => t,
          };
        };
      function Ye(t, e, n) {
        return t ? Ve(e, n) : Ge();
      }
      function Ue(t, e) {
        let n, o;
        ('ltr' !== e && 'rtl' !== e) ||
          ((n = t.canvas.style),
          (o = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
          n.setProperty('direction', e, 'important'),
          (t.prevTextDirection = o));
      }
      function Xe(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]));
      }
      function Ze(t) {
        return 'angle' === t
          ? { between: Z, compare: U, normalize: X }
          : { between: nt, compare: (t, e) => t - e, normalize: (t) => t };
      }
      function tn({ start: t, end: e, count: n, loop: o, style: r }) {
        return { start: t % n, end: e % n, loop: o && (e - t + 1) % n == 0, style: r };
      }
      function en(t, e, n) {
        if (!n) return [t];
        const { property: o, start: r, end: i } = n,
          a = e.length,
          { compare: s, between: c, normalize: l } = Ze(o),
          {
            start: u,
            end: h,
            loop: f,
            style: d,
          } = (function (t, e, n) {
            const { property: o, start: r, end: i } = n,
              { between: a, normalize: s } = Ze(o),
              c = e.length;
            let l,
              u,
              { start: h, end: f, loop: d } = t;
            if (d) {
              for (h += c, f += c, l = 0, u = c; l < u && a(s(e[h % c][o]), r, i); ++l) h--, f--;
              (h %= c), (f %= c);
            }
            return f < h && (f += c), { start: h, end: f, loop: d, style: t.style };
          })(t, e, n),
          p = [];
        let g,
          y,
          b,
          x = !1,
          m = null;
        const v = () => x || (c(r, b, g) && 0 !== s(r, b)),
          w = () => !x || 0 === s(i, g) || c(i, b, g);
        for (let t = u, n = u; t <= h; ++t)
          (y = e[t % a]),
            y.skip ||
              ((g = l(y[o])),
              g !== b &&
                ((x = c(g, r, i)),
                null === m && v() && (m = 0 === s(g, r) ? t : n),
                null !== m &&
                  w() &&
                  (p.push(tn({ start: m, end: t, loop: f, count: a, style: d })), (m = null)),
                (n = t),
                (b = g)));
        return null !== m && p.push(tn({ start: m, end: h, loop: f, count: a, style: d })), p;
      }
      function nn(t, e) {
        const n = [],
          o = t.segments;
        for (let r = 0; r < o.length; r++) {
          const i = en(o[r], t.points, e);
          i.length && n.push(...i);
        }
        return n;
      }
      function on(t, e) {
        const n = t.points,
          o = t.options.spanGaps,
          r = n.length;
        if (!r) return [];
        const i = !!t._loop,
          { start: a, end: s } = (function (t, e, n, o) {
            let r = 0,
              i = e - 1;
            if (n && !o) for (; r < e && !t[r].skip; ) r++;
            for (; r < e && t[r].skip; ) r++;
            for (r %= e, n && (i += r); i > r && t[i % e].skip; ) i--;
            return (i %= e), { start: r, end: i };
          })(n, r, i, o);
        if (!0 === o) return rn(t, [{ start: a, end: s, loop: i }], n, e);
        return rn(
          t,
          (function (t, e, n, o) {
            const r = t.length,
              i = [];
            let a,
              s = e,
              c = t[e];
            for (a = e + 1; a <= n; ++a) {
              const n = t[a % r];
              n.skip || n.stop
                ? c.skip ||
                  ((o = !1),
                  i.push({ start: e % r, end: (a - 1) % r, loop: o }),
                  (e = s = n.stop ? a : null))
                : ((s = a), c.skip && (e = a)),
                (c = n);
            }
            return null !== s && i.push({ start: e % r, end: s % r, loop: o }), i;
          })(n, a, s < a ? s + r : s, !!t._fullLoop && 0 === a && s === r - 1),
          n,
          e
        );
      }
      function rn(t, e, n, o) {
        return o && o.setContext && n
          ? (function (t, e, n, o) {
              const r = t._chart.getContext(),
                i = an(t.options),
                {
                  _datasetIndex: a,
                  options: { spanGaps: s },
                } = t,
                c = n.length,
                l = [];
              let u = i,
                h = e[0].start,
                f = h;
              function d(t, e, o, r) {
                const i = s ? -1 : 1;
                if (t !== e) {
                  for (t += c; n[t % c].skip; ) t -= i;
                  for (; n[e % c].skip; ) e += i;
                  t % c != e % c &&
                    (l.push({ start: t % c, end: e % c, loop: o, style: r }), (u = r), (h = e % c));
                }
              }
              for (const t of e) {
                h = s ? h : t.start;
                let e,
                  i = n[h % c];
                for (f = h + 1; f <= t.end; f++) {
                  const s = n[f % c];
                  (e = an(
                    o.setContext(
                      ue(r, {
                        type: 'segment',
                        p0: i,
                        p1: s,
                        p0DataIndex: (f - 1) % c,
                        p1DataIndex: f % c,
                        datasetIndex: a,
                      })
                    )
                  )),
                    sn(e, u) && d(h, f - 1, t.loop, u),
                    (i = s),
                    (u = e);
                }
                h < f - 1 && d(h, f - 1, t.loop, u);
              }
              return l;
            })(t, e, n, o)
          : e;
      }
      function an(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function sn(t, e) {
        if (!e) return !1;
        const n = [],
          o = function (t, e) {
            return kt(e) ? (n.includes(e) || n.push(e), n.indexOf(e)) : e;
          };
        return JSON.stringify(t, o) !== JSON.stringify(e, o);
      }
    },
  },
]);
