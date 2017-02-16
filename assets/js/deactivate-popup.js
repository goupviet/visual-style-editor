!function($) {

    "use strict";

    $(".active[data-slug='yellow-pencil-visual-theme-customizer'] .deactivate a").click(function(e){

        console.log('--------------')
        // Get href
        var href = $(this).attr("href");

        // Stop
        e.preventDefault();

        // Popup
        $("body").append('<div class="yp-popup-background"></div><div class="yp-info-modal"><div class="yp-info-modal-top"></div><div class="yp-info-modal-top-inner"><h2>Don\'t Miss Two Days Free Trial!</h2><p>Unlock all premium features now and start your 2 days free trial.</p></div><ul><li>600+ Font families</li><li>50+ CSS Animations</li><li>300+ Background patterns</li><li>Trend Color palettes</li><li>Activate All Tools</li><li>Unlock All Properties</li></ul><div class="yp-action-area"><a class="yp-info-modal-close" href="'+href+'">Skip & Deactivate</a><a class="yp-buy-link" href="plugins.php?yp_activate_free_trail=true">Activate Free Trial</a><p class="yp-info-last-note">Unlock all features - No credit card required - 2 days free trial</p></div></div>');

    });

    $(document).on("click",".yp-popup-background",function(){
        $(".yp-info-modal,.yp-popup-background").hide();
    });

}(jQuery);