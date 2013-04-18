(function($) {
    $.killIE = function()
    {
        var userAgent = navigator.userAgent.toLowerCase();
        $.browser = {
            version: (userAgent.match( /(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
            msie: /msie/.test(userAgent) && !/opera/.test(userAgent)
        }
        if ($.browser.msie && $.browser.version < 8) {
            window.location.href('http://google.com/')
        }
    }
})(jQuery);