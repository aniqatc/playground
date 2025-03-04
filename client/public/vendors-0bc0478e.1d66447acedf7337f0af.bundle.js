(self.webpackChunkplayground = self.webpackChunkplayground || []).push([
  [772],
  {
    2290: (t, e, r) => {
      'use strict';
      r(760), (t.exports.Parser = r(9015)), (t.exports.nodeTypes = r(2371));
    },
    760: (t, e, r) => {
      var n = r(9088),
        i = { n: '\n', f: '\f', r: '\r', t: '\t', v: '\v', "'": "'", '"': '"' },
        o = {
          ',': !0,
          '(': !0,
          ')': !0,
          '[': !0,
          ']': !0,
          ';': !0,
          '~': !0,
          '!': !0,
          '+': !0,
          '-': !0,
          '*': !0,
          '/': !0,
          '%': !0,
          '^': !0,
          '**': !0,
          '|': !0,
          '&': !0,
          '^|': !0,
          '=': !0,
          ':': !0,
          '?': !0,
          '||': !0,
          '&&': !0,
          xor: !0,
          '==': !0,
          '!=': !0,
          '===': !0,
          '!==': !0,
          '<': !0,
          '>': !0,
          '>=': !0,
          '<=': !0,
          '>>>': !0,
          '<<': !0,
          '>>': !0,
        };
      function s(t) {
        return t >= '0' && t <= '9';
      }
      function p(t) {
        return (t >= 'a' && t <= 'z') || (t >= 'A' && t <= 'Z') || '$' === t || '_' === t;
      }
      function u(t) {
        return ' ' === t || '\r' === t || '\t' === t || '\n' === t || '\v' === t || ' ' === t;
      }
      function h(t) {
        return o[t];
      }
      function a(t) {
        return "'" === t || '"' === t;
      }
      function c() {}
      (c.prototype.throwError = function (t, e) {
        e = void 0 === e ? this.index : e;
        var r = new Error(t + ' at index ' + e);
        throw ((r.index = e), (r.description = t), r);
      }),
        (c.prototype.lex = function (t) {
          for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length; ) {
            for (; u(this.peek()); ) this.consume();
            var e = this.peek(),
              r = e + this.peek(1),
              i = r + this.peek(2);
            h(i)
              ? (this.tokens.push({ type: n.DELIMITER, value: i }),
                this.consume(),
                this.consume(),
                this.consume())
              : h(r)
                ? (this.tokens.push({ type: n.DELIMITER, value: r }),
                  this.consume(),
                  this.consume())
                : h(e)
                  ? (this.tokens.push({ type: n.DELIMITER, value: e }), this.consume())
                  : s(e) || ('.' === e && s(this.peek(1)))
                    ? this.tokens.push({ type: n.NUMBER, value: this.readNumber() })
                    : a(e)
                      ? this.tokens.push({ type: n.STRING, value: this.readString() })
                      : p(e)
                        ? this.tokens.push({ type: n.SYMBOL, value: this.readIdentifier() })
                        : this.throwError('unexpected character ' + e);
          }
          return this.tokens.push({ type: n.EOF }), this.tokens;
        }),
        (c.prototype.peek = function (t) {
          if (((t = t || 0), !(this.index + t >= this.text.length)))
            return this.text.charAt(this.index + t);
        }),
        (c.prototype.consume = function () {
          var t = this.peek();
          return (this.index += 1), t;
        }),
        (c.prototype.readNumber = function () {
          var t = '';
          if ('.' === this.peek())
            (t += this.consume()), s(this.peek()) || this.throwError('number expected');
          else {
            for (; s(this.peek()); ) t += this.consume();
            '.' === this.peek() && (t += this.consume());
          }
          for (; s(this.peek()); ) t += this.consume();
          if ('e' === this.peek() || 'E' === this.peek())
            for (
              t += this.consume(),
                s(this.peek()) || '+' === this.peek() || '-' === this.peek() || this.throwError(),
                ('+' !== this.peek() && '-' !== this.peek()) || (t += this.consume()),
                s(this.peek()) || this.throwError('number expected');
              s(this.peek());

            )
              t += this.consume();
          return t;
        }),
        (c.prototype.readIdentifier = function () {
          for (var t = ''; p(this.peek()) || s(this.peek()); ) t += this.consume();
          return t;
        }),
        (c.prototype.readString = function () {
          for (var t, e = this.consume(), r = ''; ; ) {
            var n = this.consume();
            if ((n || this.throwError('string is not closed'), t)) {
              if ('u' === n) {
                var o = this.text.substring(this.index + 1, this.index + 5);
                o.match(/[\da-f]{4}/i) || this.throwError('invalid unicode escape'),
                  (this.index += 4),
                  (r += String.fromCharCode(parseInt(o, 16)));
              } else {
                var s = i[n];
                r += s || n;
              }
              t = !1;
            } else {
              if (n === e) break;
              '\\' === n ? (t = !0) : (r += n);
            }
          }
          return r;
        }),
        (t.exports = c);
    },
    9015: (t, e, r) => {
      var n = r(9088),
        i = r(760),
        o = r(487),
        s = r(8867),
        p = r(1828),
        u = r(3303),
        h = r(9659),
        a = r(6574),
        c = r(6819),
        f = r(7370),
        y = r(5738);
      function l() {
        (this.lexer = new i()), (this.tokens = null);
      }
      (l.prototype.current = function () {
        return this.tokens[0];
      }),
        (l.prototype.next = function () {
          return this.tokens[1];
        }),
        (l.prototype.peek = function () {
          if (this.tokens.length)
            for (var t = this.tokens[0], e = 0; e < arguments.length; e += 1)
              if (t.value === arguments[e]) return !0;
        }),
        (l.prototype.consume = function (t) {
          return this.tokens.shift();
        }),
        (l.prototype.expect = function (t) {
          if (!this.peek(t)) throw Error('expected ' + t);
          return this.consume();
        }),
        (l.prototype.isEOF = function () {
          return this.current().type === n.EOF;
        }),
        (l.prototype.parse = function (t) {
          return (this.tokens = this.lexer.lex(t)), this.program();
        }),
        (l.prototype.program = function () {
          for (var t = []; !this.isEOF(); )
            t.push(this.assignment()), this.peek(';') && this.consume();
          return this.end(), new y(t);
        }),
        (l.prototype.assignment = function () {
          var t = this.ternary();
          return t instanceof u && this.peek('=')
            ? (this.consume(), new f(t.name, this.assignment()))
            : t;
        }),
        (l.prototype.ternary = function () {
          var t = this.logicalOR();
          if (this.peek('?')) {
            this.consume();
            var e = this.ternary();
            this.expect(':');
            var r = this.ternary();
            return new c(t, e, r);
          }
          return t;
        }),
        (l.prototype.logicalOR = function () {
          var t = this.logicalXOR();
          if (this.peek('||')) {
            var e = this.consume(),
              r = this.logicalOR();
            return new s(e.value, [t, r]);
          }
          return t;
        }),
        (l.prototype.logicalXOR = function () {
          var t = this.logicalAND();
          if ('xor' === this.current().value) {
            var e = this.consume(),
              r = this.logicalXOR();
            return new s(e.value, [t, r]);
          }
          return t;
        }),
        (l.prototype.logicalAND = function () {
          var t = this.bitwiseOR();
          if (this.peek('&&')) {
            var e = this.consume(),
              r = this.logicalAND();
            return new s(e.value, [t, r]);
          }
          return t;
        }),
        (l.prototype.bitwiseOR = function () {
          var t = this.bitwiseXOR();
          if (this.peek('|')) {
            var e = this.consume(),
              r = this.bitwiseOR();
            return new s(e.value, [t, r]);
          }
          return t;
        }),
        (l.prototype.bitwiseXOR = function () {
          var t = this.bitwiseAND();
          if (this.peek('^|')) {
            var e = this.consume(),
              r = this.bitwiseXOR();
            return new s(e.value, [t, r]);
          }
          return t;
        }),
        (l.prototype.bitwiseAND = function () {
          var t = this.relational();
          if (this.peek('&')) {
            var e = this.consume(),
              r = this.bitwiseAND();
            return new s(e.value, [t, r]);
          }
          return t;
        }),
        (l.prototype.relational = function () {
          var t = this.shift();
          if (this.peek('==', '===', '!=', '!==', '>=', '<=', '>', '<')) {
            var e = this.consume(),
              r = this.shift();
            return new s(e.value, [t, r]);
          }
          return t;
        }),
        (l.prototype.shift = function () {
          var t = this.additive();
          if (this.peek('>>', '<<', '>>>')) {
            var e = this.consume(),
              r = this.shift();
            return new s(e.value, [t, r]);
          }
          return t;
        }),
        (l.prototype.additive = function () {
          for (var t = this.multiplicative(); this.peek('+', '-'); ) {
            var e = this.consume();
            t = new s(e.value, [t, this.multiplicative()]);
          }
          return t;
        }),
        (l.prototype.multiplicative = function () {
          for (var t, e, r = this.unary(); this.peek('*', '/', '%'); )
            (t = this.consume()), (r = new s(t.value, [r, this.unary()]));
          return this.current().type === n.SYMBOL ||
            this.peek('(') ||
            (!(r.type instanceof o) && this.current().type === n.NUMBER)
            ? ((e = this.multiplicative()), new s('*', [r, e]))
            : r;
        }),
        (l.prototype.unary = function () {
          if (this.peek('-', '+', '~')) {
            var t = this.consume(),
              e = this.unary();
            return new p(t.value, e);
          }
          return this.pow();
        }),
        (l.prototype.pow = function () {
          var t = this.factorial();
          if (this.peek('^', '**')) {
            var e = this.consume(),
              r = this.unary();
            return new s(e.value, [t, r]);
          }
          return t;
        }),
        (l.prototype.factorial = function () {
          var t = this.symbol();
          if (this.peek('!')) {
            var e = this.consume();
            return new s(e.value, [t]);
          }
          return t;
        }),
        (l.prototype.symbol = function () {
          if (this.current().type === n.SYMBOL) {
            var t = this.consume();
            return this.functionCall(t);
          }
          return this.string();
        }),
        (l.prototype.functionCall = function (t) {
          var e = t.value;
          if (this.peek('(')) {
            this.consume();
            for (var r = []; !this.peek(')') && !this.isEOF(); )
              r.push(this.assignment()), this.peek(',') && this.consume();
            return this.expect(')'), new h(e, r);
          }
          return new u(e);
        }),
        (l.prototype.string = function () {
          return this.current().type === n.STRING
            ? new o(this.consume().value, 'string')
            : this.array();
        }),
        (l.prototype.array = function () {
          if (this.peek('[')) {
            this.consume();
            for (var t = []; !this.peek(']') && !this.isEOF(); )
              t.push(this.assignment()), this.peek(',') && this.consume();
            return this.expect(']'), new a(t);
          }
          return this.number();
        }),
        (l.prototype.number = function () {
          return this.current().type === n.NUMBER
            ? new o(this.consume().value, 'number')
            : this.parentheses();
        }),
        (l.prototype.parentheses = function () {
          if ('(' === this.current().value) {
            this.consume();
            var t = this.assignment();
            return this.expect(')'), t;
          }
          return this.end();
        }),
        (l.prototype.end = function () {
          if (this.current().type !== n.EOF) throw Error('unexpected end of expression');
        }),
        (t.exports = l);
    },
    6574: (t, e, r) => {
      var n = r(7315);
      function i(t) {
        this.nodes = t;
      }
      (i.prototype = Object.create(n.prototype)), (i.prototype.type = 'ArrayNode'), (t.exports = i);
    },
    7370: (t, e, r) => {
      var n = r(7315);
      function i(t, e) {
        (this.name = t), (this.expr = e);
      }
      (i.prototype = Object.create(n.prototype)),
        (i.prototype.type = 'AssignmentNode'),
        (t.exports = i);
    },
    5738: (t, e, r) => {
      var n = r(7315);
      function i(t) {
        this.blocks = t;
      }
      (i.prototype = Object.create(n.prototype)), (i.prototype.type = 'BlockNode'), (t.exports = i);
    },
    6819: (t, e, r) => {
      var n = r(7315);
      function i(t, e, r) {
        (this.condition = t), (this.trueExpr = e), (this.falseExpr = r);
      }
      (i.prototype = Object.create(n.prototype)),
        (i.prototype.type = 'ConditionalNode'),
        (t.exports = i);
    },
    487: (t, e, r) => {
      var n = r(7315),
        i = { number: !0, string: !0, boolean: !0, undefined: !0, null: !0 };
      function o(t, e) {
        if (!i[e]) throw Error("unsupported type '" + e + "'");
        (this.value = t), (this.valueType = e);
      }
      (o.prototype = Object.create(n.prototype)),
        (o.prototype.type = 'ConstantNode'),
        (t.exports = o);
    },
    9659: (t, e, r) => {
      var n = r(7315);
      function i(t, e) {
        (this.name = t), (this.args = e);
      }
      (i.prototype = Object.create(n.prototype)),
        (i.prototype.type = 'FunctionNode'),
        (t.exports = i);
    },
    7315: (t) => {
      function e() {}
      (e.prototype.type = 'Node'), (t.exports = e);
    },
    8867: (t, e, r) => {
      var n = r(7315);
      function i(t, e) {
        (this.op = t), (this.args = e || []);
      }
      (i.prototype = Object.create(n.prototype)),
        (i.prototype.type = 'OperatorNode'),
        (t.exports = i);
    },
    3303: (t, e, r) => {
      var n = r(7315);
      function i(t) {
        this.name = t;
      }
      (i.prototype = Object.create(n.prototype)),
        (i.prototype.type = 'SymbolNode'),
        (t.exports = i);
    },
    1828: (t, e, r) => {
      var n = r(7315);
      function i(t, e) {
        (this.op = t), (this.argument = e);
      }
      (i.prototype = Object.create(n.prototype)), (i.prototype.type = 'UnaryNode'), (t.exports = i);
    },
    2371: (t, e, r) => {
      t.exports = {
        ArrayNode: r(6574),
        AssignmentNode: r(7370),
        BlockNode: r(5738),
        ConditionalNode: r(6819),
        ConstantNode: r(487),
        FunctionNode: r(9659),
        Node: r(7315),
        OperatorNode: r(8867),
        SymbolNode: r(3303),
        UnaryNode: r(1828),
      };
    },
    9088: (t) => {
      t.exports = { EOF: 0, DELIMITER: 1, NUMBER: 2, STRING: 3, SYMBOL: 4 };
    },
    7176: (t, e, r) => {
      'use strict';
      var n = r(8778),
        i = Math.pow(2, -1074),
        o = -1 >>> 0;
      t.exports = function (t, e) {
        if (isNaN(t) || isNaN(e)) return NaN;
        if (t === e) return t;
        if (0 === t) return e < 0 ? -i : i;
        var r = n.hi(t),
          s = n.lo(t);
        e > t == t > 0
          ? s === o
            ? ((r += 1), (s = 0))
            : (s += 1)
          : 0 === s
            ? ((s = o), (r -= 1))
            : (s -= 1);
        return n.pack(s, r);
      };
    },
    3829: (t, e, r) => {
      'use strict';
      r.d(e, { A: () => h });
      const n = {
        randomUUID:
          'undefined' != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      };
      let i;
      const o = new Uint8Array(16);
      function s() {
        if (
          !i &&
          ((i =
            'undefined' != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)),
          !i)
        )
          throw new Error(
            'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
          );
        return i(o);
      }
      const p = [];
      for (let t = 0; t < 256; ++t) p.push((t + 256).toString(16).slice(1));
      function u(t, e = 0) {
        return (
          p[t[e + 0]] +
          p[t[e + 1]] +
          p[t[e + 2]] +
          p[t[e + 3]] +
          '-' +
          p[t[e + 4]] +
          p[t[e + 5]] +
          '-' +
          p[t[e + 6]] +
          p[t[e + 7]] +
          '-' +
          p[t[e + 8]] +
          p[t[e + 9]] +
          '-' +
          p[t[e + 10]] +
          p[t[e + 11]] +
          p[t[e + 12]] +
          p[t[e + 13]] +
          p[t[e + 14]] +
          p[t[e + 15]]
        );
      }
      const h = function (t, e, r) {
        if (n.randomUUID && !e && !t) return n.randomUUID();
        const i = (t = t || {}).random || (t.rng || s)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), e)) {
          r = r || 0;
          for (let t = 0; t < 16; ++t) e[r + t] = i[t];
          return e;
        }
        return u(i);
      };
    },
  },
]);
