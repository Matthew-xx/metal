webpackJsonp([10], {
    1: function (t, e, i) {
        "use strict";
        var n = i(0),
            o = function (t) {
                return t && t.__esModule ? t : {
                    default:
                        t
                }
            }(n); (0, o.
                default)(function () {
                    ({
                        isIpadBox:
                            !0,
                        init: function () {
                            this.eventClick(),
                                this.skip(),
                                this.eventClickToggleNavigation(),
                                this.padMenu(),
                                this.registerJump(),
                                this.loginJump()
                        },
                        registerJump: function () {
                            (0, o.
                                default)("#registerHeaderBtn,#padRegisterHeaderBtn").on("click",
                                    function () {
                                        vkTrack.click("parent_pc_signup_click_head"),
                                            window.location.href = "/signup"
                                    })
                        },
                        loginJump: function () {
                            (0, o.
                                default)("#loginHeaderBtn,#padLoginHeaderBtn").on("click",
                                    function () {
                                        vkTrack.click("parent_pc_login_click_head"),
                                            window.location.href = "/login"
                                    })
                        },
                        padMenu: function () {
                            (0, o.
                                default)("#systemMenu").click(function () {
                                    (0, o.
                                        default)("#systemMenu .menu-box").toggle()
                                })
                        },
                        eventClick: function () {
                            var t = !0; (0, o.
                                default)("#navBtn").on("click",
                                    function () {
                                        t ? ((0, o.
                                            default)("body,html").css("overflow", "hidden"), (0, o.
                                                default)("body").addClass("active"), (0, o.
                                                    default)("#navLiderLeft").addClass("sliderbarShow"), t = !1) : ((0, o.
                                                        default)("body,html").css("overflow", "auto"), (0, o.
                                                            default)("body").removeClass("active"), (0, o.
                                                                default)("#navLiderLeft").removeClass("sliderbarShow"), t = !0)
                                    })
                        },
                        getRequest: function () {
                            var t = window.location.search,
                                e = new Object;
                            if (- 1 != t.indexOf("?")) for (var i = t.substr(1), n = i.split("&"), o = 0; o < n.length; o++) e[n[o].split("=")[0]] = decodeURI(n[o].split("=")[1]);
                            return e
                        },
                        skip: function () {
                            var t = {};
                            if (window.location.search.substr(1).split("&").forEach(function (e) {
                                var i = e.split("=");
                                t[i[0]] = i[1]
                            }), t.hasOwnProperty("channel_id")) {
                                var e = t.channel_id; (0, o.
                                    default)(".header-info-pc a, .header-info-ipad a").each(function () {
                                        var t = (0, o.
                                            default)(this).attr("href"); (0, o.
                                                default)(this).attr("href", t + "?channel_id=" + e)
                                    })
                            }
                        },
                        eventClickToggleNavigation: function () {
                            var t = window.location.pathname;
                            if (t.length <= 1) return void (0, o.
                                default)(".sy").addClass("active");
                            switch (t = t.split("/")[2]) {
                                case "home":
                                    (0, o.
                                        default)(".sy").addClass("active");
                                    break;
                                case "teachers":
                                    (0, o.
                                        default)(".bmsz").addClass("active");
                                    break;
                                case "advantage":
                                    (0, o.
                                        default)(".kctx").addClass("active"),
                                        (0, o.
                                            default)(".menu-box a").css("font-weight", "400"),
                                        (0, o.
                                            default)(".kctxys").css({
                                                color:
                                                    "#F85415",
                                                "font-weight": "600"
                                            });
                                    break;
                                case "mc":
                                    (0, o.
                                        default)(".kctx").addClass("active"),
                                        (0, o.
                                            default)(".menu-box a").css("font-weight", "400"),
                                        (0, o.
                                            default)(".zxk").css({
                                                color:
                                                    "#F85415",
                                                "font-weight": "600"
                                            });
                                    break;
                                case "vae":
                                    (0, o.
                                        default)(".kctx").addClass("active"),
                                        (0, o.
                                            default)(".menu-box a").css("font-weight", "400"),
                                        (0, o.
                                            default)(".qxjjkc").css({
                                                color:
                                                    "#F85415",
                                                "font-weight": "600"
                                            });
                                    break;
                                case "classlist":
                                    (0, o.
                                        default)(".gkk").addClass("active");
                                    break;
                                case "step":
                                    (0, o.
                                        default)(".rhsk").addClass("active");
                                    break;
                                case "download":
                                    (0, o.
                                        default)(".xzzx").addClass("active");
                                    break;
                                case "aboutus":
                                case "news":
                                    (0, o.
                                        default)(".zxdt").addClass("active")
                            }
                        }
                    }).init()
                })
    },
    2: function (t, e, i) {
        "use strict";
        var n = i(0); (0,
            function (t) {
                return t && t.__esModule ? t : {
                    default:
                        t
                }
            }(n).
                default)(function () {
                    ({
                        init:
                            function () { }
                    }).init()
                })
    },
    3: function (t, e, i) {
        "use strict";
        var n = i(0),
            o = function (t) {
                return t && t.__esModule ? t : {
                    default:
                        t
                }
            }(n); (0, o.
                default)(function () {
                    ({
                        init:
                            function () {
                                this.eventChange(),
                                    this.eventClickVktrackFooterSecond()
                            },
                        eventChange: function () {
                            (0, o.
                                default)("#goToWeibo").click(function () {
                                    window.location.href = "http://weibo.com/p/1006065212940492"
                                })
                        },
                        eventClickVktrackFooterSecond: function () {
                            (0, o.
                                default)("#onlineZxFooterBtn").click(function () {
                                    vkTrack.click("parent_pc_footer_consult_box")
                                })
                        }
                    }).init()
                })
    },
    4: function (t, e, i) {
        "use strict";
        var n = i(0),
            o = function (t) {
                return t && t.__esModule ? t : {
                    default:
                        t
                }
            }(n); (0, o.
                default)(function () {
                    var t = !1; ({
                        init: function () {
                            this.scrollScreenHeight(),
                                this.httpClickRegisterAuditions(),
                                this.goBackTop(),
                                this.eventClickToggleRightFix(),
                                this.eventClickCloseBottom()
                        },
                        goBackTop: function () {
                            (0, o.
                                default)("#goBackBtn").click(function () {
                                    return (0, o.
                                        default)("html,body").animate({
                                            scrollTop:
                                                0
                                        },
                                            1e3),
                                        !1
                                })
                        },
                        scrollScreenHeight: function () {
                            (0, o.
                                default)(window).scroll(function () {
                                    (0, o.
                                        default)(window).scrollTop() >= .5 * (0, o.
                                            default)(window).height() && !t ? ((0, o.
                                                default)("#sectionBottom").addClass("active"), (0, o.
                                                    default)("#sectionBottom").removeClass("hideB"), (0, o.
                                                        default)("#goBackBtn").show()) :
                                    ((0, o.
                                        default)("#sectionBottom").removeClass("active"), (0, o.
                                            default)("#sectionBottom").addClass("hideB"), (0, o.
                                                default)("#goBackBtn").hide()),
                                    (0, o.
                                        default)(window).scrollTop() >= .5 * (0, o.
                                            default)(window).height() ? (0, o.
                                                default)("#goBackBtn").show() :
                                        (0, o.
                                            default)("#goBackBtn").hide(),
                                    (0, o.
                                        default)(window).scrollTop() + (0, o.
                                            default)(window).height() >= (0, o.
                                                default)(document).height() - (0, o.
                                                    default)(".footer").height() && ((0, o.
                                                        default)("#sectionBottom").removeClass("active"), (0, o.
                                                            default)("#sectionBottom").addClass("hideB"), (0, o.
                                                                default)("#goBackBtn").show())
                                })
                        },
                        compile: function (t) {
                            for (var e = String.fromCharCode(t.charCodeAt(0) + t.length), i = 1; i < t.length; i++) e += String.fromCharCode(t.charCodeAt(i) + t.charCodeAt(i - 1));
                            return escape(e)
                        },
                        IsPcPage: function () {
                            var t = 0,
                                e = navigator.userAgent,
                                i = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"],
                                n = !0;
                            for (this.isPcBox = !0, t = 0; t < i.length; t++) if (e.indexOf(i[t]) > 0) {
                                n = !1,
                                    this.isPcBox = !1;
                                break
                            }
                            return n
                        },
                        httpClickRegisterAuditions: function () {
                            var t = /^1[3-9][0-9]{9}$/,
                                e = this; (0, o.
                                    default)("#fixClickBottomBtn").click(function () {
                                        var i = (0, o.
                                            default)(".registerAuditions").val();
                                        i && t.test(i) ? (i = e.compile(i), vkTrack.click("parent_pc_bottom_signup_click_box"), location.href = "/signup?&mobile=" + i) : (0, o.
                                            default)("#bottomErrorTips").show()
                                    }),
                                    (0, o.
                                        default)("#fixRightBtn").click(function () {
                                            vkTrack.click("parent_pc_consult_fix_click_th")
                                        })
                        },
                        eventClickToggleRightFix: function () {
                            (0, o.
                                default)("#qrcodeTouchBtn").on("touchend",
                                    function () {
                                        (0, o.
                                            default)("#erweima").toggle()
                                    }),
                            (0, o.
                                default)("#telTouchBtn").on("touchend",
                                    function () {
                                        (0, o.
                                            default)("#teltips").toggle()
                                    })
                        },
                        eventClickCloseBottom: function () {
                            (0, o.
                                default)("#closeBtnBottom").click(function () {
                                    t = !0,
                                        vkTrack.click("parent_pc_bottom_signup_click_close"),
                                        (0, o.
                                            default)("#sectionBottom").removeClass("active"),
                                        (0, o.
                                            default)("#sectionBottom").addClass("hideB")
                                })
                        }
                    }).init()
                })
    },
    80: function (t, e, i) {
        "use strict";
        i(81),
            i(1),
            i(3),
            i(2),
            i(4);
        var n = i(0),
            o = function (t) {
                return t && t.__esModule ? t : {
                    default:
                        t
                }
            }(n); (0, o.
                default)(function () {
                    ({
                        init:
                            function () {
                                this.eventClickVktrackMc()
                            },
                        eventClickVktrackMc: function () {
                            (0, o.
                                default)("#freeVipkidMcClassBtn").click(function () {
                                    vkTrack.click("parent_pc_signup_click_body_box_mc_f"),
                                        window.location.href = "/signup"
                                }),
                            (0, o.
                                default)("#freeTeachingMethodBtn").click(function () {
                                    vkTrack.click("parent_pc_signup_click_body_box_mc_s"),
                                        window.location.href = "/signup"
                                })
                        }
                    }).init()
                })
    },
    81: function (t, e) { }
},
    [80]);