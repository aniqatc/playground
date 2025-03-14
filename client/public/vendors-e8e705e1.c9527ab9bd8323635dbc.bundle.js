'use strict';
(self.webpackChunkplayground = self.webpackChunkplayground || []).push([
  [425],
  {
    9635: (t, e, r) => {
      r.d(e, { iX: () => $t });
      var s = 'INUMBER',
        n = 'IOP1',
        i = 'IOP2',
        o = 'IOP3',
        a = 'IVAR',
        p = 'IVARNAME',
        h = 'IFUNCALL',
        u = 'IFUNDEF',
        c = 'IEXPR',
        f = 'IEXPREVAL',
        l = 'IMEMBER',
        v = 'IENDSTATEMENT',
        y = 'IARRAY';
      function x(t, e) {
        (this.type = t), (this.value = null != e ? e : 0);
      }
      function w(t) {
        return new x(n, t);
      }
      function g(t) {
        return new x(i, t);
      }
      function d(t) {
        return new x(o, t);
      }
      function M(t, e, r, h, u) {
        for (var f, v, w, g, d = [], E = [], m = 0; m < t.length; m++) {
          var A = t[m],
            b = A.type;
          if (b === s || b === p)
            Array.isArray(A.value)
              ? d.push.apply(
                  d,
                  M(
                    A.value
                      .map(function (t) {
                        return new x(s, t);
                      })
                      .concat(new x(y, A.value.length)),
                    e,
                    r,
                    h,
                    u
                  )
                )
              : d.push(A);
          else if (b === a && u.hasOwnProperty(A.value)) (A = new x(s, u[A.value])), d.push(A);
          else if (b === i && d.length > 1)
            (v = d.pop()),
              (f = d.pop()),
              (g = r[A.value]),
              (A = new x(s, g(f.value, v.value))),
              d.push(A);
          else if (b === o && d.length > 2)
            (w = d.pop()),
              (v = d.pop()),
              (f = d.pop()),
              '?' === A.value
                ? d.push(f.value ? v.value : w.value)
                : ((g = h[A.value]), (A = new x(s, g(f.value, v.value, w.value))), d.push(A));
          else if (b === n && d.length > 0)
            (f = d.pop()), (g = e[A.value]), (A = new x(s, g(f.value))), d.push(A);
          else if (b === c) {
            for (; d.length > 0; ) E.push(d.shift());
            E.push(new x(c, M(A.value, e, r, h, u)));
          } else if (b === l && d.length > 0) (f = d.pop()), d.push(new x(s, f.value[A.value]));
          else {
            for (; d.length > 0; ) E.push(d.shift());
            E.push(A);
          }
        }
        for (; d.length > 0; ) E.push(d.shift());
        return E;
      }
      function E(t, e, r) {
        for (var s = [], p = 0; p < t.length; p++) {
          var h = t[p],
            u = h.type;
          if (u === a && h.value === e)
            for (var f = 0; f < r.tokens.length; f++) {
              var l,
                v = r.tokens[f];
              (l =
                v.type === n
                  ? w(v.value)
                  : v.type === i
                    ? g(v.value)
                    : v.type === o
                      ? d(v.value)
                      : new x(v.type, v.value)),
                s.push(l);
            }
          else u === c ? s.push(new x(c, E(h.value, e, r))) : s.push(h);
        }
        return s;
      }
      function m(t, e, r) {
        var x,
          w,
          g,
          d,
          M,
          E,
          O = [];
        if (b(t)) return k(t, r);
        for (var T = t.length, C = 0; C < T; C++) {
          var N = t[C],
            S = N.type;
          if (S === s || S === p) O.push(N.value);
          else if (S === i)
            (w = O.pop()),
              (x = O.pop()),
              'and' === N.value
                ? O.push(!!x && !!m(w, e, r))
                : 'or' === N.value
                  ? O.push(!!x || !!m(w, e, r))
                  : '=' === N.value
                    ? ((d = e.binaryOps[N.value]), O.push(d(x, m(w, e, r), r)))
                    : ((d = e.binaryOps[N.value]), O.push(d(k(x, r), k(w, r))));
          else if (S === o)
            (g = O.pop()),
              (w = O.pop()),
              (x = O.pop()),
              '?' === N.value
                ? O.push(m(x ? w : g, e, r))
                : ((d = e.ternaryOps[N.value]), O.push(d(k(x, r), k(w, r), k(g, r))));
          else if (S === a)
            if (N.value in e.functions) O.push(e.functions[N.value]);
            else if (N.value in e.unaryOps && e.parser.isOperatorEnabled(N.value))
              O.push(e.unaryOps[N.value]);
            else {
              var I = r[N.value];
              if (void 0 === I) throw new Error('undefined variable: ' + N.value);
              O.push(I);
            }
          else if (S === n) (x = O.pop()), (d = e.unaryOps[N.value]), O.push(d(k(x, r)));
          else if (S === h) {
            for (E = N.value, M = []; E-- > 0; ) M.unshift(k(O.pop(), r));
            if (!(d = O.pop()).apply || !d.call) throw new Error(d + ' is not a function');
            O.push(d.apply(void 0, M));
          } else if (S === u)
            O.push(
              (function () {
                for (var t = O.pop(), s = [], n = N.value; n-- > 0; ) s.unshift(O.pop());
                var i = O.pop(),
                  o = function () {
                    for (var n = Object.assign({}, r), i = 0, o = s.length; i < o; i++)
                      n[s[i]] = arguments[i];
                    return m(t, e, n);
                  };
                return Object.defineProperty(o, 'name', { value: i, writable: !1 }), (r[i] = o), o;
              })()
            );
          else if (S === c) O.push(A(N, e));
          else if (S === f) O.push(N);
          else if (S === l) (x = O.pop()), O.push(x[N.value]);
          else if (S === v) O.pop();
          else {
            if (S !== y) throw new Error('invalid Expression');
            for (E = N.value, M = []; E-- > 0; ) M.unshift(O.pop());
            O.push(M);
          }
        }
        if (O.length > 1) throw new Error('invalid Expression (parity)');
        return 0 === O[0] ? 0 : k(O[0], r);
      }
      function A(t, e, r) {
        return b(t)
          ? t
          : {
              type: f,
              value: function (r) {
                return m(t.value, e, r);
              },
            };
      }
      function b(t) {
        return t && t.type === f;
      }
      function k(t, e) {
        return b(t) ? t.value(e) : t;
      }
      function O(t, e) {
        for (var r, f, x, w, g, d, M = [], E = 0; E < t.length; E++) {
          var m = t[E],
            A = m.type;
          if (A === s)
            'number' == typeof m.value && m.value < 0
              ? M.push('(' + m.value + ')')
              : Array.isArray(m.value)
                ? M.push('[' + m.value.map(T).join(', ') + ']')
                : M.push(T(m.value));
          else if (A === i)
            (f = M.pop()),
              (r = M.pop()),
              (w = m.value),
              e
                ? '^' === w
                  ? M.push('Math.pow(' + r + ', ' + f + ')')
                  : 'and' === w
                    ? M.push('(!!' + r + ' && !!' + f + ')')
                    : 'or' === w
                      ? M.push('(!!' + r + ' || !!' + f + ')')
                      : '||' === w
                        ? M.push(
                            '(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }((' +
                              r +
                              '),(' +
                              f +
                              ')))'
                          )
                        : '==' === w
                          ? M.push('(' + r + ' === ' + f + ')')
                          : '!=' === w
                            ? M.push('(' + r + ' !== ' + f + ')')
                            : '[' === w
                              ? M.push(r + '[(' + f + ') | 0]')
                              : M.push('(' + r + ' ' + w + ' ' + f + ')')
                : '[' === w
                  ? M.push(r + '[' + f + ']')
                  : M.push('(' + r + ' ' + w + ' ' + f + ')');
          else if (A === o) {
            if (((x = M.pop()), (f = M.pop()), (r = M.pop()), '?' !== (w = m.value)))
              throw new Error('invalid Expression');
            M.push('(' + r + ' ? ' + f + ' : ' + x + ')');
          } else if (A === a || A === p) M.push(m.value);
          else if (A === n)
            (r = M.pop()),
              '-' === (w = m.value) || '+' === w
                ? M.push('(' + w + r + ')')
                : e
                  ? 'not' === w
                    ? M.push('(!' + r + ')')
                    : '!' === w
                      ? M.push('fac(' + r + ')')
                      : M.push(w + '(' + r + ')')
                  : '!' === w
                    ? M.push('(' + r + '!)')
                    : M.push('(' + w + ' ' + r + ')');
          else if (A === h) {
            for (d = m.value, g = []; d-- > 0; ) g.unshift(M.pop());
            (w = M.pop()), M.push(w + '(' + g.join(', ') + ')');
          } else if (A === u) {
            for (f = M.pop(), d = m.value, g = []; d-- > 0; ) g.unshift(M.pop());
            (r = M.pop()),
              e
                ? M.push('(' + r + ' = function(' + g.join(', ') + ') { return ' + f + ' })')
                : M.push('(' + r + '(' + g.join(', ') + ') = ' + f + ')');
          } else if (A === l) (r = M.pop()), M.push(r + '.' + m.value);
          else if (A === y) {
            for (d = m.value, g = []; d-- > 0; ) g.unshift(M.pop());
            M.push('[' + g.join(', ') + ']');
          } else if (A === c) M.push('(' + O(m.value, e) + ')');
          else if (A !== v) throw new Error('invalid Expression');
        }
        return M.length > 1 && (M = e ? [M.join(',')] : [M.join(';')]), String(M[0]);
      }
      function T(t) {
        return 'string' == typeof t
          ? JSON.stringify(t)
              .replace(/\u2028/g, '\\u2028')
              .replace(/\u2029/g, '\\u2029')
          : t;
      }
      function C(t, e) {
        for (var r = 0; r < t.length; r++) if (t[r] === e) return !0;
        return !1;
      }
      function N(t, e, r) {
        for (var s = !!(r = r || {}).withMembers, n = null, i = 0; i < t.length; i++) {
          var o = t[i];
          o.type === a || o.type === p
            ? s || C(e, o.value)
              ? null !== n
                ? (C(e, n) || e.push(n), (n = o.value))
                : (n = o.value)
              : e.push(o.value)
            : o.type === l && s && null !== n
              ? (n += '.' + o.value)
              : o.type === c
                ? N(o.value, e, r)
                : null !== n && (C(e, n) || e.push(n), (n = null));
        }
        null === n || C(e, n) || e.push(n);
      }
      function S(t, e) {
        (this.tokens = t),
          (this.parser = e),
          (this.unaryOps = e.unaryOps),
          (this.binaryOps = e.binaryOps),
          (this.ternaryOps = e.ternaryOps),
          (this.functions = e.functions);
      }
      (x.prototype.toString = function () {
        switch (this.type) {
          case s:
          case n:
          case i:
          case o:
          case a:
          case p:
          case v:
            return this.value;
          case h:
            return 'CALL ' + this.value;
          case u:
            return 'DEF ' + this.value;
          case y:
            return 'ARRAY ' + this.value;
          case l:
            return '.' + this.value;
          default:
            return 'Invalid Instruction';
        }
      }),
        (S.prototype.simplify = function (t) {
          return (
            (t = t || {}),
            new S(M(this.tokens, this.unaryOps, this.binaryOps, this.ternaryOps, t), this.parser)
          );
        }),
        (S.prototype.substitute = function (t, e) {
          return (
            e instanceof S || (e = this.parser.parse(String(e))),
            new S(E(this.tokens, t, e), this.parser)
          );
        }),
        (S.prototype.evaluate = function (t) {
          return (t = t || {}), m(this.tokens, this, t);
        }),
        (S.prototype.toString = function () {
          return O(this.tokens, !1);
        }),
        (S.prototype.symbols = function (t) {
          t = t || {};
          var e = [];
          return N(this.tokens, e, t), e;
        }),
        (S.prototype.variables = function (t) {
          t = t || {};
          var e = [];
          N(this.tokens, e, t);
          var r = this.functions;
          return e.filter(function (t) {
            return !(t in r);
          });
        }),
        (S.prototype.toJSFunction = function (t, e) {
          var r = this,
            s = new Function(
              t,
              'with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return ' +
                O(this.simplify(e).tokens, !0) +
                '; }'
            );
          return function () {
            return s.apply(r, arguments);
          };
        });
      var I = 'TEOF',
        P = 'TOP',
        F = 'TNUMBER',
        R = 'TSTRING',
        L = 'TPAREN',
        j = 'TBRACKET',
        U = 'TCOMMA',
        q = 'TNAME',
        B = 'TSEMICOLON';
      function V(t, e, r) {
        (this.type = t), (this.value = e), (this.index = r);
      }
      function _(t, e) {
        (this.pos = 0),
          (this.current = null),
          (this.unaryOps = t.unaryOps),
          (this.binaryOps = t.binaryOps),
          (this.ternaryOps = t.ternaryOps),
          (this.consts = t.consts),
          (this.expression = e),
          (this.savedPosition = 0),
          (this.savedCurrent = null),
          (this.options = t.options),
          (this.parser = t);
      }
      (V.prototype.toString = function () {
        return this.type + ': ' + this.value;
      }),
        (_.prototype.newToken = function (t, e, r) {
          return new V(t, e, null != r ? r : this.pos);
        }),
        (_.prototype.save = function () {
          (this.savedPosition = this.pos), (this.savedCurrent = this.current);
        }),
        (_.prototype.restore = function () {
          (this.pos = this.savedPosition), (this.current = this.savedCurrent);
        }),
        (_.prototype.next = function () {
          return this.pos >= this.expression.length
            ? this.newToken(I, 'EOF')
            : this.isWhitespace() || this.isComment()
              ? this.next()
              : this.isRadixInteger() ||
                  this.isNumber() ||
                  this.isOperator() ||
                  this.isString() ||
                  this.isParen() ||
                  this.isBracket() ||
                  this.isComma() ||
                  this.isSemicolon() ||
                  this.isNamedOp() ||
                  this.isConst() ||
                  this.isName()
                ? this.current
                : void this.parseError(
                    'Unknown character "' + this.expression.charAt(this.pos) + '"'
                  );
        }),
        (_.prototype.isString = function () {
          var t = !1,
            e = this.pos,
            r = this.expression.charAt(e);
          if ("'" === r || '"' === r)
            for (
              var s = this.expression.indexOf(r, e + 1);
              s >= 0 && this.pos < this.expression.length;

            ) {
              if (((this.pos = s + 1), '\\' !== this.expression.charAt(s - 1))) {
                var n = this.expression.substring(e + 1, s);
                (this.current = this.newToken(R, this.unescape(n), e)), (t = !0);
                break;
              }
              s = this.expression.indexOf(r, s + 1);
            }
          return t;
        }),
        (_.prototype.isParen = function () {
          var t = this.expression.charAt(this.pos);
          return ('(' === t || ')' === t) && ((this.current = this.newToken(L, t)), this.pos++, !0);
        }),
        (_.prototype.isBracket = function () {
          var t = this.expression.charAt(this.pos);
          return (
            !(('[' !== t && ']' !== t) || !this.isOperatorEnabled('[')) &&
            ((this.current = this.newToken(j, t)), this.pos++, !0)
          );
        }),
        (_.prototype.isComma = function () {
          return (
            ',' === this.expression.charAt(this.pos) &&
            ((this.current = this.newToken(U, ',')), this.pos++, !0)
          );
        }),
        (_.prototype.isSemicolon = function () {
          return (
            ';' === this.expression.charAt(this.pos) &&
            ((this.current = this.newToken(B, ';')), this.pos++, !0)
          );
        }),
        (_.prototype.isConst = function () {
          for (var t = this.pos, e = t; e < this.expression.length; e++) {
            var r = this.expression.charAt(e);
            if (
              r.toUpperCase() === r.toLowerCase() &&
              (e === this.pos || ('_' !== r && '.' !== r && (r < '0' || r > '9')))
            )
              break;
          }
          if (e > t) {
            var s = this.expression.substring(t, e);
            if (s in this.consts)
              return (this.current = this.newToken(F, this.consts[s])), (this.pos += s.length), !0;
          }
          return !1;
        }),
        (_.prototype.isNamedOp = function () {
          for (var t = this.pos, e = t; e < this.expression.length; e++) {
            var r = this.expression.charAt(e);
            if (
              r.toUpperCase() === r.toLowerCase() &&
              (e === this.pos || ('_' !== r && (r < '0' || r > '9')))
            )
              break;
          }
          if (e > t) {
            var s = this.expression.substring(t, e);
            if (
              this.isOperatorEnabled(s) &&
              (s in this.binaryOps || s in this.unaryOps || s in this.ternaryOps)
            )
              return (this.current = this.newToken(P, s)), (this.pos += s.length), !0;
          }
          return !1;
        }),
        (_.prototype.isName = function () {
          for (var t = this.pos, e = t, r = !1; e < this.expression.length; e++) {
            var s = this.expression.charAt(e);
            if (s.toUpperCase() === s.toLowerCase()) {
              if (e === this.pos && ('$' === s || '_' === s)) {
                '_' === s && (r = !0);
                continue;
              }
              if (e === this.pos || !r || ('_' !== s && (s < '0' || s > '9'))) break;
            } else r = !0;
          }
          if (r) {
            var n = this.expression.substring(t, e);
            return (this.current = this.newToken(q, n)), (this.pos += n.length), !0;
          }
          return !1;
        }),
        (_.prototype.isWhitespace = function () {
          for (
            var t = !1, e = this.expression.charAt(this.pos);
            !(
              (' ' !== e && '\t' !== e && '\n' !== e && '\r' !== e) ||
              ((t = !0), this.pos++, this.pos >= this.expression.length)
            );

          )
            e = this.expression.charAt(this.pos);
          return t;
        });
      var $ = /^[0-9a-f]{4}$/i;
      function D(t, e, r) {
        (this.parser = t),
          (this.tokens = e),
          (this.current = null),
          (this.nextToken = null),
          this.next(),
          (this.savedCurrent = null),
          (this.savedNextToken = null),
          (this.allowMemberAccess = !1 !== r.allowMemberAccess);
      }
      (_.prototype.unescape = function (t) {
        var e = t.indexOf('\\');
        if (e < 0) return t;
        for (var r = t.substring(0, e); e >= 0; ) {
          var s = t.charAt(++e);
          switch (s) {
            case "'":
              r += "'";
              break;
            case '"':
              r += '"';
              break;
            case '\\':
              r += '\\';
              break;
            case '/':
              r += '/';
              break;
            case 'b':
              r += '\b';
              break;
            case 'f':
              r += '\f';
              break;
            case 'n':
              r += '\n';
              break;
            case 'r':
              r += '\r';
              break;
            case 't':
              r += '\t';
              break;
            case 'u':
              var n = t.substring(e + 1, e + 5);
              $.test(n) || this.parseError('Illegal escape sequence: \\u' + n),
                (r += String.fromCharCode(parseInt(n, 16))),
                (e += 4);
              break;
            default:
              throw this.parseError('Illegal escape sequence: "\\' + s + '"');
          }
          ++e;
          var i = t.indexOf('\\', e);
          (r += t.substring(e, i < 0 ? t.length : i)), (e = i);
        }
        return r;
      }),
        (_.prototype.isComment = function () {
          return (
            '/' === this.expression.charAt(this.pos) &&
            '*' === this.expression.charAt(this.pos + 1) &&
            ((this.pos = this.expression.indexOf('*/', this.pos) + 2),
            1 === this.pos && (this.pos = this.expression.length),
            !0)
          );
        }),
        (_.prototype.isRadixInteger = function () {
          var t,
            e,
            r = this.pos;
          if (r >= this.expression.length - 2 || '0' !== this.expression.charAt(r)) return !1;
          if ((++r, 'x' === this.expression.charAt(r))) (t = 16), (e = /^[0-9a-f]$/i), ++r;
          else {
            if ('b' !== this.expression.charAt(r)) return !1;
            (t = 2), (e = /^[01]$/i), ++r;
          }
          for (var s = !1, n = r; r < this.expression.length; ) {
            var i = this.expression.charAt(r);
            if (!e.test(i)) break;
            r++, (s = !0);
          }
          return (
            s &&
              ((this.current = this.newToken(F, parseInt(this.expression.substring(n, r), t))),
              (this.pos = r)),
            s
          );
        }),
        (_.prototype.isNumber = function () {
          for (
            var t, e = !1, r = this.pos, s = r, n = r, i = !1, o = !1;
            r < this.expression.length &&
            (((t = this.expression.charAt(r)) >= '0' && t <= '9') || (!i && '.' === t));

          )
            '.' === t ? (i = !0) : (o = !0), r++, (e = o);
          if ((e && (n = r), 'e' === t || 'E' === t)) {
            r++;
            for (var a = !0, p = !1; r < this.expression.length; ) {
              if (((t = this.expression.charAt(r)), !a || ('+' !== t && '-' !== t))) {
                if (!(t >= '0' && t <= '9')) break;
                (p = !0), (a = !1);
              } else a = !1;
              r++;
            }
            p || (r = n);
          }
          return (
            e
              ? ((this.current = this.newToken(F, parseFloat(this.expression.substring(s, r)))),
                (this.pos = r))
              : (this.pos = n),
            e
          );
        }),
        (_.prototype.isOperator = function () {
          var t = this.pos,
            e = this.expression.charAt(this.pos);
          if (
            '+' === e ||
            '-' === e ||
            '*' === e ||
            '/' === e ||
            '%' === e ||
            '^' === e ||
            '?' === e ||
            ':' === e ||
            '.' === e
          )
            this.current = this.newToken(P, e);
          else if ('∙' === e || '•' === e) this.current = this.newToken(P, '*');
          else if ('>' === e)
            '=' === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(P, '>=')), this.pos++)
              : (this.current = this.newToken(P, '>'));
          else if ('<' === e)
            '=' === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(P, '<=')), this.pos++)
              : (this.current = this.newToken(P, '<'));
          else if ('|' === e) {
            if ('|' !== this.expression.charAt(this.pos + 1)) return !1;
            (this.current = this.newToken(P, '||')), this.pos++;
          } else if ('=' === e)
            '=' === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(P, '==')), this.pos++)
              : (this.current = this.newToken(P, e));
          else {
            if ('!' !== e) return !1;
            '=' === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(P, '!=')), this.pos++)
              : (this.current = this.newToken(P, e));
          }
          return this.pos++, !!this.isOperatorEnabled(this.current.value) || ((this.pos = t), !1);
        }),
        (_.prototype.isOperatorEnabled = function (t) {
          return this.parser.isOperatorEnabled(t);
        }),
        (_.prototype.getCoordinates = function () {
          var t,
            e = 0,
            r = -1;
          do {
            e++, (t = this.pos - r), (r = this.expression.indexOf('\n', r + 1));
          } while (r >= 0 && r < this.pos);
          return { line: e, column: t };
        }),
        (_.prototype.parseError = function (t) {
          var e = this.getCoordinates();
          throw new Error('parse error [' + e.line + ':' + e.column + ']: ' + t);
        }),
        (D.prototype.next = function () {
          return (this.current = this.nextToken), (this.nextToken = this.tokens.next());
        }),
        (D.prototype.tokenMatches = function (t, e) {
          return (
            void 0 === e ||
            (Array.isArray(e) ? C(e, t.value) : 'function' == typeof e ? e(t) : t.value === e)
          );
        }),
        (D.prototype.save = function () {
          (this.savedCurrent = this.current),
            (this.savedNextToken = this.nextToken),
            this.tokens.save();
        }),
        (D.prototype.restore = function () {
          this.tokens.restore(),
            (this.current = this.savedCurrent),
            (this.nextToken = this.savedNextToken);
        }),
        (D.prototype.accept = function (t, e) {
          return (
            !(this.nextToken.type !== t || !this.tokenMatches(this.nextToken, e)) &&
            (this.next(), !0)
          );
        }),
        (D.prototype.expect = function (t, e) {
          if (!this.accept(t, e)) {
            var r = this.tokens.getCoordinates();
            throw new Error('parse error [' + r.line + ':' + r.column + ']: Expected ' + (e || t));
          }
        }),
        (D.prototype.parseAtom = function (t) {
          var e = this.tokens.unaryOps;
          if (
            this.accept(q) ||
            this.accept(P, function (t) {
              return t.value in e;
            })
          )
            t.push(new x(a, this.current.value));
          else if (this.accept(F)) t.push(new x(s, this.current.value));
          else if (this.accept(R)) t.push(new x(s, this.current.value));
          else if (this.accept(L, '(')) this.parseExpression(t), this.expect(L, ')');
          else {
            if (!this.accept(j, '[')) throw new Error('unexpected ' + this.nextToken);
            if (this.accept(j, ']')) t.push(new x(y, 0));
            else {
              var r = this.parseArrayList(t);
              t.push(new x(y, r));
            }
          }
        }),
        (D.prototype.parseExpression = function (t) {
          var e = [];
          this.parseUntilEndStatement(t, e) ||
            (this.parseVariableAssignmentExpression(e),
            this.parseUntilEndStatement(t, e) || this.pushExpression(t, e));
        }),
        (D.prototype.pushExpression = function (t, e) {
          for (var r = 0, s = e.length; r < s; r++) t.push(e[r]);
        }),
        (D.prototype.parseUntilEndStatement = function (t, e) {
          return (
            !!this.accept(B) &&
            (!this.nextToken ||
              this.nextToken.type === I ||
              (this.nextToken.type === L && ')' === this.nextToken.value) ||
              e.push(new x(v)),
            this.nextToken.type !== I && this.parseExpression(e),
            t.push(new x(c, e)),
            !0)
          );
        }),
        (D.prototype.parseArrayList = function (t) {
          for (var e = 0; !this.accept(j, ']'); )
            for (this.parseExpression(t), ++e; this.accept(U); ) this.parseExpression(t), ++e;
          return e;
        }),
        (D.prototype.parseVariableAssignmentExpression = function (t) {
          for (this.parseConditionalExpression(t); this.accept(P, '='); ) {
            var e = t.pop(),
              r = [],
              s = t.length - 1;
            if (e.type !== h) {
              if (e.type !== a && e.type !== l) throw new Error('expected variable for assignment');
              this.parseVariableAssignmentExpression(r),
                t.push(new x(p, e.value)),
                t.push(new x(c, r)),
                t.push(g('='));
            } else {
              if (!this.tokens.isOperatorEnabled('()='))
                throw new Error('function definition is not permitted');
              for (var n = 0, i = e.value + 1; n < i; n++) {
                var o = s - n;
                t[o].type === a && (t[o] = new x(p, t[o].value));
              }
              this.parseVariableAssignmentExpression(r),
                t.push(new x(c, r)),
                t.push(new x(u, e.value));
            }
          }
        }),
        (D.prototype.parseConditionalExpression = function (t) {
          for (this.parseOrExpression(t); this.accept(P, '?'); ) {
            var e = [],
              r = [];
            this.parseConditionalExpression(e),
              this.expect(P, ':'),
              this.parseConditionalExpression(r),
              t.push(new x(c, e)),
              t.push(new x(c, r)),
              t.push(d('?'));
          }
        }),
        (D.prototype.parseOrExpression = function (t) {
          for (this.parseAndExpression(t); this.accept(P, 'or'); ) {
            var e = [];
            this.parseAndExpression(e), t.push(new x(c, e)), t.push(g('or'));
          }
        }),
        (D.prototype.parseAndExpression = function (t) {
          for (this.parseComparison(t); this.accept(P, 'and'); ) {
            var e = [];
            this.parseComparison(e), t.push(new x(c, e)), t.push(g('and'));
          }
        });
      var X = ['==', '!=', '<', '<=', '>=', '>', 'in'];
      D.prototype.parseComparison = function (t) {
        for (this.parseAddSub(t); this.accept(P, X); ) {
          var e = this.current;
          this.parseAddSub(t), t.push(g(e.value));
        }
      };
      var G = ['+', '-', '||'];
      D.prototype.parseAddSub = function (t) {
        for (this.parseTerm(t); this.accept(P, G); ) {
          var e = this.current;
          this.parseTerm(t), t.push(g(e.value));
        }
      };
      var J = ['*', '/', '%'];
      function W(t, e) {
        return Number(t) + Number(e);
      }
      function Y(t, e) {
        return t - e;
      }
      function K(t, e) {
        return t * e;
      }
      function z(t, e) {
        return t / e;
      }
      function H(t, e) {
        return t % e;
      }
      function Q(t, e) {
        return Array.isArray(t) && Array.isArray(e) ? t.concat(e) : '' + t + e;
      }
      function Z(t, e) {
        return t === e;
      }
      function tt(t, e) {
        return t !== e;
      }
      function et(t, e) {
        return t > e;
      }
      function rt(t, e) {
        return t < e;
      }
      function st(t, e) {
        return t >= e;
      }
      function nt(t, e) {
        return t <= e;
      }
      function it(t, e) {
        return Boolean(t && e);
      }
      function ot(t, e) {
        return Boolean(t || e);
      }
      function at(t, e) {
        return C(e, t);
      }
      function pt(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }
      function ht(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }
      function ut(t) {
        return t === 1 / 0
          ? 1
          : t === -1 / 0
            ? -1
            : (Math.exp(t) - Math.exp(-t)) / (Math.exp(t) + Math.exp(-t));
      }
      function ct(t) {
        return t === -1 / 0 ? t : Math.log(t + Math.sqrt(t * t + 1));
      }
      function ft(t) {
        return Math.log(t + Math.sqrt(t * t - 1));
      }
      function lt(t) {
        return Math.log((1 + t) / (1 - t)) / 2;
      }
      function vt(t) {
        return Math.log(t) * Math.LOG10E;
      }
      function yt(t) {
        return -t;
      }
      function xt(t) {
        return !t;
      }
      function wt(t) {
        return t < 0 ? Math.ceil(t) : Math.floor(t);
      }
      function gt(t) {
        return Math.random() * (t || 1);
      }
      function dt(t) {
        return mt(t + 1);
      }
      (D.prototype.parseTerm = function (t) {
        for (this.parseFactor(t); this.accept(P, J); ) {
          var e = this.current;
          this.parseFactor(t), t.push(g(e.value));
        }
      }),
        (D.prototype.parseFactor = function (t) {
          var e = this.tokens.unaryOps;
          if (
            (this.save(),
            this.accept(P, function (t) {
              return t.value in e;
            }))
          ) {
            if ('-' !== this.current.value && '+' !== this.current.value) {
              if (this.nextToken.type === L && '(' === this.nextToken.value)
                return this.restore(), void this.parseExponential(t);
              if (
                this.nextToken.type === B ||
                this.nextToken.type === U ||
                this.nextToken.type === I ||
                (this.nextToken.type === L && ')' === this.nextToken.value)
              )
                return this.restore(), void this.parseAtom(t);
            }
            var r = this.current;
            this.parseFactor(t), t.push(w(r.value));
          } else this.parseExponential(t);
        }),
        (D.prototype.parseExponential = function (t) {
          for (this.parsePostfixExpression(t); this.accept(P, '^'); )
            this.parseFactor(t), t.push(g('^'));
        }),
        (D.prototype.parsePostfixExpression = function (t) {
          for (this.parseFunctionCall(t); this.accept(P, '!'); ) t.push(w('!'));
        }),
        (D.prototype.parseFunctionCall = function (t) {
          var e = this.tokens.unaryOps;
          if (
            this.accept(P, function (t) {
              return t.value in e;
            })
          ) {
            var r = this.current;
            this.parseAtom(t), t.push(w(r.value));
          } else
            for (this.parseMemberExpression(t); this.accept(L, '('); )
              if (this.accept(L, ')')) t.push(new x(h, 0));
              else {
                var s = this.parseArgumentList(t);
                t.push(new x(h, s));
              }
        }),
        (D.prototype.parseArgumentList = function (t) {
          for (var e = 0; !this.accept(L, ')'); )
            for (this.parseExpression(t), ++e; this.accept(U); ) this.parseExpression(t), ++e;
          return e;
        }),
        (D.prototype.parseMemberExpression = function (t) {
          for (this.parseAtom(t); this.accept(P, '.') || this.accept(j, '['); ) {
            var e = this.current;
            if ('.' === e.value) {
              if (!this.allowMemberAccess)
                throw new Error('unexpected ".", member access is not permitted');
              this.expect(q), t.push(new x(l, this.current.value));
            } else {
              if ('[' !== e.value) throw new Error('unexpected symbol: ' + e.value);
              if (!this.tokens.isOperatorEnabled('['))
                throw new Error('unexpected "[]", arrays are disabled');
              this.parseExpression(t), this.expect(j, ']'), t.push(g('['));
            }
          }
        });
      var Mt = 4.7421875,
        Et = [
          0.9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746,
          -0.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20,
          0.0001580887032249125, -0.00021026444172410488, 0.00021743961811521265,
          -0.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21,
          36899182659531625e-22,
        ];
      function mt(t) {
        var e, r;
        if (
          (function (t) {
            return isFinite(t) && t === Math.round(t);
          })(t)
        ) {
          if (t <= 0) return isFinite(t) ? 1 / 0 : NaN;
          if (t > 171) return 1 / 0;
          for (var s = t - 2, n = t - 1; s > 1; ) (n *= s), s--;
          return 0 === n && (n = 1), n;
        }
        if (t < 0.5) return Math.PI / (Math.sin(Math.PI * t) * mt(1 - t));
        if (t >= 171.35) return 1 / 0;
        if (t > 85) {
          var i = t * t,
            o = i * t,
            a = o * t,
            p = a * t;
          return (
            Math.sqrt((2 * Math.PI) / t) *
            Math.pow(t / Math.E, t) *
            (1 +
              1 / (12 * t) +
              1 / (288 * i) -
              139 / (51840 * o) -
              571 / (2488320 * a) +
              163879 / (209018880 * p) +
              5246819 / (75246796800 * p * t))
          );
        }
        --t, (r = Et[0]);
        for (var h = 1; h < Et.length; ++h) r += Et[h] / (t + h);
        return (e = t + Mt + 0.5), Math.sqrt(2 * Math.PI) * Math.pow(e, t + 0.5) * Math.exp(-e) * r;
      }
      function At(t) {
        return Array.isArray(t) ? t.length : String(t).length;
      }
      function bt() {
        for (var t = 0, e = 0, r = 0; r < arguments.length; r++) {
          var s,
            n = Math.abs(arguments[r]);
          e < n ? ((t = t * (s = e / n) * s + 1), (e = n)) : (t += n > 0 ? (s = n / e) * s : n);
        }
        return e === 1 / 0 ? 1 / 0 : e * Math.sqrt(t);
      }
      function kt(t, e, r) {
        return t ? e : r;
      }
      function Ot(t, e) {
        return void 0 === e || 0 == +e
          ? Math.round(t)
          : ((t = +t),
            (e = -+e),
            isNaN(t) || 'number' != typeof e || e % 1 != 0
              ? NaN
              : ((t = t.toString().split('e')),
                +(
                  (t = (t = Math.round(+(t[0] + 'e' + (t[1] ? +t[1] - e : -e))))
                    .toString()
                    .split('e'))[0] +
                  'e' +
                  (t[1] ? +t[1] + e : e)
                )));
      }
      function Tt(t, e, r) {
        return r && (r[t] = e), e;
      }
      function Ct(t, e) {
        return t[0 | e];
      }
      function Nt(t) {
        return 1 === arguments.length && Array.isArray(t)
          ? Math.max.apply(Math, t)
          : Math.max.apply(Math, arguments);
      }
      function St(t) {
        return 1 === arguments.length && Array.isArray(t)
          ? Math.min.apply(Math, t)
          : Math.min.apply(Math, arguments);
      }
      function It(t, e) {
        if ('function' != typeof t) throw new Error('First argument to map is not a function');
        if (!Array.isArray(e)) throw new Error('Second argument to map is not an array');
        return e.map(function (e, r) {
          return t(e, r);
        });
      }
      function Pt(t, e, r) {
        if ('function' != typeof t) throw new Error('First argument to fold is not a function');
        if (!Array.isArray(r)) throw new Error('Second argument to fold is not an array');
        return r.reduce(function (e, r, s) {
          return t(e, r, s);
        }, e);
      }
      function Ft(t, e) {
        if ('function' != typeof t) throw new Error('First argument to filter is not a function');
        if (!Array.isArray(e)) throw new Error('Second argument to filter is not an array');
        return e.filter(function (e, r) {
          return t(e, r);
        });
      }
      function Rt(t, e) {
        if (!Array.isArray(e) && 'string' != typeof e)
          throw new Error('Second argument to indexOf is not a string or array');
        return e.indexOf(t);
      }
      function Lt(t, e) {
        if (!Array.isArray(e)) throw new Error('Second argument to join is not an array');
        return e.join(t);
      }
      function jt(t) {
        return (t > 0) - (t < 0) || +t;
      }
      var Ut = 1 / 3;
      function qt(t) {
        return t < 0 ? -Math.pow(-t, Ut) : Math.pow(t, Ut);
      }
      function Bt(t) {
        return Math.exp(t) - 1;
      }
      function Vt(t) {
        return Math.log(1 + t);
      }
      function _t(t) {
        return Math.log(t) / Math.LN2;
      }
      function $t(t) {
        (this.options = t || {}),
          (this.unaryOps = {
            sin: Math.sin,
            cos: Math.cos,
            tan: Math.tan,
            asin: Math.asin,
            acos: Math.acos,
            atan: Math.atan,
            sinh: Math.sinh || pt,
            cosh: Math.cosh || ht,
            tanh: Math.tanh || ut,
            asinh: Math.asinh || ct,
            acosh: Math.acosh || ft,
            atanh: Math.atanh || lt,
            sqrt: Math.sqrt,
            cbrt: Math.cbrt || qt,
            log: Math.log,
            log2: Math.log2 || _t,
            ln: Math.log,
            lg: Math.log10 || vt,
            log10: Math.log10 || vt,
            expm1: Math.expm1 || Bt,
            log1p: Math.log1p || Vt,
            abs: Math.abs,
            ceil: Math.ceil,
            floor: Math.floor,
            round: Math.round,
            trunc: Math.trunc || wt,
            '-': yt,
            '+': Number,
            exp: Math.exp,
            not: xt,
            length: At,
            '!': dt,
            sign: Math.sign || jt,
          }),
          (this.binaryOps = {
            '+': W,
            '-': Y,
            '*': K,
            '/': z,
            '%': H,
            '^': Math.pow,
            '||': Q,
            '==': Z,
            '!=': tt,
            '>': et,
            '<': rt,
            '>=': st,
            '<=': nt,
            and: it,
            or: ot,
            in: at,
            '=': Tt,
            '[': Ct,
          }),
          (this.ternaryOps = { '?': kt }),
          (this.functions = {
            random: gt,
            fac: dt,
            min: St,
            max: Nt,
            hypot: Math.hypot || bt,
            pyt: Math.hypot || bt,
            pow: Math.pow,
            atan2: Math.atan2,
            if: kt,
            gamma: mt,
            roundTo: Ot,
            map: It,
            fold: Pt,
            filter: Ft,
            indexOf: Rt,
            join: Lt,
          }),
          (this.consts = { E: Math.E, PI: Math.PI, true: !0, false: !1 });
      }
      ($t.prototype.parse = function (t) {
        var e = [],
          r = new D(this, new _(this, t), { allowMemberAccess: this.options.allowMemberAccess });
        return r.parseExpression(e), r.expect(I, 'EOF'), new S(e, this);
      }),
        ($t.prototype.evaluate = function (t, e) {
          return this.parse(t).evaluate(e);
        });
      var Dt = new $t();
      ($t.parse = function (t) {
        return Dt.parse(t);
      }),
        ($t.evaluate = function (t, e) {
          return Dt.parse(t).evaluate(e);
        });
      var Xt = {
        '+': 'add',
        '-': 'subtract',
        '*': 'multiply',
        '/': 'divide',
        '%': 'remainder',
        '^': 'power',
        '!': 'factorial',
        '<': 'comparison',
        '>': 'comparison',
        '<=': 'comparison',
        '>=': 'comparison',
        '==': 'comparison',
        '!=': 'comparison',
        '||': 'concatenate',
        and: 'logical',
        or: 'logical',
        not: 'logical',
        '?': 'conditional',
        ':': 'conditional',
        '=': 'assignment',
        '[': 'array',
        '()=': 'fndef',
      };
      $t.prototype.isOperatorEnabled = function (t) {
        var e = (function (t) {
            return Xt.hasOwnProperty(t) ? Xt[t] : t;
          })(t),
          r = this.options.operators || {};
        return !(e in r) || !!r[e];
      };
    },
  },
]);
