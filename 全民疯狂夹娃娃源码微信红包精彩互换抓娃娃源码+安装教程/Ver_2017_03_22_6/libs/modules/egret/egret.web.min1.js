function __extends(t, e) {
    function i() {
        this.constructor = t
    }
    for (var r in e)
        e.hasOwnProperty(r) && (t[r] = e[r]);
    i.prototype = e.prototype,
    t.prototype = new i
}
var __reflect = this && this.__reflect || function(t, e, i) {
    t.__class__ = e,
    i ? i.push(e) : i = [e],
    t.__types__ = t.__types__ ? i.concat(t.__types__) : i
}
, __extends = this && this.__extends || function(t, e) {
    function i() {
        this.constructor = t
    }
    for (var r in e)
        e.hasOwnProperty(r) && (t[r] = e[r]);
    t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
    new i)
}
, __define = this.__define || function(t, e, i, r) {
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        get: i,
        set: r
    })
}
, egret;
!function(t) {
    t.$hashCount = 1;
    var e = function() {
        function e() {
            this.$hashCode = t.$hashCount++
        }
        return Object.defineProperty(e.prototype, "hashCode", {
            get: function() {
                return this.$hashCode
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }();
    t.HashObject = e,
    __reflect(e.prototype, "egret.HashObject", ["egret.IHashObject"])
}(egret || (egret = {}));
var egret;
!function(t) {
    function e() {
        return ""
    }
    function i(t) {
        throw new Error("#" + t)
    }
    function r() {}
    function n() {}
    t.getString = e,
    t.$error = i,
    t.$warn = r,
    t.$markCannotUse = n
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = []
      , i = function(i) {
        function r(t, e, r, n) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0);
            var o = i.call(this) || this;
            return o.x = t,
            o.y = e,
            o.width = r,
            o.height = n,
            o
        }
        return __extends(r, i),
        r.release = function(t) {
            t && e.push(t)
        }
        ,
        r.create = function() {
            var t = e.pop();
            return t || (t = new r),
            t
        }
        ,
        Object.defineProperty(r.prototype, "right", {
            get: function() {
                return this.x + this.width
            },
            set: function(t) {
                this.width = t - this.x
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "bottom", {
            get: function() {
                return this.y + this.height
            },
            set: function(t) {
                this.height = t - this.y
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "left", {
            get: function() {
                return this.x
            },
            set: function(t) {
                this.width += this.x - t,
                this.x = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "top", {
            get: function() {
                return this.y
            },
            set: function(t) {
                this.height += this.y - t,
                this.y = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "topLeft", {
            get: function() {
                return new t.Point(this.left,this.top)
            },
            set: function(t) {
                this.top = t.y,
                this.left = t.x
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "bottomRight", {
            get: function() {
                return new t.Point(this.right,this.bottom)
            },
            set: function(t) {
                this.bottom = t.y,
                this.right = t.x
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.copyFrom = function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.width = t.width,
            this.height = t.height,
            this
        }
        ,
        r.prototype.setTo = function(t, e, i, r) {
            return this.x = t,
            this.y = e,
            this.width = i,
            this.height = r,
            this
        }
        ,
        r.prototype.contains = function(t, e) {
            return this.x <= t && this.x + this.width >= t && this.y <= e && this.y + this.height >= e
        }
        ,
        r.prototype.intersection = function(t) {
            return this.clone().$intersectInPlace(t)
        }
        ,
        r.prototype.inflate = function(t, e) {
            this.x -= t,
            this.width += 2 * t,
            this.y -= e,
            this.height += 2 * e
        }
        ,
        r.prototype.$intersectInPlace = function(t) {
            var e = this.x
              , i = this.y
              , r = t.x
              , n = t.y
              , o = Math.max(e, r)
              , s = Math.min(e + this.width, r + t.width);
            if (s >= o) {
                var a = Math.max(i, n)
                  , h = Math.min(i + this.height, n + t.height);
                if (h >= a)
                    return this.setTo(o, a, s - o, h - a),
                    this
            }
            return this.setEmpty(),
            this
        }
        ,
        r.prototype.intersects = function(t) {
            return Math.max(this.x, t.x) <= Math.min(this.right, t.right) && Math.max(this.y, t.y) <= Math.min(this.bottom, t.bottom)
        }
        ,
        r.prototype.isEmpty = function() {
            return this.width <= 0 || this.height <= 0
        }
        ,
        r.prototype.setEmpty = function() {
            this.x = 0,
            this.y = 0,
            this.width = 0,
            this.height = 0
        }
        ,
        r.prototype.clone = function() {
            return new r(this.x,this.y,this.width,this.height)
        }
        ,
        r.prototype.containsPoint = function(t) {
            return this.x < t.x && this.x + this.width > t.x && this.y < t.y && this.y + this.height > t.y ? !0 : !1
        }
        ,
        r.prototype.containsRect = function(t) {
            var e = t.x + t.width
              , i = t.y + t.height
              , r = this.x + this.width
              , n = this.y + this.height;
            return t.x >= this.x && t.x < r && t.y >= this.y && t.y < n && e > this.x && r >= e && i > this.y && n >= i
        }
        ,
        r.prototype.equals = function(t) {
            return this === t ? !0 : this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height
        }
        ,
        r.prototype.inflatePoint = function(t) {
            this.inflate(t.x, t.y)
        }
        ,
        r.prototype.offset = function(t, e) {
            this.x += t,
            this.y += e
        }
        ,
        r.prototype.offsetPoint = function(t) {
            this.offset(t.x, t.y)
        }
        ,
        r.prototype.toString = function() {
            return "(x=" + this.x + ", y=" + this.y + ", width=" + this.width + ", height=" + this.height + ")"
        }
        ,
        r.prototype.union = function(t) {
            var e = this.clone();
            if (t.isEmpty())
                return e;
            if (e.isEmpty())
                return e.copyFrom(t),
                e;
            var i = Math.min(e.x, t.x)
              , r = Math.min(e.y, t.y);
            return e.setTo(i, r, Math.max(e.right, t.right) - i, Math.max(e.bottom, t.bottom) - r),
            e
        }
        ,
        r.prototype.$getBaseWidth = function(t) {
            var e = Math.abs(Math.cos(t))
              , i = Math.abs(Math.sin(t));
            return e * this.width + i * this.height
        }
        ,
        r.prototype.$getBaseHeight = function(t) {
            var e = Math.abs(Math.cos(t))
              , i = Math.abs(Math.sin(t));
            return i * this.width + e * this.height
        }
        ,
        r
    }(t.HashObject);
    t.Rectangle = i,
    __reflect(i.prototype, "egret.Rectangle"),
    t.$TempRectangle = new i
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = []
      , i = function(i) {
        function r(t) {
            void 0 === t && (t = null );
            var e = i.call(this) || this;
            return e.$EventDispatcher = {
                0: t ? t : e,
                1: {},
                2: {},
                3: 0
            },
            e
        }
        return __extends(r, i),
        r.prototype.$getEventMap = function(t) {
            var e = this.$EventDispatcher
              , i = t ? e[2] : e[1];
            return i
        }
        ,
        r.prototype.addEventListener = function(t, e, i, r, n) {
            this.$addListener(t, e, i, r, n)
        }
        ,
        r.prototype.once = function(t, e, i, r, n) {
            this.$addListener(t, e, i, r, n, !0)
        }
        ,
        r.prototype.$addListener = function(t, e, i, r, n, o) {
            var s = this.$EventDispatcher
              , a = r ? s[2] : s[1]
              , h = a[t];
            h ? 0 !== s[3] && (a[t] = h = h.concat()) : h = a[t] = [],
            this.$insertEventBin(h, t, e, i, r, n, o)
        }
        ,
        r.prototype.$insertEventBin = function(t, e, i, r, n, o, s) {
            o = 0 | +o;
            for (var a = -1, h = t.length, l = 0; h > l; l++) {
                var u = t[l];
                if (u.listener == i && u.thisObject == r && u.target == this)
                    return !1;
                -1 == a && u.priority < o && (a = l)
            }
            var c = {
                type: e,
                listener: i,
                thisObject: r,
                priority: o,
                target: this,
                useCapture: n,
                dispatchOnce: !!s
            };
            return -1 !== a ? t.splice(a, 0, c) : t.push(c),
            !0
        }
        ,
        r.prototype.removeEventListener = function(t, e, i, r) {
            var n = this.$EventDispatcher
              , o = r ? n[2] : n[1]
              , s = o[t];
            s && (0 !== n[3] && (o[t] = s = s.concat()),
            this.$removeEventBin(s, e, i),
            0 == s.length && (o[t] = null ))
        }
        ,
        r.prototype.$removeEventBin = function(t, e, i) {
            for (var r = t.length, n = 0; r > n; n++) {
                var o = t[n];
                if (o.listener == e && o.thisObject == i && o.target == this)
                    return t.splice(n, 1),
                    !0
            }
            return !1
        }
        ,
        r.prototype.hasEventListener = function(t) {
            var e = this.$EventDispatcher;
            return !(!e[1][t] && !e[2][t])
        }
        ,
        r.prototype.willTrigger = function(t) {
            return this.hasEventListener(t)
        }
        ,
        r.prototype.dispatchEvent = function(t) {
            return t.$currentTarget = this.$EventDispatcher[0],
            t.$setTarget(t.$currentTarget),
            this.$notifyListener(t, !1)
        }
        ,
        r.prototype.$notifyListener = function(t, i) {
            var r = this.$EventDispatcher
              , n = i ? r[2] : r[1]
              , o = n[t.$type];
            if (!o)
                return !0;
            var s = o.length;
            if (0 == s)
                return !0;
            var a = e;
            r[3]++;
            for (var h = 0; s > h; h++) {
                var l = o[h];
                if (l.listener.call(l.thisObject, t),
                l.dispatchOnce && a.push(l),
                t.$isPropagationImmediateStopped)
                    break
            }
            for (r[3]--; a.length; ) {
                var l = a.pop();
                l.target.removeEventListener(l.type, l.listener, l.thisObject, l.useCapture)
            }
            return !t.$isDefaultPrevented
        }
        ,
        r.prototype.dispatchEventWith = function(e, i, r, n) {
            if (i || this.hasEventListener(e)) {
                var o = t.Event.create(t.Event, e, i, n);
                o.data = r;
                var s = this.dispatchEvent(o);
                return t.Event.release(o),
                s
            }
            return !0
        }
        ,
        r
    }(t.HashObject);
    t.EventDispatcher = i,
    __reflect(i.prototype, "egret.EventDispatcher", ["egret.IEventDispatcher"])
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t) {
        return t %= 360,
        t > 180 ? t -= 360 : -180 > t && (t += 360),
        t
    }
    var i = function(i) {
        function r() {
            var e = i.call(this) || this;
            return e.$children = null ,
            e.$parent = null ,
            e.$stage = null ,
            e.$nestLevel = 0,
            e.$visible = !0,
            e.$displayList = null ,
            e.$alpha = 1,
            e.$touchEnabled = r.defaultTouchEnabled,
            e.$scrollRect = null ,
            e.$blendMode = 0,
            e.$maskedObject = null ,
            e.$mask = null ,
            e.$maskRect = null ,
            e.$parentDisplayList = null ,
            e.$renderNode = null ,
            e.$displayFlags = 2032,
            e.$DisplayObject = {
                0: 1,
                1: 1,
                2: 0,
                3: 0,
                4: 0,
                5: "",
                6: new t.Matrix,
                7: new t.Matrix,
                8: new t.Matrix,
                9: new t.Rectangle,
                10: new t.Rectangle,
                11: !1,
                12: 0,
                13: 0,
                14: 0 / 0,
                15: 0 / 0,
                16: 0,
                17: 0,
                18: 0,
                19: null ,
                20: null
            },
            e
        }
        return __extends(r, i),
        r.prototype.$setFlags = function(t) {
            this.$displayFlags |= t
        }
        ,
        r.prototype.$removeFlags = function(t) {
            this.$displayFlags &= ~t
        }
        ,
        r.prototype.$removeFlagsUp = function(t) {
            if (this.$hasAnyFlags(t)) {
                this.$removeFlags(t);
                var e = this.$parent;
                e && e.$removeFlagsUp(t)
            }
        }
        ,
        r.prototype.$hasFlags = function(t) {
            return (this.$displayFlags & t) == t
        }
        ,
        r.prototype.$propagateFlagsUp = function(t) {
            if (!this.$hasFlags(t)) {
                this.$setFlags(t);
                var e = this.$parent;
                e && e.$propagateFlagsUp(t)
            }
        }
        ,
        r.prototype.$propagateFlagsDown = function(t, e) {
            void 0 === e && (e = !1),
            this.$setFlags(t)
        }
        ,
        r.prototype.$hasAnyFlags = function(t) {
            return !!(this.$displayFlags & t)
        }
        ,
        r.prototype.$invalidateMatrix = function() {
            this.$setFlags(8),
            this.$invalidatePosition()
        }
        ,
        r.prototype.$invalidatePosition = function() {
            var t = this;
            t.$invalidateTransform(),
            t.$propagateFlagsDown(48),
            t.$parent && t.$parent.$propagateFlagsUp(4)
        }
        ,
        Object.defineProperty(r.prototype, "name", {
            get: function() {
                return this.$DisplayObject[5]
            },
            set: function(t) {
                this.$DisplayObject[5] = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "parent", {
            get: function() {
                return this.$parent
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$setParent = function(t) {
            return this.$parent == t ? !1 : (this.$parent = t,
            !0)
        }
        ,
        r.prototype.$onAddToStage = function(e, i) {
            this.$stage = e,
            this.$nestLevel = i,
            this.$hasAddToStage = !0,
            t.Sprite.$EVENT_ADD_TO_STAGE_LIST.push(this)
        }
        ,
        r.prototype.$onRemoveFromStage = function() {
            this.$nestLevel = 0,
            t.Sprite.$EVENT_REMOVE_FROM_STAGE_LIST.push(this)
        }
        ,
        Object.defineProperty(r.prototype, "stage", {
            get: function() {
                return this.$stage
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "matrix", {
            get: function() {
                return this.$getMatrix().clone()
            },
            set: function(t) {
                this.$setMatrix(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getMatrix = function() {
            var t = this.$DisplayObject;
            return this.$hasFlags(8) && (t[6].$updateScaleAndRotation(t[0], t[1], t[2], t[3]),
            this.$removeFlags(8)),
            t[6]
        }
        ,
        r.prototype.$setMatrix = function(t, i) {
            void 0 === i && (i = !0);
            var r = this
              , n = r.$DisplayObject
              , o = n[6];
            return o.equals(t) ? !1 : (o.copyFrom(t),
            i && (n[0] = o.$getScaleX(),
            n[1] = o.$getScaleY(),
            n[2] = t.$getSkewX(),
            n[3] = t.$getSkewY(),
            n[16] = e(180 * n[2] / Math.PI),
            n[17] = e(180 * n[3] / Math.PI),
            n[4] = e(180 * n[3] / Math.PI)),
            r.$removeFlags(8),
            r.$invalidatePosition(),
            !0)
        }
        ,
        r.prototype.$getConcatenatedMatrix = function() {
            var e = this.$DisplayObject[7];
            if (this.$hasFlags(16)) {
                this.$parent ? this.$parent.$getConcatenatedMatrix().$preMultiplyInto(this.$getMatrix(), e) : e.copyFrom(this.$getMatrix());
                var i = this.$DisplayObject
                  , r = i[12]
                  , n = i[13]
                  , o = this.$scrollRect;
                o ? e.$preMultiplyInto(t.$TempMatrix.setTo(1, 0, 0, 1, -o.x - r, -o.y - n), e) : (0 != r || 0 != n) && e.$preMultiplyInto(t.$TempMatrix.setTo(1, 0, 0, 1, -r, -n), e),
                this.$displayList && (this.$displayList.$renderNode.moved = !0),
                this.$renderNode && (this.$renderNode.moved = !0),
                this.$removeFlags(16)
            }
            return e
        }
        ,
        r.prototype.$getInvertedConcatenatedMatrix = function() {
            var t = this.$DisplayObject;
            return this.$hasFlags(32) && (this.$getConcatenatedMatrix().$invertInto(t[8]),
            this.$removeFlags(32)),
            t[8]
        }
        ,
        Object.defineProperty(r.prototype, "x", {
            get: function() {
                return this.$getX()
            },
            set: function(t) {
                this.$setX(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getX = function() {
            return this.$DisplayObject[6].tx
        }
        ,
        r.prototype.$setX = function(t) {
            t = +t || 0;
            var e = this.$DisplayObject[6];
            return t == e.tx ? !1 : (e.tx = t,
            this.$invalidatePosition(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "y", {
            get: function() {
                return this.$getY()
            },
            set: function(t) {
                this.$setY(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getY = function() {
            return this.$DisplayObject[6].ty
        }
        ,
        r.prototype.$setY = function(t) {
            t = +t || 0;
            var e = this.$DisplayObject[6];
            return t == e.ty ? !1 : (e.ty = t,
            this.$invalidatePosition(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "scaleX", {
            get: function() {
                return this.$getScaleX()
            },
            set: function(t) {
                this.$setScaleX(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getScaleX = function() {
            return this.$DisplayObject[0]
        }
        ,
        r.prototype.$setScaleX = function(t) {
            t = +t || 0;
            var e = this.$DisplayObject;
            return t == e[0] ? !1 : (e[0] = t,
            this.$invalidateMatrix(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "scaleY", {
            get: function() {
                return this.$getScaleY()
            },
            set: function(t) {
                this.$setScaleY(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getScaleY = function() {
            return this.$DisplayObject[1]
        }
        ,
        r.prototype.$setScaleY = function(t) {
            return t = +t || 0,
            t == this.$DisplayObject[1] ? !1 : (this.$DisplayObject[1] = t,
            this.$invalidateMatrix(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "rotation", {
            get: function() {
                return this.$getRotation()
            },
            set: function(t) {
                this.$setRotation(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getRotation = function() {
            return this.$DisplayObject[4]
        }
        ,
        r.prototype.$setRotation = function(t) {
            t = +t || 0,
            t = e(t);
            var i = this.$DisplayObject;
            if (t == i[4])
                return !1;
            var r = t - i[4]
              , n = r / 180 * Math.PI;
            return i[2] += n,
            i[3] += n,
            i[4] = t,
            this.$invalidateMatrix(),
            !0
        }
        ,
        Object.defineProperty(r.prototype, "skewX", {
            get: function() {
                return this.$DisplayObject[16]
            },
            set: function(t) {
                this.$setSkewX(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$setSkewX = function(t) {
            t = +t || 0;
            var i = this.$DisplayObject;
            return t == i[16] ? !1 : (i[16] = t,
            t = e(t),
            t = t / 180 * Math.PI,
            i[2] = t,
            this.$invalidateMatrix(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "skewY", {
            get: function() {
                return this.$DisplayObject[17]
            },
            set: function(t) {
                this.$setSkewY(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$setSkewY = function(t) {
            t = +t || 0;
            var i = this.$DisplayObject;
            return t == i[17] ? !1 : (i[17] = t,
            t = e(t),
            t = t / 180 * Math.PI,
            i[3] = t,
            this.$invalidateMatrix(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "width", {
            get: function() {
                return this.$getWidth()
            },
            set: function(t) {
                this.$setWidth(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getWidth = function() {
            return isNaN(this.$getExplicitWidth()) ? this.$getOriginalBounds().width : this.$getExplicitWidth()
        }
        ,
        r.prototype.$getExplicitWidth = function() {
            return this.$DisplayObject[14]
        }
        ,
        r.prototype.$setWidth = function(t) {
            return this.$DisplayObject[14] = isNaN(t) ? 0 / 0 : t,
            t = +t,
            0 > t ? !1 : (this.$invalidateMatrix(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "height", {
            get: function() {
                return this.$getHeight()
            },
            set: function(t) {
                this.$setHeight(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getHeight = function() {
            return isNaN(this.$getExplicitHeight()) ? this.$getOriginalBounds().height : this.$getExplicitHeight()
        }
        ,
        r.prototype.$getExplicitHeight = function() {
            return this.$DisplayObject[15]
        }
        ,
        r.prototype.$setHeight = function(t) {
            return this.$DisplayObject[15] = isNaN(t) ? 0 / 0 : t,
            t = +t,
            0 > t ? !1 : (this.$invalidateMatrix(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "measuredWidth", {
            get: function() {
                return this.$getOriginalBounds().width
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "measuredHeight", {
            get: function() {
                return this.$getOriginalBounds().height
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "anchorOffsetX", {
            get: function() {
                return this.$DisplayObject[12]
            },
            set: function(t) {
                this.$setAnchorOffsetX(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getAnchorOffsetX = function() {
            return this.$DisplayObject[12]
        }
        ,
        r.prototype.$setAnchorOffsetX = function(t) {
            return t = +t || 0,
            t == this.$DisplayObject[12] ? !1 : (this.$DisplayObject[12] = t,
            this.$invalidatePosition(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "anchorOffsetY", {
            get: function() {
                return this.$DisplayObject[13]
            },
            set: function(t) {
                this.$setAnchorOffsetY(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getAnchorOffsetY = function() {
            return this.$DisplayObject[13]
        }
        ,
        r.prototype.$setAnchorOffsetY = function(t) {
            return t = +t || 0,
            t == this.$DisplayObject[13] ? !1 : (this.$DisplayObject[13] = t,
            this.$invalidatePosition(),
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "visible", {
            get: function() {
                return this.$visible
            },
            set: function(t) {
                this.$setVisible(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$setVisible = function(t) {
            return t = !!t,
            t == this.$visible ? !1 : (this.$visible = t,
            this.$propagateFlagsDown(1024),
            this.$invalidateTransform(),
            !0)
        }
        ,
        r.prototype.$getConcatenatedVisible = function() {
            var t = this.$DisplayObject;
            if (this.$hasFlags(1024)) {
                if (this.$parent) {
                    var e = this.$parent.$getConcatenatedVisible();
                    t[19] = e && this.$visible
                } else
                    t[19] = this.$visible;
                this.$removeFlags(1024)
            }
            return t[19]
        }
        ,
        Object.defineProperty(r.prototype, "cacheAsBitmap", {
            get: function() {
                return this.$DisplayObject[11]
            },
            set: function(t) {
                t = !!t,
                this.$DisplayObject[11] = t,
                this.$setHasDisplayList(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$setHasDisplayList = function(e) {
            var i = !!this.$displayList;
            if (i != e)
                if (e) {
                    var r = t.sys.DisplayList.create(this);
                    r && (this.$displayList = r,
                    this.$parentDisplayList && this.$parentDisplayList.markDirty(r),
                    this.$cacheAsBitmapChanged())
                } else
                    this.$displayList = null ,
                    this.$cacheAsBitmapChanged()
        }
        ,
        r.prototype.$cacheAsBitmapChanged = function() {
            var t = this.$displayList || this.$parentDisplayList;
            this.$renderNode && t && t.markDirty(this),
            this.$propagateFlagsDown(48)
        }
        ,
        Object.defineProperty(r.prototype, "alpha", {
            get: function() {
                return this.$alpha
            },
            set: function(t) {
                this.$setAlpha(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$setAlpha = function(t) {
            return t = +t || 0,
            t == this.$alpha ? !1 : (this.$alpha = t,
            this.$propagateFlagsDown(64),
            this.$invalidate(),
            !0)
        }
        ,
        r.prototype.$getConcatenatedAlpha = function() {
            var t = this.$DisplayObject;
            if (this.$hasFlags(64)) {
                if (this.$parent) {
                    var e = this.$parent.$getConcatenatedAlpha();
                    t[18] = e * this.$alpha
                } else
                    t[18] = this.$alpha;
                this.$removeFlags(64)
            }
            return t[18]
        }
        ,
        Object.defineProperty(r.prototype, "touchEnabled", {
            get: function() {
                return this.$getTouchEnabled()
            },
            set: function(t) {
                this.$setTouchEnabled(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getTouchEnabled = function() {
            return this.$touchEnabled
        }
        ,
        r.prototype.$setTouchEnabled = function(t) {
            return this.$touchEnabled == t ? !1 : (this.$touchEnabled = t,
            !0)
        }
        ,
        Object.defineProperty(r.prototype, "scrollRect", {
            get: function() {
                return this.$scrollRect
            },
            set: function(t) {
                this.$setScrollRect(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$setScrollRect = function(e) {
            return e || this.$scrollRect ? (e ? (this.$scrollRect || (this.$scrollRect = new t.Rectangle),
            this.$scrollRect.copyFrom(e)) : this.$scrollRect = null ,
            this.$invalidatePosition(),
            !0) : !1
        }
        ,
        Object.defineProperty(r.prototype, "blendMode", {
            get: function() {
                return t.sys.numberToBlendMode(this.$blendMode)
            },
            set: function(e) {
                var i = t.sys.blendModeToNumber(e);
                i != this.$blendMode && (this.$blendMode = i,
                this.$invalidateTransform())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "mask", {
            get: function() {
                return this.$mask ? this.$mask : this.$maskRect
            },
            set: function(t) {
                if (t !== this) {
                    if (t)
                        if (t instanceof r) {
                            if (t == this.$mask)
                                return;
                            t.$maskedObject && (t.$maskedObject.mask = null ),
                            t.$maskedObject = this,
                            t.$invalidateTransform(),
                            this.$mask = t,
                            this.$maskRect = null
                        } else
                            this.$setMaskRect(t),
                            this.$mask && (this.$mask.$maskedObject = null ,
                            this.$mask.$invalidateTransform()),
                            this.$mask = null ;
                    else
                        this.$mask && (this.$mask.$maskedObject = null ,
                        this.$mask.$invalidateTransform()),
                        this.$mask = null ,
                        this.$maskRect = null ;
                    this.$invalidateTransform()
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$setMaskRect = function(e) {
            return e || this.$maskRect ? (e ? (this.$maskRect || (this.$maskRect = new t.Rectangle),
            this.$maskRect.copyFrom(e)) : this.$maskRect = null ,
            this.$invalidatePosition(),
            !0) : !1
        }
        ,
        Object.defineProperty(r.prototype, "filters", {
            get: function() {
                return this.$DisplayObject[20]
            },
            set: function(t) {
                var e = this.$DisplayObject[20];
                if (!e && !t)
                    return void (this.$DisplayObject[20] = t);
                if (this.$invalidateContentBounds(),
                this.$invalidate(!0),
                e && e.length)
                    for (var i = e.length, r = 0; i > r; r++)
                        e[r].$removeTarget(this);
                if (this.$DisplayObject[20] = t,
                t && t.length)
                    for (var n = t.length, r = 0; n > r; r++)
                        t[r].$addTarget(this)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$getFilters = function() {
            return this.$DisplayObject[20]
        }
        ,
        r.prototype.getTransformedBounds = function(t, e) {
            return t = t || this,
            this.$getTransformedBounds(t, e)
        }
        ,
        r.prototype.getBounds = function(t, e) {
            if (void 0 === e && (e = !0),
            t = this.$getTransformedBounds(this, t),
            e) {
                var i = this.$DisplayObject;
                (0 != i[12] || 0 != i[13]) && (t.x -= i[12],
                t.y -= i[13])
            }
            return t
        }
        ,
        r.prototype.$getTransformedBounds = function(e, i) {
            var r = this.$getOriginalBounds();
            if (i || (i = new t.Rectangle),
            i.copyFrom(r),
            e == this)
                return i;
            var n;
            if (e) {
                n = t.$TempMatrix;
                var o = e.$getInvertedConcatenatedMatrix();
                o.$preMultiplyInto(this.$getConcatenatedMatrix(), n)
            } else
                n = this.$getConcatenatedMatrix();
            return n.$transformBounds(i),
            i
        }
        ,
        r.prototype.globalToLocal = function(t, e, i) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0);
            var r = this.$getInvertedConcatenatedMatrix();
            return r.transformPoint(t, e, i)
        }
        ,
        r.prototype.localToGlobal = function(t, e, i) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0);
            var r = this.$getConcatenatedMatrix();
            return r.transformPoint(t, e, i)
        }
        ,
        r.prototype.$invalidateContentBounds = function() {
            this.$invalidate(),
            this.$setFlags(2),
            this.$propagateFlagsUp(4)
        }
        ,
        r.prototype.$getOriginalBounds = function() {
            var t = this.$DisplayObject[9];
            if (this.$hasFlags(4)) {
                t.copyFrom(this.$getContentBounds()),
                this.$measureChildBounds(t),
                this.$removeFlags(4),
                this.$displayList && (this.$displayList.$renderNode.moved = !0);
                var e = this.$measureFiltersOffset();
                e && (t.x += e.minX,
                t.y += e.minY,
                t.width += e.maxX,
                t.height += e.maxY)
            }
            return t
        }
        ,
        r.prototype.$measureChildBounds = function(t) {}
        ,
        r.prototype.$getContentBounds = function() {
            var t = this.$DisplayObject[10];
            return this.$hasFlags(2) && (this.$measureContentBounds(t),
            this.$renderNode && (this.$renderNode.moved = !0),
            this.$removeFlags(2)),
            t
        }
        ,
        r.prototype.$measureContentBounds = function(t) {}
        ,
        r.prototype.$invalidate = function(t) {
            if (this.$renderNode && !this.$hasFlags(384)) {
                this.$setFlags(384);
                var e = this.$displayList ? this.$displayList : this.$parentDisplayList;
                e && e.markDirty(this)
            }
        }
        ,
        r.prototype.$invalidateTransform = function() {
            var t = this;
            if (!t.$hasFlags(512)) {
                t.$setFlags(512);
                var e = t.$displayList;
                (e || t.$renderNode) && t.$parentDisplayList && t.$parentDisplayList.markDirty(e || t)
            }
        }
        ,
        r.prototype.$getRenderNode = function() {
            var t = this.$renderNode;
            return t ? (128 & this.$displayFlags && (t.cleanBeforeRender(),
            this.$render(),
            this.$removeFlags(128),
            t = this.$renderNode),
            t) : null
        }
        ,
        r.prototype.$update = function(e, i) {
            var r = this;
            r.$removeFlagsUp(768);
            var n = r.$renderNode;
            n.renderAlpha = r.$getConcatenatedAlpha();
            var o = r.$getConcatenatedMatrix();
            if (e == t.DirtyRegionPolicy.OFF) {
                var s = r.$displayList || r.$parentDisplayList;
                if (!s)
                    return !1;
                var a = n.renderMatrix;
                a.copyFrom(o);
                var h = s.root;
                h !== r.$stage && r.$getConcatenatedMatrixAt(h, a)
            } else {
                var l = i || r.$getContentBounds();
                n.renderVisible = r.$getConcatenatedVisible();
                var s = r.$displayList || r.$parentDisplayList
                  , u = n.renderRegion;
                if (!s)
                    return u.setTo(0, 0, 0, 0),
                    n.moved = !1,
                    !1;
                if (!n.moved)
                    return !1;
                n.moved = !1;
                var a = n.renderMatrix;
                a.copyFrom(o);
                var h = s.root;
                h !== r.$stage && r.$getConcatenatedMatrixAt(h, a),
                u.updateRegion(l, a);
                var c = r.$measureFiltersOffset();
                c && (u.minX += c.minX,
                u.minY += c.minY,
                u.maxX += c.maxX,
                u.maxY += c.maxY,
                u.updateArea())
            }
            return !0
        }
        ,
        r.prototype.$measureFiltersOffset = function() {
            var e = this.$DisplayObject[20];
            if (e && e.length) {
                for (var i = e.length, r = 0, n = 0, o = 0, s = 0, a = 0; i > a; a++) {
                    var h = e[a];
                    if ("blur" == h.type) {
                        var l = h.blurX
                          , u = h.blurY;
                        r -= l,
                        n -= u,
                        o += 2 * l,
                        s += 2 * u
                    } else if ("glow" == h.type) {
                        var l = h.blurX
                          , u = h.blurY;
                        r -= l,
                        n -= u,
                        o += 2 * l,
                        s += 2 * u;
                        var c = h.distance || 0
                          , p = h.angle || 0
                          , d = 0
                          , f = 0;
                        0 != c && (d = Math.ceil(c * t.NumberUtils.cos(p)),
                        f = Math.ceil(c * t.NumberUtils.sin(p)),
                        d > 0 ? o += d : 0 > d && (r += d,
                        o -= d),
                        f > 0 ? s += f : 0 > f && (n += f,
                        s -= f))
                    }
                }
                return {
                    minX: r,
                    minY: n,
                    maxX: o,
                    maxY: s
                }
            }
            return null
        }
        ,
        r.prototype.$getConcatenatedMatrixAt = function(e, i) {
            var r = e.$getInvertedConcatenatedMatrix();
            if (0 === r.a || 0 === r.d) {
                var n = this
                  , o = e.$nestLevel;
                for (i.identity(); n.$nestLevel > o; ) {
                    var s = n.$scrollRect;
                    s && i.concat(t.$TempMatrix.setTo(1, 0, 0, 1, -s.x, -s.y)),
                    i.concat(n.$getMatrix()),
                    n = n.$parent
                }
            } else
                r.$preMultiplyInto(i, i)
        }
        ,
        r.prototype.$getConcatenatedAlphaAt = function(t, e) {
            var i = t.$getConcatenatedAlpha();
            if (0 === i) {
                e = 1;
                for (var r = this, n = t.$nestLevel; r.$nestLevel > n; )
                    e *= r.$alpha,
                    r = r.$parent
            } else
                e /= i;
            return e
        }
        ,
        r.prototype.$render = function() {}
        ,
        r.prototype.$hitTest = function(t, e) {
            var i = this.$DisplayObject;
            if (!this.$renderNode || !this.$visible || 0 == i[0] || 0 == i[1])
                return null ;
            var r = this.$getInvertedConcatenatedMatrix();
            if (0 == r.a && 0 == r.b && 0 == r.c && 0 == r.d)
                return null ;
            var n = this.$getContentBounds()
              , o = r.a * t + r.c * e + r.tx
              , s = r.b * t + r.d * e + r.ty;
            if (n.contains(o, s)) {
                if (!this.$children) {
                    var a = this.$scrollRect ? this.$scrollRect : this.$maskRect;
                    if (a && !a.contains(o, s))
                        return null ;
                    if (this.$mask && !this.$mask.$hitTest(t, e))
                        return null
                }
                return this
            }
            return null
        }
        ,
        r.prototype.hitTestPoint = function(e, i, r) {
            if (r) {
                var n = this.$getInvertedConcatenatedMatrix()
                  , o = n.a * e + n.c * i + n.tx
                  , s = n.b * e + n.d * i + n.ty
                  , a = void 0
                  , h = this.$displayList;
                if (h) {
                    var l = h.renderBuffer;
                    try {
                        a = l.getPixels(o - h.offsetX, s - h.offsetY)
                    } catch (u) {
                        throw new Error(t.sys.tr(1039))
                    }
                } else {
                    var l = t.sys.customHitTestBuffer;
                    l.resize(3, 3);
                    var c = t.Matrix.create();
                    c.identity(),
                    c.translate(1 - o, 1 - s),
                    t.sys.systemRenderer.render(this, l, c, null , !0),
                    t.Matrix.release(c);
                    try {
                        a = l.getPixels(1, 1)
                    } catch (u) {
                        throw new Error(t.sys.tr(1039))
                    }
                }
                return 0 === a[3] ? !1 : !0
            }
            var p = this.$DisplayObject;
            if (0 == p[0] || 0 == p[1])
                return !1;
            var n = this.$getInvertedConcatenatedMatrix()
              , d = this.getBounds(null , !1)
              , o = n.a * e + n.c * i + n.tx
              , s = n.b * e + n.d * i + n.ty;
            if (d.contains(o, s)) {
                var f = this.$scrollRect ? this.$scrollRect : this.$maskRect;
                return f && !f.contains(o, s) ? !1 : !0
            }
            return !1
        }
        ,
        r.prototype.$addListener = function(e, n, o, s, a, h) {
            i.prototype.$addListener.call(this, e, n, o, s, a, h);
            var l = e == t.Event.ENTER_FRAME;
            if (l || e == t.Event.RENDER) {
                var u = l ? r.$enterFrameCallBackList : r.$renderCallBackList;
                -1 == u.indexOf(this) && u.push(this)
            }
        }
        ,
        r.prototype.removeEventListener = function(e, n, o, s) {
            i.prototype.removeEventListener.call(this, e, n, o, s);
            var a = e == t.Event.ENTER_FRAME;
            if ((a || e == t.Event.RENDER) && !this.hasEventListener(e)) {
                var h = a ? r.$enterFrameCallBackList : r.$renderCallBackList
                  , l = h.indexOf(this);
                -1 !== l && h.splice(l, 1)
            }
        }
        ,
        r.prototype.dispatchEvent = function(t) {
            if (!t.$bubbles)
                return i.prototype.dispatchEvent.call(this, t);
            var e = this.$getPropagationList(this)
              , r = .5 * e.length;
            return t.$setTarget(this),
            this.$dispatchPropagationEvent(t, e, r),
            !t.$isDefaultPrevented
        }
        ,
        r.prototype.$getPropagationList = function(t) {
            for (var e = []; t; )
                e.push(t),
                t = t.$parent;
            var i = e.concat();
            return i.reverse(),
            e = i.concat(e)
        }
        ,
        r.prototype.$dispatchPropagationEvent = function(t, e, i) {
            for (var r = e.length, n = i - 1, o = 0; r > o; o++) {
                var s = e[o];
                if (t.$currentTarget = s,
                n > o ? t.$eventPhase = 1 : o == i || o == n ? t.$eventPhase = 2 : t.$eventPhase = 3,
                s.$notifyListener(t, i > o),
                t.$isPropagationStopped || t.$isPropagationImmediateStopped)
                    return
            }
        }
        ,
        r.prototype.willTrigger = function(t) {
            for (var e = this; e; ) {
                if (e.hasEventListener(t))
                    return !0;
                e = e.$parent
            }
            return !1
        }
        ,
        r
    }(t.EventDispatcher);
    i.defaultTouchEnabled = !1,
    i.boundsForUpdate = new t.Rectangle,
    i.$enterFrameCallBackList = [],
    i.$renderCallBackList = [],
    t.DisplayObject = i,
    __reflect(i.prototype, "egret.DisplayObject", ["egret.sys.Renderable"])
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.$touchChildren = !0,
            t.$children = [],
            t
        }
        return __extends(i, e),
        i.prototype.$propagateFlagsDown = function(t, e) {
            if (void 0 === e && (e = !1),
            !this.$hasFlags(t) && (this.$setFlags(t),
            !e || !this.$displayList))
                for (var i = this.$children, r = i.length, n = 0; r > n; n++)
                    i[n].$propagateFlagsDown(t, e)
        }
        ,
        Object.defineProperty(i.prototype, "numChildren", {
            get: function() {
                return this.$children.length
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.addChild = function(t) {
            var e = this.$children.length;
            return t.$parent == this && e--,
            this.$doAddChild(t, e)
        }
        ,
        i.prototype.addChildAt = function(t, e) {
            return e = 0 | +e,
            (0 > e || e >= this.$children.length) && (e = this.$children.length,
            t.$parent == this && e--),
            this.$doAddChild(t, e)
        }
        ,
        i.prototype.$doAddChild = function(e, r, n) {
            void 0 === n && (n = !0);
            var o = e.$parent;
            if (o == this)
                return this.doSetChildIndex(e, r),
                e;
            o && o.removeChild(e),
            this.$children.splice(r, 0, e),
            e.$setParent(this);
            var s = this.$stage;
            if (s && e.$onAddToStage(s, this.$nestLevel + 1),
            n && e.dispatchEventWith(t.Event.ADDED, !0),
            s)
                for (var a = i.$EVENT_ADD_TO_STAGE_LIST; a.length; ) {
                    var h = a.shift();
                    h.$stage && n && h.dispatchEventWith(t.Event.ADDED_TO_STAGE)
                }
            var l = this.$displayList || this.$parentDisplayList;
            return this.assignParentDisplayList(e, l, l),
            e.$propagateFlagsDown(1648, !0),
            this.$propagateFlagsUp(4),
            this.$childAdded(e, r),
            e
        }
        ,
        i.prototype.contains = function(t) {
            for (; t; ) {
                if (t == this)
                    return !0;
                t = t.$parent
            }
            return !1
        }
        ,
        i.prototype.getChildAt = function(t) {
            return t = 0 | +t,
            t >= 0 && t < this.$children.length ? this.$children[t] : null
        }
        ,
        i.prototype.getChildIndex = function(t) {
            return this.$children.indexOf(t)
        }
        ,
        i.prototype.getChildByName = function(t) {
            for (var e, i = this.$children, r = i.length, n = 0; r > n; n++)
                if (e = i[n],
                e.name == t)
                    return e;
            return null
        }
        ,
        i.prototype.removeChild = function(t) {
            var e = this.$children.indexOf(t);
            return e >= 0 ? this.$doRemoveChild(e) : null
        }
        ,
        i.prototype.removeChildAt = function(t) {
            return t = 0 | +t,
            t >= 0 && t < this.$children.length ? this.$doRemoveChild(t) : null
        }
        ,
        i.prototype.$doRemoveChild = function(e, r) {
            void 0 === r && (r = !0),
            e = 0 | +e;
            var n = this.$children
              , o = n[e];
            if (this.$childRemoved(o, e),
            r && o.dispatchEventWith(t.Event.REMOVED, !0),
            this.$stage) {
                o.$onRemoveFromStage();
                for (var s = i.$EVENT_REMOVE_FROM_STAGE_LIST; s.length > 0; ) {
                    var a = s.shift();
                    r && a.$hasAddToStage && (a.$hasAddToStage = !1,
                    a.dispatchEventWith(t.Event.REMOVED_FROM_STAGE)),
                    a.$hasAddToStage = !1,
                    a.$stage = null
                }
            }
            var h = this.$displayList || this.$parentDisplayList;
            this.assignParentDisplayList(o, h, null ),
            o.$propagateFlagsDown(1648, !0),
            o.$setParent(null );
            var l = n.indexOf(o);
            return -1 != l && n.splice(l, 1),
            this.$propagateFlagsUp(4),
            o
        }
        ,
        i.prototype.setChildIndex = function(t, e) {
            e = 0 | +e,
            (0 > e || e >= this.$children.length) && (e = this.$children.length - 1),
            this.doSetChildIndex(t, e)
        }
        ,
        i.prototype.doSetChildIndex = function(t, e) {
            var i = this.$children.indexOf(t);
            i != e && (this.$childRemoved(t, i),
            this.$children.splice(i, 1),
            this.$children.splice(e, 0, t),
            this.$childAdded(t, e),
            t.$invalidateTransform(),
            this.$propagateFlagsUp(4))
        }
        ,
        i.prototype.swapChildrenAt = function(t, e) {
            t = 0 | +t,
            e = 0 | +e,
            t >= 0 && t < this.$children.length && e >= 0 && e < this.$children.length && this.doSwapChildrenAt(t, e)
        }
        ,
        i.prototype.swapChildren = function(t, e) {
            var i = this.$children.indexOf(t)
              , r = this.$children.indexOf(e);
            -1 == i || -1 == r || this.doSwapChildrenAt(i, r)
        }
        ,
        i.prototype.doSwapChildrenAt = function(t, e) {
            if (t > e) {
                var i = e;
                e = t,
                t = i
            } else if (t == e)
                return;
            var r = this.$children
              , n = r[t]
              , o = r[e];
            this.$childRemoved(n, t),
            this.$childRemoved(o, e),
            r[t] = o,
            r[e] = n,
            this.$childAdded(o, t),
            this.$childAdded(n, e),
            n.$invalidateTransform(),
            o.$invalidateTransform(),
            this.$propagateFlagsUp(4)
        }
        ,
        i.prototype.removeChildren = function() {
            for (var t = this.$children, e = t.length - 1; e >= 0; e--)
                this.$doRemoveChild(e)
        }
        ,
        i.prototype.$childAdded = function(t, e) {}
        ,
        i.prototype.$childRemoved = function(t, e) {}
        ,
        i.prototype.$onAddToStage = function(t, i) {
            e.prototype.$onAddToStage.call(this, t, i);
            var r = this.$children
              , n = r.length;
            i++;
            for (var o = 0; n > o; o++) {
                var s = this.$children[o];
                s.$onAddToStage(t, i)
            }
        }
        ,
        i.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this);
            for (var t = this.$children, i = t.length, r = 0; i > r; r++) {
                var n = t[r];
                n.$onRemoveFromStage()
            }
        }
        ,
        i.prototype.$measureChildBounds = function(e) {
            var i = this.$children
              , r = i.length;
            if (0 != r) {
                for (var n = 0, o = 0, s = 0, a = 0, h = !1, l = -1; r > l; l++) {
                    var u = -1 == l ? e : i[l].$getTransformedBounds(this, t.$TempRectangle);
                    u.isEmpty() || (h ? (n = Math.min(n, u.x),
                    o = Math.max(o, u.x + u.width),
                    s = Math.min(s, u.y),
                    a = Math.max(a, u.y + u.height)) : (h = !0,
                    n = u.x,
                    o = n + u.width,
                    s = u.y,
                    a = s + u.height))
                }
                e.setTo(n, s, o - n, a - s)
            }
        }
        ,
        Object.defineProperty(i.prototype, "touchChildren", {
            get: function() {
                return this.$getTouchChildren()
            },
            set: function(t) {
                this.$setTouchChildren(!!t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$getTouchChildren = function() {
            return this.$touchChildren
        }
        ,
        i.prototype.$setTouchChildren = function(t) {
            return this.$touchChildren == t ? !1 : (this.$touchChildren = t,
            !0)
        }
        ,
        i.prototype.$invalidate = function(t) {
            if (e.prototype.$invalidate.call(this, t),
            t) {
                var i = this.$displayList || this.$parentDisplayList
                  , r = this.$children;
                if (r)
                    for (var n = r.length - 1; n >= 0; n--)
                        this.markChildDirty(r[n], i)
            }
        }
        ,
        i.prototype.$invalidateTransform = function() {
            this.markChildDirty(this, this.$parentDisplayList)
        }
        ,
        i.prototype.markChildDirty = function(t, e) {
            if (!t.$hasFlags(512)) {
                t.$setFlags(512);
                var i = t.$displayList;
                if ((i || t.$renderNode) && e && e.markDirty(i || t),
                !i) {
                    var r = t.$children;
                    if (r)
                        for (var n = r.length - 1; n >= 0; n--)
                            this.markChildDirty(r[n], e)
                }
            }
        }
        ,
        i.prototype.$cacheAsBitmapChanged = function() {
            e.prototype.$cacheAsBitmapChanged.call(this);
            for (var t = this.$displayList || this.$parentDisplayList, i = this.$children, r = i.length - 1; r >= 0; r--)
                this.assignParentDisplayList(i[r], t, t)
        }
        ,
        i.prototype.assignParentDisplayList = function(t, e, i) {
            t.$parentDisplayList = i,
            t.$setFlags(512);
            var r = t.$displayList;
            if ((t.$renderNode || r) && e && e.markDirty(r || t),
            !r) {
                var n = t.$children;
                if (n)
                    for (var o = n.length - 1; o >= 0; o--)
                        this.assignParentDisplayList(n[o], e, i)
            }
        }
        ,
        i.prototype.$hitTest = function(t, i) {
            if (!this.$visible)
                return null ;
            var r = this.$getInvertedConcatenatedMatrix()
              , n = r.a * t + r.c * i + r.tx
              , o = r.b * t + r.d * i + r.ty
              , s = this.$scrollRect ? this.$scrollRect : this.$maskRect;
            if (s && !s.contains(n, o))
                return null ;
            if (this.$mask && !this.$mask.$hitTest(t, i))
                return null ;
            for (var a = this.$children, h = !1, l = null , u = a.length - 1; u >= 0; u--) {
                var c = a[u];
                if (!c.$maskedObject && (l = c.$hitTest(t, i))) {
                    if (h = !0,
                    l.$touchEnabled)
                        break;
                    l = null
                }
            }
            return l ? this.$touchChildren ? l : this : h ? this : e.prototype.$hitTest.call(this, t, i)
        }
        ,
        i.prototype.$setAlpha = function(t) {
            return t = +t || 0,
            t == this.$alpha ? !1 : (this.$alpha = t,
            this.$propagateFlagsDown(64),
            this.$invalidate(),
            this.$invalidateAllChildren(),
            !0)
        }
        ,
        i.prototype.$invalidateAllChildren = function() {
            var t = this.$children;
            if (t)
                for (var e = t.length - 1; e >= 0; e--) {
                    var i = t[e];
                    i.$invalidate(),
                    i.$children && i.$invalidateAllChildren()
                }
        }
        ,
        i
    }(t.DisplayObject);
    e.$EVENT_ADD_TO_STAGE_LIST = [],
    e.$EVENT_REMOVE_FROM_STAGE_LIST = [],
    t.DisplayObjectContainer = e,
    __reflect(e.prototype, "egret.DisplayObjectContainer")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e() {
            var e = t.apply(this, arguments) || this;
            return e.type = null ,
            e.$targets = [],
            e
        }
        return __extends(e, t),
        e.prototype.$addTarget = function(t) {
            for (var e = this.$targets.length, i = 0; e > i; i++)
                if (this.$targets[i].$hashCode == t.$hashCode)
                    return;
            this.$targets.push(t)
        }
        ,
        e.prototype.$removeTarget = function(t) {
            for (var e = this.$targets.length, i = 0; e > i; i++)
                if (this.$targets[i].$hashCode == t.$hashCode)
                    return void this.$targets.splice(i, 1)
        }
        ,
        e.prototype.invalidate = function() {
            for (var t = this.$targets.length, e = 0; t > e; e++)
                this.$targets[e].$invalidateContentBounds()
        }
        ,
        e.prototype.$toJson = function() {
            return ""
        }
        ,
        e
    }(t.HashObject);
    t.Filter = e,
    __reflect(e.prototype, "egret.Filter")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(r) {
            var n = e.call(this) || this;
            return n.$scale9Grid = null ,
            n.$fillMode = "scale",
            n._pixelHitTest = !1,
            n.$renderNode = new t.sys.BitmapNode,
            n.$Bitmap = {
                0: null ,
                1: null ,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: i.defaultSmoothing,
                11: 0 / 0,
                12: 0 / 0
            },
            n.$setBitmapData(r),
            n
        }
        return __extends(i, e),
        i.prototype.$onAddToStage = function(i, r) {
            e.prototype.$onAddToStage.call(this, i, r);
            var n = this.$Bitmap[0];
            n && t.BitmapData.$addDisplayObject(this, n)
        }
        ,
        i.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this);
            var i = this.$Bitmap[0];
            i && t.BitmapData.$removeDisplayObject(this, i)
        }
        ,
        Object.defineProperty(i.prototype, "bitmapData", {
            get: function() {
                var e = this.$Bitmap[0];
                return e instanceof t.Texture ? null : e
            },
            set: function(t) {
                this.$setBitmapData(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "texture", {
            get: function() {
                var e = this.$Bitmap[0];
                return e instanceof t.Texture ? e : null
            },
            set: function(t) {
                this.$setBitmapData(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$setBitmapData = function(e) {
            var i = this.$Bitmap
              , r = i[0];
            if (e == r)
                return !1;
            if (i[0] = e,
            !e)
                return r && t.BitmapData.$removeDisplayObject(this, r),
                this.setImageData(null , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
                this.$invalidateContentBounds(),
                !0;
            if (this.$refreshImageData(),
            this.$stage) {
                if (r) {
                    var n = void 0;
                    n = r._bitmapData && r._bitmapData.hashCode ? r._bitmapData.hashCode : r.hashCode;
                    var o = void 0;
                    if (o = e._bitmapData && e._bitmapData.hashCode ? e._bitmapData.hashCode : e.hashCode,
                    n == o)
                        return this.$invalidateContentBounds(),
                        !0;
                    t.BitmapData.$removeDisplayObject(this, r)
                }
                t.BitmapData.$addDisplayObject(this, e)
            }
            return this.$invalidateContentBounds(),
            !0
        }
        ,
        i.prototype.$refreshImageData = function() {
            var e = this.$Bitmap
              , i = e[0];
            if (i)
                if (i instanceof t.Texture) {
                    var r = i;
                    this.setImageData(r._bitmapData, r._bitmapX, r._bitmapY, r._bitmapWidth, r._bitmapHeight, r._offsetX, r._offsetY, r.$getTextureWidth(), r.$getTextureHeight(), r._sourceWidth, r._sourceHeight)
                } else {
                    var n = i.width
                      , o = i.height;
                    this.setImageData(i, 0, 0, n, o, 0, 0, n, o, n, o)
                }
        }
        ,
        i.prototype.setImageData = function(t, e, i, r, n, o, s, a, h, l, u) {
            var c = this.$Bitmap;
            c[1] = t,
            c[2] = e,
            c[3] = i,
            c[4] = r,
            c[5] = n,
            c[6] = o,
            c[7] = s,
            c[8] = a,
            c[9] = h,
            c[13] = l,
            c[14] = u
        }
        ,
        Object.defineProperty(i.prototype, "scale9Grid", {
            get: function() {
                return this.$scale9Grid
            },
            set: function(t) {
                this.$scale9Grid = t,
                this.$invalidateContentBounds()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "fillMode", {
            get: function() {
                return this.$fillMode
            },
            set: function(t) {
                this.$setFillMode(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$setFillMode = function(t) {
            return t == this.$fillMode ? !1 : (this.$fillMode = t,
            !0)
        }
        ,
        Object.defineProperty(i.prototype, "smoothing", {
            get: function() {
                var t = this.$Bitmap;
                return t[10]
            },
            set: function(t) {
                t = !!t;
                var e = this.$Bitmap;
                t != e[10] && (e[10] = t,
                this.$invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$setWidth = function(t) {
            var e = this.$Bitmap;
            return 0 > t || t == e[11] ? !1 : (e[11] = t,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        i.prototype.$setHeight = function(t) {
            var e = this.$Bitmap;
            return 0 > t || t == e[12] ? !1 : (e[12] = t,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        i.prototype.$getWidth = function() {
            var t = this.$Bitmap;
            return isNaN(t[11]) ? this.$getContentBounds().width : t[11]
        }
        ,
        i.prototype.$getHeight = function() {
            var t = this.$Bitmap;
            return isNaN(t[12]) ? this.$getContentBounds().height : t[12]
        }
        ,
        i.prototype.$measureContentBounds = function(t) {
            var e = this.$Bitmap;
            if (e[1]) {
                var i = this.$Bitmap
                  , r = isNaN(i[11]) ? i[8] : i[11]
                  , n = isNaN(i[12]) ? i[9] : i[12];
                t.setTo(0, 0, r, n)
            } else {
                var r = isNaN(e[11]) ? 0 : e[11]
                  , n = isNaN(e[12]) ? 0 : e[12];
                t.setTo(0, 0, r, n)
            }
        }
        ,
        i.prototype.$render = function() {
            var e = this.$Bitmap;
            if (e[1]) {
                var i = isNaN(e[11]) ? e[8] : e[11]
                  , r = isNaN(e[12]) ? e[9] : e[12];
                t.sys.BitmapNode.$updateTextureData(this.$renderNode, e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], i, r, e[13], e[14], this.scale9Grid || e[0].scale9Grid, this.fillMode, e[10])
            }
        }
        ,
        Object.defineProperty(i.prototype, "pixelHitTest", {
            get: function() {
                return this._pixelHitTest
            },
            set: function(t) {
                this._pixelHitTest = !!t
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$hitTest = function(t, i) {
            var r = e.prototype.$hitTest.call(this, t, i);
            return r && this._pixelHitTest && (r = this.hitTestPixel(t, i)),
            r
        }
        ,
        i.prototype.hitTestPixel = function(e, i) {
            var r, n = this.$getInvertedConcatenatedMatrix(), o = n.a * e + n.c * i + n.tx, s = n.b * e + n.d * i + n.ty, a = this.$displayList;
            if (a) {
                var h = a.renderBuffer;
                try {
                    r = h.getPixels(o - a.offsetX, s - a.offsetY)
                } catch (l) {
                    throw console.log(this.$Bitmap[0]),
                    new Error(t.sys.tr(1039))
                }
            } else {
                var h = t.sys.customHitTestBuffer;
                h.resize(3, 3);
                var u = this.$getRenderNode()
                  , c = t.Matrix.create();
                c.identity(),
                c.translate(1 - o, 1 - s),
                t.sys.systemRenderer.drawNodeToBuffer(u, h, c, !0),
                t.Matrix.release(c);
                try {
                    r = h.getPixels(1, 1)
                } catch (l) {
                    throw console.log(this.$Bitmap[0]),
                    new Error(t.sys.tr(1039))
                }
            }
            return 0 === r[3] ? null : this
        }
        ,
        i.$drawImage = function(e, i, r, n, o, s, a, h, l, u, c, p, d, f, g, y, v) {
            console.warn("deprecated method : Bitmap.$drawImage,use egret.sys.BitmapNode.$drawImage instead of it"),
            t.sys.BitmapNode.$updateTextureData(e, i, r, n, o, s, a, h, l, u, c, p, d, f, g, y, v)
        }
        ,
        i
    }(t.DisplayObject);
    e.defaultSmoothing = !0,
    t.Bitmap = e,
    __reflect(e.prototype, "egret.Bitmap")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.$graphics = new t.Graphics,
            i.$graphics.$setTarget(i),
            i
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "graphics", {
            get: function() {
                return this.$graphics
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$hitTest = function(e, i) {
            if (!this.$visible)
                return null ;
            var r = this.$getInvertedConcatenatedMatrix()
              , n = r.a * e + r.c * i + r.tx
              , o = r.b * e + r.d * i + r.ty
              , s = this.$scrollRect ? this.$scrollRect : this.$maskRect;
            if (s && !s.contains(n, o))
                return null ;
            if (this.$mask && !this.$mask.$hitTest(e, i))
                return null ;
            for (var a = this.$children, h = !1, l = null , u = a.length - 1; u >= 0; u--) {
                var c = a[u];
                if (!c.$maskedObject && (l = c.$hitTest(e, i))) {
                    if (h = !0,
                    l.$touchEnabled)
                        break;
                    l = null
                }
            }
            return l ? this.$touchChildren ? l : this : h ? this : (l = t.DisplayObject.prototype.$hitTest.call(this, e, i),
            l && (l = this.$graphics.$hitTest(e, i)),
            l)
        }
        ,
        i.prototype.$measureContentBounds = function(t) {
            this.$graphics.$measureContentBounds(t)
        }
        ,
        i.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this),
            this.$graphics && this.$graphics.$onRemoveFromStage()
        }
        ,
        i
    }(t.DisplayObjectContainer);
    t.Sprite = e,
    __reflect(e.prototype, "egret.Sprite")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e(e, i, r, n) {
            var o = t.call(this) || this;
            return o.$eventPhase = 2,
            o.$currentTarget = null ,
            o.$target = null ,
            o.$isDefaultPrevented = !1,
            o.$isPropagationStopped = !1,
            o.$isPropagationImmediateStopped = !1,
            o.$type = e,
            o.$bubbles = !!i,
            o.$cancelable = !!r,
            o.data = n,
            o
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "type", {
            get: function() {
                return this.$type
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "bubbles", {
            get: function() {
                return this.$bubbles
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "cancelable", {
            get: function() {
                return this.$cancelable
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventPhase", {
            get: function() {
                return this.$eventPhase
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "currentTarget", {
            get: function() {
                return this.$currentTarget
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "target", {
            get: function() {
                return this.$target
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.$setTarget = function(t) {
            return this.$target = t,
            !0
        }
        ,
        e.prototype.isDefaultPrevented = function() {
            return this.$isDefaultPrevented
        }
        ,
        e.prototype.preventDefault = function() {
            this.$cancelable && (this.$isDefaultPrevented = !0)
        }
        ,
        e.prototype.stopPropagation = function() {
            this.$bubbles && (this.$isPropagationStopped = !0)
        }
        ,
        e.prototype.stopImmediatePropagation = function() {
            this.$bubbles && (this.$isPropagationImmediateStopped = !0)
        }
        ,
        e.prototype.clean = function() {
            this.data = this.$currentTarget = null ,
            this.$setTarget(null )
        }
        ,
        e.dispatchEvent = function(t, i, r, n) {
            void 0 === r && (r = !1);
            var o = e.create(e, i, r)
              , s = e._getPropertyData(e);
            void 0 != n && (s.data = n);
            var a = t.dispatchEvent(o);
            return e.release(o),
            a
        }
        ,
        e._getPropertyData = function(t) {
            var e = t._props;
            return e || (e = t._props = {}),
            e
        }
        ,
        e.create = function(t, e, i, r) {
            var n = t.eventPool;
            if (n || (n = t.eventPool = []),
            n.length) {
                var o = n.pop();
                return o.$type = e,
                o.$bubbles = !!i,
                o.$cancelable = !!r,
                o.$isDefaultPrevented = !1,
                o.$isPropagationStopped = !1,
                o.$isPropagationImmediateStopped = !1,
                o.$eventPhase = 2,
                o
            }
            return new t(e,i,r)
        }
        ,
        e.release = function(t) {
            t.clean();
            var e = Object.getPrototypeOf(t).constructor;
            e.eventPool.push(t)
        }
        ,
        e
    }(t.HashObject);
    e.ADDED_TO_STAGE = "addedToStage",
    e.REMOVED_FROM_STAGE = "removedFromStage",
    e.ADDED = "added",
    e.REMOVED = "removed",
    e.ENTER_FRAME = "enterFrame",
    e.RENDER = "render",
    e.RESIZE = "resize",
    e.CHANGE = "change",
    e.CHANGING = "changing",
    e.COMPLETE = "complete",
    e.LOOP_COMPLETE = "loopComplete",
    e.FOCUS_IN = "focusIn",
    e.FOCUS_OUT = "focusOut",
    e.ENDED = "ended",
    e.ACTIVATE = "activate",
    e.DEACTIVATE = "deactivate",
    e.CLOSE = "close",
    e.CONNECT = "connect",
    e.LEAVE_STAGE = "leaveStage",
    e.SOUND_COMPLETE = "soundComplete",
    t.Event = e,
    __reflect(e.prototype, "egret.Event")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e(e, i, r, n, o, s, a, h) {
            void 0 === e && (e = 16711680),
            void 0 === i && (i = 1),
            void 0 === r && (r = 6),
            void 0 === n && (n = 6),
            void 0 === o && (o = 2),
            void 0 === s && (s = 1),
            void 0 === a && (a = !1),
            void 0 === h && (h = !1);
            var l = t.call(this) || this;
            return l.type = "glow",
            l.$color = e,
            l.$blue = 255 & e,
            l.$green = (65280 & e) >> 8,
            l.$red = e >> 16,
            l.$alpha = i,
            l.$blurX = r,
            l.$blurY = n,
            l.$strength = o,
            l.$quality = s,
            l.$inner = a,
            l.$knockout = h,
            l
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "color", {
            get: function() {
                return this.$color
            },
            set: function(t) {
                this.$color != t && (this.$color = t,
                this.$blue = 255 & t,
                this.$green = (65280 & t) >> 8,
                this.$red = t >> 16,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "alpha", {
            get: function() {
                return this.$alpha
            },
            set: function(t) {
                this.$alpha != t && (this.$alpha = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "blurX", {
            get: function() {
                return this.$blurX
            },
            set: function(t) {
                this.$blurX != t && (this.$blurX = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "blurY", {
            get: function() {
                return this.$blurY
            },
            set: function(t) {
                this.$blurY != t && (this.$blurY = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "strength", {
            get: function() {
                return this.$strength
            },
            set: function(t) {
                this.$strength != t && (this.$strength = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "quality", {
            get: function() {
                return this.$quality
            },
            set: function(t) {
                this.$quality != t && (this.$quality = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "inner", {
            get: function() {
                return this.$inner
            },
            set: function(t) {
                this.$inner != t && (this.$inner = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "knockout", {
            get: function() {
                return this.$knockout
            },
            set: function(t) {
                this.$knockout != t && (this.$knockout = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.$toJson = function() {
            return '{"color": ' + this.$color + ', "red": ' + this.$red + ', "green": ' + this.$green + ', "blue": ' + this.$blue + ', "alpha": ' + this.$alpha + ', "blurX": ' + this.$blurX + ', "blurY": ' + this.blurY + ', "strength": ' + this.$strength + ', "quality": ' + this.$quality + ', "inner": ' + this.$inner + ', "knockout": ' + this.$knockout + "}"
        }
        ,
        e
    }(t.Filter);
    t.GlowFilter = e,
    __reflect(e.prototype, "egret.GlowFilter")
}(egret || (egret = {}));
var egret;
!function(t) {
    t.$TextureScaleFactor = 1;
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t._bitmapX = 0,
            t._bitmapY = 0,
            t._bitmapWidth = 0,
            t._bitmapHeight = 0,
            t._offsetX = 0,
            t._offsetY = 0,
            t._textureWidth = 0,
            t._textureHeight = 0,
            t._sourceWidth = 0,
            t._sourceHeight = 0,
            t._bitmapData = null ,
            t
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "textureWidth", {
            get: function() {
                return this.$getTextureWidth()
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$getTextureWidth = function() {
            return this._textureWidth
        }
        ,
        Object.defineProperty(i.prototype, "textureHeight", {
            get: function() {
                return this.$getTextureHeight()
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$getTextureHeight = function() {
            return this._textureHeight
        }
        ,
        i.prototype.$getScaleBitmapWidth = function() {
            return this._bitmapWidth * t.$TextureScaleFactor
        }
        ,
        i.prototype.$getScaleBitmapHeight = function() {
            return this._bitmapHeight * t.$TextureScaleFactor
        }
        ,
        Object.defineProperty(i.prototype, "bitmapData", {
            get: function() {
                return this._bitmapData
            },
            set: function(t) {
                this._setBitmapData(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype._setBitmapData = function(e) {
            this._bitmapData = e;
            var i = t.$TextureScaleFactor
              , r = e.width * i
              , n = e.height * i;
            this.$initData(0, 0, r, n, 0, 0, r, n, e.width, e.height)
        }
        ,
        i.prototype.$initData = function(e, i, r, n, o, s, a, h, l, u) {
            var c = t.$TextureScaleFactor;
            this._bitmapX = e / c,
            this._bitmapY = i / c,
            this._bitmapWidth = r / c,
            this._bitmapHeight = n / c,
            this._offsetX = o,
            this._offsetY = s,
            this._textureWidth = a,
            this._textureHeight = h,
            this._sourceWidth = l,
            this._sourceHeight = u,
            t.BitmapData.$invalidate(this)
        }
        ,
        i.prototype.getPixel32 = function(t, e) {
            throw new Error
        }
        ,
        i.prototype.getPixels = function(t, e, i, r) {
            throw void 0 === i && (i = 1),
            void 0 === r && (r = 1),
            new Error
        }
        ,
        i.prototype.toDataURL = function(t, e) {
            throw new Error
        }
        ,
        i.prototype.saveToFile = function(t, e, i) {
            throw new Error
        }
        ,
        i.prototype.dispose = function() {
            this._bitmapData && (this._bitmapData.$dispose(),
            this._bitmapData = null )
        }
        ,
        i
    }(t.HashObject);
    t.Texture = e,
    __reflect(e.prototype, "egret.Texture")
}(egret || (egret = {}));
var egret;
!function(t) {
    t.$locale_strings = t.$locale_strings || {},
    t.$language = "en_US"
}(egret || (egret = {})),
function(t) {
    var e;
    !function(e) {
        function i(e) {
            for (var i = [], r = 1; r < arguments.length; r++)
                i[r - 1] = arguments[r];
            var n = t.$locale_strings[t.$language][e];
            if (!n)
                return "{" + e + "}";
            for (var o = i.length, s = 0; o > s; s++)
                n = n.replace("{" + s + "}", i[s]);
            return n
        }
        e.tr = i
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = []
      , i = Math.PI / 180
      , r = function(r) {
        function n(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0);
            var i = r.call(this) || this;
            return i.x = t,
            i.y = e,
            i
        }
        return __extends(n, r),
        n.release = function(t) {
            t && e.push(t)
        }
        ,
        n.create = function(t, i) {
            var r = e.pop();
            return r || (r = new n),
            r.setTo(t, i)
        }
        ,
        Object.defineProperty(n.prototype, "length", {
            get: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.setTo = function(t, e) {
            return this.x = t,
            this.y = e,
            this
        }
        ,
        n.prototype.clone = function() {
            return new n(this.x,this.y)
        }
        ,
        n.prototype.equals = function(t) {
            return this.x == t.x && this.y == t.y
        }
        ,
        n.distance = function(t, e) {
            return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y))
        }
        ,
        n.prototype.copyFrom = function(t) {
            this.x = t.x,
            this.y = t.y
        }
        ,
        n.prototype.add = function(t) {
            return new n(this.x + t.x,this.y + t.y)
        }
        ,
        n.interpolate = function(t, e, i) {
            var r = 1 - i;
            return new n(t.x * i + e.x * r,t.y * i + e.y * r)
        }
        ,
        n.prototype.normalize = function(t) {
            if (0 != this.x || 0 != this.y) {
                var e = t / this.length;
                this.x *= e,
                this.y *= e
            }
        }
        ,
        n.prototype.offset = function(t, e) {
            this.x += t,
            this.y += e
        }
        ,
        n.polar = function(e, r) {
            return new n(e * t.NumberUtils.cos(r / i),e * t.NumberUtils.sin(r / i))
        }
        ,
        n.prototype.subtract = function(t) {
            return new n(this.x - t.x,this.y - t.y)
        }
        ,
        n.prototype.toString = function() {
            return "(x=" + this.x + ", y=" + this.y + ")"
        }
        ,
        n
    }(t.HashObject);
    t.Point = r,
    __reflect(r.prototype, "egret.Point"),
    t.$TempPoint = new r
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        var i = function() {
            function i() {
                this.type = 0,
                this.needRedraw = !1,
                this.renderAlpha = 1,
                this.renderVisible = !0,
                this.renderMatrix = new t.Matrix,
                this.renderRegion = new e.Region,
                this.moved = !1,
                this.drawData = [],
                this.renderCount = 0
            }
            return i.prototype.cleanBeforeRender = function() {
                this.drawData.length = 0,
                this.renderCount = 0
            }
            ,
            i.prototype.$getRenderCount = function() {
                return this.renderCount
            }
            ,
            i
        }();
        e.RenderNode = i,
        __reflect(i.prototype, "egret.sys.RenderNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        var e = function() {
            function t() {
                this.type = 0,
                this.$commands = [],
                this.$data = [],
                this.commandPosition = 0,
                this.dataPosition = 0,
                this.$lastX = 0,
                this.$lastY = 0
            }
            return t.prototype.moveTo = function(t, e) {
                this.$commands[this.commandPosition++] = 1;
                var i = this.dataPosition;
                this.$data[i++] = t,
                this.$data[i++] = e,
                this.dataPosition = i
            }
            ,
            t.prototype.lineTo = function(t, e) {
                this.$commands[this.commandPosition++] = 2;
                var i = this.dataPosition;
                this.$data[i++] = t,
                this.$data[i++] = e,
                this.dataPosition = i
            }
            ,
            t.prototype.curveTo = function(t, e, i, r) {
                this.$commands[this.commandPosition++] = 3;
                var n = this.dataPosition;
                this.$data[n++] = t,
                this.$data[n++] = e,
                this.$data[n++] = i,
                this.$data[n++] = r,
                this.dataPosition = n
            }
            ,
            t.prototype.cubicCurveTo = function(t, e, i, r, n, o) {
                this.$commands[this.commandPosition++] = 4;
                var s = this.dataPosition;
                this.$data[s++] = t,
                this.$data[s++] = e,
                this.$data[s++] = i,
                this.$data[s++] = r,
                this.$data[s++] = n,
                this.$data[s++] = o,
                this.dataPosition = s
            }
            ,
            t.prototype.drawRect = function(t, e, i, r) {
                var n = t + i
                  , o = e + r;
                this.moveTo(t, e),
                this.lineTo(n, e),
                this.lineTo(n, o),
                this.lineTo(t, o),
                this.lineTo(t, e)
            }
            ,
            t.prototype.drawRoundRect = function(t, e, i, r, n, o) {
                var s = .5 * n | 0
                  , a = o ? .5 * o | 0 : s;
                if (!s || !a)
                    return void this.drawRect(t, e, i, r);
                var h = .5 * i
                  , l = .5 * r;
                if (s > h && (s = h),
                a > l && (a = l),
                h === s && l === a)
                    return void (s === a ? this.drawCircle(t + s, e + a, s) : this.drawEllipse(t, e, 2 * s, 2 * a));
                var u = t + i
                  , c = e + r
                  , p = t + s
                  , d = u - s
                  , f = e + a
                  , g = c - a;
                this.moveTo(u, g),
                this.curveTo(u, c, d, c),
                this.lineTo(p, c),
                this.curveTo(t, c, t, g),
                this.lineTo(t, f),
                this.curveTo(t, e, p, e),
                this.lineTo(d, e),
                this.curveTo(u, e, u, f),
                this.lineTo(u, g)
            }
            ,
            t.prototype.drawCircle = function(t, e, i) {
                this.arcToBezier(t, e, i, i, 0, 2 * Math.PI)
            }
            ,
            t.prototype.drawEllipse = function(t, e, i, r) {
                var n = .5 * i
                  , o = .5 * r;
                t += n,
                e += o,
                this.arcToBezier(t, e, n, o, 0, 2 * Math.PI)
            }
            ,
            t.prototype.drawArc = function(t, e, i, r, n, o) {
                o ? n >= r && (n -= 2 * Math.PI) : r >= n && (n += 2 * Math.PI),
                this.arcToBezier(t, e, i, i, r, n, o)
            }
            ,
            t.prototype.arcToBezier = function(t, e, i, r, n, o, s) {
                var a = .5 * Math.PI
                  , h = n
                  , l = h;
                s ? (l += -a - h % a,
                o > l && (l = o)) : (l += a - h % a,
                l > o && (l = o));
                var u = t + Math.cos(h) * i
                  , c = e + Math.sin(h) * r;
                (this.$lastX != u || this.$lastY != c) && this.moveTo(u, c);
                for (var p = Math.cos(h), d = Math.sin(h), f = 0; 4 > f; f++) {
                    var g = l - h
                      , y = 4 * Math.tan(g / 4) / 3
                      , v = u - d * y * i
                      , $ = c + p * y * r;
                    p = Math.cos(l),
                    d = Math.sin(l),
                    u = t + p * i,
                    c = e + d * r;
                    var m = u + d * y * i
                      , b = c - p * y * r;
                    if (this.cubicCurveTo(v, $, m, b, u, c),
                    l === o)
                        break;
                    h = l,
                    s ? (l = h - a,
                    o > l && (l = o)) : (l = h + a,
                    l > o && (l = o))
                }
            }
            ,
            t
        }();
        t.Path2D = e,
        __reflect(e.prototype, "egret.sys.Path2D")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    function e() {
        var t = Object.create(null );
        return t.__v8__ = void 0,
        delete t.__v8__,
        t
    }
    t.createMap = e
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(i) {
            var r = e.call(this) || this;
            return r._bitmapX = 0,
            r._bitmapY = 0,
            r._textureMap = t.createMap(),
            r.$texture = i,
            r._bitmapX = i._bitmapX - i._offsetX,
            r._bitmapY = i._bitmapY - i._offsetY,
            r
        }
        return __extends(i, e),
        i.prototype.getTexture = function(t) {
            return this._textureMap[t]
        }
        ,
        i.prototype.createTexture = function(e, i, r, n, o, s, a, h, l) {
            void 0 === s && (s = 0),
            void 0 === a && (a = 0),
            void 0 === h && (h = s + n),
            void 0 === l && (l = a + o);
            var u = new t.Texture;
            return u._bitmapData = this.$texture._bitmapData,
            u.$initData(this._bitmapX + i, this._bitmapY + r, n, o, s, a, h, l, this.$texture._sourceWidth, this.$texture._sourceHeight),
            this._textureMap[e] = u,
            u
        }
        ,
        i.prototype.dispose = function() {
            this.$texture && this.$texture.dispose()
        }
        ,
        i
    }(t.HashObject);
    t.SpriteSheet = e,
    __reflect(e.prototype, "egret.SpriteSheet")
}(egret || (egret = {}));
var egret;
!function(t) {
    t.CapsStyle = {
        NONE: "none",
        ROUND: "round",
        SQUARE: "square"
    }
}(egret || (egret = {}));
var egret;
!function(t) {
    t.DirtyRegionPolicy = {
        OFF: "off",
        ON: "on"
    }
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function e() {}
        return e.compileProgram = function(i, r, n) {
            var o = e.compileFragmentShader(i, n)
              , s = e.compileVertexShader(i, r)
              , a = i.createProgram();
            return i.attachShader(a, s),
            i.attachShader(a, o),
            i.linkProgram(a),
            i.getProgramParameter(a, i.LINK_STATUS) || t.$warn(1020),
            a
        }
        ,
        e.compileFragmentShader = function(t, i) {
            return e._compileShader(t, i, t.FRAGMENT_SHADER)
        }
        ,
        e.compileVertexShader = function(t, i) {
            return e._compileShader(t, i, t.VERTEX_SHADER)
        }
        ,
        e._compileShader = function(t, e, i) {
            var r = t.createShader(i);
            return t.shaderSource(r, e),
            t.compileShader(r),
            t.getShaderParameter(r, t.COMPILE_STATUS) ? r : null
        }
        ,
        e.checkCanUseWebGL = function() {
            if (void 0 == e.canUseWebGL)
                try {
                    var t = document.createElement("canvas");
                    e.canUseWebGL = !(!window.WebGLRenderingContext || !t.getContext("webgl") && !t.getContext("experimental-webgl"))
                } catch (i) {
                    e.canUseWebGL = !1
                }
            return e.canUseWebGL
        }
        ,
        e.deleteWebGLTexture = function(t) {
            if (t) {
                var e = t.glContext;
                e && e.deleteTexture(t)
            }
        }
        ,
        e
    }();
    t.WebGLUtils = e,
    __reflect(e.prototype, "egret.WebGLUtils")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e(e, i, r) {
            return void 0 === i && (i = !1),
            void 0 === r && (r = !1),
            t.call(this, e, i, r) || this
        }
        return __extends(e, t),
        e
    }(t.Event);
    e.FOCUS_IN = "focusIn",
    e.FOCUS_OUT = "focusOut",
    t.FocusEvent = e,
    __reflect(e.prototype, "egret.FocusEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    }(t.Event);
    e.PERMISSION_DENIED = "permissionDenied",
    e.UNAVAILABLE = "unavailable",
    t.GeolocationEvent = e,
    __reflect(e.prototype, "egret.GeolocationEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(t, i, r) {
            void 0 === i && (i = !1),
            void 0 === r && (r = !1);
            var n = e.call(this, t, i, r) || this;
            return n._status = 0,
            n
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "status", {
            get: function() {
                return this._status
            },
            enumerable: !0,
            configurable: !0
        }),
        i.dispatchHTTPStatusEvent = function(e, r) {
            var n = t.Event.create(i, i.HTTP_STATUS);
            n._status = r;
            var o = e.dispatchEvent(n);
            return t.Event.release(n),
            o
        }
        ,
        i
    }(t.Event);
    e.HTTP_STATUS = "httpStatus",
    t.HTTPStatusEvent = e,
    __reflect(e.prototype, "egret.HTTPStatusEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(t, i, r) {
            return void 0 === i && (i = !1),
            void 0 === r && (r = !1),
            e.call(this, t, i, r) || this
        }
        return __extends(i, e),
        i.dispatchIOErrorEvent = function(e) {
            var r = t.Event.create(i, i.IO_ERROR)
              , n = e.dispatchEvent(r);
            return t.Event.release(r),
            n
        }
        ,
        i
    }(t.Event);
    e.IO_ERROR = "ioError",
    t.IOErrorEvent = e,
    __reflect(e.prototype, "egret.IOErrorEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    }(t.Event);
    t.MotionEvent = e,
    __reflect(e.prototype, "egret.MotionEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    }(t.Event);
    t.OrientationEvent = e,
    __reflect(e.prototype, "egret.OrientationEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(t, i, r, n, o) {
            void 0 === i && (i = !1),
            void 0 === r && (r = !1),
            void 0 === n && (n = 0),
            void 0 === o && (o = 0);
            var s = e.call(this, t, i, r) || this;
            return s.bytesLoaded = 0,
            s.bytesTotal = 0,
            s.bytesLoaded = n,
            s.bytesTotal = o,
            s
        }
        return __extends(i, e),
        i.dispatchProgressEvent = function(e, r, n, o) {
            void 0 === n && (n = 0),
            void 0 === o && (o = 0);
            var s = t.Event.create(i, r);
            s.bytesLoaded = n,
            s.bytesTotal = o;
            var a = e.dispatchEvent(s);
            return t.Event.release(s),
            a
        }
        ,
        i
    }(t.Event);
    e.PROGRESS = "progress",
    e.SOCKET_DATA = "socketData",
    t.ProgressEvent = e,
    __reflect(e.prototype, "egret.ProgressEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(t, i, r) {
            return void 0 === i && (i = !1),
            void 0 === r && (r = !1),
            e.call(this, t, i, r) || this
        }
        return __extends(i, e),
        i.dispatchStageOrientationEvent = function(e, r) {
            var n = t.Event.create(i, r)
              , o = e.dispatchEvent(n);
            return t.Event.release(n),
            o
        }
        ,
        i
    }(t.Event);
    e.ORIENTATION_CHANGE = "orientationChange",
    t.StageOrientationEvent = e,
    __reflect(e.prototype, "egret.StageOrientationEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(t, i, r, n) {
            void 0 === i && (i = !1),
            void 0 === r && (r = !1),
            void 0 === n && (n = "");
            var o = e.call(this, t, i, r) || this;
            return o.text = n,
            o
        }
        return __extends(i, e),
        i.dispatchTextEvent = function(e, r, n) {
            var o = t.Event.create(i, r);
            o.text = n;
            var s = e.dispatchEvent(o);
            return t.Event.release(o),
            s
        }
        ,
        i
    }(t.Event);
    e.LINK = "link",
    t.TextEvent = e,
    __reflect(e.prototype, "egret.TextEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(t, i, r) {
            return e.call(this, t, i, r) || this
        }
        return __extends(i, e),
        i.prototype.updateAfterEvent = function() {
            t.sys.$requestRenderingFlag = !0
        }
        ,
        i.dispatchTimerEvent = function(e, r, n, o) {
            var s = t.Event.create(i, r, n, o)
              , a = e.dispatchEvent(s);
            return t.Event.release(s),
            a
        }
        ,
        i
    }(t.Event);
    e.TIMER = "timer",
    e.TIMER_COMPLETE = "timerComplete",
    t.TimerEvent = e,
    __reflect(e.prototype, "egret.TimerEvent")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(t) {
            var i = e.call(this) || this;
            return i.format = "image",
            i.$deleteSource = !0,
            i.source = t,
            i.width = t.width,
            i.height = t.height,
            i
        }
        return __extends(i, e),
        i.create = function(e, r) {
            if (t.Capabilities.runtimeType === t.RuntimeType.WEB) {
                var n = "";
                n = "arraybuffer" === e ? t.Base64Util.encode(r) : r;
                var o = document.createElement("img");
                return o.src = "data:image/png;base64," + n,
                new i(o)
            }
            var s = null ;
            s = "arraybuffer" === e ? r : t.Base64Util.decode(r);
            var a = egret_native.Texture.createTextureFromArrayBuffer(s);
            return new i(a)
        }
        ,
        i.prototype.$dispose = function() {
            t.Capabilities.runtimeType == t.RuntimeType.WEB && "webgl" == t.Capabilities.renderMode && this.webGLTexture && (t.WebGLUtils.deleteWebGLTexture(this.webGLTexture),
            this.webGLTexture = null ),
            this.source && this.source.dispose && this.source.dispose(),
            this.source = null ,
            i.$dispose(this)
        }
        ,
        i.$addDisplayObject = function(t, e) {
            var r;
            if (r = e._bitmapData && e._bitmapData.hashCode ? e._bitmapData.hashCode : e.hashCode) {
                if (!i._displayList[r])
                    return void (i._displayList[r] = [t]);
                var n = i._displayList[r];
                n.indexOf(t) < 0 && n.push(t)
            }
        }
        ,
        i.$removeDisplayObject = function(t, e) {
            var r;
            if (r = e._bitmapData && e._bitmapData.hashCode ? e._bitmapData.hashCode : e.hashCode,
            r && i._displayList[r]) {
                var n = i._displayList[r]
                  , o = n.indexOf(t);
                o >= 0 && n.splice(o)
            }
        }
        ,
        i.$invalidate = function(e) {
            var r;
            if (r = e._bitmapData && e._bitmapData.hashCode ? e._bitmapData.hashCode : e.hashCode,
            r && i._displayList[r])
                for (var n = i._displayList[r], o = 0; o < n.length; o++)
                    n[o]instanceof t.Bitmap && n[o].$refreshImageData(),
                    n[o].$invalidateContentBounds()
        }
        ,
        i.$dispose = function(e) {
            var r;
            if (r = e._bitmapData && e._bitmapData.hashCode ? e._bitmapData.hashCode : e.hashCode,
            r && i._displayList[r]) {
                for (var n = i._displayList[r], o = 0, s = n; o < s.length; o++) {
                    var a = s[o];
                    a instanceof t.Bitmap && (a.$Bitmap[1] = null ),
                    a.$invalidateContentBounds()
                }
                delete i._displayList[r]
            }
        }
        ,
        i
    }(t.HashObject);
    e._displayList = t.createMap(),
    t.BitmapData = e,
    __reflect(e.prototype, "egret.BitmapData")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = new t.Point
      , i = function(i) {
        function r(t, e, r, n, o, s) {
            var a = i.call(this, t, e, r) || this;
            return a.targetChanged = !0,
            a.touchDown = !1,
            a.$initTo(n, o, s),
            a
        }
        return __extends(r, i),
        r.prototype.$initTo = function(t, e, i) {
            this.touchPointID = +i || 0,
            this.$stageX = +t || 0,
            this.$stageY = +e || 0
        }
        ,
        Object.defineProperty(r.prototype, "stageX", {
            get: function() {
                return this.$stageX
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "stageY", {
            get: function() {
                return this.$stageY
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "localX", {
            get: function() {
                return this.targetChanged && this.getLocalXY(),
                this._localX
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "localY", {
            get: function() {
                return this.targetChanged && this.getLocalXY(),
                this._localY
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.getLocalXY = function() {
            this.targetChanged = !1;
            var t = this.$target.$getInvertedConcatenatedMatrix();
            t.transformPoint(this.$stageX, this.$stageY, e),
            this._localX = e.x,
            this._localY = e.y
        }
        ,
        r.prototype.$setTarget = function(t) {
            return this.$target = t,
            this.targetChanged = !!t,
            !0
        }
        ,
        r.prototype.updateAfterEvent = function() {
            t.sys.$requestRenderingFlag = !0
        }
        ,
        r.dispatchTouchEvent = function(e, i, n, o, s, a, h, l) {
            if (void 0 === l && (l = !1),
            !n && !e.hasEventListener(i))
                return !0;
            var u = t.Event.create(r, i, n, o);
            u.$initTo(s, a, h),
            u.touchDown = l;
            var c = e.dispatchEvent(u);
            return t.Event.release(u),
            c
        }
        ,
        r
    }(t.Event);
    i.TOUCH_MOVE = "touchMove",
    i.TOUCH_BEGIN = "touchBegin",
    i.TOUCH_END = "touchEnd",
    i.TOUCH_CANCEL = "touchCancel",
    i.TOUCH_TAP = "touchTap",
    i.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside",
    i.TOUCH_ROLL_OUT = "touchRollOut",
    i.TOUCH_ROLL_OVER = "touchRollOver",
    t.TouchEvent = i,
    __reflect(i.prototype, "egret.TouchEvent")
}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e(e, i, r) {
            void 0 === e && (e = 4),
            void 0 === i && (i = 4),
            void 0 === r && (r = 1);
            var n = t.call(this) || this;
            return n.type = "blur",
            n.$blurX = e,
            n.$blurY = i,
            n.$quality = r,
            n
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "blurX", {
            get: function() {
                return this.$blurX
            },
            set: function(t) {
                this.$blurX != t && (this.$blurX = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "blurY", {
            get: function() {
                return this.$blurY
            },
            set: function(t) {
                this.$blurY != t && (this.$blurY = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.$toJson = function() {
            return '{"blurX": ' + this.$blurX + ', "blurY": ' + this.$blurY + ', "quality": 1}'
        }
        ,
        e
    }(t.Filter);
    t.BlurFilter = e,
    __reflect(e.prototype, "egret.BlurFilter")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e(e) {
            void 0 === e && (e = null );
            var i = t.call(this) || this;
            return i.$matrix = [],
            i.matrix2 = [],
            i.type = "colorTransform",
            i.setMatrix(e),
            i
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "matrix", {
            get: function() {
                for (var t = 0; 20 > t; t++)
                    this.matrix2[t] = this.$matrix[t];
                return this.matrix2
            },
            set: function(t) {
                this.setMatrix(t),
                this.invalidate()
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setMatrix = function(t) {
            if (t)
                for (var e = 0; 20 > e; e++)
                    this.$matrix[e] = t[e];
            else
                for (var e = 0; 20 > e; e++)
                    this.$matrix[e] = 0 == e || 6 == e || 12 == e || 18 == e ? 1 : 0
        }
        ,
        e.prototype.$toJson = function() {
            return '{"matrix": [' + this.$matrix.toString() + "]}"
        }
        ,
        e
    }(t.Filter);
    t.ColorMatrixFilter = e,
    __reflect(e.prototype, "egret.ColorMatrixFilter")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e(e, i, r, n, o, s, a, h, l, u, c) {
            void 0 === e && (e = 4),
            void 0 === i && (i = 45),
            void 0 === r && (r = 0),
            void 0 === n && (n = 1),
            void 0 === o && (o = 4),
            void 0 === s && (s = 4),
            void 0 === a && (a = 1),
            void 0 === h && (h = 1),
            void 0 === l && (l = !1),
            void 0 === u && (u = !1),
            void 0 === c && (c = !1);
            var p = t.call(this, r, n, o, s, a, h, l, u) || this;
            return p.$distance = e,
            p.$angle = i,
            p.$hideObject = c,
            p
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "distance", {
            get: function() {
                return this.$distance
            },
            set: function(t) {
                this.$distance != t && (this.$distance = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "angle", {
            get: function() {
                return this.$angle
            },
            set: function(t) {
                this.$angle != t && (this.$angle = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "hideObject", {
            get: function() {
                return this.$hideObject
            },
            set: function(t) {
                this.$hideObject != t && (this.$hideObject = t,
                this.invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.$toJson = function() {
            return '{"distance": ' + this.$distance + ', "angle": ' + this.$angle + ', "color": ' + this.$color + ', "red": ' + this.$red + ', "green": ' + this.$green + ', "blue": ' + this.$blue + ', "alpha": ' + this.$alpha + ', "blurX": ' + this.$blurX + ', "blurY": ' + this.blurY + ', "strength": ' + this.$strength + ', "quality": ' + this.$quality + ', "inner": ' + this.$inner + ', "knockout": ' + this.$knockout + ', "hideObject": ' + this.$hideObject + "}"
        }
        ,
        e
    }(t.GlowFilter);
    t.DropShadowFilter = e,
    __reflect(e.prototype, "egret.DropShadowFilter")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.LINEAR = "linear",
    e.RADIAL = "radial",
    t.GradientType = e,
    __reflect(e.prototype, "egret.GradientType")
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t) {
        return t %= 2 * Math.PI,
        0 > t && (t += 2 * Math.PI),
        t
    }
    var i = function(i) {
        function r() {
            var e = i.call(this) || this;
            return e.lastX = 0,
            e.lastY = 0,
            e.fillPath = null ,
            e.strokePath = null ,
            e.topLeftStrokeWidth = 0,
            e.bottomRightStrokeWidth = 0,
            e.minX = 1 / 0,
            e.minY = 1 / 0,
            e.maxX = -(1 / 0),
            e.maxY = -(1 / 0),
            e.includeLastPosition = !0,
            e.$renderNode = new t.sys.GraphicsNode,
            e
        }
        return __extends(r, i),
        r.prototype.$setTarget = function(t) {
            this.targetDisplay && (this.targetDisplay.$renderNode = null ),
            t.$renderNode = this.$renderNode,
            this.targetDisplay = t
        }
        ,
        r.prototype.setStrokeWidth = function(t) {
            switch (t) {
            case 1:
                this.topLeftStrokeWidth = 0,
                this.bottomRightStrokeWidth = 1;
                break;
            case 3:
                this.topLeftStrokeWidth = 1,
                this.bottomRightStrokeWidth = 2;
                break;
            default:
                var e = 0 | Math.ceil(.5 * t);
                this.topLeftStrokeWidth = e,
                this.bottomRightStrokeWidth = e
            }
        }
        ,
        r.prototype.beginFill = function(t, e) {
            void 0 === e && (e = 1),
            t = +t || 0,
            e = +e || 0,
            this.fillPath = this.$renderNode.beginFill(t, e, this.strokePath),
            this.$renderNode.drawData.length > 1 && this.fillPath.moveTo(this.lastX, this.lastY)
        }
        ,
        r.prototype.beginGradientFill = function(t, e, i, r, n) {
            void 0 === n && (n = null ),
            this.fillPath = this.$renderNode.beginGradientFill(t, e, i, r, n, this.strokePath),
            this.$renderNode.drawData.length > 1 && this.fillPath.moveTo(this.lastX, this.lastY)
        }
        ,
        r.prototype.endFill = function() {
            this.fillPath = null
        }
        ,
        r.prototype.lineStyle = function(t, e, i, r, n, o, s, a) {
            void 0 === t && (t = 0 / 0),
            void 0 === e && (e = 0),
            void 0 === i && (i = 1),
            void 0 === r && (r = !1),
            void 0 === n && (n = "normal"),
            void 0 === o && (o = null ),
            void 0 === s && (s = null ),
            void 0 === a && (a = 3),
            t = +t || 0,
            0 >= t ? (this.strokePath = null ,
            this.setStrokeWidth(0)) : (e = +e || 0,
            i = +i || 0,
            a = +a || 0,
            this.setStrokeWidth(t),
            this.strokePath = this.$renderNode.lineStyle(t, e, i, o, s, a),
            this.$renderNode.drawData.length > 1 && this.strokePath.moveTo(this.lastX, this.lastY))
        }
        ,
        r.prototype.drawRect = function(t, e, i, r) {
            t = +t || 0,
            e = +e || 0,
            i = +i || 0,
            r = +r || 0;
            var n = this.fillPath
              , o = this.strokePath;
            n && n.drawRect(t, e, i, r),
            o && o.drawRect(t, e, i, r),
            this.extendBoundsByPoint(t + i, e + r),
            this.updatePosition(t, e),
            this.$renderNode.dirtyRender = !0
        }
        ,
        r.prototype.drawRoundRect = function(t, e, i, r, n, o) {
            t = +t || 0,
            e = +e || 0,
            i = +i || 0,
            r = +r || 0,
            n = +n || 0,
            o = +o || 0;
            var s = this.fillPath
              , a = this.strokePath;
            s && s.drawRoundRect(t, e, i, r, n, o),
            a && a.drawRoundRect(t, e, i, r, n, o);
            var h = .5 * n | 0
              , l = o ? .5 * o | 0 : h
              , u = t + i
              , c = e + r
              , p = c - l;
            this.extendBoundsByPoint(t, e),
            this.extendBoundsByPoint(u, c),
            this.updatePosition(u, p),
            this.$renderNode.dirtyRender = !0
        }
        ,
        r.prototype.drawCircle = function(t, e, i) {
            t = +t || 0,
            e = +e || 0,
            i = +i || 0;
            var r = this.fillPath
              , n = this.strokePath;
            r && r.drawCircle(t, e, i),
            n && n.drawCircle(t, e, i),
            this.extendBoundsByPoint(t - i, e - i),
            this.extendBoundsByPoint(t + i, e + i),
            this.updatePosition(t + i, e),
            this.$renderNode.dirtyRender = !0
        }
        ,
        r.prototype.drawEllipse = function(t, e, i, r) {
            t = +t || 0,
            e = +e || 0,
            i = +i || 0,
            r = +r || 0;
            var n = this.fillPath
              , o = this.strokePath;
            n && n.drawEllipse(t, e, i, r),
            o && o.drawEllipse(t, e, i, r),
            this.extendBoundsByPoint(t, e),
            this.extendBoundsByPoint(t + i, e + r),
            this.updatePosition(t + i, e + .5 * r),
            this.$renderNode.dirtyRender = !0
        }
        ,
        r.prototype.moveTo = function(t, e) {
            t = +t || 0,
            e = +e || 0;
            var i = this.fillPath
              , r = this.strokePath;
            i && i.moveTo(t, e),
            r && r.moveTo(t, e),
            this.includeLastPosition = !1,
            this.lastX = t,
            this.lastY = e,
            this.$renderNode.dirtyRender = !0
        }
        ,
        r.prototype.lineTo = function(t, e) {
            t = +t || 0,
            e = +e || 0;
            var i = this.fillPath
              , r = this.strokePath;
            i && i.lineTo(t, e),
            r && r.lineTo(t, e),
            this.updatePosition(t, e),
            this.$renderNode.dirtyRender = !0
        }
        ,
        r.prototype.curveTo = function(t, e, i, r) {
            t = +t || 0,
            e = +e || 0,
            i = +i || 0,
            r = +r || 0;
            var n = this.fillPath
              , o = this.strokePath;
            n && n.curveTo(t, e, i, r),
            o && o.curveTo(t, e, i, r),
            this.extendBoundsByPoint(t, e),
            this.extendBoundsByPoint(i, r),
            this.updatePosition(i, r),
            this.$renderNode.dirtyRender = !0
        }
        ,
        r.prototype.cubicCurveTo = function(t, e, i, r, n, o) {
            t = +t || 0,
            e = +e || 0,
            i = +i || 0,
            r = +r || 0,
            n = +n || 0,
            o = +o || 0;
            var s = this.fillPath
              , a = this.strokePath;
            s && s.cubicCurveTo(t, e, i, r, n, o),
            a && a.cubicCurveTo(t, e, i, r, n, o),
            this.extendBoundsByPoint(t, e),
            this.extendBoundsByPoint(i, r),
            this.extendBoundsByPoint(n, o),
            this.updatePosition(n, o),
            this.$renderNode.dirtyRender = !0
        }
        ,
        r.prototype.drawArc = function(t, i, r, n, o, s) {
            if (!(0 > r || n === o)) {
                t = +t || 0,
                i = +i || 0,
                r = +r || 0,
                n = +n || 0,
                o = +o || 0,
                s = !!s,
                n = e(n),
                o = e(o);
                var a = this.fillPath
                  , h = this.strokePath;
                a && (a.$lastX = this.lastX,
                a.$lastY = this.lastY,
                a.drawArc(t, i, r, n, o, s)),
                h && (h.$lastX = this.lastX,
                h.$lastY = this.lastY,
                h.drawArc(t, i, r, n, o, s)),
                s ? this.arcBounds(t, i, r, o, n) : this.arcBounds(t, i, r, n, o);
                var l = t + Math.cos(o) * r
                  , u = i + Math.sin(o) * r;
                this.updatePosition(l, u),
                this.$renderNode.dirtyRender = !0
            }
        }
        ,
        r.prototype.arcBounds = function(t, e, i, r, n) {
            var o = Math.PI;
            if (Math.abs(r - n) < .01)
                return this.extendBoundsByPoint(t - i, e - i),
                void this.extendBoundsByPoint(t + i, e + i);
            r > n && (n += 2 * o);
            for (var s = Math.cos(r) * i, a = Math.cos(n) * i, h = Math.min(s, a), l = Math.max(s, a), u = Math.sin(r) * i, c = Math.sin(n) * i, p = Math.min(u, c), d = Math.max(u, c), f = r / (.5 * o), g = n / (.5 * o), y = Math.ceil(f); g >= y; y++)
                switch (y % 4) {
                case 0:
                    l = i;
                    break;
                case 1:
                    d = i;
                    break;
                case 2:
                    h = -i;
                    break;
                case 3:
                    p = -i
                }
            h = Math.floor(h),
            p = Math.floor(p),
            l = Math.ceil(l),
            d = Math.ceil(d),
            this.extendBoundsByPoint(h + t, p + e),
            this.extendBoundsByPoint(l + t, d + e)
        }
        ,
        r.prototype.clear = function() {
            this.$renderNode.clear(),
            this.updatePosition(0, 0),
            this.minX = 1 / 0,
            this.minY = 1 / 0,
            this.maxX = -(1 / 0),
            this.maxY = -(1 / 0)
        }
        ,
        r.prototype.extendBoundsByPoint = function(t, e) {
            this.extendBoundsByX(t),
            this.extendBoundsByY(e)
        }
        ,
        r.prototype.extendBoundsByX = function(t) {
            this.minX = Math.min(this.minX, t - this.topLeftStrokeWidth),
            this.maxX = Math.max(this.maxX, t + this.bottomRightStrokeWidth),
            this.updateNodeBounds()
        }
        ,
        r.prototype.extendBoundsByY = function(t) {
            this.minY = Math.min(this.minY, t - this.topLeftStrokeWidth),
            this.maxY = Math.max(this.maxY, t + this.bottomRightStrokeWidth),
            this.updateNodeBounds()
        }
        ,
        r.prototype.updateNodeBounds = function() {
            var t = this.$renderNode;
            t.x = this.minX,
            t.y = this.minY,
            t.width = Math.ceil(this.maxX - this.minX),
            t.height = Math.ceil(this.maxY - this.minY)
        }
        ,
        r.prototype.updatePosition = function(t, e) {
            this.includeLastPosition || (this.extendBoundsByPoint(this.lastX, this.lastY),
            this.includeLastPosition = !0),
            this.lastX = t,
            this.lastY = e,
            this.extendBoundsByPoint(t, e),
            this.targetDisplay.$invalidateContentBounds()
        }
        ,
        r.prototype.$measureContentBounds = function(t) {
            this.minX === 1 / 0 ? t.setEmpty() : t.setTo(this.minX, this.minY, this.maxX - this.minX, this.maxY - this.minY)
        }
        ,
        r.prototype.$hitTest = function(e, i) {
            var r = this.targetDisplay
              , n = r.$getInvertedConcatenatedMatrix()
              , o = n.a * e + n.c * i + n.tx
              , s = n.b * e + n.d * i + n.ty
              , a = t.sys.canvasHitTestBuffer;
            a.resize(3, 3);
            var h = this.$renderNode
              , l = t.Matrix.create();
            l.identity(),
            l.translate(1 - o, 1 - s),
            t.sys.canvasRenderer.drawNodeToBuffer(h, a, l, !0),
            t.Matrix.release(l);
            try {
                var u = a.getPixels(1, 1);
                if (0 === u[3])
                    return null
            } catch (c) {
                throw new Error(t.sys.tr(1039))
            }
            return r
        }
        ,
        r.prototype.$onRemoveFromStage = function() {
            this.$renderNode && this.$renderNode.clean()
        }
        ,
        r
    }(t.HashObject);
    t.Graphics = i,
    __reflect(i.prototype, "egret.Graphics")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = Math.PI
      , i = 2 * e
      , r = e / 180
      , n = []
      , o = function(o) {
        function s(t, e, i, r, n, s) {
            void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === i && (i = 0),
            void 0 === r && (r = 1),
            void 0 === n && (n = 0),
            void 0 === s && (s = 0);
            var a = o.call(this) || this;
            return a.a = t,
            a.b = e,
            a.c = i,
            a.d = r,
            a.tx = n,
            a.ty = s,
            a
        }
        return __extends(s, o),
        s.release = function(t) {
            t && n.push(t)
        }
        ,
        s.create = function() {
            var t = n.pop();
            return t || (t = new s),
            t
        }
        ,
        s.prototype.clone = function() {
            return new s(this.a,this.b,this.c,this.d,this.tx,this.ty)
        }
        ,
        s.prototype.concat = function(t) {
            var e = this.a * t.a
              , i = 0
              , r = 0
              , n = this.d * t.d
              , o = this.tx * t.a + t.tx
              , s = this.ty * t.d + t.ty;
            (0 !== this.b || 0 !== this.c || 0 !== t.b || 0 !== t.c) && (e += this.b * t.c,
            n += this.c * t.b,
            i += this.a * t.b + this.b * t.d,
            r += this.c * t.a + this.d * t.c,
            o += this.ty * t.c,
            s += this.tx * t.b),
            this.a = e,
            this.b = i,
            this.c = r,
            this.d = n,
            this.tx = o,
            this.ty = s
        }
        ,
        s.prototype.copyFrom = function(t) {
            return this.a = t.a,
            this.b = t.b,
            this.c = t.c,
            this.d = t.d,
            this.tx = t.tx,
            this.ty = t.ty,
            this
        }
        ,
        s.prototype.identity = function() {
            this.a = this.d = 1,
            this.b = this.c = this.tx = this.ty = 0
        }
        ,
        s.prototype.invert = function() {
            this.$invertInto(this)
        }
        ,
        s.prototype.$invertInto = function(t) {
            var e = this.a
              , i = this.b
              , r = this.c
              , n = this.d
              , o = this.tx
              , s = this.ty;
            if (0 == i && 0 == r)
                return t.b = t.c = 0,
                void (0 == e || 0 == n ? t.a = t.d = t.tx = t.ty = 0 : (e = t.a = 1 / e,
                n = t.d = 1 / n,
                t.tx = -e * o,
                t.ty = -n * s));
            var a = e * n - i * r;
            if (0 == a)
                return void t.identity();
            a = 1 / a;
            var h = t.a = n * a;
            i = t.b = -i * a,
            r = t.c = -r * a,
            n = t.d = e * a,
            t.tx = -(h * o + r * s),
            t.ty = -(i * o + n * s)
        }
        ,
        s.prototype.rotate = function(e) {
            if (e = +e,
            0 !== e) {
                e /= r;
                var i = t.NumberUtils.cos(e)
                  , n = t.NumberUtils.sin(e)
                  , o = this.a
                  , s = this.b
                  , a = this.c
                  , h = this.d
                  , l = this.tx
                  , u = this.ty;
                this.a = o * i - s * n,
                this.b = o * n + s * i,
                this.c = a * i - h * n,
                this.d = a * n + h * i,
                this.tx = l * i - u * n,
                this.ty = l * n + u * i
            }
        }
        ,
        s.prototype.scale = function(t, e) {
            1 !== t && (this.a *= t,
            this.c *= t,
            this.tx *= t),
            1 !== e && (this.b *= e,
            this.d *= e,
            this.ty *= e)
        }
        ,
        s.prototype.setTo = function(t, e, i, r, n, o) {
            return this.a = t,
            this.b = e,
            this.c = i,
            this.d = r,
            this.tx = n,
            this.ty = o,
            this
        }
        ,
        s.prototype.transformPoint = function(e, i, r) {
            var n = this.a * e + this.c * i + this.tx
              , o = this.b * e + this.d * i + this.ty;
            return r ? (r.setTo(n, o),
            r) : new t.Point(n,o)
        }
        ,
        s.prototype.translate = function(t, e) {
            this.tx += t,
            this.ty += e
        }
        ,
        s.prototype.equals = function(t) {
            return this.a == t.a && this.b == t.b && this.c == t.c && this.d == t.d && this.tx == t.tx && this.ty == t.ty
        }
        ,
        s.prototype.prepend = function(t, e, i, r, n, o) {
            var s = this.tx;
            if (1 != t || 0 != e || 0 != i || 1 != r) {
                var a = this.a
                  , h = this.c;
                this.a = a * t + this.b * i,
                this.b = a * e + this.b * r,
                this.c = h * t + this.d * i,
                this.d = h * e + this.d * r
            }
            return this.tx = s * t + this.ty * i + n,
            this.ty = s * e + this.ty * r + o,
            this
        }
        ,
        s.prototype.append = function(t, e, i, r, n, o) {
            var s = this.a
              , a = this.b
              , h = this.c
              , l = this.d;
            return (1 != t || 0 != e || 0 != i || 1 != r) && (this.a = t * s + e * h,
            this.b = t * a + e * l,
            this.c = i * s + r * h,
            this.d = i * a + r * l),
            this.tx = n * s + o * h + this.tx,
            this.ty = n * a + o * l + this.ty,
            this
        }
        ,
        s.prototype.deltaTransformPoint = function(e) {
            var i = this
              , r = i.a * e.x + i.c * e.y
              , n = i.b * e.x + i.d * e.y;
            return new t.Point(r,n)
        }
        ,
        s.prototype.toString = function() {
            return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")"
        }
        ,
        s.prototype.createBox = function(e, i, n, o, s) {
            void 0 === n && (n = 0),
            void 0 === o && (o = 0),
            void 0 === s && (s = 0);
            var a = this;
            if (0 !== n) {
                n /= r;
                var h = t.NumberUtils.cos(n)
                  , l = t.NumberUtils.sin(n);
                a.a = h * e,
                a.b = l * i,
                a.c = -l * e,
                a.d = h * i
            } else
                a.a = e,
                a.b = 0,
                a.c = 0,
                a.d = i;
            a.tx = o,
            a.ty = s
        }
        ,
        s.prototype.createGradientBox = function(t, e, i, r, n) {
            void 0 === i && (i = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            this.createBox(t / 1638.4, e / 1638.4, i, r + t / 2, n + e / 2)
        }
        ,
        s.prototype.$transformBounds = function(t) {
            var e = this.a
              , i = this.b
              , r = this.c
              , n = this.d
              , o = this.tx
              , s = this.ty
              , a = t.x
              , h = t.y
              , l = a + t.width
              , u = h + t.height
              , c = e * a + r * h + o
              , p = i * a + n * h + s
              , d = e * l + r * h + o
              , f = i * l + n * h + s
              , g = e * l + r * u + o
              , y = i * l + n * u + s
              , v = e * a + r * u + o
              , $ = i * a + n * u + s
              , m = 0;
            c > d && (m = c,
            c = d,
            d = m),
            g > v && (m = g,
            g = v,
            v = m),
            t.x = Math.floor(g > c ? c : g),
            t.width = Math.ceil((d > v ? d : v) - t.x),
            p > f && (m = p,
            p = f,
            f = m),
            y > $ && (m = y,
            y = $,
            $ = m),
            t.y = Math.floor(y > p ? p : y),
            t.height = Math.ceil((f > $ ? f : $) - t.y)
        }
        ,
        s.prototype.getDeterminant = function() {
            return this.a * this.d - this.b * this.c
        }
        ,
        s.prototype.$getScaleX = function() {
            var t = this;
            if (1 == t.a && 0 == t.b)
                return 1;
            var e = Math.sqrt(t.a * t.a + t.b * t.b);
            return this.getDeterminant() < 0 ? -e : e
        }
        ,
        s.prototype.$getScaleY = function() {
            var t = this;
            if (0 == t.c && 1 == t.d)
                return 1;
            var e = Math.sqrt(t.c * t.c + t.d * t.d);
            return this.getDeterminant() < 0 ? -e : e
        }
        ,
        s.prototype.$getSkewX = function() {
            return Math.atan2(this.d, this.c) - e / 2
        }
        ,
        s.prototype.$getSkewY = function() {
            return Math.atan2(this.b, this.a)
        }
        ,
        s.prototype.$updateScaleAndRotation = function(e, n, o, s) {
            if (!(0 != o && o != i || 0 != s && s != i))
                return this.a = e,
                this.b = this.c = 0,
                void (this.d = n);
            o /= r,
            s /= r;
            var a = t.NumberUtils.cos(o)
              , h = t.NumberUtils.sin(o);
            o == s ? (this.a = a * e,
            this.b = h * e) : (this.a = t.NumberUtils.cos(s) * e,
            this.b = t.NumberUtils.sin(s) * e),
            this.c = -h * n,
            this.d = a * n
        }
        ,
        s.prototype.$preMultiplyInto = function(t, e) {
            var i = t.a * this.a
              , r = 0
              , n = 0
              , o = t.d * this.d
              , s = t.tx * this.a + this.tx
              , a = t.ty * this.d + this.ty;
            (0 !== t.b || 0 !== t.c || 0 !== this.b || 0 !== this.c) && (i += t.b * this.c,
            o += t.c * this.b,
            r += t.a * this.b + t.b * this.d,
            n += t.c * this.a + t.d * this.c,
            s += t.ty * this.c,
            a += t.tx * this.b),
            e.a = i,
            e.b = r,
            e.c = n,
            e.d = o,
            e.tx = s,
            e.ty = a
        }
        ,
        s
    }(t.HashObject);
    t.Matrix = o,
    __reflect(o.prototype, "egret.Matrix"),
    t.$TempMatrix = new o
}(egret || (egret = {}));
var egret;
!function(t) {
    t.JointStyle = {
        BEVEL: "bevel",
        MITER: "miter",
        ROUND: "round"
    }
}(egret || (egret = {}));
var egret;
!function(t) {
    t.$locale_strings = t.$locale_strings || {},
    t.$locale_strings.en_US = t.$locale_strings.en_US || {};
    var e = t.$locale_strings.en_US;
    e[1001] = "Could not find Egret entry class: {0}。",
    e[1002] = "Egret entry class '{0}' must inherit from egret.DisplayObject.",
    e[1003] = "Parameter {0} must be non-null.",
    e[1004] = "An object cannot be added as a child to one of it's children (or children's children, etc.).",
    e[1005] = "An object cannot be added as a child of itself.",
    e[1006] = "The supplied DisplayObject must be a child of the caller.",
    e[1007] = "An index specified for a parameter was out of range.",
    e[1008] = "Instantiate singleton error，singleton class {0} can not create multiple instances.",
    e[1009] = 'the Class {0} cannot use the property "{1}"',
    e[1010] = 'the property "{1}" of the Class "{0}" is readonly',
    e[1011] = "Stream Error. URL: {0}",
    e[1012] = "The type of parameter {0} must be Class.",
    e[1013] = "Variable assignment is NaN, please see the code!",
    e[1014] = 'the constant "{1}" of the Class "{0}" is read-only',
    e[1015] = "xml not found!",
    e[1016] = "{0}has been obsoleted",
    e[1017] = "The format of JSON file is incorrect: {0}\ndata: {1}",
    e[1018] = "the scale9Grid is not correct",
    e[1019] = "Network ab:{0}",
    e[1020] = "Cannot initialize Shader",
    e[1021] = "Current browser does not support webgl",
    e[1022] = "{0} ArgumentError",
    e[1023] = "This method is not available in the ScrollView!",
    e[1025] = "end of the file",
    e[1026] = "! EncodingError The code point {0} could not be encoded.",
    e[1027] = "DecodingError",
    e[1028] = ". called injection is not configured rule: {0}, please specify configuration during its initial years of injection rule, and then call the corresponding single case.",
    e[1029] = "Function.prototype.bind - what is trying to be bound is not callable",
    e[1033] = "Photos can not be used across domains toDataURL to convert base64",
    e[1034] = 'Music file decoding failed: "{0}", please use the standard conversion tool reconversion under mp3.',
    e[1035] = "Native does not support this feature!",
    e[1036] = "Sound has stopped, please recall Sound.play () to play the sound!",
    e[1037] = "Non-load the correct blob!",
    e[1038] = "XML format error!",
    e[1039] = "Cross domains pictures can not get pixel information!",
    e[1040] = "hitTestPoint can not detect crossOrigin images! Please check if the display object has crossOrigin elements.",
    e[1041] = "{0} is deprecated, please use {1} replace",
    e[1042] = "The parameters passed in the region needs is an integer in drawToTexture method. Otherwise, some browsers will draw abnormal.",
    e[1043] = "Compile errors in {0}, the attribute name: {1}, the attribute value: {2}.",
    e[1044] = "The current version of the Runtime does not support video playback, please use the latest version",
    e[1045] = "The resource url is not found",
    e[1046] = "BitmapText no corresponding characters: {0}, please check the configuration file",
    e[1047] = "egret.localStorage.setItem save failed,key={0}&value={1}",
    e[1048] = "Video loading failed",
    e[1049] = "In the absence of sound is not allowed to play after loading",
    e[1050] = "ExternalInterface calls the method without js registration: {0}",
    e[3e3] = "Theme configuration file failed to load: {0}",
    e[3001] = "Cannot find the skin name which is configured in Theme: {0}",
    e[3002] = 'Index:"{0}" is out of the collection element index range',
    e[3003] = "Cannot be available in this component. If this component is container, please continue to use",
    e[3004] = "addChild(){0}addElement() replace",
    e[3005] = "addChildAt(){0}addElementAt() replace",
    e[3006] = "removeChild(){0}removeElement() replace",
    e[3007] = "removeChildAt(){0}removeElementAt() replace",
    e[3008] = "setChildIndex(){0}setElementIndex() replace",
    e[3009] = "swapChildren(){0}swapElements() replace",
    e[3010] = "swapChildrenAt(){0}swapElementsAt() replace",
    e[3011] = 'Index:"{0}" is out of the visual element index range',
    e[3012] = "This method is not available in Scroller component!",
    e[3013] = "UIStage is GUI root container, and only one such instant is in the display list！",
    e[3014] = "set fullscreen error",
    e[3100] = "Current browser does not support WebSocket",
    e[3101] = "Please connect Socket firstly",
    e[3102] = "Please set the type of binary type",
    e[4e3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)",
    e[4001] = "Abstract class can not be instantiated!",
    e[4002] = "Unnamed data!",
    e[4003] = "Nonsupport version!"
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i(i) {
            var r = e.call(this, i) || this;
            return r._verticesDirty = !0,
            r._bounds = new t.Rectangle,
            r.$renderNode = new t.sys.MeshNode,
            r
        }
        return __extends(i, e),
        i.prototype.$render = function() {
            var e = this.$Bitmap
              , i = e[1];
            if (i) {
                var r = (t.$TextureScaleFactor,
                this.$renderNode);
                r.smoothing = e[10],
                r.image = i,
                r.imageWidth = e[13],
                r.imageHeight = e[14];
                var n = isNaN(e[11]) ? e[8] : e[11]
                  , o = isNaN(e[12]) ? e[9] : e[12]
                  , s = n / e[8]
                  , a = o / e[9]
                  , h = e[4]
                  , l = e[5];
                r.drawMesh(e[2], e[3], h, l, e[6] * s, e[7] * a, s * h, a * l)
            }
        }
        ,
        i.prototype.$updateVertices = function() {
            this._verticesDirty = !0,
            this.$invalidateContentBounds()
        }
        ,
        i.prototype.$measureContentBounds = function(t) {
            if (this._verticesDirty) {
                this._verticesDirty = !1;
                var e = this.$renderNode
                  , i = e.vertices;
                if (i.length) {
                    this._bounds.setTo(Number.MAX_VALUE, Number.MAX_VALUE, Number.MIN_VALUE, Number.MIN_VALUE);
                    for (var r = 0, n = i.length; n > r; r += 2) {
                        var o = i[r]
                          , s = i[r + 1];
                        this._bounds.x > o && (this._bounds.x = o),
                        this._bounds.width < o && (this._bounds.width = o),
                        this._bounds.y > s && (this._bounds.y = s),
                        this._bounds.height < s && (this._bounds.height = s)
                    }
                    this._bounds.width -= this._bounds.x,
                    this._bounds.height -= this._bounds.y
                } else
                    this._bounds.setTo(0, 0, 0, 0);
                e.bounds.copyFrom(this._bounds)
            }
            t.copyFrom(this._bounds)
        }
        ,
        i
    }(t.Bitmap);
    t.Mesh = e,
    __reflect(e.prototype, "egret.Mesh")
}(egret || (egret = {}));
var egret;
!function(t) {
    t.$locale_strings = t.$locale_strings || {},
    t.$locale_strings.zh_CN = t.$locale_strings.zh_CN || {};
    var e = t.$locale_strings.zh_CN;
    e[1001] = "找不到Egret入口类: {0}。",
    e[1002] = "Egret入口类 {0} 必须继承自egret.DisplayObject。",
    e[1003] = "参数 {0} 不能为 null。",
    e[1004] = "无法将对象添加为它的一个子对象（或子对象的子对象等）的子对象。",
    e[1005] = "不能将对象添加为其自身的子对象。",
    e[1006] = "提供的 DisplayObject 必须是调用者的子级。",
    e[1007] = "为参数指定的索引不在范围内。",
    e[1008] = "实例化单例出错，不允许实例化多个 {0} 对象。",
    e[1009] = "类 {0} 不可以使用属性 {1}",
    e[1010] = "类 {0} 属性 {1} 是只读的",
    e[1011] = "流错误。URL: {0}",
    e[1012] = "参数 {0} 的类型必须为 Class。",
    e[1013] = "变量赋值为NaN，请查看代码！",
    e[1014] = "类 {0} 常量 {1} 是只读的",
    e[1015] = "xml not found!",
    e[1016] = "{0}已经废弃",
    e[1017] = "JSON文件格式不正确: {0}\ndata: {1}",
    e[1018] = "9宫格设置错误",
    e[1019] = "网络异常:{0}",
    e[1020] = "无法初始化着色器",
    e[1021] = "当前浏览器不支持webgl",
    e[1022] = "{0} ArgumentError",
    e[1023] = "此方法在ScrollView内不可用!",
    e[1025] = "遇到文件尾",
    e[1026] = "EncodingError! The code point {0} could not be encoded.",
    e[1027] = "DecodingError",
    e[1028] = "调用了未配置的注入规则:{0}。 请先在项目初始化里配置指定的注入规则，再调用对应单例。",
    e[1029] = "Function.prototype.bind - what is trying to be bound is not callable",
    e[1033] = "跨域图片不可以使用toDataURL来转换成base64",
    e[1034] = '音乐文件解码失败："{0}"，请使用标准的转换工具重新转换下mp3。',
    e[1035] = "Native 下暂未实现此功能！",
    e[1036] = "声音已停止，请重新调用 Sound.play() 来播放声音！",
    e[1037] = "非正确的blob加载！",
    e[1038] = "XML 格式错误!",
    e[1039] = "跨域图片不能获取像素信息!",
    e[1040] = "hitTestPoint 不能对跨域图片进行检测! 请检查该显示对象内是否含有跨域元素",
    e[1041] = "{0} 已废弃,请使用 {1} 代替",
    e[1042] = "drawToTexture方法传入的区域各个参数需要为整数,否则某些浏览器绘制会出现异常",
    e[1043] = "{0} 中存在编译错误，属性名 : {1}，属性值 : {2}",
    e[1044] = "当前的 runtime 版本不支持视频播放,请使用最新的版本",
    e[1045] = "没有设置要加载的资源地址",
    e[1046] = "BitmapText 找不到对应字符:{0}，请检查配置文件",
    e[1047] = "egret.localStorage.setItem保存失败,key={0}&value={1}",
    e[1048] = "视频加载失败",
    e[1049] = "声音在没有加载完之前不允许播放",
    e[1050] = "ExternalInterface调用了js没有注册的方法: {0}",
    e[3e3] = "主题配置文件加载失败: {0}",
    e[3001] = "找不到主题中所配置的皮肤类名: {0}",
    e[3002] = '索引:"{0}"超出集合元素索引范围',
    e[3003] = "在此组件中不可用，若此组件为容器类，请使用",
    e[3004] = "addChild(){0}addElement()代替",
    e[3005] = "addChildAt(){0}addElementAt()代替",
    e[3006] = "removeChild(){0}removeElement()代替",
    e[3007] = "removeChildAt(){0}removeElementAt()代替",
    e[3008] = "setChildIndex(){0}setElementIndex()代替",
    e[3009] = "swapChildren(){0}swapElements()代替",
    e[3010] = "swapChildrenAt(){0}swapElementsAt()代替",
    e[3011] = '索引:"{0}"超出可视元素索引范围',
    e[3012] = "此方法在Scroller组件内不可用!",
    e[3013] = "UIStage是GUI根容器，只能有一个此实例在显示列表中！",
    e[3014] = "设置全屏模式失败",
    e[3100] = "当前浏览器不支持WebSocket",
    e[3101] = "请先连接WebSocket",
    e[3102] = "请先设置type为二进制类型",
    e[4e3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)",
    e[4001] = "Abstract class can not be instantiated!",
    e[4002] = "Unnamed data!",
    e[4003] = "Nonsupport version!"
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {}(e = t.localStorage || (t.localStorage = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    function e() {
        return new Promise(function(e, i) {
            if (t.Capabilities.runtimeType === t.RuntimeType.NATIVE) {
                var r = t.PromiseObject.create();
                r.onSuccessFunc = function(t) {
                    e(t)
                }
                ,
                egret_native.pickPhoto(r)
            } else {
                var n = document.createElement("input");
                n.type = "file",
                n.accept = "image/*",
                n.onchange = function(t) {
                    function r(t) {
                        if (200 === Number(this.status)) {
                            var r = this.response
                              , n = new FileReader;
                            n.onload = function() {
                                e(this.result)
                            }
                            ,
                            n.readAsArrayBuffer(r)
                        } else
                            Number(this.status) >= 400 && i("faild with status" + this.status)
                    }
                    var n = t.currentTarget.files
                      , o = window.URL.createObjectURL(n[0])
                      , s = (new Image,
                    new XMLHttpRequest);
                    s.open("GET", o, !0),
                    s.responseType = "blob",
                    s.onload = r,
                    s.send()
                }
                ;
                var o = document.createEvent("MouseEvents");
                o.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null ),
                n.dispatchEvent(o)
            }
        }
        )
    }
    t.pickPhoto = e
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        function e(t) {
            r.indexOf(t) < 0 && r.push(t)
        }
        function i(t) {
            var e = r.indexOf(t);
            return e >= 0 ? (r.splice(e, 1),
            !0) : !1
        }
        var r = [];
        t.$pushSoundChannel = e,
        t.$popSoundChannel = i
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {})),
function(t) {}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function e() {
            this.onSuccessFunc = null ,
            this.onSuccessThisObject = null ,
            this.onErrorFunc = null ,
            this.onErrorThisObject = null ,
            this.downloadingSizeFunc = null ,
            this.downloadingSizeThisObject = null ,
            this.onResponseHeaderFunc = null ,
            this.onResponseHeaderThisObject = null
        }
        return e.create = function() {
            return e.promiseObjectList.length ? e.promiseObjectList.pop() : new t.PromiseObject
        }
        ,
        e.prototype.onSuccess = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this.onSuccessFunc && this.onSuccessFunc.apply(this.onSuccessThisObject, t),
            this.destroy()
        }
        ,
        e.prototype.onError = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this.onErrorFunc && this.onErrorFunc.apply(this.onErrorThisObject, t),
            this.destroy()
        }
        ,
        e.prototype.downloadingSize = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this.downloadingSizeFunc && this.downloadingSizeFunc.apply(this.downloadingSizeThisObject, t)
        }
        ,
        e.prototype.onResponseHeader = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            this.onResponseHeaderFunc && this.onResponseHeaderFunc.apply(this.onResponseHeaderThisObject, t)
        }
        ,
        e.prototype.destroy = function() {
            this.onSuccessFunc = void 0,
            this.onSuccessThisObject = void 0,
            this.onErrorFunc = void 0,
            this.onErrorThisObject = void 0,
            this.downloadingSizeFunc = void 0,
            this.downloadingSizeThisObject = void 0,
            this.onResponseHeaderFunc = void 0,
            this.onResponseHeaderThisObject = void 0,
            e.promiseObjectList.push(this)
        }
        ,
        e
    }();
    e.promiseObjectList = [],
    t.PromiseObject = e,
    __reflect(e.prototype, "egret.PromiseObject")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.GET = "GET",
    e.POST = "POST",
    t.HttpMethod = e,
    __reflect(e.prototype, "egret.HttpMethod")
}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.TEXT = "text",
    e.ARRAY_BUFFER = "arraybuffer",
    t.HttpResponseType = e,
    __reflect(e.prototype, "egret.HttpResponseType")
}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        function i(t, e) {
            var i = t.minX < e.minX ? t.minX : e.minX
              , r = t.minY < e.minY ? t.minY : e.minY
              , n = t.maxX > e.maxX ? t.maxX : e.maxX
              , o = t.maxY > e.maxY ? t.maxY : e.maxY;
            return (n - i) * (o - r)
        }
        var r = function() {
            function r(e) {
                this.dirtyList = [],
                this.hasClipRect = !1,
                this.clipWidth = 0,
                this.clipHeight = 0,
                this.clipArea = 0,
                this.clipRectChanged = !1,
                this.$dirtyRegionPolicy = t.DirtyRegionPolicy.ON,
                this.root = e
            }
            return r.prototype.setClipRect = function(t, e) {
                this.hasClipRect = !0,
                this.clipRectChanged = !0,
                this.clipWidth = Math.ceil(t),
                this.clipHeight = Math.ceil(e),
                this.clipArea = this.clipWidth * this.clipHeight
            }
            ,
            r.prototype.addRegion = function(i) {
                var r = i.minX
                  , n = i.minY
                  , o = i.maxX
                  , s = i.maxY;
                if (this.hasClipRect && (0 > r && (r = 0),
                0 > n && (n = 0),
                o > this.clipWidth && (o = this.clipWidth),
                s > this.clipHeight && (s = this.clipHeight)),
                r >= o || n >= s)
                    return !1;
                if (this.clipRectChanged)
                    return !0;
                var a = this.dirtyList
                  , h = e.Region.create();
                return a.push(h.setTo(r, n, o, s)),
                this.$dirtyRegionPolicy != t.DirtyRegionPolicy.OFF && this.mergeDirtyList(a),
                !0
            }
            ,
            r.prototype.clear = function() {
                for (var t = this.dirtyList, i = t.length, r = 0; i > r; r++)
                    e.Region.release(t[r]);
                t.length = 0
            }
            ,
            r.prototype.getDirtyRegions = function() {
                var i = this.dirtyList;
                if (this.$dirtyRegionPolicy == t.DirtyRegionPolicy.OFF) {
                    this.clipRectChanged = !0,
                    this.clear();
                    var r = e.Region.create();
                    if (this.hasClipRect)
                        i.push(r.setTo(0, 0, this.clipWidth, this.clipHeight));
                    else {
                        var n = this.root.$getOriginalBounds();
                        i.push(r.setTo(n.x, n.y, n.width, n.height))
                    }
                } else if (this.clipRectChanged) {
                    this.clipRectChanged = !1,
                    this.clear();
                    var r = e.Region.create();
                    i.push(r.setTo(0, 0, this.clipWidth, this.clipHeight))
                } else
                    for (; this.mergeDirtyList(i); )
                        ;
                var o = this.dirtyList.length;
                if (o > 0)
                    for (var s = 0; o > s; s++)
                        this.dirtyList[s].intValues();
                return this.dirtyList
            }
            ,
            r.prototype.mergeDirtyList = function(t) {
                var r = t.length;
                if (2 > r)
                    return !1;
                for (var n = this.hasClipRect, o = r > 3 ? Number.POSITIVE_INFINITY : 0, s = 0, a = 0, h = 0, l = 0; r - 1 > l; l++) {
                    var u = t[l];
                    n && (h += u.area);
                    for (var c = l + 1; r > c; c++) {
                        var p = t[c]
                          , d = i(u, p) - u.area - p.area;
                        o > d && (s = l,
                        a = c,
                        o = d)
                    }
                }
                if (n && h / this.clipArea > .95 && (this.clipRectChanged = !0),
                s != a) {
                    var f = t[a];
                    return t[s].union(f),
                    e.Region.release(f),
                    t.splice(a, 1),
                    !0
                }
                return !1
            }
            ,
            r.prototype.setDirtyRegionPolicy = function(t) {
                this.$dirtyRegionPolicy = t
            }
            ,
            r
        }();
        e.DirtyRegion = r,
        __reflect(r.prototype, "egret.sys.DirtyRegion")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        var i = function(i) {
            function r(r) {
                var n = i.call(this) || this;
                return n.isStage = !1,
                n.$renderNode = new e.BitmapNode,
                n.renderBuffer = null ,
                n.offsetX = 0,
                n.offsetY = 0,
                n.offsetMatrix = new t.Matrix,
                n.isDirty = !1,
                n.needUpdateRegions = !1,
                n.dirtyNodeList = [],
                n.dirtyList = null ,
                n.sizeChanged = !1,
                n.$dirtyRegionPolicy = t.DirtyRegionPolicy.ON,
                n.root = r,
                n.dirtyRegion = new e.DirtyRegion(r),
                n.isStage = r instanceof t.Stage,
                n.dirtyNodes = t.createMap(),
                n
            }
            return __extends(r, i),
            r.create = function(i) {
                var r = new t.sys.DisplayList(i);
                try {
                    var n = new e.RenderBuffer;
                    r.renderBuffer = n
                } catch (o) {
                    return null
                }
                return r.root = i,
                r
            }
            ,
            r.prototype.$getRenderNode = function() {
                return this.$renderNode
            }
            ,
            r.prototype.$update = function(e) {
                var i = this.root;
                if (null == i)
                    return !1;
                i.$removeFlagsUp(768);
                var r = this.$renderNode
                  , n = i.$getConcatenatedMatrix();
                if (e == t.DirtyRegionPolicy.OFF) {
                    var o = i.$parentDisplayList;
                    if (this.needUpdateRegions && this.updateDirtyRegions(),
                    !o)
                        return !1;
                    var s = r.renderMatrix;
                    s.copyFrom(n);
                    var a = o.root;
                    a !== i.$stage && i.$getConcatenatedMatrixAt(a, s)
                } else {
                    var h = i.$getOriginalBounds()
                      , o = i.$parentDisplayList
                      , l = r.renderRegion;
                    if (this.needUpdateRegions && this.updateDirtyRegions(),
                    !o)
                        return l.setTo(0, 0, 0, 0),
                        r.moved = !1,
                        !1;
                    if (!r.moved)
                        return !1;
                    r.moved = !1;
                    var s = r.renderMatrix;
                    s.copyFrom(n);
                    var a = o.root;
                    a !== i.$stage && i.$getConcatenatedMatrixAt(a, s),
                    l.updateRegion(h, s)
                }
                return !0
            }
            ,
            r.prototype.setClipRect = function(t, e) {
                this.dirtyRegion.setClipRect(t, e),
                this.renderBuffer.resize(t, e)
            }
            ,
            r.prototype.markDirty = function(t) {
                var e = t.$hashCode;
                if (!this.dirtyNodes[e] && (this.dirtyNodes[e] = !0,
                this.dirtyNodeList.push(t),
                !this.needUpdateRegions)) {
                    this.needUpdateRegions = !0,
                    this.isDirty = !0;
                    var i = this.root.$parentDisplayList;
                    i && i.markDirty(this)
                }
            }
            ,
            r.prototype.updateDirtyRegions = function() {
                var e = this.dirtyNodeList;
                this.dirtyNodeList = [],
                this.dirtyNodes = t.createMap(),
                this.needUpdateRegions = !1;
                for (var i = this.dirtyRegion, r = e.length, n = 0; r > n; n++) {
                    var o = e[n]
                      , s = o.$getRenderNode();
                    if (s)
                        if (s.needRedraw = !1,
                        this.isStage) {
                            s.renderAlpha > 0 && s.renderVisible && i.addRegion(s.renderRegion) && (s.needRedraw = !0);
                            var a = o.$update(this.$dirtyRegionPolicy);
                            s.renderAlpha > 0 && s.renderVisible && (a || !s.needRedraw) && i.addRegion(s.renderRegion) && (s.needRedraw = !0)
                        } else {
                            i.addRegion(s.renderRegion) && (s.needRedraw = !0);
                            var a = o.$update(this.$dirtyRegionPolicy);
                            (a || !s.needRedraw) && i.addRegion(s.renderRegion) && (s.needRedraw = !0)
                        }
                }
                return this.dirtyList = i.getDirtyRegions(),
                this.dirtyList
            }
            ,
            r.prototype.drawToSurface = function() {
                var i = 0
                  , r = this.dirtyList;
                if (r && r.length > 0) {
                    this.isStage || this.changeSurfaceSize();
                    var n = this.renderBuffer;
                    if (n.beginClip(this.dirtyList, this.offsetX, this.offsetY),
                    r = this.$dirtyRegionPolicy == t.DirtyRegionPolicy.OFF ? null : this.dirtyList,
                    i = e.systemRenderer.render(this.root, n, this.offsetMatrix, r),
                    n.endClip(),
                    !this.isStage) {
                        var o = n.surface
                          , s = this.$renderNode;
                        s.drawData.length = 0;
                        var a = o.width
                          , h = o.height;
                        this.bitmapData ? (this.bitmapData.source = o,
                        this.bitmapData.width = a,
                        this.bitmapData.height = h) : this.bitmapData = new t.BitmapData(o),
                        s.image = this.bitmapData,
                        s.imageWidth = a,
                        s.imageHeight = h,
                        s.drawImage(0, 0, a, h, -this.offsetX, -this.offsetY, a, h)
                    }
                }
                return this.dirtyList = null ,
                this.dirtyRegion.clear(),
                this.isDirty = !1,
                i
            }
            ,
            r.prototype.changeSurfaceSize = function() {
                var t = (this.root,
                this.offsetX)
                  , e = this.offsetY
                  , i = this.root.$getOriginalBounds();
                this.offsetX = -i.x,
                this.offsetY = -i.y,
                this.offsetMatrix.setTo(1, 0, 0, 1, this.offsetX, this.offsetY);
                var r = this.renderBuffer
                  , n = Math.max(257, i.width)
                  , o = Math.max(257, i.height);
                (this.offsetX != t || this.offsetY != e || r.surface.width != n || r.surface.height != o) && (this.sizeChanged ? r.resizeTo(n, o, this.offsetX - t, this.offsetY - e) : (this.sizeChanged = !0,
                r.resize(n, o)))
            }
            ,
            r.prototype.setDirtyRegionPolicy = function(t) {
                this.$dirtyRegionPolicy = t,
                this.dirtyRegion.setDirtyRegionPolicy(t),
                this.renderBuffer.setDirtyRegionPolicy(t)
            }
            ,
            r
        }(t.HashObject);
        e.DisplayList = i,
        __reflect(i.prototype, "egret.sys.DisplayList", ["egret.sys.Renderable"])
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        function i(i, r, n, o) {
            if (r && (t.log = function() {
                for (var t = arguments.length, i = "", r = 0; t > r; r++)
                    i += arguments[r] + " ";
                e.$logToFPS(i),
                console.log.apply(console, s(arguments))
            }
            ),
            l = o ? {} : o,
            r = !!r,
            this.showFPS = !!i,
            this.showLog = r,
            !this.fps) {
                var a = void 0 === o.x ? 0 : o.x
                  , c = void 0 === o.y ? 0 : o.y;
                h = this.fps = new FPS(this.stage,i,r,n,o),
                h.x = a,
                h.y = c;
                for (var p = u.length, d = 0; p > d; d++)
                    h.updateInfo(u[d]);
                u = null
            }
        }
        function r(t) {
            t = !!t,
            this._showPaintRect != t && (this._showPaintRect = t,
            t ? (this.stageDisplayList || (this.stageDisplayList = e.DisplayList.create(this.stage)),
            this.stage.$displayList = this.stageDisplayList) : this.stage.$displayList = this.screenDisplayList)
        }
        function n(t) {
            for (var e = t.length, i = [], r = 0; e > r; r++) {
                var n = t[r];
                i[r] = [n.minX, n.minY, n.width, n.height],
                n.width -= 1,
                n.height -= 1
            }
            var o = this.paintList;
            o.push(i),
            o.length > 1 && o.shift();
            var s = this.screenDisplayList.renderBuffer
              , a = s.context;
            a.setTransform(1, 0, 0, 1, 0, 0),
            a.clearRect(0, 0, s.surface.width, s.surface.height),
            a.drawImage(this.stageDisplayList.renderBuffer.surface, 0, 0),
            e = o.length;
            for (var r = 0; e > r; r++) {
                i = o[r];
                for (var h = i.length - 1; h >= 0; h--) {
                    var l = i[h];
                    this.drawDirtyRect(l[0], l[1], l[2], l[3], a)
                }
            }
            a.save(),
            a.beginPath(),
            e = t.length;
            for (var r = 0; e > r; r++) {
                var n = t[r];
                a.clearRect(n.minX, n.minY, n.width, n.height),
                a.rect(n.minX, n.minY, n.width, n.height)
            }
            a.clip(),
            a.drawImage(this.stageDisplayList.renderBuffer.surface, 0, 0),
            a.restore()
        }
        function o(t, e, i, r, n) {
            n.strokeStyle = "rgb(255,0,0)",
            n.lineWidth = 5,
            n.strokeRect(t - .5, e - .5, i, r)
        }
        function s(t) {
            for (var e = [], i = 0; i < t.length; i++)
                e.push(t[i]);
            return e
        }
        var a = function(s) {
            function a(t, e, a) {
                var h = s.call(this) || this;
                return h.isPlaying = !1,
                h.entryClassName = a,
                h.stage = e,
                h.screenDisplayList = h.createDisplayList(e, t),
                h.showFPS = !1,
                h.showLog = !1,
                h._showPaintRect = !1,
                h.stageDisplayList = null ,
                h.paintList = [],
                h.displayFPS = i,
                h.showPaintRect = r,
                h.drawPaintRect = n,
                h.drawDirtyRect = o,
                h
            }
            return __extends(a, s),
            a.prototype.createDisplayList = function(t, i) {
                var r = new e.DisplayList(t);
                return r.renderBuffer = i,
                t.$displayList = r,
                r
            }
            ,
            a.prototype.start = function() {
                !this.isPlaying && this.stage && (e.$TempStage = e.$TempStage || this.stage,
                this.isPlaying = !0,
                this.root || this.initialize(),
                e.$ticker.$addPlayer(this))
            }
            ,
            a.prototype.initialize = function() {
                var e;
                if (this.entryClassName && (e = t.getDefinitionByName(this.entryClassName)),
                e) {
                    var i = new e;
                    this.root = i,
                    i instanceof t.DisplayObject && this.stage.addChild(i)
                }
            }
            ,
            a.prototype.stop = function() {
                this.pause(),
                this.stage = null
            }
            ,
            a.prototype.pause = function() {
                this.isPlaying && (this.isPlaying = !1,
                e.$ticker.$removePlayer(this))
            }
            ,
            a.prototype.$render = function(e, i) {
                (this.showFPS || this.showLog) && this.stage.addChild(this.fps);
                var r = this.stage
                  , n = t.getTimer()
                  , o = r.$displayList.updateDirtyRegions()
                  , s = t.getTimer();
                o = o.concat();
                var a = r.$displayList.drawToSurface();
                this._showPaintRect && this.drawPaintRect(o);
                var h = t.getTimer();
                if (e && this.showFPS) {
                    var l = 0;
                    if (a > 0) {
                        for (var u = o.length, c = 0, p = 0; u > p; p++)
                            c += o[p].area;
                        l = Math.ceil(1e3 * c / (r.stageWidth * r.stageHeight)) / 10
                    }
                    this.fps.update(a, l, s - n, h - s, i)
                }
            }
            ,
            a.prototype.updateStageSize = function(e, i) {
                var r = this.stage;
                r.$stageWidth = e,
                r.$stageHeight = i,
                this.screenDisplayList.setClipRect(e, i),
                this.stageDisplayList && this.stageDisplayList.setClipRect(e, i),
                r.dispatchEventWith(t.Event.RESIZE),
                r.$invalidate(!0)
            }
            ,
            a
        }(t.HashObject);
        e.Player = a,
        __reflect(a.prototype, "egret.sys.Player");
        var h, l, u = [];
        e.$logToFPS = function(t) {
            return h ? void h.updateInfo(t) : void u.push(t)
        }
        ,
        FPS = function(i) {
            function r(e, r, n, o, s) {
                i.call(this),
                this.isFPS = !0,
                this.infoLines = [],
                this.totalTime = 0,
                this.totalTick = 0,
                this.lastTime = 0,
                this.drawCalls = 0,
                this.dirtyRatio = 0,
                this.costDirty = 0,
                this.costRender = 0,
                this.costTicker = 0,
                this._stage = e,
                this.showFPS = r,
                this.showLog = n,
                this.logFilter = o,
                this.touchChildren = !1,
                this.touchEnabled = !1,
                this.styles = s,
                this.fpsDisplay = new t.FPSDisplay(e,r,n,o,s),
                this.addChild(this.fpsDisplay);
                var a;
                try {
                    a = o ? new RegExp(o) : null
                } catch (h) {
                    t.log(h)
                }
                this.filter = function(t) {
                    return a ? a.test(t) : !o || 0 == t.indexOf(o)
                }
            }
            return __extends(r, i),
            r.prototype.update = function(i, r, n, o, s) {
                var a = t.getTimer();
                if (this.totalTime += a - this.lastTime,
                this.lastTime = a,
                this.totalTick++,
                this.drawCalls += i,
                this.dirtyRatio += r,
                this.costDirty += n,
                this.costRender += o,
                this.costTicker += s,
                this.totalTime >= 1e3) {
                    var h = Math.min(Math.ceil(1e3 * this.totalTick / this.totalTime), e.$ticker.$frameRate)
                      , l = Math.round(this.drawCalls / this.totalTick)
                      , u = Math.round(this.dirtyRatio / this.totalTick)
                      , c = Math.round(this.costDirty / this.totalTick)
                      , p = Math.round(this.costRender / this.totalTick)
                      , d = Math.round(this.costTicker / this.totalTick);
                    this.fpsDisplay.update({
                        fps: h,
                        draw: l,
                        dirty: u,
                        costTicker: d,
                        costDirty: c,
                        costRender: p
                    }),
                    this.totalTick = 0,
                    this.totalTime = this.totalTime % 1e3,
                    this.drawCalls = 0,
                    this.dirtyRatio = 0,
                    this.costDirty = 0,
                    this.costRender = 0,
                    this.costTicker = 0
                }
            }
            ,
            r.prototype.updateInfo = function(t) {
                t && this.showLog && this.filter(t) && this.fpsDisplay.updateInfo(t)
            }
            ,
            r
        }(t.Sprite),
        t.warn = function() {
            console.warn.apply(console, s(arguments))
        }
        ,
        t.error = function() {
            console.error.apply(console, s(arguments))
        }
        ,
        t.assert = function() {
            console.assert.apply(console, s(arguments))
        }
        ,
        t.log = function() {
            console.log.apply(console, s(arguments))
        }
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    t.OrientationMode = {
        AUTO: "auto",
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape",
        LANDSCAPE_FLIPPED: "landscapeFlipped"
    }
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        var e = []
          , i = function() {
            function t() {
                this.minX = 0,
                this.minY = 0,
                this.maxX = 0,
                this.maxY = 0,
                this.width = 0,
                this.height = 0,
                this.area = 0,
                this.moved = !1
            }
            return t.release = function(t) {
                e.push(t)
            }
            ,
            t.create = function() {
                var i = e.pop();
                return i || (i = new t),
                i
            }
            ,
            t.prototype.setTo = function(t, e, i, r) {
                return this.minX = t,
                this.minY = e,
                this.maxX = i,
                this.maxY = r,
                this.updateArea(),
                this
            }
            ,
            t.prototype.intValues = function() {
                this.minX = Math.floor(this.minX),
                this.minY = Math.floor(this.minY),
                this.maxX = Math.ceil(this.maxX),
                this.maxY = Math.ceil(this.maxY),
                this.updateArea()
            }
            ,
            t.prototype.updateArea = function() {
                this.width = this.maxX - this.minX,
                this.height = this.maxY - this.minY,
                this.area = this.width * this.height
            }
            ,
            t.prototype.union = function(t) {
                this.minX > t.minX && (this.minX = t.minX),
                this.minY > t.minY && (this.minY = t.minY),
                this.maxX < t.maxX && (this.maxX = t.maxX),
                this.maxY < t.maxY && (this.maxY = t.maxY),
                this.updateArea()
            }
            ,
            t.prototype.intersect = function(t) {
                return this.minX < t.minX && (this.minX = t.minX),
                this.maxX > t.maxX && (this.maxX = t.maxX),
                this.minX >= this.maxX ? void this.setEmpty() : (this.minY < t.minY && (this.minY = t.minY),
                this.maxY > t.maxY && (this.maxY = t.maxY),
                this.minY >= this.maxY ? void this.setEmpty() : void this.updateArea())
            }
            ,
            t.prototype.setEmpty = function() {
                this.minX = 0,
                this.minY = 0,
                this.maxX = 0,
                this.maxY = 0,
                this.width = 0,
                this.height = 0,
                this.area = 0
            }
            ,
            t.prototype.isEmpty = function() {
                return this.width <= 0 || this.height <= 0
            }
            ,
            t.prototype.intersects = function(t) {
                if (this.isEmpty())
                    return !1;
                var e = this.minX > t.minX ? this.minX : t.minX
                  , i = this.maxX < t.maxX ? this.maxX : t.maxX;
                return e > i ? !1 : (e = this.minY > t.minY ? this.minY : t.minY,
                i = this.maxY < t.maxY ? this.maxY : t.maxY,
                i >= e)
            }
            ,
            t.prototype.updateRegion = function(t, e) {
                if (0 == t.width || 0 == t.height)
                    return void this.setEmpty();
                var i, r, n, o, s = e, a = s.a, h = s.b, l = s.c, u = s.d, c = s.tx, p = s.ty, d = t.x, f = t.y, g = d + t.width, y = f + t.height;
                if (1 == a && 0 == h && 0 == l && 1 == u)
                    i = d + c - 1,
                    r = f + p - 1,
                    n = g + c + 1,
                    o = y + p + 1;
                else {
                    var v = a * d + l * f + c
                      , $ = h * d + u * f + p
                      , m = a * g + l * f + c
                      , b = h * g + u * f + p
                      , T = a * g + l * y + c
                      , x = h * g + u * y + p
                      , _ = a * d + l * y + c
                      , E = h * d + u * y + p
                      , O = 0;
                    v > m && (O = v,
                    v = m,
                    m = O),
                    T > _ && (O = T,
                    T = _,
                    _ = O),
                    i = (T > v ? v : T) - 1,
                    n = (m > _ ? m : _) + 1,
                    $ > b && (O = $,
                    $ = b,
                    b = O),
                    x > E && (O = x,
                    x = E,
                    E = O),
                    r = (x > $ ? $ : x) - 1,
                    o = (b > E ? b : E) + 1
                }
                this.minX = i,
                this.minY = r,
                this.maxX = n,
                this.maxY = o,
                this.width = n - i,
                this.height = o - r,
                this.area = this.width * this.height
            }
            ,
            t
        }();
        t.Region = i,
        __reflect(i.prototype, "egret.sys.Region")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {}(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        var i = function(e) {
            function i() {
                return e.call(this) || this
            }
            return __extends(i, e),
            i.prototype.calculateStageSize = function(e, i, r, n, o) {
                var s = i
                  , a = r
                  , h = n
                  , l = o
                  , u = i / h || 0
                  , c = r / l || 0;
                switch (e) {
                case t.StageScaleMode.EXACT_FIT:
                    break;
                case t.StageScaleMode.FIXED_HEIGHT:
                    h = Math.round(i / c);
                    break;
                case t.StageScaleMode.FIXED_WIDTH:
                    l = Math.round(r / u);
                    break;
                case t.StageScaleMode.NO_BORDER:
                    u > c ? a = Math.round(l * u) : s = Math.round(h * c);
                    break;
                case t.StageScaleMode.SHOW_ALL:
                    u > c ? s = Math.round(h * c) : a = Math.round(l * u);
                    break;
                case t.StageScaleMode.FIXED_NARROW:
                    u > c ? h = Math.round(i / c) : l = Math.round(r / u);
                    break;
                case t.StageScaleMode.FIXED_WIDE:
                    u > c ? l = Math.round(r / u) : h = Math.round(i / c);
                    break;
                default:
                    h = i,
                    l = r
                }
                return s % 2 != 0 && (s += 1),
                a % 2 != 0 && (a += 1),
                {
                    stageWidth: h,
                    stageHeight: l,
                    displayWidth: s,
                    displayHeight: a
                }
            }
            ,
            i
        }(t.HashObject);
        e.DefaultScreenAdapter = i,
        __reflect(i.prototype, "egret.sys.DefaultScreenAdapter", ["egret.sys.IScreenAdapter"])
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.NO_SCALE = "noScale",
    e.SHOW_ALL = "showAll",
    e.NO_BORDER = "noBorder",
    e.EXACT_FIT = "exactFit",
    e.FIXED_WIDTH = "fixedWidth",
    e.FIXED_HEIGHT = "fixedHeight",
    e.FIXED_NARROW = "fixedNarrow",
    e.FIXED_WIDE = "fixedWide",
    t.StageScaleMode = e,
    __reflect(e.prototype, "egret.StageScaleMode")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {}(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        e.$START_TIME = 0,
        e.$invalidateRenderFlag = !1,
        e.$requestRenderingFlag = !1;
        var i = function() {
            function i() {
                this.playerList = [],
                this.callBackList = [],
                this.thisObjectList = [],
                this.$frameRate = 30,
                this.lastTimeStamp = 0,
                this.costEnterFrame = 0,
                e.$START_TIME = Date.now(),
                this.frameDeltaTime = 1e3 / this.$frameRate,
                this.lastCount = this.frameInterval = Math.round(6e4 / this.$frameRate)
            }
            return i.prototype.$addPlayer = function(t) {
                -1 == this.playerList.indexOf(t) && (this.playerList = this.playerList.concat(),
                this.playerList.push(t))
            }
            ,
            i.prototype.$removePlayer = function(t) {
                var e = this.playerList.indexOf(t);
                if (-1 !== e) {
                    this.playerList = this.playerList.concat(),
                    this.playerList.splice(e, 1)
                }
            }
            ,
            i.prototype.$startTick = function(t, e) {
                var i = this.getTickIndex(t, e);
                -1 == i && (this.concatTick(),
                this.callBackList.push(t),
                this.thisObjectList.push(e))
            }
            ,
            i.prototype.$stopTick = function(t, e) {
                var i = this.getTickIndex(t, e);
                -1 != i && (this.concatTick(),
                this.callBackList.splice(i, 1),
                this.thisObjectList.splice(i, 1))
            }
            ,
            i.prototype.getTickIndex = function(t, e) {
                for (var i = this.callBackList, r = this.thisObjectList, n = i.length - 1; n >= 0; n--)
                    if (i[n] == t && r[n] == e)
                        return n;
                return -1
            }
            ,
            i.prototype.concatTick = function() {
                this.callBackList = this.callBackList.concat(),
                this.thisObjectList = this.thisObjectList.concat()
            }
            ,
            i.prototype.$setFrameRate = function(e) {
                return e = +e || 0,
                0 >= e ? !1 : this.$frameRate == e ? !1 : (this.$frameRate = e,
                e > 60 && (e = 60),
                t.Capabilities.runtimeType == t.RuntimeType.NATIVE && (egret_native.setFrameRate(e),
                e = 60),
                this.frameDeltaTime = 1e3 / e,
                this.lastCount = this.frameInterval = Math.round(6e4 / e),
                !0)
            }
            ,
            i.prototype.update = function() {
                var i = t.getTimer()
                  , r = this.callBackList
                  , n = this.thisObjectList
                  , o = r.length
                  , s = e.$requestRenderingFlag
                  , a = t.getTimer();
                this.callLaterAsyncs();
                for (var h = 0; o > h; h++)
                    r[h].call(n[h], a) && (s = !0);
                var l = t.getTimer()
                  , u = a - this.lastTimeStamp;
                if (this.lastTimeStamp = a,
                u >= this.frameDeltaTime)
                    this.lastCount = this.frameInterval;
                else {
                    if (this.lastCount -= 1e3,
                    this.lastCount > 0)
                        return void (s && this.render(!1, this.costEnterFrame + l - i));
                    this.lastCount += this.frameInterval
                }
                this.render(!0, this.costEnterFrame + l - i);
                var c = t.getTimer();
                this.broadcastEnterFrame();
                var p = t.getTimer();
                this.costEnterFrame = p - c
            }
            ,
            i.prototype.render = function(t, i) {
                var r = this.playerList
                  , n = r.length;
                if (0 != n) {
                    this.callLaters(),
                    e.$invalidateRenderFlag && (this.broadcastRender(),
                    e.$invalidateRenderFlag = !1);
                    for (var o = 0; n > o; o++)
                        r[o].$render(t, i);
                    e.$requestRenderingFlag = !1
                }
            }
            ,
            i.prototype.broadcastEnterFrame = function() {
                var e = t.DisplayObject.$enterFrameCallBackList
                  , i = e.length;
                if (0 != i) {
                    e = e.concat();
                    for (var r = 0; i > r; r++)
                        e[r].dispatchEventWith(t.Event.ENTER_FRAME)
                }
            }
            ,
            i.prototype.broadcastRender = function() {
                var e = t.DisplayObject.$renderCallBackList
                  , i = e.length;
                if (0 != i) {
                    e = e.concat();
                    for (var r = 0; i > r; r++)
                        e[r].dispatchEventWith(t.Event.RENDER)
                }
            }
            ,
            i.prototype.callLaters = function() {
                var e, i, r;
                if (t.$callLaterFunctionList.length > 0 && (e = t.$callLaterFunctionList,
                t.$callLaterFunctionList = [],
                i = t.$callLaterThisList,
                t.$callLaterThisList = [],
                r = t.$callLaterArgsList,
                t.$callLaterArgsList = []),
                e)
                    for (var n = e.length, o = 0; n > o; o++) {
                        var s = e[o];
                        null != s && s.apply(i[o], r[o])
                    }
            }
            ,
            i.prototype.callLaterAsyncs = function() {
                if (t.$callAsyncFunctionList.length > 0) {
                    var e = t.$callAsyncFunctionList
                      , i = t.$callAsyncThisList
                      , r = t.$callAsyncArgsList;
                    t.$callAsyncFunctionList = [],
                    t.$callAsyncThisList = [],
                    t.$callAsyncArgsList = [];
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        null != o && o.apply(i[n], r[n])
                    }
                }
            }
            ,
            i
        }();
        e.SystemTicker = i,
        __reflect(i.prototype, "egret.sys.SystemTicker"),
        e.$ticker = new e.SystemTicker
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        var i = function(e) {
            function i(t) {
                var i = e.call(this) || this;
                return i.maxTouches = 0,
                i.useTouchesCount = 0,
                i.touchDownTarget = {},
                i.lastTouchX = -1,
                i.lastTouchY = -1,
                i.stage = t,
                i
            }
            return __extends(i, e),
            i.prototype.$initMaxTouches = function() {
                this.maxTouches = this.stage.$maxTouches
            }
            ,
            i.prototype.onTouchBegin = function(e, i, r) {
                if (!(this.useTouchesCount >= this.maxTouches)) {
                    this.lastTouchX = e,
                    this.lastTouchY = i;
                    var n = this.findTarget(e, i);
                    null == this.touchDownTarget[r] && (this.touchDownTarget[r] = n,
                    this.useTouchesCount++),
                    t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_BEGIN, !0, !0, e, i, r, !0)
                }
            }
            ,
            i.prototype.onTouchMove = function(e, i, r) {
                if (null != this.touchDownTarget[r] && (this.lastTouchX != e || this.lastTouchY != i)) {
                    this.lastTouchX = e,
                    this.lastTouchY = i;
                    var n = this.findTarget(e, i);
                    t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_MOVE, !0, !0, e, i, r, !0)
                }
            }
            ,
            i.prototype.onTouchEnd = function(e, i, r) {
                if (null != this.touchDownTarget[r]) {
                    var n = this.findTarget(e, i)
                      , o = this.touchDownTarget[r];
                    delete this.touchDownTarget[r],
                    this.useTouchesCount--,
                    t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_END, !0, !0, e, i, r, !1),
                    o == n ? t.TouchEvent.dispatchTouchEvent(n, t.TouchEvent.TOUCH_TAP, !0, !0, e, i, r, !1) : t.TouchEvent.dispatchTouchEvent(o, t.TouchEvent.TOUCH_RELEASE_OUTSIDE, !0, !0, e, i, r, !1)
                }
            }
            ,
            i.prototype.findTarget = function(t, e) {
                var i = this.stage.$hitTest(t, e);
                return i || (i = this.stage),
                i
            }
            ,
            i
        }(t.HashObject);
        e.TouchHandler = i,
        __reflect(i.prototype, "egret.sys.TouchHandler")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        var i = function(e) {
            function i() {
                var t = e.call(this) || this;
                return t.image = null ,
                t.smoothing = !0,
                t.blendMode = null ,
                t.alpha = 0 / 0,
                t.filter = null ,
                t.type = 1,
                t
            }
            return __extends(i, e),
            i.prototype.drawImage = function(t, e, i, r, n, o, s, a) {
                this.drawData.push(t, e, i, r, n, o, s, a),
                this.renderCount++
            }
            ,
            i.prototype.cleanBeforeRender = function() {
                e.prototype.cleanBeforeRender.call(this),
                this.image = null ,
                this.matrix = null ,
                this.blendMode = null ,
                this.alpha = 0 / 0,
                this.filter = null
            }
            ,
            i.$updateTextureData = function(e, r, n, o, s, a, h, l, u, c, p, d, f, g, y, v, $) {
                if (r) {
                    var m = t.$TextureScaleFactor;
                    if (e.smoothing = $,
                    e.image = r,
                    e.imageWidth = f,
                    e.imageHeight = g,
                    y)
                        i.$updateTextureDataWithScale9Grid(e, y, n, o, s, a, h, l, u, c, p, d);
                    else if (v == t.BitmapFillMode.SCALE) {
                        var b = p / u * m
                          , T = d / c * m;
                        e.drawImage(n, o, s, a, b * h, T * l, b * s, T * a)
                    } else if (v == t.BitmapFillMode.CLIP) {
                        var x = Math.min(u, p)
                          , _ = Math.min(c, d)
                          , E = s * m
                          , O = a * m;
                        i.drawClipImage(e, m, n, o, E, O, h, l, x, _)
                    } else
                        for (var E = s * m, O = a * m, F = 0; p > F; F += u)
                            for (var w = 0; d > w; w += c) {
                                var x = Math.min(p - F, u)
                                  , _ = Math.min(d - w, c);
                                i.drawClipImage(e, m, n, o, E, O, h, l, x, _, F, w)
                            }
                }
            }
            ,
            i.$updateTextureDataWithScale9Grid = function(e, i, r, n, o, s, a, h, l, u, c, p) {
                var d = o
                  , f = s;
                c -= l - o * t.$TextureScaleFactor,
                p -= u - s * t.$TextureScaleFactor;
                var g = i.x - a
                  , y = i.y - h
                  , v = g / t.$TextureScaleFactor
                  , $ = y / t.$TextureScaleFactor
                  , m = i.width / t.$TextureScaleFactor
                  , b = i.height / t.$TextureScaleFactor;
                0 == b && (b = 1,
                $ >= f && $--),
                0 == m && (m = 1,
                v >= d && v--);
                var T = r
                  , x = T + v
                  , _ = x + m
                  , E = d - v - m
                  , O = n
                  , F = O + $
                  , w = F + b
                  , C = f - $ - b
                  , R = E * t.$TextureScaleFactor
                  , S = C * t.$TextureScaleFactor;
                if ((v + E) * t.$TextureScaleFactor > c || ($ + C) * t.$TextureScaleFactor > p)
                    return void e.drawImage(r, n, o, s, a, h, c, p);
                var P = a
                  , D = P + g
                  , L = P + (c - R)
                  , M = c - g - R
                  , A = h
                  , N = A + y
                  , B = A + p - S
                  , I = p - y - S;
                $ > 0 && (v > 0 && e.drawImage(T, O, v, $, P, A, g, y),
                m > 0 && e.drawImage(x, O, m, $, D, A, M, y),
                E > 0 && e.drawImage(_, O, E, $, L, A, R, y)),
                b > 0 && (v > 0 && e.drawImage(T, F, v, b, P, N, g, I),
                m > 0 && e.drawImage(x, F, m, b, D, N, M, I),
                E > 0 && e.drawImage(_, F, E, b, L, N, R, I)),
                C > 0 && (v > 0 && e.drawImage(T, w, v, C, P, B, g, S),
                m > 0 && e.drawImage(x, w, m, C, D, B, M, S),
                E > 0 && e.drawImage(_, w, E, C, L, B, R, S))
            }
            ,
            i.drawClipImage = function(t, e, i, r, n, o, s, a, h, l, u, c) {
                void 0 === u && (u = 0),
                void 0 === c && (c = 0);
                var p = s + n - h;
                p > 0 && (n -= p),
                p = a + o - l,
                p > 0 && (o -= p),
                t.drawImage(i, r, n / e, o / e, u + s, c + a, n, o)
            }
            ,
            i
        }(e.RenderNode);
        e.BitmapNode = i,
        __reflect(i.prototype, "egret.sys.BitmapNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        var i = ["none", "round", "square"]
          , r = ["bevel", "miter", "round"]
          , n = function(n) {
            function o() {
                var t = n.call(this) || this;
                return t.dirtyRender = !0,
                t.type = 3,
                t
            }
            return __extends(o, n),
            o.prototype.beginFill = function(t, i, r) {
                void 0 === i && (i = 1);
                var n = new e.FillPath;
                if (n.fillColor = t,
                n.fillAlpha = i,
                r) {
                    var o = this.drawData.lastIndexOf(r);
                    this.drawData.splice(o, 0, n)
                } else
                    this.drawData.push(n);
                return n
            }
            ,
            o.prototype.beginGradientFill = function(i, r, n, o, s, a) {
                var h = new t.Matrix;
                s ? (h.a = 819.2 * s.a,
                h.b = 819.2 * s.b,
                h.c = 819.2 * s.c,
                h.d = 819.2 * s.d,
                h.tx = s.tx,
                h.ty = s.ty) : (h.a = 100,
                h.d = 100);
                var l = new e.GradientFillPath;
                if (l.gradientType = i,
                l.colors = r,
                l.alphas = n,
                l.ratios = o,
                l.matrix = h,
                a) {
                    var u = this.drawData.lastIndexOf(a);
                    this.drawData.splice(u, 0, l)
                } else
                    this.drawData.push(l);
                return l
            }
            ,
            o.prototype.lineStyle = function(n, o, s, a, h, l) {
                void 0 === s && (s = 1),
                void 0 === l && (l = 3),
                -1 == i.indexOf(a) && (a = "round"),
                -1 == r.indexOf(h) && (h = "round");
                var u = new e.StrokePath;
                return u.lineWidth = n,
                u.lineColor = o,
                u.lineAlpha = s,
                u.caps = a || t.CapsStyle.ROUND,
                u.joints = h,
                u.miterLimit = l,
                this.drawData.push(u),
                u
            }
            ,
            o.prototype.clear = function() {
                this.drawData.length = 0,
                this.dirtyRender = !0
            }
            ,
            o.prototype.cleanBeforeRender = function() {}
            ,
            o.prototype.clean = function() {
                this.$texture && (t.WebGLUtils.deleteWebGLTexture(this.$texture),
                this.$texture = null ,
                this.dirtyRender = !0)
            }
            ,
            o
        }(e.RenderNode);
        e.GraphicsNode = n,
        __reflect(n.prototype, "egret.sys.GraphicsNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.type = 4,
                e
            }
            return __extends(e, t),
            e.prototype.addNode = function(t) {
                this.drawData.push(t)
            }
            ,
            e.prototype.cleanBeforeRender = function() {
                for (var t = this.drawData, e = t.length - 1; e >= 0; e--)
                    t[e].cleanBeforeRender()
            }
            ,
            e.prototype.$getRenderCount = function() {
                for (var t = 0, e = this.drawData, i = e.length - 1; i >= 0; i--)
                    t += e[i].$getRenderCount();
                return t
            }
            ,
            e
        }(t.RenderNode);
        t.GroupNode = e,
        __reflect(e.prototype, "egret.sys.GroupNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        var i = function(e) {
            function i() {
                var i = e.call(this) || this;
                return i.image = null ,
                i.smoothing = !0,
                i.bounds = new t.Rectangle,
                i.type = 7,
                i.vertices = [],
                i.uvs = [],
                i.indices = [],
                i
            }
            return __extends(i, e),
            i.prototype.drawMesh = function(t, e, i, r, n, o, s, a) {
                this.drawData.push(t, e, i, r, n, o, s, a),
                this.renderCount++
            }
            ,
            i.prototype.cleanBeforeRender = function() {
                e.prototype.cleanBeforeRender.call(this),
                this.image = null ,
                this.matrix = null
            }
            ,
            i
        }(e.RenderNode);
        e.MeshNode = i,
        __reflect(i.prototype, "egret.sys.MeshNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            i.$renderBuffer = new t.sys.RenderBuffer;
            var r = new t.BitmapData(i.$renderBuffer.surface);
            return r.$deleteSource = !1,
            i._setBitmapData(r),
            i
        }
        return __extends(i, e),
        i.prototype.drawToTexture = function(e, i, r) {
            if (void 0 === r && (r = 1),
            i && (0 == i.width || 0 == i.height))
                return !1;
            var n = i || e.$getOriginalBounds();
            if (0 == n.width || 0 == n.height)
                return !1;
            r /= t.$TextureScaleFactor;
            var o = (n.x + n.width) * r
              , s = (n.y + n.height) * r;
            i && (o = n.width * r,
            s = n.height * r);
            var a = this.$renderBuffer;
            if (!a)
                return !1;
            a.resize(o, s),
            this._bitmapData.width = o,
            this._bitmapData.height = s;
            var h = t.Matrix.create();
            return h.identity(),
            i && h.translate(-i.x, -i.y),
            h.scale(r, r),
            t.sys.systemRenderer.render(e, a, h, null , !0),
            t.Matrix.release(h),
            this.$initData(0, 0, o, s, 0, 0, o, s, o, s),
            !0
        }
        ,
        i.prototype.getPixel32 = function(e, i) {
            var r;
            if (this.$renderBuffer) {
                var n = t.$TextureScaleFactor;
                e = Math.round(e / n),
                i = Math.round(i / n),
                r = this.$renderBuffer.getPixels(e, i, 1, 1)
            }
            return r
        }
        ,
        i.prototype.dispose = function() {
            e.prototype.dispose.call(this),
            this.$renderBuffer = null
        }
        ,
        i
    }(t.Texture);
    t.RenderTexture = e,
    __reflect(e.prototype, "egret.RenderTexture")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.type = 6,
                e
            }
            return __extends(e, t),
            e.prototype.setAlpha = function(t) {
                0 != this.drawData.length && (this.drawData.length = 0),
                this.drawData.push(t),
                this.renderCount++
            }
            ,
            e
        }(t.RenderNode);
        t.SetAlphaNode = e,
        __reflect(e.prototype, "egret.sys.SetAlphaNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(e) {
        var i = function(e) {
            function i() {
                var t = e.call(this) || this;
                return t.textColor = 16777215,
                t.strokeColor = 0,
                t.size = 30,
                t.stroke = 0,
                t.bold = !1,
                t.italic = !1,
                t.fontFamily = "Arial",
                t.dirtyRender = !0,
                t.type = 2,
                t
            }
            return __extends(i, e),
            i.prototype.drawText = function(t, e, i, r) {
                this.drawData.push(t, e, i, r),
                this.renderCount++,
                this.dirtyRender = !0
            }
            ,
            i.prototype.cleanBeforeRender = function() {
                e.prototype.cleanBeforeRender.call(this)
            }
            ,
            i.prototype.clean = function() {
                this.$texture && (t.WebGLUtils.deleteWebGLTexture(this.$texture),
                this.$texture = null ,
                this.dirtyRender = !0)
            }
            ,
            i
        }(e.RenderNode);
        e.TextNode = i,
        __reflect(i.prototype, "egret.sys.TextNode")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.type = 1,
                e
            }
            return __extends(e, t),
            e
        }(t.Path2D);
        t.FillPath = e,
        __reflect(e.prototype, "egret.sys.FillPath")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.type = 2,
                e
            }
            return __extends(e, t),
            e
        }(t.Path2D);
        t.GradientFillPath = e,
        __reflect(e.prototype, "egret.sys.GradientFillPath")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.$graphics = new t.Graphics,
            i.$graphics.$setTarget(i),
            i
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "graphics", {
            get: function() {
                return this.$graphics
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$measureContentBounds = function(t) {
            this.$graphics.$measureContentBounds(t)
        }
        ,
        i.prototype.$hitTest = function(t, i) {
            var r = e.prototype.$hitTest.call(this, t, i);
            return r == this && (r = this.$graphics.$hitTest(t, i)),
            r
        }
        ,
        i.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this),
            this.$graphics && this.$graphics.$onRemoveFromStage()
        }
        ,
        i
    }(t.DisplayObject);
    t.Shape = e,
    __reflect(e.prototype, "egret.Shape")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {
        var e = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.type = 3,
                e
            }
            return __extends(e, t),
            e
        }(t.Path2D);
        t.StrokePath = e,
        __reflect(e.prototype, "egret.sys.StrokePath")
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t, e) {
        var i = null == e.italic ? t.italic : e.italic
          , r = null == e.bold ? t.bold : e.bold
          , n = null == e.size ? t.size : e.size
          , o = e.fontFamily || t.fontFamily
          , s = i ? "italic " : "normal ";
        return s += r ? "bold " : "normal ",
        s += n + "px " + o
    }
    function i(t, e) {
        var i = t >> 16
          , r = t >> 8 & 255
          , n = 255 & t;
        return "rgba(" + i + "," + r + "," + n + "," + e + ")"
    }
    function r(e, r, n, o, s, a) {
        var h;
        h = r == t.GradientType.LINEAR ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(0, 0, 0, 0, 0, 1);
        for (var l = n.length, u = 0; l > u; u++)
            h.addColorStop(s[u] / 255, i(n[u], o[u]));
        return h
    }
    function n(t, e, i) {
        void 0 === i && (i = 0);
        for (var r = 0, n = e.length; n > r; r++)
            t[r + i] = e[r]
    }
    function o(t, e, i, r) {
        for (var n = r[0], o = r[1], s = r[2], a = r[3], h = r[4], l = r[5], u = r[6], c = r[7], p = r[8], d = r[9], f = r[10], g = r[11], y = r[12], v = r[13], $ = r[14], m = r[15], b = r[16], T = r[17], x = r[18], _ = r[19], E = 0, O = e * i * 4; O > E; E += 4) {
            var F = t[E + 0]
              , w = t[E + 1]
              , C = t[E + 2]
              , R = t[E + 3];
            t[E + 0] = n * F + o * w + s * C + a * R + h,
            t[E + 1] = l * F + u * w + c * C + p * R + d,
            t[E + 2] = f * F + g * w + y * C + v * R + $,
            t[E + 3] = m * F + b * w + T * C + x * R + _
        }
    }
    function s(t, e, i, r, n) {
        a(t, e, i, r),
        h(t, e, i, n)
    }
    function a(t, e, i, r) {
        var o;
        o = x ? new Uint8ClampedArray(4 * e) : new Array(4 * e);
        for (var s = 4 * e, a = 2 * r + 1, h = 0; i > h; h++) {
            for (var l = h * s, u = 0, c = 0, p = 0, d = 0, f = 0, g = 0, y = 4 * -r, v = 4 * r + 4; v > y; y += 4) {
                var $ = l + y;
                l > $ || $ >= l + s || (f = t[$ + 3],
                u += t[$ + 0] * f,
                c += t[$ + 1] * f,
                p += t[$ + 2] * f,
                d += f)
            }
            for (var y = l, v = l + s, m = 0, b = y - 4 * r, T = y + 4 * (r + 1); v > y; y += 4,
            m += 4,
            T += 4,
            b += 4)
                0 === d ? (o[m + 0] = 0,
                o[m + 1] = 0,
                o[m + 2] = 0,
                o[m + 3] = 0) : (o[m + 0] = u / d,
                o[m + 1] = c / d,
                o[m + 2] = p / d,
                o[m + 3] = d / a),
                f = t[T + 3],
                g = t[b + 3],
                f || 0 == f ? g || 0 == g ? (u += t[T + 0] * f - t[b + 0] * g,
                c += t[T + 1] * f - t[b + 1] * g,
                p += t[T + 2] * f - t[b + 2] * g,
                d += f - g) : (u += t[T + 0] * f,
                c += t[T + 1] * f,
                p += t[T + 2] * f,
                d += f) : (g || 0 == g) && (u += -t[b + 0] * g,
                c += -t[b + 1] * g,
                p += -t[b + 2] * g,
                d += -g);
            x ? t.set(o, l) : n(t, o, l)
        }
    }
    function h(t, e, i, r) {
        var n;
        n = x ? new Uint8ClampedArray(4 * i) : new Array(4 * i);
        for (var o = 4 * e, s = 2 * r + 1, a = 0; e > a; a++) {
            for (var h = 4 * a, l = 0, u = 0, c = 0, p = 0, d = 0, f = 0, g = -r * o, y = r * o + o; y > g; g += o) {
                var v = h + g;
                h > v || v >= h + i * o || (d = t[v + 3],
                l += t[v + 0] * d,
                u += t[v + 1] * d,
                c += t[v + 2] * d,
                p += d)
            }
            for (var g = h, y = h + i * o, $ = 0, m = h - r * o, b = h + (r + 1) * o; y > g; g += o,
            $ += 4,
            b += o,
            m += o)
                0 === p ? (n[$ + 0] = 0,
                n[$ + 1] = 0,
                n[$ + 2] = 0,
                n[$ + 3] = 0) : (n[$ + 0] = l / p,
                n[$ + 1] = u / p,
                n[$ + 2] = c / p,
                n[$ + 3] = p / s),
                d = t[b + 3],
                f = t[m + 3],
                d || 0 == d ? f || 0 == f ? (l += t[b + 0] * d - t[m + 0] * f,
                u += t[b + 1] * d - t[m + 1] * f,
                c += t[b + 2] * d - t[m + 2] * f,
                p += d - f) : (l += t[b + 0] * d,
                u += t[b + 1] * d,
                c += t[b + 2] * d,
                p += d) : (f || 0 == f) && (l += -t[m + 0] * f,
                u += -t[m + 1] * f,
                c += -t[m + 2] * f,
                p += -f);
            for (var T = 4 * a, y = T + i * o, _ = 0; y > T; T += o,
            _ += 4)
                t[T + 0] = n[_ + 0],
                t[T + 1] = n[_ + 1],
                t[T + 2] = n[_ + 2],
                t[T + 3] = n[_ + 3]
        }
    }
    function l(t, e, i, r, o, a, h, l, f) {
        var g = u(t, r);
        c(g, e, i, h, l),
        s(g, e, i, o, a),
        p(g, f),
        d(g, t),
        t.set(g),
        x ? t.set(g) : n(t, g)
    }
    function u(t, e) {
        e || (e = [0, 0, 0, 0]);
        var i;
        x ? i = new Uint8ClampedArray(t) : (i = new Array(t.length),
        n(i, t));
        for (var r = 0, o = i.length; o > r; r += 4) {
            var s = i[r + 3];
            i[r + 0] = e[0] * s,
            i[r + 1] = e[1] * s,
            i[r + 2] = e[2] * s
        }
        return i
    }
    function c(t, e, i, r, o) {
        var s, a, h = Math.sin(r) * o | 0, l = Math.cos(r) * o | 0;
        if (x) {
            s = new Int32Array(t.buffer),
            a = new Int32Array(s.length);
            for (var u = 0; i > u; u++) {
                var c = u + h;
                if (!(0 > c || c > i))
                    for (var p = 0; e > p; p++) {
                        var d = p + l;
                        0 > d || d > e || (a[c * e + d] = s[u * e + p])
                    }
            }
            s.set(a)
        } else {
            s = t,
            a = new Array(s.length);
            for (var u = 0; i > u; u++) {
                var c = u + h;
                if (!(0 > c || c > i))
                    for (var p = 0; e > p; p++) {
                        var d = p + l;
                        0 > d || d > e || (a[4 * (c * e + d) + 0] = s[4 * (u * e + p) + 0],
                        a[4 * (c * e + d) + 1] = s[4 * (u * e + p) + 1],
                        a[4 * (c * e + d) + 2] = s[4 * (u * e + p) + 2],
                        a[4 * (c * e + d) + 3] = s[4 * (u * e + p) + 3])
                    }
            }
            n(s, a)
        }
    }
    function p(t, e) {
        for (var i = 0, r = t.length; r > i; i += 4)
            t[i + 3] *= e
    }
    function d(t, e) {
        for (var i = 0, r = t.length; r > i; i += 4) {
            var n = t[i + 0]
              , o = t[i + 1]
              , s = t[i + 2]
              , a = t[i + 3] / 255
              , h = e[i + 0]
              , l = e[i + 1]
              , u = e[i + 2]
              , c = e[i + 3] / 255;
            t[i + 0] = h + n * (1 - c),
            t[i + 1] = l + o * (1 - c),
            t[i + 2] = u + s * (1 - c),
            t[i + 3] = 255 * (c + a * (1 - c))
        }
    }
    function f(t, e, i) {
        return t * (1 - i) + e * i
    }
    function g(t, e, i, r, o, s, a, h, l, u, c, p) {
        var d;
        d = x ? new Uint8ClampedArray(t.length) : new Array(t.length);
        for (var g, y, v = r[3], $ = 0, m = 0, b = h * Math.cos(a), T = h * Math.sin(a), _ = 7, E = 12, O = 3.141592653589793, F = o / _, w = s / _, C = 0; e > C; C++)
            for (var R = 0; i > R; R++) {
                for (var S = 0, P = R * e * 4 + 4 * C, D = 0, L = 0, M = t[P + 0] / 255, A = t[P + 1] / 255, N = t[P + 2] / 255, B = t[P + 3] / 255, I = 0; 2 * O >= I; I += 2 * O / E) {
                    g = Math.cos(I + S),
                    y = Math.sin(I + S);
                    for (var j = 0; _ > j; j++) {
                        $ = j * F * g,
                        m = j * w * y;
                        var k = Math.round(C + $ - b)
                          , U = Math.round(R + m - T)
                          , X = 0;
                        if (k >= e || 0 > k || 0 > U || U >= i)
                            X = 0;
                        else {
                            var Y = U * e * 4 + 4 * k;
                            X = t[Y + 3] / 255
                        }
                        D += (_ - j) * X,
                        L += _ - j
                    }
                }
                B = Math.max(B, 1e-4);
                var H = D / L * l * v * (1 - u) * Math.max(Math.min(p, c), 1 - B)
                  , W = (L - D) / L * l * v * u * B;
                B = Math.max(B * c * (1 - p), 1e-4);
                var G = W / (W + B)
                  , V = f(M, r[0], G)
                  , z = f(A, r[1], G)
                  , Z = f(N, r[2], G)
                  , q = H / (W + B + H)
                  , J = f(V, r[0], q)
                  , K = f(z, r[1], q)
                  , Q = f(Z, r[2], q)
                  , te = Math.min(B + H + W, 1);
                d[P + 0] = 255 * J,
                d[P + 1] = 255 * K,
                d[P + 2] = 255 * Q,
                d[P + 3] = 255 * te
            }
        x ? t.set(d) : n(t, d)
    }
    var y = ["source-over", "lighter", "destination-out"]
      , v = "source-over"
      , $ = "#000000"
      , m = {
        none: "butt",
        square: "square",
        round: "round"
    }
      , b = []
      , T = function() {
        function n() {
            this.nestLevel = 0,
            this.renderingMask = !1
        }
        return n.prototype.render = function(t, e, i, r, n) {
            this.nestLevel++;
            var o = e.context
              , s = n ? t : null
              , a = this.drawDisplayObject(t, o, r, i, null , null , s);
            if (this.nestLevel--,
            0 === this.nestLevel) {
                b.length > 6 && (b.length = 6);
                for (var h = b.length, l = 0; h > l; l++)
                    b[l].resize(0, 0)
            }
            return a
        }
        ,
        n.prototype.drawDisplayObject = function(e, i, r, n, o, s, a) {
            var h, l = 0;
            if (o && !a ? (o.isDirty && (l += o.drawToSurface()),
            h = o.$renderNode) : h = e.$getRenderNode(),
            h) {
                if (r) {
                    var u = h.renderRegion;
                    if (s && !s.intersects(u))
                        h.needRedraw = !1;
                    else if (!h.needRedraw)
                        for (var c = r.length, p = 0; c > p; p++)
                            if (u.intersects(r[p])) {
                                h.needRedraw = !0;
                                break
                            }
                } else
                    h.needRedraw = !0;
                if (h.needRedraw) {
                    var d = void 0
                      , f = void 0;
                    a ? (d = e.$getConcatenatedAlphaAt(a, e.$getConcatenatedAlpha()),
                    f = t.Matrix.create().copyFrom(e.$getConcatenatedMatrix()),
                    e.$getConcatenatedMatrixAt(a, f),
                    n.$preMultiplyInto(f, f),
                    i.setTransform(f.a, f.b, f.c, f.d, f.tx, f.ty),
                    t.Matrix.release(f)) : (d = h.renderAlpha,
                    f = h.renderMatrix,
                    i.setTransform(f.a, f.b, f.c, f.d, f.tx + n.tx, f.ty + n.ty)),
                    i.globalAlpha = d,
                    l += this.renderNode(h, i),
                    h.needRedraw = !1
                }
            }
            if (o && !a)
                return l;
            var g = e.$children;
            if (g)
                for (var y = g.length, v = 0; y > v; v++) {
                    var $ = g[v];
                    if (!(!$.$visible || $.$alpha <= 0 || $.$maskedObject)) {
                        var m = $.$getFilters();
                        m && m.length > 0 ? l += this.drawWithFilter($, i, r, n, s, a) : 0 !== $.$blendMode || $.$mask && ($.$mask.$parentDisplayList || a) ? l += this.drawWithClip($, i, r, n, s, a) : $.$scrollRect || $.$maskRect ? l += this.drawWithScrollRect($, i, r, n, s, a) : $.isFPS ? this.drawDisplayObject($, i, r, n, $.$displayList, s, a) : l += this.drawDisplayObject($, i, r, n, $.$displayList, s, a)
                    }
                }
            return l
        }
        ,
        n.prototype.drawWithFilter = function(e, i, r, n, a, h) {
            if (t.Capabilities.runtimeType == t.RuntimeType.NATIVE) {
                var u, c = 0, p = e.$getFilters(), d = 0 !== e.$blendMode;
                if (d && (u = y[e.$blendMode],
                u || (u = v)),
                1 == p.length && "colorTransform" == p[0].type && !e.$children)
                    return d && (i.globalCompositeOperation = u),
                    i.setGlobalShader(p[0]),
                    c += e.$mask && (e.$mask.$parentDisplayList || h) ? this.drawWithClip(e, i, r, n, a, h) : e.$scrollRect || e.$maskRect ? this.drawWithScrollRect(e, i, r, n, a, h) : this.drawDisplayObject(e, i, r, n, e.$displayList, a, h),
                    i.setGlobalShader(null ),
                    d && (i.globalCompositeOperation = v),
                    c;
                var f = t.Matrix.create();
                f.copyFrom(e.$getConcatenatedMatrix()),
                h && e.$getConcatenatedMatrixAt(h, f);
                var $;
                $ = t.sys.Region.create();
                var m = e.$getOriginalBounds();
                $.updateRegion(m, f);
                var T = this.createRenderBuffer($.width, $.height);
                T.context.setTransform(1, 0, 0, 1, -$.minX, -$.minY);
                var x = t.Matrix.create().setTo(1, 0, 0, 1, -$.minX, -$.minY);
                return c += e.$mask && (e.$mask.$parentDisplayList || h) ? this.drawWithClip(e, T.context, r, x, $, h) : e.$scrollRect || e.$maskRect ? this.drawWithScrollRect(e, T.context, r, x, $, h) : this.drawDisplayObject(e, T.context, r, x, e.$displayList, $, h),
                t.Matrix.release(x),
                c > 0 && (d && (i.globalCompositeOperation = u),
                c++,
                i.globalAlpha = 1,
                i.setTransform(1, 0, 0, 1, $.minX + n.tx, $.minY + n.ty),
                i.setGlobalShader(p[0]),
                i.drawImage(T.surface, 0, 0, T.width, T.height, 0, 0, T.width, T.height),
                i.setGlobalShader(null ),
                d && (i.globalCompositeOperation = v)),
                b.push(T),
                t.sys.Region.release($),
                t.Matrix.release(f),
                c
            }
            var _, E = 0, O = e.$getFilters(), F = O.length, w = 0 !== e.$blendMode;
            w && (_ = y[e.$blendMode],
            _ || (_ = v));
            var C = t.Matrix.create();
            C.copyFrom(e.$getConcatenatedMatrix()),
            h && e.$getConcatenatedMatrixAt(h, C);
            var R;
            R = t.sys.Region.create();
            var S = e.$getOriginalBounds();
            R.updateRegion(S, C);
            var P = this.createRenderBuffer(R.width, R.height)
              , D = P.context;
            D.setTransform(1, 0, 0, 1, -R.minX, -R.minY);
            var L = t.Matrix.create().setTo(1, 0, 0, 1, -R.minX, -R.minY);
            if (E += e.$mask && (e.$mask.$parentDisplayList || h) ? this.drawWithClip(e, D, r, L, R, h) : e.$scrollRect || e.$maskRect ? this.drawWithScrollRect(e, D, r, L, R, h) : this.drawDisplayObject(e, D, r, L, e.$displayList, R, h),
            t.Matrix.release(L),
            E > 0) {
                w && (i.globalCompositeOperation = _),
                E++,
                i.globalAlpha = 1,
                i.setTransform(1, 0, 0, 1, R.minX + n.tx, R.minY + n.ty);
                for (var M = D.getImageData(0, 0, P.surface.width, P.surface.height), A = 0; F > A; A++) {
                    var N = O[A];
                    if ("colorTransform" == N.type)
                        o(M.data, P.surface.width, P.surface.height, N.$matrix);
                    else if ("blur" == N.type)
                        s(M.data, P.surface.width, P.surface.height, N.$blurX, N.$blurY);
                    else if ("glow" == N.type) {
                        var B = N.$red
                          , I = N.$green
                          , j = N.$blue
                          , k = N.$alpha;
                        N.$inner || N.$knockout || N.$hideObject ? g(M.data, P.surface.width, P.surface.height, [B / 255, I / 255, j / 255, k], N.$blurX, N.$blurY, N.$angle ? N.$angle / 180 * Math.PI : 0, N.$distance || 0, N.$strength, N.$inner ? 1 : 0, N.$knockout ? 0 : 1, N.$hideObject ? 1 : 0) : l(M.data, P.surface.width, P.surface.height, [B / 255, I / 255, j / 255, k / 255], N.$blurX, N.$blurY, N.$angle ? N.$angle / 180 * Math.PI : 0, N.$distance || 0, N.$strength)
                    }
                }
                D.putImageData(M, 0, 0),
                i.drawImage(P.surface, 0, 0),
                w && (i.globalCompositeOperation = v)
            }
            return b.push(P),
            t.sys.Region.release(R),
            t.Matrix.release(C),
            E
        }
        ,
        n.prototype.drawWithClip = function(e, i, r, n, o, s) {
            var a, h = 0, l = 0 !== e.$blendMode;
            l && (a = y[e.$blendMode],
            a || (a = v));
            var u, c = e.$scrollRect ? e.$scrollRect : e.$maskRect, p = e.$mask;
            if (p && (u = p.$getRenderNode())) {
                var d = u.renderMatrix;
                if (0 == d.a && 0 == d.b || 0 == d.c && 0 == d.d)
                    return h
            }
            var f, g = t.Matrix.create();
            if (g.copyFrom(e.$getConcatenatedMatrix()),
            e.$parentDisplayList) {
                var $ = e.$parentDisplayList.root;
                $ !== e.$stage && e.$getConcatenatedMatrixAt($, g)
            }
            var m;
            if (p) {
                m = p.$getOriginalBounds(),
                f = t.sys.Region.create();
                var T = t.Matrix.create();
                T.copyFrom(p.$getConcatenatedMatrix()),
                f.updateRegion(m, T),
                t.Matrix.release(T)
            }
            var x;
            if (c && (x = t.sys.Region.create(),
            x.updateRegion(c, g)),
            x && f ? (x.intersect(f),
            t.sys.Region.release(f)) : !x && f && (x = f),
            x) {
                if (x.isEmpty() || o && !o.intersects(x))
                    return t.sys.Region.release(x),
                    t.Matrix.release(g),
                    h
            } else
                x = t.sys.Region.create(),
                m = e.$getOriginalBounds(),
                x.updateRegion(m, g);
            var _ = !1;
            if (r) {
                for (var E = r.length, O = 0; E > O; O++)
                    if (x.intersects(r[O])) {
                        _ = !0;
                        break
                    }
            } else
                _ = !0;
            if (!_)
                return t.sys.Region.release(x),
                t.Matrix.release(g),
                h;
            if (!(p || e.$children && 0 != e.$children.length)) {
                if (c) {
                    var T = g;
                    i.save(),
                    i.setTransform(T.a, T.b, T.c, T.d, T.tx - x.minX, T.ty - x.minY),
                    i.beginPath(),
                    i.rect(c.x, c.y, c.width, c.height),
                    i.clip()
                }
                return l && (i.globalCompositeOperation = a),
                h += this.drawDisplayObject(e, i, r, n, e.$displayList, o, s),
                l && (i.globalCompositeOperation = v),
                c && i.restore(),
                h
            }
            if (p && t.Capabilities.$runtimeType == t.RuntimeType.WEB && (!p.$children || 0 == p.$children.length) && u && 3 == u.type && 1 == u.drawData.length && 1 == u.drawData[0].type && 1 == u.drawData[0].fillAlpha) {
                this.renderingMask = !0,
                i.save();
                var F = this.drawDisplayObject(p, i, r, n, p.$displayList, o, s);
                if (this.renderingMask = !1,
                c) {
                    var T = g;
                    i.setTransform(T.a, T.b, T.c, T.d, T.tx - x.minX, T.ty - x.minY),
                    i.beginPath(),
                    i.rect(c.x, c.y, c.width, c.height),
                    i.clip()
                }
                return F += this.drawDisplayObject(e, i, r, n, e.$displayList, o, s),
                i.restore(),
                F
            }
            var w = this.createRenderBuffer(x.width, x.height)
              , C = w.context;
            if (!C)
                return h += this.drawDisplayObject(e, i, r, n, e.$displayList, o, s),
                t.sys.Region.release(x),
                t.Matrix.release(g),
                h;
            C.setTransform(1, 0, 0, 1, -x.minX, -x.minY);
            var R = t.Matrix.create().setTo(1, 0, 0, 1, -x.minX, -x.minY);
            if (h += this.drawDisplayObject(e, C, r, R, e.$displayList, x, s),
            p)
                if (t.Capabilities.$runtimeType == t.RuntimeType.WEB && u && 1 == u.$getRenderCount() || p.$displayList)
                    C.globalCompositeOperation = "destination-in",
                    h += this.drawDisplayObject(p, C, r, R, p.$displayList, x, s);
                else {
                    var S = this.createRenderBuffer(x.width, x.height)
                      , P = S.context;
                    if (!P)
                        return h += this.drawDisplayObject(e, i, r, n, e.$displayList, o, s),
                        b.push(w),
                        t.sys.Region.release(x),
                        t.Matrix.release(g),
                        h;
                    P.setTransform(1, 0, 0, 1, -x.minX, -x.minY),
                    R = t.Matrix.create().setTo(1, 0, 0, 1, -x.minX, -x.minY),
                    h += this.drawDisplayObject(p, P, r, R, p.$displayList, x, s),
                    C.globalCompositeOperation = "destination-in",
                    C.setTransform(1, 0, 0, 1, 0, 0),
                    C.globalAlpha = 1,
                    C.drawImage(S.surface, 0, 0),
                    b.push(S)
                }
            if (t.Matrix.release(R),
            h > 0) {
                if (h++,
                l && (i.globalCompositeOperation = a),
                c) {
                    var T = g;
                    i.save(),
                    i.setTransform(T.a, T.b, T.c, T.d, T.tx - x.minX, T.ty - x.minY),
                    i.beginPath(),
                    i.rect(c.x, c.y, c.width, c.height),
                    i.clip()
                }
                i.globalAlpha = 1,
                i.setTransform(1, 0, 0, 1, x.minX + n.tx, x.minY + n.ty),
                i.drawImage(w.surface, 0, 0),
                c && i.restore(),
                l && (i.globalCompositeOperation = v)
            }
            return b.push(w),
            t.sys.Region.release(x),
            t.Matrix.release(g),
            h
        }
        ,
        n.prototype.drawWithScrollRect = function(e, i, r, n, o, s) {
            var a = 0
              , h = e.$scrollRect ? e.$scrollRect : e.$maskRect;
            if (h.isEmpty())
                return a;
            var l = t.Matrix.create();
            if (l.copyFrom(e.$getConcatenatedMatrix()),
            s)
                e.$getConcatenatedMatrixAt(s, l);
            else if (e.$parentDisplayList) {
                var u = e.$parentDisplayList.root;
                u !== e.$stage && e.$getConcatenatedMatrixAt(u, l)
            }
            var c = t.sys.Region.create();
            if (c.updateRegion(h, l),
            c.isEmpty() || o && !o.intersects(c))
                return t.sys.Region.release(c),
                t.Matrix.release(l),
                a;
            var p = !1;
            if (r) {
                for (var d = r.length, f = 0; d > f; f++)
                    if (c.intersects(r[f])) {
                        p = !0;
                        break
                    }
            } else
                p = !0;
            return p ? (i.save(),
            i.setTransform(l.a, l.b, l.c, l.d, l.tx + n.tx, l.ty + n.ty),
            i.beginPath(),
            i.rect(h.x, h.y, h.width, h.height),
            i.clip(),
            a += this.drawDisplayObject(e, i, r, n, e.$displayList, c, s),
            i.restore(),
            t.sys.Region.release(c),
            t.Matrix.release(l),
            a) : (t.sys.Region.release(c),
            t.Matrix.release(l),
            a)
        }
        ,
        n.prototype.drawNodeToBuffer = function(t, e, i, r) {
            var n = e.context;
            n.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty),
            this.renderNode(t, n, r)
        }
        ,
        n.prototype.renderNode = function(t, e, i) {
            var r = 0;
            switch (t.type) {
            case 1:
                r = this.renderBitmap(t, e);
                break;
            case 2:
                r = 1,
                this.renderText(t, e);
                break;
            case 3:
                r = this.renderGraphics(t, e, i);
                break;
            case 4:
                r = this.renderGroup(t, e);
                break;
            case 6:
                e.globalAlpha = t.drawData[0];
                break;
            case 7:
                r = this.renderMesh(t, e)
            }
            return r
        }
        ,
        n.prototype.renderMesh = function(e, i) {
            if (t.Capabilities.runtimeType != t.RuntimeType.NATIVE)
                return 0;
            var r = e.image
              , n = e.drawData
              , o = n.length
              , s = 0
              , a = e.matrix;
            for (a && (i.saveTransform(),
            i.transform(a.a, a.b, a.c, a.d, a.tx, a.ty)); o > s; )
                i.drawMesh(r.source, n[s++], n[s++], n[s++], n[s++], n[s++], n[s++], n[s++], n[s++], e.imageWidth, e.imageHeight, e.uvs, e.vertices, e.indices, e.bounds);
            return a && i.restoreTransform(),
            1
        }
        ,
        n.prototype.renderBitmap = function(e, i) {
            var r = e.image;
            if (!r || !r.source)
                return 0;
            i.$imageSmoothingEnabled != e.smoothing && (i.imageSmoothingEnabled = e.smoothing,
            i.$imageSmoothingEnabled = e.smoothing);
            var n = e.drawData
              , s = n.length
              , a = 0
              , h = e.matrix
              , l = e.blendMode
              , u = e.alpha
              , c = !1;
            h && (i.saveTransform ? i.saveTransform() : i.save(),
            c = !0,
            i.transform(h.a, h.b, h.c, h.d, h.tx, h.ty)),
            l && (i.globalCompositeOperation = y[l]);
            var p;
            u == u && (p = i.globalAlpha,
            i.globalAlpha *= u);
            var d = 0
              , f = e.filter;
            if (f && 8 == s)
                if (t.Capabilities.runtimeType == t.RuntimeType.NATIVE) {
                    for (egret_native.Graphics.setGlobalShader(f); s > a; )
                        d++,
                        i.drawImage(r.source, n[a++], n[a++], n[a++], n[a++], n[a++], n[a++], n[a++], n[a++]);
                    egret_native.Graphics.setGlobalShader(null )
                } else {
                    var g = this.createRenderBuffer(n[6], n[7])
                      , $ = g.context;
                    d++,
                    $.drawImage(r.source, n[0], n[1], n[2], n[3], 0, 0, n[6], n[7]),
                    d++;
                    var m = $.getImageData(0, 0, g.surface.width, g.surface.height);
                    o(m.data, g.surface.width, g.surface.height, f.$matrix),
                    $.putImageData(m, 0, 0),
                    i.drawImage(g.surface, 0, 0, n[6], n[7], n[4], n[5], n[6], n[7]),
                    b.push(g)
                }
            else
                for (; s > a; )
                    d++,
                    i.drawImage(r.source, n[a++], n[a++], n[a++], n[a++], n[a++], n[a++], n[a++], n[a++]);
            return c ? i.restoreTransform ? (i.restoreTransform(),
            l && (i.globalCompositeOperation = v),
            u == u && (i.globalAlpha = p)) : i.restore() : (l && (i.globalCompositeOperation = v),
            u == u && (i.globalAlpha = p)),
            d
        }
        ,
        n.prototype.renderText = function(i, r) {
            r.textAlign = "left",
            r.textBaseline = "middle",
            r.lineJoin = "round";
            for (var n = i.drawData, o = n.length, s = 0; o > s; ) {
                var a = n[s++]
                  , h = n[s++]
                  , l = n[s++]
                  , u = n[s++];
                r.font = e(i, u);
                var c = null == u.textColor ? i.textColor : u.textColor
                  , p = null == u.strokeColor ? i.strokeColor : u.strokeColor
                  , d = null == u.stroke ? i.stroke : u.stroke;
                r.fillStyle = t.toColorString(c),
                r.strokeStyle = t.toColorString(p),
                d && (r.lineWidth = 2 * d,
                r.strokeText(l, a, h)),
                r.fillText(l, a, h)
            }
        }
        ,
        n.prototype.renderGraphics = function(t, e, n) {
            var o = t.drawData
              , s = o.length;
            n = !!n;
            for (var a = 0; s > a; a++) {
                var h = o[a];
                switch (h.type) {
                case 1:
                    var l = h;
                    e.fillStyle = n ? $ : i(l.fillColor, l.fillAlpha),
                    this.renderPath(h, e),
                    this.renderingMask ? e.clip() : e.fill();
                    break;
                case 2:
                    var u = h;
                    e.fillStyle = n ? $ : r(e, u.gradientType, u.colors, u.alphas, u.ratios, u.matrix),
                    e.save();
                    var c = u.matrix;
                    this.renderPath(h, e),
                    e.transform(c.a, c.b, c.c, c.d, c.tx, c.ty),
                    e.fill(),
                    e.restore();
                    break;
                case 3:
                    var p = h
                      , d = p.lineWidth;
                    e.lineWidth = d,
                    e.strokeStyle = n ? $ : i(p.lineColor, p.lineAlpha),
                    e.lineCap = m[p.caps],
                    e.lineJoin = p.joints,
                    e.miterLimit = p.miterLimit;
                    var f = 1 === d || 3 === d;
                    f && e.translate(.5, .5),
                    this.renderPath(h, e),
                    e.stroke(),
                    f && e.translate(-.5, -.5)
                }
            }
            return 0 == s ? 0 : 1
        }
        ,
        n.prototype.renderPath = function(t, e) {
            e.beginPath();
            for (var i = t.$data, r = t.$commands, n = r.length, o = 0, s = 0; n > s; s++) {
                var a = r[s];
                switch (a) {
                case 4:
                    e.bezierCurveTo(i[o++], i[o++], i[o++], i[o++], i[o++], i[o++]);
                    break;
                case 3:
                    e.quadraticCurveTo(i[o++], i[o++], i[o++], i[o++]);
                    break;
                case 2:
                    e.lineTo(i[o++], i[o++]);
                    break;
                case 1:
                    e.moveTo(i[o++], i[o++])
                }
            }
        }
        ,
        n.prototype.renderGroup = function(t, e) {
            var i = t.matrix
              , r = !1;
            i && (e.saveTransform ? e.saveTransform() : e.save(),
            r = !0,
            e.transform(i.a, i.b, i.c, i.d, i.tx, i.ty));
            for (var n = 0, o = t.drawData, s = o.length, a = 0; s > a; a++) {
                var h = o[a];
                n += this.renderNode(h, e)
            }
            return r && (e.restoreTransform ? e.restoreTransform() : e.restore()),
            n
        }
        ,
        n.prototype.createRenderBuffer = function(e, i) {
            var r = b.pop();
            return r ? r.resize(e, i, !0) : r = new t.sys.CanvasRenderBuffer(e,i),
            r
        }
        ,
        n
    }();
    t.CanvasRenderer = T,
    __reflect(T.prototype, "egret.CanvasRenderer", ["egret.sys.SystemRenderer"]);
    var x = !1;
    try {
        x = void 0 !== typeof Uint8ClampedArray
    } catch (_) {}
}(egret || (egret = {}));
var egret;
!function(t) {
    t.DeviceOrientation = null
}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.WEB = "web",
    e.NATIVE = "native",
    t.RuntimeType = e,
    __reflect(e.prototype, "egret.RuntimeType");
    var i = function() {
        function t() {}
        return Object.defineProperty(t, "language", {
            get: function() {
                return t.$language
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "isMobile", {
            get: function() {
                return t.$isMobile
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "os", {
            get: function() {
                return t.$os
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "runtimeType", {
            get: function() {
                return t.$runtimeType
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "supportVersion", {
            get: function() {
                return t.$supportVersion
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "engineVersion", {
            get: function() {
                return "4.0.0"
            },
            enumerable: !0,
            configurable: !0
        }),
        t.$setNativeCapabilities = function(e) {
            var i = e.split("-");
            if (i.length <= 4) {
                var r = i[0];
                switch (r) {
                case "android":
                    r = "Android";
                    break;
                case "ios":
                    r = "iOS"
                }
                t.$os = r;
                var n = i[2].substring(1, i[2].length);
                t.$supportVersion = n
            }
        }
        ,
        Object.defineProperty(t, "renderMode", {
            get: function() {
                return t.$renderMode
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "boundingClientWidth", {
            get: function() {
                return t.$boundingClientWidth
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "boundingClientHeight", {
            get: function() {
                return t.$boundingClientHeight
            },
            enumerable: !0,
            configurable: !0
        }),
        t
    }();
    i.$language = "zh-CN",
    i.$os = "Unknown",
    i.$runtimeType = "Unknown",
    i.$supportVersion = "Unknown",
    i.$renderMode = "Unknown",
    i.$boundingClientWidth = 0,
    i.$boundingClientHeight = 0,
    t.Capabilities = i,
    __reflect(i.prototype, "egret.Capabilities")
}(egret || (egret = {}));
var testDeviceType = function() {
    if (!this.navigator)
        return !0;
    var t = navigator.userAgent.toLowerCase();
    return -1 != t.indexOf("mobile") || -1 != t.indexOf("android")
}
  , testRuntimeType = function() {
    return this.navigator ? !0 : !1
}
;
egret.Capabilities.$isMobile = testDeviceType(),
egret.Capabilities.$runtimeType = testRuntimeType() ? egret.RuntimeType.WEB : egret.RuntimeType.NATIVE;
var egret;
!function(t) {
    t.BitmapFillMode = {
        REPEAT: "repeat",
        SCALE: "scale",
        CLIP: "clip"
    }
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t, e) {
        r[t] = e
    }
    function i(t) {
        return r[t]
    }
    var r = {};
    t.registerImplementation = e,
    t.getImplementation = i
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(t) {
        function e(e, i) {
            var r = t.call(this, e) || this;
            return r.firstCharHeight = 0,
            "string" == typeof i ? r.charList = r.parseConfig(i) : i && i.hasOwnProperty("frames") ? r.charList = i.frames : r.charList = {},
            r
        }
        return __extends(e, t),
        e.prototype.getTexture = function(t) {
            var e = this._textureMap[t];
            if (!e) {
                var i = this.charList[t];
                if (!i)
                    return null ;
                e = this.createTexture(t, i.x, i.y, i.w, i.h, i.offX, i.offY, i.sourceW, i.sourceH),
                this._textureMap[t] = e
            }
            return e
        }
        ,
        e.prototype.getConfig = function(t, e) {
            return this.charList[t] ? this.charList[t][e] : 0
        }
        ,
        e.prototype._getFirstCharHeight = function() {
            if (0 == this.firstCharHeight)
                for (var t in this.charList) {
                    var e = this.charList[t];
                    if (e) {
                        var i = e.sourceH;
                        if (void 0 === i) {
                            var r = e.h;
                            void 0 === r && (r = 0);
                            var n = e.offY;
                            void 0 === n && (n = 0),
                            i = r + n
                        }
                        if (0 >= i)
                            continue;this.firstCharHeight = i;
                        break
                    }
                }
            return this.firstCharHeight
        }
        ,
        e.prototype.parseConfig = function(t) {
            t = t.split("\r\n").join("\n");
            for (var e = t.split("\n"), i = this.getConfigByKey(e[3], "count"), r = {}, n = 4; 4 + i > n; n++) {
                var o = e[n]
                  , s = String.fromCharCode(this.getConfigByKey(o, "id"))
                  , a = {};
                r[s] = a,
                a.x = this.getConfigByKey(o, "x"),
                a.y = this.getConfigByKey(o, "y"),
                a.w = this.getConfigByKey(o, "width"),
                a.h = this.getConfigByKey(o, "height"),
                a.offX = this.getConfigByKey(o, "xoffset"),
                a.offY = this.getConfigByKey(o, "yoffset"),
                a.xadvance = this.getConfigByKey(o, "xadvance")
            }
            return r
        }
        ,
        e.prototype.getConfigByKey = function(t, e) {
            for (var i = t.split(" "), r = 0, n = i.length; n > r; r++) {
                var o = i[r];
                if (e == o.substring(0, e.length)) {
                    var s = o.substring(e.length + 1);
                    return parseInt(s)
                }
            }
            return 0
        }
        ,
        e
    }(t.SpriteSheet);
    t.BitmapFont = e,
    __reflect(e.prototype, "egret.BitmapFont")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.$textOffsetX = 0,
            i.$textOffsetY = 0,
            i.$textStartX = 0,
            i.$textStartY = 0,
            i.$lineHeights = [],
            i.$renderNode = new t.sys.BitmapNode,
            i.$BitmapText = {
                0: 0 / 0,
                1: 0 / 0,
                2: "",
                3: 0,
                4: 0,
                5: null ,
                6: !1,
                7: !1,
                8: !1,
                9: !1,
                10: "left",
                11: "top",
                12: t.Bitmap.defaultSmoothing
            },
            i
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "smoothing", {
            get: function() {
                var t = this.$BitmapText;
                return t[12]
            },
            set: function(t) {
                t = !!t;
                var e = this.$BitmapText;
                t != e[12] && (e[12] = t,
                this.$invalidate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "text", {
            get: function() {
                return this.$BitmapText[2]
            },
            set: function(t) {
                this.$setText(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$setText = function(t) {
            null == t && (t = ""),
            t = String(t);
            var e = this.$BitmapText;
            return t == e[2] ? !1 : (e[2] = t,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        i.prototype.$getWidth = function() {
            var t = this.$BitmapText[0];
            return isNaN(t) ? this.$getContentBounds().width : t
        }
        ,
        i.prototype.$setWidth = function(t) {
            var e = this.$BitmapText;
            return 0 > t || t == e[0] ? !1 : (e[0] = t,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        i.prototype.$invalidateContentBounds = function() {
            e.prototype.$invalidateContentBounds.call(this),
            this.$BitmapText[7] = !0
        }
        ,
        i.prototype.$getHeight = function() {
            var t = this.$BitmapText[1];
            return isNaN(t) ? this.$getContentBounds().height : t
        }
        ,
        i.prototype.$setHeight = function(t) {
            var e = this.$BitmapText;
            return 0 > t || t == e[1] ? !1 : (e[1] = t,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        Object.defineProperty(i.prototype, "font", {
            get: function() {
                return this.$BitmapText[5]
            },
            set: function(t) {
                this.$setFont(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$setFont = function(t) {
            var e = this.$BitmapText;
            return e[5] == t ? !1 : (e[5] = t,
            this.$BitmapText[6] = !0,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        Object.defineProperty(i.prototype, "lineSpacing", {
            get: function() {
                return this.$BitmapText[3]
            },
            set: function(t) {
                this.$setLineSpacing(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$setLineSpacing = function(t) {
            t = +t || 0;
            var e = this.$BitmapText;
            return e[3] == t ? !1 : (e[3] = t,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        Object.defineProperty(i.prototype, "letterSpacing", {
            get: function() {
                return this.$BitmapText[4]
            },
            set: function(t) {
                this.$setLetterSpacing(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$setLetterSpacing = function(t) {
            t = +t || 0;
            var e = this.$BitmapText;
            return e[4] == t ? !1 : (e[4] = t,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        Object.defineProperty(i.prototype, "textAlign", {
            get: function() {
                return this.$BitmapText[10]
            },
            set: function(t) {
                this.$setTextAlign(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$setTextAlign = function(t) {
            var e = this.$BitmapText;
            return e[10] == t ? !1 : (e[10] = t,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        Object.defineProperty(i.prototype, "verticalAlign", {
            get: function() {
                return this.$BitmapText[11]
            },
            set: function(t) {
                this.$setVerticalAlign(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$setVerticalAlign = function(t) {
            var e = this.$BitmapText;
            return e[11] == t ? !1 : (e[11] = t,
            this.$invalidateContentBounds(),
            !0)
        }
        ,
        i.prototype.$render = function() {
            var e = this.$BitmapText
              , r = this.$getTextLines()
              , n = r.length;
            if (0 != n) {
                var o = this.$textLinesWidth
                  , s = e[5]
                  , a = this.$renderNode;
                s.$texture && (a.image = s.$texture._bitmapData),
                a.smoothing = e[12];
                for (var h = s._getFirstCharHeight(), l = Math.ceil(h * i.EMPTY_FACTOR), u = !isNaN(e[1]), c = e[8], p = e[0], d = e[1], f = e[10], g = this.$textOffsetY + this.$textStartY, y = this.$lineHeights, v = 0; n > v; v++) {
                    var $ = y[v];
                    if (u && v > 0 && g + $ > d)
                        break;
                    var m = r[v]
                      , b = m.length
                      , T = this.$textOffsetX;
                    if (f != t.HorizontalAlign.LEFT) {
                        var x = p > c ? p : c;
                        f == t.HorizontalAlign.RIGHT ? T += x - o[v] : f == t.HorizontalAlign.CENTER && (T += Math.floor((x - o[v]) / 2))
                    }
                    for (var _ = 0; b > _; _++) {
                        var E = m.charAt(_)
                          , O = s.getTexture(E);
                        if (O) {
                            var F = O._bitmapWidth
                              , w = O._bitmapHeight;
                            a.imageWidth = O._sourceWidth,
                            a.imageHeight = O._sourceHeight,
                            a.drawImage(O._bitmapX, O._bitmapY, F, w, T + O._offsetX, g + O._offsetY, O.$getScaleBitmapWidth(), O.$getScaleBitmapHeight()),
                            T += (s.getConfig(E, "xadvance") || O.$getTextureWidth()) + e[4]
                        } else
                            " " == E ? T += l : t.$warn(1046, E)
                    }
                    g += $ + e[3]
                }
            }
        }
        ,
        i.prototype.$measureContentBounds = function(t) {
            var e = this.$getTextLines();
            0 == e.length ? t.setEmpty() : t.setTo(this.$textOffsetX + this.$textStartX, this.$textOffsetY + this.$textStartY, this.$BitmapText[8] - this.$textOffsetX, this.$BitmapText[9] - this.$textOffsetY)
        }
        ,
        Object.defineProperty(i.prototype, "textWidth", {
            get: function() {
                return this.$getTextLines(),
                this.$BitmapText[8]
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "textHeight", {
            get: function() {
                return this.$getTextLines(),
                this.$BitmapText[9]
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$getTextLines = function() {
            function e(t) {
                return m && n.length > 0 && f > m ? !1 : (f += l + c,
                a || h || (u -= p),
                n.push(t),
                s.push(l),
                o.push(u),
                d = Math.max(u, d),
                !0)
            }
            var r = this.$BitmapText;
            if (!r[7])
                return this.textLines;
            var n = [];
            this.textLines = n;
            var o = [];
            this.$textLinesWidth = o,
            r[7] = !1;
            var s = [];
            if (this.$lineHeights = s,
            !r[2] || !r[5])
                return n;
            for (var a, h, l, u, c = r[3], p = r[4], d = 0, f = 0, g = 0, y = 0, v = !isNaN(r[0]), $ = r[0], m = r[1], b = r[5], T = b._getFirstCharHeight(), x = Math.ceil(T * i.EMPTY_FACTOR), _ = r[2], E = _.split(/(?:\r\n|\r|\n)/), O = E.length, F = !0, w = 0; O > w; w++) {
                var C = E[w]
                  , R = C.length;
                l = 0,
                u = 0,
                a = !0,
                h = !1;
                for (var S = 0; R > S; S++) {
                    a || (u += p);
                    var P = C.charAt(S)
                      , D = void 0
                      , L = void 0
                      , M = 0
                      , A = 0
                      , N = b.getTexture(P);
                    if (N)
                        D = N.$getTextureWidth(),
                        L = N.$getTextureHeight(),
                        M = N._offsetX,
                        A = N._offsetY;
                    else {
                        if (" " != P) {
                            t.$warn(1046, P),
                            a && (a = !1);
                            continue
                        }
                        D = x,
                        L = T
                    }
                    if (a && (a = !1,
                    g = Math.min(M, g)),
                    F && (F = !1,
                    y = Math.min(A, y)),
                    v && S > 0 && u + D > $) {
                        if (!e(C.substring(0, S)))
                            break;
                        C = C.substring(S),
                        R = C.length,
                        S = 0,
                        u = S == R - 1 ? D : b.getConfig(P, "xadvance") || D,
                        l = L
                    } else
                        u += S == R - 1 ? D : b.getConfig(P, "xadvance") || D,
                        l = Math.max(L, l)
                }
                if (m && w > 0 && f > m)
                    break;
                if (h = !0,
                !e(C))
                    break
            }
            f -= c,
            r[8] = d,
            r[9] = f,
            this.$textOffsetX = g,
            this.$textOffsetY = y,
            this.$textStartX = 0,
            this.$textStartY = 0;
            var B;
            return $ > d && (B = r[10],
            B == t.HorizontalAlign.RIGHT ? this.$textStartX = $ - d : B == t.HorizontalAlign.CENTER && (this.$textStartX = Math.floor(($ - d) / 2))),
            m > f && (B = r[11],
            B == t.VerticalAlign.BOTTOM ? this.$textStartY = m - f : B == t.VerticalAlign.MIDDLE && (this.$textStartY = Math.floor((m - f) / 2))),
            n
        }
        ,
        i
    }(t.DisplayObject);
    e.EMPTY_FACTOR = .33,
    t.BitmapText = e,
    __reflect(e.prototype, "egret.BitmapText")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.LEFT = "left",
    e.RIGHT = "right",
    e.CENTER = "center",
    e.JUSTIFY = "justify",
    e.CONTENT_JUSTIFY = "contentJustify",
    t.HorizontalAlign = e,
    __reflect(e.prototype, "egret.HorizontalAlign")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function e() {
            this.replaceArr = [],
            this.resutlArr = [],
            this.initReplaceArr()
        }
        return e.prototype.initReplaceArr = function() {
            this.replaceArr = [],
            this.replaceArr.push([/&lt;/g, "<"]),
            this.replaceArr.push([/&gt;/g, ">"]),
            this.replaceArr.push([/&amp;/g, "&"]),
            this.replaceArr.push([/&quot;/g, '"']),
            this.replaceArr.push([/&apos;/g, "'"])
        }
        ,
        e.prototype.replaceSpecial = function(t) {
            for (var e = 0; e < this.replaceArr.length; e++) {
                var i = this.replaceArr[e][0]
                  , r = this.replaceArr[e][1];
                t = t.replace(i, r)
            }
            return t
        }
        ,
        e.prototype.parse = function(e) {
            this.stackArray = [],
            this.resutlArr = [];
            for (var i = 0, r = e.length; r > i; ) {
                var n = e.indexOf("<", i);
                if (0 > n)
                    this.addToResultArr(e.substring(i)),
                    i = r;
                else {
                    this.addToResultArr(e.substring(i, n));
                    var o = e.indexOf(">", n);
                    -1 == o ? (t.$error(1038),
                    o = n) : "/" == e.charAt(n + 1) ? this.stackArray.pop() : this.addToArray(e.substring(n + 1, o)),
                    i = o + 1
                }
            }
            return this.resutlArr
        }
        ,
        e.prototype.parser = function(t) {
            return this.parse(t)
        }
        ,
        e.prototype.addToResultArr = function(t) {
            "" != t && (t = this.replaceSpecial(t),
            this.stackArray.length > 0 ? this.resutlArr.push({
                text: t,
                style: this.stackArray[this.stackArray.length - 1]
            }) : this.resutlArr.push({
                text: t
            }))
        }
        ,
        e.prototype.changeStringToObject = function(t) {
            t = t.trim();
            var e = {}
              , i = [];
            if ("i" == t.charAt(0) || "b" == t.charAt(0) || "u" == t.charAt(0))
                this.addProperty(e, t, "true");
            else if (i = t.match(/^(font|a)\s/)) {
                t = t.substring(i[0].length).trim();
                for (var r = 0, n = void 0; n = t.match(this.getHeadReg()); ) {
                    var o = n[0]
                      , s = "";
                    t = t.substring(o.length).trim(),
                    '"' == t.charAt(0) ? (r = t.indexOf('"', 1),
                    s = t.substring(1, r),
                    r += 1) : "'" == t.charAt(0) ? (r = t.indexOf("'", 1),
                    s = t.substring(1, r),
                    r += 1) : (s = t.match(/(\S)+/)[0],
                    r = s.length),
                    this.addProperty(e, o.substring(0, o.length - 1).trim(), s.trim()),
                    t = t.substring(r).trim()
                }
            }
            return e
        }
        ,
        e.prototype.getHeadReg = function() {
            return /^(color|textcolor|strokecolor|stroke|b|bold|i|italic|u|size|fontfamily|href|target)(\s)*=/
        }
        ,
        e.prototype.addProperty = function(t, e, i) {
            switch (e.toLowerCase()) {
            case "color":
            case "textcolor":
                i = i.replace(/#/, "0x"),
                t.textColor = parseInt(i);
                break;
            case "strokecolor":
                i = i.replace(/#/, "0x"),
                t.strokeColor = parseInt(i);
                break;
            case "stroke":
                t.stroke = parseInt(i);
                break;
            case "b":
            case "bold":
                t.bold = "true" == i;
                break;
            case "u":
                t.underline = "true" == i;
                break;
            case "i":
            case "italic":
                t.italic = "true" == i;
                break;
            case "size":
                t.size = parseInt(i);
                break;
            case "fontfamily":
                t.fontFamily = i;
                break;
            case "href":
                t.href = this.replaceSpecial(i);
                break;
            case "target":
                t.target = this.replaceSpecial(i)
            }
        }
        ,
        e.prototype.addToArray = function(t) {
            var e = this.changeStringToObject(t);
            if (0 == this.stackArray.length)
                this.stackArray.push(e);
            else {
                var i = this.stackArray[this.stackArray.length - 1];
                for (var r in i)
                    null == e[r] && (e[r] = i[r]);
                this.stackArray.push(e)
            }
        }
        ,
        e
    }();
    t.HtmlTextParser = e,
    __reflect(e.prototype, "egret.HtmlTextParser")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i() {
            var t = e.call(this) || this;
            return t.stageTextAdded = !1,
            t._text = null ,
            t._isFocus = !1,
            t
        }
        return __extends(i, e),
        i.prototype.init = function(e) {
            this._text = e,
            this.stageText = new t.StageText,
            this.stageText.$setTextField(this._text)
        }
        ,
        i.prototype._addStageText = function() {
            this.stageTextAdded || (this._text.$inputEnabled || (this._text.$touchEnabled = !0),
            this.tempStage = this._text.stage,
            this.stageText.$addToStage(),
            this.stageText.addEventListener("updateText", this.updateTextHandler, this),
            this._text.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this),
            this.stageText.addEventListener("blur", this.blurHandler, this),
            this.stageText.addEventListener("focus", this.focusHandler, this),
            this.stageTextAdded = !0)
        }
        ,
        i.prototype._removeStageText = function() {
            this.stageTextAdded && (this._text.$inputEnabled || (this._text.$touchEnabled = !1),
            this.stageText.$removeFromStage(),
            this.stageText.removeEventListener("updateText", this.updateTextHandler, this),
            this._text.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this),
            this.tempStage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this),
            this.stageText.removeEventListener("blur", this.blurHandler, this),
            this.stageText.removeEventListener("focus", this.focusHandler, this),
            this.stageTextAdded = !1)
        }
        ,
        i.prototype._getText = function() {
            return this.stageText.$getText()
        }
        ,
        i.prototype._setText = function(t) {
            this.stageText.$setText(t)
        }
        ,
        i.prototype._setColor = function(t) {
            this.stageText.$setColor(t)
        }
        ,
        i.prototype.focusHandler = function(e) {
            this._isFocus || (this._isFocus = !0,
            e.showing || (this._text.$isTyping = !0),
            this._text.$invalidateContentBounds(),
            this._text.dispatchEvent(new t.FocusEvent(t.FocusEvent.FOCUS_IN,!0)))
        }
        ,
        i.prototype.blurHandler = function(e) {
            this._isFocus && (this._isFocus = !1,
            this.tempStage.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this),
            this._text.$isTyping = !1,
            this._text.$invalidateContentBounds(),
            this.stageText.$onBlur(),
            this._text.dispatchEvent(new t.FocusEvent(t.FocusEvent.FOCUS_OUT,!0)))
        }
        ,
        i.prototype.onMouseDownHandler = function(t) {
            this.$onFocus()
        }
        ,
        i.prototype.$onFocus = function() {
            this._text.visible && (this._isFocus || (this.tempStage.addEventListener(t.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this),
            this.stageText.$show()))
        }
        ,
        i.prototype.onStageDownHandler = function(t) {
            t.$target != this._text && this.stageText.$hide()
        }
        ,
        i.prototype.updateTextHandler = function(e) {
            var i, r, n = this._text.$TextField, o = this.stageText.$getText(), s = !1;
            null != n[35] && (i = new RegExp("[" + n[35] + "]","g"),
            r = o.match(i),
            o = r ? r.join("") : "",
            s = !0),
            null != n[36] && (i = new RegExp("[^" + n[36] + "]","g"),
            r = o.match(i),
            o = r ? r.join("") : "",
            s = !0),
            s && this.stageText.$getText() != o && this.stageText.$setText(o),
            this.resetText(),
            this._text.dispatchEvent(new t.Event(t.Event.CHANGE,!0))
        }
        ,
        i.prototype.resetText = function() {
            this._text.$setBaseText(this.stageText.$getText())
        }
        ,
        i.prototype._hideInput = function() {
            this.stageText.$removeFromStage()
        }
        ,
        i.prototype.updateInput = function() {
            !this._text.$visible && this.stageText && this._hideInput()
        }
        ,
        i.prototype._updateProperties = function() {
            if (this._isFocus)
                return this.stageText.$resetStageText(),
                void this.updateInput();
            var t = this._text.$stage;
            if (null == t)
                ;
            else
                for (var e = this._text, i = e.$visible; ; ) {
                    if (!i)
                        break;
                    if (e = e.parent,
                    e == t)
                        break;
                    i = e.$visible
                }
            this.stageText.$setText(this._text.$TextField[13]),
            this.stageText.$resetStageText(),
            this.updateInput()
        }
        ,
        i
    }(t.HashObject);
    t.InputController = e,
    __reflect(e.prototype, "egret.InputController")
}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {
    function e(e, i, n) {
        n = n || {};
        var o = null == n.italic ? i[16] : n.italic
          , s = null == n.bold ? i[15] : n.bold
          , a = null == n.size ? i[0] : n.size
          , h = n.fontFamily || i[8] || r.default_fontFamily;
        return t.sys.measureText(e, h, a, s, o)
    }
    var i = new RegExp("(?=[\\u00BF-\\u1FFF\\u2C00-\\uD7FF]|\\b|\\s)(?![。，！、》…）)}”】\\.\\,\\!\\?\\]\\:])")
      , r = function(r) {
        function n() {
            var e = r.call(this) || this;
            e.$inputEnabled = !1,
            e.inputUtils = null ,
            e.graphicsNode = null ,
            e.isFlow = !1,
            e.textArr = [],
            e.linesArr = [],
            e.$isTyping = !1;
            var i = new t.sys.TextNode;
            return i.fontFamily = n.default_fontFamily,
            e.textNode = i,
            e.$renderNode = i,
            e.$TextField = {
                0: n.default_size,
                1: 0,
                2: n.default_textColor,
                3: 0 / 0,
                4: 0 / 0,
                5: 0,
                6: 0,
                7: 0,
                8: n.default_fontFamily,
                9: "left",
                10: "top",
                11: "#ffffff",
                12: "",
                13: "",
                14: [],
                15: !1,
                16: !1,
                17: !0,
                18: !1,
                19: !1,
                20: !1,
                21: 0,
                22: 0,
                23: 0,
                24: t.TextFieldType.DYNAMIC,
                25: 0,
                26: "#000000",
                27: 0,
                28: -1,
                29: 0,
                30: !1,
                31: !1,
                32: 0,
                33: !1,
                34: 16777215,
                35: null ,
                36: null ,
                37: t.TextFieldInputType.TEXT
            },
            e
        }
        return __extends(n, r),
        n.prototype.isInput = function() {
            return this.$TextField[24] == t.TextFieldType.INPUT
        }
        ,
        n.prototype.$setTouchEnabled = function(t) {
            var e = r.prototype.$setTouchEnabled.call(this, t);
            return this.isInput() && (this.$inputEnabled = !0),
            e
        }
        ,
        Object.defineProperty(n.prototype, "fontFamily", {
            get: function() {
                return this.$TextField[8]
            },
            set: function(t) {
                this.$setFontFamily(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setFontFamily = function(t) {
            var e = this.$TextField;
            return e[8] == t ? !1 : (e[8] = t,
            this.invalidateFontString(),
            !0)
        }
        ,
        Object.defineProperty(n.prototype, "size", {
            get: function() {
                return this.$TextField[0]
            },
            set: function(t) {
                this.$setSize(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setSize = function(t) {
            t = +t || 0;
            var e = this.$TextField;
            return e[0] == t ? !1 : (e[0] = t,
            this.invalidateFontString(),
            !0)
        }
        ,
        Object.defineProperty(n.prototype, "bold", {
            get: function() {
                return this.$TextField[15]
            },
            set: function(t) {
                this.$setBold(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setBold = function(t) {
            t = !!t;
            var e = this.$TextField;
            return t == e[15] ? !1 : (e[15] = t,
            this.invalidateFontString(),
            !0)
        }
        ,
        Object.defineProperty(n.prototype, "italic", {
            get: function() {
                return this.$TextField[16]
            },
            set: function(t) {
                this.$setItalic(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setItalic = function(t) {
            t = !!t;
            var e = this.$TextField;
            return t == e[16] ? !1 : (e[16] = t,
            this.invalidateFontString(),
            !0)
        }
        ,
        n.prototype.invalidateFontString = function() {
            this.$TextField[17] = !0,
            this.$invalidateTextField()
        }
        ,
        Object.defineProperty(n.prototype, "textAlign", {
            get: function() {
                return this.$TextField[9]
            },
            set: function(t) {
                this.$setTextAlign(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setTextAlign = function(t) {
            var e = this.$TextField;
            return e[9] == t ? !1 : (e[9] = t,
            this.$invalidateTextField(),
            !0)
        }
        ,
        Object.defineProperty(n.prototype, "verticalAlign", {
            get: function() {
                return this.$TextField[10]
            },
            set: function(t) {
                this.$setVerticalAlign(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setVerticalAlign = function(t) {
            var e = this.$TextField;
            return e[10] == t ? !1 : (e[10] = t,
            this.$invalidateTextField(),
            !0)
        }
        ,
        Object.defineProperty(n.prototype, "lineSpacing", {
            get: function() {
                return this.$TextField[1]
            },
            set: function(t) {
                this.$setLineSpacing(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setLineSpacing = function(t) {
            t = +t || 0;
            var e = this.$TextField;
            return e[1] == t ? !1 : (e[1] = t,
            this.$invalidateTextField(),
            !0)
        }
        ,
        Object.defineProperty(n.prototype, "textColor", {
            get: function() {
                return this.$TextField[2]
            },
            set: function(t) {
                this.$setTextColor(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setTextColor = function(t) {
            t = 0 | +t;
            var e = this.$TextField;
            return e[2] == t ? !1 : (e[2] = t,
            this.inputUtils && this.inputUtils._setColor(this.$TextField[2]),
            this.$invalidate(),
            !0)
        }
        ,
        Object.defineProperty(n.prototype, "wordWrap", {
            get: function() {
                return this.$TextField[19]
            },
            set: function(t) {
                this.$setWordWrap(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setWordWrap = function(t) {
            t = !!t;
            var e = this.$TextField;
            t != e[19] && (e[20] || (e[19] = t,
            this.$invalidateTextField()))
        }
        ,
        Object.defineProperty(n.prototype, "type", {
            get: function() {
                return this.$TextField[24]
            },
            set: function(t) {
                this.$setType(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setType = function(e) {
            var i = this.$TextField;
            return i[24] != e ? (i[24] = e,
            e == t.TextFieldType.INPUT ? (isNaN(i[3]) && this.$setWidth(100),
            isNaN(i[4]) && this.$setHeight(30),
            this.$setTouchEnabled(!0),
            null == this.inputUtils && (this.inputUtils = new t.InputController),
            this.inputUtils.init(this),
            this.$invalidateTextField(),
            this.$stage && this.inputUtils._addStageText()) : (this.inputUtils && (this.inputUtils._removeStageText(),
            this.inputUtils = null ),
            this.$setTouchEnabled(!1)),
            !0) : !1
        }
        ,
        Object.defineProperty(n.prototype, "inputType", {
            get: function() {
                return this.$TextField[37]
            },
            set: function(t) {
                this.$TextField[37] = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "text", {
            get: function() {
                return this.$getText()
            },
            set: function(t) {
                this.$setText(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$getText = function() {
            return this.$TextField[24] == t.TextFieldType.INPUT ? this.inputUtils._getText() : this.$TextField[13]
        }
        ,
        n.prototype.$setBaseText = function(t) {
            null == t && (t = ""),
            t = t.toString(),
            this.isFlow = !1;
            var e = this.$TextField;
            if (e[13] != t) {
                this.$invalidateTextField(),
                e[13] = t;
                var i = "";
                return i = e[20] ? this.changeToPassText(t) : t,
                this.setMiddleStyle([{
                    text: i
                }]),
                !0
            }
            return !1
        }
        ,
        n.prototype.$setText = function(t) {
            null == t && (t = "");
            var e = this.$setBaseText(t);
            return this.inputUtils && this.inputUtils._setText(this.$TextField[13]),
            e
        }
        ,
        Object.defineProperty(n.prototype, "displayAsPassword", {
            get: function() {
                return this.$TextField[20]
            },
            set: function(t) {
                this.$setDisplayAsPassword(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setDisplayAsPassword = function(t) {
            var e = this.$TextField;
            if (e[20] != t) {
                e[20] = t,
                this.$invalidateTextField();
                var i = "";
                return i = t ? this.changeToPassText(e[13]) : e[13],
                this.setMiddleStyle([{
                    text: i
                }]),
                !0
            }
            return !1
        }
        ,
        Object.defineProperty(n.prototype, "strokeColor", {
            get: function() {
                return this.$TextField[25]
            },
            set: function(t) {
                t = +t || 0,
                this.$setStrokeColor(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setStrokeColor = function(e) {
            var i = this.$TextField;
            return i[25] != e ? (this.$invalidateTextField(),
            i[25] = e,
            i[26] = t.toColorString(e),
            !0) : !1
        }
        ,
        Object.defineProperty(n.prototype, "stroke", {
            get: function() {
                return this.$TextField[27]
            },
            set: function(t) {
                this.$setStroke(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setStroke = function(t) {
            return this.$TextField[27] != t ? (this.$invalidateTextField(),
            this.$TextField[27] = t,
            !0) : !1
        }
        ,
        Object.defineProperty(n.prototype, "maxChars", {
            get: function() {
                return this.$TextField[21]
            },
            set: function(t) {
                this.$setMaxChars(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setMaxChars = function(t) {
            return this.$TextField[21] != t ? (this.$TextField[21] = t,
            !0) : !1
        }
        ,
        Object.defineProperty(n.prototype, "scrollV", {
            get: function() {
                return Math.min(Math.max(this.$TextField[28], 1), this.maxScrollV)
            },
            set: function(t) {
                this.$TextField[28] = Math.max(t, 1),
                this.$invalidateTextField()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "maxScrollV", {
            get: function() {
                return this.$getLinesArr(),
                Math.max(this.$TextField[29] - t.TextFieldUtils.$getScrollNum(this) + 1, 1)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "selectionBeginIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "selectionEndIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "caretIndex", {
            get: function() {
                return 0
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setSelection = function(t, e) {
            return !1
        }
        ,
        n.prototype.$getLineHeight = function() {
            return this.$TextField[1] + this.$TextField[0]
        }
        ,
        Object.defineProperty(n.prototype, "numLines", {
            get: function() {
                return this.$getLinesArr(),
                this.$TextField[29]
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "multiline", {
            get: function() {
                return this.$TextField[30]
            },
            set: function(t) {
                this.$setMultiline(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setMultiline = function(t) {
            return this.$TextField[30] = t,
            this.$invalidateTextField(),
            !0
        }
        ,
        Object.defineProperty(n.prototype, "restrict", {
            get: function() {
                var t = this.$TextField
                  , e = null ;
                return null != t[35] && (e = t[35]),
                null != t[36] && (null == e && (e = ""),
                e += "^" + t[36]),
                e
            },
            set: function(t) {
                var e = this.$TextField;
                if (null == t)
                    e[35] = null ,
                    e[36] = null ;
                else {
                    for (var i = -1; i < t.length && (i = t.indexOf("^", i),
                    0 != i) && i > 0 && "\\" == t.charAt(i - 1); )
                        i++;
                    0 == i ? (e[35] = null ,
                    e[36] = t.substring(i + 1)) : i > 0 ? (e[35] = t.substring(0, i),
                    e[36] = t.substring(i + 1)) : (e[35] = t,
                    e[36] = null )
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setWidth = function(t) {
            var e = this.$TextField;
            if (isNaN(t)) {
                if (isNaN(e[3]))
                    return !1;
                e[3] = 0 / 0
            } else {
                if (e[3] == t)
                    return !1;
                e[3] = t
            }
            return t = +t,
            0 > t ? !1 : (this.$invalidateTextField(),
            !0)
        }
        ,
        n.prototype.$setHeight = function(t) {
            var e = this.$TextField;
            if (isNaN(t)) {
                if (isNaN(e[4]))
                    return !1;
                e[4] = 0 / 0
            } else {
                if (e[4] == t)
                    return !1;
                e[4] = t
            }
            return t = +t,
            0 > t ? !1 : (this.$invalidateTextField(),
            !0)
        }
        ,
        n.prototype.$getWidth = function() {
            var t = this.$TextField;
            return isNaN(t[3]) ? this.$getContentBounds().width : t[3]
        }
        ,
        n.prototype.$getHeight = function() {
            var t = this.$TextField;
            return isNaN(t[4]) ? this.$getContentBounds().height : t[4]
        }
        ,
        Object.defineProperty(n.prototype, "border", {
            get: function() {
                return this.$TextField[31]
            },
            set: function(t) {
                this.$setBorder(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setBorder = function(t) {
            this.$TextField[31] = !!t,
            this.$invalidate()
        }
        ,
        Object.defineProperty(n.prototype, "borderColor", {
            get: function() {
                return this.$TextField[32]
            },
            set: function(t) {
                this.$setBorderColor(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setBorderColor = function(t) {
            this.$TextField[32] = +t || 0,
            this.$invalidate()
        }
        ,
        Object.defineProperty(n.prototype, "background", {
            get: function() {
                return this.$TextField[33]
            },
            set: function(t) {
                this.$setBackground(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setBackground = function(t) {
            this.$TextField[33] = t,
            this.$invalidate()
        }
        ,
        Object.defineProperty(n.prototype, "backgroundColor", {
            get: function() {
                return this.$TextField[34]
            },
            set: function(t) {
                this.$setBackgroundColor(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.$setBackgroundColor = function(t) {
            this.$TextField[34] = t,
            this.$invalidate()
        }
        ,
        n.prototype.fillBackground = function(e) {
            var i = this.graphicsNode;
            i && i.clear();
            var r = this.$TextField;
            if (r[33] || r[31] || e && e.length > 0) {
                if (!i) {
                    i = this.graphicsNode = new t.sys.GraphicsNode;
                    var n = new t.sys.GroupNode;
                    n.addNode(i),
                    n.addNode(this.textNode),
                    this.$renderNode = n
                }
                var o = void 0
                  , s = void 0;
                if (r[33] && (o = i.beginFill(r[34]),
                o.drawRect(0, 0, this.$getWidth(), this.$getHeight())),
                r[31] && (s = i.lineStyle(1, r[32]),
                s.drawRect(0, 0, this.$getWidth() - 1, this.$getHeight() - 1)),
                e && e.length > 0)
                    for (var a = r[2], h = -1, l = e.length, u = 0; l > u; u += 4) {
                        var c = e[u]
                          , p = e[u + 1]
                          , d = e[u + 2]
                          , f = e[u + 3] || a;
                        (0 > h || h != f) && (h = f,
                        s = i.lineStyle(2, f, 1, t.CapsStyle.NONE)),
                        s.moveTo(c, p),
                        s.lineTo(c + d, p)
                    }
            }
            if (i) {
                var g = this.$getRenderBounds();
                i.x = g.x,
                i.y = g.y,
                i.width = g.width,
                i.height = g.height,
                t.Rectangle.release(g)
            }
        }
        ,
        n.prototype.setFocus = function() {
            this.type == t.TextFieldType.INPUT && this.$stage && this.inputUtils.$onFocus()
        }
        ,
        n.prototype.$onRemoveFromStage = function() {
            r.prototype.$onRemoveFromStage.call(this),
            this.removeEvent(),
            this.$TextField[24] == t.TextFieldType.INPUT && this.inputUtils._removeStageText(),
            this.textNode && this.textNode.clean()
        }
        ,
        n.prototype.$onAddToStage = function(e, i) {
            r.prototype.$onAddToStage.call(this, e, i),
            this.addEvent(),
            this.$TextField[24] == t.TextFieldType.INPUT && this.inputUtils._addStageText()
        }
        ,
        n.prototype.$invalidateTextField = function() {
            this.$invalidateContentBounds(),
            this.$TextField[18] = !0
        }
        ,
        n.prototype.$update = function(e, i) {
            var n = this.$getRenderBounds()
              , o = r.prototype.$update.call(this, e, n);
            return t.Rectangle.release(n),
            o
        }
        ,
        n.prototype.$getRenderBounds = function() {
            var e = this.$getContentBounds()
              , i = t.Rectangle.create();
            i.copyFrom(e),
            this.$TextField[31] && (i.width += 2,
            i.height += 2);
            var r = 2 * this.$TextField[27];
            return r > 0 && (i.width += 2 * r,
            i.height += 2 * r),
            i.x -= r + 2,
            i.y -= r + 2,
            i.width = Math.ceil(i.width) + 4,
            i.height = Math.ceil(i.height) + 4,
            i
        }
        ,
        n.prototype.$measureContentBounds = function(e) {
            this.$getLinesArr();
            var i = isNaN(this.$TextField[3]) ? this.$TextField[5] : this.$TextField[3]
              , r = isNaN(this.$TextField[4]) ? t.TextFieldUtils.$getTextHeight(this) : this.$TextField[4];
            e.setTo(0, 0, i, r)
        }
        ,
        n.prototype.$render = function() {
            if (this.$TextField[24] == t.TextFieldType.INPUT) {
                if ((this.$hasAnyFlags(2032) || this.$hasAnyFlags(1648)) && this.inputUtils._updateProperties(),
                this.$isTyping)
                    return void this.fillBackground()
            } else if (0 == this.$TextField[3])
                return;
            var e = this.drawText();
            this.fillBackground(e);
            var i = this.$getRenderBounds()
              , r = this.textNode;
            r.x = i.x,
            r.y = i.y,
            r.width = Math.ceil(i.width),
            r.height = Math.ceil(i.height),
            t.Rectangle.release(i)
        }
        ,
        Object.defineProperty(n.prototype, "textFlow", {
            get: function() {
                return this.textArr
            },
            set: function(t) {
                this.isFlow = !0;
                var e = "";
                null == t && (t = []);
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    e += r.text
                }
                this.$TextField[20] ? this.$setBaseText(e) : (this.$TextField[13] = e,
                this.setMiddleStyle(t))
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.changeToPassText = function(t) {
            if (this.$TextField[20]) {
                for (var e = "", i = 0, r = t.length; r > i; i++)
                    switch (t.charAt(i)) {
                    case "\n":
                        e += "\n";
                        break;
                    case "\r":
                        break;
                    default:
                        e += "*"
                    }
                return e
            }
            return t
        }
        ,
        n.prototype.setMiddleStyle = function(t) {
            this.$TextField[18] = !0,
            this.textArr = t,
            this.$invalidateTextField()
        }
        ,
        Object.defineProperty(n.prototype, "textWidth", {
            get: function() {
                return this.$getLinesArr(),
                this.$TextField[5]
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "textHeight", {
            get: function() {
                return this.$getLinesArr(),
                t.TextFieldUtils.$getTextHeight(this)
            },
            enumerable: !0,
            configurable: !0
        }),
        n.prototype.appendText = function(t) {
            this.appendElement({
                text: t
            })
        }
        ,
        n.prototype.appendElement = function(t) {
            var e = this.$TextField[13] + t.text;
            this.$TextField[20] ? this.$setBaseText(e) : (this.$TextField[13] = e,
            this.textArr.push(t),
            this.setMiddleStyle(this.textArr))
        }
        ,
        n.prototype.$getLinesArr = function() {
            var r = this.$TextField;
            if (!r[18])
                return this.linesArr;
            r[18] = !1;
            var n = this.textArr;
            this.linesArr.length = 0,
            r[6] = 0,
            r[5] = 0;
            var o = r[3];
            if (!isNaN(o) && 0 == o)
                return r[29] = 0,
                [{
                    width: 0,
                    height: 0,
                    charNum: 0,
                    elements: [],
                    hasNextLine: !1
                }];
            for (var s, a = this.linesArr, h = 0, l = 0, u = 0, c = 0, p = 0, d = n.length; d > p; p++) {
                var f = n[p];
                if (f.text) {
                    f.style = f.style || {};
                    for (var g = f.text.toString(), y = g.split(/(?:\r\n|\r|\n)/), v = 0, $ = y.length; $ > v; v++) {
                        null == a[c] && (s = {
                            width: 0,
                            height: 0,
                            elements: [],
                            charNum: 0,
                            hasNextLine: !1
                        },
                        a[c] = s,
                        h = 0,
                        u = 0,
                        l = 0),
                        u = r[24] == t.TextFieldType.INPUT ? r[0] : Math.max(u, f.style.size || r[0]);
                        var m = !0;
                        if ("" == y[v])
                            v == $ - 1 && (m = !1);
                        else {
                            var b = e(y[v], r, f.style);
                            if (isNaN(o))
                                h += b,
                                l += y[v].length,
                                s.elements.push({
                                    width: b,
                                    text: y[v],
                                    style: f.style
                                }),
                                v == $ - 1 && (m = !1);
                            else if (o >= h + b)
                                s.elements.push({
                                    width: b,
                                    text: y[v],
                                    style: f.style
                                }),
                                h += b,
                                l += y[v].length,
                                v == $ - 1 && (m = !1);
                            else {
                                var T = 0
                                  , x = 0
                                  , _ = y[v]
                                  , E = void 0;
                                E = r[19] ? _.split(i) : _.match(/./g);
                                for (var O = E.length, F = 0; O > T; T++) {
                                    var w = E[T].length
                                      , C = !1;
                                    if (1 == w && O - 1 > T) {
                                        var R = E[T].charCodeAt(0)
                                          , S = E[T + 1].charCodeAt(0);
                                        if (R >= 55296 && 56319 >= R && 56320 == (64512 & S)) {
                                            var P = E[T] + E[T + 1];
                                            w = 2,
                                            C = !0,
                                            b = e(P, r, f.style)
                                        } else
                                            b = e(E[T], r, f.style)
                                    } else
                                        b = e(E[T], r, f.style);
                                    if (0 != h && h + b > o && h + T != 0)
                                        break;
                                    if (x + b > o)
                                        for (var D = E[T].match(/./g), L = 0, M = D.length; M > L; L++) {
                                            var w = D[L].length
                                              , A = !1;
                                            if (1 == w && M - 1 > L) {
                                                var R = D[L].charCodeAt(0)
                                                  , S = D[L + 1].charCodeAt(0);
                                                if (R >= 55296 && 56319 >= R && 56320 == (64512 & S)) {
                                                    var P = D[L] + D[L + 1];
                                                    w = 2,
                                                    A = !0,
                                                    b = e(P, r, f.style)
                                                } else
                                                    b = e(D[L], r, f.style)
                                            } else
                                                b = e(D[L], r, f.style);
                                            if (L > 0 && h + b > o)
                                                break;
                                            F += w,
                                            x += b,
                                            h += b,
                                            l += F,
                                            A && L++
                                        }
                                    else
                                        F += w,
                                        x += b,
                                        h += b,
                                        l += F;
                                    C && T++
                                }
                                if (T > 0) {
                                    s.elements.push({
                                        width: x,
                                        text: _.substring(0, F),
                                        style: f.style
                                    });
                                    var N = _.substring(F)
                                      , B = void 0
                                      , I = N.length;
                                    for (B = 0; I > B && " " == N.charAt(B); B++)
                                        ;
                                    y[v] = N.substring(B)
                                }
                                "" != y[v] && (v--,
                                m = !1)
                            }
                        }
                        m && (l++,
                        s.hasNextLine = !0),
                        v < y.length - 1 && (s.width = h,
                        s.height = u,
                        s.charNum = l,
                        r[5] = Math.max(r[5], h),
                        r[6] += u,
                        c++)
                    }
                    p == n.length - 1 && s && (s.width = h,
                    s.height = u,
                    s.charNum = l,
                    r[5] = Math.max(r[5], h),
                    r[6] += u)
                } else
                    s && (s.width = h,
                    s.height = u,
                    s.charNum = l,
                    r[5] = Math.max(r[5], h),
                    r[6] += u)
            }
            return r[29] = a.length,
            a
        }
        ,
        n.prototype.drawText = function() {
            var e = this.textNode
              , i = this.$TextField;
            e.bold = i[15],
            e.fontFamily = i[8] || n.default_fontFamily,
            e.italic = i[16],
            e.size = i[0],
            e.stroke = i[27],
            e.strokeColor = i[25],
            e.textColor = i[2];
            var r = this.$getLinesArr();
            if (0 == i[5])
                return [];
            var o = isNaN(i[3]) ? i[5] : i[3]
              , s = t.TextFieldUtils.$getTextHeight(this)
              , a = 0
              , h = t.TextFieldUtils.$getStartLine(this)
              , l = i[4];
            if (!isNaN(l) && l > s) {
                var u = t.TextFieldUtils.$getValign(this);
                a += u * (l - s)
            }
            a = Math.round(a);
            for (var c = t.TextFieldUtils.$getHalign(this), p = 0, d = [], f = h, g = i[29]; g > f; f++) {
                var y = r[f]
                  , v = y.height;
                if (a += v / 2,
                f != h) {
                    if (i[24] == t.TextFieldType.INPUT && !i[30])
                        break;
                    if (!isNaN(l) && a > l)
                        break
                }
                p = Math.round((o - y.width) * c);
                for (var $ = 0, m = y.elements.length; m > $; $++) {
                    var b = y.elements[$]
                      , T = b.style.size || i[0];
                    e.drawText(p, a + (v - T) / 2, b.text, b.style),
                    b.style.underline && d.push(p, a + v / 2, b.width, b.style.textColor),
                    p += b.width
                }
                a += v / 2 + i[1]
            }
            return d
        }
        ,
        n.prototype.addEvent = function() {
            this.addEventListener(t.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
        }
        ,
        n.prototype.removeEvent = function() {
            this.removeEventListener(t.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
        }
        ,
        n.prototype.onTapHandler = function(e) {
            if (this.$TextField[24] != t.TextFieldType.INPUT) {
                var i = t.TextFieldUtils.$getTextElement(this, e.localX, e.localY);
                if (null != i) {
                    var r = i.style;
                    if (r && r.href)
                        if (r.href.match(/^event:/)) {
                            var n = r.href.match(/^event:/)[0];
                            t.TextEvent.dispatchTextEvent(this, t.TextEvent.LINK, r.href.substring(n.length))
                        } else
                            open(r.href, r.target || "_blank")
                }
            }
        }
        ,
        n
    }(t.DisplayObject);
    r.default_fontFamily = "Arial",
    r.default_size = 30,
    r.default_textColor = 16777215,
    t.TextField = r,
    __reflect(r.prototype, "egret.TextField")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.TEXT = "text",
    e.TEL = "tel",
    e.PASSWORD = "password",
    t.TextFieldInputType = e,
    __reflect(e.prototype, "egret.TextFieldInputType")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.DYNAMIC = "dynamic",
    e.INPUT = "input",
    t.TextFieldType = e,
    __reflect(e.prototype, "egret.TextFieldType")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function e() {}
        return e.$getStartLine = function(t) {
            var i = t.$TextField
              , r = e.$getTextHeight(t)
              , n = 0
              , o = i[4];
            return isNaN(o) || (o > r || r > o && (n = Math.max(i[28] - 1, 0),
            n = Math.min(i[29] - 1, n)),
            i[30] || (n = Math.max(i[28] - 1, 0),
            i[29] > 0 && (n = Math.min(i[29] - 1, n)))),
            n
        }
        ,
        e.$getHalign = function(e) {
            var i = e.$getLinesArr()
              , r = 0;
            return e.$TextField[9] == t.HorizontalAlign.CENTER ? r = .5 : e.$TextField[9] == t.HorizontalAlign.RIGHT && (r = 1),
            e.$TextField[24] == t.TextFieldType.INPUT && !e.$TextField[30] && i.length > 1 && (r = 0),
            r
        }
        ,
        e.$getTextHeight = function(e) {
            var i = t.TextFieldType.INPUT != e.$TextField[24] || e.$TextField[30] ? e.$TextField[6] + (e.$TextField[29] - 1) * e.$TextField[1] : e.$TextField[0];
            return i
        }
        ,
        e.$getValign = function(i) {
            var r = e.$getTextHeight(i)
              , n = i.$TextField[4];
            if (!isNaN(n) && n > r) {
                var o = 0;
                return i.$TextField[10] == t.VerticalAlign.MIDDLE ? o = .5 : i.$TextField[10] == t.VerticalAlign.BOTTOM && (o = 1),
                o
            }
            return 0
        }
        ,
        e.$getTextElement = function(t, i, r) {
            var n = e.$getHit(t, i, r)
              , o = t.$getLinesArr();
            return n && o[n.lineIndex] && o[n.lineIndex].elements[n.textElementIndex] ? o[n.lineIndex].elements[n.textElementIndex] : null
        }
        ,
        e.$getHit = function(t, i, r) {
            var n = t.$getLinesArr();
            if (0 == t.$TextField[3])
                return null ;
            var o = 0
              , s = e.$getTextHeight(t)
              , a = 0
              , h = t.$TextField[4];
            if (!isNaN(h) && h > s) {
                var l = e.$getValign(t);
                a = l * (h - s),
                0 != a && (r -= a)
            }
            for (var u = e.$getStartLine(t), c = 0, p = u; p < n.length; p++) {
                var d = n[p];
                if (c + d.height >= r) {
                    r > c && (o = p + 1);
                    break
                }
                if (c += d.height,
                c + t.$TextField[1] > r)
                    return null ;
                c += t.$TextField[1]
            }
            if (0 == o)
                return null ;
            var f = n[o - 1]
              , g = t.$TextField[3];
            isNaN(g) && (g = t.textWidth);
            var y = e.$getHalign(t);
            i -= y * (g - f.width);
            for (var v = 0, p = 0; p < f.elements.length; p++) {
                var $ = f.elements[p];
                if (v + $.width <= i)
                    v += $.width;
                else if (i > v)
                    return {
                        lineIndex: o - 1,
                        textElementIndex: p
                    }
            }
            return null
        }
        ,
        e.$getScrollNum = function(t) {
            var e = 1;
            if (t.$TextField[30]) {
                var i = t.height
                  , r = t.size
                  , n = t.lineSpacing;
                e = Math.floor(i / (r + n));
                var o = i - (r + n) * e;
                o > r / 2 && e++
            }
            return e
        }
        ,
        e
    }();
    t.TextFieldUtils = e,
    __reflect(e.prototype, "egret.TextFieldUtils")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e;
    !function(t) {}(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.TOP = "top",
    e.BOTTOM = "bottom",
    e.MIDDLE = "middle",
    e.JUSTIFY = "justify",
    e.CONTENT_JUSTIFY = "contentJustify",
    t.VerticalAlign = e,
    __reflect(e.prototype, "egret.VerticalAlign")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t.encode = function(t) {
            for (var e = new Uint8Array(t), i = e.length, r = "", n = 0; i > n; n += 3)
                r += chars[e[n] >> 2],
                r += chars[(3 & e[n]) << 4 | e[n + 1] >> 4],
                r += chars[(15 & e[n + 1]) << 2 | e[n + 2] >> 6],
                r += chars[63 & e[n + 2]];
            return i % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : i % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="),
            r
        }
        ,
        t.decode = function(t) {
            var e = .75 * t.length
              , i = t.length
              , r = 0
              , n = 0
              , o = 0
              , s = 0
              , a = 0;
            "=" === t[t.length - 1] && (e--,
            "=" === t[t.length - 2] && e--);
            for (var h = new ArrayBuffer(e), l = new Uint8Array(h), u = 0; i > u; u += 4)
                n = lookup[t.charCodeAt(u)],
                o = lookup[t.charCodeAt(u + 1)],
                s = lookup[t.charCodeAt(u + 2)],
                a = lookup[t.charCodeAt(u + 3)],
                l[r++] = n << 2 | o >> 4,
                l[r++] = (15 & o) << 4 | s >> 2,
                l[r++] = (3 & s) << 6 | 63 & a;
            return h
        }
        ,
        t
    }();
    t.Base64Util = e,
    __reflect(e.prototype, "egret.Base64Util")
}(egret || (egret = {}));
for (var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup = new Uint8Array(256), i = 0; i < chars.length; i++)
    lookup[chars.charCodeAt(i)] = i;
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.LITTLE_ENDIAN = "littleEndian",
    e.BIG_ENDIAN = "bigEndian",
    t.Endian = e,
    __reflect(e.prototype, "egret.Endian");
    var i = function() {
        function i(t) {
            this.BUFFER_EXT_SIZE = 0,
            this.EOF_byte = -1,
            this.EOF_code_point = -1,
            this._setArrayBuffer(t || new ArrayBuffer(this.BUFFER_EXT_SIZE)),
            this.endian = e.BIG_ENDIAN
        }
        return i.prototype._setArrayBuffer = function(t) {
            this.write_position = t.byteLength,
            this.data = new DataView(t),
            this._position = 0
        }
        ,
        i.prototype.setArrayBuffer = function(t) {}
        ,
        Object.defineProperty(i.prototype, "buffer", {
            get: function() {
                return this.data.buffer
            },
            set: function(t) {
                this.data = new DataView(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "dataView", {
            get: function() {
                return this.data
            },
            set: function(t) {
                this.data = t,
                this.write_position = t.byteLength
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "bufferOffset", {
            get: function() {
                return this.data.byteOffset
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "position", {
            get: function() {
                return this._position
            },
            set: function(t) {
                this._position = t,
                this.write_position = t > this.write_position ? t : this.write_position
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "length", {
            get: function() {
                return this.write_position
            },
            set: function(t) {
                this.write_position = t;
                var e = new Uint8Array(new ArrayBuffer(t))
                  , i = this.data.buffer.byteLength;
                i > t && (this._position = t);
                var r = Math.min(i, t);
                e.set(new Uint8Array(this.data.buffer,0,r)),
                this.buffer = e.buffer
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "bytesAvailable", {
            get: function() {
                return this.data.byteLength - this._position
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.clear = function() {
            this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE))
        }
        ,
        i.prototype.readBoolean = function() {
            return this.validate(i.SIZE_OF_BOOLEAN) ? 0 != this.data.getUint8(this.position++) : null
        }
        ,
        i.prototype.readByte = function() {
            return this.validate(i.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : null
        }
        ,
        i.prototype.readBytes = function(t, e, r) {
            if (void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            0 == r)
                r = this.bytesAvailable;
            else if (!this.validate(r))
                return null ;
            t ? t.validateBuffer(e + r) : t = new i(new ArrayBuffer(e + r));
            for (var n = 0; r > n; n++)
                t.data.setUint8(n + e, this.data.getUint8(this.position++))
        }
        ,
        i.prototype.readDouble = function() {
            if (!this.validate(i.SIZE_OF_FLOAT64))
                return null ;
            var t = this.data.getFloat64(this.position, this.endian == e.LITTLE_ENDIAN);
            return this.position += i.SIZE_OF_FLOAT64,
            t
        }
        ,
        i.prototype.readFloat = function() {
            if (!this.validate(i.SIZE_OF_FLOAT32))
                return null ;
            var t = this.data.getFloat32(this.position, this.endian == e.LITTLE_ENDIAN);
            return this.position += i.SIZE_OF_FLOAT32,
            t
        }
        ,
        i.prototype.readInt = function() {
            if (!this.validate(i.SIZE_OF_INT32))
                return null ;
            var t = this.data.getInt32(this.position, this.endian == e.LITTLE_ENDIAN);
            return this.position += i.SIZE_OF_INT32,
            t
        }
        ,
        i.prototype.readShort = function() {
            if (!this.validate(i.SIZE_OF_INT16))
                return null ;
            var t = this.data.getInt16(this.position, this.endian == e.LITTLE_ENDIAN);
            return this.position += i.SIZE_OF_INT16,
            t
        }
        ,
        i.prototype.readUnsignedByte = function() {
            return this.validate(i.SIZE_OF_UINT8) ? this.data.getUint8(this.position++) : null
        }
        ,
        i.prototype.readUnsignedInt = function() {
            if (!this.validate(i.SIZE_OF_UINT32))
                return null ;
            var t = this.data.getUint32(this.position, this.endian == e.LITTLE_ENDIAN);
            return this.position += i.SIZE_OF_UINT32,
            t
        }
        ,
        i.prototype.readUnsignedShort = function() {
            if (!this.validate(i.SIZE_OF_UINT16))
                return null ;
            var t = this.data.getUint16(this.position, this.endian == e.LITTLE_ENDIAN);
            return this.position += i.SIZE_OF_UINT16,
            t
        }
        ,
        i.prototype.readUTF = function() {
            if (!this.validate(i.SIZE_OF_UINT16))
                return null ;
            var t = this.data.getUint16(this.position, this.endian == e.LITTLE_ENDIAN);
            return this.position += i.SIZE_OF_UINT16,
            t > 0 ? this.readUTFBytes(t) : ""
        }
        ,
        i.prototype.readUTFBytes = function(t) {
            if (!this.validate(t))
                return null ;
            var e = new Uint8Array(this.buffer,this.bufferOffset + this.position,t);
            return this.position += t,
            this.decodeUTF8(e)
        }
        ,
        i.prototype.writeBoolean = function(t) {
            this.validateBuffer(i.SIZE_OF_BOOLEAN),
            this.data.setUint8(this.position++, t ? 1 : 0)
        }
        ,
        i.prototype.writeByte = function(t) {
            this.validateBuffer(i.SIZE_OF_INT8),
            this.data.setInt8(this.position++, t)
        }
        ,
        i.prototype.writeBytes = function(t, e, i) {
            void 0 === e && (e = 0),
            void 0 === i && (i = 0);
            var r;
            if (!(0 > e) && !(0 > i) && (r = 0 == i ? t.length - e : Math.min(t.length - e, i),
            r > 0)) {
                this.validateBuffer(r);
                for (var n = new DataView(t.buffer), o = r, s = 4; o > s; o -= s)
                    this.data.setUint32(this._position, n.getUint32(e)),
                    this.position += s,
                    e += s;
                for (; o > 0; o--)
                    this.data.setUint8(this.position++, n.getUint8(e++))
            }
        }
        ,
        i.prototype.writeDouble = function(t) {
            this.validateBuffer(i.SIZE_OF_FLOAT64),
            this.data.setFloat64(this.position, t, this.endian == e.LITTLE_ENDIAN),
            this.position += i.SIZE_OF_FLOAT64
        }
        ,
        i.prototype.writeFloat = function(t) {
            this.validateBuffer(i.SIZE_OF_FLOAT32),
            this.data.setFloat32(this.position, t, this.endian == e.LITTLE_ENDIAN),
            this.position += i.SIZE_OF_FLOAT32
        }
        ,
        i.prototype.writeInt = function(t) {
            this.validateBuffer(i.SIZE_OF_INT32),
            this.data.setInt32(this.position, t, this.endian == e.LITTLE_ENDIAN),
            this.position += i.SIZE_OF_INT32
        }
        ,
        i.prototype.writeShort = function(t) {
            this.validateBuffer(i.SIZE_OF_INT16),
            this.data.setInt16(this.position, t, this.endian == e.LITTLE_ENDIAN),
            this.position += i.SIZE_OF_INT16
        }
        ,
        i.prototype.writeUnsignedInt = function(t) {
            this.validateBuffer(i.SIZE_OF_UINT32),
            this.data.setUint32(this.position, t, this.endian == e.LITTLE_ENDIAN),
            this.position += i.SIZE_OF_UINT32
        }
        ,
        i.prototype.writeUnsignedShort = function(t) {
            this.validateBuffer(i.SIZE_OF_UINT16),
            this.data.setUint16(this.position, t, this.endian == e.LITTLE_ENDIAN),
            this.position += i.SIZE_OF_UINT16
        }
        ,
        i.prototype.writeUTF = function(t) {
            var r = this.encodeUTF8(t)
              , n = r.length;
            this.validateBuffer(i.SIZE_OF_UINT16 + n),
            this.data.setUint16(this.position, n, this.endian == e.LITTLE_ENDIAN),
            this.position += i.SIZE_OF_UINT16,
            this._writeUint8Array(r, !1)
        }
        ,
        i.prototype.writeUTFBytes = function(t) {
            this._writeUint8Array(this.encodeUTF8(t))
        }
        ,
        i.prototype.toString = function() {
            return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable
        }
        ,
        i.prototype._writeUint8Array = function(t, e) {
            void 0 === e && (e = !0),
            e && this.validateBuffer(this.position + t.length);
            for (var i = 0; i < t.length; i++)
                this.data.setUint8(this.position++, t[i])
        }
        ,
        i.prototype.validate = function(e) {
            return this.data.byteLength > 0 && this._position + e <= this.data.byteLength ? !0 : void t.$error(1025)
        }
        ,
        i.prototype.validateBuffer = function(t, e) {
            if (void 0 === e && (e = !1),
            this.write_position = t > this.write_position ? t : this.write_position,
            t += this._position,
            this.data.byteLength < t || e) {
                var i = new Uint8Array(new ArrayBuffer(t + this.BUFFER_EXT_SIZE))
                  , r = Math.min(this.data.buffer.byteLength, t + this.BUFFER_EXT_SIZE);
                i.set(new Uint8Array(this.data.buffer,0,r)),
                this.buffer = i.buffer
            }
        }
        ,
        i.prototype.encodeUTF8 = function(t) {
            for (var e = 0, i = this.stringToCodePoints(t), r = []; i.length > e; ) {
                var n = i[e++];
                if (this.inRange(n, 55296, 57343))
                    this.encoderError(n);
                else if (this.inRange(n, 0, 127))
                    r.push(n);
                else {
                    var o = void 0
                      , s = void 0;
                    for (this.inRange(n, 128, 2047) ? (o = 1,
                    s = 192) : this.inRange(n, 2048, 65535) ? (o = 2,
                    s = 224) : this.inRange(n, 65536, 1114111) && (o = 3,
                    s = 240),
                    r.push(this.div(n, Math.pow(64, o)) + s); o > 0; ) {
                        var a = this.div(n, Math.pow(64, o - 1));
                        r.push(128 + a % 64),
                        o -= 1
                    }
                }
            }
            return new Uint8Array(r)
        }
        ,
        i.prototype.decodeUTF8 = function(t) {
            for (var e, i = !1, r = 0, n = "", o = 0, s = 0, a = 0, h = 0; t.length > r; ) {
                var l = t[r++];
                if (l == this.EOF_byte)
                    e = 0 != s ? this.decoderError(i) : this.EOF_code_point;
                else if (0 == s)
                    this.inRange(l, 0, 127) ? e = l : (this.inRange(l, 194, 223) ? (s = 1,
                    h = 128,
                    o = l - 192) : this.inRange(l, 224, 239) ? (s = 2,
                    h = 2048,
                    o = l - 224) : this.inRange(l, 240, 244) ? (s = 3,
                    h = 65536,
                    o = l - 240) : this.decoderError(i),
                    o *= Math.pow(64, s),
                    e = null );
                else if (this.inRange(l, 128, 191))
                    if (a += 1,
                    o += (l - 128) * Math.pow(64, s - a),
                    a !== s)
                        e = null ;
                    else {
                        var u = o
                          , c = h;
                        o = 0,
                        s = 0,
                        a = 0,
                        h = 0,
                        e = this.inRange(u, c, 1114111) && !this.inRange(u, 55296, 57343) ? u : this.decoderError(i, l)
                    }
                else
                    o = 0,
                    s = 0,
                    a = 0,
                    h = 0,
                    r--,
                    e = this.decoderError(i, l);
                null !== e && e !== this.EOF_code_point && (65535 >= e ? e > 0 && (n += String.fromCharCode(e)) : (e -= 65536,
                n += String.fromCharCode(55296 + (e >> 10 & 1023)),
                n += String.fromCharCode(56320 + (1023 & e))))
            }
            return n
        }
        ,
        i.prototype.encoderError = function(e) {
            t.$error(1026, e)
        }
        ,
        i.prototype.decoderError = function(e, i) {
            return e && t.$error(1027),
            i || 65533
        }
        ,
        i.prototype.inRange = function(t, e, i) {
            return t >= e && i >= t
        }
        ,
        i.prototype.div = function(t, e) {
            return Math.floor(t / e)
        }
        ,
        i.prototype.stringToCodePoints = function(t) {
            for (var e = [], i = 0, r = t.length; i < t.length; ) {
                var n = t.charCodeAt(i);
                if (this.inRange(n, 55296, 57343))
                    if (this.inRange(n, 56320, 57343))
                        e.push(65533);
                    else if (i == r - 1)
                        e.push(65533);
                    else {
                        var o = t.charCodeAt(i + 1);
                        if (this.inRange(o, 56320, 57343)) {
                            var s = 1023 & n
                              , a = 1023 & o;
                            i += 1,
                            e.push(65536 + (s << 10) + a)
                        } else
                            e.push(65533)
                    }
                else
                    e.push(n);
                i += 1
            }
            return e
        }
        ,
        i
    }();
    i.SIZE_OF_BOOLEAN = 1,
    i.SIZE_OF_INT8 = 1,
    i.SIZE_OF_INT16 = 2,
    i.SIZE_OF_INT32 = 4,
    i.SIZE_OF_UINT8 = 1,
    i.SIZE_OF_UINT16 = 2,
    i.SIZE_OF_UINT32 = 4,
    i.SIZE_OF_FLOAT32 = 4,
    i.SIZE_OF_FLOAT64 = 8,
    t.ByteArray = i,
    __reflect(i.prototype, "egret.ByteArray")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t
    }();
    e.NORMAL = "normal",
    e.ADD = "add",
    e.ERASE = "erase",
    t.BlendMode = e,
    __reflect(e.prototype, "egret.BlendMode")
}(egret || (egret = {})),
function(t) {
    var e;
    !function(t) {
        function e(t) {
            var e = n[t];
            return void 0 === e ? 0 : e
        }
        function i(t) {
            var e = r[t];
            return void 0 === e ? "normal" : e
        }
        for (var r = ["normal", "add", "erase"], n = {}, o = r.length, s = 0; o > s; s++) {
            var a = r[s];
            n[a] = s
        }
        t.blendModeToNumber = e,
        t.numberToBlendMode = i
    }(e = t.sys || (t.sys = {}))
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(e, i) {
        t.useFontMapping = !0,
        t.fontMapping[e] = i
    }
    t.fontMapping = {},
    t.useFontMapping = !1,
    t.registerFontMapping = e
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t, e, i) {
        var r = t.prototype;
        r.__class__ = e;
        var n = [e];
        i && (n = n.concat(i));
        var o = r.__types__;
        if (r.__types__)
            for (var s = o.length, a = 0; s > a; a++) {
                var h = o[a];
                -1 == n.indexOf(h) && n.push(h)
            }
        r.__types__ = n
    }
    t.registerClass = e
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function(e) {
        function i() {
            var i = e.call(this) || this;
            return i.$stageWidth = 0,
            i.$stageHeight = 0,
            i.$scaleMode = t.StageScaleMode.SHOW_ALL,
            i.$orientation = t.OrientationMode.AUTO,
            i.$maxTouches = 99,
            i.$dirtyRegionPolicy = t.DirtyRegionPolicy.ON,
            i.$stage = i,
            i.$nestLevel = 1,
            i
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "frameRate", {
            get: function() {
                return t.sys.$ticker.$frameRate
            },
            set: function(e) {
                t.sys.$ticker.$setFrameRate(e)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "stageWidth", {
            get: function() {
                return this.$stageWidth
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "stageHeight", {
            get: function() {
                return this.$stageHeight
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.invalidate = function() {
            t.sys.$invalidateRenderFlag = !0
        }
        ,
        i.prototype.registerImplementation = function(e, i) {
            t.registerImplementation(e, i)
        }
        ,
        i.prototype.getImplementation = function(e) {
            return t.getImplementation(e)
        }
        ,
        Object.defineProperty(i.prototype, "scaleMode", {
            get: function() {
                return this.$scaleMode
            },
            set: function(t) {
                this.$scaleMode != t && (this.$scaleMode = t,
                this.$screen.updateScreenSize())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "orientation", {
            get: function() {
                return this.$orientation
            },
            set: function(t) {
                this.$orientation != t && (this.$orientation = t,
                this.$screen.updateScreenSize())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "textureScaleFactor", {
            get: function() {
                return t.$TextureScaleFactor
            },
            set: function(e) {
                t.$TextureScaleFactor = e
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "maxTouches", {
            get: function() {
                return this.$maxTouches
            },
            set: function(t) {
                this.$maxTouches != t && (this.$maxTouches = t,
                this.$screen.updateMaxTouches())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "dirtyRegionPolicy", {
            get: function() {
                return this.$dirtyRegionPolicy
            },
            set: function(t) {
                this.$dirtyRegionPolicy != t && (this.$dirtyRegionPolicy = t,
                this.$displayList.setDirtyRegionPolicy(t))
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.setContentSize = function(t, e) {
            this.$screen.setContentSize(t, e)
        }
        ,
        i
    }(t.DisplayObjectContainer);
    t.Stage = e,
    __reflect(e.prototype, "egret.Stage")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return Object.defineProperty(t, "logLevel", {
            set: function(t) {},
            enumerable: !0,
            configurable: !0
        }),
        t
    }();
    e.ALL = "all",
    e.DEBUG = "debug",
    e.INFO = "info",
    e.WARN = "warn",
    e.ERROR = "error",
    e.OFF = "off",
    t.Logger = e,
    __reflect(e.prototype, "egret.Logger")
}(egret || (egret = {}));
var egret;
!function(t) {
    var e = function() {
        function t() {}
        return t.isNumber = function(t) {
            return "number" == typeof t && !isNaN(t)
        }
        ,
        t.sin = function(e) {
            var i = Math.floor(e)
              , r = i + 1
              , n = t.sinInt(i);
            if (i == e)
                return n;
            var o = t.sinInt(r);
            return (e - i) * o + (r - e) * n
        }
        ,
        t.sinInt = function(t) {
            return t %= 360,
            0 > t && (t += 360),
            egret_sin_map[t]
        }
        ,
        t.cos = function(e) {
            var i = Math.floor(e)
              , r = i + 1
              , n = t.cosInt(i);
            if (i == e)
                return n;
            var o = t.cosInt(r);
            return (e - i) * o + (r - e) * n
        }
        ,
        t.cosInt = function(t) {
            return t %= 360,
            0 > t && (t += 360),
            egret_cos_map[t]
        }
        ,
        t
    }();
    t.NumberUtils = e,
    __reflect(e.prototype, "egret.NumberUtils")
}(egret || (egret = {}));
for (var egret_sin_map = {}, egret_cos_map = {}, DEG_TO_RAD = Math.PI / 180, NumberUtils_i = 0; 360 > NumberUtils_i; NumberUtils_i++)
    egret_sin_map[NumberUtils_i] = Math.sin(NumberUtils_i * DEG_TO_RAD),
    egret_cos_map[NumberUtils_i] = Math.cos(NumberUtils_i * DEG_TO_RAD);
egret_sin_map[90] = 1,
egret_cos_map[90] = 0,
egret_sin_map[180] = 0,
egret_cos_map[180] = -1,
egret_sin_map[270] = -1,
egret_cos_map[270] = 0,
Function.prototype.bind || (Function.prototype.bind = function(t) {
    "function" != typeof this && egret.$error(1029);
    var e = Array.prototype.slice.call(arguments, 1)
      , i = this
      , r = function() {}
      , n = function() {
        return i.apply(this instanceof r && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
    }
    ;
    return r.prototype = this.prototype,
    n.prototype = new r,
    n
}
);
var egret;
!function(t) {
    var e = function(e) {
        function i(t, i) {
            void 0 === i && (i = 0);
            var r = e.call(this) || this;
            return r._delay = 0,
            r._currentCount = 0,
            r._running = !1,
            r.updateInterval = 1e3,
            r.lastCount = 1e3,
            r.lastTimeStamp = 0,
            r.delay = t,
            r.repeatCount = 0 | +i,
            r
        }
        return __extends(i, e),
        Object.defineProperty(i.prototype, "delay", {
            get: function() {
                return this._delay
            },
            set: function(t) {
                1 > t && (t = 1),
                this._delay != t && (this._delay = t,
                this.lastCount = this.updateInterval = Math.round(60 * t))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "currentCount", {
            get: function() {
                return this._currentCount
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "running", {
            get: function() {
                return this._running
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.reset = function() {
            this.stop(),
            this._currentCount = 0
        }
        ,
        i.prototype.start = function() {
            this._running || (this.lastCount = this.updateInterval,
            this.lastTimeStamp = t.getTimer(),
            t.sys.$ticker.$startTick(this.$update, this),
            this._running = !0)
        }
        ,
        i.prototype.stop = function() {
            this._running && (t.stopTick(this.$update, this),
            this._running = !1)
        }
        ,
        i.prototype.$update = function(e) {
            var i = e - this.lastTimeStamp;
            if (i >= this._delay)
                this.lastCount = this.updateInterval;
            else {
                if (this.lastCount -= 1e3,
                this.lastCount > 0)
                    return !1;
                this.lastCount += this.updateInterval
            }
            this.lastTimeStamp = e,
            this._currentCount++;
            var r = this.repeatCount > 0 && this._currentCount >= this.repeatCount;
            return t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER),
            r && (this.stop(),
            t.TimerEvent.dispatchTimerEvent(this, t.TimerEvent.TIMER_COMPLETE)),
            !1
        }
        ,
        i
    }(t.EventDispatcher);
    t.Timer = e,
    __reflect(e.prototype, "egret.Timer")
}(egret || (egret = {}));
var egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {
    function e(e, i) {
        for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
        t.$callLaterFunctionList.push(e),
        t.$callLaterThisList.push(i),
        t.$callLaterArgsList.push(r)
    }
    function i(e, i) {
        for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
        t.$callAsyncFunctionList.push(e),
        t.$callAsyncThisList.push(i),
        t.$callAsyncArgsList.push(r)
    }
    t.$callLaterFunctionList = [],
    t.$callLaterThisList = [],
    t.$callLaterArgsList = [],
    t.callLater = e,
    t.$callAsyncFunctionList = [],
    t.$callAsyncThisList = [],
    t.$callAsyncArgsList = [],
    t.$callAsync = i
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t, e, i) {
        for (var r = [], n = 3; n < arguments.length; n++)
            r[n - 3] = arguments[n];
        var o, s = t.prototype;
        t.hasOwnProperty("__sets__") || Object.defineProperty(t, "__sets__", {
            value: {}
        }),
        o = t.__sets__;
        var a = o[i];
        if (a)
            return a.apply(e, r);
        var h = Object.getPrototypeOf(s);
        if (null != h) {
            for (; !h.hasOwnProperty(i); )
                if (h = Object.getPrototypeOf(h),
                null == h)
                    return;
            a = Object.getOwnPropertyDescriptor(h, i).set,
            o[i] = a,
            a.apply(e, r)
        }
    }
    function i(t, e, i) {
        var r, n = t.prototype;
        t.hasOwnProperty("__gets__") || Object.defineProperty(t, "__gets__", {
            value: {}
        }),
        r = t.__gets__;
        var o = r[i];
        if (o)
            return o.call(e);
        var s = Object.getPrototypeOf(n);
        if (null != s) {
            for (; !s.hasOwnProperty(i); )
                if (s = Object.getPrototypeOf(s),
                null == s)
                    return;
            return o = Object.getOwnPropertyDescriptor(s, i).get,
            r[i] = o,
            o.call(e)
        }
    }
    t.superSetter = e,
    t.superGetter = i
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t) {
        if (!t)
            return null ;
        var e = i[t];
        if (e)
            return e;
        var r = t.split(".")
          , n = r.length;
        e = __global;
        for (var o = 0; n > o; o++) {
            var s = r[o];
            if (e = e[s],
            !e)
                return null
        }
        return i[t] = e,
        e
    }
    var i = {};
    t.getDefinitionByName = e
}(egret || (egret = {}));
var __global = this.__global || this, egret;
!function(t) {}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t) {
        var e = typeof t;
        if (!t || "object" != e && !t.prototype)
            return e;
        var i = t.prototype ? t.prototype : Object.getPrototypeOf(t);
        if (i.hasOwnProperty("__class__"))
            return i.__class__;
        var r = i.constructor.toString().trim()
          , n = r.indexOf("(")
          , o = r.substring(9, n);
        return Object.defineProperty(i, "__class__", {
            value: o,
            enumerable: !1,
            writable: !0
        }),
        o
    }
    t.getQualifiedClassName = e
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(e) {
        if (!e || "object" != typeof e && !e.prototype)
            return null ;
        var i = e.prototype ? e.prototype : Object.getPrototypeOf(e)
          , r = Object.getPrototypeOf(i);
        if (!r)
            return null ;
        var n = t.getQualifiedClassName(r.constructor);
        return n ? n : null
    }
    t.getQualifiedSuperclassName = e
}(egret || (egret = {}));
var egret;
!function(t) {
    function e() {
        return Date.now() - t.sys.$START_TIME
    }
    t.getTimer = e
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(e) {
        var i = t.getDefinitionByName(e);
        return i ? !0 : !1
    }
    t.hasDefinition = e
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t, e) {
        if (!t || "object" != typeof t)
            return !1;
        var i = Object.getPrototypeOf(t)
          , r = i ? i.__types__ : null ;
        return r ? -1 !== r.indexOf(e) : !1
    }
    t.is = e
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(e, i) {
        t.sys.$ticker.$startTick(e, i)
    }
    t.startTick = e
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(e, i) {
        t.sys.$ticker.$stopTick(e, i)
    }
    t.stopTick = e
}(egret || (egret = {}));
var egret;
!function(t) {
    function e(t) {
        0 > t && (t = 0),
        t > 16777215 && (t = 16777215);
        for (var e = t.toString(16).toUpperCase(); e.length > 6; )
            e = e.slice(1, e.length);
        for (; e.length < 6; )
            e = "0" + e;
        return "#" + e
    }
    t.toColorString = e
}(egret || (egret = {}));
