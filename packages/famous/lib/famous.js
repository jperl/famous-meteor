/**
 * @license almond 0.2.9 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: felix@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

!function () {
    var t, e, i;
    !function (s) {
        function n(t, e) {
            return x.call(t, e)
        }

        function o(t, e) {
            var i, s, n, o, r, a, h, u, c, p, l, f = e && e.split("/"), d = v.map, _ = d && d["*"] || {};
            if (t && "." === t.charAt(0))if (e) {
                for (f = f.slice(0, f.length - 1), t = t.split("/"), r = t.length - 1, v.nodeIdCompat && S.test(t[r]) && (t[r] = t[r].replace(S, "")), t = f.concat(t), c = 0; c < t.length; c += 1)if (l = t[c], "." === l)t.splice(c, 1), c -= 1; else if (".." === l) {
                    if (1 === c && (".." === t[2] || ".." === t[0]))break;
                    c > 0 && (t.splice(c - 1, 2), c -= 2)
                }
                t = t.join("/")
            } else 0 === t.indexOf("./") && (t = t.substring(2));
            if ((f || _) && d) {
                for (i = t.split("/"), c = i.length; c > 0; c -= 1) {
                    if (s = i.slice(0, c).join("/"), f)for (p = f.length; p > 0; p -= 1)if (n = d[f.slice(0, p).join("/")], n && (n = n[s])) {
                        o = n, a = c;
                        break
                    }
                    if (o)break;
                    !h && _ && _[s] && (h = _[s], u = c)
                }
                !o && h && (o = h, a = u), o && (i.splice(0, a, o), t = i.join("/"))
            }
            return t
        }

        function r(t, e) {
            return function () {
                return f.apply(s, O.call(arguments, 0).concat([t, e]))
            }
        }

        function a(t) {
            return function (e) {
                return o(e, t)
            }
        }

        function h(t) {
            return function (e) {
                g[t] = e
            }
        }

        function u(t) {
            if (n(y, t)) {
                var e = y[t];
                delete y[t], m[t] = !0, l.apply(s, e)
            }
            if (!n(g, t) && !n(m, t))throw new Error("No " + t);
            return g[t]
        }

        function c(t) {
            var e, i = t ? t.indexOf("!") : -1;
            return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
        }

        function p(t) {
            return function () {
                return v && v.config && v.config[t] || {}
            }
        }

        var l, f, d, _, g = {}, y = {}, v = {}, m = {}, x = Object.prototype.hasOwnProperty, O = [].slice, S = /\.js$/;
        d = function (t, e) {
            var i, s = c(t), n = s[0];
            return t = s[1], n && (n = o(n, e), i = u(n)), n ? t = i && i.normalize ? i.normalize(t, a(e)) : o(t, e) : (t = o(t, e), s = c(t), n = s[0], t = s[1], n && (i = u(n))), {f: n ? n + "!" + t : t, n: t, pr: n, p: i}
        }, _ = {require: function (t) {
            return r(t)
        }, exports: function (t) {
            var e = g[t];
            return"undefined" != typeof e ? e : g[t] = {}
        }, module: function (t) {
            return{id: t, uri: "", exports: g[t], config: p(t)}
        }}, l = function (t, e, i, o) {
            var a, c, p, l, f, v, x = [], O = typeof i;
            if (o = o || t, "undefined" === O || "function" === O) {
                for (e = !e.length && i.length ? ["require", "exports", "module"] : e, f = 0; f < e.length; f += 1)if (l = d(e[f], o), c = l.f, "require" === c)x[f] = _.require(t); else if ("exports" === c)x[f] = _.exports(t), v = !0; else if ("module" === c)a = x[f] = _.module(t); else if (n(g, c) || n(y, c) || n(m, c))x[f] = u(c); else {
                    if (!l.p)throw new Error(t + " missing " + c);
                    l.p.load(l.n, r(o, !0), h(c), {}), x[f] = g[c]
                }
                p = i ? i.apply(g[t], x) : void 0, t && (a && a.exports !== s && a.exports !== g[t] ? g[t] = a.exports : p === s && v || (g[t] = p))
            } else t && (g[t] = i)
        }, t = e = f = function (t, e, i, n, o) {
            if ("string" == typeof t)return _[t] ? _[t](e) : u(d(t, e).f);
            if (!t.splice) {
                if (v = t, v.deps && f(v.deps, v.callback), !e)return;
                e.splice ? (t = e, e = i, i = null) : t = s
            }
            return e = e || function () {
            }, "function" == typeof i && (i = n, n = o), n ? l(s, t, e, i) : setTimeout(function () {
                l(s, t, e, i)
            }, 4), f
        }, f.config = function (t) {
            return f(t)
        }, t._defined = g, i = function (t, e, i) {
            e.splice || (i = e, e = []), n(g, t) || n(y, t) || (y[t] = [t, e, i])
        }, i.amd = {jQuery: !0}
    }(), i("almond", function () {
    }), i("famous/core/Entity", ["require", "exports", "module"], function (t, e, i) {
        function s(t) {
            return a[t]
        }

        function n(t, e) {
            a[t] = e
        }

        function o(t) {
            var e = a.length;
            return n(e, t), e
        }

        function r(t) {
            n(t, null)
        }

        var a = [];
        i.exports = {register: o, unregister: r, get: s, set: n}
    }), i("famous/core/Transform", ["require", "exports", "module"], function (t, e, i) {
        function s(t) {
            return 2 === t.length ? t[0] * t[0] + t[1] * t[1] : t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
        }

        function n(t) {
            return Math.sqrt(s(t))
        }

        function o(t) {
            return 0 > t ? -1 : 1
        }

        var r = {};
        r.precision = 1e-6, r.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.multiply4x4 = function (t, e) {
            return[t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3], t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3], t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7], t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7], t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11], t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11], t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15], t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15]]
        }, r.multiply = function (t, e) {
            return[t[0] * e[0] + t[4] * e[1] + t[8] * e[2], t[1] * e[0] + t[5] * e[1] + t[9] * e[2], t[2] * e[0] + t[6] * e[1] + t[10] * e[2], 0, t[0] * e[4] + t[4] * e[5] + t[8] * e[6], t[1] * e[4] + t[5] * e[5] + t[9] * e[6], t[2] * e[4] + t[6] * e[5] + t[10] * e[6], 0, t[0] * e[8] + t[4] * e[9] + t[8] * e[10], t[1] * e[8] + t[5] * e[9] + t[9] * e[10], t[2] * e[8] + t[6] * e[9] + t[10] * e[10], 0, t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12], t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13], t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14], 1]
        }, r.thenMove = function (t, e) {
            return e[2] || (e[2] = 0), [t[0], t[1], t[2], 0, t[4], t[5], t[6], 0, t[8], t[9], t[10], 0, t[12] + e[0], t[13] + e[1], t[14] + e[2], 1]
        }, r.moveThen = function (t, e) {
            t[2] || (t[2] = 0);
            var i = t[0] * e[0] + t[1] * e[4] + t[2] * e[8], s = t[0] * e[1] + t[1] * e[5] + t[2] * e[9], n = t[0] * e[2] + t[1] * e[6] + t[2] * e[10];
            return r.thenMove(e, [i, s, n])
        }, r.translate = function (t, e, i) {
            return void 0 === i && (i = 0), [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1]
        }, r.thenScale = function (t, e) {
            return[e[0] * t[0], e[1] * t[1], e[2] * t[2], 0, e[0] * t[4], e[1] * t[5], e[2] * t[6], 0, e[0] * t[8], e[1] * t[9], e[2] * t[10], 0, e[0] * t[12], e[1] * t[13], e[2] * t[14], 1]
        }, r.scale = function (t, e, i) {
            return void 0 === i && (i = 1), [t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1]
        }, r.rotateX = function (t) {
            var e = Math.cos(t), i = Math.sin(t);
            return[1, 0, 0, 0, 0, e, i, 0, 0, -i, e, 0, 0, 0, 0, 1]
        }, r.rotateY = function (t) {
            var e = Math.cos(t), i = Math.sin(t);
            return[e, 0, -i, 0, 0, 1, 0, 0, i, 0, e, 0, 0, 0, 0, 1]
        }, r.rotateZ = function (t) {
            var e = Math.cos(t), i = Math.sin(t);
            return[e, i, 0, 0, -i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        }, r.rotate = function (t, e, i) {
            var s = Math.cos(t), n = Math.sin(t), o = Math.cos(e), r = Math.sin(e), a = Math.cos(i), h = Math.sin(i), u = [o * a, s * h + n * r * a, n * h - s * r * a, 0, -o * h, s * a - n * r * h, n * a + s * r * h, 0, r, -n * o, s * o, 0, 0, 0, 0, 1];
            return u
        }, r.rotateAxis = function (t, e) {
            var i = Math.sin(e), s = Math.cos(e), n = 1 - s, o = t[0] * t[0] * n, r = t[0] * t[1] * n, a = t[0] * t[2] * n, h = t[1] * t[1] * n, u = t[1] * t[2] * n, c = t[2] * t[2] * n, p = t[0] * i, l = t[1] * i, f = t[2] * i, d = [o + s, r + f, a - l, 0, r - f, h + s, u + p, 0, a + l, u - p, c + s, 0, 0, 0, 0, 1];
            return d
        }, r.aboutOrigin = function (t, e) {
            var i = t[0] - (t[0] * e[0] + t[1] * e[4] + t[2] * e[8]), s = t[1] - (t[0] * e[1] + t[1] * e[5] + t[2] * e[9]), n = t[2] - (t[0] * e[2] + t[1] * e[6] + t[2] * e[10]);
            return r.thenMove(e, [i, s, n])
        }, r.skew = function (t, e, i) {
            return[1, 0, 0, 0, Math.tan(i), 1, 0, 0, Math.tan(e), Math.tan(t), 1, 0, 0, 0, 0, 1]
        }, r.perspective = function (t) {
            return[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / t, 0, 0, 0, 1]
        }, r.getTranslate = function (t) {
            return[t[12], t[13], t[14]]
        }, r.inverse = function (t) {
            var e = t[5] * t[10] - t[6] * t[9], i = t[4] * t[10] - t[6] * t[8], s = t[4] * t[9] - t[5] * t[8], n = t[1] * t[10] - t[2] * t[9], o = t[0] * t[10] - t[2] * t[8], r = t[0] * t[9] - t[1] * t[8], a = t[1] * t[6] - t[2] * t[5], h = t[0] * t[6] - t[2] * t[4], u = t[0] * t[5] - t[1] * t[4], c = t[0] * e - t[1] * i + t[2] * s, p = 1 / c, l = [p * e, -p * n, p * a, 0, -p * i, p * o, -p * h, 0, p * s, -p * r, p * u, 0, 0, 0, 0, 1];
            return l[12] = -t[12] * l[0] - t[13] * l[4] - t[14] * l[8], l[13] = -t[12] * l[1] - t[13] * l[5] - t[14] * l[9], l[14] = -t[12] * l[2] - t[13] * l[6] - t[14] * l[10], l
        }, r.transpose = function (t) {
            return[t[0], t[4], t[8], t[12], t[1], t[5], t[9], t[13], t[2], t[6], t[10], t[14], t[3], t[7], t[11], t[15]]
        }, r.interpret = function (t) {
            var e = [t[0], t[1], t[2]], i = o(e[0]), a = n(e), h = [e[0] + i * a, e[1], e[2]], u = 2 / s(h);
            if (u >= 1 / 0)return{translate: r.getTranslate(t), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]};
            var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            c[0] = 1 - u * h[0] * h[0], c[5] = 1 - u * h[1] * h[1], c[10] = 1 - u * h[2] * h[2], c[1] = -u * h[0] * h[1], c[2] = -u * h[0] * h[2], c[6] = -u * h[1] * h[2], c[4] = c[1], c[8] = c[2], c[9] = c[6];
            var p = r.multiply(c, t), l = [p[5], p[6]], f = o(l[0]), d = n(l), _ = [l[0] + f * d, l[1]], g = 2 / s(_), y = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
            y[5] = 1 - g * _[0] * _[0], y[10] = 1 - g * _[1] * _[1], y[6] = -g * _[0] * _[1], y[9] = y[6];
            var v = r.multiply(y, c), m = r.multiply(v, t), x = r.scale(m[0] < 0 ? -1 : 1, m[5] < 0 ? -1 : 1, m[10] < 0 ? -1 : 1);
            m = r.multiply(m, x), v = r.multiply(x, v);
            var O = {};
            return O.translate = r.getTranslate(t), O.rotate = [Math.atan2(-v[6], v[10]), Math.asin(v[2]), Math.atan2(-v[1], v[0])], O.rotate[0] || (O.rotate[0] = 0, O.rotate[2] = Math.atan2(v[4], v[5])), O.scale = [m[0], m[5], m[10]], O.skew = [Math.atan2(m[9], O.scale[2]), Math.atan2(m[8], O.scale[2]), Math.atan2(m[4], O.scale[0])], Math.abs(O.rotate[0]) + Math.abs(O.rotate[2]) > 1.5 * Math.PI && (O.rotate[1] = Math.PI - O.rotate[1], O.rotate[1] > Math.PI && (O.rotate[1] -= 2 * Math.PI), O.rotate[1] < -Math.PI && (O.rotate[1] += 2 * Math.PI), O.rotate[0] < 0 ? O.rotate[0] += Math.PI : O.rotate[0] -= Math.PI, O.rotate[2] < 0 ? O.rotate[2] += Math.PI : O.rotate[2] -= Math.PI), O
        }, r.average = function (t, e, i) {
            i = void 0 === i ? .5 : i;
            for (var s = r.interpret(t), n = r.interpret(e), o = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]}, a = 0; 3 > a; a++)o.translate[a] = (1 - i) * s.translate[a] + i * n.translate[a], o.rotate[a] = (1 - i) * s.rotate[a] + i * n.rotate[a], o.scale[a] = (1 - i) * s.scale[a] + i * n.scale[a], o.skew[a] = (1 - i) * s.skew[a] + i * n.skew[a];
            return r.build(o)
        }, r.build = function (t) {
            var e = r.scale(t.scale[0], t.scale[1], t.scale[2]), i = r.skew(t.skew[0], t.skew[1], t.skew[2]), s = r.rotate(t.rotate[0], t.rotate[1], t.rotate[2]);
            return r.thenMove(r.multiply(r.multiply(s, i), e), t.translate)
        }, r.equals = function (t, e) {
            return!r.notEquals(t, e)
        }, r.notEquals = function (t, e) {
            return t === e ? !1 : t && e ? !(t && e) || t[12] !== e[12] || t[13] !== e[13] || t[14] !== e[14] || t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[4] !== e[4] || t[5] !== e[5] || t[6] !== e[6] || t[8] !== e[8] || t[9] !== e[9] || t[10] !== e[10] : !0
        }, r.normalizeRotation = function (t) {
            var e = t.slice(0);
            for ((e[0] === .5 * Math.PI || e[0] === .5 * -Math.PI) && (e[0] = -e[0], e[1] = Math.PI - e[1], e[2] -= Math.PI), e[0] > .5 * Math.PI && (e[0] = e[0] - Math.PI, e[1] = Math.PI - e[1], e[2] -= Math.PI), e[0] < .5 * -Math.PI && (e[0] = e[0] + Math.PI, e[1] = -Math.PI - e[1], e[2] -= Math.PI); e[1] < -Math.PI;)e[1] += 2 * Math.PI;
            for (; e[1] >= Math.PI;)e[1] -= 2 * Math.PI;
            for (; e[2] < -Math.PI;)e[2] += 2 * Math.PI;
            for (; e[2] >= Math.PI;)e[2] -= 2 * Math.PI;
            return e
        }, r.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, .001, 1], r.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -.001, 1], i.exports = r
    }), i("famous/core/SpecParser", ["require", "exports", "module", "./Transform"], function (t, e, i) {
        function s() {
            this.result = {}
        }

        function n(t, e) {
            return[t[0] * e[0] + t[1] * e[4] + t[2] * e[8], t[0] * e[1] + t[1] * e[5] + t[2] * e[9], t[0] * e[2] + t[1] * e[6] + t[2] * e[10]]
        }

        var o = t("./Transform");
        s._instance = new s, s.parse = function (t, e) {
            return s._instance.parse(t, e)
        }, s.prototype.parse = function (t, e) {
            return this.reset(), this._parseSpec(t, e, o.identity), this.result
        }, s.prototype.reset = function () {
            this.result = {}
        };
        var r = [0, 0];
        s.prototype._parseSpec = function (t, e, i) {
            var s, a, h, u, c, p;
            if ("number" == typeof t) {
                if (s = t, h = e.transform, e.size && e.origin && (e.origin[0] || e.origin[1])) {
                    var l = [e.origin[0] * e.size[0], e.origin[1] * e.size[1], 0];
                    h = o.thenMove(h, n(l, i))
                }
                this.result[s] = {transform: h, opacity: e.opacity, origin: e.origin || r, size: e.size}
            } else {
                if (!t)return;
                if (t instanceof Array)for (var f = 0; f < t.length; f++)this._parseSpec(t[f], e, i); else {
                    a = t.target, h = e.transform, u = e.opacity, c = e.origin, p = e.size;
                    var d = i;
                    if (void 0 !== t.opacity && (u = e.opacity * t.opacity), t.transform && (h = o.multiply(e.transform, t.transform)), t.origin && (c = t.origin, d = e.transform), t.size) {
                        var _ = e.size;
                        p = [t.size[0] || _[0], t.size[1] || _[1]], _ && c && (c[0] || c[1]) && (h = o.thenMove(h, n([c[0] * _[0], c[1] * _[1], 0], i)), h = o.moveThen([-c[0] * p[0], -c[1] * p[1], 0], h)), d = e.transform, c = null
                    }
                    this._parseSpec(a, {transform: h, opacity: u, origin: c, size: p}, d)
                }
            }
        }, i.exports = s
    }), i("famous/core/RenderNode", ["require", "exports", "module", "./Entity", "./SpecParser"], function (t, e, i) {
        function s(t) {
            this._object = null, this._child = null, this._hasMultipleChildren = !1, this._isRenderable = !1, this._isModifier = !1, this._resultCache = {}, this._prevResults = {}, this._childResult = null, t && this.set(t)
        }

        function n(t, e, i) {
            for (var s = r.parse(t, e), a = Object.keys(s), h = 0; h < a.length; h++) {
                var u = a[h], c = o.get(u), p = s[u];
                p.allocator = e.allocator;
                var l = c.commit(p);
                l ? n(l, e, i) : i[u] = p
            }
        }

        var o = t("./Entity"), r = t("./SpecParser");
        s.prototype.add = function (t) {
            var e = t instanceof s ? t : new s(t);
            return this._child instanceof Array ? this._child.push(e) : this._child ? (this._child = [this._child, e], this._hasMultipleChildren = !0, this._childResult = []) : this._child = e, e
        }, s.prototype.get = function () {
            return this._object || (this._hasMultipleChildren ? null : this._child ? this._child.get() : null)
        }, s.prototype.set = function (t) {
            return this._childResult = null, this._hasMultipleChildren = !1, this._isRenderable = t.render ? !0 : !1, this._isModifier = t.modify ? !0 : !1, this._object = t, this._child = null, t instanceof s ? t : this
        }, s.prototype.getSize = function () {
            var t = null, e = this.get();
            return e && e.getSize && (t = e.getSize()), !t && this._child && this._child.getSize && (t = this._child.getSize()), t
        }, s.prototype.commit = function (t) {
            for (var e = Object.keys(this._prevResults), i = 0; i < e.length; i++) {
                var s = e[i];
                if (void 0 === this._resultCache[s]) {
                    var r = o.get(s);
                    r.cleanup && r.cleanup(t.allocator)
                }
            }
            this._prevResults = this._resultCache, this._resultCache = {}, n(this.render(), t, this._resultCache)
        }, s.prototype.render = function () {
            if (this._isRenderable)return this._object.render();
            var t = null;
            if (this._hasMultipleChildren) {
                t = this._childResult;
                for (var e = this._child, i = 0; i < e.length; i++)t[i] = e[i].render()
            } else this._child && (t = this._child.render());
            return this._isModifier ? this._object.modify(t) : t
        }, i.exports = s
    }), i("famous/core/EventEmitter", ["require", "exports", "module"], function (t, e, i) {
        function s() {
            this.listeners = {}, this._owner = this
        }

        s.prototype.emit = function (t, e) {
            var i = this.listeners[t];
            if (i)for (var s = 0; s < i.length; s++)i[s].call(this._owner, e);
            return this
        }, s.prototype.on = function (t, e) {
            t in this.listeners || (this.listeners[t] = []);
            var i = this.listeners[t].indexOf(e);
            return 0 > i && this.listeners[t].push(e), this
        }, s.prototype.addListener = s.prototype.on, s.prototype.removeListener = function (t, e) {
            var i = this.listeners[t].indexOf(e);
            return i >= 0 && this.listeners[t].splice(i, 1), this
        }, s.prototype.bindThis = function (t) {
            this._owner = t
        }, i.exports = s
    }), i("famous/core/EventHandler", ["require", "exports", "module", "./EventEmitter"], function (t, e, i) {
        function s() {
            n.apply(this, arguments), this.downstream = [], this.downstreamFn = [], this.upstream = [], this.upstreamListeners = {}
        }

        var n = t("./EventEmitter");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.setInputHandler = function (t, e) {
            t.trigger = e.trigger.bind(e), e.subscribe && e.unsubscribe && (t.subscribe = e.subscribe.bind(e), t.unsubscribe = e.unsubscribe.bind(e))
        }, s.setOutputHandler = function (t, e) {
            e instanceof s && e.bindThis(t), t.pipe = e.pipe.bind(e), t.unpipe = e.unpipe.bind(e), t.on = e.on.bind(e), t.addListener = e.on, t.removeListener = e.removeListener.bind(e)
        }, s.prototype.emit = function (t, e) {
            n.prototype.emit.apply(this, arguments);
            var i = 0;
            for (i = 0; i < this.downstream.length; i++)this.downstream[i].trigger(t, e);
            for (i = 0; i < this.downstreamFn.length; i++)this.downstreamFn[i](t, e);
            return this
        }, s.prototype.trigger = s.prototype.emit, s.prototype.pipe = function (t) {
            if (t.subscribe instanceof Function)return t.subscribe(this);
            var e = t instanceof Function ? this.downstreamFn : this.downstream, i = e.indexOf(t);
            return 0 > i && e.push(t), t instanceof Function ? t("pipe", null) : t.trigger && t.trigger("pipe", null), t
        }, s.prototype.unpipe = function (t) {
            if (t.unsubscribe instanceof Function)return t.unsubscribe(this);
            var e = t instanceof Function ? this.downstreamFn : this.downstream, i = e.indexOf(t);
            return i >= 0 ? (e.splice(i, 1), t instanceof Function ? t("unpipe", null) : t.trigger && t.trigger("unpipe", null), t) : !1
        }, s.prototype.on = function (t) {
            if (n.prototype.on.apply(this, arguments), !(t in this.upstreamListeners)) {
                var e = this.trigger.bind(this, t);
                this.upstreamListeners[t] = e;
                for (var i = 0; i < this.upstream.length; i++)this.upstream[i].on(t, e)
            }
            return this
        }, s.prototype.addListener = s.prototype.on, s.prototype.subscribe = function (t) {
            var e = this.upstream.indexOf(t);
            if (0 > e) {
                this.upstream.push(t);
                for (var i in this.upstreamListeners)t.on(i, this.upstreamListeners[i])
            }
            return this
        }, s.prototype.unsubscribe = function (t) {
            var e = this.upstream.indexOf(t);
            if (e >= 0) {
                this.upstream.splice(e, 1);
                for (var i in this.upstreamListeners)t.removeListener(i, this.upstreamListeners[i])
            }
            return this
        }, i.exports = s
    }), i("famous/core/ElementAllocator", ["require", "exports", "module"], function (t, e, i) {
        function s(t) {
            t || (t = document.createDocumentFragment()), this.container = t, this.detachedNodes = {}, this.nodeCount = 0
        }

        s.prototype.migrate = function (t) {
            var e = this.container;
            if (t !== e) {
                if (e instanceof DocumentFragment)t.appendChild(e); else for (; e.hasChildNodes();)t.appendChild(e.removeChild(e.firstChild));
                this.container = t
            }
        }, s.prototype.allocate = function (t) {
            t = t.toLowerCase(), t in this.detachedNodes || (this.detachedNodes[t] = []);
            var e, i = this.detachedNodes[t];
            return i.length > 0 ? e = i.pop() : (e = document.createElement(t), this.container.appendChild(e)), this.nodeCount++, e
        }, s.prototype.deallocate = function (t) {
            var e = t.nodeName.toLowerCase(), i = this.detachedNodes[e];
            i.push(t), this.nodeCount--
        }, s.prototype.getNodeCount = function () {
            return this.nodeCount
        }, i.exports = s
    }), i("famous/utilities/Utility", ["require", "exports", "module"], function (t, e, i) {
        var s = {};
        s.Direction = {X: 0, Y: 1, Z: 2}, s.after = function (t, e) {
            var i = t;
            return function () {
                i--, 0 === i && e.apply(this, arguments)
            }
        }, s.loadURL = function (t, e) {
            var i = new XMLHttpRequest;
            i.onreadystatechange = function () {
                4 === this.readyState && e && e(this.responseText)
            }, i.open("GET", t), i.send()
        }, s.createDocumentFragmentFromHTML = function (t) {
            var e = document.createElement("div");
            e.innerHTML = t;
            for (var i = document.createDocumentFragment(); e.hasChildNodes();)i.appendChild(e.firstChild);
            return i
        }, i.exports = s
    }), i("famous/transitions/MultipleTransition", ["require", "exports", "module", "famous/utilities/Utility"], function (t, e, i) {
        function s(t) {
            this.method = t, this._instances = [], this.state = []
        }

        var n = t("famous/utilities/Utility");
        s.SUPPORTS_MULTIPLE = !0, s.prototype.get = function () {
            for (var t = 0; t < this._instances.length; t++)this.state[t] = this._instances[t].get();
            return this.state
        }, s.prototype.set = function (t, e, i) {
            for (var s = n.after(t.length, i), o = 0; o < t.length; o++)this._instances[o] || (this._instances[o] = new this.method), this._instances[o].set(t[o], e, s)
        }, s.prototype.reset = function (t) {
            for (var e = 0; e < t.length; e++)this._instances[e] || (this._instances[e] = new this.method), this._instances[e].reset(t[e])
        }, i.exports = s
    }), i("famous/transitions/TweenTransition", ["require", "exports", "module"], function (t, e, i) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._startTime = 0, this._startValue = 0, this._updateTime = 0, this._endValue = 0, this._curve = void 0, this._duration = 0, this._active = !1, this._callback = void 0, this.state = 0, this.velocity = void 0
        }

        function n(t, e, i) {
            return(1 - i) * t + i * e
        }

        function o(t) {
            return t instanceof Object ? t instanceof Array ? t.slice(0) : Object.create(t) : t
        }

        function r(t, e) {
            var i = {curve: e.curve};
            return e.duration && (i.duration = e.duration), e.speed && (i.speed = e.speed), t instanceof Object && (void 0 !== t.duration && (i.duration = t.duration), t.curve && (i.curve = t.curve), t.speed && (i.speed = t.speed)), "string" == typeof i.curve && (i.curve = s.getCurve(i.curve)), i
        }

        function a(t, e, i, s, n) {
            var o, r = 1e-7, a = (i(n) - i(n - r)) / r;
            if (t instanceof Array) {
                o = [];
                for (var h = 0; h < t.length; h++)o[h] = a * (t[h] - e[h]) / s
            } else o = a * (t - e) / s;
            return o
        }

        function h(t, e, i) {
            var s;
            if (t instanceof Array) {
                s = [];
                for (var o = 0; o < t.length; o++)s[o] = n(t[o], e[o], i)
            } else s = n(t, e, i);
            return s
        }

        s.Curves = {linear: function (t) {
            return t
        }, easeIn: function (t) {
            return t * t
        }, easeOut: function (t) {
            return t * (2 - t)
        }, easeInOut: function (t) {
            return.5 >= t ? 2 * t * t : -2 * t * t + 4 * t - 1
        }, easeOutBounce: function (t) {
            return t * (3 - 2 * t)
        }, spring: function (t) {
            return(1 - t) * Math.sin(6 * Math.PI * t) + t
        }}, s.SUPPORTS_MULTIPLE = !0, s.DEFAULT_OPTIONS = {curve: s.Curves.linear, duration: 500, speed: 0};
        var u = {};
        s.registerCurve = function (t, e) {
            return u[t] ? !1 : (u[t] = e, !0)
        }, s.unregisterCurve = function (t) {
            return u[t] ? (delete u[t], !0) : !1
        }, s.getCurve = function (t) {
            return u[t]
        }, s.getCurves = function () {
            return u
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.curve && (this.options.curve = t.curve), void 0 !== t.duration && (this.options.duration = t.duration), void 0 !== t.speed && (this.options.speed = t.speed)
        }, s.prototype.set = function (t, e, i) {
            if (!e)return this.reset(t), void(i && i());
            if (this._startValue = o(this.get()), e = r(e, this.options), e.speed) {
                var s = this._startValue;
                if (s instanceof Object) {
                    var n = 0;
                    for (var a in s)n += (t[a] - s[a]) * (t[a] - s[a]);
                    e.duration = Math.sqrt(n) / e.speed
                } else e.duration = Math.abs(t - s) / e.speed
            }
            this._startTime = Date.now(), this._endValue = o(t), this._startVelocity = o(e.velocity), this._duration = e.duration, this._curve = e.curve, this._active = !0, this._callback = i
        }, s.prototype.reset = function (t, e) {
            if (this._callback) {
                var i = this._callback;
                this._callback = void 0, i()
            }
            this.state = o(t), this.velocity = o(e), this._startTime = 0, this._duration = 0, this._updateTime = 0, this._startValue = this.state, this._startVelocity = this.velocity, this._endValue = this.state, this._active = !1
        }, s.prototype.getVelocity = function () {
            return this.velocity
        }, s.prototype.get = function (t) {
            return this.update(t), this.state
        }, s.prototype.update = function (t) {
            if (this._active) {
                if (t || (t = Date.now()), !(this._updateTime >= t)) {
                    this._updateTime = t;
                    var e = t - this._startTime;
                    if (e >= this._duration)this.state = this._endValue, this.velocity = a(this.state, this._startValue, this._curve, this._duration, 1), this._active = !1; else if (0 > e)this.state = this._startValue, this.velocity = this._startVelocity; else {
                        var i = e / this._duration;
                        this.state = h(this._startValue, this._endValue, this._curve(i)), this.velocity = a(this.state, this._startValue, this._curve, this._duration, i)
                    }
                }
            } else if (this._callback) {
                var s = this._callback;
                this._callback = void 0, s()
            }
        }, s.prototype.isActive = function () {
            return this._active
        }, s.prototype.halt = function () {
            this.reset(this.get())
        }, s.registerCurve("linear", s.Curves.linear), s.registerCurve("easeIn", s.Curves.easeIn), s.registerCurve("easeOut", s.Curves.easeOut), s.registerCurve("easeInOut", s.Curves.easeInOut), s.registerCurve("easeOutBounce", s.Curves.easeOutBounce), s.registerCurve("spring", s.Curves.spring), s.customCurve = function (t, e) {
            return t = t || 0, e = e || 0, function (i) {
                return t * i + (-2 * t - e + 3) * i * i + (t + e - 2) * i * i * i
            }
        }, i.exports = s
    }), i("famous/transitions/Transitionable", ["require", "exports", "module", "./MultipleTransition", "./TweenTransition"], function (t, e, i) {
        function s(t) {
            this.currentAction = null, this.actionQueue = [], this.callbackQueue = [], this.state = 0, this.velocity = void 0, this._callback = void 0, this._engineInstance = null, this._currentMethod = null, this.set(t)
        }

        function n() {
            if (this._callback) {
                var t = this._callback;
                this._callback = void 0, t()
            }
            if (this.actionQueue.length <= 0)return void this.set(this.get());
            this.currentAction = this.actionQueue.shift(), this._callback = this.callbackQueue.shift();
            var e = null, i = this.currentAction[0], s = this.currentAction[1];
            s instanceof Object && s.method ? (e = s.method, "string" == typeof e && (e = a[e])) : e = r, this._currentMethod !== e && (this._engineInstance = !(i instanceof Object) || e.SUPPORTS_MULTIPLE === !0 || i.length <= e.SUPPORTS_MULTIPLE ? new e : new o(e), this._currentMethod = e), this._engineInstance.reset(this.state, this.velocity), void 0 !== this.velocity && (s.velocity = this.velocity), this._engineInstance.set(i, s, n.bind(this))
        }

        var o = t("./MultipleTransition"), r = t("./TweenTransition"), a = {};
        s.registerMethod = function (t, e) {
            return t in a ? !1 : (a[t] = e, !0)
        }, s.unregisterMethod = function (t) {
            return t in a ? (delete a[t], !0) : !1
        }, s.prototype.set = function (t, e, i) {
            if (!e)return this.reset(t), i && i(), this;
            var s = [t, e];
            return this.actionQueue.push(s), this.callbackQueue.push(i), this.currentAction || n.call(this), this
        }, s.prototype.reset = function (t, e) {
            this._currentMethod = null, this._engineInstance = null, this.state = t, this.velocity = e, this.currentAction = null, this.actionQueue = [], this.callbackQueue = []
        }, s.prototype.delay = function (t, e) {
            this.set(this._engineInstance.get(), {duration: t, curve: function () {
                return 0
            }}, e)
        }, s.prototype.get = function (t) {
            return this._engineInstance && (this._engineInstance.getVelocity && (this.velocity = this._engineInstance.getVelocity()), this.state = this._engineInstance.get(t)), this.state
        }, s.prototype.isActive = function () {
            return!!this.currentAction
        }, s.prototype.halt = function () {
            this.set(this.get())
        }, i.exports = s
    }), i("famous/core/Context", ["require", "exports", "module", "./RenderNode", "./EventHandler", "./ElementAllocator", "./Transform", "famous/transitions/Transitionable"], function (t, e, i) {
        function s(t) {
            return[t.clientWidth, t.clientHeight]
        }

        function n(t) {
            this.container = t, this._allocator = new a(t), this._node = new o, this._eventOutput = new r, this._size = s(this.container), this._perspectiveState = new u(0), this._perspective = void 0, this._nodeContext = {allocator: this._allocator, transform: h.identity, opacity: 1, origin: c, size: this._size}, this._eventOutput.on("resize", function () {
                this.setSize(s(this.container))
            }.bind(this))
        }

        var o = t("./RenderNode"), r = t("./EventHandler"), a = t("./ElementAllocator"), h = t("./Transform"), u = t("famous/transitions/Transitionable"), c = [0, 0];
        n.prototype.getAllocator = function () {
            return this._allocator
        }, n.prototype.add = function (t) {
            return this._node.add(t)
        }, n.prototype.migrate = function (t) {
            t !== this.container && (this.container = t, this._allocator.migrate(t))
        }, n.prototype.getSize = function () {
            return this._size
        }, n.prototype.setSize = function (t) {
            t || (t = s(this.container)), this._size[0] = t[0], this._size[1] = t[1]
        }, n.prototype.update = function (t) {
            t && (t.transform && (this._nodeContext.transform = t.transform), t.opacity && (this._nodeContext.opacity = t.opacity), t.origin && (this._nodeContext.origin = t.origin), t.size && (this._nodeContext.size = t.size));
            var e = this._perspectiveState.get();
            e !== this._perspective && (this.container.style.perspective = e ? e.toFixed() + "px" : "", this.container.style.webkitPerspective = e ? e.toFixed() : "", this._perspective = e), this._node.commit(this._nodeContext)
        }, n.prototype.getPerspective = function () {
            return this._perspectiveState.get()
        }, n.prototype.setPerspective = function (t, e, i) {
            return this._perspectiveState.set(t, e, i)
        }, n.prototype.emit = function (t, e) {
            return this._eventOutput.emit(t, e)
        }, n.prototype.on = function (t, e) {
            return this._eventOutput.on(t, e)
        }, n.prototype.removeListener = function (t, e) {
            return this._eventOutput.removeListener(t, e)
        }, n.prototype.pipe = function (t) {
            return this._eventOutput.pipe(t)
        }, n.prototype.unpipe = function (t) {
            return this._eventOutput.unpipe(t)
        }, i.exports = n
    }), i("famous/core/OptionsManager", ["require", "exports", "module", "./EventHandler"], function (t, e, i) {
        function s(t) {
            this._value = t, this.eventOutput = null
        }

        function n() {
            this.eventOutput = new o, this.eventOutput.bindThis(this), o.setOutputHandler(this, this.eventOutput)
        }

        var o = t("./EventHandler");
        s.patch = function (t) {
            for (var e = new s(t), i = 1; i < arguments.length; i++)e.patch(arguments[i]);
            return t
        }, s.prototype.patch = function () {
            for (var t = this._value, e = 0; e < arguments.length; e++) {
                var i = arguments[e];
                for (var s in i)s in t && i[s] && i[s].constructor === Object && t[s] && t[s].constructor === Object ? (t.hasOwnProperty(s) || (t[s] = Object.create(t[s])), this.key(s).patch(i[s]), this.eventOutput && this.eventOutput.emit("change", {id: s, value: this.key(s).value()})) : this.set(s, i[s])
            }
            return this
        }, s.prototype.setOptions = s.prototype.patch, s.prototype.key = function (t) {
            var e = new s(this._value[t]);
            return(!(e._value instanceof Object) || e._value instanceof Array) && (e._value = {}), e
        }, s.prototype.get = function (t) {
            return this._value[t]
        }, s.prototype.getOptions = s.prototype.get, s.prototype.set = function (t, e) {
            var i = this.get(t);
            return this._value[t] = e, this.eventOutput && e !== i && this.eventOutput.emit("change", {id: t, value: e}), this
        }, s.prototype.value = function () {
            return this._value
        }, s.prototype.on = function () {
            return n.call(this), this.on.apply(this, arguments)
        }, s.prototype.removeListener = function () {
            return n.call(this), this.removeListener.apply(this, arguments)
        }, s.prototype.pipe = function () {
            return n.call(this), this.pipe.apply(this, arguments)
        }, s.prototype.unpipe = function () {
            return n.call(this), this.unpipe.apply(this, arguments)
        }, i.exports = s
    }), i("famous/core/Engine", ["require", "exports", "module", "./Context", "./EventHandler", "./OptionsManager"], function (t, e, i) {
        function s() {
            v.runLoop ? (c.step(), requestAnimationFrame(s)) : _ = !1
        }

        function n(t) {
            if (document.activeElement && "INPUT" === document.activeElement.nodeName)return void document.activeElement.addEventListener("blur", function i() {
                this.removeEventListener("blur", i), n(t)
            });
            window.scrollTo(0, 0);
            for (var e = 0; e < p.length; e++)p[e].emit("resize");
            y.emit("resize")
        }

        var o, r, a = t("./Context"), h = t("./EventHandler"), u = t("./OptionsManager"), c = {}, p = [], l = [], f = [], d = Date.now(), _ = !0, g = {}, y = new h, v = {containerType: "div", containerClass: "famous-container", fpsCap: void 0, runLoop: !0}, m = new u(v), x = 10;
        c.step = function () {
            var t = Date.now();
            if (!(r && r > t - d)) {
                var e = 0;
                for (o = t - d, d = t, y.emit("prerender"), e = 0; e < l.length; e++)l[e].call(this);
                for (l.splice(0); f.length && Date.now() - t < x;)f.shift().call(this);
                for (e = 0; e < p.length; e++)p[e].update();
                y.emit("postrender")
            }
        }, requestAnimationFrame(s), window.addEventListener("resize", n, !1), n(), window.addEventListener("touchmove", function (t) {
            t.preventDefault()
        }, !0), c.pipe = function (t) {
            return t.subscribe instanceof Function ? t.subscribe(c) : y.pipe(t)
        }, c.unpipe = function (t) {
            return t.unsubscribe instanceof Function ? t.unsubscribe(c) : y.unpipe(t)
        }, c.on = function (t, e) {
            return t in g || (g[t] = y.emit.bind(y, t), document.body.addEventListener(t, g[t])), y.on(t, e)
        }, c.emit = function (t, e) {
            return y.emit(t, e)
        }, c.removeListener = function (t, e) {
            return y.removeListener(t, e)
        }, c.getFPS = function () {
            return 1e3 / o
        }, c.setFPSCap = function (t) {
            r = Math.floor(1e3 / t)
        }, c.getOptions = function () {
            return m.getOptions.apply(m, arguments)
        }, c.setOptions = function () {
            return m.setOptions.apply(m, arguments)
        }, c.createContext = function (t) {
            if (void 0 === t)t = document.createElement(v.containerType), t.classList.add(v.containerClass), document.body.appendChild(t); else if (!(t instanceof Element))throw t = document.createElement(v.containerType), new Error("Tried to create context on non-existent element");
            var e = new a(t);
            return c.registerContext(e), e
        }, c.registerContext = function (t) {
            return p.push(t), t
        }, c.nextTick = function (t) {
            l.push(t)
        }, c.defer = function (t) {
            f.push(t)
        }, m.on("change", function (t) {
            "fpsCap" === t.id ? c.setFPSCap(t.value) : "runLoop" === t.id && !_ && t.value && (_ = !0, requestAnimationFrame(s))
        }), i.exports = c
    }), i("famous/math/Vector", ["require", "exports", "module"], function (t, e, i) {
        function s(t, e, i) {
            return 1 === arguments.length ? this.set(t) : (this.x = t || 0, this.y = e || 0, this.z = i || 0), this
        }

        function n(t, e, i) {
            return this.x = t, this.y = e, this.z = i, this
        }

        function o(t) {
            return n.call(this, t[0], t[1], t[2] || 0)
        }

        function r(t) {
            return n.call(this, t.x, t.y, t.z)
        }

        function a(t) {
            return n.call(this, t, 0, 0)
        }

        var h = new s(0, 0, 0);
        s.prototype.add = function (t) {
            return n.call(h, this.x + t.x, this.y + t.y, this.z + t.z)
        }, s.prototype.sub = function (t) {
            return n.call(h, this.x - t.x, this.y - t.y, this.z - t.z)
        }, s.prototype.mult = function (t) {
            return n.call(h, t * this.x, t * this.y, t * this.z)
        }, s.prototype.div = function (t) {
            return this.mult(1 / t)
        }, s.prototype.cross = function (t) {
            var e = this.x, i = this.y, s = this.z, o = t.x, r = t.y, a = t.z;
            return n.call(h, s * r - i * a, e * a - s * o, i * o - e * r)
        }, s.prototype.equals = function (t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        }, s.prototype.rotateX = function (t) {
            var e = this.x, i = this.y, s = this.z, o = Math.cos(t), r = Math.sin(t);
            return n.call(h, e, i * o - s * r, i * r + s * o)
        }, s.prototype.rotateY = function (t) {
            var e = this.x, i = this.y, s = this.z, o = Math.cos(t), r = Math.sin(t);
            return n.call(h, s * r + e * o, i, s * o - e * r)
        }, s.prototype.rotateZ = function (t) {
            var e = this.x, i = this.y, s = this.z, o = Math.cos(t), r = Math.sin(t);
            return n.call(h, e * o - i * r, e * r + i * o, s)
        }, s.prototype.dot = function (t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }, s.prototype.normSquared = function () {
            return this.dot(this)
        }, s.prototype.norm = function () {
            return Math.sqrt(this.normSquared())
        }, s.prototype.normalize = function (t) {
            0 === arguments.length && (t = 1);
            var e = this.norm();
            return e > 1e-7 ? r.call(h, this.mult(t / e)) : n.call(h, t, 0, 0)
        }, s.prototype.clone = function () {
            return new s(this)
        }, s.prototype.isZero = function () {
            return!(this.x || this.y || this.z)
        }, s.prototype.set = function (t) {
            return t instanceof Array ? o.call(this, t) : t instanceof s ? r.call(this, t) : "number" == typeof t ? a.call(this, t) : void 0
        }, s.prototype.setXYZ = function () {
            return n.apply(this, arguments)
        }, s.prototype.set1D = function (t) {
            return a.call(this, t)
        }, s.prototype.put = function (t) {
            r.call(t, h)
        }, s.prototype.clear = function () {
            return n.call(this, 0, 0, 0)
        }, s.prototype.cap = function u(u) {
            if (1 / 0 === u)return r.call(h, this);
            var t = this.norm();
            return t > u ? r.call(h, this.mult(u / t)) : r.call(h, this)
        }, s.prototype.project = function (t) {
            return t.mult(this.dot(t))
        }, s.prototype.reflectAcross = function (t) {
            return t.normalize().put(t), r(h, this.sub(this.project(t).mult(2)))
        }, s.prototype.get = function () {
            return[this.x, this.y, this.z]
        }, s.prototype.get1D = function () {
            return this.x
        }, i.exports = s
    }), i("famous/math/Matrix", ["require", "exports", "module", "./Vector"], function (t, e, i) {
        function s(t) {
            return this.values = t || [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ], this
        }

        var n = t("./Vector"), o = new s, r = new n;
        s.prototype.get = function () {
            return this.values
        }, s.prototype.set = function (t) {
            this.values = t
        }, s.prototype.vectorMultiply = function (t) {
            var e = this.get(), i = t.x, s = t.y, n = t.z, o = e[0], a = e[1], h = e[2], u = o[0], c = o[1], p = o[2], l = a[0], f = a[1], d = a[2], _ = h[0], g = h[1], y = h[2];
            return r.setXYZ(u * i + c * s + p * n, l * i + f * s + d * n, _ * i + g * s + y * n)
        }, s.prototype.multiply = function (t) {
            for (var e = this.get(), i = [
                []
            ], s = 0; 3 > s; s++) {
                i[s] = [];
                for (var n = 0; 3 > n; n++) {
                    for (var r = 0, a = 0; 3 > a; a++)r += e[s][a] * t[a][n];
                    i[s][n] = r
                }
            }
            return o.set(i)
        }, s.prototype.transpose = function () {
            for (var t = [], e = this.get(), i = 0; 3 > i; i++)for (var s = 0; 3 > s; s++)t[i][s] = e[s][i];
            return o.set(t)
        }, s.prototype.clone = function () {
            for (var t = this.get(), e = [], i = 0; 3 > i; i++)e[i] = t[i].slice();
            return new s(e)
        }, i.exports = s
    }), i("famous/transitions/TransitionableTransform", ["require", "exports", "module", "./Transitionable", "famous/core/Transform", "famous/utilities/Utility"], function (t, e, i) {
        function s(t) {
            this._final = r.identity.slice(), this.translate = new o([0, 0, 0]), this.rotate = new o([0, 0, 0]), this.skew = new o([0, 0, 0]), this.scale = new o([1, 1, 1]), t && this.set(t)
        }

        function n() {
            return r.build({translate: this.translate.get(), rotate: this.rotate.get(), skew: this.skew.get(), scale: this.scale.get()})
        }

        var o = t("./Transitionable"), r = t("famous/core/Transform"), a = t("famous/utilities/Utility");
        s.prototype.setTranslate = function (t, e, i) {
            return this.translate.set(t, e, i), this._final = this._final.slice(), this._final[12] = t[0], this._final[13] = t[1], void 0 !== t[2] && (this._final[14] = t[2]), this
        }, s.prototype.setScale = function (t, e, i) {
            return this.scale.set(t, e, i), this._final = this._final.slice(), this._final[0] = t[0], this._final[5] = t[1], void 0 !== t[2] && (this._final[10] = t[2]), this
        }, s.prototype.setRotate = function (t, e, i) {
            return this.rotate.set(t, e, i), this._final = n.call(this), this._final = r.build({translate: this.translate.get(), rotate: t, scale: this.scale.get(), skew: this.skew.get()}), this
        }, s.prototype.setSkew = function (t, e, i) {
            return this.skew.set(t, e, i), this._final = r.build({translate: this.translate.get(), rotate: this.rotate.get(), scale: this.scale.get(), skew: t}), this
        }, s.prototype.set = function (t, e, i) {
            this._final = t;
            var s = r.interpret(t), n = i ? a.after(4, i) : null;
            return this.translate.set(s.translate, e, n), this.rotate.set(s.rotate, e, n), this.skew.set(s.skew, e, n), this.scale.set(s.scale, e, n), this
        }, s.prototype.setDefaultTransition = function (t) {
            this.translate.setDefault(t), this.rotate.setDefault(t), this.skew.setDefault(t), this.scale.setDefault(t)
        }, s.prototype.get = function () {
            return this.isActive() ? n.call(this) : this._final
        }, s.prototype.getFinal = function () {
            return this._final
        }, s.prototype.isActive = function () {
            return this.translate.isActive() || this.rotate.isActive() || this.scale.isActive() || this.skew.isActive()
        }, s.prototype.halt = function () {
            this._final = this.get(), this.translate.halt(), this.rotate.halt(), this.skew.halt(), this.scale.halt()
        }, i.exports = s
    }), i("famous/core/Modifier", ["require", "exports", "module", "./Transform", "famous/transitions/Transitionable", "famous/transitions/TransitionableTransform"], function (t, e, i) {
        function s(t) {
            this._transformGetter = null, this._opacityGetter = null, this._originGetter = null, this._sizeGetter = null, this._legacyStates = {}, this._output = {transform: o.identity, opacity: 1, origin: null, size: null, target: null}, t && (t.transform && this.transformFrom(t.transform), void 0 !== t.opacity && this.opacityFrom(t.opacity), t.origin && this.originFrom(t.origin), t.size && this.sizeFrom(t.size))
        }

        function n() {
            this._transformGetter && (this._output.transform = this._transformGetter()), this._opacityGetter && (this._output.opacity = this._opacityGetter()), this._originGetter && (this._output.origin = this._originGetter()), this._sizeGetter && (this._output.size = this._sizeGetter())
        }

        var o = t("./Transform"), r = t("famous/transitions/Transitionable"), a = t("famous/transitions/TransitionableTransform");
        s.prototype.transformFrom = function (t) {
            return t instanceof Function ? this._transformGetter = t : t instanceof Object && t.get ? this._transformGetter = t.get.bind(t) : (this._transformGetter = null, this._output.transform = t), this
        }, s.prototype.opacityFrom = function (t) {
            return t instanceof Function ? this._opacityGetter = t : t instanceof Object && t.get ? this._opacityGetter = t.get.bind(t) : (this._opacityGetter = null, this._output.opacity = t), this
        }, s.prototype.originFrom = function (t) {
            return t instanceof Function ? this._originGetter = t : t instanceof Object && t.get ? this._originGetter = t.get.bind(t) : (this._originGetter = null, this._output.origin = t), this
        }, s.prototype.sizeFrom = function (t) {
            return t instanceof Function ? this._sizeGetter = t : t instanceof Object && t.get ? this._sizeGetter = t.get.bind(t) : (this._sizeGetter = null, this._output.size = t), this
        }, s.prototype.setTransform = function (t, e, i) {
            return e || this._legacyStates.transform ? (this._legacyStates.transform || (this._legacyStates.transform = new a(this._output.transform)), this._transformGetter || this.transformFrom(this._legacyStates.transform), this._legacyStates.transform.set(t, e, i), this) : this.transformFrom(t)
        }, s.prototype.setOpacity = function (t, e, i) {
            return e || this._legacyStates.opacity ? (this._legacyStates.opacity || (this._legacyStates.opacity = new r(this._output.opacity)), this._opacityGetter || this.opacityFrom(this._legacyStates.opacity), this._legacyStates.opacity.set(t, e, i)) : this.opacityFrom(t)
        }, s.prototype.setOrigin = function (t, e, i) {
            return e || this._legacyStates.origin ? (this._legacyStates.origin || (this._legacyStates.origin = new r(this._output.origin || [0, 0])), this._originGetter || this.originFrom(this._legacyStates.origin), this._legacyStates.origin.set(t, e, i), this) : this.originFrom(t)
        }, s.prototype.setSize = function (t, e, i) {
            return t && (e || this._legacyStates.size) ? (this._legacyStates.size || (this._legacyStates.size = new r(this._output.size || [0, 0])), this._sizeGetter || this.sizeFrom(this._legacyStates.size), this._legacyStates.size.set(t, e, i), this) : this.sizeFrom(t)
        }, s.prototype.halt = function () {
            this._legacyStates.transform && this._legacyStates.transform.halt(), this._legacyStates.opacity && this._legacyStates.opacity.halt(), this._legacyStates.origin && this._legacyStates.origin.halt(), this._legacyStates.size && this._legacyStates.size.halt(), this._transformGetter = null, this._opacityGetter = null, this._originGetter = null, this._sizeGetter = null
        }, s.prototype.getTransform = function () {
            return this._transformGetter()
        }, s.prototype.getFinalTransform = function () {
            return this._legacyStates.transform ? this._legacyStates.transform.getFinal() : this._output.transform
        }, s.prototype.getOpacity = function () {
            return this._opacityGetter()
        }, s.prototype.getOrigin = function () {
            return this._originGetter()
        }, s.prototype.getSize = function () {
            return this._sizeGetter ? this._sizeGetter() : this._output.size
        }, s.prototype.modify = function (t) {
            return n.call(this), this._output.target = t, this._output
        }, i.exports = s
    }), i("famous/core/Surface", ["require", "exports", "module", "./Entity", "./EventHandler", "./Transform"], function (t, e, i) {
        function s(t) {
            this.options = {}, this.properties = {}, this.content = "", this.classList = [], this.size = null, this._classesDirty = !0, this._stylesDirty = !0, this._sizeDirty = !0, this._contentDirty = !0, this._dirtyClasses = [], this._matrix = null, this._opacity = 1, this._origin = null, this._size = null, this.eventForwarder = function (t) {
                this.emit(t.type, t)
            }.bind(this), this.eventHandler = new f, this.eventHandler.bindThis(this), this.id = l.register(this), t && this.setOptions(t), this._currTarget = null
        }

        function n(t) {
            for (var e in this.eventHandler.listeners)t.addEventListener(e, this.eventForwarder)
        }

        function o(t) {
            for (var e in this.eventHandler.listeners)t.removeEventListener(e, this.eventForwarder)
        }

        function r(t) {
            for (var e = 0; e < this._dirtyClasses.length; e++)t.classList.remove(this._dirtyClasses[e]);
            this._dirtyClasses = []
        }

        function a(t) {
            for (var e in this.properties)t.style[e] = this.properties[e]
        }

        function h(t) {
            for (var e in this.properties)t.style[e] = ""
        }

        function u(t) {
            for (var e = "matrix3d(", i = 0; 15 > i; i++)e += t[i] < 1e-6 && t[i] > -1e-6 ? "0," : t[i] + ",";
            return e += t[15] + ")"
        }

        function c(t) {
            return(100 * t[0]).toFixed(6) + "% " + (100 * t[1]).toFixed(6) + "%"
        }

        function p(t, e) {
            return t && e ? t[0] !== e[0] || t[1] !== e[1] : t !== e
        }

        var l = t("./Entity"), f = t("./EventHandler"), d = t("./Transform"), _ = void 0 !== document.body.style.webkitTransform;
        s.prototype.elementType = "div", s.prototype.elementClass = "famous-surface", s.prototype.on = function (t, e) {
            this._currTarget && this._currTarget.addEventListener(t, this.eventForwarder), this.eventHandler.on(t, e)
        }, s.prototype.removeListener = function (t, e) {
            this.eventHandler.removeListener(t, e)
        }, s.prototype.emit = function (t, e) {
            e && !e.origin && (e.origin = this);
            var i = this.eventHandler.emit(t, e);
            return i && e.stopPropagation && e.stopPropagation(), i
        }, s.prototype.pipe = function (t) {
            return this.eventHandler.pipe(t)
        }, s.prototype.unpipe = function (t) {
            return this.eventHandler.unpipe(t)
        }, s.prototype.render = function () {
            return this.id
        }, s.prototype.setProperties = function (t) {
            for (var e in t)this.properties[e] = t[e];
            this._stylesDirty = !0
        }, s.prototype.getProperties = function () {
            return this.properties
        }, s.prototype.addClass = function (t) {
            this.classList.indexOf(t) < 0 && (this.classList.push(t), this._classesDirty = !0)
        }, s.prototype.removeClass = function (t) {
            var e = this.classList.indexOf(t);
            e >= 0 && (this._dirtyClasses.push(this.classList.splice(e, 1)[0]), this._classesDirty = !0)
        }, s.prototype.setClasses = function (t) {
            var e = 0, i = [];
            for (e = 0; e < this.classList.length; e++)t.indexOf(this.classList[e]) < 0 && i.push(this.classList[e]);
            for (e = 0; e < i.length; e++)this.removeClass(i[e]);
            for (e = 0; e < t.length; e++)this.addClass(t[e])
        }, s.prototype.getClassList = function () {
            return this.classList
        }, s.prototype.setContent = function (t) {
            this.content !== t && (this.content = t, this._contentDirty = !0)
        }, s.prototype.getContent = function () {
            return this.content
        }, s.prototype.setOptions = function (t) {
            t.size && this.setSize(t.size), t.classes && this.setClasses(t.classes), t.properties && this.setProperties(t.properties), t.content && this.setContent(t.content)
        };
        var g = _ ? function (t, e) {
            t.style.webkitTransform = u(e)
        } : function (t, e) {
            t.style.transform = u(e)
        }, y = _ ? function (t, e) {
            t.style.webkitTransformOrigin = c(e)
        } : function (t, e) {
            t.style.transformOrigin = c(e)
        }, v = _ ? function (t) {
            t.style.webkitTransform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
        } : function (t) {
            t.style.transform = "scale3d(0.0001,0.0001,1)", t.style.opacity = 0
        };
        s.prototype.setup = function (t) {
            var e = t.allocate(this.elementType);
            if (this.elementClass)if (this.elementClass instanceof Array)for (var i = 0; i < this.elementClass.length; i++)e.classList.add(this.elementClass[i]); else e.classList.add(this.elementClass);
            e.style.display = "", n.call(this, e), y(e, [0, 0]), this._currTarget = e, this._stylesDirty = !0, this._classesDirty = !0, this._sizeDirty = !0, this._contentDirty = !0, this._matrix = null, this._opacity = void 0, this._origin = null, this._size = null
        }, s.prototype.commit = function (t) {
            this._currTarget || this.setup(t.allocator);
            var e = this._currTarget, i = t.transform, s = t.opacity, n = t.origin, o = t.size;
            if (this.size) {
                var h = o;
                o = [this.size[0], this.size[1]], void 0 === o[0] && h[0] && (o[0] = h[0]), void 0 === o[1] && h[1] && (o[1] = h[1])
            }
            if (p(this._size, o) && (this._size = [o[0], o[1]], this._sizeDirty = !0), !i && this._matrix)return this._matrix = null, this._opacity = 0, void v(e);
            if (this._opacity !== s && (this._opacity = s, e.style.opacity = s >= 1 ? "0.999999" : s), p(this._origin, n) || d.notEquals(this._matrix, i)) {
                i || (i = d.identity), this._matrix = i;
                var u = i;
                n && (this._origin || (this._origin = [0, 0]), this._origin[0] = n[0], this._origin[1] = n[1], u = d.moveThen([-this._size[0] * n[0], -this._size[1] * n[1], 0], i)), g(e, u)
            }
            if (this._classesDirty || this._stylesDirty || this._sizeDirty || this._contentDirty) {
                if (this._classesDirty) {
                    r.call(this, e);
                    for (var c = this.getClassList(), l = 0; l < c.length; l++)e.classList.add(c[l]);
                    this._classesDirty = !1
                }
                this._stylesDirty && (a.call(this, e), this._stylesDirty = !1), this._sizeDirty && (this._size && (e.style.width = this._size[0] !== !0 ? this._size[0] + "px" : "", e.style.height = this._size[1] !== !0 ? this._size[1] + "px" : ""), this._sizeDirty = !1), this._contentDirty && (this.deploy(e), this.eventHandler.emit("deploy"), this._contentDirty = !1)
            }
        }, s.prototype.cleanup = function (t) {
            var e = 0, i = this._currTarget;
            this.eventHandler.emit("recall"), this.recall(i), i.style.display = "none", i.style.width = "", i.style.height = "", this._size = null, h.call(this, i);
            var s = this.getClassList();
            for (r.call(this, i), e = 0; e < s.length; e++)i.classList.remove(s[e]);
            if (this.elementClass)if (this.elementClass instanceof Array)for (e = 0; e < this.elementClass.length; e++)i.classList.remove(this.elementClass[e]); else i.classList.remove(this.elementClass);
            o.call(this, i), this._currTarget = null, t.deallocate(i), v(i)
        }, s.prototype.deploy = function (t) {
            var e = this.getContent();
            if (e instanceof Node) {
                for (; t.hasChildNodes();)t.removeChild(t.firstChild);
                t.appendChild(e)
            } else t.innerHTML = e
        }, s.prototype.recall = function (t) {
            for (var e = document.createDocumentFragment(); t.hasChildNodes();)e.appendChild(t.firstChild);
            this.setContent(e)
        }, s.prototype.getSize = function (t) {
            return t ? this._size : this.size || this._size
        }, s.prototype.setSize = function (t) {
            this.size = t ? [t[0], t[1]] : null, this._sizeDirty = !0
        }, i.exports = s
    }), i("famous/core/View", ["require", "exports", "module", "./EventHandler", "./OptionsManager", "./RenderNode"], function (t, e, i) {
        function s(t) {
            this._node = new r, this._eventInput = new n, this._eventOutput = new n, n.setInputHandler(this, this._eventInput), n.setOutputHandler(this, this._eventOutput), this.options = Object.create(this.constructor.DEFAULT_OPTIONS || s.DEFAULT_OPTIONS), this._optionsManager = new o(this.options), t && this.setOptions(t)
        }

        var n = t("./EventHandler"), o = t("./OptionsManager"), r = t("./RenderNode");
        s.DEFAULT_OPTIONS = {}, s.prototype.getOptions = function () {
            return this._optionsManager.value()
        }, s.prototype.setOptions = function (t) {
            this._optionsManager.patch(t)
        }, s.prototype.add = function () {
            return this._node.add.apply(this._node, arguments)
        }, s.prototype._add = s.prototype.add, s.prototype.render = function () {
            return this._node.render()
        }, s.prototype.getSize = function () {
            return this._node && this._node.getSize ? this._node.getSize.apply(this._node, arguments) || this.options.size : this.options.size
        }, i.exports = s
    }), i("famous/core/ViewSequence", ["require", "exports", "module"], function (t, e, i) {
        function s(t) {
            t || (t = []), t instanceof Array && (t = {array: t}), this._ = null, this.index = t.index || 0, t.array ? this._ = new this.constructor.Backing(t.array) : t._ && (this._ = t._), this.index === this._.firstIndex && (this._.firstNode = this), this.index === this._.firstIndex + this._.array.length - 1 && (this._.lastNode = this), void 0 !== t.loop && (this._.loop = t.loop), this._previousNode = null, this._nextNode = null
        }

        s.Backing = function (t) {
            this.array = t, this.firstIndex = 0, this.loop = !1, this.firstNode = null, this.lastNode = null
        }, s.Backing.prototype.getValue = function (t) {
            var e = t - this.firstIndex;
            return 0 > e || e >= this.array.length ? null : this.array[e]
        }, s.Backing.prototype.setValue = function (t, e) {
            this.array[t - this.firstIndex] = e
        }, s.Backing.prototype.reindex = function (t, e, i) {
            var s = 0, n = this.firstIndex, o = i - e, r = this.firstNode;
            if (t === this.firstIndex) {
                for (var s = 0; e > s; s++)this.firstNode = this.firstNode.getNext();
                this.firstNode.index = this.firstIndex
            }
            for (; t - 1 > n;)r = r.getNext(), n++;
            var a = r;
            for (s = 0; e > s; s++)r = r.getNext(), r && (r._previousNode = a);
            var h = r ? r.getNext() : null;
            for (a._nextNode = null, r = a, s = 0; i > s; s++)r = r.getNext();
            if (n += i, r !== h && (r._nextNode = h, h && (h._previousNode = r)), h)for (r = h, n++; r && n < this.array.length + this.firstIndex;)r._nextNode ? r.index += o : r.index = n, r = r.getNext(), n++
        }, s.prototype.getPrevious = function () {
            return this.index === this._.firstIndex ? this._.loop ? (this._previousNode = this._.lastNode || new this.constructor({_: this._, index: this._.firstIndex + this._.array.length - 1}), this._previousNode._nextNode = this) : this._previousNode = null : this._previousNode || (this._previousNode = new this.constructor({_: this._, index: this.index - 1}), this._previousNode._nextNode = this), this._previousNode
        }, s.prototype.getNext = function () {
            return this.index === this._.firstIndex + this._.array.length - 1 ? this._.loop ? (this._nextNode = this._.firstNode || new this.constructor({_: this._, index: this._.firstIndex}), this._nextNode._previousNode = this) : this._nextNode = null : this._nextNode || (this._nextNode = new this.constructor({_: this._, index: this.index + 1}), this._nextNode._previousNode = this), this._nextNode
        }, s.prototype.getIndex = function () {
            return this.index
        }, s.prototype.toString = function () {
            return"" + this.index
        }, s.prototype.unshift = function () {
            this._.array.unshift.apply(this._.array, arguments), this._.firstIndex -= arguments.length
        }, s.prototype.push = function () {
            this._.array.push.apply(this._.array, arguments)
        }, s.prototype.splice = function (t, e) {
            var i = Array.prototype.slice.call(arguments, 2);
            this._.array.splice.apply(this._.array, [t - this._.firstIndex, e].concat(i)), this._.reindex(t, e, i.length)
        }, s.prototype.swap = function (t) {
            var e = t.get(), i = this.get();
            this._.setValue(this.index, e), this._.setValue(t.index, i);
            var s = this._previousNode, n = this._nextNode, o = this.index, r = t._previousNode, a = t._nextNode, h = t.index;
            this.index = h, this._previousNode = r === this ? t : r, this._previousNode && (this._previousNode._nextNode = this), this._nextNode = a === this ? t : a, this._nextNode && (this._nextNode._previousNode = this), t.index = o, t._previousNode = s === t ? this : s, t._previousNode && (t._previousNode._nextNode = t), t._nextNode = n === t ? this : n, t._nextNode && (t._nextNode._previousNode = t), this.index === this._.firstIndex ? this._.firstNode = this : this.index === this._.firstIndex + this._.array.length - 1 && (this._.lastNode = this), t.index === this._.firstIndex ? this._.firstNode = t : t.index === this._.firstIndex + this._.array.length - 1 && (this._.lastNode = t)
        }, s.prototype.get = function () {
            return this._.getValue(this.index)
        }, s.prototype.getSize = function () {
            var t = this.get();
            return t ? t.getSize() : null
        }, s.prototype.render = function () {
            var t = this.get();
            return t ? t.render.apply(t, arguments) : null
        }, i.exports = s
    }), i("famous/physics/PhysicsEngine", ["require", "exports", "module", "famous/core/EventHandler"], function (t, e, i) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), t && this.setOptions(t), this._particles = [], this._bodies = [], this._agents = {}, this._forces = [], this._constraints = [], this._buffer = 0, this._timestamp = 17, this._minTimeStep = 1e3 / 120, this._maxTimestep = 17, this._prevTime = x(), this._isSleeping = !1, this._eventHandler = null, this._currAgentId = 0, this._hasBodies = !1
        }

        function n(t) {
            return t.applyForce ? this._forces : t.applyConstraint ? this._constraints : void 0
        }

        function o(t, e, i) {
            return void 0 === e && (e = this.getParticlesAndBodies()), e instanceof Array || (e = [e]), this._agents[this._currAgentId] = {agent: t, targets: e, source: i}, n.call(this, t).push(this._currAgentId), this._currAgentId++
        }

        function r(t) {
            return this._agents[t]
        }

        function a(t) {
            var e = r.call(this, this._forces[t]);
            e.agent.applyForce(e.targets, e.source)
        }

        function h() {
            for (var t = this._forces.length - 1; t > -1; t--)a.call(this, t)
        }

        function u(t, e) {
            var i = this._agents[this._constraints[t]];
            return i.agent.applyConstraint(i.targets, i.source, e)
        }

        function c(t) {
            for (var e = 0; e < this.options.constraintSteps;) {
                for (var i = this._constraints.length - 1; i > -1; i--)u.call(this, i, t);
                e++
            }
        }

        function p(t, e) {
            t.integrateVelocity(e)
        }

        function l(t, e) {
            t.integrateAngularMomentum(e), t.updateAngularVelocity()
        }

        function f(t, e) {
            t.integrateOrientation(e)
        }

        function d(t, e) {
            t.integratePosition(e), t.emit("update", t)
        }

        function _(t) {
            h.call(this, t), this.forEach(p, t), this.forEachBody(l, t), c.call(this, t), this.forEachBody(f, t), this.forEach(d, t)
        }

        function g() {
            var t = 0, e = 0;
            return this.forEach(function (i) {
                e = i.getEnergy(), t += e, e < i.sleepTolerance && i.sleep()
            }), t
        }

        function y() {
            for (var t = 0, e = this._forces.length - 1; e > -1; e--)t += this._forces[e].getEnergy() || 0;
            return t
        }

        function v() {
            for (var t = 0, e = this._constraints.length - 1; e > -1; e--)t += this._constraints[e].getEnergy() || 0;
            return t
        }

        var m = t("famous/core/EventHandler");
        s.DEFAULT_OPTIONS = {constraintSteps: 1, sleepTolerance: 1e-7};
        var x = function () {
            return Date.now
        }();
        s.prototype.setOptions = function (t) {
            for (var e in t)this.options[e] && (this.options[e] = t[e])
        }, s.prototype.addBody = function (t) {
            return t._engine = this, t.isBody ? (this._bodies.push(t), this._hasBodies = !0) : this._particles.push(t), t
        }, s.prototype.removeBody = function (t) {
            var e = t.isBody ? this._bodies : this._particles, i = e.indexOf(t);
            if (i > -1) {
                for (var s = 0; s < Object.keys(this._agents); s++)this.detachFrom(s, t);
                e.splice(i, 1)
            }
            0 === this.getBodies().length && (this._hasBodies = !1)
        }, s.prototype.attach = function (t, e, i) {
            if (t instanceof Array) {
                for (var s = [], n = 0; n < t.length; n++)s[n] = o.call(this, t[n], e, i);
                return s
            }
            return o.call(this, t, e, i)
        }, s.prototype.attachTo = function (t, e) {
            r.call(this, t).targets.push(e)
        }, s.prototype.detach = function (t) {
            var e = this.getAgent(t), i = n.call(this, e), s = i.indexOf(t);
            i.splice(s, 1), delete this._agents[t]
        }, s.prototype.detachFrom = function (t, e) {
            var i = r.call(this, t);
            if (i.source === e)this.detach(t); else {
                var s = i.targets, n = s.indexOf(e);
                n > -1 && s.splice(n, 1)
            }
        }, s.prototype.detachAll = function () {
            this._agents = {}, this._forces = [], this._constraints = [], this._currAgentId = 0
        }, s.prototype.getAgent = function (t) {
            return r.call(this, t).agent
        }, s.prototype.getParticles = function () {
            return this._particles
        }, s.prototype.getBodies = function () {
            return this._bodies
        }, s.prototype.getParticlesAndBodies = function () {
            return this.getParticles().concat(this.getBodies())
        }, s.prototype.forEachParticle = function (t, e) {
            for (var i = this.getParticles(), s = 0, n = i.length; n > s; s++)t.call(this, i[s], e)
        }, s.prototype.forEachBody = function (t, e) {
            if (this._hasBodies)for (var i = this.getBodies(), s = 0, n = i.length; n > s; s++)t.call(this, i[s], e)
        }, s.prototype.forEach = function (t, e) {
            this.forEachParticle(t, e), this.forEachBody(t, e)
        }, s.prototype.getEnergy = function () {
            return g.call(this) + y.call(this) + v.call(this)
        }, s.prototype.step = function () {
            var t = x(), e = t - this._prevTime;
            this._prevTime = t, e < this._minTimeStep || (e > this._maxTimeStep && (e = this._maxTimestep), _.call(this, this._timestamp))
        }, s.prototype.isSleeping = function () {
            return this._isSleeping
        }, s.prototype.sleep = function () {
            this.emit("end", this), this._isSleeping = !0
        }, s.prototype.wake = function () {
            this._prevTime = x(), this.emit("start", this), this._isSleeping = !1
        }, s.prototype.emit = function (t, e) {
            null !== this._eventHandler && this._eventHandler.emit(t, e)
        }, s.prototype.on = function (t, e) {
            null === this._eventHandler && (this._eventHandler = new m), this._eventHandler.on(t, e)
        }, i.exports = s
    }), i("famous/physics/integrators/SymplecticEuler", ["require", "exports", "module", "famous/core/OptionsManager"], function (t, e, i) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this._optionsManager = new n(this.options), t && this.setOptions(t)
        }

        var n = t("famous/core/OptionsManager");
        s.DEFAULT_OPTIONS = {velocityCap: void 0, angularVelocityCap: void 0}, s.prototype.setOptions = function (t) {
            this._optionsManager.patch(t)
        }, s.prototype.getOptions = function () {
            return this._optionsManager.value()
        }, s.prototype.integrateVelocity = function (t, e) {
            var i = t.velocity, s = t.inverseMass, n = t.force;
            n.isZero() || (i.add(n.mult(e * s)).put(i), n.clear())
        }, s.prototype.integratePosition = function (t, e) {
            var i = t.position, s = t.velocity;
            this.options.velocityCap && s.cap(this.options.velocityCap).put(s), i.add(s.mult(e)).put(i)
        }, s.prototype.integrateAngularMomentum = function (t, e) {
            var i = t.angularMomentum, s = t.torque;
            s.isZero() || (this.options.angularVelocityCap && s.cap(this.options.angularVelocityCap).put(s), i.add(s.mult(e)).put(i), s.clear())
        }, s.prototype.integrateOrientation = function (t, e) {
            var i = t.orientation, s = t.angularVelocity;
            s.isZero() || i.add(i.multiply(s).scalarMultiply(.5 * e)).put(i)
        }, i.exports = s
    }), i("famous/physics/bodies/Particle", ["require", "exports", "module", "famous/math/Vector", "famous/core/Transform", "famous/core/EventHandler", "../integrators/SymplecticEuler"], function (t, e, i) {
        function s(t) {
            t = t || {}, this.position = new o, this.velocity = new o, this.force = new o;
            var e = s.DEFAULT_OPTIONS;
            this.setPosition(t.position || e.position), this.setVelocity(t.velocity || e.velocity), this.force.set(t.force || [0, 0, 0]), this.mass = void 0 !== t.mass ? t.mass : e.mass, this.axis = void 0 !== t.axis ? t.axis : e.axis, this.inverseMass = 1 / this.mass, this._isSleeping = !1, this._engine = null, this._eventOutput = null, this._positionGetter = null, this.transform = r.identity.slice(), this._spec = {transform: this.transform, target: null}
        }

        function n() {
            this._eventOutput = new a, this._eventOutput.bindThis(this), a.setOutputHandler(this, this._eventOutput)
        }

        var o = t("famous/math/Vector"), r = t("famous/core/Transform"), a = t("famous/core/EventHandler"), h = t("../integrators/SymplecticEuler");
        s.DEFAULT_OPTIONS = {position: [0, 0, 0], velocity: [0, 0, 0], mass: 1, axis: void 0}, s.SLEEP_TOLERANCE = 1e-7, s.AXES = {X: 0, Y: 1, Z: 2}, s.INTEGRATOR = new h;
        var u = {start: "start", update: "update", end: "end"}, c = function () {
            return Date.now
        }();
        s.prototype.sleep = function () {
            this._isSleeping || (this.emit(u.end, this), this._isSleeping = !0)
        }, s.prototype.wake = function () {
            this._isSleeping && (this.emit(u.start, this), this._isSleeping = !1, this._prevTime = c())
        }, s.prototype.isBody = !1, s.prototype.setPosition = function (t) {
            this.position.set(t)
        }, s.prototype.setPosition1D = function (t) {
            this.position.x = t
        }, s.prototype.getPosition = function () {
            return this._positionGetter instanceof Function && this.setPosition(this._positionGetter()), this._engine.step(), this.position.get()
        }, s.prototype.getPosition1D = function () {
            return this._engine.step(), this.position.x
        }, s.prototype.positionFrom = function (t) {
            this._positionGetter = t
        }, s.prototype.setVelocity = function (t) {
            this.velocity.set(t), this.wake()
        }, s.prototype.setVelocity1D = function (t) {
            this.velocity.x = t, this.wake()
        }, s.prototype.getVelocity = function () {
            return this.velocity.get()
        }, s.prototype.getVelocity1D = function () {
            return this.velocity.x
        }, s.prototype.setMass = function (t) {
            this.mass = t, this.inverseMass = 1 / t
        }, s.prototype.getMass = function () {
            return this.mass
        }, s.prototype.reset = function (t, e) {
            this.setPosition(t || [0, 0, 0]), this.setVelocity(e || [0, 0, 0])
        }, s.prototype.applyForce = function (t) {
            t.isZero() || (this.force.add(t).put(this.force), this.wake())
        }, s.prototype.applyImpulse = function (t) {
            if (!t.isZero()) {
                var e = this.velocity;
                e.add(t.mult(this.inverseMass)).put(e)
            }
        }, s.prototype.integrateVelocity = function (t) {
            s.INTEGRATOR.integrateVelocity(this, t)
        }, s.prototype.integratePosition = function (t) {
            s.INTEGRATOR.integratePosition(this, t)
        }, s.prototype._integrate = function (t) {
            this.integrateVelocity(t), this.integratePosition(t)
        }, s.prototype.getEnergy = function () {
            return.5 * this.mass * this.velocity.normSquared()
        }, s.prototype.getTransform = function () {
            this._engine.step();
            var t = this.position, e = this.axis, i = this.transform;
            return void 0 !== e && (e & ~s.AXES.X && (t.x = 0), e & ~s.AXES.Y && (t.y = 0), e & ~s.AXES.Z && (t.z = 0)), i[12] = t.x, i[13] = t.y, i[14] = t.z, i
        }, s.prototype.modify = function (t) {
            var e = this._spec;
            return e.transform = this.getTransform(), e.target = t, e
        }, s.prototype.emit = function (t, e) {
            this._eventOutput && this._eventOutput.emit(t, e)
        }, s.prototype.on = function () {
            return n.call(this), this.on.apply(this, arguments)
        }, s.prototype.removeListener = function () {
            return n.call(this), this.removeListener.apply(this, arguments)
        }, s.prototype.pipe = function () {
            return n.call(this), this.pipe.apply(this, arguments)
        }, s.prototype.unpipe = function () {
            return n.call(this), this.unpipe.apply(this, arguments)
        }, i.exports = s
    }), i("famous/physics/forces/Force", ["require", "exports", "module", "famous/math/Vector", "famous/core/EventHandler"], function (t, e, i) {
        function s(t) {
            this.force = new o(t), this._energy = 0, this._eventOutput = null
        }

        function n() {
            this._eventOutput = new r, this._eventOutput.bindThis(this), r.setOutputHandler(this, this._eventOutput)
        }

        var o = t("famous/math/Vector"), r = t("famous/core/EventHandler");
        s.prototype.setOptions = function (t) {
            for (var e in t)this.options[e] = t[e]
        }, s.prototype.applyForce = function (t) {
            t.applyForce(this.force)
        }, s.prototype.getEnergy = function () {
            return this._energy
        }, s.prototype.setEnergy = function (t) {
            this._energy = t
        }, s.prototype.on = function () {
            return n.call(this), this.on.apply(this, arguments)
        }, s.prototype.addListener = function () {
            return n.call(this), this.addListener.apply(this, arguments)
        }, s.prototype.pipe = function () {
            return n.call(this), this.pipe.apply(this, arguments)
        }, s.prototype.removeListener = function () {
            return this.removeListener.apply(this, arguments)
        }, s.prototype.unpipe = function () {
            return this.unpipe.apply(this, arguments)
        }, i.exports = s
    }), i("famous/physics/forces/Drag", ["require", "exports", "module", "./Force"], function (t, e, i) {
        function s(t) {
            this.options = Object.create(this.constructor.DEFAULT_OPTIONS), t && this.setOptions(t), n.call(this)
        }

        var n = t("./Force");
        s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.FORCE_FUNCTIONS = {LINEAR: function (t) {
            return t
        }, QUADRATIC: function (t) {
            return t.mult(t.norm())
        }}, s.DEFAULT_OPTIONS = {strength: .01, forceFunction: s.FORCE_FUNCTIONS.LINEAR}, s.prototype.applyForce = function (t) {
            for (var e = this.options.strength, i = this.options.forceFunction, s = this.force, n = 0; n < t.length; n++) {
                var o = t[n];
                i(o.velocity).mult(-e).put(s), o.applyForce(s)
            }
        }, s.prototype.setOptions = function (t) {
            for (var e in t)this.options[e] = t[e]
        }, i.exports = s
    }), i("famous/physics/forces/Spring", ["require", "exports", "module", "./Force", "famous/math/Vector"], function (t, e, i) {
        function s(t) {
            this.options = Object.create(this.constructor.DEFAULT_OPTIONS), t && this.setOptions(t), this.disp = new c(0, 0, 0), h.call(this), u.call(this)
        }

        function n(t) {
            this.forceFunction = t
        }

        function o() {
            var t = this.options;
            t.stiffness = Math.pow(2 * p / t.period, 2)
        }

        function r() {
            var t = this.options;
            t.damping = 4 * p * t.dampingRatio / t.period
        }

        function a(t, e) {
            return.5 * t * e * e
        }

        function h() {
            n.call(this, this.options.forceFunction), o.call(this), r.call(this)
        }

        var u = t("./Force"), c = t("famous/math/Vector");
        s.prototype = Object.create(u.prototype), s.prototype.constructor = s;
        var p = Math.PI;
        s.FORCE_FUNCTIONS = {FENE: function (t, e) {
            var i = .99 * e, s = Math.max(Math.min(t, i), -i);
            return s / (1 - s * s / (e * e))
        }, HOOK: function (t) {
            return t
        }}, s.DEFAULT_OPTIONS = {period: 300, dampingRatio: .1, length: 0, maxLength: 1 / 0, anchor: void 0, forceFunction: s.FORCE_FUNCTIONS.HOOK}, s.prototype.setOptions = function (t) {
            void 0 !== t.anchor && (t.anchor.position instanceof c && (this.options.anchor = t.anchor.position), t.anchor instanceof c && (this.options.anchor = t.anchor), t.anchor instanceof Array && (this.options.anchor = new c(t.anchor))), void 0 !== t.period && (this.options.period = t.period), void 0 !== t.dampingRatio && (this.options.dampingRatio = t.dampingRatio), void 0 !== t.length && (this.options.length = t.length), void 0 !== t.forceFunction && (this.options.forceFunction = t.forceFunction), void 0 !== t.maxLength && (this.options.maxLength = t.maxLength), h.call(this)
        }, s.prototype.applyForce = function (t, e) {
            for (var i = this.force, s = this.disp, n = this.options, o = n.stiffness, r = n.damping, h = n.length, u = n.maxLength, c = n.anchor || e.position, p = 0; p < t.length; p++) {
                var l = t[p], f = l.position, d = l.velocity;
                c.sub(f).put(s);
                var _ = s.norm() - h;
                if (0 === _)return;
                var g = l.mass;
                o *= g, r *= g, s.normalize(o * this.forceFunction(_, u)).put(i), r && (e ? i.add(d.sub(e.velocity).mult(-r)).put(i) : i.add(d.mult(-r)).put(i)), l.applyForce(i), e && e.applyForce(i.mult(-1)), this.setEnergy(a(o, _))
            }
        }, s.prototype.getEnergy = function (t) {
            var e = this.options, i = e.length, s = e.anchor, n = e.stiffness, o = s.sub(t.position).norm() - i;
            return.5 * n * o * o
        }, s.prototype.setAnchor = function (t) {
            this.options.anchor || (this.options.anchor = new c), this.options.anchor.set(t)
        }, i.exports = s
    }), i("famous/inputs/TouchTracker", ["require", "exports", "module", "famous/core/EventHandler"], function (t, e, i) {
        function s(t, e, i, s) {
            var n = {};
            for (var o in t)n[o] = t[o];
            return{touch: n, origin: e, timestamp: Date.now(), count: s, history: i}
        }

        function n(t) {
            for (var e = 0; e < t.changedTouches.length; e++) {
                var i = t.changedTouches[e], n = s(i, t.origin, void 0, t.touches.length);
                this.eventOutput.emit("trackstart", n), this.selective || this.touchHistory[i.identifier] || this.track(n)
            }
        }

        function o(t) {
            for (var e = 0; e < t.changedTouches.length; e++) {
                var i = t.changedTouches[e], n = this.touchHistory[i.identifier];
                if (n) {
                    var o = s(i, t.origin, n, t.touches.length);
                    this.touchHistory[i.identifier].push(o), this.eventOutput.emit("trackmove", o)
                }
            }
        }

        function r(t) {
            for (var e = 0; e < t.changedTouches.length; e++) {
                var i = t.changedTouches[e], n = this.touchHistory[i.identifier];
                if (n) {
                    var o = s(i, t.origin, n, t.touches.length);
                    this.eventOutput.emit("trackend", o), delete this.touchHistory[i.identifier]
                }
            }
        }

        function a() {
            for (var t in this.touchHistory) {
                var e = this.touchHistory[t];
                this.eventOutput.emit("trackend", {touch: e[e.length - 1].touch, timestamp: Date.now(), count: 0, history: e}), delete this.touchHistory[t]
            }
        }

        function h(t) {
            this.selective = t, this.touchHistory = {}, this.eventInput = new u, this.eventOutput = new u, u.setInputHandler(this, this.eventInput), u.setOutputHandler(this, this.eventOutput), this.eventInput.on("touchstart", n.bind(this)), this.eventInput.on("touchmove", o.bind(this)), this.eventInput.on("touchend", r.bind(this)), this.eventInput.on("touchcancel", r.bind(this)), this.eventInput.on("unpipe", a.bind(this))
        }

        var u = t("famous/core/EventHandler");
        h.prototype.track = function (t) {
            this.touchHistory[t.touch.identifier] = [t]
        }, i.exports = h
    }), i("famous/inputs/TouchSync", ["require", "exports", "module", "./TouchTracker", "famous/core/EventHandler"], function (t, e, i) {
        function s(t, e) {
            2 === arguments.length ? (this._legacyPositionGetter = arguments[0], e = arguments[1]) : (this._legacyPositionGetter = null, e = arguments[0]), this.output = new u, this.touchTracker = new h, this.options = {direction: void 0, rails: !1, scale: 1}, this._payload = {delta: null, position: null, velocity: null, clientX: void 0, clientY: void 0, count: 0, touch: void 0}, this.setOptions(e ? e : this.options), u.setOutputHandler(this, this.output), u.setInputHandler(this, this.touchTracker), this.touchTracker.on("trackstart", o.bind(this)), this.touchTracker.on("trackmove", r.bind(this)), this.touchTracker.on("trackend", a.bind(this))
        }

        function n() {
            var t = this._payload;
            t.position = null, t.velocity = null, t.clientX = void 0, t.clientY = void 0, t.count = void 0, t.touch = void 0
        }

        function o(t) {
            n.call(this);
            var e = this._payload;
            e.count = t.count, e.touch = t.identifier, this.output.emit("start", e)
        }

        function r(t) {
            var e = t.history, i = e[e.length - 2].timestamp, n = e[e.length - 1].timestamp, o = e[e.length - 2].touch, r = e[e.length - 1].touch, a = r.pageX - o.pageX, h = r.pageY - o.pageY;
            this.options.rails && (Math.abs(a) > Math.abs(h) ? h = 0 : a = 0);
            var u, c, p, l, f = Math.max(n - i, 8), d = a / f, _ = h / f, g = this.options.scale;
            this.options.direction === s.DIRECTION_X ? (u = this._legacyPositionGetter ? this._legacyPositionGetter() : 0, l = g * a, c = u + l, p = g * d) : this.options.direction === s.DIRECTION_Y ? (u = this._legacyPositionGetter ? this._legacyPositionGetter() : 0, l = g * h, c = u + l, p = g * _) : (u = this._legacyPositionGetter ? this._legacyPositionGetter() : [0, 0], l = [g * a, g * h], c = [u[0] + l[0], u[1] + l[1]], p = [g * d, g * _]);
            var y = this._payload;
            y.delta = l, y.position = c, y.velocity = p, y.clientX = t.touch.clientX, y.clientY = t.touch.clientY, y.count = t.count, y.touch = t.touch.identifier, this.output.emit("update", y)
        }

        function a(t) {
            var e = void 0 !== this.options.direction ? 0 : [0, 0], i = t.history, n = t.count;
            if (i.length > 1) {
                var o = i[i.length - 2].timestamp, r = i[i.length - 1].timestamp, a = i[i.length - 2].touch, h = i[i.length - 1].touch, u = h.pageX - a.pageX, c = h.pageY - a.pageY;
                this.options.rails && (Math.abs(u) > Math.abs(c) ? c = 0 : u = 0);
                var p = Math.max(r - o, 1), l = u / p, f = c / p, d = this.options.scale;
                e = this.options.direction === s.DIRECTION_X ? d * l : this.options.direction === s.DIRECTION_Y ? d * f : [d * l, d * f]
            }
            var _ = this._payload;
            _.velocity = e, _.clientX = t.clientX, _.clientY = t.clientY, _.count = n, _.touch = t.touch.identifier, this.output.emit("end", _)
        }

        var h = t("./TouchTracker"), u = t("famous/core/EventHandler");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale)
        }, s.prototype.getOptions = function () {
            return this.options
        }, i.exports = s
    }), i("famous/inputs/ScrollSync", ["require", "exports", "module", "famous/core/EventHandler", "famous/core/Engine"], function (t, e, i) {
        function s(t, e) {
            2 === arguments.length ? (this._legacyPositionGetter = arguments[0], e = arguments[1]) : (this._legacyPositionGetter = null, e = arguments[0]), this.options = {direction: void 0, minimumEndSpeed: 1 / 0, rails: !1, scale: 1, stallTime: 50, lineHeight: 40}, this.setOptions(e ? e : this.options), this._payload = {delta: null, position: null, velocity: null, slip: !0}, this.input = new r, this.output = new r, r.setInputHandler(this, this.input), r.setOutputHandler(this, this.output), this._prevTime = void 0, this._prevVel = void 0, this.input.on("mousewheel", o.bind(this)), this.input.on("wheel", o.bind(this)), this.inProgress = !1, this._loopBound = !1
        }

        function n() {
            var t = Date.now();
            if (this.inProgress && t - this._prevTime > this.options.stallTime) {
                var e = void 0 === this.options.direction ? this._legacyPositionGetter ? this._legacyPositionGetter : [0, 0] : this._legacyPositionGetter ? this._legacyPositionGetter : 0;
                this.inProgress = !1;
                var i = 0;
                Math.abs(this._prevVel) >= this.options.minimumEndSpeed && (i = this._prevVel);
                var s = this._payload;
                s.position = e, s.velocity = i, s.slip = !0, this.output.emit("end", s)
            }
        }

        function o(t) {
            t.preventDefault(), this.inProgress || (this.inProgress = !0, this.output.emit("start", {slip: !0}), this._loopBound || (a.on("prerender", n.bind(this)), this._loopBound = !0));
            var e = this._prevTime || Date.now(), i = void 0 !== t.wheelDeltaX ? t.wheelDeltaX : -t.deltaX, o = void 0 !== t.wheelDeltaY ? t.wheelDeltaY : -t.deltaY;
            1 === t.deltaMode && (i *= this.options.lineHeight, o *= this.options.lineHeight);
            var r = Date.now();
            this.options.rails && (Math.abs(i) > Math.abs(o) ? o = 0 : i = 0);
            var h, u, c, p, l = Math.max(r - e, 8), f = i / l, d = o / l, _ = this.options.scale;
            this.options.direction === s.DIRECTION_X ? (h = this._legacyPositionGetter ? this._legacyPositionGetter() : 0, p = _ * i, u = h + p, c = _ * f) : this.options.direction === s.DIRECTION_Y ? (h = this._legacyPositionGetter ? this._legacyPositionGetter() : 0, p = _ * o, u = h + p, c = _ * d) : (h = this._legacyPositionGetter ? this._legacyPositionGetter() : [0, 0], p = [_ * i, _ * o], u = [h[0] + p[0], h[1] + p[1]], c = [_ * f, _ * d]);
            var g = this._payload;
            g.delta = p, g.position = u, g.velocity = c, g.slip = !0, this.output.emit("update", g), this._prevTime = r, this._prevVel = c
        }

        var r = t("famous/core/EventHandler"), a = t("famous/core/Engine");
        s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.prototype.getOptions = function () {
            return this.options
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.direction && (this.options.direction = t.direction), void 0 !== t.minimumEndSpeed && (this.options.minimumEndSpeed = t.minimumEndSpeed), void 0 !== t.rails && (this.options.rails = t.rails), void 0 !== t.scale && (this.options.scale = t.scale), void 0 !== t.stallTime && (this.options.stallTime = t.stallTime)
        }, i.exports = s
    }), i("famous/inputs/GenericSync", ["require", "exports", "module", "famous/core/EventHandler", "./TouchSync", "./ScrollSync"], function (t, e, i) {
        function s(t, e) {
            2 === arguments.length ? this._legacyPositionGetter = t : (this._legacyPositionGetter = null, e = t), this.eventInput = new o, this.eventOutput = new o, o.setInputHandler(this, this.eventInput), o.setOutputHandler(this, this.eventOutput), this._handlers = void 0, e ? (this.options = e, e.syncClasses || (this.options.syncClasses = h), this.setOptions(e)) : this.options = {syncClasses: h}, this._handlers && n.call(this)
        }

        function n() {
            var t = null, e = 0;
            if (this._handlers)for (e = 0; e < this._handlers.length; e++)this.eventInput.unpipe(this._handlers[e]), this._handlers[e].unpipe(this.eventOutput);
            for (this._handlers = [], e = 0; e < this.options.syncClasses.length; e++)t = this.options.syncClasses[e], this._handlers[e] = new t(this._legacyPositionGetter, this._handlerOptions), this.eventInput.pipe(this._handlers[e]), this._handlers[e].pipe(this.eventOutput)
        }

        var o = t("famous/core/EventHandler"), r = t("./TouchSync"), a = t("./ScrollSync"), h = [r, a];
        s.register = function (t) {
            h.indexOf(t) < 0 && h.push(t)
        }, s.DIRECTION_X = 0, s.DIRECTION_Y = 1, s.DIRECTION_Z = 2, s.prototype.setOptions = function (t) {
            if (this._handlerOptions = t, t.syncClasses && (this.options.syncClasses = t.syncClasses, n.call(this)), this._handlers)for (var e = 0; e < this._handlers.length; e++)this._handlers[e].setOptions(this._handlerOptions)
        }, i.exports = s
    }), i("famous/core/Group", ["require", "exports", "module", "./Context", "./Transform", "./Surface"], function (t, e, i) {
        function s(t) {
            r.call(this, t), this._shouldRecalculateSize = !1, this._container = document.createDocumentFragment(), this.context = new n(this._container), this.setContent(this._container), this._groupSize = [void 0, void 0]
        }

        var n = t("./Context"), o = t("./Transform"), r = t("./Surface");
        s.SIZE_ZERO = [0, 0], s.prototype = Object.create(r.prototype), s.prototype.elementType = "div", s.prototype.elementClass = "famous-group", s.prototype.add = function () {
            return this.context.add.apply(this.context, arguments)
        }, s.prototype.render = function () {
            return r.prototype.render.call(this)
        }, s.prototype.deploy = function (t) {
            this.context.migrate(t)
        }, s.prototype.recall = function () {
            this._container = document.createDocumentFragment(), this.context.migrate(this._container)
        }, s.prototype.commit = function (t) {
            var e = t.transform, i = t.origin, n = t.opacity, a = t.size, h = r.prototype.commit.call(this, {allocator: t.allocator, transform: o.thenMove(e, [-i[0] * a[0], -i[1] * a[1], 0]), opacity: n, origin: i, size: s.SIZE_ZERO});
            return(a[0] !== this._groupSize[0] || a[1] !== this._groupSize[1]) && (this._groupSize[0] = a[0], this._groupSize[1] = a[1], this.context.setSize(a)), this.context.update({transform: o.translate(-i[0] * a[0], -i[1] * a[1], 0), origin: i, size: a}), h
        }, i.exports = s
    }), i("famous/views/Scroller", ["require", "exports", "module", "famous/core/Entity", "famous/core/Group", "famous/core/OptionsManager", "famous/core/Transform", "famous/utilities/Utility", "famous/core/ViewSequence", "famous/core/EventHandler"], function (t, e, i) {
        function s(t) {
            this.options = Object.create(this.constructor.DEFAULT_OPTIONS), this._optionsManager = new p(this.options), t && this._optionsManager.setOptions(t), this._node = null, this._position = 0, this._positionOffset = 0, this._positionGetter = null, this._outputFunction = null, this._masterOutputFunction = null, this.outputFrom(), this._onEdge = 0, this.group = new c, this.group.add({render: h.bind(this)}), this._entityId = u.register(this), this._size = [void 0, void 0], this._contextSize = [void 0, void 0], this._eventInput = new _, this._eventOutput = new _, _.setInputHandler(this, this._eventInput), _.setOutputHandler(this, this._eventOutput)
        }

        function n(t) {
            t || (t = this._contextSize);
            var e = this.options.direction === f.Direction.X ? 0 : 1;
            return void 0 === t[e] ? this._contextSize[e] : t[e]
        }

        function o(t, e, i) {
            var s = t.getSize ? t.getSize() : this._contextSize, o = this._outputFunction(e);
            return i.push({transform: o, target: t.render()}), n.call(this, s)
        }

        function r() {
            return this.options.clipSize ? this.options.clipSize : n.call(this, this._contextSize)
        }

        function a() {
            for (var t = n.call(this, this._node.getSize()), e = this._node && this._node.getNext ? this._node.getNext() : null; e && this._position + this._positionOffset >= t;)this._positionOffset -= t, this._node = e, t = n.call(this, this._node.getSize()), e = this._node && this._node.getNext ? this._node.getNext() : null;
            for (var i = this._node && this._node.getPrevious ? this._node.getPrevious() : null; i && this._position + this._positionOffset < 0;) {
                var s = n.call(this, i.getSize());
                this._positionOffset += s, this._node = i, i = this._node && this._node.getPrevious ? this._node.getPrevious() : null
            }
        }

        function h() {
            var t = null, e = this._position, i = [];
            this._onEdge = 0;
            for (var s = -this._positionOffset, h = r.call(this), u = this._node; u && s - e < h + this.options.margin;)s += o.call(this, u, s, i), u = u.getNext ? u.getNext() : null;
            var c = this._node, p = n.call(this, c.getSize());
            if (h > s) {
                for (; c && h > p;)c = c.getPrevious(), c && (p += n.call(this, c.getSize()));
                for (c = this._node; c && h > p;)c = c.getNext(), c && (p += n.call(this, c.getSize()))
            }
            var l = void 0 !== p && h > p ? p : h;
            for (!u && l >= s - e ? (this._onEdge = 1, this._eventOutput.emit("edgeHit", {position: s - l})) : !this._node.getPrevious() && 0 >= e && (this._onEdge = -1, this._eventOutput.emit("edgeHit", {position: 0})), u = this._node && this._node.getPrevious ? this._node.getPrevious() : null, s = -this._positionOffset, u && (t = u.getSize ? u.getSize() : this._contextSize, s -= n.call(this, t)); u && s - e > -(r.call(this) + this.options.margin);)o.call(this, u, s, i), u = u.getPrevious ? u.getPrevious() : null, u && (t = u.getSize ? u.getSize() : this._contextSize, s -= n.call(this, t));
            return a.call(this), i
        }

        var u = t("famous/core/Entity"), c = t("famous/core/Group"), p = t("famous/core/OptionsManager"), l = t("famous/core/Transform"), f = t("famous/utilities/Utility"), d = t("famous/core/ViewSequence"), _ = t("famous/core/EventHandler");
        s.DEFAULT_OPTIONS = {direction: f.Direction.Y, margin: 0, clipSize: void 0}, s.prototype.setOptions = function (t) {
            return this._optionsManager.setOptions(t)
        }, s.prototype.onEdge = function () {
            return this._onEdge
        }, s.prototype.outputFrom = function (t, e) {
            t || (t = function (t) {
                return this.options.direction === f.Direction.X ? l.translate(t, 0) : l.translate(0, t)
            }.bind(this), e || (e = t)), this._outputFunction = t, this._masterOutputFunction = e ? e : function (e) {
                return l.inverse(t(-e))
            }
        }, s.prototype.positionFrom = function (t) {
            t instanceof Function ? this._positionGetter = t : t && t.get ? this._positionGetter = t.get.bind(t) : (this._positionGetter = null, this._position = t), this._positionGetter && (this._position = this._positionGetter.call(this))
        }, s.prototype.sequenceFrom = function (t) {
            t instanceof Array && (t = new d({array: t})), this._node = t, this._positionOffset = 0
        }, s.prototype.getSize = function (t) {
            return t ? this._contextSize : this._size
        }, s.prototype.render = function () {
            return this._node ? (this._positionGetter && (this._position = this._positionGetter.call(this)), this._entityId) : null
        }, s.prototype.commit = function (t) {
            var e = t.transform, i = t.opacity, s = t.origin, n = t.size;
            this.options.clipSize || n[0] === this._contextSize[0] && n[1] === this._contextSize[1] || (this._onEdge = 0, this._contextSize = n, this.options.direction === f.Direction.X ? (this._size[0] = r.call(this), this._size[1] = void 0) : (this._size[0] = void 0, this._size[1] = r.call(this)));
            var o = this._masterOutputFunction(-this._position);
            return{transform: l.multiply(e, o), opacity: i, origin: s, target: this.group.render()}
        }, i.exports = s
    }), i("famous/views/Scrollview", ["require", "exports", "module", "famous/utilities/Utility", "famous/physics/PhysicsEngine", "famous/physics/bodies/Particle", "famous/physics/forces/Drag", "famous/physics/forces/Spring", "famous/inputs/GenericSync", "famous/core/EventHandler", "famous/core/OptionsManager", "famous/core/ViewSequence", "famous/views/Scroller"], function (t, e, i) {
        function s(t) {
            this.options = Object.create(s.DEFAULT_OPTIONS), this._optionsManager = new E(this.options), this._node = null, this._physicsEngine = new y, this._particle = new v, this._physicsEngine.addBody(this._particle), this.spring = new x({anchor: [0, 0, 0]}), this.drag = new m({forceFunction: m.FORCE_FUNCTIONS.QUADRATIC}), this.friction = new m({forceFunction: m.FORCE_FUNCTIONS.LINEAR}), this.sync = new O({direction: this.options.direction}), this._eventInput = new S, this._eventOutput = new S, this._eventInput.pipe(this.sync), this.sync.pipe(this._eventInput), S.setInputHandler(this, this._eventInput), S.setOutputHandler(this, this._eventOutput), this._touchCount = 0, this._springState = 0, this._onEdge = 0, this._pageSpringPosition = 0, this._edgeSpringPosition = 0, this._touchVelocity = void 0, this._earlyEnd = !1, this._needsPaginationCheck = !1, this._scroller = new w, this._scroller.positionFrom(this.getPosition.bind(this)), t && this.setOptions(t), a.call(this)
        }

        function n(t) {
            this._touchCount = t.count, void 0 === t.count && (this._touchCount = 1), u.call(this), this.setVelocity(0), this._touchVelocity = 0, this._earlyEnd = !1
        }

        function o(t) {
            var e = -t.velocity, i = -t.delta;
            this._onEdge && t.slip && (0 > e && this._onEdge < 0 || e > 0 && this._onEdge > 0 ? this._earlyEnd || (r.call(this, t), this._earlyEnd = !0) : this._earlyEnd && Math.abs(e) > Math.abs(this.getVelocity()) && n.call(this, t)), this._earlyEnd || (this._touchVelocity = e, t.slip ? this.setVelocity(e) : this.setPosition(this.getPosition() + i))
        }

        function r(t) {
            if (this._touchCount = t.count || 0, !this._touchCount) {
                u.call(this), this._onEdge && f.call(this, this._edgeSpringPosition, P.EDGE), h.call(this);
                var e = -t.velocity, i = this.options.speedLimit;
                t.slip && (i *= this.options.edgeGrip), -i > e ? e = -i : e > i && (e = i), this.setVelocity(e), this._touchVelocity = void 0, this._needsPaginationCheck = !0
            }
        }

        function a() {
            this._eventInput.bindThis(this), this._eventInput.on("start", n), this._eventInput.on("update", o), this._eventInput.on("end", r), this._scroller.on("edgeHit", function (t) {
                this._edgeSpringPosition = t.position
            }.bind(this))
        }

        function h() {
            this._springState ? this._physicsEngine.attach([this.spring], this._particle) : this._physicsEngine.attach([this.drag, this.friction], this._particle)
        }

        function u() {
            this._springState = P.NONE, this._physicsEngine.detachAll()
        }

        function c(t) {
            var e = this.options.direction, i = (t.getSize() || this._scroller.getSize())[e];
            return i || (i = this._scroller.getSize()[e]), i
        }

        function p(t) {
            !this._onEdge && t ? (this.sync.setOptions({scale: this.options.edgeGrip}), this._touchCount || this._springState === P.EDGE || f.call(this, this._edgeSpringPosition, P.EDGE)) : this._onEdge && !t && (this.sync.setOptions({scale: 1}), this._springState && Math.abs(this.getVelocity()) < .001 && (u.call(this), h.call(this))), this._onEdge = t
        }

        function l() {
            if (this._needsPaginationCheck && !this._touchCount && this._springState !== P.EDGE) {
                var t = this.getVelocity();
                if (!(Math.abs(t) >= this.options.pageStopSpeed)) {
                    var e = this.getPosition(), i = Math.abs(t) > this.options.pageSwitchSpeed, s = c.call(this, this._node), n = e > .5 * s, o = t > 0;
                    n && !i || i && o ? this.goToNextPage() : f.call(this, 0, P.PAGE), this._needsPaginationCheck = !1
                }
            }
        }

        function f(t, e) {
            var i;
            e === P.EDGE ? (this._edgeSpringPosition = t, i = {anchor: [this._edgeSpringPosition, 0, 0], period: this.options.edgePeriod, dampingRatio: this.options.edgeDamp}) : e === P.PAGE && (this._pageSpringPosition = t, i = {anchor: [this._pageSpringPosition, 0, 0], period: this.options.pagePeriod, dampingRatio: this.options.pageDamp}), this.spring.setOptions(i), e && !this._springState && (u.call(this), this._springState = e, h.call(this)), this._springState = e
        }

        function d() {
            for (var t = this.getPosition(), e = c.call(this, this._node), i = this._node.getNext(); t > e + b && i;)_.call(this, -e), t -= e, this._scroller.sequenceFrom(i), this._node = i, i = this._node.getNext(), e = c.call(this, this._node);
            for (var s, n = this._node.getPrevious(); -b > t && n;)s = c.call(this, n), this._scroller.sequenceFrom(n), this._node = n, _.call(this, s), t += s, n = this._node.getPrevious()
        }

        function _(t) {
            this._edgeSpringPosition += t, this._pageSpringPosition += t, this.setPosition(this.getPosition() + t), this._springState === P.EDGE ? this.spring.setOptions({anchor: [this._edgeSpringPosition, 0, 0]}) : this._springState === P.PAGE && this.spring.setOptions({anchor: [this._pageSpringPosition, 0, 0]})
        }

        var g = t("famous/utilities/Utility"), y = t("famous/physics/PhysicsEngine"), v = t("famous/physics/bodies/Particle"), m = t("famous/physics/forces/Drag"), x = t("famous/physics/forces/Spring"), O = t("famous/inputs/GenericSync"), S = t("famous/core/EventHandler"), E = t("famous/core/OptionsManager"), T = t("famous/core/ViewSequence"), w = t("famous/views/Scroller"), b = .5;
        s.DEFAULT_OPTIONS = {direction: g.Direction.Y, rails: !0, friction: .001, drag: 1e-4, edgeGrip: .5, edgePeriod: 300, edgeDamp: 1, paginated: !1, pagePeriod: 500, pageDamp: .8, pageStopSpeed: 10, pageSwitchSpeed: .5, speedLimit: 10};
        var P = {NONE: 0, EDGE: 1, PAGE: 2};
        s.prototype.outputFrom = function () {
            return this._scroller.outputFrom.apply(this._scroller, arguments)
        }, s.prototype.getPosition = function () {
            return this._particle.getPosition1D()
        }, s.prototype.setPosition = function (t) {
            this._particle.setPosition1D(t)
        }, s.prototype.getVelocity = function () {
            return this._touchCount ? this._touchVelocity : this._particle.getVelocity1D()
        }, s.prototype.setVelocity = function (t) {
            this._particle.setVelocity1D(t)
        }, s.prototype.setOptions = function (t) {
            void 0 !== t.direction && ("x" === t.direction ? t.direction = g.Direction.X : "y" === t.direction && (t.direction = g.Direction.Y)), this._scroller.setOptions(t), this._optionsManager.setOptions(t), void 0 === this.options.margin && (this.options.margin = 1e3), this.drag.setOptions({strength: this.options.drag}), this.friction.setOptions({strength: this.options.friction}), this.spring.setOptions({period: this.options.edgePeriod, dampingRatio: this.options.edgeDamp}), this.sync.setOptions({rails: this.options.rails, direction: this.options.direction === g.Direction.X ? O.DIRECTION_X : O.DIRECTION_Y})
        }, s.prototype.goToPreviousPage = function () {
            if (!this._node)return null;
            var t = this._node.getPrevious();
            if (t) {
                var e = this.getPosition(), i = c.call(this, t);
                this._scroller.sequenceFrom(t), this._node = t;
                var s = b > e ? -i : 0;
                f.call(this, s, P.PAGE), _.call(this, i)
            }
            return this._eventOutput.emit("pageChange", {direction: -1}), t
        }, s.prototype.goToNextPage = function () {
            if (!this._node)return null;
            var t = this._node.getNext();
            if (t) {
                var e = this.getPosition(), i = c.call(this, this._node), s = c.call(this, t);
                this._scroller.sequenceFrom(t), this._node = t;
                var n = e > i - b ? i + s : i;
                f.call(this, n, P.PAGE), _.call(this, -i)
            }
            return this._eventOutput.emit("pageChange", {direction: 1}), t
        }, s.prototype.sequenceFrom = function (t) {
            return t instanceof Array && (t = new T({array: t})), this._node = t, this._scroller.sequenceFrom(t)
        }, s.prototype.getSize = function () {
            return this._scroller.getSize.apply(this._scroller, arguments)
        }, s.prototype.render = function () {
            return this._node ? (d.call(this), p.call(this, this._scroller.onEdge()), this.options.paginated && l.call(this), this._scroller.render()) : null
        }, i.exports = s
    }), i("famous/inputs/FastClick", ["require", "exports", "module"], function () {
        if (window.CustomEvent) {
            var t = 300, e = {};
            window.addEventListener("touchstart", function (t) {
                for (var i = Date.now(), s = 0; s < t.changedTouches.length; s++) {
                    var n = t.changedTouches[s];
                    e[n.identifier] = i
                }
            }), window.addEventListener("touchmove", function (t) {
                for (var i = 0; i < t.changedTouches.length; i++) {
                    var s = t.changedTouches[i];
                    delete e[s.identifier]
                }
            }), window.addEventListener("touchend", function (i) {
                for (var s = Date.now(), n = 0; n < i.changedTouches.length; n++) {
                    var o = i.changedTouches[n], r = e[o.identifier];
                    if (r && t > s - r) {
                        i.preventDefault();
                        var a = new window.CustomEvent("click", {bubbles: !0, details: o});
                        i.target.dispatchEvent(a)
                    }
                    delete e[o.identifier]
                }
            })
        }
    }), i("main", ["require", "exports", "module", "famous/core/Engine", "famous/core/Entity", "famous/core/EventHandler", "famous/math/Matrix", "famous/core/Modifier", "famous/core/RenderNode", "famous/core/Surface", "famous/core/Transform", "famous/core/View", "famous/core/ViewSequence", "famous/views/Scrollview", "famous/inputs/FastClick", "famous/transitions/Transitionable", "famous/utilities/Utility"], function (t) {
        Famous.Engine = t("famous/core/Engine"), Famous.Entity = t("famous/core/Entity"), Famous.EventHandler = t("famous/core/EventHandler"), Famous.Matrix = t("famous/math/Matrix"), Famous.Modifier = t("famous/core/Modifier"), Famous.RenderNode = t("famous/core/RenderNode"), Famous.Surface = t("famous/core/Surface"), Famous.Transform = t("famous/core/Transform"), Famous.View = t("famous/core/View"), Famous.ViewSequence = t("famous/core/ViewSequence"), Famous.Scrollview = t("famous/views/Scrollview"), Famous.FastClick = t("famous/inputs/FastClick"), Famous.Transitionable = t("famous/transitions/Transitionable"), Famous.Utility = t("famous/utilities/Utility"), _.each(Famous._onLoad, function (e) {
            e(t)
        })
    }), UI.body.rendered = function() { e(["main"]) }
}();