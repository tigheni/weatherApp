(() => {
    'use strict';
    var n = {
            208: (n, e, t) => {
                t.d(e, { A: () => a });
                var A = t(354),
                    o = t.n(A),
                    r = t(314),
                    i = t.n(r)()(o());
                i.push([
                    n.id,
                    '@import url(https://fonts.googleapis.com/css2?family=Kavoon&display=swap);',
                ]),
                    i.push([
                        n.id,
                        "/* The switch - the box around the slider */\n.switch {\n    font-size: 15px;\n    position: relative;\n    display: inline-block;\n    width: 5em;\n    height: 2.25em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* The slider */\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #e7eff9;\n    outline: 1px solid #f3f8fe;\n    box-shadow:\n        0 4px 5px #f3f8fe inset,\n        0 4px 5px #c8d5e6;\n    transition: 0.4s;\n    border-radius: 30px;\n}\n\n.slider:before {\n    position: absolute;\n    content: 'off';\n    font-size: 0.85em;\n    color: #d2d6d8;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 2em;\n    min-width: 2em;\n    border-radius: 20px;\n    left: 0.35em;\n    bottom: 0.3em;\n    background-color: transparent;\n    outline: 2px solid #d2d6d8;\n    transition: 0.4s;\n}\n\n.switch input:checked + .slider:before {\n    content: 'on';\n    background-color: #6ce961;\n    color: white;\n    transform: translateX(3.1em);\n}\n/* END */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-family: 'Kavoon', cursive;\n    font-size: 1.2em;\n    background-color: #c8d5e6;\n    color: #3a3a3a;\n    height: 100vh;\n    width: 100vw;\n}\n.lst_section {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1.2em;\n    padding: 0.5em 1em;\n    gap: 15em;\n}\n.lst_section > div {\n    padding: 10px;\n    flex: 1;\n}\nheader {\n    font-size: 1.4rem;\n    text-align: center;\n    margin: 0.5em 0;\n}\n\n.search_bar {\n    outline: none;\n    border: none;\n    padding: 0.7rem;\n    width: 22em;\n    font-family: 'Kavoon', cursive;\n    border-radius: 20px;\n}\n.search {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.temp_toggle {\n    display: flex;\n    justify-content: center;\n    gap: 0.25em;\n    font-size: 1.2em;\n    align-items: center;\n}\n.weather_card {\n    padding: 1em;\n    margin: 0.5rem auto;\n    border-radius: 20px;\n    max-width: fit-content;\n    background-color: #f3f8fe;\n    box-shadow:\n        0 4px 5px #f3f8fe inset,\n        0 4px 5px #c8d5e6;\n}\n.temp_weather {\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5em;\n}\n.wind_humidity {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2em;\n}\n.time {\n    text-align: center;\n    margin: 10px 0 0px;\n}\n",
                        '',
                        {
                            version: 3,
                            sources: ['webpack://./src/style.css'],
                            names: [],
                            mappings:
                                'AACA,2CAA2C;AAC3C;IACI,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,UAAU;IACV,cAAc;AAClB;;AAEA,+BAA+B;AAC/B;IACI,UAAU;IACV,QAAQ;IACR,SAAS;AACb;;AAEA,eAAe;AACf;IACI,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,yBAAyB;IACzB,0BAA0B;IAC1B;;yBAEqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,YAAY;IACZ,4BAA4B;AAChC;AACA,QAAQ;AACR;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,aAAa;IACb,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,aAAa;IACb,OAAO;AACX;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,yBAAyB;IACzB;;yBAEqB;AACzB;AACA;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;AACA;IACI,kBAAkB;IAClB,kBAAkB;AACtB',
                            sourcesContent: [
                                "@import url('https://fonts.googleapis.com/css2?family=Kavoon&display=swap');\n/* The switch - the box around the slider */\n.switch {\n    font-size: 15px;\n    position: relative;\n    display: inline-block;\n    width: 5em;\n    height: 2.25em;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* The slider */\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #e7eff9;\n    outline: 1px solid #f3f8fe;\n    box-shadow:\n        0 4px 5px #f3f8fe inset,\n        0 4px 5px #c8d5e6;\n    transition: 0.4s;\n    border-radius: 30px;\n}\n\n.slider:before {\n    position: absolute;\n    content: 'off';\n    font-size: 0.85em;\n    color: #d2d6d8;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 2em;\n    min-width: 2em;\n    border-radius: 20px;\n    left: 0.35em;\n    bottom: 0.3em;\n    background-color: transparent;\n    outline: 2px solid #d2d6d8;\n    transition: 0.4s;\n}\n\n.switch input:checked + .slider:before {\n    content: 'on';\n    background-color: #6ce961;\n    color: white;\n    transform: translateX(3.1em);\n}\n/* END */\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-family: 'Kavoon', cursive;\n    font-size: 1.2em;\n    background-color: #c8d5e6;\n    color: #3a3a3a;\n    height: 100vh;\n    width: 100vw;\n}\n.lst_section {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1.2em;\n    padding: 0.5em 1em;\n    gap: 15em;\n}\n.lst_section > div {\n    padding: 10px;\n    flex: 1;\n}\nheader {\n    font-size: 1.4rem;\n    text-align: center;\n    margin: 0.5em 0;\n}\n\n.search_bar {\n    outline: none;\n    border: none;\n    padding: 0.7rem;\n    width: 22em;\n    font-family: 'Kavoon', cursive;\n    border-radius: 20px;\n}\n.search {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.temp_toggle {\n    display: flex;\n    justify-content: center;\n    gap: 0.25em;\n    font-size: 1.2em;\n    align-items: center;\n}\n.weather_card {\n    padding: 1em;\n    margin: 0.5rem auto;\n    border-radius: 20px;\n    max-width: fit-content;\n    background-color: #f3f8fe;\n    box-shadow:\n        0 4px 5px #f3f8fe inset,\n        0 4px 5px #c8d5e6;\n}\n.temp_weather {\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5em;\n}\n.wind_humidity {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2em;\n}\n.time {\n    text-align: center;\n    margin: 10px 0 0px;\n}\n",
                            ],
                            sourceRoot: '',
                        },
                    ]);
                const a = i;
            },
            314: (n) => {
                n.exports = function (n) {
                    var e = [];
                    return (
                        (e.toString = function () {
                            return this.map(function (e) {
                                var t = '',
                                    A = void 0 !== e[5];
                                return (
                                    e[4] &&
                                        (t += '@supports ('.concat(
                                            e[4],
                                            ') {',
                                        )),
                                    e[2] && (t += '@media '.concat(e[2], ' {')),
                                    A &&
                                        (t += '@layer'.concat(
                                            e[5].length > 0
                                                ? ' '.concat(e[5])
                                                : '',
                                            ' {',
                                        )),
                                    (t += n(e)),
                                    A && (t += '}'),
                                    e[2] && (t += '}'),
                                    e[4] && (t += '}'),
                                    t
                                );
                            }).join('');
                        }),
                        (e.i = function (n, t, A, o, r) {
                            'string' == typeof n && (n = [[null, n, void 0]]);
                            var i = {};
                            if (A)
                                for (var a = 0; a < this.length; a++) {
                                    var s = this[a][0];
                                    null != s && (i[s] = !0);
                                }
                            for (var c = 0; c < n.length; c++) {
                                var d = [].concat(n[c]);
                                (A && i[d[0]]) ||
                                    (void 0 !== r &&
                                        (void 0 === d[5] ||
                                            (d[1] = '@layer'
                                                .concat(
                                                    d[5].length > 0
                                                        ? ' '.concat(d[5])
                                                        : '',
                                                    ' {',
                                                )
                                                .concat(d[1], '}')),
                                        (d[5] = r)),
                                    t &&
                                        (d[2]
                                            ? ((d[1] = '@media '
                                                  .concat(d[2], ' {')
                                                  .concat(d[1], '}')),
                                              (d[2] = t))
                                            : (d[2] = t)),
                                    o &&
                                        (d[4]
                                            ? ((d[1] = '@supports ('
                                                  .concat(d[4], ') {')
                                                  .concat(d[1], '}')),
                                              (d[4] = o))
                                            : (d[4] = ''.concat(o))),
                                    e.push(d));
                            }
                        }),
                        e
                    );
                };
            },
            354: (n) => {
                n.exports = function (n) {
                    var e = n[1],
                        t = n[3];
                    if (!t) return e;
                    if ('function' == typeof btoa) {
                        var A = btoa(
                                unescape(encodeURIComponent(JSON.stringify(t))),
                            ),
                            o =
                                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                    A,
                                ),
                            r = '/*# '.concat(o, ' */');
                        return [e].concat([r]).join('\n');
                    }
                    return [e].join('\n');
                };
            },
            72: (n) => {
                var e = [];
                function t(n) {
                    for (var t = -1, A = 0; A < e.length; A++)
                        if (e[A].identifier === n) {
                            t = A;
                            break;
                        }
                    return t;
                }
                function A(n, A) {
                    for (var r = {}, i = [], a = 0; a < n.length; a++) {
                        var s = n[a],
                            c = A.base ? s[0] + A.base : s[0],
                            d = r[c] || 0,
                            l = ''.concat(c, ' ').concat(d);
                        r[c] = d + 1;
                        var p = t(l),
                            f = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3],
                                supports: s[4],
                                layer: s[5],
                            };
                        if (-1 !== p) e[p].references++, e[p].updater(f);
                        else {
                            var u = o(f, A);
                            (A.byIndex = a),
                                e.splice(a, 0, {
                                    identifier: l,
                                    updater: u,
                                    references: 1,
                                });
                        }
                        i.push(l);
                    }
                    return i;
                }
                function o(n, e) {
                    var t = e.domAPI(e);
                    return (
                        t.update(n),
                        function (e) {
                            if (e) {
                                if (
                                    e.css === n.css &&
                                    e.media === n.media &&
                                    e.sourceMap === n.sourceMap &&
                                    e.supports === n.supports &&
                                    e.layer === n.layer
                                )
                                    return;
                                t.update((n = e));
                            } else t.remove();
                        }
                    );
                }
                n.exports = function (n, o) {
                    var r = A((n = n || []), (o = o || {}));
                    return function (n) {
                        n = n || [];
                        for (var i = 0; i < r.length; i++) {
                            var a = t(r[i]);
                            e[a].references--;
                        }
                        for (var s = A(n, o), c = 0; c < r.length; c++) {
                            var d = t(r[c]);
                            0 === e[d].references &&
                                (e[d].updater(), e.splice(d, 1));
                        }
                        r = s;
                    };
                };
            },
            659: (n) => {
                var e = {};
                n.exports = function (n, t) {
                    var A = (function (n) {
                        if (void 0 === e[n]) {
                            var t = document.querySelector(n);
                            if (
                                window.HTMLIFrameElement &&
                                t instanceof window.HTMLIFrameElement
                            )
                                try {
                                    t = t.contentDocument.head;
                                } catch (n) {
                                    t = null;
                                }
                            e[n] = t;
                        }
                        return e[n];
                    })(n);
                    if (!A)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                        );
                    A.appendChild(t);
                };
            },
            540: (n) => {
                n.exports = function (n) {
                    var e = document.createElement('style');
                    return (
                        n.setAttributes(e, n.attributes),
                        n.insert(e, n.options),
                        e
                    );
                };
            },
            56: (n, e, t) => {
                n.exports = function (n) {
                    var e = t.nc;
                    e && n.setAttribute('nonce', e);
                };
            },
            825: (n) => {
                n.exports = function (n) {
                    if ('undefined' == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        };
                    var e = n.insertStyleElement(n);
                    return {
                        update: function (t) {
                            !(function (n, e, t) {
                                var A = '';
                                t.supports &&
                                    (A += '@supports ('.concat(
                                        t.supports,
                                        ') {',
                                    )),
                                    t.media &&
                                        (A += '@media '.concat(t.media, ' {'));
                                var o = void 0 !== t.layer;
                                o &&
                                    (A += '@layer'.concat(
                                        t.layer.length > 0
                                            ? ' '.concat(t.layer)
                                            : '',
                                        ' {',
                                    )),
                                    (A += t.css),
                                    o && (A += '}'),
                                    t.media && (A += '}'),
                                    t.supports && (A += '}');
                                var r = t.sourceMap;
                                r &&
                                    'undefined' != typeof btoa &&
                                    (A +=
                                        '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(r),
                                                    ),
                                                ),
                                            ),
                                            ' */',
                                        )),
                                    e.styleTagTransform(A, n, e.options);
                            })(e, n, t);
                        },
                        remove: function () {
                            !(function (n) {
                                if (null === n.parentNode) return !1;
                                n.parentNode.removeChild(n);
                            })(e);
                        },
                    };
                };
            },
            113: (n) => {
                n.exports = function (n, e) {
                    if (e.styleSheet) e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n));
                    }
                };
            },
        },
        e = {};
    function t(A) {
        var o = e[A];
        if (void 0 !== o) return o.exports;
        var r = (e[A] = { id: A, exports: {} });
        return n[A](r, r.exports, t), r.exports;
    }
    (t.n = (n) => {
        var e = n && n.__esModule ? () => n.default : () => n;
        return t.d(e, { a: e }), e;
    }),
        (t.d = (n, e) => {
            for (var A in e)
                t.o(e, A) &&
                    !t.o(n, A) &&
                    Object.defineProperty(n, A, { enumerable: !0, get: e[A] });
        }),
        (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
        (t.nc = void 0);
    var A = t(72),
        o = t.n(A),
        r = t(825),
        i = t.n(r),
        a = t(659),
        s = t.n(a),
        c = t(56),
        d = t.n(c),
        l = t(540),
        p = t.n(l),
        f = t(113),
        u = t.n(f),
        m = t(208),
        B = {};
    (B.styleTagTransform = u()),
        (B.setAttributes = d()),
        (B.insert = s().bind(null, 'head')),
        (B.domAPI = i()),
        (B.insertStyleElement = p()),
        o()(m.A, B),
        m.A && m.A.locals && m.A.locals;
})();
//# sourceMappingURL=main.js.map
