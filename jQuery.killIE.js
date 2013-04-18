var ie6 = "6.0";
var ie7 = "7.0";
var ie8 = "8.0";
(function($) {
    $.killIE = function(settings) {
        var userAgent = navigator.userAgent.toLowerCase();
        settings = $.extend({
            text: "You're using Internet Explorer 6, which is a terrible browser. Why don't you try",
            version: ie8
        }, settings);

        $.browser = {
            version: (userAgent.match(/(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
            msie: /msie/.test(userAgent) && !/opera/.test(userAgent)
        }
        if ($.browser.msie && $.browser.version.substr(0,3) < settings.version) {
            var textWarning = $('<h1/>');
            textWarning.text(settings.text);
            textWarning.appendTo('body');
            // window.location.href('http://google.com/')
        }
    }
})(jQuery);