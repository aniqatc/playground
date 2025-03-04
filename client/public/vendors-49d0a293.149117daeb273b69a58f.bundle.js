'use strict';
(self.webpackChunkplayground = self.webpackChunkplayground || []).push([
  [729],
  {
    679: (t, n, r) => {
      t.exports = r(9893);
    },
    9560: (t) => {
      t.exports = function () {
        var t = Object.create(Math);
        return (
          (t.factory = function (t) {
            if ('number' != typeof t)
              throw new TypeError('built-in math factory only accepts numbers');
            return Number(t);
          }),
          (t.add = function (t, n) {
            return t + n;
          }),
          (t.sub = function (t, n) {
            return t - n;
          }),
          (t.mul = function (t, n) {
            return t * n;
          }),
          (t.div = function (t, n) {
            return t / n;
          }),
          (t.mod = function (t, n) {
            return t % n;
          }),
          (t.factorial = function (t) {
            for (var n = 1, r = 2; r <= t; r += 1) n *= r;
            return n;
          }),
          (t.nthRoot = function (t, n) {
            var r = n < 0;
            if ((r && (n = -n), 0 === n)) throw new Error('Root must be non-zero');
            if (t < 0 && Math.abs(n) % 2 != 1)
              throw new Error('Root must be odd when a is negative.');
            if (0 === t) return 0;
            if (!isFinite(t)) return r ? 0 : t;
            var e = Math.pow(Math.abs(t), 1 / n);
            return (e = t < 0 ? -e : e), r ? 1 / e : e;
          }),
          (t.logicalOR = function (t, n) {
            return t || n;
          }),
          (t.logicalXOR = function (t, n) {
            return t != n;
          }),
          (t.logicalAND = function (t, n) {
            return t && n;
          }),
          (t.bitwiseOR = function (t, n) {
            return t | n;
          }),
          (t.bitwiseXOR = function (t, n) {
            return t ^ n;
          }),
          (t.bitwiseAND = function (t, n) {
            return t & n;
          }),
          (t.lessThan = function (t, n) {
            return t < n;
          }),
          (t.lessEqualThan = function (t, n) {
            return t <= n;
          }),
          (t.greaterThan = function (t, n) {
            return t > n;
          }),
          (t.greaterEqualThan = function (t, n) {
            return t >= n;
          }),
          (t.equal = function (t, n) {
            return t == n;
          }),
          (t.strictlyEqual = function (t, n) {
            return t === n;
          }),
          (t.notEqual = function (t, n) {
            return t != n;
          }),
          (t.strictlyNotEqual = function (t, n) {
            return t !== n;
          }),
          (t.shiftRight = function (t, n) {
            return t >> n;
          }),
          (t.shiftLeft = function (t, n) {
            return t << n;
          }),
          (t.unsignedRightShift = function (t, n) {
            return t >>> n;
          }),
          (t.negative = function (t) {
            return -t;
          }),
          (t.positive = function (t) {
            return t;
          }),
          t
        );
      };
    },
    9893: (t, n, r) => {
      var e = r(3915),
        i = r(9560)();
      function a(t) {
        Object.keys(t).forEach(function (n) {
          var r = t[n];
          t[n] = i.factory(r);
        });
      }
      (t.exports = function (t) {
        return new e().setDefs({ $$processScope: a }).parse(t).compile(i);
      }),
        (t.exports.math = i);
    },
    2902: (t, n, r) => {
      function e(t, n) {
        return null == t || null == n ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      r.d(n, { A: () => e });
    },
    2016: (t, n, r) => {
      r.d(n, { Ay: () => l });
      var e = r(2902),
        i = r(321),
        a = r(3131);
      const o = (0, i.A)(e.A),
        u = o.right,
        l = (o.left, (0, i.A)(a.A).center, u);
    },
    321: (t, n, r) => {
      r.d(n, { A: () => a });
      var e = r(2902);
      function i(t, n) {
        return null == t || null == n ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      }
      function a(t) {
        let n, r, a;
        function u(t, e, i = 0, a = t.length) {
          if (i < a) {
            if (0 !== n(e, e)) return a;
            do {
              const n = (i + a) >>> 1;
              r(t[n], e) < 0 ? (i = n + 1) : (a = n);
            } while (i < a);
          }
          return i;
        }
        return (
          2 !== t.length
            ? ((n = e.A), (r = (n, r) => (0, e.A)(t(n), r)), (a = (n, r) => t(n) - r))
            : ((n = t === e.A || t === i ? t : o), (r = t), (a = t)),
          {
            left: u,
            center: function (t, n, r = 0, e = t.length) {
              const i = u(t, n, r, e - 1);
              return i > r && a(t[i - 1], n) > -a(t[i], n) ? i - 1 : i;
            },
            right: function (t, e, i = 0, a = t.length) {
              if (i < a) {
                if (0 !== n(e, e)) return a;
                do {
                  const n = (i + a) >>> 1;
                  r(t[n], e) <= 0 ? (i = n + 1) : (a = n);
                } while (i < a);
              }
              return i;
            },
          }
        );
      }
      function o() {
        return 0;
      }
    },
    3131: (t, n, r) => {
      function e(t) {
        return null === t ? NaN : +t;
      }
      function* i(t, n) {
        if (void 0 === n) for (let n of t) null != n && (n = +n) >= n && (yield n);
        else {
          let r = -1;
          for (let e of t) null != (e = n(e, ++r, t)) && (e = +e) >= e && (yield e);
        }
      }
      r.d(n, { A: () => e, n: () => i });
    },
    7562: (t, n, r) => {
      function e(t, n) {
        let r;
        if (void 0 === n)
          for (const n of t) null != n && (r < n || (void 0 === r && n >= n)) && (r = n);
        else {
          let e = -1;
          for (let i of t)
            null != (i = n(i, ++e, t)) && (r < i || (void 0 === r && i >= i)) && (r = i);
        }
        return r;
      }
      function i(t, n) {
        let r;
        if (void 0 === n)
          for (const n of t) null != n && (r > n || (void 0 === r && n >= n)) && (r = n);
        else {
          let e = -1;
          for (let i of t)
            null != (i = n(i, ++e, t)) && (r > i || (void 0 === r && i >= i)) && (r = i);
        }
        return r;
      }
      r.d(n, { Ay: () => h, Z4: () => f });
      var a = r(2902);
      function o(t = a.A) {
        if (t === a.A) return u;
        if ('function' != typeof t) throw new TypeError('compare is not a function');
        return (n, r) => {
          const e = t(n, r);
          return e || 0 === e ? e : (0 === t(r, r)) - (0 === t(n, n));
        };
      }
      function u(t, n) {
        return (null == t || !(t >= t)) - (null == n || !(n >= n)) || (t < n ? -1 : t > n ? 1 : 0);
      }
      function l(t, n, r = 0, e = 1 / 0, i) {
        if (
          ((n = Math.floor(n)),
          (r = Math.floor(Math.max(0, r))),
          (e = Math.floor(Math.min(t.length - 1, e))),
          !(r <= n && n <= e))
        )
          return t;
        for (i = void 0 === i ? u : o(i); e > r; ) {
          if (e - r > 600) {
            const a = e - r + 1,
              o = n - r + 1,
              u = Math.log(a),
              s = 0.5 * Math.exp((2 * u) / 3),
              c = 0.5 * Math.sqrt((u * s * (a - s)) / a) * (o - a / 2 < 0 ? -1 : 1);
            l(
              t,
              n,
              Math.max(r, Math.floor(n - (o * s) / a + c)),
              Math.min(e, Math.floor(n + ((a - o) * s) / a + c)),
              i
            );
          }
          const a = t[n];
          let o = r,
            u = e;
          for (s(t, r, n), i(t[e], a) > 0 && s(t, r, e); o < u; ) {
            for (s(t, o, u), ++o, --u; i(t[o], a) < 0; ) ++o;
            for (; i(t[u], a) > 0; ) --u;
          }
          0 === i(t[r], a) ? s(t, r, u) : (++u, s(t, u, e)),
            u <= n && (r = u + 1),
            n <= u && (e = u - 1);
        }
        return t;
      }
      function s(t, n, r) {
        const e = t[n];
        (t[n] = t[r]), (t[r] = e);
      }
      var c = r(3131);
      function h(t, n, r) {
        if ((a = (t = Float64Array.from((0, c.n)(t, r))).length) && !isNaN((n = +n))) {
          if (n <= 0 || a < 2) return i(t);
          if (n >= 1) return e(t);
          var a,
            o = (a - 1) * n,
            u = Math.floor(o),
            s = e(l(t, u).subarray(0, u + 1));
          return s + (i(t.subarray(u + 1)) - s) * (o - u);
        }
      }
      function f(t, n, r = c.A) {
        if ((e = t.length) && !isNaN((n = +n))) {
          if (n <= 0 || e < 2) return +r(t[0], 0, t);
          if (n >= 1) return +r(t[e - 1], e - 1, t);
          var e,
            i = (e - 1) * n,
            a = Math.floor(i),
            o = +r(t[a], a, t);
          return o + (+r(t[a + 1], a + 1, t) - o) * (i - a);
        }
      }
    },
    6561: (t, n, r) => {
      function e(t, n, r) {
        (t = +t),
          (n = +n),
          (r = (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +r);
        for (var e = -1, i = 0 | Math.max(0, Math.ceil((n - t) / r)), a = new Array(i); ++e < i; )
          a[e] = t + e * r;
        return a;
      }
      r.d(n, { A: () => e });
    },
    6946: (t, n, r) => {
      r.d(n, { Ay: () => u, lq: () => l, sG: () => s });
      const e = Math.sqrt(50),
        i = Math.sqrt(10),
        a = Math.sqrt(2);
      function o(t, n, r) {
        const u = (n - t) / Math.max(0, r),
          l = Math.floor(Math.log10(u)),
          s = u / Math.pow(10, l),
          c = s >= e ? 10 : s >= i ? 5 : s >= a ? 2 : 1;
        let h, f, p;
        return (
          l < 0
            ? ((p = Math.pow(10, -l) / c),
              (h = Math.round(t * p)),
              (f = Math.round(n * p)),
              h / p < t && ++h,
              f / p > n && --f,
              (p = -p))
            : ((p = Math.pow(10, l) * c),
              (h = Math.round(t / p)),
              (f = Math.round(n / p)),
              h * p < t && ++h,
              f * p > n && --f),
          f < h && 0.5 <= r && r < 2 ? o(t, n, 2 * r) : [h, f, p]
        );
      }
      function u(t, n, r) {
        if (!((r = +r) > 0)) return [];
        if ((t = +t) === (n = +n)) return [t];
        const e = n < t,
          [i, a, u] = e ? o(n, t, r) : o(t, n, r);
        if (!(a >= i)) return [];
        const l = a - i + 1,
          s = new Array(l);
        if (e)
          if (u < 0) for (let t = 0; t < l; ++t) s[t] = (a - t) / -u;
          else for (let t = 0; t < l; ++t) s[t] = (a - t) * u;
        else if (u < 0) for (let t = 0; t < l; ++t) s[t] = (i + t) / -u;
        else for (let t = 0; t < l; ++t) s[t] = (i + t) * u;
        return s;
      }
      function l(t, n, r) {
        return o((t = +t), (n = +n), (r = +r))[2];
      }
      function s(t, n, r) {
        r = +r;
        const e = (n = +n) < (t = +t),
          i = e ? l(n, t, r) : l(t, n, r);
        return (e ? -1 : 1) * (i < 0 ? 1 / -i : i);
      }
    },
    2782: (t, n, r) => {
      function e(t) {
        return t;
      }
      r.r(n),
        r.d(n, { axisBottom: () => m, axisLeft: () => v, axisRight: () => y, axisTop: () => d });
      var i = 1,
        a = 2,
        o = 3,
        u = 4,
        l = 1e-6;
      function s(t) {
        return 'translate(' + t + ',0)';
      }
      function c(t) {
        return 'translate(0,' + t + ')';
      }
      function h(t) {
        return (n) => +t(n);
      }
      function f(t, n) {
        return (
          (n = Math.max(0, t.bandwidth() - 2 * n) / 2),
          t.round() && (n = Math.round(n)),
          (r) => +t(r) + n
        );
      }
      function p() {
        return !this.__axis;
      }
      function g(t, n) {
        var r = [],
          g = null,
          d = null,
          y = 6,
          m = 6,
          v = 3,
          w = 'undefined' != typeof window && window.devicePixelRatio > 1 ? 0 : 0.5,
          b = t === i || t === u ? -1 : 1,
          A = t === u || t === a ? 'x' : 'y',
          M = t === i || t === o ? s : c;
        function x(s) {
          var c = null == g ? (n.ticks ? n.ticks.apply(n, r) : n.domain()) : g,
            x = null == d ? (n.tickFormat ? n.tickFormat.apply(n, r) : e) : d,
            k = Math.max(y, 0) + v,
            N = n.range(),
            $ = +N[0] + w,
            q = +N[N.length - 1] + w,
            E = (n.bandwidth ? f : h)(n.copy(), w),
            S = s.selection ? s.selection() : s,
            R = S.selectAll('.domain').data([null]),
            X = S.selectAll('.tick').data(c, n).order(),
            H = X.exit(),
            O = X.enter().append('g').attr('class', 'tick'),
            _ = X.select('line'),
            I = X.select('text');
          (R = R.merge(
            R.enter().insert('path', '.tick').attr('class', 'domain').attr('stroke', 'currentColor')
          )),
            (X = X.merge(O)),
            (_ = _.merge(
              O.append('line')
                .attr('stroke', 'currentColor')
                .attr(A + '2', b * y)
            )),
            (I = I.merge(
              O.append('text')
                .attr('fill', 'currentColor')
                .attr(A, b * k)
                .attr('dy', t === i ? '0em' : t === o ? '0.71em' : '0.32em')
            )),
            s !== S &&
              ((R = R.transition(s)),
              (X = X.transition(s)),
              (_ = _.transition(s)),
              (I = I.transition(s)),
              (H = H.transition(s)
                .attr('opacity', l)
                .attr('transform', function (t) {
                  return isFinite((t = E(t))) ? M(t + w) : this.getAttribute('transform');
                })),
              O.attr('opacity', l).attr('transform', function (t) {
                var n = this.parentNode.__axis;
                return M((n && isFinite((n = n(t))) ? n : E(t)) + w);
              })),
            H.remove(),
            R.attr(
              'd',
              t === u || t === a
                ? m
                  ? 'M' + b * m + ',' + $ + 'H' + w + 'V' + q + 'H' + b * m
                  : 'M' + w + ',' + $ + 'V' + q
                : m
                  ? 'M' + $ + ',' + b * m + 'V' + w + 'H' + q + 'V' + b * m
                  : 'M' + $ + ',' + w + 'H' + q
            ),
            X.attr('opacity', 1).attr('transform', function (t) {
              return M(E(t) + w);
            }),
            _.attr(A + '2', b * y),
            I.attr(A, b * k).text(x),
            S.filter(p)
              .attr('fill', 'none')
              .attr('font-size', 10)
              .attr('font-family', 'sans-serif')
              .attr('text-anchor', t === a ? 'start' : t === u ? 'end' : 'middle'),
            S.each(function () {
              this.__axis = E;
            });
        }
        return (
          (x.scale = function (t) {
            return arguments.length ? ((n = t), x) : n;
          }),
          (x.ticks = function () {
            return (r = Array.from(arguments)), x;
          }),
          (x.tickArguments = function (t) {
            return arguments.length ? ((r = null == t ? [] : Array.from(t)), x) : r.slice();
          }),
          (x.tickValues = function (t) {
            return arguments.length ? ((g = null == t ? null : Array.from(t)), x) : g && g.slice();
          }),
          (x.tickFormat = function (t) {
            return arguments.length ? ((d = t), x) : d;
          }),
          (x.tickSize = function (t) {
            return arguments.length ? ((y = m = +t), x) : y;
          }),
          (x.tickSizeInner = function (t) {
            return arguments.length ? ((y = +t), x) : y;
          }),
          (x.tickSizeOuter = function (t) {
            return arguments.length ? ((m = +t), x) : m;
          }),
          (x.tickPadding = function (t) {
            return arguments.length ? ((v = +t), x) : v;
          }),
          (x.offset = function (t) {
            return arguments.length ? ((w = +t), x) : w;
          }),
          x
        );
      }
      function d(t) {
        return g(i, t);
      }
      function y(t) {
        return g(a, t);
      }
      function m(t) {
        return g(o, t);
      }
      function v(t) {
        return g(u, t);
      }
    },
    6957: (t, n, r) => {
      r.d(n, {
        Ay: () => b,
        Gw: () => N,
        KI: () => O,
        Q1: () => i,
        Qh: () => k,
        Uw: () => o,
        b: () => x,
        ef: () => a,
      });
      var e = r(871);
      function i() {}
      var a = 0.7,
        o = 1 / a,
        u = '\\s*([+-]?\\d+)\\s*',
        l = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        s = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        c = /^#([0-9a-f]{3,8})$/,
        h = new RegExp(`^rgb\\(${u},${u},${u}\\)$`),
        f = new RegExp(`^rgb\\(${s},${s},${s}\\)$`),
        p = new RegExp(`^rgba\\(${u},${u},${u},${l}\\)$`),
        g = new RegExp(`^rgba\\(${s},${s},${s},${l}\\)$`),
        d = new RegExp(`^hsl\\(${l},${s},${s}\\)$`),
        y = new RegExp(`^hsla\\(${l},${s},${s},${l}\\)$`),
        m = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function v() {
        return this.rgb().formatHex();
      }
      function w() {
        return this.rgb().formatRgb();
      }
      function b(t) {
        var n, r;
        return (
          (t = (t + '').trim().toLowerCase()),
          (n = c.exec(t))
            ? ((r = n[1].length),
              (n = parseInt(n[1], 16)),
              6 === r
                ? A(n)
                : 3 === r
                  ? new N(
                      ((n >> 8) & 15) | ((n >> 4) & 240),
                      ((n >> 4) & 15) | (240 & n),
                      ((15 & n) << 4) | (15 & n),
                      1
                    )
                  : 8 === r
                    ? M((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (255 & n) / 255)
                    : 4 === r
                      ? M(
                          ((n >> 12) & 15) | ((n >> 8) & 240),
                          ((n >> 8) & 15) | ((n >> 4) & 240),
                          ((n >> 4) & 15) | (240 & n),
                          (((15 & n) << 4) | (15 & n)) / 255
                        )
                      : null)
            : (n = h.exec(t))
              ? new N(n[1], n[2], n[3], 1)
              : (n = f.exec(t))
                ? new N((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
                : (n = p.exec(t))
                  ? M(n[1], n[2], n[3], n[4])
                  : (n = g.exec(t))
                    ? M((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
                    : (n = d.exec(t))
                      ? X(n[1], n[2] / 100, n[3] / 100, 1)
                      : (n = y.exec(t))
                        ? X(n[1], n[2] / 100, n[3] / 100, n[4])
                        : m.hasOwnProperty(t)
                          ? A(m[t])
                          : 'transparent' === t
                            ? new N(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function A(t) {
        return new N((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function M(t, n, r, e) {
        return e <= 0 && (t = n = r = NaN), new N(t, n, r, e);
      }
      function x(t) {
        return (
          t instanceof i || (t = b(t)), t ? new N((t = t.rgb()).r, t.g, t.b, t.opacity) : new N()
        );
      }
      function k(t, n, r, e) {
        return 1 === arguments.length ? x(t) : new N(t, n, r, null == e ? 1 : e);
      }
      function N(t, n, r, e) {
        (this.r = +t), (this.g = +n), (this.b = +r), (this.opacity = +e);
      }
      function $() {
        return `#${R(this.r)}${R(this.g)}${R(this.b)}`;
      }
      function q() {
        const t = E(this.opacity);
        return `${1 === t ? 'rgb(' : 'rgba('}${S(this.r)}, ${S(this.g)}, ${S(this.b)}${1 === t ? ')' : `, ${t})`}`;
      }
      function E(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function S(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function R(t) {
        return ((t = S(t)) < 16 ? '0' : '') + t.toString(16);
      }
      function X(t, n, r, e) {
        return (
          e <= 0 ? (t = n = r = NaN) : r <= 0 || r >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
          new _(t, n, r, e)
        );
      }
      function H(t) {
        if (t instanceof _) return new _(t.h, t.s, t.l, t.opacity);
        if ((t instanceof i || (t = b(t)), !t)) return new _();
        if (t instanceof _) return t;
        var n = (t = t.rgb()).r / 255,
          r = t.g / 255,
          e = t.b / 255,
          a = Math.min(n, r, e),
          o = Math.max(n, r, e),
          u = NaN,
          l = o - a,
          s = (o + a) / 2;
        return (
          l
            ? ((u =
                n === o ? (r - e) / l + 6 * (r < e) : r === o ? (e - n) / l + 2 : (n - r) / l + 4),
              (l /= s < 0.5 ? o + a : 2 - o - a),
              (u *= 60))
            : (l = s > 0 && s < 1 ? 0 : u),
          new _(u, l, s, t.opacity)
        );
      }
      function O(t, n, r, e) {
        return 1 === arguments.length ? H(t) : new _(t, n, r, null == e ? 1 : e);
      }
      function _(t, n, r, e) {
        (this.h = +t), (this.s = +n), (this.l = +r), (this.opacity = +e);
      }
      function I(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function P(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function z(t, n, r) {
        return (
          255 *
          (t < 60
            ? n + ((r - n) * t) / 60
            : t < 180
              ? r
              : t < 240
                ? n + ((r - n) * (240 - t)) / 60
                : n)
        );
      }
      (0, e.A)(i, b, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: v,
        formatHex: v,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return H(this).formatHsl();
        },
        formatRgb: w,
        toString: w,
      }),
        (0, e.A)(
          N,
          k,
          (0, e.X)(i, {
            brighter(t) {
              return (
                (t = null == t ? o : Math.pow(o, t)),
                new N(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? a : Math.pow(a, t)),
                new N(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new N(S(this.r), S(this.g), S(this.b), E(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: $,
            formatHex: $,
            formatHex8: function () {
              return `#${R(this.r)}${R(this.g)}${R(this.b)}${R(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
            },
            formatRgb: q,
            toString: q,
          })
        ),
        (0, e.A)(
          _,
          O,
          (0, e.X)(i, {
            brighter(t) {
              return (
                (t = null == t ? o : Math.pow(o, t)),
                new _(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? a : Math.pow(a, t)),
                new _(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                e = r + (r < 0.5 ? r : 1 - r) * n,
                i = 2 * r - e;
              return new N(
                z(t >= 240 ? t - 240 : t + 120, i, e),
                z(t, i, e),
                z(t < 120 ? t + 240 : t - 120, i, e),
                this.opacity
              );
            },
            clamp() {
              return new _(I(this.h), P(this.s), P(this.l), E(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              const t = E(this.opacity);
              return `${1 === t ? 'hsl(' : 'hsla('}${I(this.h)}, ${100 * P(this.s)}%, ${100 * P(this.l)}%${1 === t ? ')' : `, ${t})`}`;
            },
          })
        );
    },
    5653: (t, n, r) => {
      r.d(n, { A: () => g });
      var e = r(871),
        i = r(6957),
        a = r(9710),
        o = -0.14861,
        u = 1.78277,
        l = -0.29227,
        s = -0.90649,
        c = 1.97294,
        h = c * s,
        f = c * u,
        p = u * l - s * o;
      function g(t, n, r, e) {
        return 1 === arguments.length
          ? (function (t) {
              if (t instanceof d) return new d(t.h, t.s, t.l, t.opacity);
              t instanceof i.Gw || (t = (0, i.b)(t));
              var n = t.r / 255,
                r = t.g / 255,
                e = t.b / 255,
                o = (p * e + h * n - f * r) / (p + h - f),
                u = e - o,
                g = (c * (r - o) - l * u) / s,
                y = Math.sqrt(g * g + u * u) / (c * o * (1 - o)),
                m = y ? Math.atan2(g, u) * a.u - 120 : NaN;
              return new d(m < 0 ? m + 360 : m, y, o, t.opacity);
            })(t)
          : new d(t, n, r, null == e ? 1 : e);
      }
      function d(t, n, r, e) {
        (this.h = +t), (this.s = +n), (this.l = +r), (this.opacity = +e);
      }
      (0, e.A)(
        d,
        g,
        (0, e.X)(i.Q1, {
          brighter(t) {
            return (
              (t = null == t ? i.Uw : Math.pow(i.Uw, t)),
              new d(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker(t) {
            return (
              (t = null == t ? i.ef : Math.pow(i.ef, t)),
              new d(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb() {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * a.F,
              n = +this.l,
              r = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              e = Math.cos(t),
              h = Math.sin(t);
            return new i.Gw(
              255 * (n + r * (o * e + u * h)),
              255 * (n + r * (l * e + s * h)),
              255 * (n + r * (c * e)),
              this.opacity
            );
          },
        })
      );
    },
    871: (t, n, r) => {
      function e(t, n, r) {
        (t.prototype = n.prototype = r), (r.constructor = t);
      }
      function i(t, n) {
        var r = Object.create(t.prototype);
        for (var e in n) r[e] = n[e];
        return r;
      }
      r.d(n, { A: () => e, X: () => i });
    },
    2090: (t, n, r) => {
      r.r(n),
        r.d(n, {
          color: () => e.Ay,
          cubehelix: () => a.A,
          gray: () => i.wm,
          hcl: () => i.aq,
          hsl: () => e.KI,
          lab: () => i.Ay,
          lch: () => i.s1,
          rgb: () => e.Qh,
        });
      var e = r(6957),
        i = r(9853),
        a = r(5653);
    },
    9853: (t, n, r) => {
      r.d(n, { Ay: () => d, aq: () => x, s1: () => M, wm: () => g });
      var e = r(871),
        i = r(6957),
        a = r(9710);
      const o = 0.96422,
        u = 1,
        l = 0.82521,
        s = 4 / 29,
        c = 6 / 29,
        h = 3 * c * c,
        f = c * c * c;
      function p(t) {
        if (t instanceof y) return new y(t.l, t.a, t.b, t.opacity);
        if (t instanceof k) return N(t);
        t instanceof i.Gw || (t = (0, i.b)(t));
        var n,
          r,
          e = b(t.r),
          a = b(t.g),
          s = b(t.b),
          c = m((0.2225045 * e + 0.7168786 * a + 0.0606169 * s) / u);
        return (
          e === a && a === s
            ? (n = r = c)
            : ((n = m((0.4360747 * e + 0.3850649 * a + 0.1430804 * s) / o)),
              (r = m((0.0139322 * e + 0.0971045 * a + 0.7141733 * s) / l))),
          new y(116 * c - 16, 500 * (n - c), 200 * (c - r), t.opacity)
        );
      }
      function g(t, n) {
        return new y(t, 0, 0, null == n ? 1 : n);
      }
      function d(t, n, r, e) {
        return 1 === arguments.length ? p(t) : new y(t, n, r, null == e ? 1 : e);
      }
      function y(t, n, r, e) {
        (this.l = +t), (this.a = +n), (this.b = +r), (this.opacity = +e);
      }
      function m(t) {
        return t > f ? Math.pow(t, 1 / 3) : t / h + s;
      }
      function v(t) {
        return t > c ? t * t * t : h * (t - s);
      }
      function w(t) {
        return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055);
      }
      function b(t) {
        return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      }
      function A(t) {
        if (t instanceof k) return new k(t.h, t.c, t.l, t.opacity);
        if ((t instanceof y || (t = p(t)), 0 === t.a && 0 === t.b))
          return new k(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * a.u;
        return new k(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
      }
      function M(t, n, r, e) {
        return 1 === arguments.length ? A(t) : new k(r, n, t, null == e ? 1 : e);
      }
      function x(t, n, r, e) {
        return 1 === arguments.length ? A(t) : new k(t, n, r, null == e ? 1 : e);
      }
      function k(t, n, r, e) {
        (this.h = +t), (this.c = +n), (this.l = +r), (this.opacity = +e);
      }
      function N(t) {
        if (isNaN(t.h)) return new y(t.l, 0, 0, t.opacity);
        var n = t.h * a.F;
        return new y(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
      }
      (0, e.A)(
        y,
        d,
        (0, e.X)(i.Q1, {
          brighter(t) {
            return new y(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
          },
          darker(t) {
            return new y(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
          },
          rgb() {
            var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              r = isNaN(this.b) ? t : t - this.b / 200;
            return (
              (n = o * v(n)),
              (t = u * v(t)),
              (r = l * v(r)),
              new i.Gw(
                w(3.1338561 * n - 1.6168667 * t - 0.4906146 * r),
                w(-0.9787684 * n + 1.9161415 * t + 0.033454 * r),
                w(0.0719453 * n - 0.2289914 * t + 1.4052427 * r),
                this.opacity
              )
            );
          },
        })
      ),
        (0, e.A)(
          k,
          x,
          (0, e.X)(i.Q1, {
            brighter(t) {
              return new k(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
            },
            darker(t) {
              return new k(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
            },
            rgb() {
              return N(this).rgb();
            },
          })
        );
    },
    9710: (t, n, r) => {
      r.d(n, { F: () => e, u: () => i });
      const e = Math.PI / 180,
        i = 180 / Math.PI;
    },
    1089: (t, n, r) => {
      r.d(n, { A: () => l });
      var e = { value: () => {} };
      function i() {
        for (var t, n = 0, r = arguments.length, e = {}; n < r; ++n) {
          if (!(t = arguments[n] + '') || t in e || /[\s.]/.test(t))
            throw new Error('illegal type: ' + t);
          e[t] = [];
        }
        return new a(e);
      }
      function a(t) {
        this._ = t;
      }
      function o(t, n) {
        for (var r, e = 0, i = t.length; e < i; ++e) if ((r = t[e]).name === n) return r.value;
      }
      function u(t, n, r) {
        for (var i = 0, a = t.length; i < a; ++i)
          if (t[i].name === n) {
            (t[i] = e), (t = t.slice(0, i).concat(t.slice(i + 1)));
            break;
          }
        return null != r && t.push({ name: n, value: r }), t;
      }
      a.prototype = i.prototype = {
        constructor: a,
        on: function (t, n) {
          var r,
            e,
            i = this._,
            a =
              ((e = i),
              (t + '')
                .trim()
                .split(/^|\s+/)
                .map(function (t) {
                  var n = '',
                    r = t.indexOf('.');
                  if (
                    (r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
                    t && !e.hasOwnProperty(t))
                  )
                    throw new Error('unknown type: ' + t);
                  return { type: t, name: n };
                })),
            l = -1,
            s = a.length;
          if (!(arguments.length < 2)) {
            if (null != n && 'function' != typeof n) throw new Error('invalid callback: ' + n);
            for (; ++l < s; )
              if ((r = (t = a[l]).type)) i[r] = u(i[r], t.name, n);
              else if (null == n) for (r in i) i[r] = u(i[r], t.name, null);
            return this;
          }
          for (; ++l < s; ) if ((r = (t = a[l]).type) && (r = o(i[r], t.name))) return r;
        },
        copy: function () {
          var t = {},
            n = this._;
          for (var r in n) t[r] = n[r].slice();
          return new a(t);
        },
        call: function (t, n) {
          if ((r = arguments.length - 2) > 0)
            for (var r, e, i = new Array(r), a = 0; a < r; ++a) i[a] = arguments[a + 2];
          if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
          for (a = 0, r = (e = this._[t]).length; a < r; ++a) e[a].value.apply(n, i);
        },
        apply: function (t, n, r) {
          if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
          for (var e = this._[t], i = 0, a = e.length; i < a; ++i) e[i].value.apply(n, r);
        },
      };
      const l = i;
    },
    5085: (t, n, r) => {
      r.d(n, { A: () => o, y: () => u });
      var e = r(183);
      const i = { capture: !0, passive: !1 };
      function a(t) {
        t.preventDefault(), t.stopImmediatePropagation();
      }
      function o(t) {
        var n = t.document.documentElement,
          r = (0, e.A)(t).on('dragstart.drag', a, i);
        'onselectstart' in n
          ? r.on('selectstart.drag', a, i)
          : ((n.__noselect = n.style.MozUserSelect), (n.style.MozUserSelect = 'none'));
      }
      function u(t, n) {
        var r = t.document.documentElement,
          o = (0, e.A)(t).on('dragstart.drag', null);
        n &&
          (o.on('click.drag', a, i),
          setTimeout(function () {
            o.on('click.drag', null);
          }, 0)),
          'onselectstart' in r
            ? o.on('selectstart.drag', null)
            : ((r.style.MozUserSelect = r.__noselect), delete r.__noselect);
      }
    },
    2101: (t, n, r) => {
      function e(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
      r.d(n, { wq: () => e });
    },
    8701: (t, n, r) => {
      r.d(n, { Ay: () => u, GP: () => i, s: () => a });
      var e,
        i,
        a,
        o = r(6390);
      function u(t) {
        return (e = (0, o.A)(t)), (i = e.format), (a = e.formatPrefix), e;
      }
      u({ thousands: ',', grouping: [3], currency: ['$', ''] });
    },
    7235: (t, n, r) => {
      r.d(n, { A: () => i });
      var e = r(5204);
      function i(t) {
        return (t = (0, e.f)(Math.abs(t))) ? t[1] : NaN;
      }
    },
    5204: (t, n, r) => {
      function e(t) {
        return Math.abs((t = Math.round(t))) >= 1e21
          ? t.toLocaleString('en').replace(/,/g, '')
          : t.toString(10);
      }
      function i(t, n) {
        if ((r = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf('e')) < 0)
          return null;
        var r,
          e = t.slice(0, r);
        return [e.length > 1 ? e[0] + e.slice(2) : e, +t.slice(r + 1)];
      }
      r.d(n, { A: () => e, f: () => i });
    },
    1631: (t, n, r) => {
      r.d(n, { A: () => i, S: () => a });
      var e = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function i(t) {
        if (!(n = e.exec(t))) throw new Error('invalid format: ' + t);
        var n;
        return new a({
          fill: n[1],
          align: n[2],
          sign: n[3],
          symbol: n[4],
          zero: n[5],
          width: n[6],
          comma: n[7],
          precision: n[8] && n[8].slice(1),
          trim: n[9],
          type: n[10],
        });
      }
      function a(t) {
        (this.fill = void 0 === t.fill ? ' ' : t.fill + ''),
          (this.align = void 0 === t.align ? '>' : t.align + ''),
          (this.sign = void 0 === t.sign ? '-' : t.sign + ''),
          (this.symbol = void 0 === t.symbol ? '' : t.symbol + ''),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? '' : t.type + '');
      }
      (i.prototype = a.prototype),
        (a.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? '0' : '') +
            (void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
            (this.comma ? ',' : '') +
            (void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) +
            (this.trim ? '~' : '') +
            this.type
          );
        });
    },
    4710: (t, n, r) => {
      r.r(n),
        r.d(n, {
          FormatSpecifier: () => a.S,
          format: () => e.GP,
          formatDefaultLocale: () => e.Ay,
          formatLocale: () => i.A,
          formatPrefix: () => e.s,
          formatSpecifier: () => a.A,
          precisionFixed: () => o.A,
          precisionPrefix: () => u.A,
          precisionRound: () => l.A,
        });
      var e = r(8701),
        i = r(6390),
        a = r(1631),
        o = r(1734),
        u = r(7590),
        l = r(9460);
    },
    6390: (t, n, r) => {
      r.d(n, { A: () => f });
      var e = r(7235);
      var i = r(1631);
      var a,
        o = r(5204);
      function u(t, n) {
        var r = (0, o.f)(t, n);
        if (!r) return t + '';
        var e = r[0],
          i = r[1];
        return i < 0
          ? '0.' + new Array(-i).join('0') + e
          : e.length > i + 1
            ? e.slice(0, i + 1) + '.' + e.slice(i + 1)
            : e + new Array(i - e.length + 2).join('0');
      }
      const l = {
        '%': (t, n) => (100 * t).toFixed(n),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + '',
        d: o.A,
        e: (t, n) => t.toExponential(n),
        f: (t, n) => t.toFixed(n),
        g: (t, n) => t.toPrecision(n),
        o: (t) => Math.round(t).toString(8),
        p: (t, n) => u(100 * t, n),
        r: u,
        s: function (t, n) {
          var r = (0, o.f)(t, n);
          if (!r) return t + '';
          var e = r[0],
            i = r[1],
            u = i - (a = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            l = e.length;
          return u === l
            ? e
            : u > l
              ? e + new Array(u - l + 1).join('0')
              : u > 0
                ? e.slice(0, u) + '.' + e.slice(u)
                : '0.' + new Array(1 - u).join('0') + (0, o.f)(t, Math.max(0, n + u - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function s(t) {
        return t;
      }
      var c = Array.prototype.map,
        h = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
      function f(t) {
        var n,
          r,
          o =
            void 0 === t.grouping || void 0 === t.thousands
              ? s
              : ((n = c.call(t.grouping, Number)),
                (r = t.thousands + ''),
                function (t, e) {
                  for (
                    var i = t.length, a = [], o = 0, u = n[0], l = 0;
                    i > 0 &&
                    u > 0 &&
                    (l + u + 1 > e && (u = Math.max(1, e - l)),
                    a.push(t.substring((i -= u), i + u)),
                    !((l += u + 1) > e));

                  )
                    u = n[(o = (o + 1) % n.length)];
                  return a.reverse().join(r);
                }),
          u = void 0 === t.currency ? '' : t.currency[0] + '',
          f = void 0 === t.currency ? '' : t.currency[1] + '',
          p = void 0 === t.decimal ? '.' : t.decimal + '',
          g =
            void 0 === t.numerals
              ? s
              : (function (t) {
                  return function (n) {
                    return n.replace(/[0-9]/g, function (n) {
                      return t[+n];
                    });
                  };
                })(c.call(t.numerals, String)),
          d = void 0 === t.percent ? '%' : t.percent + '',
          y = void 0 === t.minus ? '−' : t.minus + '',
          m = void 0 === t.nan ? 'NaN' : t.nan + '';
        function v(t) {
          var n = (t = (0, i.A)(t)).fill,
            r = t.align,
            e = t.sign,
            s = t.symbol,
            c = t.zero,
            v = t.width,
            w = t.comma,
            b = t.precision,
            A = t.trim,
            M = t.type;
          'n' === M
            ? ((w = !0), (M = 'g'))
            : l[M] || (void 0 === b && (b = 12), (A = !0), (M = 'g')),
            (c || ('0' === n && '=' === r)) && ((c = !0), (n = '0'), (r = '='));
          var x = '$' === s ? u : '#' === s && /[boxX]/.test(M) ? '0' + M.toLowerCase() : '',
            k = '$' === s ? f : /[%p]/.test(M) ? d : '',
            N = l[M],
            $ = /[defgprs%]/.test(M);
          function q(t) {
            var i,
              u,
              l,
              s = x,
              f = k;
            if ('c' === M) (f = N(t) + f), (t = '');
            else {
              var d = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? m : N(Math.abs(t), b)),
                A &&
                  (t = (function (t) {
                    t: for (var n, r = t.length, e = 1, i = -1; e < r; ++e)
                      switch (t[e]) {
                        case '.':
                          i = n = e;
                          break;
                        case '0':
                          0 === i && (i = e), (n = e);
                          break;
                        default:
                          if (!+t[e]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                  })(t)),
                d && 0 == +t && '+' !== e && (d = !1),
                (s = (d ? ('(' === e ? e : y) : '-' === e || '(' === e ? '' : e) + s),
                (f = ('s' === M ? h[8 + a / 3] : '') + f + (d && '(' === e ? ')' : '')),
                $)
              )
                for (i = -1, u = t.length; ++i < u; )
                  if (48 > (l = t.charCodeAt(i)) || l > 57) {
                    (f = (46 === l ? p + t.slice(i + 1) : t.slice(i)) + f), (t = t.slice(0, i));
                    break;
                  }
            }
            w && !c && (t = o(t, 1 / 0));
            var q = s.length + t.length + f.length,
              E = q < v ? new Array(v - q + 1).join(n) : '';
            switch ((w && c && ((t = o(E + t, E.length ? v - f.length : 1 / 0)), (E = '')), r)) {
              case '<':
                t = s + t + f + E;
                break;
              case '=':
                t = s + E + t + f;
                break;
              case '^':
                t = E.slice(0, (q = E.length >> 1)) + s + t + f + E.slice(q);
                break;
              default:
                t = E + s + t + f;
            }
            return g(t);
          }
          return (
            (b =
              void 0 === b
                ? 6
                : /[gprs]/.test(M)
                  ? Math.max(1, Math.min(21, b))
                  : Math.max(0, Math.min(20, b))),
            (q.toString = function () {
              return t + '';
            }),
            q
          );
        }
        return {
          format: v,
          formatPrefix: function (t, n) {
            var r = v((((t = (0, i.A)(t)).type = 'f'), t)),
              a = 3 * Math.max(-8, Math.min(8, Math.floor((0, e.A)(n) / 3))),
              o = Math.pow(10, -a),
              u = h[8 + a / 3];
            return function (t) {
              return r(o * t) + u;
            };
          },
        };
      }
    },
    1734: (t, n, r) => {
      r.d(n, { A: () => i });
      var e = r(7235);
      function i(t) {
        return Math.max(0, -(0, e.A)(Math.abs(t)));
      }
    },
    7590: (t, n, r) => {
      r.d(n, { A: () => i });
      var e = r(7235);
      function i(t, n) {
        return Math.max(
          0,
          3 * Math.max(-8, Math.min(8, Math.floor((0, e.A)(n) / 3))) - (0, e.A)(Math.abs(t))
        );
      }
    },
    9460: (t, n, r) => {
      r.d(n, { A: () => i });
      var e = r(7235);
      function i(t, n) {
        return (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, (0, e.A)(n) - (0, e.A)(t)) + 1;
      }
    },
    8079: (t, n, r) => {
      r.d(n, { $: () => o, A: () => a });
      var e = r(8503),
        i = r(128);
      function a(t, n) {
        return ((0, i.p)(n) ? i.A : o)(t, n);
      }
      function o(t, n) {
        var r,
          i = n ? n.length : 0,
          a = t ? Math.min(i, t.length) : 0,
          o = new Array(a),
          u = new Array(i);
        for (r = 0; r < a; ++r) o[r] = (0, e.A)(t[r], n[r]);
        for (; r < i; ++r) u[r] = n[r];
        return function (t) {
          for (r = 0; r < a; ++r) u[r] = o[r](t);
          return u;
        };
      }
    },
    6160: (t, n, r) => {
      function e(t, n, r, e, i) {
        var a = t * t,
          o = a * t;
        return (
          ((1 - 3 * t + 3 * a - o) * n +
            (4 - 6 * a + 3 * o) * r +
            (1 + 3 * t + 3 * a - 3 * o) * e +
            o * i) /
          6
        );
      }
      function i(t) {
        var n = t.length - 1;
        return function (r) {
          var i = r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), n - 1) : Math.floor(r * n),
            a = t[i],
            o = t[i + 1],
            u = i > 0 ? t[i - 1] : 2 * a - o,
            l = i < n - 1 ? t[i + 2] : 2 * o - a;
          return e((r - i / n) * n, u, a, o, l);
        };
      }
      r.d(n, { A: () => i, H: () => e });
    },
    9804: (t, n, r) => {
      r.d(n, { A: () => i });
      var e = r(6160);
      function i(t) {
        var n = t.length;
        return function (r) {
          var i = Math.floor(((r %= 1) < 0 ? ++r : r) * n),
            a = t[(i + n - 1) % n],
            o = t[i % n],
            u = t[(i + 1) % n],
            l = t[(i + 2) % n];
          return (0, e.H)((r - i / n) * n, a, o, u, l);
        };
      }
    },
    4709: (t, n, r) => {
      r.d(n, { Ay: () => u, lG: () => a, uN: () => o });
      var e = r(3116);
      function i(t, n) {
        return function (r) {
          return t + r * n;
        };
      }
      function a(t, n) {
        var r = n - t;
        return r
          ? i(t, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r)
          : (0, e.A)(isNaN(t) ? n : t);
      }
      function o(t) {
        return 1 == (t = +t)
          ? u
          : function (n, r) {
              return r - n
                ? (function (t, n, r) {
                    return (
                      (t = Math.pow(t, r)),
                      (n = Math.pow(n, r) - t),
                      (r = 1 / r),
                      function (e) {
                        return Math.pow(t + e * n, r);
                      }
                    );
                  })(n, r, t)
                : (0, e.A)(isNaN(n) ? r : n);
            };
      }
      function u(t, n) {
        var r = n - t;
        return r ? i(t, r) : (0, e.A)(isNaN(t) ? n : t);
      }
    },
    3116: (t, n, r) => {
      r.d(n, { A: () => e });
      const e = (t) => () => t;
    },
    8172: (t, n, r) => {
      function e(t, n) {
        var r = new Date();
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return r.setTime(t * (1 - e) + n * e), r;
          }
        );
      }
      r.d(n, { A: () => e });
    },
    6632: (t, n, r) => {
      r.r(n),
        r.d(n, {
          interpolate: () => e.A,
          interpolateArray: () => i.A,
          interpolateBasis: () => a.A,
          interpolateBasisClosed: () => o.A,
          interpolateCubehelix: () => R,
          interpolateCubehelixLong: () => X,
          interpolateDate: () => u.A,
          interpolateDiscrete: () => l,
          interpolateHcl: () => $,
          interpolateHclLong: () => q,
          interpolateHsl: () => A,
          interpolateHslLong: () => M,
          interpolateHue: () => c,
          interpolateLab: () => k,
          interpolateNumber: () => h.A,
          interpolateNumberArray: () => f.A,
          interpolateObject: () => p.A,
          interpolateRgb: () => v.Ay,
          interpolateRgbBasis: () => v.Ik,
          interpolateRgbBasisClosed: () => v.uL,
          interpolateRound: () => g.A,
          interpolateString: () => d.A,
          interpolateTransformCss: () => y.T,
          interpolateTransformSvg: () => y.I,
          interpolateZoom: () => m.A,
          piecewise: () => H.A,
          quantize: () => O,
        });
      var e = r(8503),
        i = r(8079),
        a = r(6160),
        o = r(9804),
        u = r(8172);
      function l(t) {
        var n = t.length;
        return function (r) {
          return t[Math.max(0, Math.min(n - 1, Math.floor(r * n)))];
        };
      }
      var s = r(4709);
      function c(t, n) {
        var r = (0, s.lG)(+t, +n);
        return function (t) {
          var n = r(t);
          return n - 360 * Math.floor(n / 360);
        };
      }
      var h = r(8981),
        f = r(128),
        p = r(4287),
        g = r(9770),
        d = r(7737),
        y = r(9587),
        m = r(5835),
        v = r(1197),
        w = r(6957);
      function b(t) {
        return function (n, r) {
          var e = t((n = (0, w.KI)(n)).h, (r = (0, w.KI)(r)).h),
            i = (0, s.Ay)(n.s, r.s),
            a = (0, s.Ay)(n.l, r.l),
            o = (0, s.Ay)(n.opacity, r.opacity);
          return function (t) {
            return (n.h = e(t)), (n.s = i(t)), (n.l = a(t)), (n.opacity = o(t)), n + '';
          };
        };
      }
      const A = b(s.lG);
      var M = b(s.Ay),
        x = r(9853);
      function k(t, n) {
        var r = (0, s.Ay)((t = (0, x.Ay)(t)).l, (n = (0, x.Ay)(n)).l),
          e = (0, s.Ay)(t.a, n.a),
          i = (0, s.Ay)(t.b, n.b),
          a = (0, s.Ay)(t.opacity, n.opacity);
        return function (n) {
          return (t.l = r(n)), (t.a = e(n)), (t.b = i(n)), (t.opacity = a(n)), t + '';
        };
      }
      function N(t) {
        return function (n, r) {
          var e = t((n = (0, x.aq)(n)).h, (r = (0, x.aq)(r)).h),
            i = (0, s.Ay)(n.c, r.c),
            a = (0, s.Ay)(n.l, r.l),
            o = (0, s.Ay)(n.opacity, r.opacity);
          return function (t) {
            return (n.h = e(t)), (n.c = i(t)), (n.l = a(t)), (n.opacity = o(t)), n + '';
          };
        };
      }
      const $ = N(s.lG);
      var q = N(s.Ay),
        E = r(5653);
      function S(t) {
        return (function n(r) {
          function e(n, e) {
            var i = t((n = (0, E.A)(n)).h, (e = (0, E.A)(e)).h),
              a = (0, s.Ay)(n.s, e.s),
              o = (0, s.Ay)(n.l, e.l),
              u = (0, s.Ay)(n.opacity, e.opacity);
            return function (t) {
              return (
                (n.h = i(t)), (n.s = a(t)), (n.l = o(Math.pow(t, r))), (n.opacity = u(t)), n + ''
              );
            };
          }
          return (r = +r), (e.gamma = n), e;
        })(1);
      }
      const R = S(s.lG);
      var X = S(s.Ay),
        H = r(3104);
      function O(t, n) {
        for (var r = new Array(n), e = 0; e < n; ++e) r[e] = t(e / (n - 1));
        return r;
      }
    },
    8981: (t, n, r) => {
      function e(t, n) {
        return (
          (t = +t),
          (n = +n),
          function (r) {
            return t * (1 - r) + n * r;
          }
        );
      }
      r.d(n, { A: () => e });
    },
    128: (t, n, r) => {
      function e(t, n) {
        n || (n = []);
        var r,
          e = t ? Math.min(n.length, t.length) : 0,
          i = n.slice();
        return function (a) {
          for (r = 0; r < e; ++r) i[r] = t[r] * (1 - a) + n[r] * a;
          return i;
        };
      }
      function i(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
      r.d(n, { A: () => e, p: () => i });
    },
    4287: (t, n, r) => {
      r.d(n, { A: () => i });
      var e = r(8503);
      function i(t, n) {
        var r,
          i = {},
          a = {};
        for (r in ((null !== t && 'object' == typeof t) || (t = {}),
        (null !== n && 'object' == typeof n) || (n = {}),
        n))
          r in t ? (i[r] = (0, e.A)(t[r], n[r])) : (a[r] = n[r]);
        return function (t) {
          for (r in i) a[r] = i[r](t);
          return a;
        };
      }
    },
    3104: (t, n, r) => {
      r.d(n, { A: () => i });
      var e = r(8503);
      function i(t, n) {
        void 0 === n && ((n = t), (t = e.A));
        for (var r = 0, i = n.length - 1, a = n[0], o = new Array(i < 0 ? 0 : i); r < i; )
          o[r] = t(a, (a = n[++r]));
        return function (t) {
          var n = Math.max(0, Math.min(i - 1, Math.floor((t *= i))));
          return o[n](t - n);
        };
      }
    },
    1197: (t, n, r) => {
      r.d(n, { Ay: () => u, Ik: () => s, uL: () => c });
      var e = r(6957),
        i = r(6160),
        a = r(9804),
        o = r(4709);
      const u = (function t(n) {
        var r = (0, o.uN)(n);
        function i(t, n) {
          var i = r((t = (0, e.Qh)(t)).r, (n = (0, e.Qh)(n)).r),
            a = r(t.g, n.g),
            u = r(t.b, n.b),
            l = (0, o.Ay)(t.opacity, n.opacity);
          return function (n) {
            return (t.r = i(n)), (t.g = a(n)), (t.b = u(n)), (t.opacity = l(n)), t + '';
          };
        }
        return (i.gamma = t), i;
      })(1);
      function l(t) {
        return function (n) {
          var r,
            i,
            a = n.length,
            o = new Array(a),
            u = new Array(a),
            l = new Array(a);
          for (r = 0; r < a; ++r)
            (i = (0, e.Qh)(n[r])), (o[r] = i.r || 0), (u[r] = i.g || 0), (l[r] = i.b || 0);
          return (
            (o = t(o)),
            (u = t(u)),
            (l = t(l)),
            (i.opacity = 1),
            function (t) {
              return (i.r = o(t)), (i.g = u(t)), (i.b = l(t)), i + '';
            }
          );
        };
      }
      var s = l(i.A),
        c = l(a.A);
    },
    9770: (t, n, r) => {
      function e(t, n) {
        return (
          (t = +t),
          (n = +n),
          function (r) {
            return Math.round(t * (1 - r) + n * r);
          }
        );
      }
      r.d(n, { A: () => e });
    },
    7737: (t, n, r) => {
      r.d(n, { A: () => o });
      var e = r(8981),
        i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        a = new RegExp(i.source, 'g');
      function o(t, n) {
        var r,
          o,
          u,
          l = (i.lastIndex = a.lastIndex = 0),
          s = -1,
          c = [],
          h = [];
        for (t += '', n += ''; (r = i.exec(t)) && (o = a.exec(n)); )
          (u = o.index) > l && ((u = n.slice(l, u)), c[s] ? (c[s] += u) : (c[++s] = u)),
            (r = r[0]) === (o = o[0])
              ? c[s]
                ? (c[s] += o)
                : (c[++s] = o)
              : ((c[++s] = null), h.push({ i: s, x: (0, e.A)(r, o) })),
            (l = a.lastIndex);
        return (
          l < n.length && ((u = n.slice(l)), c[s] ? (c[s] += u) : (c[++s] = u)),
          c.length < 2
            ? h[0]
              ? (function (t) {
                  return function (n) {
                    return t(n) + '';
                  };
                })(h[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(n)
            : ((n = h.length),
              function (t) {
                for (var r, e = 0; e < n; ++e) c[(r = h[e]).i] = r.x(t);
                return c.join('');
              })
        );
      }
    },
    9587: (t, n, r) => {
      r.d(n, { T: () => s, I: () => c });
      var e,
        i = r(8981),
        a = 180 / Math.PI,
        o = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
      function u(t, n, r, e, i, o) {
        var u, l, s;
        return (
          (u = Math.sqrt(t * t + n * n)) && ((t /= u), (n /= u)),
          (s = t * r + n * e) && ((r -= t * s), (e -= n * s)),
          (l = Math.sqrt(r * r + e * e)) && ((r /= l), (e /= l), (s /= l)),
          t * e < n * r && ((t = -t), (n = -n), (s = -s), (u = -u)),
          {
            translateX: i,
            translateY: o,
            rotate: Math.atan2(n, t) * a,
            skewX: Math.atan(s) * a,
            scaleX: u,
            scaleY: l,
          }
        );
      }
      function l(t, n, r, e) {
        function a(t) {
          return t.length ? t.pop() + ' ' : '';
        }
        return function (o, u) {
          var l = [],
            s = [];
          return (
            (o = t(o)),
            (u = t(u)),
            (function (t, e, a, o, u, l) {
              if (t !== a || e !== o) {
                var s = u.push('translate(', null, n, null, r);
                l.push({ i: s - 4, x: (0, i.A)(t, a) }, { i: s - 2, x: (0, i.A)(e, o) });
              } else (a || o) && u.push('translate(' + a + n + o + r);
            })(o.translateX, o.translateY, u.translateX, u.translateY, l, s),
            (function (t, n, r, o) {
              t !== n
                ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                  o.push({ i: r.push(a(r) + 'rotate(', null, e) - 2, x: (0, i.A)(t, n) }))
                : n && r.push(a(r) + 'rotate(' + n + e);
            })(o.rotate, u.rotate, l, s),
            (function (t, n, r, o) {
              t !== n
                ? o.push({ i: r.push(a(r) + 'skewX(', null, e) - 2, x: (0, i.A)(t, n) })
                : n && r.push(a(r) + 'skewX(' + n + e);
            })(o.skewX, u.skewX, l, s),
            (function (t, n, r, e, o, u) {
              if (t !== r || n !== e) {
                var l = o.push(a(o) + 'scale(', null, ',', null, ')');
                u.push({ i: l - 4, x: (0, i.A)(t, r) }, { i: l - 2, x: (0, i.A)(n, e) });
              } else (1 === r && 1 === e) || o.push(a(o) + 'scale(' + r + ',' + e + ')');
            })(o.scaleX, o.scaleY, u.scaleX, u.scaleY, l, s),
            (o = u = null),
            function (t) {
              for (var n, r = -1, e = s.length; ++r < e; ) l[(n = s[r]).i] = n.x(t);
              return l.join('');
            }
          );
        };
      }
      var s = l(
          function (t) {
            const n = new ('function' == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + '');
            return n.isIdentity ? o : u(n.a, n.b, n.c, n.d, n.e, n.f);
          },
          'px, ',
          'px)',
          'deg)'
        ),
        c = l(
          function (t) {
            return null == t
              ? o
              : (e || (e = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
                e.setAttribute('transform', t),
                (t = e.transform.baseVal.consolidate())
                  ? u((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
                  : o);
          },
          ', ',
          ')',
          ')'
        );
    },
    8503: (t, n, r) => {
      r.d(n, { A: () => f });
      var e = r(6957),
        i = r(1197),
        a = r(8079),
        o = r(8172),
        u = r(8981),
        l = r(4287),
        s = r(7737),
        c = r(3116),
        h = r(128);
      function f(t, n) {
        var r,
          f = typeof n;
        return null == n || 'boolean' === f
          ? (0, c.A)(n)
          : ('number' === f
              ? u.A
              : 'string' === f
                ? (r = (0, e.Ay)(n))
                  ? ((n = r), i.Ay)
                  : s.A
                : n instanceof e.Ay
                  ? i.Ay
                  : n instanceof Date
                    ? o.A
                    : (0, h.p)(n)
                      ? h.A
                      : Array.isArray(n)
                        ? a.$
                        : ('function' != typeof n.valueOf && 'function' != typeof n.toString) ||
                            isNaN(n)
                          ? l.A
                          : u.A)(t, n);
      }
    },
    5835: (t, n, r) => {
      r.d(n, { A: () => i });
      function e(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }
      const i = (function t(n, r, i) {
        function a(t, a) {
          var o,
            u,
            l = t[0],
            s = t[1],
            c = t[2],
            h = a[0],
            f = a[1],
            p = a[2],
            g = h - l,
            d = f - s,
            y = g * g + d * d;
          if (y < 1e-12)
            (u = Math.log(p / c) / n),
              (o = function (t) {
                return [l + t * g, s + t * d, c * Math.exp(n * t * u)];
              });
          else {
            var m = Math.sqrt(y),
              v = (p * p - c * c + i * y) / (2 * c * r * m),
              w = (p * p - c * c - i * y) / (2 * p * r * m),
              b = Math.log(Math.sqrt(v * v + 1) - v),
              A = Math.log(Math.sqrt(w * w + 1) - w);
            (u = (A - b) / n),
              (o = function (t) {
                var i,
                  a = t * u,
                  o = e(b),
                  h =
                    (c / (r * m)) *
                    (o * ((i = n * a + b), ((i = Math.exp(2 * i)) - 1) / (i + 1)) -
                      (function (t) {
                        return ((t = Math.exp(t)) - 1 / t) / 2;
                      })(b));
                return [l + h * g, s + h * d, (c * o) / e(n * a + b)];
              });
          }
          return (o.duration = (1e3 * u * n) / Math.SQRT2), o;
        }
        return (
          (a.rho = function (n) {
            var r = Math.max(0.001, +n),
              e = r * r;
            return t(r, e, e * e);
          }),
          a
        );
      })(Math.SQRT2, 2, 4);
    },
  },
]);
