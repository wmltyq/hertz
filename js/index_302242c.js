!
function(a) {
    function e(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return a[i].call(n.exports, n, n.exports, e),
        n.loaded = !0,
        n.exports
    }
    var t = {};
    return e.m = a,
    e.c = t,
    e.p = "//res.wx.qq.com/a/wx_fed/weixin_portal/res",
    e(0)
} ({
    0 : function(a, e, t) {
        a.exports = t(32) + t(210) + t(38) + t(217)
    },
    19 : function(a, e) {},
    28 : function(a, e) {},
    32 : function(a, e) {
        if (!document.location.search || /[&?]t=weixin$/.test(document.location.search)) {
            var t = document.getElementById("nav_home");
            t && (t.className = "curr")
        }
    },
    33 : function(a, e, t) {
        a.exports = t.p + "/static/img/dNEBuK6.png"
    },
    36 : function(a, e) {},
    38 : function(a, e) {},
    47 : function(a, e) {
        a.exports = {
            reportIDKey: function(a, e, t) {
                if (! (a < 0 || a > 127)) {
                    e = e || 1,
                    t = t || "64692";
                    var i = new Image;
                    i.src = document.location.protocol + "//support.weixin.qq.com/cgi-bin/mmsupport-bin/reportforweb?rid=" + t + "&rkey=" + a + "&rvalue=" + e
                }
            }
        }
    },
    196 : function(a, e) {},
    199 : function(a, e) {},
    203 : function(a, e, t) {
        a.exports = t.p + "/static/img/3sPNXyP.gif"
    },
    204 : function(a, e, t) {
        a.exports = t.p + "/static/img/2gK_8My.png"
    },
    205 : function(a, e, t) {
        a.exports = t.p + "/static/img/2vAOmr0.png"
    },
    206 : function(a, e, t) {
        a.exports = t.p + "/static/img/31caDYg.png"
    },
    207 : function(a, e) {},
    210 : function(a, e) { !
        function() {
            function a() {
                i(g,
                function(a) {
                    l(a, 0),
                    a.style.zIndex = 1
                }),
                l(g[0], 100),
                g[0].style.zIndex = 2,
                o.innerHTML = new Array(g.length + 1).join("<li><a>.</a></li>"),
                r = o.getElementsByTagName("li"),
                r[0].className = "current_pic",
                i(r,
                function(a, t) {
                    a.onclick = function() {
                        e(t)
                    }
                }),
                setInterval(function() {
                    u || (e(h), h++, h > g.length - 1 && (h = 0))
                },
                3e3),
                c.onmouseover = function() {
                    u = !0
                },
                c.onmouseout = function() {
                    u = !1
                },
                f.onclick = function() {
                    e(h - 1)
                },
                m.onclick = function() {
                    e(h + 1)
                }
            }
            function e(a) {
                a < 0 && (a = g.length - 1),
                a > g.length - 1 && (a = 0),
                h = a,
                a != d && (s(g[d]), n(g[a])),
                t(a),
                d = a
            }
            function t(a) {
                i(r,
                function(a) {
                    a.className = ""
                }),
                r[a].className = "current_pic"
            }
            function i(a, e, t) {
                if (a.forEach) a.forEach(e, t);
                else for (var i = 0,
                n = a.length; i < n; i++) e.call(t, a[i], i, a)
            }
            function n(a) {
                l(a, 0),
                a.style.zIndex = 2;
                for (var e = 0; e < 20; e++) !
                function() {
                    var t = 5 * e;
                    setTimeout(function() {
                        l(a, t)
                    },
                    25 * e)
                } (e)
            }
            function s(a) {
                a.style.zIndex = 1;
                for (var e = 0; e <= 20; e++) !
                function() {
                    var t = 100 - 5 * e;
                    setTimeout(function() {
                        l(a, t)
                    },
                    25 * e)
                } (e)
            }
            function l(a, e) {
                a.filters ? a.style.filter = "alpha(opacity=" + e + ")": a.style.opacity = e / 100
            }
            var r, c = document.getElementById("img_intro"),
            p = document.getElementById("circleList"),
            o = document.getElementById("currentPic"),
            f = document.getElementById("leftMove"),
            m = document.getElementById("rightMove"),
            h = 0,
            d = 0,
            g = (p.offsetWidth, p.getElementsByTagName("li")),
            u = !1;
            a()
        } ()
    },
    211 : function(a, e) {},
    214 : function(a, e) {},
    217 : function(a, e, t) {
        var i = t(47);
        i.reportIDKey(2)
    }
});