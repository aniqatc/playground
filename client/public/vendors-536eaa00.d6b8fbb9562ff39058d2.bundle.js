(self.webpackChunkplayground = self.webpackChunkplayground || []).push([
  [184],
  {
    8778: (t) => {
      var n = !1;
      if ('undefined' != typeof Float64Array) {
        var e = new Float64Array(1),
          i = new Uint32Array(e.buffer);
        if (((e[0] = 1), (n = !0), 1072693248 === i[1])) {
          (t.exports = function (t) {
            return (e[0] = t), [i[0], i[1]];
          }),
            (t.exports.pack = function (t, n) {
              return (i[0] = t), (i[1] = n), e[0];
            }),
            (t.exports.lo = function (t) {
              return (e[0] = t), i[0];
            }),
            (t.exports.hi = function (t) {
              return (e[0] = t), i[1];
            });
        } else if (1072693248 === i[0]) {
          (t.exports = function (t) {
            return (e[0] = t), [i[1], i[0]];
          }),
            (t.exports.pack = function (t, n) {
              return (i[1] = t), (i[0] = n), e[0];
            }),
            (t.exports.lo = function (t) {
              return (e[0] = t), i[1];
            }),
            (t.exports.hi = function (t) {
              return (e[0] = t), i[0];
            });
        } else n = !1;
      }
      if (!n) {
        var r = new Buffer(8);
        (t.exports = function (t) {
          return r.writeDoubleLE(t, 0, !0), [r.readUInt32LE(0, !0), r.readUInt32LE(4, !0)];
        }),
          (t.exports.pack = function (t, n) {
            return r.writeUInt32LE(t, 0, !0), r.writeUInt32LE(n, 4, !0), r.readDoubleLE(0, !0);
          }),
          (t.exports.lo = function (t) {
            return r.writeDoubleLE(t, 0, !0), r.readUInt32LE(0, !0);
          }),
          (t.exports.hi = function (t) {
            return r.writeDoubleLE(t, 0, !0), r.readUInt32LE(4, !0);
          });
      }
      (t.exports.sign = function (n) {
        return t.exports.hi(n) >>> 31;
      }),
        (t.exports.exponent = function (n) {
          return ((t.exports.hi(n) << 1) >>> 21) - 1023;
        }),
        (t.exports.fraction = function (n) {
          var e = t.exports.lo(n),
            i = t.exports.hi(n),
            r = 1048575 & i;
          return 2146435072 & i && (r += 1 << 20), [e, r];
        }),
        (t.exports.denormalized = function (n) {
          return !(2146435072 & t.exports.hi(n));
        });
    },
    7007: (t) => {
      'use strict';
      var n,
        e = 'object' == typeof Reflect ? Reflect : null,
        i =
          e && 'function' == typeof e.apply
            ? e.apply
            : function (t, n, e) {
                return Function.prototype.apply.call(t, n, e);
              };
      n =
        e && 'function' == typeof e.ownKeys
          ? e.ownKeys
          : Object.getOwnPropertySymbols
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
              }
            : function (t) {
                return Object.getOwnPropertyNames(t);
              };
      var r =
        Number.isNaN ||
        function (t) {
          return t != t;
        };
      function o() {
        o.init.call(this);
      }
      (t.exports = o),
        (t.exports.once = function (t, n) {
          return new Promise(function (e, i) {
            function r(e) {
              t.removeListener(n, o), i(e);
            }
            function o() {
              'function' == typeof t.removeListener && t.removeListener('error', r),
                e([].slice.call(arguments));
            }
            y(t, n, o, { once: !0 }),
              'error' !== n &&
                (function (t, n, e) {
                  'function' == typeof t.on && y(t, 'error', n, e);
                })(t, r, { once: !0 });
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var u = 10;
      function s(t) {
        if ('function' != typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' + typeof t
          );
      }
      function a(t) {
        return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners;
      }
      function c(t, n, e, i) {
        var r, o, u, c;
        if (
          (s(e),
          void 0 === (o = t._events)
            ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (t.emit('newListener', n, e.listener ? e.listener : e), (o = t._events)),
              (u = o[n])),
          void 0 === u)
        )
          (u = o[n] = e), ++t._eventsCount;
        else if (
          ('function' == typeof u ? (u = o[n] = i ? [e, u] : [u, e]) : i ? u.unshift(e) : u.push(e),
          (r = a(t)) > 0 && u.length > r && !u.warned)
        ) {
          u.warned = !0;
          var h = new Error(
            'Possible EventEmitter memory leak detected. ' +
              u.length +
              ' ' +
              String(n) +
              ' listeners added. Use emitter.setMaxListeners() to increase limit'
          );
          (h.name = 'MaxListenersExceededWarning'),
            (h.emitter = t),
            (h.type = n),
            (h.count = u.length),
            (c = h),
            console && console.warn && console.warn(c);
        }
        return t;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function l(t, n, e) {
        var i = { fired: !1, wrapFn: void 0, target: t, type: n, listener: e },
          r = h.bind(i);
        return (r.listener = e), (i.wrapFn = r), r;
      }
      function f(t, n, e) {
        var i = t._events;
        if (void 0 === i) return [];
        var r = i[n];
        return void 0 === r
          ? []
          : 'function' == typeof r
            ? e
              ? [r.listener || r]
              : [r]
            : e
              ? (function (t) {
                  for (var n = new Array(t.length), e = 0; e < n.length; ++e)
                    n[e] = t[e].listener || t[e];
                  return n;
                })(r)
              : p(r, r.length);
      }
      function _(t) {
        var n = this._events;
        if (void 0 !== n) {
          var e = n[t];
          if ('function' == typeof e) return 1;
          if (void 0 !== e) return e.length;
        }
        return 0;
      }
      function p(t, n) {
        for (var e = new Array(n), i = 0; i < n; ++i) e[i] = t[i];
        return e;
      }
      function y(t, n, e, i) {
        if ('function' == typeof t.on) i.once ? t.once(n, e) : t.on(n, e);
        else {
          if ('function' != typeof t.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' + typeof t
            );
          t.addEventListener(n, function r(o) {
            i.once && t.removeEventListener(n, r), e(o);
          });
        }
      }
      Object.defineProperty(o, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return u;
        },
        set: function (t) {
          if ('number' != typeof t || t < 0 || r(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                '.'
            );
          u = t;
        },
      }),
        (o.init = function () {
          (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (t) {
          if ('number' != typeof t || t < 0 || r(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                '.'
            );
          return (this._maxListeners = t), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return a(this);
        }),
        (o.prototype.emit = function (t) {
          for (var n = [], e = 1; e < arguments.length; e++) n.push(arguments[e]);
          var r = 'error' === t,
            o = this._events;
          if (void 0 !== o) r = r && void 0 === o.error;
          else if (!r) return !1;
          if (r) {
            var u;
            if ((n.length > 0 && (u = n[0]), u instanceof Error)) throw u;
            var s = new Error('Unhandled error.' + (u ? ' (' + u.message + ')' : ''));
            throw ((s.context = u), s);
          }
          var a = o[t];
          if (void 0 === a) return !1;
          if ('function' == typeof a) i(a, this, n);
          else {
            var c = a.length,
              h = p(a, c);
            for (e = 0; e < c; ++e) i(h[e], this, n);
          }
          return !0;
        }),
        (o.prototype.addListener = function (t, n) {
          return c(this, t, n, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (t, n) {
          return c(this, t, n, !0);
        }),
        (o.prototype.once = function (t, n) {
          return s(n), this.on(t, l(this, t, n)), this;
        }),
        (o.prototype.prependOnceListener = function (t, n) {
          return s(n), this.prependListener(t, l(this, t, n)), this;
        }),
        (o.prototype.removeListener = function (t, n) {
          var e, i, r, o, u;
          if ((s(n), void 0 === (i = this._events))) return this;
          if (void 0 === (e = i[t])) return this;
          if (e === n || e.listener === n)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[t], i.removeListener && this.emit('removeListener', t, e.listener || n));
          else if ('function' != typeof e) {
            for (r = -1, o = e.length - 1; o >= 0; o--)
              if (e[o] === n || e[o].listener === n) {
                (u = e[o].listener), (r = o);
                break;
              }
            if (r < 0) return this;
            0 === r
              ? e.shift()
              : (function (t, n) {
                  for (; n + 1 < t.length; n++) t[n] = t[n + 1];
                  t.pop();
                })(e, r),
              1 === e.length && (i[t] = e[0]),
              void 0 !== i.removeListener && this.emit('removeListener', t, u || n);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (t) {
          var n, e, i;
          if (void 0 === (e = this._events)) return this;
          if (void 0 === e.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                : void 0 !== e[t] &&
                  (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete e[t]),
              this
            );
          if (0 === arguments.length) {
            var r,
              o = Object.keys(e);
            for (i = 0; i < o.length; ++i)
              'removeListener' !== (r = o[i]) && this.removeAllListeners(r);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ('function' == typeof (n = e[t])) this.removeListener(t, n);
          else if (void 0 !== n) for (i = n.length - 1; i >= 0; i--) this.removeListener(t, n[i]);
          return this;
        }),
        (o.prototype.listeners = function (t) {
          return f(this, t, !0);
        }),
        (o.prototype.rawListeners = function (t) {
          return f(this, t, !1);
        }),
        (o.listenerCount = function (t, n) {
          return 'function' == typeof t.listenerCount ? t.listenerCount(n) : _.call(t, n);
        }),
        (o.prototype.listenerCount = _),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? n(this._events) : [];
        });
    },
    2429: (t, n, e) => {
      'use strict';
      e.r(n),
        e.d(n, {
          scaleBand: () => c,
          scaleDiverging: () => Oe,
          scaleDivergingLog: () => Ye,
          scaleDivergingPow: () => qe,
          scaleDivergingSqrt: () => Re,
          scaleDivergingSymlog: () => $e,
          scaleIdentity: () => z,
          scaleImplicit: () => s,
          scaleLinear: () => U,
          scaleLog: () => H,
          scaleOrdinal: () => a,
          scalePoint: () => l,
          scalePow: () => J,
          scaleQuantile: () => rt,
          scaleQuantize: () => ot,
          scaleRadial: () => nt,
          scaleSequential: () => Ne,
          scaleSequentialLog: () => Ee,
          scaleSequentialPow: () => De,
          scaleSequentialQuantile: () => ze,
          scaleSequentialSqrt: () => Ue,
          scaleSequentialSymlog: () => Le,
          scaleSqrt: () => K,
          scaleSymlog: () => V,
          scaleThreshold: () => ut,
          scaleTime: () => Me,
          scaleUtc: () => ke,
          tickFormat: () => L,
        });
      var i = e(6561);
      function r(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(n).domain(t);
        }
        return this;
      }
      function o(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            'function' == typeof t ? this.interpolator(t) : this.range(t);
            break;
          default:
            this.domain(t), 'function' == typeof n ? this.interpolator(n) : this.range(n);
        }
        return this;
      }
      var u = e(4119);
      const s = Symbol('implicit');
      function a() {
        var t = new u.B(),
          n = [],
          e = [],
          i = s;
        function o(r) {
          let o = t.get(r);
          if (void 0 === o) {
            if (i !== s) return i;
            t.set(r, (o = n.push(r) - 1));
          }
          return e[o % e.length];
        }
        return (
          (o.domain = function (e) {
            if (!arguments.length) return n.slice();
            (n = []), (t = new u.B());
            for (const i of e) t.has(i) || t.set(i, n.push(i) - 1);
            return o;
          }),
          (o.range = function (t) {
            return arguments.length ? ((e = Array.from(t)), o) : e.slice();
          }),
          (o.unknown = function (t) {
            return arguments.length ? ((i = t), o) : i;
          }),
          (o.copy = function () {
            return a(n, e).unknown(i);
          }),
          r.apply(o, arguments),
          o
        );
      }
      function c() {
        var t,
          n,
          e = a().unknown(void 0),
          o = e.domain,
          u = e.range,
          s = 0,
          h = 1,
          l = !1,
          f = 0,
          _ = 0,
          p = 0.5;
        function y() {
          var e = o().length,
            r = h < s,
            a = r ? h : s,
            c = r ? s : h;
          (t = (c - a) / Math.max(1, e - f + 2 * _)),
            l && (t = Math.floor(t)),
            (a += (c - a - t * (e - f)) * p),
            (n = t * (1 - f)),
            l && ((a = Math.round(a)), (n = Math.round(n)));
          var y = (0, i.A)(e).map(function (n) {
            return a + t * n;
          });
          return u(r ? y.reverse() : y);
        }
        return (
          delete e.unknown,
          (e.domain = function (t) {
            return arguments.length ? (o(t), y()) : o();
          }),
          (e.range = function (t) {
            return arguments.length ? (([s, h] = t), (s = +s), (h = +h), y()) : [s, h];
          }),
          (e.rangeRound = function (t) {
            return ([s, h] = t), (s = +s), (h = +h), (l = !0), y();
          }),
          (e.bandwidth = function () {
            return n;
          }),
          (e.step = function () {
            return t;
          }),
          (e.round = function (t) {
            return arguments.length ? ((l = !!t), y()) : l;
          }),
          (e.padding = function (t) {
            return arguments.length ? ((f = Math.min(1, (_ = +t))), y()) : f;
          }),
          (e.paddingInner = function (t) {
            return arguments.length ? ((f = Math.min(1, t)), y()) : f;
          }),
          (e.paddingOuter = function (t) {
            return arguments.length ? ((_ = +t), y()) : _;
          }),
          (e.align = function (t) {
            return arguments.length ? ((p = Math.max(0, Math.min(1, t))), y()) : p;
          }),
          (e.copy = function () {
            return c(o(), [s, h]).round(l).paddingInner(f).paddingOuter(_).align(p);
          }),
          r.apply(y(), arguments)
        );
      }
      function h(t) {
        var n = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function () {
            return h(n());
          }),
          t
        );
      }
      function l() {
        return h(c.apply(null, arguments).paddingInner(1));
      }
      var f = e(6946),
        _ = e(2016),
        p = e(8503),
        y = e(8981),
        v = e(9770);
      function g(t) {
        return +t;
      }
      var d = [0, 1];
      function m(t) {
        return t;
      }
      function x(t, n) {
        return (n -= t = +t)
          ? function (e) {
              return (e - t) / n;
            }
          : ((e = isNaN(n) ? NaN : 0.5),
            function () {
              return e;
            });
        var e;
      }
      function w(t, n, e) {
        var i = t[0],
          r = t[1],
          o = n[0],
          u = n[1];
        return (
          r < i ? ((i = x(r, i)), (o = e(u, o))) : ((i = x(i, r)), (o = e(o, u))),
          function (t) {
            return o(i(t));
          }
        );
      }
      function T(t, n, e) {
        var i = Math.min(t.length, n.length) - 1,
          r = new Array(i),
          o = new Array(i),
          u = -1;
        for (t[i] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse())); ++u < i; )
          (r[u] = x(t[u], t[u + 1])), (o[u] = e(n[u], n[u + 1]));
        return function (n) {
          var e = (0, _.Ay)(t, n, 1, i) - 1;
          return o[e](r[e](n));
        };
      }
      function A(t, n) {
        return n
          .domain(t.domain())
          .range(t.range())
          .interpolate(t.interpolate())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function b() {
        var t,
          n,
          e,
          i,
          r,
          o,
          u = d,
          s = d,
          a = p.A,
          c = m;
        function h() {
          var t,
            n,
            e,
            a = Math.min(u.length, s.length);
          return (
            c !== m &&
              ((t = u[0]),
              (n = u[a - 1]),
              t > n && ((e = t), (t = n), (n = e)),
              (c = function (e) {
                return Math.max(t, Math.min(n, e));
              })),
            (i = a > 2 ? T : w),
            (r = o = null),
            l
          );
        }
        function l(n) {
          return null == n || isNaN((n = +n)) ? e : (r || (r = i(u.map(t), s, a)))(t(c(n)));
        }
        return (
          (l.invert = function (e) {
            return c(n((o || (o = i(s, u.map(t), y.A)))(e)));
          }),
          (l.domain = function (t) {
            return arguments.length ? ((u = Array.from(t, g)), h()) : u.slice();
          }),
          (l.range = function (t) {
            return arguments.length ? ((s = Array.from(t)), h()) : s.slice();
          }),
          (l.rangeRound = function (t) {
            return (s = Array.from(t)), (a = v.A), h();
          }),
          (l.clamp = function (t) {
            return arguments.length ? ((c = !!t || m), h()) : c !== m;
          }),
          (l.interpolate = function (t) {
            return arguments.length ? ((a = t), h()) : a;
          }),
          (l.unknown = function (t) {
            return arguments.length ? ((e = t), l) : e;
          }),
          function (e, i) {
            return (t = e), (n = i), h();
          }
        );
      }
      function M() {
        return b()(m, m);
      }
      var k = e(1631),
        C = e(7590),
        S = e(8701),
        N = e(9460),
        E = e(1734);
      function L(t, n, e, i) {
        var r,
          o = (0, f.sG)(t, n, e);
        switch ((i = (0, k.A)(null == i ? ',f' : i)).type) {
          case 's':
            var u = Math.max(Math.abs(t), Math.abs(n));
            return (
              null != i.precision || isNaN((r = (0, C.A)(o, u))) || (i.precision = r),
              (0, S.s)(i, u)
            );
          case '':
          case 'e':
          case 'g':
          case 'p':
          case 'r':
            null != i.precision ||
              isNaN((r = (0, N.A)(o, Math.max(Math.abs(t), Math.abs(n))))) ||
              (i.precision = r - ('e' === i.type));
            break;
          case 'f':
          case '%':
            null != i.precision ||
              isNaN((r = (0, E.A)(o))) ||
              (i.precision = r - 2 * ('%' === i.type));
        }
        return (0, S.GP)(i);
      }
      function D(t) {
        var n = t.domain;
        return (
          (t.ticks = function (t) {
            var e = n();
            return (0, f.Ay)(e[0], e[e.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, e) {
            var i = n();
            return L(i[0], i[i.length - 1], null == t ? 10 : t, e);
          }),
          (t.nice = function (e) {
            null == e && (e = 10);
            var i,
              r,
              o = n(),
              u = 0,
              s = o.length - 1,
              a = o[u],
              c = o[s],
              h = 10;
            for (c < a && ((r = a), (a = c), (c = r), (r = u), (u = s), (s = r)); h-- > 0; ) {
              if ((r = (0, f.lq)(a, c, e)) === i) return (o[u] = a), (o[s] = c), n(o);
              if (r > 0) (a = Math.floor(a / r) * r), (c = Math.ceil(c / r) * r);
              else {
                if (!(r < 0)) break;
                (a = Math.ceil(a * r) / r), (c = Math.floor(c * r) / r);
              }
              i = r;
            }
            return t;
          }),
          t
        );
      }
      function U() {
        var t = M();
        return (
          (t.copy = function () {
            return A(t, U());
          }),
          r.apply(t, arguments),
          D(t)
        );
      }
      function z(t) {
        var n;
        function e(t) {
          return null == t || isNaN((t = +t)) ? n : t;
        }
        return (
          (e.invert = e),
          (e.domain = e.range =
            function (n) {
              return arguments.length ? ((t = Array.from(n, g)), e) : t.slice();
            }),
          (e.unknown = function (t) {
            return arguments.length ? ((n = t), e) : n;
          }),
          (e.copy = function () {
            return z(t).unknown(n);
          }),
          (t = arguments.length ? Array.from(t, g) : [0, 1]),
          D(e)
        );
      }
      function P(t, n) {
        var e,
          i = 0,
          r = (t = t.slice()).length - 1,
          o = t[i],
          u = t[r];
        return (
          u < o && ((e = i), (i = r), (r = e), (e = o), (o = u), (u = e)),
          (t[i] = n.floor(o)),
          (t[r] = n.ceil(u)),
          t
        );
      }
      function F(t) {
        return Math.log(t);
      }
      function O(t) {
        return Math.exp(t);
      }
      function Y(t) {
        return -Math.log(-t);
      }
      function $(t) {
        return -Math.exp(-t);
      }
      function q(t) {
        return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t;
      }
      function R(t) {
        return (n, e) => -t(-n, e);
      }
      function j(t) {
        const n = t(F, O),
          e = n.domain;
        let i,
          r,
          o = 10;
        function u() {
          return (
            (i = (function (t) {
              return t === Math.E
                ? Math.log
                : (10 === t && Math.log10) ||
                    (2 === t && Math.log2) ||
                    ((t = Math.log(t)), (n) => Math.log(n) / t);
            })(o)),
            (r = (function (t) {
              return 10 === t ? q : t === Math.E ? Math.exp : (n) => Math.pow(t, n);
            })(o)),
            e()[0] < 0 ? ((i = R(i)), (r = R(r)), t(Y, $)) : t(F, O),
            n
          );
        }
        return (
          (n.base = function (t) {
            return arguments.length ? ((o = +t), u()) : o;
          }),
          (n.domain = function (t) {
            return arguments.length ? (e(t), u()) : e();
          }),
          (n.ticks = (t) => {
            const n = e();
            let u = n[0],
              s = n[n.length - 1];
            const a = s < u;
            a && ([u, s] = [s, u]);
            let c,
              h,
              l = i(u),
              _ = i(s);
            const p = null == t ? 10 : +t;
            let y = [];
            if (!(o % 1) && _ - l < p) {
              if (((l = Math.floor(l)), (_ = Math.ceil(_)), u > 0)) {
                for (; l <= _; ++l)
                  for (c = 1; c < o; ++c)
                    if (((h = l < 0 ? c / r(-l) : c * r(l)), !(h < u))) {
                      if (h > s) break;
                      y.push(h);
                    }
              } else
                for (; l <= _; ++l)
                  for (c = o - 1; c >= 1; --c)
                    if (((h = l > 0 ? c / r(-l) : c * r(l)), !(h < u))) {
                      if (h > s) break;
                      y.push(h);
                    }
              2 * y.length < p && (y = (0, f.Ay)(u, s, p));
            } else y = (0, f.Ay)(l, _, Math.min(_ - l, p)).map(r);
            return a ? y.reverse() : y;
          }),
          (n.tickFormat = (t, e) => {
            if (
              (null == t && (t = 10),
              null == e && (e = 10 === o ? 's' : ','),
              'function' != typeof e &&
                (o % 1 || null != (e = (0, k.A)(e)).precision || (e.trim = !0), (e = (0, S.GP)(e))),
              t === 1 / 0)
            )
              return e;
            const u = Math.max(1, (o * t) / n.ticks().length);
            return (t) => {
              let n = t / r(Math.round(i(t)));
              return n * o < o - 0.5 && (n *= o), n <= u ? e(t) : '';
            };
          }),
          (n.nice = () =>
            e(P(e(), { floor: (t) => r(Math.floor(i(t))), ceil: (t) => r(Math.ceil(i(t))) }))),
          n
        );
      }
      function H() {
        const t = j(b()).domain([1, 10]);
        return (t.copy = () => A(t, H()).base(t.base())), r.apply(t, arguments), t;
      }
      function I(t) {
        return function (n) {
          return Math.sign(n) * Math.log1p(Math.abs(n / t));
        };
      }
      function B(t) {
        return function (n) {
          return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
        };
      }
      function X(t) {
        var n = 1,
          e = t(I(n), B(n));
        return (
          (e.constant = function (e) {
            return arguments.length ? t(I((n = +e)), B(n)) : n;
          }),
          D(e)
        );
      }
      function V() {
        var t = X(b());
        return (
          (t.copy = function () {
            return A(t, V()).constant(t.constant());
          }),
          r.apply(t, arguments)
        );
      }
      function Z(t) {
        return function (n) {
          return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
        };
      }
      function W(t) {
        return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
      }
      function G(t) {
        return t < 0 ? -t * t : t * t;
      }
      function Q(t) {
        var n = t(m, m),
          e = 1;
        return (
          (n.exponent = function (n) {
            return arguments.length
              ? 1 === (e = +n)
                ? t(m, m)
                : 0.5 === e
                  ? t(W, G)
                  : t(Z(e), Z(1 / e))
              : e;
          }),
          D(n)
        );
      }
      function J() {
        var t = Q(b());
        return (
          (t.copy = function () {
            return A(t, J()).exponent(t.exponent());
          }),
          r.apply(t, arguments),
          t
        );
      }
      function K() {
        return J.apply(null, arguments).exponent(0.5);
      }
      function tt(t) {
        return Math.sign(t) * t * t;
      }
      function nt() {
        var t,
          n = M(),
          e = [0, 1],
          i = !1;
        function o(e) {
          var r = (function (t) {
            return Math.sign(t) * Math.sqrt(Math.abs(t));
          })(n(e));
          return isNaN(r) ? t : i ? Math.round(r) : r;
        }
        return (
          (o.invert = function (t) {
            return n.invert(tt(t));
          }),
          (o.domain = function (t) {
            return arguments.length ? (n.domain(t), o) : n.domain();
          }),
          (o.range = function (t) {
            return arguments.length ? (n.range((e = Array.from(t, g)).map(tt)), o) : e.slice();
          }),
          (o.rangeRound = function (t) {
            return o.range(t).round(!0);
          }),
          (o.round = function (t) {
            return arguments.length ? ((i = !!t), o) : i;
          }),
          (o.clamp = function (t) {
            return arguments.length ? (n.clamp(t), o) : n.clamp();
          }),
          (o.unknown = function (n) {
            return arguments.length ? ((t = n), o) : t;
          }),
          (o.copy = function () {
            return nt(n.domain(), e).round(i).clamp(n.clamp()).unknown(t);
          }),
          r.apply(o, arguments),
          D(o)
        );
      }
      var et = e(7562),
        it = e(2902);
      function rt() {
        var t,
          n = [],
          e = [],
          i = [];
        function o() {
          var t = 0,
            r = Math.max(1, e.length);
          for (i = new Array(r - 1); ++t < r; ) i[t - 1] = (0, et.Z4)(n, t / r);
          return u;
        }
        function u(n) {
          return null == n || isNaN((n = +n)) ? t : e[(0, _.Ay)(i, n)];
        }
        return (
          (u.invertExtent = function (t) {
            var r = e.indexOf(t);
            return r < 0
              ? [NaN, NaN]
              : [r > 0 ? i[r - 1] : n[0], r < i.length ? i[r] : n[n.length - 1]];
          }),
          (u.domain = function (t) {
            if (!arguments.length) return n.slice();
            n = [];
            for (let e of t) null == e || isNaN((e = +e)) || n.push(e);
            return n.sort(it.A), o();
          }),
          (u.range = function (t) {
            return arguments.length ? ((e = Array.from(t)), o()) : e.slice();
          }),
          (u.unknown = function (n) {
            return arguments.length ? ((t = n), u) : t;
          }),
          (u.quantiles = function () {
            return i.slice();
          }),
          (u.copy = function () {
            return rt().domain(n).range(e).unknown(t);
          }),
          r.apply(u, arguments)
        );
      }
      function ot() {
        var t,
          n = 0,
          e = 1,
          i = 1,
          o = [0.5],
          u = [0, 1];
        function s(n) {
          return null != n && n <= n ? u[(0, _.Ay)(o, n, 0, i)] : t;
        }
        function a() {
          var t = -1;
          for (o = new Array(i); ++t < i; ) o[t] = ((t + 1) * e - (t - i) * n) / (i + 1);
          return s;
        }
        return (
          (s.domain = function (t) {
            return arguments.length ? (([n, e] = t), (n = +n), (e = +e), a()) : [n, e];
          }),
          (s.range = function (t) {
            return arguments.length ? ((i = (u = Array.from(t)).length - 1), a()) : u.slice();
          }),
          (s.invertExtent = function (t) {
            var r = u.indexOf(t);
            return r < 0
              ? [NaN, NaN]
              : r < 1
                ? [n, o[0]]
                : r >= i
                  ? [o[i - 1], e]
                  : [o[r - 1], o[r]];
          }),
          (s.unknown = function (n) {
            return arguments.length ? ((t = n), s) : s;
          }),
          (s.thresholds = function () {
            return o.slice();
          }),
          (s.copy = function () {
            return ot().domain([n, e]).range(u).unknown(t);
          }),
          r.apply(D(s), arguments)
        );
      }
      function ut() {
        var t,
          n = [0.5],
          e = [0, 1],
          i = 1;
        function o(r) {
          return null != r && r <= r ? e[(0, _.Ay)(n, r, 0, i)] : t;
        }
        return (
          (o.domain = function (t) {
            return arguments.length
              ? ((n = Array.from(t)), (i = Math.min(n.length, e.length - 1)), o)
              : n.slice();
          }),
          (o.range = function (t) {
            return arguments.length
              ? ((e = Array.from(t)), (i = Math.min(n.length, e.length - 1)), o)
              : e.slice();
          }),
          (o.invertExtent = function (t) {
            var i = e.indexOf(t);
            return [n[i - 1], n[i]];
          }),
          (o.unknown = function (n) {
            return arguments.length ? ((t = n), o) : t;
          }),
          (o.copy = function () {
            return ut().domain(n).range(e).unknown(t);
          }),
          r.apply(o, arguments)
        );
      }
      var st = e(321);
      const at = 1e3,
        ct = 6e4,
        ht = 36e5,
        lt = 864e5,
        ft = 6048e5,
        _t = 2592e6,
        pt = 31536e6,
        yt = new Date(),
        vt = new Date();
      function gt(t, n, e, i) {
        function r(n) {
          return t((n = 0 === arguments.length ? new Date() : new Date(+n))), n;
        }
        return (
          (r.floor = (n) => (t((n = new Date(+n))), n)),
          (r.ceil = (e) => (t((e = new Date(e - 1))), n(e, 1), t(e), e)),
          (r.round = (t) => {
            const n = r(t),
              e = r.ceil(t);
            return t - n < e - t ? n : e;
          }),
          (r.offset = (t, e) => (n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t)),
          (r.range = (e, i, o) => {
            const u = [];
            if (((e = r.ceil(e)), (o = null == o ? 1 : Math.floor(o)), !(e < i && o > 0))) return u;
            let s;
            do {
              u.push((s = new Date(+e))), n(e, o), t(e);
            } while (s < e && e < i);
            return u;
          }),
          (r.filter = (e) =>
            gt(
              (n) => {
                if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
              },
              (t, i) => {
                if (t >= t)
                  if (i < 0) for (; ++i <= 0; ) for (; n(t, -1), !e(t); );
                  else for (; --i >= 0; ) for (; n(t, 1), !e(t); );
              }
            )),
          e &&
            ((r.count = (n, i) => (
              yt.setTime(+n), vt.setTime(+i), t(yt), t(vt), Math.floor(e(yt, vt))
            )),
            (r.every = (t) => (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? r.filter(i ? (n) => i(n) % t == 0 : (n) => r.count(0, n) % t == 0)
                  : r
                : null
            ))),
          r
        );
      }
      const dt = gt(
        () => {},
        (t, n) => {
          t.setTime(+t + n);
        },
        (t, n) => n - t
      );
      dt.every = (t) => (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? gt(
                (n) => {
                  n.setTime(Math.floor(n / t) * t);
                },
                (n, e) => {
                  n.setTime(+n + e * t);
                },
                (n, e) => (e - n) / t
              )
            : dt
          : null
      );
      dt.range;
      const mt = gt(
          (t) => {
            t.setTime(t - t.getMilliseconds());
          },
          (t, n) => {
            t.setTime(+t + n * at);
          },
          (t, n) => (n - t) / at,
          (t) => t.getUTCSeconds()
        ),
        xt =
          (mt.range,
          gt(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * at);
            },
            (t, n) => {
              t.setTime(+t + n * ct);
            },
            (t, n) => (n - t) / ct,
            (t) => t.getMinutes()
          )),
        wt =
          (xt.range,
          gt(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, n) => {
              t.setTime(+t + n * ct);
            },
            (t, n) => (n - t) / ct,
            (t) => t.getUTCMinutes()
          )),
        Tt =
          (wt.range,
          gt(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * at - t.getMinutes() * ct);
            },
            (t, n) => {
              t.setTime(+t + n * ht);
            },
            (t, n) => (n - t) / ht,
            (t) => t.getHours()
          )),
        At =
          (Tt.range,
          gt(
            (t) => {
              t.setUTCMinutes(0, 0, 0);
            },
            (t, n) => {
              t.setTime(+t + n * ht);
            },
            (t, n) => (n - t) / ht,
            (t) => t.getUTCHours()
          )),
        bt =
          (At.range,
          gt(
            (t) => t.setHours(0, 0, 0, 0),
            (t, n) => t.setDate(t.getDate() + n),
            (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ct) / lt,
            (t) => t.getDate() - 1
          )),
        Mt =
          (bt.range,
          gt(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, n) => {
              t.setUTCDate(t.getUTCDate() + n);
            },
            (t, n) => (n - t) / lt,
            (t) => t.getUTCDate() - 1
          )),
        kt =
          (Mt.range,
          gt(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, n) => {
              t.setUTCDate(t.getUTCDate() + n);
            },
            (t, n) => (n - t) / lt,
            (t) => Math.floor(t / lt)
          ));
      kt.range;
      function Ct(t) {
        return gt(
          (n) => {
            n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)), n.setHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setDate(t.getDate() + 7 * n);
          },
          (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ct) / ft
        );
      }
      const St = Ct(0),
        Nt = Ct(1),
        Et = Ct(2),
        Lt = Ct(3),
        Dt = Ct(4),
        Ut = Ct(5),
        zt = Ct(6);
      St.range, Nt.range, Et.range, Lt.range, Dt.range, Ut.range, zt.range;
      function Pt(t) {
        return gt(
          (n) => {
            n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)), n.setUTCHours(0, 0, 0, 0);
          },
          (t, n) => {
            t.setUTCDate(t.getUTCDate() + 7 * n);
          },
          (t, n) => (n - t) / ft
        );
      }
      const Ft = Pt(0),
        Ot = Pt(1),
        Yt = Pt(2),
        $t = Pt(3),
        qt = Pt(4),
        Rt = Pt(5),
        jt = Pt(6),
        Ht =
          (Ft.range,
          Ot.range,
          Yt.range,
          $t.range,
          qt.range,
          Rt.range,
          jt.range,
          gt(
            (t) => {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            (t, n) => {
              t.setMonth(t.getMonth() + n);
            },
            (t, n) => n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear()),
            (t) => t.getMonth()
          )),
        It =
          (Ht.range,
          gt(
            (t) => {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            (t, n) => {
              t.setUTCMonth(t.getUTCMonth() + n);
            },
            (t, n) =>
              n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear()),
            (t) => t.getUTCMonth()
          )),
        Bt =
          (It.range,
          gt(
            (t) => {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            (t, n) => {
              t.setFullYear(t.getFullYear() + n);
            },
            (t, n) => n.getFullYear() - t.getFullYear(),
            (t) => t.getFullYear()
          ));
      Bt.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? gt(
              (n) => {
                n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                  n.setMonth(0, 1),
                  n.setHours(0, 0, 0, 0);
              },
              (n, e) => {
                n.setFullYear(n.getFullYear() + e * t);
              }
            )
          : null;
      Bt.range;
      const Xt = gt(
        (t) => {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n);
        },
        (t, n) => n.getUTCFullYear() - t.getUTCFullYear(),
        (t) => t.getUTCFullYear()
      );
      Xt.every = (t) =>
        isFinite((t = Math.floor(t))) && t > 0
          ? gt(
              (n) => {
                n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                  n.setUTCMonth(0, 1),
                  n.setUTCHours(0, 0, 0, 0);
              },
              (n, e) => {
                n.setUTCFullYear(n.getUTCFullYear() + e * t);
              }
            )
          : null;
      Xt.range;
      function Vt(t, n, e, i, r, o) {
        const u = [
          [mt, 1, at],
          [mt, 5, 5e3],
          [mt, 15, 15e3],
          [mt, 30, 3e4],
          [o, 1, ct],
          [o, 5, 3e5],
          [o, 15, 9e5],
          [o, 30, 18e5],
          [r, 1, ht],
          [r, 3, 108e5],
          [r, 6, 216e5],
          [r, 12, 432e5],
          [i, 1, lt],
          [i, 2, 1728e5],
          [e, 1, ft],
          [n, 1, _t],
          [n, 3, 7776e6],
          [t, 1, pt],
        ];
        function s(n, e, i) {
          const r = Math.abs(e - n) / i,
            o = (0, st.A)(([, , t]) => t).right(u, r);
          if (o === u.length) return t.every((0, f.sG)(n / pt, e / pt, i));
          if (0 === o) return dt.every(Math.max((0, f.sG)(n, e, i), 1));
          const [s, a] = u[r / u[o - 1][2] < u[o][2] / r ? o - 1 : o];
          return s.every(a);
        }
        return [
          function (t, n, e) {
            const i = n < t;
            i && ([t, n] = [n, t]);
            const r = e && 'function' == typeof e.range ? e : s(t, n, e),
              o = r ? r.range(t, +n + 1) : [];
            return i ? o.reverse() : o;
          },
          s,
        ];
      }
      const [Zt, Wt] = Vt(Xt, It, Ft, kt, At, wt),
        [Gt, Qt] = Vt(Bt, Ht, St, bt, Tt, xt);
      function Jt(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
          return n.setFullYear(t.y), n;
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }
      function Kt(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
          return n.setUTCFullYear(t.y), n;
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }
      function tn(t, n, e) {
        return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
      }
      var nn,
        en,
        rn,
        on = { '-': '', _: ' ', 0: '0' },
        un = /^\s*\d+/,
        sn = /^%/,
        an = /[\\^$*+?|[\]().{}]/g;
      function cn(t, n, e) {
        var i = t < 0 ? '-' : '',
          r = (i ? -t : t) + '',
          o = r.length;
        return i + (o < e ? new Array(e - o + 1).join(n) + r : r);
      }
      function hn(t) {
        return t.replace(an, '\\$&');
      }
      function ln(t) {
        return new RegExp('^(?:' + t.map(hn).join('|') + ')', 'i');
      }
      function fn(t) {
        return new Map(t.map((t, n) => [t.toLowerCase(), n]));
      }
      function _n(t, n, e) {
        var i = un.exec(n.slice(e, e + 1));
        return i ? ((t.w = +i[0]), e + i[0].length) : -1;
      }
      function pn(t, n, e) {
        var i = un.exec(n.slice(e, e + 1));
        return i ? ((t.u = +i[0]), e + i[0].length) : -1;
      }
      function yn(t, n, e) {
        var i = un.exec(n.slice(e, e + 2));
        return i ? ((t.U = +i[0]), e + i[0].length) : -1;
      }
      function vn(t, n, e) {
        var i = un.exec(n.slice(e, e + 2));
        return i ? ((t.V = +i[0]), e + i[0].length) : -1;
      }
      function gn(t, n, e) {
        var i = un.exec(n.slice(e, e + 2));
        return i ? ((t.W = +i[0]), e + i[0].length) : -1;
      }
      function dn(t, n, e) {
        var i = un.exec(n.slice(e, e + 4));
        return i ? ((t.y = +i[0]), e + i[0].length) : -1;
      }
      function mn(t, n, e) {
        var i = un.exec(n.slice(e, e + 2));
        return i ? ((t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3)), e + i[0].length) : -1;
      }
      function xn(t, n, e) {
        var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return i ? ((t.Z = i[1] ? 0 : -(i[2] + (i[3] || '00'))), e + i[0].length) : -1;
      }
      function wn(t, n, e) {
        var i = un.exec(n.slice(e, e + 1));
        return i ? ((t.q = 3 * i[0] - 3), e + i[0].length) : -1;
      }
      function Tn(t, n, e) {
        var i = un.exec(n.slice(e, e + 2));
        return i ? ((t.m = i[0] - 1), e + i[0].length) : -1;
      }
      function An(t, n, e) {
        var i = un.exec(n.slice(e, e + 2));
        return i ? ((t.d = +i[0]), e + i[0].length) : -1;
      }
      function bn(t, n, e) {
        var i = un.exec(n.slice(e, e + 3));
        return i ? ((t.m = 0), (t.d = +i[0]), e + i[0].length) : -1;
      }
      function Mn(t, n, e) {
        var i = un.exec(n.slice(e, e + 2));
        return i ? ((t.H = +i[0]), e + i[0].length) : -1;
      }
      function kn(t, n, e) {
        var i = un.exec(n.slice(e, e + 2));
        return i ? ((t.M = +i[0]), e + i[0].length) : -1;
      }
      function Cn(t, n, e) {
        var i = un.exec(n.slice(e, e + 2));
        return i ? ((t.S = +i[0]), e + i[0].length) : -1;
      }
      function Sn(t, n, e) {
        var i = un.exec(n.slice(e, e + 3));
        return i ? ((t.L = +i[0]), e + i[0].length) : -1;
      }
      function Nn(t, n, e) {
        var i = un.exec(n.slice(e, e + 6));
        return i ? ((t.L = Math.floor(i[0] / 1e3)), e + i[0].length) : -1;
      }
      function En(t, n, e) {
        var i = sn.exec(n.slice(e, e + 1));
        return i ? e + i[0].length : -1;
      }
      function Ln(t, n, e) {
        var i = un.exec(n.slice(e));
        return i ? ((t.Q = +i[0]), e + i[0].length) : -1;
      }
      function Dn(t, n, e) {
        var i = un.exec(n.slice(e));
        return i ? ((t.s = +i[0]), e + i[0].length) : -1;
      }
      function Un(t, n) {
        return cn(t.getDate(), n, 2);
      }
      function zn(t, n) {
        return cn(t.getHours(), n, 2);
      }
      function Pn(t, n) {
        return cn(t.getHours() % 12 || 12, n, 2);
      }
      function Fn(t, n) {
        return cn(1 + bt.count(Bt(t), t), n, 3);
      }
      function On(t, n) {
        return cn(t.getMilliseconds(), n, 3);
      }
      function Yn(t, n) {
        return On(t, n) + '000';
      }
      function $n(t, n) {
        return cn(t.getMonth() + 1, n, 2);
      }
      function qn(t, n) {
        return cn(t.getMinutes(), n, 2);
      }
      function Rn(t, n) {
        return cn(t.getSeconds(), n, 2);
      }
      function jn(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n;
      }
      function Hn(t, n) {
        return cn(St.count(Bt(t) - 1, t), n, 2);
      }
      function In(t) {
        var n = t.getDay();
        return n >= 4 || 0 === n ? Dt(t) : Dt.ceil(t);
      }
      function Bn(t, n) {
        return (t = In(t)), cn(Dt.count(Bt(t), t) + (4 === Bt(t).getDay()), n, 2);
      }
      function Xn(t) {
        return t.getDay();
      }
      function Vn(t, n) {
        return cn(Nt.count(Bt(t) - 1, t), n, 2);
      }
      function Zn(t, n) {
        return cn(t.getFullYear() % 100, n, 2);
      }
      function Wn(t, n) {
        return cn((t = In(t)).getFullYear() % 100, n, 2);
      }
      function Gn(t, n) {
        return cn(t.getFullYear() % 1e4, n, 4);
      }
      function Qn(t, n) {
        var e = t.getDay();
        return cn((t = e >= 4 || 0 === e ? Dt(t) : Dt.ceil(t)).getFullYear() % 1e4, n, 4);
      }
      function Jn(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? '-' : ((n *= -1), '+')) + cn((n / 60) | 0, '0', 2) + cn(n % 60, '0', 2);
      }
      function Kn(t, n) {
        return cn(t.getUTCDate(), n, 2);
      }
      function te(t, n) {
        return cn(t.getUTCHours(), n, 2);
      }
      function ne(t, n) {
        return cn(t.getUTCHours() % 12 || 12, n, 2);
      }
      function ee(t, n) {
        return cn(1 + Mt.count(Xt(t), t), n, 3);
      }
      function ie(t, n) {
        return cn(t.getUTCMilliseconds(), n, 3);
      }
      function re(t, n) {
        return ie(t, n) + '000';
      }
      function oe(t, n) {
        return cn(t.getUTCMonth() + 1, n, 2);
      }
      function ue(t, n) {
        return cn(t.getUTCMinutes(), n, 2);
      }
      function se(t, n) {
        return cn(t.getUTCSeconds(), n, 2);
      }
      function ae(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n;
      }
      function ce(t, n) {
        return cn(Ft.count(Xt(t) - 1, t), n, 2);
      }
      function he(t) {
        var n = t.getUTCDay();
        return n >= 4 || 0 === n ? qt(t) : qt.ceil(t);
      }
      function le(t, n) {
        return (t = he(t)), cn(qt.count(Xt(t), t) + (4 === Xt(t).getUTCDay()), n, 2);
      }
      function fe(t) {
        return t.getUTCDay();
      }
      function _e(t, n) {
        return cn(Ot.count(Xt(t) - 1, t), n, 2);
      }
      function pe(t, n) {
        return cn(t.getUTCFullYear() % 100, n, 2);
      }
      function ye(t, n) {
        return cn((t = he(t)).getUTCFullYear() % 100, n, 2);
      }
      function ve(t, n) {
        return cn(t.getUTCFullYear() % 1e4, n, 4);
      }
      function ge(t, n) {
        var e = t.getUTCDay();
        return cn((t = e >= 4 || 0 === e ? qt(t) : qt.ceil(t)).getUTCFullYear() % 1e4, n, 4);
      }
      function de() {
        return '+0000';
      }
      function me() {
        return '%';
      }
      function xe(t) {
        return +t;
      }
      function we(t) {
        return Math.floor(+t / 1e3);
      }
      function Te(t) {
        return new Date(t);
      }
      function Ae(t) {
        return t instanceof Date ? +t : +new Date(+t);
      }
      function be(t, n, e, i, r, o, u, s, a, c) {
        var h = M(),
          l = h.invert,
          f = h.domain,
          _ = c('.%L'),
          p = c(':%S'),
          y = c('%I:%M'),
          v = c('%I %p'),
          g = c('%a %d'),
          d = c('%b %d'),
          m = c('%B'),
          x = c('%Y');
        function w(t) {
          return (
            a(t) < t
              ? _
              : s(t) < t
                ? p
                : u(t) < t
                  ? y
                  : o(t) < t
                    ? v
                    : i(t) < t
                      ? r(t) < t
                        ? g
                        : d
                      : e(t) < t
                        ? m
                        : x
          )(t);
        }
        return (
          (h.invert = function (t) {
            return new Date(l(t));
          }),
          (h.domain = function (t) {
            return arguments.length ? f(Array.from(t, Ae)) : f().map(Te);
          }),
          (h.ticks = function (n) {
            var e = f();
            return t(e[0], e[e.length - 1], null == n ? 10 : n);
          }),
          (h.tickFormat = function (t, n) {
            return null == n ? w : c(n);
          }),
          (h.nice = function (t) {
            var e = f();
            return (
              (t && 'function' == typeof t.range) ||
                (t = n(e[0], e[e.length - 1], null == t ? 10 : t)),
              t ? f(P(e, t)) : h
            );
          }),
          (h.copy = function () {
            return A(h, be(t, n, e, i, r, o, u, s, a, c));
          }),
          h
        );
      }
      function Me() {
        return r.apply(
          be(Gt, Qt, Bt, Ht, St, bt, Tt, xt, mt, en).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function ke() {
        return r.apply(
          be(Zt, Wt, Xt, It, Ft, Mt, At, wt, mt, rn).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function Ce() {
        var t,
          n,
          e,
          i,
          r,
          o = 0,
          u = 1,
          s = m,
          a = !1;
        function c(n) {
          return null == n || isNaN((n = +n))
            ? r
            : s(0 === e ? 0.5 : ((n = (i(n) - t) * e), a ? Math.max(0, Math.min(1, n)) : n));
        }
        function h(t) {
          return function (n) {
            var e, i;
            return arguments.length ? (([e, i] = n), (s = t(e, i)), c) : [s(0), s(1)];
          };
        }
        return (
          (c.domain = function (r) {
            return arguments.length
              ? (([o, u] = r),
                (t = i((o = +o))),
                (n = i((u = +u))),
                (e = t === n ? 0 : 1 / (n - t)),
                c)
              : [o, u];
          }),
          (c.clamp = function (t) {
            return arguments.length ? ((a = !!t), c) : a;
          }),
          (c.interpolator = function (t) {
            return arguments.length ? ((s = t), c) : s;
          }),
          (c.range = h(p.A)),
          (c.rangeRound = h(v.A)),
          (c.unknown = function (t) {
            return arguments.length ? ((r = t), c) : r;
          }),
          function (r) {
            return (i = r), (t = r(o)), (n = r(u)), (e = t === n ? 0 : 1 / (n - t)), c;
          }
        );
      }
      function Se(t, n) {
        return n
          .domain(t.domain())
          .interpolator(t.interpolator())
          .clamp(t.clamp())
          .unknown(t.unknown());
      }
      function Ne() {
        var t = D(Ce()(m));
        return (
          (t.copy = function () {
            return Se(t, Ne());
          }),
          o.apply(t, arguments)
        );
      }
      function Ee() {
        var t = j(Ce()).domain([1, 10]);
        return (
          (t.copy = function () {
            return Se(t, Ee()).base(t.base());
          }),
          o.apply(t, arguments)
        );
      }
      function Le() {
        var t = X(Ce());
        return (
          (t.copy = function () {
            return Se(t, Le()).constant(t.constant());
          }),
          o.apply(t, arguments)
        );
      }
      function De() {
        var t = Q(Ce());
        return (
          (t.copy = function () {
            return Se(t, De()).exponent(t.exponent());
          }),
          o.apply(t, arguments)
        );
      }
      function Ue() {
        return De.apply(null, arguments).exponent(0.5);
      }
      function ze() {
        var t = [],
          n = m;
        function e(e) {
          if (null != e && !isNaN((e = +e))) return n(((0, _.Ay)(t, e, 1) - 1) / (t.length - 1));
        }
        return (
          (e.domain = function (n) {
            if (!arguments.length) return t.slice();
            t = [];
            for (let e of n) null == e || isNaN((e = +e)) || t.push(e);
            return t.sort(it.A), e;
          }),
          (e.interpolator = function (t) {
            return arguments.length ? ((n = t), e) : n;
          }),
          (e.range = function () {
            return t.map((e, i) => n(i / (t.length - 1)));
          }),
          (e.quantiles = function (n) {
            return Array.from({ length: n + 1 }, (e, i) => (0, et.Ay)(t, i / n));
          }),
          (e.copy = function () {
            return ze(n).domain(t);
          }),
          o.apply(e, arguments)
        );
      }
      (nn = (function (t) {
        var n = t.dateTime,
          e = t.date,
          i = t.time,
          r = t.periods,
          o = t.days,
          u = t.shortDays,
          s = t.months,
          a = t.shortMonths,
          c = ln(r),
          h = fn(r),
          l = ln(o),
          f = fn(o),
          _ = ln(u),
          p = fn(u),
          y = ln(s),
          v = fn(s),
          g = ln(a),
          d = fn(a),
          m = {
            a: function (t) {
              return u[t.getDay()];
            },
            A: function (t) {
              return o[t.getDay()];
            },
            b: function (t) {
              return a[t.getMonth()];
            },
            B: function (t) {
              return s[t.getMonth()];
            },
            c: null,
            d: Un,
            e: Un,
            f: Yn,
            g: Wn,
            G: Qn,
            H: zn,
            I: Pn,
            j: Fn,
            L: On,
            m: $n,
            M: qn,
            p: function (t) {
              return r[+(t.getHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getMonth() / 3);
            },
            Q: xe,
            s: we,
            S: Rn,
            u: jn,
            U: Hn,
            V: Bn,
            w: Xn,
            W: Vn,
            x: null,
            X: null,
            y: Zn,
            Y: Gn,
            Z: Jn,
            '%': me,
          },
          x = {
            a: function (t) {
              return u[t.getUTCDay()];
            },
            A: function (t) {
              return o[t.getUTCDay()];
            },
            b: function (t) {
              return a[t.getUTCMonth()];
            },
            B: function (t) {
              return s[t.getUTCMonth()];
            },
            c: null,
            d: Kn,
            e: Kn,
            f: re,
            g: ye,
            G: ge,
            H: te,
            I: ne,
            j: ee,
            L: ie,
            m: oe,
            M: ue,
            p: function (t) {
              return r[+(t.getUTCHours() >= 12)];
            },
            q: function (t) {
              return 1 + ~~(t.getUTCMonth() / 3);
            },
            Q: xe,
            s: we,
            S: se,
            u: ae,
            U: ce,
            V: le,
            w: fe,
            W: _e,
            x: null,
            X: null,
            y: pe,
            Y: ve,
            Z: de,
            '%': me,
          },
          w = {
            a: function (t, n, e) {
              var i = _.exec(n.slice(e));
              return i ? ((t.w = p.get(i[0].toLowerCase())), e + i[0].length) : -1;
            },
            A: function (t, n, e) {
              var i = l.exec(n.slice(e));
              return i ? ((t.w = f.get(i[0].toLowerCase())), e + i[0].length) : -1;
            },
            b: function (t, n, e) {
              var i = g.exec(n.slice(e));
              return i ? ((t.m = d.get(i[0].toLowerCase())), e + i[0].length) : -1;
            },
            B: function (t, n, e) {
              var i = y.exec(n.slice(e));
              return i ? ((t.m = v.get(i[0].toLowerCase())), e + i[0].length) : -1;
            },
            c: function (t, e, i) {
              return b(t, n, e, i);
            },
            d: An,
            e: An,
            f: Nn,
            g: mn,
            G: dn,
            H: Mn,
            I: Mn,
            j: bn,
            L: Sn,
            m: Tn,
            M: kn,
            p: function (t, n, e) {
              var i = c.exec(n.slice(e));
              return i ? ((t.p = h.get(i[0].toLowerCase())), e + i[0].length) : -1;
            },
            q: wn,
            Q: Ln,
            s: Dn,
            S: Cn,
            u: pn,
            U: yn,
            V: vn,
            w: _n,
            W: gn,
            x: function (t, n, i) {
              return b(t, e, n, i);
            },
            X: function (t, n, e) {
              return b(t, i, n, e);
            },
            y: mn,
            Y: dn,
            Z: xn,
            '%': En,
          };
        function T(t, n) {
          return function (e) {
            var i,
              r,
              o,
              u = [],
              s = -1,
              a = 0,
              c = t.length;
            for (e instanceof Date || (e = new Date(+e)); ++s < c; )
              37 === t.charCodeAt(s) &&
                (u.push(t.slice(a, s)),
                null != (r = on[(i = t.charAt(++s))])
                  ? (i = t.charAt(++s))
                  : (r = 'e' === i ? ' ' : '0'),
                (o = n[i]) && (i = o(e, r)),
                u.push(i),
                (a = s + 1));
            return u.push(t.slice(a, s)), u.join('');
          };
        }
        function A(t, n) {
          return function (e) {
            var i,
              r,
              o = tn(1900, void 0, 1);
            if (b(o, t, (e += ''), 0) != e.length) return null;
            if ('Q' in o) return new Date(o.Q);
            if ('s' in o) return new Date(1e3 * o.s + ('L' in o ? o.L : 0));
            if (
              (n && !('Z' in o) && (o.Z = 0),
              'p' in o && (o.H = (o.H % 12) + 12 * o.p),
              void 0 === o.m && (o.m = 'q' in o ? o.q : 0),
              'V' in o)
            ) {
              if (o.V < 1 || o.V > 53) return null;
              'w' in o || (o.w = 1),
                'Z' in o
                  ? ((r = (i = Kt(tn(o.y, 0, 1))).getUTCDay()),
                    (i = r > 4 || 0 === r ? Ot.ceil(i) : Ot(i)),
                    (i = Mt.offset(i, 7 * (o.V - 1))),
                    (o.y = i.getUTCFullYear()),
                    (o.m = i.getUTCMonth()),
                    (o.d = i.getUTCDate() + ((o.w + 6) % 7)))
                  : ((r = (i = Jt(tn(o.y, 0, 1))).getDay()),
                    (i = r > 4 || 0 === r ? Nt.ceil(i) : Nt(i)),
                    (i = bt.offset(i, 7 * (o.V - 1))),
                    (o.y = i.getFullYear()),
                    (o.m = i.getMonth()),
                    (o.d = i.getDate() + ((o.w + 6) % 7)));
            } else
              ('W' in o || 'U' in o) &&
                ('w' in o || (o.w = 'u' in o ? o.u % 7 : 'W' in o ? 1 : 0),
                (r = 'Z' in o ? Kt(tn(o.y, 0, 1)).getUTCDay() : Jt(tn(o.y, 0, 1)).getDay()),
                (o.m = 0),
                (o.d =
                  'W' in o
                    ? ((o.w + 6) % 7) + 7 * o.W - ((r + 5) % 7)
                    : o.w + 7 * o.U - ((r + 6) % 7)));
            return 'Z' in o ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Kt(o)) : Jt(o);
          };
        }
        function b(t, n, e, i) {
          for (var r, o, u = 0, s = n.length, a = e.length; u < s; ) {
            if (i >= a) return -1;
            if (37 === (r = n.charCodeAt(u++))) {
              if (
                ((r = n.charAt(u++)), !(o = w[r in on ? n.charAt(u++) : r]) || (i = o(t, e, i)) < 0)
              )
                return -1;
            } else if (r != e.charCodeAt(i++)) return -1;
          }
          return i;
        }
        return (
          (m.x = T(e, m)),
          (m.X = T(i, m)),
          (m.c = T(n, m)),
          (x.x = T(e, x)),
          (x.X = T(i, x)),
          (x.c = T(n, x)),
          {
            format: function (t) {
              var n = T((t += ''), m);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
            parse: function (t) {
              var n = A((t += ''), !1);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
            utcFormat: function (t) {
              var n = T((t += ''), x);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
            utcParse: function (t) {
              var n = A((t += ''), !0);
              return (
                (n.toString = function () {
                  return t;
                }),
                n
              );
            },
          }
        );
      })({
        dateTime: '%x, %X',
        date: '%-m/%-d/%Y',
        time: '%-I:%M:%S %p',
        periods: ['AM', 'PM'],
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        shortMonths: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      })),
        (en = nn.format),
        nn.parse,
        (rn = nn.utcFormat),
        nn.utcParse;
      var Pe = e(3104);
      function Fe() {
        var t,
          n,
          e,
          i,
          r,
          o,
          u,
          s = 0,
          a = 0.5,
          c = 1,
          h = 1,
          l = m,
          f = !1;
        function _(t) {
          return isNaN((t = +t))
            ? u
            : ((t = 0.5 + ((t = +o(t)) - n) * (h * t < h * n ? i : r)),
              l(f ? Math.max(0, Math.min(1, t)) : t));
        }
        function y(t) {
          return function (n) {
            var e, i, r;
            return arguments.length
              ? (([e, i, r] = n), (l = (0, Pe.A)(t, [e, i, r])), _)
              : [l(0), l(0.5), l(1)];
          };
        }
        return (
          (_.domain = function (u) {
            return arguments.length
              ? (([s, a, c] = u),
                (t = o((s = +s))),
                (n = o((a = +a))),
                (e = o((c = +c))),
                (i = t === n ? 0 : 0.5 / (n - t)),
                (r = n === e ? 0 : 0.5 / (e - n)),
                (h = n < t ? -1 : 1),
                _)
              : [s, a, c];
          }),
          (_.clamp = function (t) {
            return arguments.length ? ((f = !!t), _) : f;
          }),
          (_.interpolator = function (t) {
            return arguments.length ? ((l = t), _) : l;
          }),
          (_.range = y(p.A)),
          (_.rangeRound = y(v.A)),
          (_.unknown = function (t) {
            return arguments.length ? ((u = t), _) : u;
          }),
          function (u) {
            return (
              (o = u),
              (t = u(s)),
              (n = u(a)),
              (e = u(c)),
              (i = t === n ? 0 : 0.5 / (n - t)),
              (r = n === e ? 0 : 0.5 / (e - n)),
              (h = n < t ? -1 : 1),
              _
            );
          }
        );
      }
      function Oe() {
        var t = D(Fe()(m));
        return (
          (t.copy = function () {
            return Se(t, Oe());
          }),
          o.apply(t, arguments)
        );
      }
      function Ye() {
        var t = j(Fe()).domain([0.1, 1, 10]);
        return (
          (t.copy = function () {
            return Se(t, Ye()).base(t.base());
          }),
          o.apply(t, arguments)
        );
      }
      function $e() {
        var t = X(Fe());
        return (
          (t.copy = function () {
            return Se(t, $e()).constant(t.constant());
          }),
          o.apply(t, arguments)
        );
      }
      function qe() {
        var t = Q(Fe());
        return (
          (t.copy = function () {
            return Se(t, qe()).exponent(t.exponent());
          }),
          o.apply(t, arguments)
        );
      }
      function Re() {
        return qe.apply(null, arguments).exponent(0.5);
      }
    },
    5478: (t, n, e) => {
      'use strict';
      function i(t) {
        return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
      }
      e.d(n, { A: () => i });
    },
    3663: (t, n, e) => {
      'use strict';
      e.d(n, { A: () => s });
      var i = e(7268),
        r = e(7947);
      function o(t) {
        return function () {
          var n = this.ownerDocument,
            e = this.namespaceURI;
          return e === r.g && n.documentElement.namespaceURI === r.g
            ? n.createElement(t)
            : n.createElementNS(e, t);
        };
      }
      function u(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      function s(t) {
        var n = (0, i.A)(t);
        return (n.local ? u : o)(n);
      }
    },
    9062: (t, n, e) => {
      'use strict';
      e.r(n),
        e.d(n, {
          create: () => o,
          creator: () => i.A,
          local: () => s,
          matcher: () => c.A,
          namespace: () => h.A,
          namespaces: () => l.A,
          pointer: () => f.A,
          pointers: () => p,
          select: () => r.A,
          selectAll: () => g,
          selection: () => v.Ay,
          selector: () => d.A,
          selectorAll: () => m.A,
          style: () => x.j,
          window: () => w.A,
        });
      var i = e(3663),
        r = e(183);
      function o(t) {
        return (0, r.A)((0, i.A)(t).call(document.documentElement));
      }
      var u = 0;
      function s() {
        return new a();
      }
      function a() {
        this._ = '@' + (++u).toString(36);
      }
      a.prototype = s.prototype = {
        constructor: a,
        get: function (t) {
          for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
          return t[n];
        },
        set: function (t, n) {
          return (t[this._] = n);
        },
        remove: function (t) {
          return this._ in t && delete t[this._];
        },
        toString: function () {
          return this._;
        },
      };
      var c = e(6541),
        h = e(7268),
        l = e(7947),
        f = e(5970),
        _ = e(2324);
      function p(t, n) {
        return (
          t.target &&
            ((t = (0, _.A)(t)), void 0 === n && (n = t.currentTarget), (t = t.touches || [t])),
          Array.from(t, (t) => (0, f.A)(t, n))
        );
      }
      var y = e(5478),
        v = e(6452);
      function g(t) {
        return 'string' == typeof t
          ? new v.LN([document.querySelectorAll(t)], [document.documentElement])
          : new v.LN([(0, y.A)(t)], v.zr);
      }
      var d = e(574),
        m = e(747),
        x = e(3683),
        w = e(6747);
    },
    6541: (t, n, e) => {
      'use strict';
      function i(t) {
        return function () {
          return this.matches(t);
        };
      }
      function r(t) {
        return function (n) {
          return n.matches(t);
        };
      }
      e.d(n, { A: () => i, j: () => r });
    },
    7268: (t, n, e) => {
      'use strict';
      e.d(n, { A: () => r });
      var i = e(7947);
      function r(t) {
        var n = (t += ''),
          e = n.indexOf(':');
        return (
          e >= 0 && 'xmlns' !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
          i.A.hasOwnProperty(n) ? { space: i.A[n], local: t } : t
        );
      }
    },
    7947: (t, n, e) => {
      'use strict';
      e.d(n, { A: () => r, g: () => i });
      var i = 'http://www.w3.org/1999/xhtml';
      const r = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: i,
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/',
      };
    },
    5970: (t, n, e) => {
      'use strict';
      e.d(n, { A: () => r });
      var i = e(2324);
      function r(t, n) {
        if (((t = (0, i.A)(t)), void 0 === n && (n = t.currentTarget), n)) {
          var e = n.ownerSVGElement || n;
          if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return (
              (r.x = t.clientX),
              (r.y = t.clientY),
              [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
            );
          }
          if (n.getBoundingClientRect) {
            var o = n.getBoundingClientRect();
            return [t.clientX - o.left - n.clientLeft, t.clientY - o.top - n.clientTop];
          }
        }
        return [t.pageX, t.pageY];
      }
    },
    183: (t, n, e) => {
      'use strict';
      e.d(n, { A: () => r });
      var i = e(6452);
      function r(t) {
        return 'string' == typeof t
          ? new i.LN([[document.querySelector(t)]], [document.documentElement])
          : new i.LN([[t]], i.zr);
      }
    },
    6452: (t, n, e) => {
      'use strict';
      e.d(n, { LN: () => it, Ay: () => ot, zr: () => et });
      var i = e(574);
      var r = e(5478),
        o = e(747);
      var u = e(6541),
        s = Array.prototype.find;
      function a() {
        return this.firstElementChild;
      }
      var c = Array.prototype.filter;
      function h() {
        return Array.from(this.children);
      }
      function l(t) {
        return new Array(t.length);
      }
      function f(t, n) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = n);
      }
      function _(t, n, e, i, r, o) {
        for (var u, s = 0, a = n.length, c = o.length; s < c; ++s)
          (u = n[s]) ? ((u.__data__ = o[s]), (i[s] = u)) : (e[s] = new f(t, o[s]));
        for (; s < a; ++s) (u = n[s]) && (r[s] = u);
      }
      function p(t, n, e, i, r, o, u) {
        var s,
          a,
          c,
          h = new Map(),
          l = n.length,
          _ = o.length,
          p = new Array(l);
        for (s = 0; s < l; ++s)
          (a = n[s]) &&
            ((p[s] = c = u.call(a, a.__data__, s, n) + ''), h.has(c) ? (r[s] = a) : h.set(c, a));
        for (s = 0; s < _; ++s)
          (c = u.call(t, o[s], s, o) + ''),
            (a = h.get(c))
              ? ((i[s] = a), (a.__data__ = o[s]), h.delete(c))
              : (e[s] = new f(t, o[s]));
        for (s = 0; s < l; ++s) (a = n[s]) && h.get(p[s]) === a && (r[s] = a);
      }
      function y(t) {
        return t.__data__;
      }
      function v(t) {
        return 'object' == typeof t && 'length' in t ? t : Array.from(t);
      }
      function g(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }
      f.prototype = {
        constructor: f,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var d = e(7268);
      function m(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function x(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function w(t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      }
      function T(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      }
      function A(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }
      function b(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, e);
        };
      }
      var M = e(3683);
      function k(t) {
        return function () {
          delete this[t];
        };
      }
      function C(t, n) {
        return function () {
          this[t] = n;
        };
      }
      function S(t, n) {
        return function () {
          var e = n.apply(this, arguments);
          null == e ? delete this[t] : (this[t] = e);
        };
      }
      function N(t) {
        return t.trim().split(/^|\s+/);
      }
      function E(t) {
        return t.classList || new L(t);
      }
      function L(t) {
        (this._node = t), (this._names = N(t.getAttribute('class') || ''));
      }
      function D(t, n) {
        for (var e = E(t), i = -1, r = n.length; ++i < r; ) e.add(n[i]);
      }
      function U(t, n) {
        for (var e = E(t), i = -1, r = n.length; ++i < r; ) e.remove(n[i]);
      }
      function z(t) {
        return function () {
          D(this, t);
        };
      }
      function P(t) {
        return function () {
          U(this, t);
        };
      }
      function F(t, n) {
        return function () {
          (n.apply(this, arguments) ? D : U)(this, t);
        };
      }
      function O() {
        this.textContent = '';
      }
      function Y(t) {
        return function () {
          this.textContent = t;
        };
      }
      function $(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.textContent = null == n ? '' : n;
        };
      }
      function q() {
        this.innerHTML = '';
      }
      function R(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function j(t) {
        return function () {
          var n = t.apply(this, arguments);
          this.innerHTML = null == n ? '' : n;
        };
      }
      function H() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function I() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      L.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t), this._node.setAttribute('class', this._names.join(' ')));
        },
        remove: function (t) {
          var n = this._names.indexOf(t);
          n >= 0 &&
            (this._names.splice(n, 1), this._node.setAttribute('class', this._names.join(' ')));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      var B = e(3663);
      function X() {
        return null;
      }
      function V() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function Z() {
        var t = this.cloneNode(!1),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function W() {
        var t = this.cloneNode(!0),
          n = this.parentNode;
        return n ? n.insertBefore(t, this.nextSibling) : t;
      }
      function G(t) {
        return function () {
          var n = this.__on;
          if (n) {
            for (var e, i = 0, r = -1, o = n.length; i < o; ++i)
              (e = n[i]),
                (t.type && e.type !== t.type) || e.name !== t.name
                  ? (n[++r] = e)
                  : this.removeEventListener(e.type, e.listener, e.options);
            ++r ? (n.length = r) : delete this.__on;
          }
        };
      }
      function Q(t, n, e) {
        return function () {
          var i,
            r = this.__on,
            o = (function (t) {
              return function (n) {
                t.call(this, n, this.__data__);
              };
            })(n);
          if (r)
            for (var u = 0, s = r.length; u < s; ++u)
              if ((i = r[u]).type === t.type && i.name === t.name)
                return (
                  this.removeEventListener(i.type, i.listener, i.options),
                  this.addEventListener(i.type, (i.listener = o), (i.options = e)),
                  void (i.value = n)
                );
          this.addEventListener(t.type, o, e),
            (i = { type: t.type, name: t.name, value: n, listener: o, options: e }),
            r ? r.push(i) : (this.__on = [i]);
        };
      }
      var J = e(6747);
      function K(t, n, e) {
        var i = (0, J.A)(t),
          r = i.CustomEvent;
        'function' == typeof r
          ? (r = new r(n, e))
          : ((r = i.document.createEvent('Event')),
            e
              ? (r.initEvent(n, e.bubbles, e.cancelable), (r.detail = e.detail))
              : r.initEvent(n, !1, !1)),
          t.dispatchEvent(r);
      }
      function tt(t, n) {
        return function () {
          return K(this, t, n);
        };
      }
      function nt(t, n) {
        return function () {
          return K(this, t, n.apply(this, arguments));
        };
      }
      var et = [null];
      function it(t, n) {
        (this._groups = t), (this._parents = n);
      }
      function rt() {
        return new it([[document.documentElement]], et);
      }
      it.prototype = rt.prototype = {
        constructor: it,
        select: function (t) {
          'function' != typeof t && (t = (0, i.A)(t));
          for (var n = this._groups, e = n.length, r = new Array(e), o = 0; o < e; ++o)
            for (var u, s, a = n[o], c = a.length, h = (r[o] = new Array(c)), l = 0; l < c; ++l)
              (u = a[l]) &&
                (s = t.call(u, u.__data__, l, a)) &&
                ('__data__' in u && (s.__data__ = u.__data__), (h[l] = s));
          return new it(r, this._parents);
        },
        selectAll: function (t) {
          t =
            'function' == typeof t
              ? (function (t) {
                  return function () {
                    return (0, r.A)(t.apply(this, arguments));
                  };
                })(t)
              : (0, o.A)(t);
          for (var n = this._groups, e = n.length, i = [], u = [], s = 0; s < e; ++s)
            for (var a, c = n[s], h = c.length, l = 0; l < h; ++l)
              (a = c[l]) && (i.push(t.call(a, a.__data__, l, c)), u.push(a));
          return new it(i, u);
        },
        selectChild: function (t) {
          return this.select(
            null == t
              ? a
              : (function (t) {
                  return function () {
                    return s.call(this.children, t);
                  };
                })('function' == typeof t ? t : (0, u.j)(t))
          );
        },
        selectChildren: function (t) {
          return this.selectAll(
            null == t
              ? h
              : (function (t) {
                  return function () {
                    return c.call(this.children, t);
                  };
                })('function' == typeof t ? t : (0, u.j)(t))
          );
        },
        filter: function (t) {
          'function' != typeof t && (t = (0, u.A)(t));
          for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
            for (var o, s = n[r], a = s.length, c = (i[r] = []), h = 0; h < a; ++h)
              (o = s[h]) && t.call(o, o.__data__, h, s) && c.push(o);
          return new it(i, this._parents);
        },
        data: function (t, n) {
          if (!arguments.length) return Array.from(this, y);
          var e,
            i = n ? p : _,
            r = this._parents,
            o = this._groups;
          'function' != typeof t &&
            ((e = t),
            (t = function () {
              return e;
            }));
          for (
            var u = o.length, s = new Array(u), a = new Array(u), c = new Array(u), h = 0;
            h < u;
            ++h
          ) {
            var l = r[h],
              f = o[h],
              g = f.length,
              d = v(t.call(l, l && l.__data__, h, r)),
              m = d.length,
              x = (a[h] = new Array(m)),
              w = (s[h] = new Array(m));
            i(l, f, x, w, (c[h] = new Array(g)), d, n);
            for (var T, A, b = 0, M = 0; b < m; ++b)
              if ((T = x[b])) {
                for (b >= M && (M = b + 1); !(A = w[M]) && ++M < m; );
                T._next = A || null;
              }
          }
          return ((s = new it(s, r))._enter = a), (s._exit = c), s;
        },
        enter: function () {
          return new it(this._enter || this._groups.map(l), this._parents);
        },
        exit: function () {
          return new it(this._exit || this._groups.map(l), this._parents);
        },
        join: function (t, n, e) {
          var i = this.enter(),
            r = this,
            o = this.exit();
          return (
            'function' == typeof t ? (i = t(i)) && (i = i.selection()) : (i = i.append(t + '')),
            null != n && (r = n(r)) && (r = r.selection()),
            null == e ? o.remove() : e(o),
            i && r ? i.merge(r).order() : r
          );
        },
        merge: function (t) {
          for (
            var n = t.selection ? t.selection() : t,
              e = this._groups,
              i = n._groups,
              r = e.length,
              o = i.length,
              u = Math.min(r, o),
              s = new Array(r),
              a = 0;
            a < u;
            ++a
          )
            for (
              var c, h = e[a], l = i[a], f = h.length, _ = (s[a] = new Array(f)), p = 0;
              p < f;
              ++p
            )
              (c = h[p] || l[p]) && (_[p] = c);
          for (; a < r; ++a) s[a] = e[a];
          return new it(s, this._parents);
        },
        selection: function () {
          return this;
        },
        order: function () {
          for (var t = this._groups, n = -1, e = t.length; ++n < e; )
            for (var i, r = t[n], o = r.length - 1, u = r[o]; --o >= 0; )
              (i = r[o]) &&
                (u && 4 ^ i.compareDocumentPosition(u) && u.parentNode.insertBefore(i, u), (u = i));
          return this;
        },
        sort: function (t) {
          function n(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
          }
          t || (t = g);
          for (var e = this._groups, i = e.length, r = new Array(i), o = 0; o < i; ++o) {
            for (var u, s = e[o], a = s.length, c = (r[o] = new Array(a)), h = 0; h < a; ++h)
              (u = s[h]) && (c[h] = u);
            c.sort(n);
          }
          return new it(r, this._parents).order();
        },
        call: function () {
          var t = arguments[0];
          return (arguments[0] = this), t.apply(null, arguments), this;
        },
        nodes: function () {
          return Array.from(this);
        },
        node: function () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var i = t[n], r = 0, o = i.length; r < o; ++r) {
              var u = i[r];
              if (u) return u;
            }
          return null;
        },
        size: function () {
          let t = 0;
          for (const n of this) ++t;
          return t;
        },
        empty: function () {
          return !this.node();
        },
        each: function (t) {
          for (var n = this._groups, e = 0, i = n.length; e < i; ++e)
            for (var r, o = n[e], u = 0, s = o.length; u < s; ++u)
              (r = o[u]) && t.call(r, r.__data__, u, o);
          return this;
        },
        attr: function (t, n) {
          var e = (0, d.A)(t);
          if (arguments.length < 2) {
            var i = this.node();
            return e.local ? i.getAttributeNS(e.space, e.local) : i.getAttribute(e);
          }
          return this.each(
            (null == n
              ? e.local
                ? x
                : m
              : 'function' == typeof n
                ? e.local
                  ? b
                  : A
                : e.local
                  ? T
                  : w)(e, n)
          );
        },
        style: M.A,
        property: function (t, n) {
          return arguments.length > 1
            ? this.each((null == n ? k : 'function' == typeof n ? S : C)(t, n))
            : this.node()[t];
        },
        classed: function (t, n) {
          var e = N(t + '');
          if (arguments.length < 2) {
            for (var i = E(this.node()), r = -1, o = e.length; ++r < o; )
              if (!i.contains(e[r])) return !1;
            return !0;
          }
          return this.each(('function' == typeof n ? F : n ? z : P)(e, n));
        },
        text: function (t) {
          return arguments.length
            ? this.each(null == t ? O : ('function' == typeof t ? $ : Y)(t))
            : this.node().textContent;
        },
        html: function (t) {
          return arguments.length
            ? this.each(null == t ? q : ('function' == typeof t ? j : R)(t))
            : this.node().innerHTML;
        },
        raise: function () {
          return this.each(H);
        },
        lower: function () {
          return this.each(I);
        },
        append: function (t) {
          var n = 'function' == typeof t ? t : (0, B.A)(t);
          return this.select(function () {
            return this.appendChild(n.apply(this, arguments));
          });
        },
        insert: function (t, n) {
          var e = 'function' == typeof t ? t : (0, B.A)(t),
            r = null == n ? X : 'function' == typeof n ? n : (0, i.A)(n);
          return this.select(function () {
            return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
          });
        },
        remove: function () {
          return this.each(V);
        },
        clone: function (t) {
          return this.select(t ? W : Z);
        },
        datum: function (t) {
          return arguments.length ? this.property('__data__', t) : this.node().__data__;
        },
        on: function (t, n, e) {
          var i,
            r,
            o = (function (t) {
              return t
                .trim()
                .split(/^|\s+/)
                .map(function (t) {
                  var n = '',
                    e = t.indexOf('.');
                  return (
                    e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))), { type: t, name: n }
                  );
                });
            })(t + ''),
            u = o.length;
          if (!(arguments.length < 2)) {
            for (s = n ? Q : G, i = 0; i < u; ++i) this.each(s(o[i], n, e));
            return this;
          }
          var s = this.node().__on;
          if (s)
            for (var a, c = 0, h = s.length; c < h; ++c)
              for (i = 0, a = s[c]; i < u; ++i)
                if ((r = o[i]).type === a.type && r.name === a.name) return a.value;
        },
        dispatch: function (t, n) {
          return this.each(('function' == typeof n ? nt : tt)(t, n));
        },
        [Symbol.iterator]: function* () {
          for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
            for (var i, r = t[n], o = 0, u = r.length; o < u; ++o) (i = r[o]) && (yield i);
        },
      };
      const ot = rt;
    },
    3683: (t, n, e) => {
      'use strict';
      e.d(n, { A: () => s, j: () => a });
      var i = e(6747);
      function r(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function o(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      }
      function u(t, n, e) {
        return function () {
          var i = n.apply(this, arguments);
          null == i ? this.style.removeProperty(t) : this.style.setProperty(t, i, e);
        };
      }
      function s(t, n, e) {
        return arguments.length > 1
          ? this.each((null == n ? r : 'function' == typeof n ? u : o)(t, n, null == e ? '' : e))
          : a(this.node(), t);
      }
      function a(t, n) {
        return (
          t.style.getPropertyValue(n) || (0, i.A)(t).getComputedStyle(t, null).getPropertyValue(n)
        );
      }
    },
    574: (t, n, e) => {
      'use strict';
      function i() {}
      function r(t) {
        return null == t
          ? i
          : function () {
              return this.querySelector(t);
            };
      }
      e.d(n, { A: () => r });
    },
    747: (t, n, e) => {
      'use strict';
      function i() {
        return [];
      }
      function r(t) {
        return null == t
          ? i
          : function () {
              return this.querySelectorAll(t);
            };
      }
      e.d(n, { A: () => r });
    },
    2324: (t, n, e) => {
      'use strict';
      function i(t) {
        let n;
        for (; (n = t.sourceEvent); ) t = n;
        return t;
      }
      e.d(n, { A: () => i });
    },
    6747: (t, n, e) => {
      'use strict';
      function i(t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView
        );
      }
      e.d(n, { A: () => i });
    },
    6303: (t, n, e) => {
      'use strict';
      function i(t) {
        return function () {
          return t;
        };
      }
      e.r(n),
        e.d(n, {
          arc: () => N,
          area: () => O,
          areaRadial: () => X,
          curveBasis: () => Ft,
          curveBasisClosed: () => Yt,
          curveBasisOpen: () => qt,
          curveBumpX: () => G,
          curveBumpY: () => Q,
          curveBundle: () => jt,
          curveCardinal: () => Bt,
          curveCardinalClosed: () => Vt,
          curveCardinalOpen: () => Wt,
          curveCatmullRom: () => Jt,
          curveCatmullRomClosed: () => tn,
          curveCatmullRomOpen: () => en,
          curveLinear: () => U,
          curveLinearClosed: () => on,
          curveMonotoneX: () => _n,
          curveMonotoneY: () => pn,
          curveNatural: () => gn,
          curveStep: () => mn,
          curveStepAfter: () => wn,
          curveStepBefore: () => xn,
          line: () => F,
          lineRadial: () => B,
          link: () => nt,
          linkHorizontal: () => et,
          linkRadial: () => rt,
          linkVertical: () => it,
          pie: () => q,
          pointRadial: () => V,
          radialArea: () => X,
          radialLine: () => B,
          stack: () => kn,
          stackOffsetDiverging: () => Sn,
          stackOffsetExpand: () => Cn,
          stackOffsetNone: () => Tn,
          stackOffsetSilhouette: () => Nn,
          stackOffsetWiggle: () => En,
          stackOrderAppearance: () => Ln,
          stackOrderAscending: () => Un,
          stackOrderDescending: () => Pn,
          stackOrderInsideOut: () => Fn,
          stackOrderNone: () => An,
          stackOrderReverse: () => On,
          symbol: () => Dt,
          symbolAsterisk: () => ut,
          symbolCircle: () => st,
          symbolCross: () => at,
          symbolDiamond: () => lt,
          symbolDiamond2: () => ft,
          symbolPlus: () => _t,
          symbolSquare: () => pt,
          symbolSquare2: () => yt,
          symbolStar: () => mt,
          symbolTimes: () => Nt,
          symbolTriangle: () => wt,
          symbolTriangle2: () => At,
          symbolWye: () => St,
          symbolX: () => Nt,
          symbols: () => Et,
          symbolsFill: () => Et,
          symbolsStroke: () => Lt,
        });
      const r = Math.abs,
        o = Math.atan2,
        u = Math.cos,
        s = Math.max,
        a = Math.min,
        c = Math.sin,
        h = Math.sqrt,
        l = 1e-12,
        f = Math.PI,
        _ = f / 2,
        p = 2 * f;
      function y(t) {
        return t >= 1 ? _ : t <= -1 ? -_ : Math.asin(t);
      }
      const v = Math.PI,
        g = 2 * v,
        d = 1e-6,
        m = g - d;
      function x(t) {
        this._ += t[0];
        for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
      }
      class w {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ''),
            (this._append =
              null == t
                ? x
                : (function (t) {
                    let n = Math.floor(t);
                    if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
                    if (n > 15) return x;
                    const e = 10 ** n;
                    return function (t) {
                      this._ += t[0];
                      for (let n = 1, i = t.length; n < i; ++n)
                        this._ += Math.round(arguments[n] * e) / e + t[n];
                    };
                  })(t));
        }
        moveTo(t, n) {
          this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
        }
        closePath() {
          null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, n) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
        }
        quadraticCurveTo(t, n, e, i) {
          this._append`Q${+t},${+n},${(this._x1 = +e)},${(this._y1 = +i)}`;
        }
        bezierCurveTo(t, n, e, i, r, o) {
          this._append`C${+t},${+n},${+e},${+i},${(this._x1 = +r)},${(this._y1 = +o)}`;
        }
        arcTo(t, n, e, i, r) {
          if (((t = +t), (n = +n), (e = +e), (i = +i), (r = +r) < 0))
            throw new Error(`negative radius: ${r}`);
          let o = this._x1,
            u = this._y1,
            s = e - t,
            a = i - n,
            c = o - t,
            h = u - n,
            l = c * c + h * h;
          if (null === this._x1) this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
          else if (l > d)
            if (Math.abs(h * s - a * c) > d && r) {
              let f = e - o,
                _ = i - u,
                p = s * s + a * a,
                y = f * f + _ * _,
                g = Math.sqrt(p),
                m = Math.sqrt(l),
                x = r * Math.tan((v - Math.acos((p + l - y) / (2 * g * m))) / 2),
                w = x / m,
                T = x / g;
              Math.abs(w - 1) > d && this._append`L${t + w * c},${n + w * h}`,
                this
                  ._append`A${r},${r},0,0,${+(h * f > c * _)},${(this._x1 = t + T * s)},${(this._y1 = n + T * a)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
          else;
        }
        arc(t, n, e, i, r, o) {
          if (((t = +t), (n = +n), (o = !!o), (e = +e) < 0))
            throw new Error(`negative radius: ${e}`);
          let u = e * Math.cos(i),
            s = e * Math.sin(i),
            a = t + u,
            c = n + s,
            h = 1 ^ o,
            l = o ? i - r : r - i;
          null === this._x1
            ? this._append`M${a},${c}`
            : (Math.abs(this._x1 - a) > d || Math.abs(this._y1 - c) > d) &&
              this._append`L${a},${c}`,
            e &&
              (l < 0 && (l = (l % g) + g),
              l > m
                ? this
                    ._append`A${e},${e},0,1,${h},${t - u},${n - s}A${e},${e},0,1,${h},${(this._x1 = a)},${(this._y1 = c)}`
                : l > d &&
                  this
                    ._append`A${e},${e},0,${+(l >= v)},${h},${(this._x1 = t + e * Math.cos(r))},${(this._y1 = n + e * Math.sin(r))}`);
        }
        rect(t, n, e, i) {
          this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}h${(e = +e)}v${+i}h${-e}Z`;
        }
        toString() {
          return this._;
        }
      }
      function T(t) {
        let n = 3;
        return (
          (t.digits = function (e) {
            if (!arguments.length) return n;
            if (null == e) n = null;
            else {
              const t = Math.floor(e);
              if (!(t >= 0)) throw new RangeError(`invalid digits: ${e}`);
              n = t;
            }
            return t;
          }),
          () => new w(n)
        );
      }
      function A(t) {
        return t.innerRadius;
      }
      function b(t) {
        return t.outerRadius;
      }
      function M(t) {
        return t.startAngle;
      }
      function k(t) {
        return t.endAngle;
      }
      function C(t) {
        return t && t.padAngle;
      }
      function S(t, n, e, i, r, o, u) {
        var a = t - e,
          c = n - i,
          l = (u ? o : -o) / h(a * a + c * c),
          f = l * c,
          _ = -l * a,
          p = t + f,
          y = n + _,
          v = e + f,
          g = i + _,
          d = (p + v) / 2,
          m = (y + g) / 2,
          x = v - p,
          w = g - y,
          T = x * x + w * w,
          A = r - o,
          b = p * g - v * y,
          M = (w < 0 ? -1 : 1) * h(s(0, A * A * T - b * b)),
          k = (b * w - x * M) / T,
          C = (-b * x - w * M) / T,
          S = (b * w + x * M) / T,
          N = (-b * x + w * M) / T,
          E = k - d,
          L = C - m,
          D = S - d,
          U = N - m;
        return (
          E * E + L * L > D * D + U * U && ((k = S), (C = N)),
          { cx: k, cy: C, x01: -f, y01: -_, x11: k * (r / A - 1), y11: C * (r / A - 1) }
        );
      }
      function N() {
        var t = A,
          n = b,
          e = i(0),
          s = null,
          v = M,
          g = k,
          d = C,
          m = null,
          x = T(w);
        function w() {
          var i,
            w,
            T,
            A = +t.apply(this, arguments),
            b = +n.apply(this, arguments),
            M = v.apply(this, arguments) - _,
            k = g.apply(this, arguments) - _,
            C = r(k - M),
            N = k > M;
          if ((m || (m = i = x()), b < A && ((w = b), (b = A), (A = w)), b > l))
            if (C > p - l)
              m.moveTo(b * u(M), b * c(M)),
                m.arc(0, 0, b, M, k, !N),
                A > l && (m.moveTo(A * u(k), A * c(k)), m.arc(0, 0, A, k, M, N));
            else {
              var E,
                L,
                D = M,
                U = k,
                z = M,
                P = k,
                F = C,
                O = C,
                Y = d.apply(this, arguments) / 2,
                $ = Y > l && (s ? +s.apply(this, arguments) : h(A * A + b * b)),
                q = a(r(b - A) / 2, +e.apply(this, arguments)),
                R = q,
                j = q;
              if ($ > l) {
                var H = y(($ / A) * c(Y)),
                  I = y(($ / b) * c(Y));
                (F -= 2 * H) > l
                  ? ((z += H *= N ? 1 : -1), (P -= H))
                  : ((F = 0), (z = P = (M + k) / 2)),
                  (O -= 2 * I) > l
                    ? ((D += I *= N ? 1 : -1), (U -= I))
                    : ((O = 0), (D = U = (M + k) / 2));
              }
              var B = b * u(D),
                X = b * c(D),
                V = A * u(P),
                Z = A * c(P);
              if (q > l) {
                var W,
                  G = b * u(U),
                  Q = b * c(U),
                  J = A * u(z),
                  K = A * c(z);
                if (C < f)
                  if (
                    (W = (function (t, n, e, i, r, o, u, s) {
                      var a = e - t,
                        c = i - n,
                        h = u - r,
                        f = s - o,
                        _ = f * a - h * c;
                      if (!(_ * _ < l))
                        return [t + (_ = (h * (n - o) - f * (t - r)) / _) * a, n + _ * c];
                    })(B, X, J, K, G, Q, V, Z))
                  ) {
                    var tt = B - W[0],
                      nt = X - W[1],
                      et = G - W[0],
                      it = Q - W[1],
                      rt =
                        1 /
                        c(
                          ((T =
                            (tt * et + nt * it) / (h(tt * tt + nt * nt) * h(et * et + it * it))) > 1
                            ? 0
                            : T < -1
                              ? f
                              : Math.acos(T)) / 2
                        ),
                      ot = h(W[0] * W[0] + W[1] * W[1]);
                    (R = a(q, (A - ot) / (rt - 1))), (j = a(q, (b - ot) / (rt + 1)));
                  } else R = j = 0;
              }
              O > l
                ? j > l
                  ? ((E = S(J, K, B, X, b, j, N)),
                    (L = S(G, Q, V, Z, b, j, N)),
                    m.moveTo(E.cx + E.x01, E.cy + E.y01),
                    j < q
                      ? m.arc(E.cx, E.cy, j, o(E.y01, E.x01), o(L.y01, L.x01), !N)
                      : (m.arc(E.cx, E.cy, j, o(E.y01, E.x01), o(E.y11, E.x11), !N),
                        m.arc(
                          0,
                          0,
                          b,
                          o(E.cy + E.y11, E.cx + E.x11),
                          o(L.cy + L.y11, L.cx + L.x11),
                          !N
                        ),
                        m.arc(L.cx, L.cy, j, o(L.y11, L.x11), o(L.y01, L.x01), !N)))
                  : (m.moveTo(B, X), m.arc(0, 0, b, D, U, !N))
                : m.moveTo(B, X),
                A > l && F > l
                  ? R > l
                    ? ((E = S(V, Z, G, Q, A, -R, N)),
                      (L = S(B, X, J, K, A, -R, N)),
                      m.lineTo(E.cx + E.x01, E.cy + E.y01),
                      R < q
                        ? m.arc(E.cx, E.cy, R, o(E.y01, E.x01), o(L.y01, L.x01), !N)
                        : (m.arc(E.cx, E.cy, R, o(E.y01, E.x01), o(E.y11, E.x11), !N),
                          m.arc(
                            0,
                            0,
                            A,
                            o(E.cy + E.y11, E.cx + E.x11),
                            o(L.cy + L.y11, L.cx + L.x11),
                            N
                          ),
                          m.arc(L.cx, L.cy, R, o(L.y11, L.x11), o(L.y01, L.x01), !N)))
                    : m.arc(0, 0, A, P, z, N)
                  : m.lineTo(V, Z);
            }
          else m.moveTo(0, 0);
          if ((m.closePath(), i)) return (m = null), i + '' || null;
        }
        return (
          (w.centroid = function () {
            var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
              i = (+v.apply(this, arguments) + +g.apply(this, arguments)) / 2 - f / 2;
            return [u(i) * e, c(i) * e];
          }),
          (w.innerRadius = function (n) {
            return arguments.length ? ((t = 'function' == typeof n ? n : i(+n)), w) : t;
          }),
          (w.outerRadius = function (t) {
            return arguments.length ? ((n = 'function' == typeof t ? t : i(+t)), w) : n;
          }),
          (w.cornerRadius = function (t) {
            return arguments.length ? ((e = 'function' == typeof t ? t : i(+t)), w) : e;
          }),
          (w.padRadius = function (t) {
            return arguments.length
              ? ((s = null == t ? null : 'function' == typeof t ? t : i(+t)), w)
              : s;
          }),
          (w.startAngle = function (t) {
            return arguments.length ? ((v = 'function' == typeof t ? t : i(+t)), w) : v;
          }),
          (w.endAngle = function (t) {
            return arguments.length ? ((g = 'function' == typeof t ? t : i(+t)), w) : g;
          }),
          (w.padAngle = function (t) {
            return arguments.length ? ((d = 'function' == typeof t ? t : i(+t)), w) : d;
          }),
          (w.context = function (t) {
            return arguments.length ? ((m = null == t ? null : t), w) : m;
          }),
          w
        );
      }
      w.prototype;
      var E = Array.prototype.slice;
      function L(t) {
        return 'object' == typeof t && 'length' in t ? t : Array.from(t);
      }
      function D(t) {
        this._context = t;
      }
      function U(t) {
        return new D(t);
      }
      function z(t) {
        return t[0];
      }
      function P(t) {
        return t[1];
      }
      function F(t, n) {
        var e = i(!0),
          r = null,
          o = U,
          u = null,
          s = T(a);
        function a(i) {
          var a,
            c,
            h,
            l = (i = L(i)).length,
            f = !1;
          for (null == r && (u = o((h = s()))), a = 0; a <= l; ++a)
            !(a < l && e((c = i[a]), a, i)) === f && ((f = !f) ? u.lineStart() : u.lineEnd()),
              f && u.point(+t(c, a, i), +n(c, a, i));
          if (h) return (u = null), h + '' || null;
        }
        return (
          (t = 'function' == typeof t ? t : void 0 === t ? z : i(t)),
          (n = 'function' == typeof n ? n : void 0 === n ? P : i(n)),
          (a.x = function (n) {
            return arguments.length ? ((t = 'function' == typeof n ? n : i(+n)), a) : t;
          }),
          (a.y = function (t) {
            return arguments.length ? ((n = 'function' == typeof t ? t : i(+t)), a) : n;
          }),
          (a.defined = function (t) {
            return arguments.length ? ((e = 'function' == typeof t ? t : i(!!t)), a) : e;
          }),
          (a.curve = function (t) {
            return arguments.length ? ((o = t), null != r && (u = o(r)), a) : o;
          }),
          (a.context = function (t) {
            return arguments.length ? (null == t ? (r = u = null) : (u = o((r = t))), a) : r;
          }),
          a
        );
      }
      function O(t, n, e) {
        var r = null,
          o = i(!0),
          u = null,
          s = U,
          a = null,
          c = T(h);
        function h(i) {
          var h,
            l,
            f,
            _,
            p,
            y = (i = L(i)).length,
            v = !1,
            g = new Array(y),
            d = new Array(y);
          for (null == u && (a = s((p = c()))), h = 0; h <= y; ++h) {
            if (!(h < y && o((_ = i[h]), h, i)) === v)
              if ((v = !v)) (l = h), a.areaStart(), a.lineStart();
              else {
                for (a.lineEnd(), a.lineStart(), f = h - 1; f >= l; --f) a.point(g[f], d[f]);
                a.lineEnd(), a.areaEnd();
              }
            v &&
              ((g[h] = +t(_, h, i)),
              (d[h] = +n(_, h, i)),
              a.point(r ? +r(_, h, i) : g[h], e ? +e(_, h, i) : d[h]));
          }
          if (p) return (a = null), p + '' || null;
        }
        function l() {
          return F().defined(o).curve(s).context(u);
        }
        return (
          (t = 'function' == typeof t ? t : void 0 === t ? z : i(+t)),
          (n = 'function' == typeof n ? n : i(void 0 === n ? 0 : +n)),
          (e = 'function' == typeof e ? e : void 0 === e ? P : i(+e)),
          (h.x = function (n) {
            return arguments.length ? ((t = 'function' == typeof n ? n : i(+n)), (r = null), h) : t;
          }),
          (h.x0 = function (n) {
            return arguments.length ? ((t = 'function' == typeof n ? n : i(+n)), h) : t;
          }),
          (h.x1 = function (t) {
            return arguments.length
              ? ((r = null == t ? null : 'function' == typeof t ? t : i(+t)), h)
              : r;
          }),
          (h.y = function (t) {
            return arguments.length ? ((n = 'function' == typeof t ? t : i(+t)), (e = null), h) : n;
          }),
          (h.y0 = function (t) {
            return arguments.length ? ((n = 'function' == typeof t ? t : i(+t)), h) : n;
          }),
          (h.y1 = function (t) {
            return arguments.length
              ? ((e = null == t ? null : 'function' == typeof t ? t : i(+t)), h)
              : e;
          }),
          (h.lineX0 = h.lineY0 =
            function () {
              return l().x(t).y(n);
            }),
          (h.lineY1 = function () {
            return l().x(t).y(e);
          }),
          (h.lineX1 = function () {
            return l().x(r).y(n);
          }),
          (h.defined = function (t) {
            return arguments.length ? ((o = 'function' == typeof t ? t : i(!!t)), h) : o;
          }),
          (h.curve = function (t) {
            return arguments.length ? ((s = t), null != u && (a = s(u)), h) : s;
          }),
          (h.context = function (t) {
            return arguments.length ? (null == t ? (u = a = null) : (a = s((u = t))), h) : u;
          }),
          h
        );
      }
      function Y(t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      }
      function $(t) {
        return t;
      }
      function q() {
        var t = $,
          n = Y,
          e = null,
          r = i(0),
          o = i(p),
          u = i(0);
        function s(i) {
          var s,
            a,
            c,
            h,
            l,
            f = (i = L(i)).length,
            _ = 0,
            y = new Array(f),
            v = new Array(f),
            g = +r.apply(this, arguments),
            d = Math.min(p, Math.max(-p, o.apply(this, arguments) - g)),
            m = Math.min(Math.abs(d) / f, u.apply(this, arguments)),
            x = m * (d < 0 ? -1 : 1);
          for (s = 0; s < f; ++s) (l = v[(y[s] = s)] = +t(i[s], s, i)) > 0 && (_ += l);
          for (
            null != n
              ? y.sort(function (t, e) {
                  return n(v[t], v[e]);
                })
              : null != e &&
                y.sort(function (t, n) {
                  return e(i[t], i[n]);
                }),
              s = 0,
              c = _ ? (d - f * x) / _ : 0;
            s < f;
            ++s, g = h
          )
            (a = y[s]),
              (h = g + ((l = v[a]) > 0 ? l * c : 0) + x),
              (v[a] = { data: i[a], index: s, value: l, startAngle: g, endAngle: h, padAngle: m });
          return v;
        }
        return (
          (s.value = function (n) {
            return arguments.length ? ((t = 'function' == typeof n ? n : i(+n)), s) : t;
          }),
          (s.sortValues = function (t) {
            return arguments.length ? ((n = t), (e = null), s) : n;
          }),
          (s.sort = function (t) {
            return arguments.length ? ((e = t), (n = null), s) : e;
          }),
          (s.startAngle = function (t) {
            return arguments.length ? ((r = 'function' == typeof t ? t : i(+t)), s) : r;
          }),
          (s.endAngle = function (t) {
            return arguments.length ? ((o = 'function' == typeof t ? t : i(+t)), s) : o;
          }),
          (s.padAngle = function (t) {
            return arguments.length ? ((u = 'function' == typeof t ? t : i(+t)), s) : u;
          }),
          s
        );
      }
      D.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, n);
          }
        },
      };
      var R = H(U);
      function j(t) {
        this._curve = t;
      }
      function H(t) {
        function n(n) {
          return new j(t(n));
        }
        return (n._curve = t), n;
      }
      function I(t) {
        var n = t.curve;
        return (
          (t.angle = t.x),
          delete t.x,
          (t.radius = t.y),
          delete t.y,
          (t.curve = function (t) {
            return arguments.length ? n(H(t)) : n()._curve;
          }),
          t
        );
      }
      function B() {
        return I(F().curve(R));
      }
      function X() {
        var t = O().curve(R),
          n = t.curve,
          e = t.lineX0,
          i = t.lineX1,
          r = t.lineY0,
          o = t.lineY1;
        return (
          (t.angle = t.x),
          delete t.x,
          (t.startAngle = t.x0),
          delete t.x0,
          (t.endAngle = t.x1),
          delete t.x1,
          (t.radius = t.y),
          delete t.y,
          (t.innerRadius = t.y0),
          delete t.y0,
          (t.outerRadius = t.y1),
          delete t.y1,
          (t.lineStartAngle = function () {
            return I(e());
          }),
          delete t.lineX0,
          (t.lineEndAngle = function () {
            return I(i());
          }),
          delete t.lineX1,
          (t.lineInnerRadius = function () {
            return I(r());
          }),
          delete t.lineY0,
          (t.lineOuterRadius = function () {
            return I(o());
          }),
          delete t.lineY1,
          (t.curve = function (t) {
            return arguments.length ? n(H(t)) : n()._curve;
          }),
          t
        );
      }
      function V(t, n) {
        return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
      }
      j.prototype = {
        areaStart: function () {
          this._curve.areaStart();
        },
        areaEnd: function () {
          this._curve.areaEnd();
        },
        lineStart: function () {
          this._curve.lineStart();
        },
        lineEnd: function () {
          this._curve.lineEnd();
        },
        point: function (t, n) {
          this._curve.point(n * Math.sin(t), n * -Math.cos(t));
        },
      };
      class Z {
        constructor(t, n) {
          (this._context = t), (this._x = n);
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        }
        point(t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + t) / 2),
                    this._y0,
                    this._x0,
                    n,
                    t,
                    n
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + n) / 2),
                    t,
                    this._y0,
                    t,
                    n
                  );
          }
          (this._x0 = t), (this._y0 = n);
        }
      }
      class W {
        constructor(t) {
          this._context = t;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {}
        point(t, n) {
          if (((t = +t), (n = +n), 0 === this._point)) this._point = 1;
          else {
            const e = V(this._x0, this._y0),
              i = V(this._x0, (this._y0 = (this._y0 + n) / 2)),
              r = V(t, this._y0),
              o = V(t, n);
            this._context.moveTo(...e), this._context.bezierCurveTo(...i, ...r, ...o);
          }
          (this._x0 = t), (this._y0 = n);
        }
      }
      function G(t) {
        return new Z(t, !0);
      }
      function Q(t) {
        return new Z(t, !1);
      }
      function J(t) {
        return new W(t);
      }
      function K(t) {
        return t.source;
      }
      function tt(t) {
        return t.target;
      }
      function nt(t) {
        let n = K,
          e = tt,
          r = z,
          o = P,
          u = null,
          s = null,
          a = T(c);
        function c() {
          let i;
          const c = E.call(arguments),
            h = n.apply(this, c),
            l = e.apply(this, c);
          if (
            (null == u && (s = t((i = a()))),
            s.lineStart(),
            (c[0] = h),
            s.point(+r.apply(this, c), +o.apply(this, c)),
            (c[0] = l),
            s.point(+r.apply(this, c), +o.apply(this, c)),
            s.lineEnd(),
            i)
          )
            return (s = null), i + '' || null;
        }
        return (
          (c.source = function (t) {
            return arguments.length ? ((n = t), c) : n;
          }),
          (c.target = function (t) {
            return arguments.length ? ((e = t), c) : e;
          }),
          (c.x = function (t) {
            return arguments.length ? ((r = 'function' == typeof t ? t : i(+t)), c) : r;
          }),
          (c.y = function (t) {
            return arguments.length ? ((o = 'function' == typeof t ? t : i(+t)), c) : o;
          }),
          (c.context = function (n) {
            return arguments.length ? (null == n ? (u = s = null) : (s = t((u = n))), c) : u;
          }),
          c
        );
      }
      function et() {
        return nt(G);
      }
      function it() {
        return nt(Q);
      }
      function rt() {
        const t = nt(J);
        return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
      }
      const ot = h(3),
        ut = {
          draw(t, n) {
            const e = 0.59436 * h(n + a(n / 28, 0.75)),
              i = e / 2,
              r = i * ot;
            t.moveTo(0, e),
              t.lineTo(0, -e),
              t.moveTo(-r, -i),
              t.lineTo(r, i),
              t.moveTo(-r, i),
              t.lineTo(r, -i);
          },
        },
        st = {
          draw(t, n) {
            const e = h(n / f);
            t.moveTo(e, 0), t.arc(0, 0, e, 0, p);
          },
        },
        at = {
          draw(t, n) {
            const e = h(n / 5) / 2;
            t.moveTo(-3 * e, -e),
              t.lineTo(-e, -e),
              t.lineTo(-e, -3 * e),
              t.lineTo(e, -3 * e),
              t.lineTo(e, -e),
              t.lineTo(3 * e, -e),
              t.lineTo(3 * e, e),
              t.lineTo(e, e),
              t.lineTo(e, 3 * e),
              t.lineTo(-e, 3 * e),
              t.lineTo(-e, e),
              t.lineTo(-3 * e, e),
              t.closePath();
          },
        },
        ct = h(1 / 3),
        ht = 2 * ct,
        lt = {
          draw(t, n) {
            const e = h(n / ht),
              i = e * ct;
            t.moveTo(0, -e), t.lineTo(i, 0), t.lineTo(0, e), t.lineTo(-i, 0), t.closePath();
          },
        },
        ft = {
          draw(t, n) {
            const e = 0.62625 * h(n);
            t.moveTo(0, -e), t.lineTo(e, 0), t.lineTo(0, e), t.lineTo(-e, 0), t.closePath();
          },
        },
        _t = {
          draw(t, n) {
            const e = 0.87559 * h(n - a(n / 7, 2));
            t.moveTo(-e, 0), t.lineTo(e, 0), t.moveTo(0, e), t.lineTo(0, -e);
          },
        },
        pt = {
          draw(t, n) {
            const e = h(n),
              i = -e / 2;
            t.rect(i, i, e, e);
          },
        },
        yt = {
          draw(t, n) {
            const e = 0.4431 * h(n);
            t.moveTo(e, e), t.lineTo(e, -e), t.lineTo(-e, -e), t.lineTo(-e, e), t.closePath();
          },
        },
        vt = c(f / 10) / c((7 * f) / 10),
        gt = c(p / 10) * vt,
        dt = -u(p / 10) * vt,
        mt = {
          draw(t, n) {
            const e = h(0.8908130915292852 * n),
              i = gt * e,
              r = dt * e;
            t.moveTo(0, -e), t.lineTo(i, r);
            for (let n = 1; n < 5; ++n) {
              const o = (p * n) / 5,
                s = u(o),
                a = c(o);
              t.lineTo(a * e, -s * e), t.lineTo(s * i - a * r, a * i + s * r);
            }
            t.closePath();
          },
        },
        xt = h(3),
        wt = {
          draw(t, n) {
            const e = -h(n / (3 * xt));
            t.moveTo(0, 2 * e), t.lineTo(-xt * e, -e), t.lineTo(xt * e, -e), t.closePath();
          },
        },
        Tt = h(3),
        At = {
          draw(t, n) {
            const e = 0.6824 * h(n),
              i = e / 2,
              r = (e * Tt) / 2;
            t.moveTo(0, -e), t.lineTo(r, i), t.lineTo(-r, i), t.closePath();
          },
        },
        bt = -0.5,
        Mt = h(3) / 2,
        kt = 1 / h(12),
        Ct = 3 * (kt / 2 + 1),
        St = {
          draw(t, n) {
            const e = h(n / Ct),
              i = e / 2,
              r = e * kt,
              o = i,
              u = e * kt + e,
              s = -o,
              a = u;
            t.moveTo(i, r),
              t.lineTo(o, u),
              t.lineTo(s, a),
              t.lineTo(bt * i - Mt * r, Mt * i + bt * r),
              t.lineTo(bt * o - Mt * u, Mt * o + bt * u),
              t.lineTo(bt * s - Mt * a, Mt * s + bt * a),
              t.lineTo(bt * i + Mt * r, bt * r - Mt * i),
              t.lineTo(bt * o + Mt * u, bt * u - Mt * o),
              t.lineTo(bt * s + Mt * a, bt * a - Mt * s),
              t.closePath();
          },
        },
        Nt = {
          draw(t, n) {
            const e = 0.6189 * h(n - a(n / 6, 1.7));
            t.moveTo(-e, -e), t.lineTo(e, e), t.moveTo(-e, e), t.lineTo(e, -e);
          },
        },
        Et = [st, at, lt, pt, mt, wt, St],
        Lt = [st, _t, Nt, At, ut, yt, ft];
      function Dt(t, n) {
        let e = null,
          r = T(o);
        function o() {
          let i;
          if ((e || (e = i = r()), t.apply(this, arguments).draw(e, +n.apply(this, arguments)), i))
            return (e = null), i + '' || null;
        }
        return (
          (t = 'function' == typeof t ? t : i(t || st)),
          (n = 'function' == typeof n ? n : i(void 0 === n ? 64 : +n)),
          (o.type = function (n) {
            return arguments.length ? ((t = 'function' == typeof n ? n : i(n)), o) : t;
          }),
          (o.size = function (t) {
            return arguments.length ? ((n = 'function' == typeof t ? t : i(+t)), o) : n;
          }),
          (o.context = function (t) {
            return arguments.length ? ((e = null == t ? null : t), o) : e;
          }),
          o
        );
      }
      function Ut() {}
      function zt(t, n, e) {
        t._context.bezierCurveTo(
          (2 * t._x0 + t._x1) / 3,
          (2 * t._y0 + t._y1) / 3,
          (t._x0 + 2 * t._x1) / 3,
          (t._y0 + 2 * t._y1) / 3,
          (t._x0 + 4 * t._x1 + n) / 6,
          (t._y0 + 4 * t._y1 + e) / 6
        );
      }
      function Pt(t) {
        this._context = t;
      }
      function Ft(t) {
        return new Pt(t);
      }
      function Ot(t) {
        this._context = t;
      }
      function Yt(t) {
        return new Ot(t);
      }
      function $t(t) {
        this._context = t;
      }
      function qt(t) {
        return new $t(t);
      }
      function Rt(t, n) {
        (this._basis = new Pt(t)), (this._beta = n);
      }
      (Pt.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              zt(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
              zt(this, t, n);
          }
          (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
        },
      }),
        (Ot.prototype = {
          areaStart: Ut,
          areaEnd: Ut,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                this._context.moveTo(this._x2, this._y2), this._context.closePath();
                break;
              case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath();
                break;
              case 3:
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
            }
          },
          point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = t), (this._y2 = n);
                break;
              case 1:
                (this._point = 2), (this._x3 = t), (this._y3 = n);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = t),
                  (this._y4 = n),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + t) / 6,
                    (this._y0 + 4 * this._y1 + n) / 6
                  );
                break;
              default:
                zt(this, t, n);
            }
            (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
          },
        }),
        ($t.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var e = (this._x0 + 4 * this._x1 + t) / 6,
                  i = (this._y0 + 4 * this._y1 + n) / 6;
                this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
                break;
              case 3:
                this._point = 4;
              default:
                zt(this, t, n);
            }
            (this._x0 = this._x1), (this._x1 = t), (this._y0 = this._y1), (this._y1 = n);
          },
        }),
        (Rt.prototype = {
          lineStart: function () {
            (this._x = []), (this._y = []), this._basis.lineStart();
          },
          lineEnd: function () {
            var t = this._x,
              n = this._y,
              e = t.length - 1;
            if (e > 0)
              for (var i, r = t[0], o = n[0], u = t[e] - r, s = n[e] - o, a = -1; ++a <= e; )
                (i = a / e),
                  this._basis.point(
                    this._beta * t[a] + (1 - this._beta) * (r + i * u),
                    this._beta * n[a] + (1 - this._beta) * (o + i * s)
                  );
            (this._x = this._y = null), this._basis.lineEnd();
          },
          point: function (t, n) {
            this._x.push(+t), this._y.push(+n);
          },
        });
      const jt = (function t(n) {
        function e(t) {
          return 1 === n ? new Pt(t) : new Rt(t, n);
        }
        return (
          (e.beta = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.85);
      function Ht(t, n, e) {
        t._context.bezierCurveTo(
          t._x1 + t._k * (t._x2 - t._x0),
          t._y1 + t._k * (t._y2 - t._y0),
          t._x2 + t._k * (t._x1 - n),
          t._y2 + t._k * (t._y1 - e),
          t._x2,
          t._y2
        );
      }
      function It(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      It.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              Ht(this, this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              (this._point = 2), (this._x1 = t), (this._y1 = n);
              break;
            case 2:
              this._point = 3;
            default:
              Ht(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      const Bt = (function t(n) {
        function e(t) {
          return new It(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function Xt(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      Xt.prototype = {
        areaStart: Ut,
        areaEnd: Ut,
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3), this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3), this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              Ht(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      const Vt = (function t(n) {
        function e(t) {
          return new Xt(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function Zt(t, n) {
        (this._context = t), (this._k = (1 - n) / 6);
      }
      Zt.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              Ht(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      const Wt = (function t(n) {
        function e(t) {
          return new Zt(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0);
      function Gt(t, n, e) {
        var i = t._x1,
          r = t._y1,
          o = t._x2,
          u = t._y2;
        if (t._l01_a > l) {
          var s = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            a = 3 * t._l01_a * (t._l01_a + t._l12_a);
          (i = (i * s - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / a),
            (r = (r * s - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / a);
        }
        if (t._l23_a > l) {
          var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            h = 3 * t._l23_a * (t._l23_a + t._l12_a);
          (o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / h),
            (u = (u * c + t._y1 * t._l23_2a - e * t._l12_2a) / h);
        }
        t._context.bezierCurveTo(i, r, o, u, t._x2, t._y2);
      }
      function Qt(t, n) {
        (this._context = t), (this._alpha = n);
      }
      Qt.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              this.point(this._x2, this._y2);
          }
          (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + i * i, this._alpha)));
          }
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
            default:
              Gt(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      const Jt = (function t(n) {
        function e(t) {
          return n ? new Qt(t, n) : new It(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function Kt(t, n) {
        (this._context = t), (this._alpha = n);
      }
      Kt.prototype = {
        areaStart: Ut,
        areaEnd: Ut,
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._x5 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
            this._y5 =
              NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x3, this._y3), this._context.closePath();
              break;
            case 2:
              this._context.lineTo(this._x3, this._y3), this._context.closePath();
              break;
            case 3:
              this.point(this._x3, this._y3),
                this.point(this._x4, this._y4),
                this.point(this._x5, this._y5);
          }
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + i * i, this._alpha)));
          }
          switch (this._point) {
            case 0:
              (this._point = 1), (this._x3 = t), (this._y3 = n);
              break;
            case 1:
              (this._point = 2), this._context.moveTo((this._x4 = t), (this._y4 = n));
              break;
            case 2:
              (this._point = 3), (this._x5 = t), (this._y5 = n);
              break;
            default:
              Gt(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      const tn = (function t(n) {
        function e(t) {
          return n ? new Kt(t, n) : new Xt(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function nn(t, n) {
        (this._context = t), (this._alpha = n);
      }
      nn.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._l01_a =
              this._l12_a =
              this._l23_a =
              this._l01_2a =
              this._l12_2a =
              this._l23_2a =
              this._point =
                0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          if (((t = +t), (n = +n), this._point)) {
            var e = this._x2 - t,
              i = this._y2 - n;
            this._l23_a = Math.sqrt((this._l23_2a = Math.pow(e * e + i * i, this._alpha)));
          }
          switch (this._point) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._line
                  ? this._context.lineTo(this._x2, this._y2)
                  : this._context.moveTo(this._x2, this._y2);
              break;
            case 3:
              this._point = 4;
            default:
              Gt(this, t, n);
          }
          (this._l01_a = this._l12_a),
            (this._l12_a = this._l23_a),
            (this._l01_2a = this._l12_2a),
            (this._l12_2a = this._l23_2a),
            (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      };
      const en = (function t(n) {
        function e(t) {
          return n ? new nn(t, n) : new Zt(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5);
      function rn(t) {
        this._context = t;
      }
      function on(t) {
        return new rn(t);
      }
      function un(t) {
        return t < 0 ? -1 : 1;
      }
      function sn(t, n, e) {
        var i = t._x1 - t._x0,
          r = n - t._x1,
          o = (t._y1 - t._y0) / (i || (r < 0 && -0)),
          u = (e - t._y1) / (r || (i < 0 && -0)),
          s = (o * r + u * i) / (i + r);
        return (un(o) + un(u)) * Math.min(Math.abs(o), Math.abs(u), 0.5 * Math.abs(s)) || 0;
      }
      function an(t, n) {
        var e = t._x1 - t._x0;
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
      }
      function cn(t, n, e) {
        var i = t._x0,
          r = t._y0,
          o = t._x1,
          u = t._y1,
          s = (o - i) / 3;
        t._context.bezierCurveTo(i + s, r + s * n, o - s, u - s * e, o, u);
      }
      function hn(t) {
        this._context = t;
      }
      function ln(t) {
        this._context = new fn(t);
      }
      function fn(t) {
        this._context = t;
      }
      function _n(t) {
        return new hn(t);
      }
      function pn(t) {
        return new ln(t);
      }
      function yn(t) {
        this._context = t;
      }
      function vn(t) {
        var n,
          e,
          i = t.length - 1,
          r = new Array(i),
          o = new Array(i),
          u = new Array(i);
        for (r[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < i - 1; ++n)
          (r[n] = 1), (o[n] = 4), (u[n] = 4 * t[n] + 2 * t[n + 1]);
        for (r[i - 1] = 2, o[i - 1] = 7, u[i - 1] = 8 * t[i - 1] + t[i], n = 1; n < i; ++n)
          (e = r[n] / o[n - 1]), (o[n] -= e), (u[n] -= e * u[n - 1]);
        for (r[i - 1] = u[i - 1] / o[i - 1], n = i - 2; n >= 0; --n)
          r[n] = (u[n] - r[n + 1]) / o[n];
        for (o[i - 1] = (t[i] + r[i - 1]) / 2, n = 0; n < i - 1; ++n)
          o[n] = 2 * t[n + 1] - r[n + 1];
        return [r, o];
      }
      function gn(t) {
        return new yn(t);
      }
      function dn(t, n) {
        (this._context = t), (this._t = n);
      }
      function mn(t) {
        return new dn(t, 0.5);
      }
      function xn(t) {
        return new dn(t, 0);
      }
      function wn(t) {
        return new dn(t, 1);
      }
      function Tn(t, n) {
        if ((r = t.length) > 1)
          for (var e, i, r, o = 1, u = t[n[0]], s = u.length; o < r; ++o)
            for (i = u, u = t[n[o]], e = 0; e < s; ++e)
              u[e][1] += u[e][0] = isNaN(i[e][1]) ? i[e][0] : i[e][1];
      }
      function An(t) {
        for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
        return e;
      }
      function bn(t, n) {
        return t[n];
      }
      function Mn(t) {
        const n = [];
        return (n.key = t), n;
      }
      function kn() {
        var t = i([]),
          n = An,
          e = Tn,
          r = bn;
        function o(i) {
          var o,
            u,
            s = Array.from(t.apply(this, arguments), Mn),
            a = s.length,
            c = -1;
          for (const t of i)
            for (o = 0, ++c; o < a; ++o) (s[o][c] = [0, +r(t, s[o].key, c, i)]).data = t;
          for (o = 0, u = L(n(s)); o < a; ++o) s[u[o]].index = o;
          return e(s, u), s;
        }
        return (
          (o.keys = function (n) {
            return arguments.length ? ((t = 'function' == typeof n ? n : i(Array.from(n))), o) : t;
          }),
          (o.value = function (t) {
            return arguments.length ? ((r = 'function' == typeof t ? t : i(+t)), o) : r;
          }),
          (o.order = function (t) {
            return arguments.length
              ? ((n = null == t ? An : 'function' == typeof t ? t : i(Array.from(t))), o)
              : n;
          }),
          (o.offset = function (t) {
            return arguments.length ? ((e = null == t ? Tn : t), o) : e;
          }),
          o
        );
      }
      function Cn(t, n) {
        if ((i = t.length) > 0) {
          for (var e, i, r, o = 0, u = t[0].length; o < u; ++o) {
            for (r = e = 0; e < i; ++e) r += t[e][o][1] || 0;
            if (r) for (e = 0; e < i; ++e) t[e][o][1] /= r;
          }
          Tn(t, n);
        }
      }
      function Sn(t, n) {
        if ((s = t.length) > 0)
          for (var e, i, r, o, u, s, a = 0, c = t[n[0]].length; a < c; ++a)
            for (o = u = 0, e = 0; e < s; ++e)
              (r = (i = t[n[e]][a])[1] - i[0]) > 0
                ? ((i[0] = o), (i[1] = o += r))
                : r < 0
                  ? ((i[1] = u), (i[0] = u += r))
                  : ((i[0] = 0), (i[1] = r));
      }
      function Nn(t, n) {
        if ((e = t.length) > 0) {
          for (var e, i = 0, r = t[n[0]], o = r.length; i < o; ++i) {
            for (var u = 0, s = 0; u < e; ++u) s += t[u][i][1] || 0;
            r[i][1] += r[i][0] = -s / 2;
          }
          Tn(t, n);
        }
      }
      function En(t, n) {
        if ((r = t.length) > 0 && (i = (e = t[n[0]]).length) > 0) {
          for (var e, i, r, o = 0, u = 1; u < i; ++u) {
            for (var s = 0, a = 0, c = 0; s < r; ++s) {
              for (
                var h = t[n[s]], l = h[u][1] || 0, f = (l - (h[u - 1][1] || 0)) / 2, _ = 0;
                _ < s;
                ++_
              ) {
                var p = t[n[_]];
                f += (p[u][1] || 0) - (p[u - 1][1] || 0);
              }
              (a += l), (c += f * l);
            }
            (e[u - 1][1] += e[u - 1][0] = o), a && (o -= c / a);
          }
          (e[u - 1][1] += e[u - 1][0] = o), Tn(t, n);
        }
      }
      function Ln(t) {
        var n = t.map(Dn);
        return An(t).sort(function (t, e) {
          return n[t] - n[e];
        });
      }
      function Dn(t) {
        for (var n, e = -1, i = 0, r = t.length, o = -1 / 0; ++e < r; )
          (n = +t[e][1]) > o && ((o = n), (i = e));
        return i;
      }
      function Un(t) {
        var n = t.map(zn);
        return An(t).sort(function (t, e) {
          return n[t] - n[e];
        });
      }
      function zn(t) {
        for (var n, e = 0, i = -1, r = t.length; ++i < r; ) (n = +t[i][1]) && (e += n);
        return e;
      }
      function Pn(t) {
        return Un(t).reverse();
      }
      function Fn(t) {
        var n,
          e,
          i = t.length,
          r = t.map(zn),
          o = Ln(t),
          u = 0,
          s = 0,
          a = [],
          c = [];
        for (n = 0; n < i; ++n)
          (e = o[n]), u < s ? ((u += r[e]), a.push(e)) : ((s += r[e]), c.push(e));
        return c.reverse().concat(a);
      }
      function On(t) {
        return An(t).reverse();
      }
      (rn.prototype = {
        areaStart: Ut,
        areaEnd: Ut,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (t, n) {
          (t = +t),
            (n = +n),
            this._point
              ? this._context.lineTo(t, n)
              : ((this._point = 1), this._context.moveTo(t, n));
        },
      }),
        (hn.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                cn(this, this._t0, an(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            var e = NaN;
            if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), cn(this, an(this, (e = sn(this, t, n))), e);
                  break;
                default:
                  cn(this, this._t0, (e = sn(this, t, n)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = n),
                (this._t0 = e);
            }
          },
        }),
        ((ln.prototype = Object.create(hn.prototype)).point = function (t, n) {
          hn.prototype.point.call(this, n, t);
        }),
        (fn.prototype = {
          moveTo: function (t, n) {
            this._context.moveTo(n, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, n) {
            this._context.lineTo(n, t);
          },
          bezierCurveTo: function (t, n, e, i, r, o) {
            this._context.bezierCurveTo(n, t, i, e, o, r);
          },
        }),
        (yn.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var t = this._x,
              n = this._y,
              e = t.length;
            if (e)
              if (
                (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]),
                2 === e)
              )
                this._context.lineTo(t[1], n[1]);
              else
                for (var i = vn(t), r = vn(n), o = 0, u = 1; u < e; ++o, ++u)
                  this._context.bezierCurveTo(i[0][o], r[0][o], i[1][o], r[1][o], t[u], n[u]);
            (this._line || (0 !== this._line && 1 === e)) && this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (t, n) {
            this._x.push(+t), this._y.push(+n);
          },
        }),
        (dn.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
              this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                (this._point = 1),
                  this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                else {
                  var e = this._x * (1 - this._t) + t * this._t;
                  this._context.lineTo(e, this._y), this._context.lineTo(e, n);
                }
            }
            (this._x = t), (this._y = n);
          },
        });
    },
    4415: (t, n, e) => {
      'use strict';
      e.r(n),
        e.d(n, {
          ZoomTransform: () => mt,
          zoom: () => Et,
          zoomIdentity: () => xt,
          zoomTransform: () => wt,
        });
      var i,
        r,
        o = e(1089),
        u = e(5085),
        s = e(5835),
        a = e(183),
        c = e(5970),
        h = e(6452),
        l = 0,
        f = 0,
        _ = 0,
        p = 0,
        y = 0,
        v = 0,
        g = 'object' == typeof performance && performance.now ? performance : Date,
        d =
          'object' == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function m() {
        return y || (d(x), (y = g.now() + v));
      }
      function x() {
        y = 0;
      }
      function w() {
        this._call = this._time = this._next = null;
      }
      function T(t, n, e) {
        var i = new w();
        return i.restart(t, n, e), i;
      }
      function A() {
        (y = (p = g.now()) + v), (l = f = 0);
        try {
          !(function () {
            m(), ++l;
            for (var t, n = i; n; )
              (t = y - n._time) >= 0 && n._call.call(void 0, t), (n = n._next);
            --l;
          })();
        } finally {
          (l = 0),
            (function () {
              var t,
                n,
                e = i,
                o = 1 / 0;
              for (; e; )
                e._call
                  ? (o > e._time && (o = e._time), (t = e), (e = e._next))
                  : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (i = n)));
              (r = t), M(o);
            })(),
            (y = 0);
        }
      }
      function b() {
        var t = g.now(),
          n = t - p;
        n > 1e3 && ((v -= n), (p = t));
      }
      function M(t) {
        l ||
          (f && (f = clearTimeout(f)),
          t - y > 24
            ? (t < 1 / 0 && (f = setTimeout(A, t - g.now() - v)), _ && (_ = clearInterval(_)))
            : (_ || ((p = g.now()), (_ = setInterval(b, 1e3))), (l = 1), d(A)));
      }
      function k(t, n, e) {
        var i = new w();
        return (
          (n = null == n ? 0 : +n),
          i.restart(
            (e) => {
              i.stop(), t(e + n);
            },
            n,
            e
          ),
          i
        );
      }
      w.prototype = T.prototype = {
        constructor: w,
        restart: function (t, n, e) {
          if ('function' != typeof t) throw new TypeError('callback is not a function');
          (e = (null == e ? m() : +e) + (null == n ? 0 : +n)),
            this._next || r === this || (r ? (r._next = this) : (i = this), (r = this)),
            (this._call = t),
            (this._time = e),
            M();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), M());
        },
      };
      var C = (0, o.A)('start', 'end', 'cancel', 'interrupt'),
        S = [],
        N = 2,
        E = 5,
        L = 6;
      function D(t, n, e, i, r, o) {
        var u = t.__transition;
        if (u) {
          if (e in u) return;
        } else t.__transition = {};
        !(function (t, n, e) {
          var i,
            r = t.__transition;
          function o(t) {
            (e.state = 1), e.timer.restart(u, e.delay, e.time), e.delay <= t && u(t - e.delay);
          }
          function u(o) {
            var c, h, l, f;
            if (1 !== e.state) return a();
            for (c in r)
              if ((f = r[c]).name === e.name) {
                if (3 === f.state) return k(u);
                4 === f.state
                  ? ((f.state = L),
                    f.timer.stop(),
                    f.on.call('interrupt', t, t.__data__, f.index, f.group),
                    delete r[c])
                  : +c < n &&
                    ((f.state = L),
                    f.timer.stop(),
                    f.on.call('cancel', t, t.__data__, f.index, f.group),
                    delete r[c]);
              }
            if (
              (k(function () {
                3 === e.state && ((e.state = 4), e.timer.restart(s, e.delay, e.time), s(o));
              }),
              (e.state = N),
              e.on.call('start', t, t.__data__, e.index, e.group),
              e.state === N)
            ) {
              for (e.state = 3, i = new Array((l = e.tween.length)), c = 0, h = -1; c < l; ++c)
                (f = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = f);
              i.length = h + 1;
            }
          }
          function s(n) {
            for (
              var r =
                  n < e.duration
                    ? e.ease.call(null, n / e.duration)
                    : (e.timer.restart(a), (e.state = E), 1),
                o = -1,
                u = i.length;
              ++o < u;

            )
              i[o].call(t, r);
            e.state === E && (e.on.call('end', t, t.__data__, e.index, e.group), a());
          }
          function a() {
            for (var i in ((e.state = L), e.timer.stop(), delete r[n], r)) return;
            delete t.__transition;
          }
          (r[n] = e), (e.timer = T(o, 0, e.time));
        })(t, e, {
          name: n,
          index: i,
          group: r,
          on: C,
          tween: S,
          time: o.time,
          delay: o.delay,
          duration: o.duration,
          ease: o.ease,
          timer: null,
          state: 0,
        });
      }
      function U(t, n) {
        var e = P(t, n);
        if (e.state > 0) throw new Error('too late; already scheduled');
        return e;
      }
      function z(t, n) {
        var e = P(t, n);
        if (e.state > 3) throw new Error('too late; already running');
        return e;
      }
      function P(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error('transition not found');
        return e;
      }
      function F(t, n) {
        var e,
          i,
          r,
          o = t.__transition,
          u = !0;
        if (o) {
          for (r in ((n = null == n ? null : n + ''), o))
            (e = o[r]).name === n
              ? ((i = e.state > N && e.state < E),
                (e.state = L),
                e.timer.stop(),
                e.on.call(i ? 'interrupt' : 'cancel', t, t.__data__, e.index, e.group),
                delete o[r])
              : (u = !1);
          u && delete t.__transition;
        }
      }
      var O = e(9587),
        Y = e(7268);
      function $(t, n) {
        var e, i;
        return function () {
          var r = z(this, t),
            o = r.tween;
          if (o !== e)
            for (var u = 0, s = (i = e = o).length; u < s; ++u)
              if (i[u].name === n) {
                (i = i.slice()).splice(u, 1);
                break;
              }
          r.tween = i;
        };
      }
      function q(t, n, e) {
        var i, r;
        if ('function' != typeof e) throw new Error();
        return function () {
          var o = z(this, t),
            u = o.tween;
          if (u !== i) {
            r = (i = u).slice();
            for (var s = { name: n, value: e }, a = 0, c = r.length; a < c; ++a)
              if (r[a].name === n) {
                r[a] = s;
                break;
              }
            a === c && r.push(s);
          }
          o.tween = r;
        };
      }
      function R(t, n, e) {
        var i = t._id;
        return (
          t.each(function () {
            var t = z(this, i);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments);
          }),
          function (t) {
            return P(t, i).value[n];
          }
        );
      }
      var j = e(6957),
        H = e(8981),
        I = e(1197),
        B = e(7737);
      function X(t, n) {
        var e;
        return (
          'number' == typeof n
            ? H.A
            : n instanceof j.Ay
              ? I.Ay
              : (e = (0, j.Ay)(n))
                ? ((n = e), I.Ay)
                : B.A
        )(t, n);
      }
      function V(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function Z(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function W(t, n, e) {
        var i,
          r,
          o = e + '';
        return function () {
          var u = this.getAttribute(t);
          return u === o ? null : u === i ? r : (r = n((i = u), e));
        };
      }
      function G(t, n, e) {
        var i,
          r,
          o = e + '';
        return function () {
          var u = this.getAttributeNS(t.space, t.local);
          return u === o ? null : u === i ? r : (r = n((i = u), e));
        };
      }
      function Q(t, n, e) {
        var i, r, o;
        return function () {
          var u,
            s,
            a = e(this);
          if (null != a)
            return (u = this.getAttribute(t)) === (s = a + '')
              ? null
              : u === i && s === r
                ? o
                : ((r = s), (o = n((i = u), a)));
          this.removeAttribute(t);
        };
      }
      function J(t, n, e) {
        var i, r, o;
        return function () {
          var u,
            s,
            a = e(this);
          if (null != a)
            return (u = this.getAttributeNS(t.space, t.local)) === (s = a + '')
              ? null
              : u === i && s === r
                ? o
                : ((r = s), (o = n((i = u), a)));
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function K(t, n) {
        var e, i;
        function r() {
          var r = n.apply(this, arguments);
          return (
            r !== i &&
              (e =
                (i = r) &&
                (function (t, n) {
                  return function (e) {
                    this.setAttributeNS(t.space, t.local, n.call(this, e));
                  };
                })(t, r)),
            e
          );
        }
        return (r._value = n), r;
      }
      function tt(t, n) {
        var e, i;
        function r() {
          var r = n.apply(this, arguments);
          return (
            r !== i &&
              (e =
                (i = r) &&
                (function (t, n) {
                  return function (e) {
                    this.setAttribute(t, n.call(this, e));
                  };
                })(t, r)),
            e
          );
        }
        return (r._value = n), r;
      }
      function nt(t, n) {
        return function () {
          U(this, t).delay = +n.apply(this, arguments);
        };
      }
      function et(t, n) {
        return (
          (n = +n),
          function () {
            U(this, t).delay = n;
          }
        );
      }
      function it(t, n) {
        return function () {
          z(this, t).duration = +n.apply(this, arguments);
        };
      }
      function rt(t, n) {
        return (
          (n = +n),
          function () {
            z(this, t).duration = n;
          }
        );
      }
      var ot = e(6541);
      var ut = e(574);
      var st = e(747);
      var at = h.Ay.prototype.constructor;
      var ct = e(3683);
      function ht(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      var lt = 0;
      function ft(t, n, e, i) {
        (this._groups = t), (this._parents = n), (this._name = e), (this._id = i);
      }
      function _t() {
        return ++lt;
      }
      var pt = h.Ay.prototype;
      ft.prototype = function (t) {
        return (0, h.Ay)().transition(t);
      }.prototype = {
        constructor: ft,
        select: function (t) {
          var n = this._name,
            e = this._id;
          'function' != typeof t && (t = (0, ut.A)(t));
          for (var i = this._groups, r = i.length, o = new Array(r), u = 0; u < r; ++u)
            for (var s, a, c = i[u], h = c.length, l = (o[u] = new Array(h)), f = 0; f < h; ++f)
              (s = c[f]) &&
                (a = t.call(s, s.__data__, f, c)) &&
                ('__data__' in s && (a.__data__ = s.__data__),
                (l[f] = a),
                D(l[f], n, e, f, l, P(s, e)));
          return new ft(o, this._parents, n, e);
        },
        selectAll: function (t) {
          var n = this._name,
            e = this._id;
          'function' != typeof t && (t = (0, st.A)(t));
          for (var i = this._groups, r = i.length, o = [], u = [], s = 0; s < r; ++s)
            for (var a, c = i[s], h = c.length, l = 0; l < h; ++l)
              if ((a = c[l])) {
                for (
                  var f, _ = t.call(a, a.__data__, l, c), p = P(a, e), y = 0, v = _.length;
                  y < v;
                  ++y
                )
                  (f = _[y]) && D(f, n, e, y, _, p);
                o.push(_), u.push(a);
              }
          return new ft(o, u, n, e);
        },
        selectChild: pt.selectChild,
        selectChildren: pt.selectChildren,
        filter: function (t) {
          'function' != typeof t && (t = (0, ot.A)(t));
          for (var n = this._groups, e = n.length, i = new Array(e), r = 0; r < e; ++r)
            for (var o, u = n[r], s = u.length, a = (i[r] = []), c = 0; c < s; ++c)
              (o = u[c]) && t.call(o, o.__data__, c, u) && a.push(o);
          return new ft(i, this._parents, this._name, this._id);
        },
        merge: function (t) {
          if (t._id !== this._id) throw new Error();
          for (
            var n = this._groups,
              e = t._groups,
              i = n.length,
              r = e.length,
              o = Math.min(i, r),
              u = new Array(i),
              s = 0;
            s < o;
            ++s
          )
            for (
              var a, c = n[s], h = e[s], l = c.length, f = (u[s] = new Array(l)), _ = 0;
              _ < l;
              ++_
            )
              (a = c[_] || h[_]) && (f[_] = a);
          for (; s < i; ++s) u[s] = n[s];
          return new ft(u, this._parents, this._name, this._id);
        },
        selection: function () {
          return new at(this._groups, this._parents);
        },
        transition: function () {
          for (
            var t = this._name, n = this._id, e = _t(), i = this._groups, r = i.length, o = 0;
            o < r;
            ++o
          )
            for (var u, s = i[o], a = s.length, c = 0; c < a; ++c)
              if ((u = s[c])) {
                var h = P(u, n);
                D(u, t, e, c, s, {
                  time: h.time + h.delay + h.duration,
                  delay: 0,
                  duration: h.duration,
                  ease: h.ease,
                });
              }
          return new ft(i, this._parents, t, e);
        },
        call: pt.call,
        nodes: pt.nodes,
        node: pt.node,
        size: pt.size,
        empty: pt.empty,
        each: pt.each,
        on: function (t, n) {
          var e = this._id;
          return arguments.length < 2
            ? P(this.node(), e).on.on(t)
            : this.each(
                (function (t, n, e) {
                  var i,
                    r,
                    o = (function (t) {
                      return (t + '')
                        .trim()
                        .split(/^|\s+/)
                        .every(function (t) {
                          var n = t.indexOf('.');
                          return n >= 0 && (t = t.slice(0, n)), !t || 'start' === t;
                        });
                    })(n)
                      ? U
                      : z;
                  return function () {
                    var u = o(this, t),
                      s = u.on;
                    s !== i && (r = (i = s).copy()).on(n, e), (u.on = r);
                  };
                })(e, t, n)
              );
        },
        attr: function (t, n) {
          var e = (0, Y.A)(t),
            i = 'transform' === e ? O.I : X;
          return this.attrTween(
            t,
            'function' == typeof n
              ? (e.local ? J : Q)(e, i, R(this, 'attr.' + t, n))
              : null == n
                ? (e.local ? Z : V)(e)
                : (e.local ? G : W)(e, i, n)
          );
        },
        attrTween: function (t, n) {
          var e = 'attr.' + t;
          if (arguments.length < 2) return (e = this.tween(e)) && e._value;
          if (null == n) return this.tween(e, null);
          if ('function' != typeof n) throw new Error();
          var i = (0, Y.A)(t);
          return this.tween(e, (i.local ? K : tt)(i, n));
        },
        style: function (t, n, e) {
          var i = 'transform' == (t += '') ? O.T : X;
          return null == n
            ? this.styleTween(
                t,
                (function (t, n) {
                  var e, i, r;
                  return function () {
                    var o = (0, ct.j)(this, t),
                      u = (this.style.removeProperty(t), (0, ct.j)(this, t));
                    return o === u ? null : o === e && u === i ? r : (r = n((e = o), (i = u)));
                  };
                })(t, i)
              ).on('end.style.' + t, ht(t))
            : 'function' == typeof n
              ? this.styleTween(
                  t,
                  (function (t, n, e) {
                    var i, r, o;
                    return function () {
                      var u = (0, ct.j)(this, t),
                        s = e(this),
                        a = s + '';
                      return (
                        null == s && (this.style.removeProperty(t), (a = s = (0, ct.j)(this, t))),
                        u === a ? null : u === i && a === r ? o : ((r = a), (o = n((i = u), s)))
                      );
                    };
                  })(t, i, R(this, 'style.' + t, n))
                ).each(
                  (function (t, n) {
                    var e,
                      i,
                      r,
                      o,
                      u = 'style.' + n,
                      s = 'end.' + u;
                    return function () {
                      var a = z(this, t),
                        c = a.on,
                        h = null == a.value[u] ? o || (o = ht(n)) : void 0;
                      (c === e && r === h) || (i = (e = c).copy()).on(s, (r = h)), (a.on = i);
                    };
                  })(this._id, t)
                )
              : this.styleTween(
                  t,
                  (function (t, n, e) {
                    var i,
                      r,
                      o = e + '';
                    return function () {
                      var u = (0, ct.j)(this, t);
                      return u === o ? null : u === i ? r : (r = n((i = u), e));
                    };
                  })(t, i, n),
                  e
                ).on('end.style.' + t, null);
        },
        styleTween: function (t, n, e) {
          var i = 'style.' + (t += '');
          if (arguments.length < 2) return (i = this.tween(i)) && i._value;
          if (null == n) return this.tween(i, null);
          if ('function' != typeof n) throw new Error();
          return this.tween(
            i,
            (function (t, n, e) {
              var i, r;
              function o() {
                var o = n.apply(this, arguments);
                return (
                  o !== r &&
                    (i =
                      (r = o) &&
                      (function (t, n, e) {
                        return function (i) {
                          this.style.setProperty(t, n.call(this, i), e);
                        };
                      })(t, o, e)),
                  i
                );
              }
              return (o._value = n), o;
            })(t, n, null == e ? '' : e)
          );
        },
        text: function (t) {
          return this.tween(
            'text',
            'function' == typeof t
              ? (function (t) {
                  return function () {
                    var n = t(this);
                    this.textContent = null == n ? '' : n;
                  };
                })(R(this, 'text', t))
              : (function (t) {
                  return function () {
                    this.textContent = t;
                  };
                })(null == t ? '' : t + '')
          );
        },
        textTween: function (t) {
          var n = 'text';
          if (arguments.length < 1) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ('function' != typeof t) throw new Error();
          return this.tween(
            n,
            (function (t) {
              var n, e;
              function i() {
                var i = t.apply(this, arguments);
                return (
                  i !== e &&
                    (n =
                      (e = i) &&
                      (function (t) {
                        return function (n) {
                          this.textContent = t.call(this, n);
                        };
                      })(i)),
                  n
                );
              }
              return (i._value = t), i;
            })(t)
          );
        },
        remove: function () {
          return this.on(
            'end.remove',
            (function (t) {
              return function () {
                var n = this.parentNode;
                for (var e in this.__transition) if (+e !== t) return;
                n && n.removeChild(this);
              };
            })(this._id)
          );
        },
        tween: function (t, n) {
          var e = this._id;
          if (((t += ''), arguments.length < 2)) {
            for (var i, r = P(this.node(), e).tween, o = 0, u = r.length; o < u; ++o)
              if ((i = r[o]).name === t) return i.value;
            return null;
          }
          return this.each((null == n ? $ : q)(e, t, n));
        },
        delay: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(('function' == typeof t ? nt : et)(n, t))
            : P(this.node(), n).delay;
        },
        duration: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(('function' == typeof t ? it : rt)(n, t))
            : P(this.node(), n).duration;
        },
        ease: function (t) {
          var n = this._id;
          return arguments.length
            ? this.each(
                (function (t, n) {
                  if ('function' != typeof n) throw new Error();
                  return function () {
                    z(this, t).ease = n;
                  };
                })(n, t)
              )
            : P(this.node(), n).ease;
        },
        easeVarying: function (t) {
          if ('function' != typeof t) throw new Error();
          return this.each(
            (function (t, n) {
              return function () {
                var e = n.apply(this, arguments);
                if ('function' != typeof e) throw new Error();
                z(this, t).ease = e;
              };
            })(this._id, t)
          );
        },
        end: function () {
          var t,
            n,
            e = this,
            i = e._id,
            r = e.size();
          return new Promise(function (o, u) {
            var s = { value: u },
              a = {
                value: function () {
                  0 == --r && o();
                },
              };
            e.each(function () {
              var e = z(this, i),
                r = e.on;
              r !== t &&
                ((n = (t = r).copy())._.cancel.push(s), n._.interrupt.push(s), n._.end.push(a)),
                (e.on = n);
            }),
              0 === r && o();
          });
        },
        [Symbol.iterator]: pt[Symbol.iterator],
      };
      var yt = { time: null, delay: 0, duration: 250, ease: e(2101).wq };
      function vt(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]); )
          if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
        return e;
      }
      (h.Ay.prototype.interrupt = function (t) {
        return this.each(function () {
          F(this, t);
        });
      }),
        (h.Ay.prototype.transition = function (t) {
          var n, e;
          t instanceof ft
            ? ((n = t._id), (t = t._name))
            : ((n = _t()), ((e = yt).time = m()), (t = null == t ? null : t + ''));
          for (var i = this._groups, r = i.length, o = 0; o < r; ++o)
            for (var u, s = i[o], a = s.length, c = 0; c < a; ++c)
              (u = s[c]) && D(u, t, n, c, s, e || vt(u, n));
          return new ft(i, this._parents, t, n);
        });
      const gt = (t) => () => t;
      function dt(t, { sourceEvent: n, target: e, transform: i, dispatch: r }) {
        Object.defineProperties(this, {
          type: { value: t, enumerable: !0, configurable: !0 },
          sourceEvent: { value: n, enumerable: !0, configurable: !0 },
          target: { value: e, enumerable: !0, configurable: !0 },
          transform: { value: i, enumerable: !0, configurable: !0 },
          _: { value: r },
        });
      }
      function mt(t, n, e) {
        (this.k = t), (this.x = n), (this.y = e);
      }
      mt.prototype = {
        constructor: mt,
        scale: function (t) {
          return 1 === t ? this : new mt(this.k * t, this.x, this.y);
        },
        translate: function (t, n) {
          return (0 === t) & (0 === n)
            ? this
            : new mt(this.k, this.x + this.k * t, this.y + this.k * n);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return 'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')';
        },
      };
      var xt = new mt(1, 0, 0);
      function wt(t) {
        for (; !t.__zoom; ) if (!(t = t.parentNode)) return xt;
        return t.__zoom;
      }
      function Tt(t) {
        t.stopImmediatePropagation();
      }
      function At(t) {
        t.preventDefault(), t.stopImmediatePropagation();
      }
      function bt(t) {
        return !((t.ctrlKey && 'wheel' !== t.type) || t.button);
      }
      function Mt() {
        var t = this;
        return t instanceof SVGElement
          ? (t = t.ownerSVGElement || t).hasAttribute('viewBox')
            ? [
                [(t = t.viewBox.baseVal).x, t.y],
                [t.x + t.width, t.y + t.height],
              ]
            : [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value],
              ]
          : [
              [0, 0],
              [t.clientWidth, t.clientHeight],
            ];
      }
      function kt() {
        return this.__zoom || xt;
      }
      function Ct(t) {
        return (
          -t.deltaY * (1 === t.deltaMode ? 0.05 : t.deltaMode ? 1 : 0.002) * (t.ctrlKey ? 10 : 1)
        );
      }
      function St() {
        return navigator.maxTouchPoints || 'ontouchstart' in this;
      }
      function Nt(t, n, e) {
        var i = t.invertX(n[0][0]) - e[0][0],
          r = t.invertX(n[1][0]) - e[1][0],
          o = t.invertY(n[0][1]) - e[0][1],
          u = t.invertY(n[1][1]) - e[1][1];
        return t.translate(
          r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
          u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u)
        );
      }
      function Et() {
        var t,
          n,
          e,
          i = bt,
          r = Mt,
          h = Nt,
          l = Ct,
          f = St,
          _ = [0, 1 / 0],
          p = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          y = 250,
          v = s.A,
          g = (0, o.A)('start', 'zoom', 'end'),
          d = 0,
          m = 10;
        function x(t) {
          t.property('__zoom', kt)
            .on('wheel.zoom', C, { passive: !1 })
            .on('mousedown.zoom', S)
            .on('dblclick.zoom', N)
            .filter(f)
            .on('touchstart.zoom', E)
            .on('touchmove.zoom', L)
            .on('touchend.zoom touchcancel.zoom', D)
            .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
        }
        function w(t, n) {
          return (n = Math.max(_[0], Math.min(_[1], n))) === t.k ? t : new mt(n, t.x, t.y);
        }
        function T(t, n, e) {
          var i = n[0] - e[0] * t.k,
            r = n[1] - e[1] * t.k;
          return i === t.x && r === t.y ? t : new mt(t.k, i, r);
        }
        function A(t) {
          return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
        }
        function b(t, n, e, i) {
          t.on('start.zoom', function () {
            M(this, arguments).event(i).start();
          })
            .on('interrupt.zoom end.zoom', function () {
              M(this, arguments).event(i).end();
            })
            .tween('zoom', function () {
              var t = this,
                o = arguments,
                u = M(t, o).event(i),
                s = r.apply(t, o),
                a = null == e ? A(s) : 'function' == typeof e ? e.apply(t, o) : e,
                c = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]),
                h = t.__zoom,
                l = 'function' == typeof n ? n.apply(t, o) : n,
                f = v(h.invert(a).concat(c / h.k), l.invert(a).concat(c / l.k));
              return function (t) {
                if (1 === t) t = l;
                else {
                  var n = f(t),
                    e = c / n[2];
                  t = new mt(e, a[0] - n[0] * e, a[1] - n[1] * e);
                }
                u.zoom(null, t);
              };
            });
        }
        function M(t, n, e) {
          return (!e && t.__zooming) || new k(t, n);
        }
        function k(t, n) {
          (this.that = t),
            (this.args = n),
            (this.active = 0),
            (this.sourceEvent = null),
            (this.extent = r.apply(t, n)),
            (this.taps = 0);
        }
        function C(t, ...n) {
          if (i.apply(this, arguments)) {
            var e = M(this, n).event(t),
              r = this.__zoom,
              o = Math.max(_[0], Math.min(_[1], r.k * Math.pow(2, l.apply(this, arguments)))),
              u = (0, c.A)(t);
            if (e.wheel)
              (e.mouse[0][0] === u[0] && e.mouse[0][1] === u[1]) ||
                (e.mouse[1] = r.invert((e.mouse[0] = u))),
                clearTimeout(e.wheel);
            else {
              if (r.k === o) return;
              (e.mouse = [u, r.invert(u)]), F(this), e.start();
            }
            At(t),
              (e.wheel = setTimeout(function () {
                (e.wheel = null), e.end();
              }, 150)),
              e.zoom('mouse', h(T(w(r, o), e.mouse[0], e.mouse[1]), e.extent, p));
          }
        }
        function S(t, ...n) {
          if (!e && i.apply(this, arguments)) {
            var r = t.currentTarget,
              o = M(this, n, !0).event(t),
              s = (0, a.A)(t.view)
                .on(
                  'mousemove.zoom',
                  function (t) {
                    if ((At(t), !o.moved)) {
                      var n = t.clientX - f,
                        e = t.clientY - _;
                      o.moved = n * n + e * e > d;
                    }
                    o.event(t).zoom(
                      'mouse',
                      h(T(o.that.__zoom, (o.mouse[0] = (0, c.A)(t, r)), o.mouse[1]), o.extent, p)
                    );
                  },
                  !0
                )
                .on(
                  'mouseup.zoom',
                  function (t) {
                    s.on('mousemove.zoom mouseup.zoom', null),
                      (0, u.y)(t.view, o.moved),
                      At(t),
                      o.event(t).end();
                  },
                  !0
                ),
              l = (0, c.A)(t, r),
              f = t.clientX,
              _ = t.clientY;
            (0, u.A)(t.view), Tt(t), (o.mouse = [l, this.__zoom.invert(l)]), F(this), o.start();
          }
        }
        function N(t, ...n) {
          if (i.apply(this, arguments)) {
            var e = this.__zoom,
              o = (0, c.A)(t.changedTouches ? t.changedTouches[0] : t, this),
              u = e.invert(o),
              s = e.k * (t.shiftKey ? 0.5 : 2),
              l = h(T(w(e, s), o, u), r.apply(this, n), p);
            At(t),
              y > 0
                ? (0, a.A)(this).transition().duration(y).call(b, l, o, t)
                : (0, a.A)(this).call(x.transform, l, o, t);
          }
        }
        function E(e, ...r) {
          if (i.apply(this, arguments)) {
            var o,
              u,
              s,
              a,
              h = e.touches,
              l = h.length,
              f = M(this, r, e.changedTouches.length === l).event(e);
            for (Tt(e), u = 0; u < l; ++u)
              (s = h[u]),
                (a = [(a = (0, c.A)(s, this)), this.__zoom.invert(a), s.identifier]),
                f.touch0
                  ? f.touch1 || f.touch0[2] === a[2] || ((f.touch1 = a), (f.taps = 0))
                  : ((f.touch0 = a), (o = !0), (f.taps = 1 + !!t));
            t && (t = clearTimeout(t)),
              o &&
                (f.taps < 2 &&
                  ((n = a[0]),
                  (t = setTimeout(function () {
                    t = null;
                  }, 500))),
                F(this),
                f.start());
          }
        }
        function L(t, ...n) {
          if (this.__zooming) {
            var e,
              i,
              r,
              o,
              u = M(this, n).event(t),
              s = t.changedTouches,
              a = s.length;
            for (At(t), e = 0; e < a; ++e)
              (i = s[e]),
                (r = (0, c.A)(i, this)),
                u.touch0 && u.touch0[2] === i.identifier
                  ? (u.touch0[0] = r)
                  : u.touch1 && u.touch1[2] === i.identifier && (u.touch1[0] = r);
            if (((i = u.that.__zoom), u.touch1)) {
              var l = u.touch0[0],
                f = u.touch0[1],
                _ = u.touch1[0],
                y = u.touch1[1],
                v = (v = _[0] - l[0]) * v + (v = _[1] - l[1]) * v,
                g = (g = y[0] - f[0]) * g + (g = y[1] - f[1]) * g;
              (i = w(i, Math.sqrt(v / g))),
                (r = [(l[0] + _[0]) / 2, (l[1] + _[1]) / 2]),
                (o = [(f[0] + y[0]) / 2, (f[1] + y[1]) / 2]);
            } else {
              if (!u.touch0) return;
              (r = u.touch0[0]), (o = u.touch0[1]);
            }
            u.zoom('touch', h(T(i, r, o), u.extent, p));
          }
        }
        function D(t, ...i) {
          if (this.__zooming) {
            var r,
              o,
              u = M(this, i).event(t),
              s = t.changedTouches,
              h = s.length;
            for (
              Tt(t),
                e && clearTimeout(e),
                e = setTimeout(function () {
                  e = null;
                }, 500),
                r = 0;
              r < h;
              ++r
            )
              (o = s[r]),
                u.touch0 && u.touch0[2] === o.identifier
                  ? delete u.touch0
                  : u.touch1 && u.touch1[2] === o.identifier && delete u.touch1;
            if ((u.touch1 && !u.touch0 && ((u.touch0 = u.touch1), delete u.touch1), u.touch0))
              u.touch0[1] = this.__zoom.invert(u.touch0[0]);
            else if (
              (u.end(),
              2 === u.taps && ((o = (0, c.A)(o, this)), Math.hypot(n[0] - o[0], n[1] - o[1]) < m))
            ) {
              var l = (0, a.A)(this).on('dblclick.zoom');
              l && l.apply(this, arguments);
            }
          }
        }
        return (
          (x.transform = function (t, n, e, i) {
            var r = t.selection ? t.selection() : t;
            r.property('__zoom', kt),
              t !== r
                ? b(t, n, e, i)
                : r.interrupt().each(function () {
                    M(this, arguments)
                      .event(i)
                      .start()
                      .zoom(null, 'function' == typeof n ? n.apply(this, arguments) : n)
                      .end();
                  });
          }),
          (x.scaleBy = function (t, n, e, i) {
            x.scaleTo(
              t,
              function () {
                return this.__zoom.k * ('function' == typeof n ? n.apply(this, arguments) : n);
              },
              e,
              i
            );
          }),
          (x.scaleTo = function (t, n, e, i) {
            x.transform(
              t,
              function () {
                var t = r.apply(this, arguments),
                  i = this.__zoom,
                  o = null == e ? A(t) : 'function' == typeof e ? e.apply(this, arguments) : e,
                  u = i.invert(o),
                  s = 'function' == typeof n ? n.apply(this, arguments) : n;
                return h(T(w(i, s), o, u), t, p);
              },
              e,
              i
            );
          }),
          (x.translateBy = function (t, n, e, i) {
            x.transform(
              t,
              function () {
                return h(
                  this.__zoom.translate(
                    'function' == typeof n ? n.apply(this, arguments) : n,
                    'function' == typeof e ? e.apply(this, arguments) : e
                  ),
                  r.apply(this, arguments),
                  p
                );
              },
              null,
              i
            );
          }),
          (x.translateTo = function (t, n, e, i, o) {
            x.transform(
              t,
              function () {
                var t = r.apply(this, arguments),
                  o = this.__zoom,
                  u = null == i ? A(t) : 'function' == typeof i ? i.apply(this, arguments) : i;
                return h(
                  xt
                    .translate(u[0], u[1])
                    .scale(o.k)
                    .translate(
                      'function' == typeof n ? -n.apply(this, arguments) : -n,
                      'function' == typeof e ? -e.apply(this, arguments) : -e
                    ),
                  t,
                  p
                );
              },
              i,
              o
            );
          }),
          (k.prototype = {
            event: function (t) {
              return t && (this.sourceEvent = t), this;
            },
            start: function () {
              return 1 == ++this.active && ((this.that.__zooming = this), this.emit('start')), this;
            },
            zoom: function (t, n) {
              return (
                this.mouse && 'mouse' !== t && (this.mouse[1] = n.invert(this.mouse[0])),
                this.touch0 && 'touch' !== t && (this.touch0[1] = n.invert(this.touch0[0])),
                this.touch1 && 'touch' !== t && (this.touch1[1] = n.invert(this.touch1[0])),
                (this.that.__zoom = n),
                this.emit('zoom'),
                this
              );
            },
            end: function () {
              return 0 == --this.active && (delete this.that.__zooming, this.emit('end')), this;
            },
            emit: function (t) {
              var n = (0, a.A)(this.that).datum();
              g.call(
                t,
                this.that,
                new dt(t, {
                  sourceEvent: this.sourceEvent,
                  target: x,
                  type: t,
                  transform: this.that.__zoom,
                  dispatch: g,
                }),
                n
              );
            },
          }),
          (x.wheelDelta = function (t) {
            return arguments.length ? ((l = 'function' == typeof t ? t : gt(+t)), x) : l;
          }),
          (x.filter = function (t) {
            return arguments.length ? ((i = 'function' == typeof t ? t : gt(!!t)), x) : i;
          }),
          (x.touchable = function (t) {
            return arguments.length ? ((f = 'function' == typeof t ? t : gt(!!t)), x) : f;
          }),
          (x.extent = function (t) {
            return arguments.length
              ? ((r =
                  'function' == typeof t
                    ? t
                    : gt([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]],
                      ])),
                x)
              : r;
          }),
          (x.scaleExtent = function (t) {
            return arguments.length ? ((_[0] = +t[0]), (_[1] = +t[1]), x) : [_[0], _[1]];
          }),
          (x.translateExtent = function (t) {
            return arguments.length
              ? ((p[0][0] = +t[0][0]),
                (p[1][0] = +t[1][0]),
                (p[0][1] = +t[0][1]),
                (p[1][1] = +t[1][1]),
                x)
              : [
                  [p[0][0], p[0][1]],
                  [p[1][0], p[1][1]],
                ];
          }),
          (x.constrain = function (t) {
            return arguments.length ? ((h = t), x) : h;
          }),
          (x.duration = function (t) {
            return arguments.length ? ((y = +t), x) : y;
          }),
          (x.interpolate = function (t) {
            return arguments.length ? ((v = t), x) : v;
          }),
          (x.on = function () {
            var t = g.on.apply(g, arguments);
            return t === g ? x : t;
          }),
          (x.clickDistance = function (t) {
            return arguments.length ? ((d = (t = +t) * t), x) : Math.sqrt(d);
          }),
          (x.tapDistance = function (t) {
            return arguments.length ? ((m = +t), x) : m;
          }),
          x
        );
      }
      wt.prototype = mt.prototype;
    },
  },
]);
