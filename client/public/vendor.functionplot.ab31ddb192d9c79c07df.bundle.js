(self.webpackChunkplayground = self.webpackChunkplayground || []).push([
  [64],
  {
    8964: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Chart = void 0);
      const a = n(6303),
        r = n(4710),
        s = n(2429),
        o = n(2782),
        l = n(4415),
        c = n(9062),
        u = n(6632),
        h = i(n(7007)),
        f = i(n(4176)),
        d = i(n(6225)),
        p = i(n(3962)),
        m = i(n(442)),
        y = i(n(5464));
      function x(t) {
        return 'linear' === t ? s.scaleLinear : s.scaleLog;
      }
      class g extends h.default.EventEmitter {
        constructor(t) {
          super();
          const e = Math.random(),
            n = String.fromCharCode(Math.floor(26 * e) + 97);
          (this.options = t),
            (this.id = n + e.toString(16).substr(2)),
            (this.options.id = this.id),
            (this.markerId = this.id + '-marker'),
            (g.cache[this.id] = this),
            (this.linkedGraphs = [this]),
            (this.meta = {}),
            this.setUpEventListeners();
        }
        build() {
          return this.internalVars(), this.drawGraphWrapper(), this;
        }
        getDraggableNode() {
          return (0, c.select)(this.options.target).select('.zoom-and-drag').node();
        }
        getEmitInstance() {
          let t = this;
          const e = this.getDraggableNode();
          return e && (t = e.instance), t;
        }
        internalVars() {
          const t = (this.meta.margin = { left: 40, right: 20, top: 20, bottom: 20 });
          this.options.title && (this.meta.margin.top = 40),
            (this.meta.width = (this.options.width || y.default.DEFAULT_WIDTH) - t.left - t.right),
            (this.meta.height =
              (this.options.height || y.default.DEFAULT_HEIGHT) - t.top - t.bottom),
            this.initializeAxes();
        }
        initializeAxes() {
          const t = this,
            e = (0, r.format)('~s');
          function n(t) {
            return Math.abs(t) - Math.floor(Math.abs(t)) > 0 ? t.toString() : e(t);
          }
          (this.options.xAxis = this.options.xAxis || {}),
            (this.options.xAxis.type = this.options.xAxis.type || 'linear'),
            (this.options.yAxis = this.options.yAxis || {}),
            (this.options.yAxis.type = this.options.yAxis.type || 'linear');
          const i = (this.meta.xDomain = (function (t) {
              if (t.domain) return t.domain;
              if ('linear' === t.type) {
                const t = 12;
                return [-t / 2, t / 2];
              }
              if ('log' === t.type) return [1, 10];
              throw Error('axis type ' + t.type + ' unsupported');
            })(this.options.xAxis)),
            s = (this.meta.yDomain = (function (e) {
              if (e.domain) return e.domain;
              const n = (function (e) {
                const n = e[1] - e[0];
                return (t.meta.height * n) / t.meta.width;
              })(i);
              if ('linear' === e.type) return [-n / 2, n / 2];
              if ('log' === e.type) return [1, 10];
              throw Error('axis type ' + e.type + ' unsupported');
            })(this.options.yAxis));
          this.meta.xScale || (this.meta.xScale = x(this.options.xAxis.type)()),
            this.meta.xScale
              .domain(i)
              .range(this.options.xAxis.invert ? [this.meta.width, 0] : [0, this.meta.width]),
            this.meta.yScale || (this.meta.yScale = x(this.options.yAxis.type)()),
            this.meta.yScale
              .domain(s)
              .range(this.options.yAxis.invert ? [0, this.meta.height] : [this.meta.height, 0]),
            this.meta.xAxis || (this.meta.xAxis = (0, o.axisBottom)(this.meta.xScale)),
            this.meta.xAxis.tickSize(this.options.grid ? -this.meta.height : 0).tickFormat(n),
            this.meta.yAxis || (this.meta.yAxis = (0, o.axisLeft)(this.meta.yScale)),
            this.meta.yAxis.tickSize(this.options.grid ? -this.meta.width : 0).tickFormat(n),
            (this.line = (0, a.line)()
              .x(function (e) {
                return t.meta.xScale(e[0]);
              })
              .y(function (e) {
                return t.meta.yScale(e[1]);
              }));
        }
        drawGraphWrapper() {
          const t = (this.root = (0, c.select)(this.options.target)
            .selectAll('svg')
            .data([this.options]));
          (this.root.enter = t
            .enter()
            .append('svg')
            .attr('class', 'function-plot')
            .attr('font-size', this.getFontSize())),
            t
              .merge(this.root.enter)
              .attr('width', this.meta.width + this.meta.margin.left + this.meta.margin.right)
              .attr('height', this.meta.height + this.meta.margin.top + this.meta.margin.bottom),
            this.buildTitle(),
            this.buildLegend(),
            this.buildCanvas(),
            this.buildClip(),
            this.buildAxis(),
            this.buildAxisLabel();
          const e = (this.tip = (0, d.default)(
            Object.assign(this.options.tip || {}, { owner: this })
          ));
          this.canvas.merge(this.canvas.enter).call(e),
            this.setUpPlugins(),
            this.draw(),
            this.buildZoomHelper();
        }
        buildTitle() {
          const t = this.root
            .merge(this.root.enter)
            .selectAll('text.title')
            .data(function (t) {
              return [t.title].filter(Boolean);
            });
          t
            .enter()
            .append('text')
            .merge(t)
            .attr('class', 'title')
            .attr('y', this.meta.margin.top / 2)
            .attr('x', this.meta.margin.left + this.meta.width / 2)
            .attr('font-size', 25)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .text(this.options.title),
            t.exit().remove();
        }
        buildLegend() {
          this.root.enter
            .append('text')
            .attr('class', 'top-right-legend')
            .attr('text-anchor', 'end'),
            this.root
              .merge(this.root.enter)
              .select('.top-right-legend')
              .attr('y', this.meta.margin.top / 2)
              .attr('x', this.meta.width + this.meta.margin.left);
        }
        buildCanvas() {
          const t = (this.canvas = this.root
            .merge(this.root.enter)
            .selectAll('.canvas')
            .data(function (t) {
              return [t];
            }));
          this.canvas.enter = t.enter().append('g').attr('class', 'canvas');
        }
        buildClip() {
          const t = this.id,
            e = this.canvas.enter.append('defs');
          e
            .append('clipPath')
            .attr('id', 'function-plot-clip-' + t)
            .append('rect')
            .attr('class', 'clip static-clip'),
            this.canvas
              .merge(this.canvas.enter)
              .selectAll('.clip')
              .attr('width', this.meta.width)
              .attr('height', this.meta.height),
            e
              .append('clipPath')
              .append('marker')
              .attr('id', this.markerId)
              .attr('viewBox', '0 -5 10 10')
              .attr('refX', 10)
              .attr('markerWidth', 5)
              .attr('markerHeight', 5)
              .attr('orient', 'auto')
              .append('svg:path')
              .attr('d', 'M0,-5L10,0L0,5L0,0')
              .attr('stroke-width', '0px')
              .attr('fill-opacity', 1)
              .attr('fill', '#777');
        }
        buildAxis() {
          const t = this.canvas.enter;
          t.append('g').attr('class', 'x axis'),
            t.append('g').attr('class', 'y axis'),
            this.canvas
              .merge(this.canvas.enter)
              .select('.x.axis')
              .attr('transform', 'translate(0,' + this.meta.height + ')')
              .call(this.meta.xAxis),
            this.canvas.merge(this.canvas.enter).select('.y.axis').call(this.meta.yAxis);
        }
        buildAxisLabel() {
          const t = this.canvas,
            e = t
              .merge(t.enter)
              .selectAll('text.x.axis-label')
              .data(function (t) {
                return [t.xAxis.label].filter(Boolean);
              }),
            n = e.enter().append('text').attr('class', 'x axis-label').attr('text-anchor', 'end');
          e
            .merge(n)
            .attr('x', this.meta.width)
            .attr('y', this.meta.height - 6)
            .text(function (t) {
              return t;
            }),
            e.exit().remove();
          const i = t
              .merge(t.enter)
              .selectAll('text.y.axis-label')
              .data(function (t) {
                return [t.yAxis.label].filter(Boolean);
              }),
            a = i
              .enter()
              .append('text')
              .attr('class', 'y axis-label')
              .attr('y', 6)
              .attr('dy', '.75em')
              .attr('text-anchor', 'end')
              .attr('transform', 'rotate(-90)');
          i.merge(a).text(function (t) {
            return t;
          }),
            i.exit().remove();
        }
        buildContent() {
          const t = this,
            e = this.canvas;
          e.merge(e.enter).attr(
            'transform',
            'translate(' + this.meta.margin.left + ',' + this.meta.margin.top + ')'
          );
          const n = (this.content = e
              .merge(e.enter)
              .selectAll(':scope > g.content')
              .data(function (t) {
                return [t];
              })),
            i = n
              .enter()
              .append('g')
              .attr('clip-path', 'url(#function-plot-clip-' + this.id + ')')
              .attr('class', 'content');
          if ('linear' === this.options.xAxis.type) {
            const t = n
                .merge(i)
                .selectAll(':scope > path.y.origin')
                .data([
                  [
                    [0, this.meta.yScale.domain()[0]],
                    [0, this.meta.yScale.domain()[1]],
                  ],
                ]),
              e = t
                .enter()
                .append('path')
                .attr('class', 'y origin')
                .attr('stroke', 'black')
                .attr('opacity', 0.2);
            t.merge(e).attr('d', this.line);
          }
          if ('linear' === this.options.yAxis.type) {
            const t = n
                .merge(i)
                .selectAll(':scope > path.x.origin')
                .data([
                  [
                    [this.meta.xScale.domain()[0], 0],
                    [this.meta.xScale.domain()[1], 0],
                  ],
                ]),
              e = t
                .enter()
                .append('path')
                .attr('class', 'x origin')
                .attr('stroke', 'black')
                .attr('opacity', 0.2);
            t.merge(e).attr('d', this.line);
          }
          n.merge(i).call((0, f.default)({ owner: t }));
          const a = n
            .merge(i)
            .selectAll(':scope > g.graph')
            .data(
              (t) => t.data.map(m.default),
              (t) => t.fn || t.r || t.x || t.text
            );
          a.exit().remove();
          const r = a.enter().append('g').attr('class', 'graph');
          a.merge(r).each(function (e, n) {
            e.index = n;
            const i = (0, c.select)(this);
            i.call(y.default.graphTypes[e.graphType](t)), i.call((0, p.default)(t));
          });
        }
        buildZoomHelper() {
          const t = this;
          this.meta.zoomBehavior ||
            ((this.meta.zoomBehavior = (0, l.zoom)().on('zoom', function (e) {
              t.getEmitInstance().emit('all:zoom', e);
            })),
            (t.meta.zoomBehavior.xScale = t.meta.xScale.copy()),
            (t.meta.zoomBehavior.yScale = t.meta.yScale.copy())),
            t.meta.zoomBehavior.xScale.range(t.meta.xScale.range()),
            t.meta.zoomBehavior.yScale.range(t.meta.yScale.range()),
            this.canvas.enter
              .append('rect')
              .call(this.meta.zoomBehavior)
              .attr('class', 'zoom-and-drag')
              .style('fill', 'none')
              .style('pointer-events', 'all')
              .on('mouseover', function (e) {
                t.getEmitInstance().emit('all:mouseover', e);
              })
              .on('mouseout', function (e) {
                t.getEmitInstance().emit('all:mouseout', e);
              })
              .on('mousemove', function (e) {
                t.getEmitInstance().emit('all:mousemove', e);
              }),
            (this.draggable = this.canvas
              .merge(this.canvas.enter)
              .select('.zoom-and-drag')
              .call((e) => {
                e.node() && (e.node().instance = t);
              })
              .attr('width', this.meta.width)
              .attr('height', this.meta.height));
        }
        setUpPlugins() {
          const t = this.options.plugins || [],
            e = this;
          t.forEach(function (t) {
            t(e);
          });
        }
        addLink() {
          for (let t = 0; t < arguments.length; t += 1) this.linkedGraphs.push(arguments[t]);
        }
        updateAxes() {
          const t = this,
            e = t.canvas.merge(t.canvas.enter);
          if ((e.select('.x.axis').call(t.meta.xAxis), 'sticky' === this.options.xAxis.position)) {
            const t = this.meta.yScale.domain()[0],
              n = this.meta.yScale.domain()[1],
              i = (n + t) / 2;
            let a = (this.meta.height / (n - t)) * i + this.meta.height / 2;
            (a = a < 0 ? 0 : a),
              (a = a > this.meta.height ? this.meta.height : a),
              e.select('.x.axis').attr('transform', 'translate(0,' + a + ')'),
              e
                .selectAll('.x.axis path, .x.axis line')
                .attr(
                  'transform',
                  'translate(0,' + (this.meta.height / 2 - a + this.meta.height / 2) + ')'
                );
          }
          if ((e.select('.y.axis').call(t.meta.yAxis), 'sticky' === this.options.yAxis.position)) {
            const t = this.meta.xScale.domain()[0],
              n = this.meta.xScale.domain()[1],
              i = (n + t) / 2;
            let a = (this.meta.width / (t - n)) * i + this.meta.width / 2;
            (a = a < 0 ? 0 : a),
              (a = a > this.meta.width ? this.meta.width : a),
              e.select('.y.axis').attr('transform', 'translate(' + a + ',0)'),
              e
                .selectAll('.y.axis path, .y.axis line')
                .attr('transform', 'translate(' + -a + ',0)');
          }
          e.selectAll('.axis path, .axis line')
            .attr('fill', 'none')
            .attr('stroke', 'black')
            .attr('shape-rendering', 'crispedges')
            .attr('opacity', 0.1);
        }
        syncOptions() {
          (this.options.xAxis.domain = this.meta.xScale.domain()),
            (this.options.yAxis.domain = this.meta.yScale.domain());
        }
        getFontSize() {
          return Math.max(Math.max(this.meta.width, this.meta.height) / 50, 8);
        }
        draw() {
          const t = this;
          t.emit('before:draw'),
            t.syncOptions(),
            t.updateAxes(),
            t.buildContent(),
            t.emit('after:draw');
        }
        setUpEventListeners() {
          const t = this,
            e = this.getEmitInstance();
          e && e.removeAllListeners();
          const n = {
              mousemove: function (e) {
                t.tip.move(e);
              },
              mouseover: function () {
                t.tip.show();
              },
              mouseout: function () {
                t.tip.hide();
              },
              zoom: function ({ transform: e }) {
                if (t.options.disableZoom) return;
                const n = e.rescaleX(t.meta.zoomBehavior.xScale).interpolate(u.interpolateRound),
                  i = e.rescaleY(t.meta.zoomBehavior.yScale).interpolate(u.interpolateRound);
                t.meta.xScale.domain(n.domain()).range(n.range()),
                  t.meta.yScale.domain(i.domain()).range(i.range());
              },
              'tip:update': function ({ x: e, y: n, index: i }) {
                const a = t.root.merge(t.root.enter).datum().data[i],
                  r = a.title || '',
                  s =
                    a.renderer ||
                    function (t, e) {
                      return t.toFixed(3) + ', ' + e.toFixed(3);
                    },
                  o = [];
                r && o.push(r),
                  o.push(s(e, n)),
                  t.root
                    .select('.top-right-legend')
                    .attr('fill', y.default.COLORS[i])
                    .text(o.join(' '));
              },
            },
            i = {
              mousemove: function (e) {
                const n = (0, c.pointer)(e, t.draggable.node()),
                  i = { x: t.meta.xScale.invert(n[0]), y: t.meta.yScale.invert(n[1]) };
                t.linkedGraphs.forEach(function (t) {
                  t.emit('before:mousemove', i), t.emit('mousemove', i);
                });
              },
              zoom: function (e) {
                t.linkedGraphs.forEach(function (n) {
                  (n.draggable.node().__zoom = t.draggable.node().__zoom),
                    n.emit('zoom', e),
                    n.draw();
                }),
                  t.emit('all:mousemove', e);
              },
            };
          Object.keys(n).forEach(function (e) {
            !i[e] &&
              t.on('all:' + e, function () {
                const n = Array.prototype.slice.call(arguments);
                t.linkedGraphs.forEach(function (t) {
                  const i = n.slice();
                  i.unshift(e), t.emit.apply(t, i);
                });
              }),
              t.on(e, n[e]);
          }),
            Object.keys(i).forEach(function (e) {
              t.on('all:' + e, i[e]);
            });
        }
      }
      (e.Chart = g), (g.cache = {});
    },
    442: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function (t) {
          return (
            'graphType' in t || (t.graphType = 'interval'),
            'sampler' in t || (t.sampler = 'interval' !== t.graphType ? 'builtIn' : 'interval'),
            'fnType' in t || (t.fnType = 'linear'),
            t
          );
        });
    },
    2289: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = i(n(5464)),
        r = i(n(7735)),
        s = i(n(5068));
      e.default = function (t, e) {
        const n = (function (t, e) {
          const n = e.range || [-1 / 0, 1 / 0];
          return [Math.max(t.domain()[0], n[0]), Math.min(t.domain()[1], n[1])];
        })(t.meta.xScale, e);
        let i;
        if ('builtIn' === e.sampler) i = s.default;
        else {
          if ('interval' !== e.sampler) throw new Error(`Invalid sampler function ${e.sampler}`);
          i = r.default;
        }
        const o =
            e.nSamples ||
            Math.min(a.default.MAX_ITERATIONS, a.default.DEFAULT_ITERATIONS || 2 * t.meta.width),
          l = i({
            d: e,
            range: n,
            xScale: t.meta.xScale,
            yScale: t.meta.yScale,
            xAxis: t.options.xAxis,
            yAxis: t.options.yAxis,
            nSamples: o,
          });
        return t.emit('eval', l, e.index, e.isHelper), l;
      };
    },
    5464: (t, e, n) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.registerGraphType = void 0);
      const i = n(2090),
        a = {
          COLORS: [
            'steelblue',
            'red',
            '#05b378',
            'orange',
            '#4040e8',
            'yellow',
            'brown',
            'magenta',
            'cyan',
          ].map(function (t) {
            return (0, i.hsl)(t);
          }),
          DEFAULT_WIDTH: 550,
          DEFAULT_HEIGHT: 350,
          DEFAULT_ITERATIONS: null,
          TIP_X_EPS: 1,
          MAX_ITERATIONS: 0,
          graphTypes: {},
        };
      (a.MAX_ITERATIONS = 10 * a.DEFAULT_WIDTH),
        (e.registerGraphType = function (t, e) {
          if (Object.hasOwn(a.graphTypes, t))
            throw new Error(`registerGraphType: graphType ${t} is already registered.`);
          a.graphTypes[t] = e;
        }),
        (e.default = a);
    },
    9615: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.text = e.scatter = e.interval = e.polyline = void 0);
      const a = i(n(5159));
      e.polyline = a.default;
      const r = i(n(8094));
      e.interval = r.default;
      const s = i(n(3253));
      e.scatter = s.default;
      const o = i(n(7984));
      e.text = o.default;
    },
    8094: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = n(9062),
        r = i(n(2289)),
        s = i(n(3469));
      e.default = function (t) {
        let e;
        const n = t.meta.xScale,
          i = t.meta.yScale;
        function o(t, n, i, a) {
          if (i > a) {
            const t = i;
            (i = a), (a = t);
          }
          const r = Math.min(n, a),
            s = Math.max(t, i);
          return s > r ? [-e, 0] : [s, r];
        }
        return function l(c) {
          c.each(function (c) {
            const u = (l.el = (0, a.select)(this)),
              h = c.index,
              f = c.closed,
              d = (0, r.default)(t, c),
              p = u.selectAll(':scope > path.line').data(d);
            e = Math.max(d[0].scaledDx, 1);
            const m = `line line-${h}`,
              y = p.enter().append('path').attr('class', m).attr('fill', 'none'),
              x = p
                .merge(y)
                .attr('stroke-width', e)
                .attr('stroke', s.default.color(c, h))
                .attr('opacity', f ? 0.5 : 1)
                .attr('d', function (t) {
                  return (function (t, a) {
                    let r = '';
                    const s = i.range(),
                      l = Math.min.apply(Math, s),
                      c = Math.max.apply(Math, s);
                    for (let s = 0, u = t.length; s < u; s += 1)
                      if (t[s]) {
                        const u = t[s][0],
                          h = t[s][1];
                        let f = h.lo,
                          d = h.hi;
                        a && ((f = Math.min(f, 0)), (d = Math.max(d, 0)));
                        const p = n(u.lo) + t.scaledDx / 2,
                          m = o(l, c, isFinite(d) ? i(d) : -1 / 0, isFinite(f) ? i(f) : 1 / 0),
                          y = m[0],
                          x = m[1];
                        (r += ' M ' + p + ' ' + y), (r += ' v ' + Math.max(x - y, e));
                      }
                    return r;
                  })(t, f);
                });
            if (c.attr)
              for (const t in c.attr) {
                let e = c.attr[t];
                'class' === t && (e = `${m} ${c.attr[t]}`), x.attr(t, e);
              }
            p.exit().remove();
          });
        };
      };
    },
    5159: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = n(9062),
        r = n(6303),
        s = i(n(3469)),
        o = i(n(2289));
      e.default = function (t) {
        return function e(n) {
          n.each(function (n) {
            const i = (e.el = (0, a.select)(this)),
              l = n.index,
              c = (0, o.default)(t, n),
              u = s.default.color(n, l),
              h = i.selectAll(':scope > path.line').data(c),
              f = t.meta.yScale.range();
            let d = f[0],
              p = f[1];
            const m = d - p;
            function y(e) {
              return s.default.clamp(t.meta.yScale(e[1]), p, d);
            }
            (d += 1e6 * m),
              (p -= 1e6 * m),
              n.skipBoundsCheck && ((d = s.default.infinity()), (p = -s.default.infinity()));
            const x = (0, r.line)()
                .curve(r.curveLinear)
                .x(function (e) {
                  return t.meta.xScale(e[0]);
                })
                .y(y),
              g = (0, r.area)()
                .x(function (e) {
                  return t.meta.xScale(e[0]);
                })
                .y0(t.meta.yScale(0))
                .y1(y),
              v = `line line-${l}`,
              b = h
                .enter()
                .append('path')
                .attr('class', v)
                .attr('stroke-width', 1)
                .attr('stroke-linecap', 'round');
            h.merge(b).each(function () {
              const e = (0, a.select)(this);
              let i;
              if (
                (n.closed
                  ? (e.attr('fill', u), e.attr('fill-opacity', 0.3), (i = g))
                  : (e.attr('fill', 'none'), (i = x)),
                e
                  .attr('stroke', u)
                  .attr('marker-end', function () {
                    return 'vector' === n.fnType ? 'url(#' + t.markerId + ')' : null;
                  })
                  .attr('d', i),
                n.attr)
              )
                for (const t in n.attr) {
                  let i = n.attr[t];
                  'class' === t && (i = `${v} ${n.attr[t]}`), e.attr(t, i);
                }
            }),
              h.exit().remove();
          });
        };
      };
    },
    3253: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = n(9062),
        r = n(2090),
        s = i(n(3469)),
        o = i(n(2289));
      e.default = function (t) {
        const e = t.meta.xScale,
          n = t.meta.yScale;
        return function (i) {
          i.each(function (i) {
            let l, c;
            const u = i.index,
              h = s.default.color(i, u),
              f = (0, o.default)(t, i),
              d = [];
            for (l = 0; l < f.length; l += 1) for (c = 0; c < f[l].length; c += 1) d.push(f[l][c]);
            const p = (0, a.select)(this).selectAll(':scope > circle.scatter').data(d),
              m = `scatter scatter-${u}`,
              y = p.enter().append('circle').attr('class', m),
              x = p
                .merge(y)
                .attr('fill', (0, r.hsl)(h.toString()).brighter(1.5).formatHex())
                .attr('stroke', h)
                .attr('opacity', 0.7)
                .attr('r', 1)
                .attr('cx', function (t) {
                  return e(t[0]);
                })
                .attr('cy', function (t) {
                  return n(t[1]);
                });
            if (i.attr)
              for (const t in i.attr) {
                let e = i.attr[t];
                'class' === t && (e = `${m} ${i.attr[t]}`), x.attr(t, e);
              }
            p.exit().remove();
          });
        };
      };
    },
    7984: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = n(9062),
        r = n(2090),
        s = i(n(3469));
      e.default = function (t) {
        const e = t.meta.xScale,
          n = t.meta.yScale;
        return function (t) {
          t.each(function (t) {
            (t.sampler = 'builtIn'), (t.fnType = 'vector');
            const i = (0, a.select)(this).selectAll(':scope > text.fn-text').data([t.location]),
              o = i.enter().append('text').attr('class', `fn-text fn-text-${t.index}`),
              l = s.default.color(t, t.index),
              c = i
                .merge(o)
                .attr('fill', (0, r.hsl)(l.toString()).brighter(1.5).formatHex())
                .attr('x', (t) => e(t[0]))
                .attr('y', (t) => n(t[1]))
                .text(() => t.text);
            if (t.attr) for (const e in t.attr) c.attr(e, t.attr[e]);
            i.exit().remove();
          });
        };
      };
    },
    4176: (t, e, n) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      const i = n(6303),
        a = n(9062);
      e.default = function (t) {
        const e = t.owner.meta.xScale,
          n = t.owner.meta.yScale,
          r = (0, i.line)()
            .x(function (t) {
              return t[0];
            })
            .y(function (t) {
              return t[1];
            });
        return function (t) {
          t.each(function () {
            const t = (0, a.select)(this)
                .selectAll('g.annotations')
                .data(function (t) {
                  return t.annotations || [];
                }),
              i = t.enter().append('g').attr('class', 'annotations'),
              s = n.range(),
              o = e.range(),
              l = t
                .merge(i)
                .selectAll('path')
                .data(function (t) {
                  return 'x' in t
                    ? [
                        [
                          [0, s[0]],
                          [0, s[1]],
                        ],
                      ]
                    : [
                        [
                          [o[0], 0],
                          [o[1], 0],
                        ],
                      ];
                }),
              c = l.enter().append('path');
            l.merge(c).attr('stroke', '#eee').attr('d', r), l.exit().remove();
            const u = t
                .merge(i)
                .selectAll('text')
                .data(function (t) {
                  return [{ text: t.text || '', hasX: 'x' in t }];
                }),
              h = u.enter().append('text');
            u
              .merge(h)
              .text(function (t) {
                return t.text;
              })
              .attr('y', function (t) {
                return t.hasX ? 3 : 0;
              })
              .attr('x', function (t) {
                return t.hasX ? 0 : 3;
              })
              .attr('dy', function (t) {
                return t.hasX ? 5 : -5;
              })
              .attr('text-anchor', function (t) {
                return t.hasX ? 'end' : '';
              })
              .attr('transform', function (t) {
                return t.hasX ? 'rotate(-90)' : '';
              }),
              u.exit().remove(),
              t.merge(i).attr('transform', function (t) {
                return 'x' in t ? 'translate(' + e(t.x) + ', 0)' : 'translate(0, ' + n(t.y) + ')';
              }),
              t.exit().remove();
          });
        };
      };
    },
    7605: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = n(9062),
        r = n(9615),
        s = n(6874),
        o = i(n(442)),
        l = i(n(3469));
      e.default = function (t) {
        const e = (0, o.default)({
          isHelper: !0,
          skipTip: !0,
          skipBoundsCheck: !0,
          nSamples: 2,
          graphType: 'polyline',
        });
        function n(t) {
          if (!t.derivative) return [];
          const n = 'number' == typeof t.derivative.x0 ? t.derivative.x0 : l.default.infinity();
          return (
            (e.index = t.index),
            (e.scope = {
              m: (0, s.builtIn)(t.derivative, 'fn', { x: n }),
              x0: n,
              y0: (0, s.builtIn)(t, 'fn', { x: n }),
            }),
            (e.fn = 'm * (x - x0) + y0'),
            [e]
          );
        }
        function i(e) {
          const n = this;
          e.derivative &&
            e.derivative.updateOnMouseMove &&
            !e.derivative.$$mouseListener &&
            ((e.derivative.$$mouseListener = function ({ x: t }) {
              e.derivative && (e.derivative.x0 = t), c(n);
            }),
            t.on('tip:update', e.derivative.$$mouseListener));
        }
        const c = function (e) {
          e.each(function (s) {
            const o = (0, a.select)(this),
              l = n.call(e, s);
            i.call(e, s);
            const c = o.selectAll('g.derivative').data(l),
              u = c.enter().append('g').attr('class', 'derivative');
            c.merge(u).call((0, r.polyline)(t)),
              c.merge(u).selectAll('path').attr('opacity', 0.5),
              c.exit().remove();
          });
        };
        return c;
      };
    },
    6874: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.interval = e.builtIn = void 0);
      const a = i(n(679)),
        r = { interval: i(n(2684)).default, builtIn: a.default };
      const s =
        'object' == typeof n.g && 'math' in n.g
          ? n.g.math
          : 'object' == typeof window && 'math' in window
            ? window.math
            : null;
      function o(t) {
        function e(e, n) {
          const i = e[n],
            a = t + '_Expression_' + n,
            o = t + '_Compiled_' + n;
          i !== e[a] &&
            ((e[a] = i),
            (e[o] = (function (e) {
              if ('string' == typeof e) {
                const n = r[t](e);
                return s && 'builtIn' === t ? { eval: n.evaluate || n.eval } : n;
              }
              if ('function' == typeof e) return { eval: e };
              throw Error('expression must be a string or a function');
            })(i)));
        }
        return function (n, i, a) {
          return (
            e(n, i),
            (function (e, n) {
              return e[t + '_Compiled_' + n];
            })(n, i).eval(Object.assign({}, n.scope || {}, a))
          );
        };
      }
      s && (r.builtIn = s.compile);
      const l = o('builtIn');
      e.builtIn = l;
      const c = o('interval');
      e.interval = c;
    },
    3962: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = n(9062),
        r = i(n(7605)),
        s = i(n(502));
      e.default = function (t) {
        return function (e) {
          e.each(function () {
            const e = (0, a.select)(this);
            e.call((0, r.default)(t)), e.call((0, s.default)(t));
          });
        };
      };
    },
    502: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = n(9062),
        r = n(6874),
        s = i(n(442)),
        o = n(9615),
        l = i(n(3469));
      e.default = function (t) {
        const e = (0, s.default)({
          isHelper: !0,
          skipTip: !0,
          skipBoundsCheck: !0,
          nSamples: 2,
          graphType: 'polyline',
        });
        function n(t, e) {
          if (!('x0' in e)) throw Error('secant must have the property `x0` defined');
          e.scope = e.scope || {};
          const n = e.x0,
            i = 'number' == typeof e.x1 ? e.x1 : l.default.infinity();
          var a;
          Object.assign(e.scope, {
            x0: n,
            x1: i,
            y0: (0, r.builtIn)(t, 'fn', { x: n }),
            y1: (0, r.builtIn)(t, 'fn', { x: i }),
          }),
            ((a = e.scope).m = (a.y1 - a.y0) / (a.x1 - a.x0));
        }
        function i(t, e) {
          n(t, e), (e.fn = 'm * (x - x0) + y0');
        }
        function c(e, i) {
          const a = this;
          i.updateOnMouseMove &&
            !i.$$mouseListener &&
            ((i.$$mouseListener = function ({ x: t }) {
              (i.x1 = t), n(e, i), h(a);
            }),
            t.on('tip:update', i.$$mouseListener));
        }
        function u(t) {
          const n = this,
            a = [];
          t.secants = t.secants || [];
          for (let r = 0; r < t.secants.length; r += 1) {
            const s = (t.secants[r] = Object.assign({}, e, t.secants[r]));
            (s.index = t.index), s.fn || (i.call(n, t, s), c.call(n, t, s)), a.push(s);
          }
          return a;
        }
        function h(e) {
          e.each(function (n) {
            const i = (0, a.select)(this),
              r = u.call(e, n),
              s = i.selectAll('g.secant').data(r),
              l = s.enter().append('g').attr('class', 'secant');
            s.merge(l).call((0, o.polyline)(t)),
              s.merge(l).selectAll('path').attr('opacity', 0.5),
              s.exit().remove();
          });
        }
        return h;
      };
    },
    8884: function (t, e, n) {
      'use strict';
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, i) {
                void 0 === i && (i = n);
                var a = Object.getOwnPropertyDescriptor(e, n);
                (a && !('get' in a ? !e.__esModule : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  }),
                  Object.defineProperty(t, i, a);
              }
            : function (t, e, n, i) {
                void 0 === i && (i = n), (t[i] = e[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, 'default', { enumerable: !0, value: e });
              }
            : function (t, e) {
                t.default = e;
              }),
        r =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                'default' !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
            return a(e, t), e;
          },
        s =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              'default' === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n);
          };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.GraphTypeScatter =
          e.GraphTypePolyline =
          e.GraphTypeInterval =
          e.EvalInterval =
          e.EvalBuiltIn =
          e.registerGraphType =
          e.Chart =
            void 0),
        n(2936);
      const o = n(8964);
      Object.defineProperty(e, 'Chart', {
        enumerable: !0,
        get: function () {
          return o.Chart;
        },
      });
      const l = r(n(5464));
      Object.defineProperty(e, 'registerGraphType', {
        enumerable: !0,
        get: function () {
          return l.registerGraphType;
        },
      });
      const c = n(9615),
        u = r(n(6874));
      function h(t) {
        t.data = t.data || [];
        let e = o.Chart.cache[t.id];
        return e || (e = new o.Chart(t)), e.build();
      }
      (0, l.registerGraphType)('polyline', c.polyline),
        (0, l.registerGraphType)('interval', c.interval),
        (0, l.registerGraphType)('scatter', c.scatter),
        (0, l.registerGraphType)('text', c.text),
        (e.default = h),
        (h.globals = l.default),
        (h.$eval = u),
        (h.graphTypes = { interval: c.interval, polyline: c.polyline, scatter: c.scatter }),
        s(n(9409), e);
      var f = n(6874);
      Object.defineProperty(e, 'EvalBuiltIn', {
        enumerable: !0,
        get: function () {
          return f.builtIn;
        },
      }),
        Object.defineProperty(e, 'EvalInterval', {
          enumerable: !0,
          get: function () {
            return f.interval;
          },
        });
      var d = n(9615);
      Object.defineProperty(e, 'GraphTypeInterval', {
        enumerable: !0,
        get: function () {
          return d.interval;
        },
      }),
        Object.defineProperty(e, 'GraphTypePolyline', {
          enumerable: !0,
          get: function () {
            return d.polyline;
          },
        }),
        Object.defineProperty(e, 'GraphTypeScatter', {
          enumerable: !0,
          get: function () {
            return d.scatter;
          },
        }),
        s(n(3962), e);
    },
    2936: () => {
      'undefined' != typeof window &&
        (function (t, e) {
          try {
            t.querySelector(':scope body');
          } catch (n) {
            ['querySelector', 'querySelectorAll'].forEach(function (n) {
              const i = e[n];
              e[n] = function (e) {
                if (/(^|,)\s*:scope/.test(e)) {
                  const i = this.id;
                  (this.id = 'ID_' + Date.now()),
                    (e = e.replace(/((^|,)\s*):scope/g, '$1#' + this.id));
                  const a = t[n](e);
                  return (this.id = i), a;
                }
                return i.call(this, e);
              };
            });
          }
        })(window.document, Element.prototype);
    },
    5068: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = i(n(3469)),
        r = n(6874);
      function s(t, e, n, i, o) {
        if (!o) return { asymptote: !0, d0: t, d1: e };
        const l = t[0],
          c = e[0],
          u = a.default.linspace(l, c, 10);
        let h, f;
        for (let t = 0; t < 10; t += 1) {
          const e = u[t],
            l = (0, r.builtIn)(n, 'fn', { x: e });
          if (h) {
            const t = l - h;
            if (a.default.sgn(t) === i) return s([f, h], [e, l], n, i, o - 1);
          }
          (h = l), (f = e);
        }
        return { asymptote: !1, d0: t, d1: e };
      }
      function o(t) {
        const e = a.default.space(t.xAxis, t.range, t.nSamples),
          n = t.yScale.domain(),
          i = n[0] - a.default.infinity(),
          o = n[1] + a.default.infinity(),
          l = [];
        for (let n = 0; n < e.length; n += 1) {
          const s = e[n];
          let c = (0, r.builtIn)(t.d, 'fn', { x: s });
          a.default.isValidNumber(s) &&
            a.default.isValidNumber(c) &&
            ((c = a.default.clamp(c, i, o)), l.push([s, c]));
        }
        const c = (function (t, e, n) {
          let i;
          const r = [],
            o = n.domain()[0] - a.default.infinity(),
            l = n.domain()[1] + a.default.infinity();
          let c = [e[0]],
            u = 1,
            h = a.default.infinity();
          for (; u < e.length; ) {
            const n = e[u - 1][1],
              f = e[u][1] - n,
              d = a.default.sgn(f);
            if (c.length >= 2 && i !== d && Math.abs(f / h) > 1) {
              const n = s(e[u - 1], e[u], t, d, 3);
              n.asymptote
                ? ((e[u - 1][0] = n.d0[0]),
                  (e[u - 1][1] = a.default.clamp(n.d0[1], o, l)),
                  r.push(c),
                  (e[u][0] = n.d1[0]),
                  (e[u][1] = a.default.clamp(n.d1[1], o, l)),
                  (c = [e[u]]))
                : c.push(e[u]);
            } else c.push(e[u]);
            c.length > 1 && ((h = c[c.length - 1][0] - c[c.length - 2][0]), (i = d)), ++u;
          }
          return c.length && r.push(c), r;
        })(t.d, l, t.yScale);
        return c;
      }
      function l(t) {
        const e = t.d.range || [0, 2 * Math.PI],
          n = a.default.space(t.xAxis, e, t.nSamples),
          i = [];
        for (let e = 0; e < n.length; e += 1) {
          const a = n[e],
            s = (0, r.builtIn)(t.d, 'x', { t: a }),
            o = (0, r.builtIn)(t.d, 'y', { t: a });
          i.push([s, o]);
        }
        return [i];
      }
      function c(t) {
        const e = t.d.range || [-Math.PI, Math.PI],
          n = a.default.space(t.xAxis, e, t.nSamples),
          i = [];
        for (let e = 0; e < n.length; e += 1) {
          const a = n[e],
            s = (0, r.builtIn)(t.d, 'r', { theta: a }),
            o = s * Math.cos(a),
            l = s * Math.sin(a);
          i.push([o, l]);
        }
        return [i];
      }
      function u(t) {
        return [t.d.points];
      }
      function h(t) {
        const e = t.d;
        return (
          (e.offset = e.offset || [0, 0]),
          [[e.offset, [e.vector[0] + e.offset[0], e.vector[1] + e.offset[1]]]]
        );
      }
      e.default = function (t) {
        const e = { parametric: l, polar: c, points: u, vector: h, linear: o };
        if (!(t.d.fnType in e))
          throw Error(t.d.fnType + ' is not supported in the `builtIn` sampler');
        return e[t.d.fnType].apply(null, arguments);
      };
    },
    7735: function (t, e, n) {
      'use strict';
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, i) {
                void 0 === i && (i = n);
                var a = Object.getOwnPropertyDescriptor(e, n);
                (a && !('get' in a ? !e.__esModule : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  }),
                  Object.defineProperty(t, i, a);
              }
            : function (t, e, n, i) {
                void 0 === i && (i = n), (t[i] = e[n]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, 'default', { enumerable: !0, value: e });
              }
            : function (t, e) {
                t.default = e;
              }),
        r =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                'default' !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
            return a(e, t), e;
          },
        s =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const o = r(n(2684)),
        l = n(6874),
        c = s(n(3469));
      function u(t) {
        const e = c.default.space(t.xAxis, t.range, t.nSamples),
          n = t.xScale,
          i = t.yScale,
          a = i.domain()[0],
          r = i.domain()[1],
          s = [];
        let u;
        for (u = 0; u < e.length - 1; u += 1) {
          const n = { lo: e[u], hi: e[u + 1] },
            i = (0, l.interval)(t.d, 'fn', { x: n });
          o.Interval.isEmpty(i) || o.Interval.isWhole(i) || s.push([n, i]),
            o.Interval.isWhole(i) && s.push(null);
        }
        for (u = 1; u < s.length - 1; u += 1)
          if (!s[u]) {
            const t = s[u - 1],
              e = s[u + 1];
            t &&
              e &&
              !o.Interval.intervalsOverlap(t[1], e[1]) &&
              (t[1].lo > e[1].hi &&
                ((t[1].hi = Math.max(r, t[1].hi)), (e[1].lo = Math.min(a, e[1].lo))),
              t[1].hi < e[1].lo &&
                ((t[1].lo = Math.min(a, t[1].lo)), (e[1].hi = Math.max(r, e[1].hi))));
          }
        return (s.scaledDx = n(e[1]) - n(e[0])), [s];
      }
      let h;
      function f(t, e, n) {
        const i = (0, l.interval)(n, 'fn', { x: t, y: e });
        if (!o.Interval.zeroIn(i)) return this;
        if (
          (function (t) {
            return o.Interval.width(t) < h;
          })(t)
        )
          return this.push([t, e]), this;
        const a = t.lo + (t.hi - t.lo) / 2,
          r = e.lo + (e.hi - e.lo) / 2,
          s = { lo: a, hi: t.hi },
          c = { lo: t.lo, hi: a },
          u = { lo: r, hi: e.hi },
          d = { lo: e.lo, hi: r };
        f.call(this, s, u, n), f.call(this, s, d, n), f.call(this, c, u, n), f.call(this, c, d, n);
      }
      function d(t) {
        const e = t.xScale,
          n = t.xScale.domain(),
          i = t.yScale.domain(),
          a = { lo: n[0], hi: n[1] },
          r = { lo: i[0], hi: i[1] },
          s = [];
        return (h = e.invert(1) - e.invert(0)), f.call(s, a, r, t.d), (s.scaledDx = 1), [s];
      }
      o.default.policies.disableRounding();
      e.default = function (t) {
        const e = { implicit: d, linear: u };
        if (!Object.hasOwn(e, t.d.fnType))
          throw Error(t.d.fnType + ' is not supported in the `interval` sampler');
        return e[t.d.fnType].apply(null, arguments);
      };
    },
    6225: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = n(6303),
        r = n(9062),
        s = i(n(3469)),
        o = i(n(5464)),
        l = n(6874);
      e.default = function (t) {
        t = Object.assign(
          {
            xLine: !1,
            yLine: !1,
            renderer: function (t, e) {
              return '(' + t.toFixed(3) + ', ' + e.toFixed(3) + ')';
            },
            owner: null,
          },
          t
        );
        const e = 20,
          n = (0, a.line)()
            .x(function (t) {
              return t[0];
            })
            .y(function (t) {
              return t[1];
            });
        function i(t, e) {
          return t
            .append('path')
            .datum(e)
            .attr('stroke', 'grey')
            .attr('stroke-dasharray', '5,5')
            .attr('opacity', 0.5)
            .attr('d', n);
        }
        let c, u;
        function h(n) {
          const a = n.selectAll('g.tip').data(function (t) {
              return [t];
            }),
            s = a
              .enter()
              .append('g')
              .attr('class', 'tip')
              .attr('clip-path', 'url(#function-plot-clip-' + t.owner.id + ')');
          (c = a
            .merge(s)
            .selectAll('g.inner-tip')
            .data(function (t) {
              return [t];
            })),
            (u = c
              .enter()
              .append('g')
              .attr('class', 'inner-tip')
              .style('display', 'none')
              .each(function () {
                const n = (0, r.select)(this);
                i(n, [
                  [0, -t.owner.meta.height - e],
                  [0, t.owner.meta.height + e],
                ])
                  .attr('class', 'tip-x-line')
                  .style('display', 'none'),
                  i(n, [
                    [-t.owner.meta.width - e, 0],
                    [t.owner.meta.width + e, 0],
                  ])
                    .attr('class', 'tip-y-line')
                    .style('display', 'none'),
                  n.append('circle').attr('r', 3),
                  n.append('text').attr('transform', 'translate(5,-5)');
              })),
            c
              .merge(u)
              .selectAll('.tip-x-line')
              .style('display', t.xLine ? null : 'none'),
            c
              .merge(u)
              .selectAll('.tip-y-line')
              .style('display', t.yLine ? null : 'none');
        }
        return (
          (h.move = function (n) {
            let i,
              a,
              r,
              f = 1 / 0,
              d = -1;
            const p = c.merge(u),
              m = t.owner.meta,
              y = p.datum().data,
              x = m.xScale,
              g = m.yScale,
              v = m.width,
              b = m.height,
              _ = n.x,
              S = n.y;
            for (i = 0; i < y.length; i += 1) {
              if (y[i].skipTip || 'linear' !== y[i].fnType) continue;
              const t = y[i].range || [-s.default.infinity(), s.default.infinity()];
              let e;
              if (_ > t[0] - o.default.TIP_X_EPS && _ < t[1] + o.default.TIP_X_EPS) {
                try {
                  e = (0, l.builtIn)(y[i], 'fn', { x: _ });
                } catch (t) {}
                if (s.default.isValidNumber(e)) {
                  const t = Math.abs(e - S);
                  t < f && ((f = t), (d = i));
                }
              }
            }
            if (-1 !== d) {
              (a = _),
                y[d].range && ((a = Math.max(a, y[d].range[0])), (a = Math.min(a, y[d].range[1]))),
                (r = (0, l.builtIn)(y[d], 'fn', { x: a })),
                h.show(),
                t.owner.emit('tip:update', { x: a, y: r, index: d });
              const n = s.default.clamp(a, x.invert(-20), x.invert(v + e)),
                i = s.default.clamp(r, g.invert(b + e), g.invert(-20)),
                o = s.default.color(y[d], d);
              p.style('color', 'red'),
                p.attr('transform', 'translate(' + x(n) + ',' + g(i) + ')'),
                p.select('circle').attr('fill', o),
                p
                  .select('text')
                  .attr('fill', o)
                  .text(t.renderer(a, r, d));
            } else h.hide();
          }),
          (h.show = function () {
            c.merge(u).style('display', null);
          }),
          (h.hide = function () {
            c.merge(u).style('display', 'none');
          }),
          Object.keys(t).forEach(function (e) {
            s.default.getterSetter.call(h, t, e);
          }),
          h
        );
      };
    },
    9409: (t, e) => {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
    },
    3469: function (t, e, n) {
      'use strict';
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const a = i(n(5464)),
        r = {
          linspace: function (t, e, n) {
            const i = (e - t) / (n - 1);
            return Array.from({ length: n }, (e, n) => t + i * n);
          },
          logspace: function (t, e, n) {
            return this.linspace(t, e, n).map((t) => Math.pow(10, t));
          },
          isValidNumber: function (t) {
            return 'number' == typeof t && !isNaN(t);
          },
          space: function (t, e, n) {
            const i = e[0],
              a = e[1];
            return 'log' === t.type
              ? this.logspace(Math.log10(i), Math.log10(a), n)
              : this.linspace(i, a, n);
          },
          getterSetter: function (t, e) {
            const n = this;
            this[e] = function (i) {
              return arguments.length ? ((t[e] = i), n) : t[e];
            };
          },
          sgn: function (t) {
            return t < 0 ? -1 : t > 0 ? 1 : 0;
          },
          clamp: function (t, e, n) {
            return t < e ? e : t > n ? n : t;
          },
          color: function (t, e) {
            const n = e % a.default.COLORS.length;
            return t.color || a.default.COLORS[n].hex();
          },
          infinity: function () {
            return 9007199254740991;
          },
        };
      e.default = r;
    },
  },
]);
