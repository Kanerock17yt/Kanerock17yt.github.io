// Client-side auth: block mobile users (runs on static hosting / GitHub Pages)
(function(){
    'use strict';

    function isMobile() {
        try {
            if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
                return navigator.userAgentData.mobile;
            }
        } catch (e) {}

        var ua = navigator.userAgent || navigator.vendor || window.opera || '';
        // common mobile indicators
        if (/Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua)) return true;

        // coarse pointer often means touch device (not perfect)
        if (window.matchMedia && window.matchMedia('(pointer:coarse)').matches) return true;

        return false;
    }

    // Allow an escape for testing: add ?mobile=allow to URL to bypass block
    var params = new URLSearchParams(location.search);
    if (params.get('mobile') === 'allow') return;

    if (isMobile()) {
        // Redirect to a simple blocked page that explains the restriction
        var blocked = location.origin + location.pathname.replace(/[^\/]*$/, '') + 'blocked.html';
        location.replace(blocked);
    }
})();
