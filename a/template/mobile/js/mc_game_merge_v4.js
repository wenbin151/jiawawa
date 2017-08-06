var _paq = _paq || [];
(function(f, g, d) {
    var i = navigator.userAgent.toLowerCase();
})(window, document); 
(function(c, b, a, d) {
    b.MCAPP = b.MCAPP || {};
    MCAPP.playCount = 0;
    MCAPP.checkRemainTimes = function() {
        if (100 - MCAPP.playCount <= 0) {
            MCUI.gameMask.showLimitShare();
            return false
        }
        return true
    };
    MCAPP.getRemainTimes = function() {
        var e = 100 - MCAPP.playCount;
        if (e < 0) {
            return 0
        }
        return e
    };
})(jQuery, window, document); (function() {
    window.MCRSC = window.MCRSC || {};
    window.MCRSC = {
        stringMap: {
            key: "value"
        },
        imageMap: {
            key: "value"
        },
        inited: false,
        init: function() {
            if (!this.inited) {
                if (mc.resource && mc.resource.imgAudio) {
                    for (var a = 0; a < mc.resource.imgAudio.length; a++) {
                        this.imageMap[mc.resource.imgAudio[a]] = 1
                    }
                }
                inited = true
            }
        },
        getString: function(a, b) {
            if (this.stringMap[a]) {
                return this.stringMap[a]
            }
            if (b) {
                return b
            }
        },
        getImage: function(a, b) {
            if (mc.resource && this.imageMap[a]) {
                return mc.resource.baseUrl + "/" + a + "?r=" + mc.resource.version
            }
            if (b) {
                return b
            }
        },
        getCrossImage: function(a, c) {
            var b = this.getImage(a, c);
            return b
        },
        getAudio: function(a, c) {
            if (mc.resource && this.imageMap[a]) {
                var b = mc.resource.baseUrl + "/" + a + "?r=" + mc.resource.version;
                return b
            }
            if (c) {
                return c
            }
        }
    };
    window.MCRSC.init()
})();