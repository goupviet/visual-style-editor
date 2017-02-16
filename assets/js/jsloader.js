// Vars
var protocol = "http";
var ajaxurl = "assets";
var siteurl = "assets";

// Languages
var l18_saving = "保存中";
var l18_back_to_menu = "返回菜单";
var l18_close_editor = "关闭浏览器";
var l18_save = "保存";
var l18_saved = "已保存";
var l18_demo_alert = "Saving is disabled in demo mode.";
var l18_live_preview = "Live preview disabled in demo mode.";
var l18_clear = "Clear";
var l18_footer = "Footer";
var l18_content = "Content";
var l18_topbar = "Top Bar";
var l18_simple_title = "Basic selector";
var l18_clean_selector = "Alternative Class selector";
var l18_simple_sharp_selector = "Simple selector";
var l18_sharp_selector = "Sharp selector";
var l18_animation_notice = "Animation property may not work, please set 'block' option to display property from extra section.";
var l18_margin_notice = "Margin property may not work, please set 'block' or 'inline-block' option to display property from extra section.";
var l18_padding_notice = "Padding property may not work, please set 'block' or 'inline-block' option to display property from extra section. If work please don't care this notice.";
var l18_border_width_notice = "Border width property must be minimum 1px.";
var l18_bg_img_notice = "There already have a background image, you must disable background image for background color work.";
var l18_bg_img_notice_two = "Set a background image for using this feature.";
var l18_shadow_notice = "You must choose a color for shadow.";
var l18_border_style_notice = "Border style property is hidden or none, please select solid, dotted or dashed for showing the border.";
var l18_logo = "Logo";
var l18_google_map = "Google Map";
var l18_entry_title_link = "Entry Title Link";
var l18_category_link = "Category Link";
var l18_tag_link = "Tag Link";
var l18_widget = "Widget";
var l18_font_awesome_icon = "Font Awesome Icon";
var l18_submit_button = "Submit Button";
var l18_menu_item = "Menu Item";
var l18_post_meta_division = "Post Meta Division";
var l18_comment_reply_title = "Comment Reply Title";
var l18_login_info = "Login Info";
var l18_allowed_tags = "Allowed Tags";
var l18_post_title = "Post Title";
var l18_comment_form = "Comment Form";
var l18_widget_title = "Widget title";
var l18_tag_cloud = "Tag Cloud";
var l18_row = "Row";
var l18_button = "Button";
var l18_lead = "Lead";
var l18_well = "Well";
var l18_accordion_toggle = "Accordion Toggle";
var l18_accordion_content = "Accordion Content";
var l18_alert_division = "Alert Division";
var l18_footer_content = "Footer Content";
var l18_global_section = "Section";
var l18_menu_link = "Menu Link";
var l18_submenu = "Sub Menu";
var l18_show_more_link = "Show More Link";
var l18_wrapper = "Wrapper";
var l18_article_title = "Article title";
var l18_column = "Column";
var l18_post_division = "Post Division";
var l18_content_division = "Content Division";
var l18_entry_title = "Entry Title";
var l18_entry_content = "Entry Content";
var l18_entry_footer = "Entry Footer";
var l18_entry_header = "Entry Header";
var l18_enter_time = "Entry Time";
var l18_post_edit_link = "Post Edit Link";
var l18_post_thumbnail = "Post Thumbnail";
var l18_thumbnail = "Thumbnail";
var l18_thumbnail_image = "Thumbnail Image";
var l18_edit_link = "Edit Link";
var l18_comments_link_division = "Comments Link Division";
var l18_site_description = "Site Description";
var l18_post_break = "Post Break";
var l18_paragraph = "Paragraph";
var l18_line_break = "Line Break";
var l18_horizontal_rule = "Horizontal Rule";
var l18_link = "Link";
var l18_list_item = "List Item";
var l18_unorganized_list = "Unorganized List";
var l18_image = "Image";
var l18_bold_tag = "Bold Tag";
var l18_italic_tag = "Italic Tag";
var l18_strong_tag = "Strong Tag";
var l18_blockquote = "Block Quote";
var l18_preformatted = "Preformatted";
var l18_table = "Table";
var l18_table_row = "Table Row";
var l18_table_data = "Table Data";
var l18_header_division = "Header Division";
var l18_footer_division = "Footer Division";
var l18_section = "Section";
var l18_form_division = "Form Division";
var l18_centred_block = "Centred block";
var l18_definition_list = "Definition list";
var l18_definition_term = "Definition term";
var l18_definition_description = "Definition description";
var l18_header = "Header";
var l18_level = "Level";
var l18_smaller_text = "Smaller text";
var l18_text_area = "Text Area";
var l18_body_of_table = "Body Of Table";
var l18_head_of_table = "Head Of Table";
var l18_foot_of_table = "Foot of table";
var l18_underline_text = "Underline text";
var l18_span = "Span";
var l18_quotation = "Quotation";
var l18_citation = "Citation";
var l18_expract_of_code = "Extract of code";
var l18_navigation = "Navigation";
var l18_label = "Label";
var l18_time = "Time";
var l18_division = "Division";
var l18_caption_of_table = "Caption Of table";
var l18_input = "Input";
var l18_sure = "Are you sure you want to leave the page without saving?";
var l18_reset = "Do you want reset current options?";
var l18_process = "CSS styles are processing. Please be patient and wait until process end.";
var l18_cantUndo = "You can't undo the changes while creating a new animation. Click \"eye icon\" if you want to disable any option.";
var l18_cantUndoAnimManager = "You can't undo the changes while animation manager on.";
var l18_cantEditor = "You can't use the CSS editor while creating a new animation.";
var l18_allScenesEmpty = "All scenes are empty.";
var l18_create = "Create";
var l18_CreateAnimate = "Create New Animation";
var l18_cancel = "Cancel";
var l18_scene = "SCENE";
var l18_closeAnim = "Do you want to close animation creator?";
var l18_animExits = "This animation name already exists, please try another one.";
var l18_notjustit = "Not possible, Can't select just this element. Please add a custom id or class to this element.";
var l18_notice = "<i class='yp-notice-icon'></i>Notice";
var l18_warning = "<i class='yp-notice-icon'></i>Warning";
var l18_none = "Default value for this rule";
var l18_picker = "Active and move cursor to on any element. (Picker not work with images)";


(function ($) {


    // All plugin element list
    window.plugin_classes_list = 'yp-styles-area|yp-animating|yp-animate-data|yp-scene-1|yp-sharp-selector-mode-active|yp-scene-2|yp-scene-3|yp-scene-4|yp-scene-5|yp-scene-6|yp-anim-creator|data-anim-scene|yp-anim-link-toggle|yp-animate-test-playing|ui-draggable-handle|yp-css-data-trigger|yp-yellow-pencil-demo-mode|yp-yellow-pencil-loaded|yp-element-resized|resize-time-delay|yp-selected-handle|yp-parallax-disabled|yp_onscreen|yp_hover|yp_click|yp_focus|yp-recent-hover-element|yp-selected-others|yp-multiple-selected|yp-demo-link|yp-live-editor-link|yp-yellow-pencil|wt-yellow-pencil|yp-content-selected|yp-selected-has-transform|yp-hide-borders-now|ui-draggable|yp-target-active|yp-yellow-pencil-disable-links|yp-closed|yp-responsive-device-mode|yp-metric-disable|yp-css-editor-active|wtfv|yp-clean-look|yp-has-transform|yp-will-selected|yp-selected|yp-fullscreen-editor|yp-element-resizing|yp-element-resizing-width-left|yp-element-resizing-width-right|yp-element-resizing-height-top|yp-element-resizing-height-bottom|context-menu-active|yp-selectors-hide|yp-contextmenuopen|yp-control-key-down|yp-selected-others-multiable-box';

    // Any visible element.
    window.simple_not_selector = 'head, script, style, [class^="yp-"], [class*=" yellow-pencil-"], link, meta, title, noscript';

    // basic simple.
    window.basic_not_selector = '*:not(script):not(style):not(link):not(meta):not(title):not(noscript)';


    // Variable
    window.loadStatus = false;

    // Document Load Note:
    yp_load_note("Editor loading..");

    // Document ready.
    $(document).ready(function () {

        // Frame load note:
        yp_load_note("Reading styles..");

        var iframe = $(document);
        var iframeHead = iframe.find("head");
        var iframeBody = iframe.find("body");
        var body = iframe.find("body");

        // Styles load Note:
        yp_load_note("Loading fonts..");

        // Loading Styles
        var styles = [
            "assets/css/dashicons.min.css",
            "assets/css/contextmenu.css?ver=5.5.5",
            "assets/css/nouislider.css?ver=5.5.5",
            "assets/css/iris.css?ver=5.5.5",
            "assets/css/bootstrap-tooltip.css?ver=5.5.5",
            "assets/css/sweetalert.css?ver=5.5.5",
            "assets/css/yellow-pencil.css?ver=5.5.5",

            "assets/css/frame.css"
        ];

        // Loading.
        for (var i = 0; i < styles.length; i++) {
            yp_load_css(styles[i]);
        }

        // Scripts Load note:
        yp_load_note("Preparing tools..");

        // Scripts Loading.
        setTimeout(function () {

            // let the user feel as that loads quickly.
            yp_load_note("Drawing wireframe..");

            setTimeout(function () {
                yp_load_note("Analyzes the design..");
            }, 600);

            setTimeout(function () {
                yp_load_note("Preparing palettes..");
            }, 1000);

            setTimeout(function () {
                yp_load_note("Generating selectors..");
            }, 1500);

            setTimeout(function () {
                yp_load_note("Playing with codes..");
            }, 2800);

            setTimeout(function () {
                yp_load_note("Preparing..");
            }, 4000);

            // Ace Code Editor Base.
            window.aceEditorBase = "assets/js/ace";

            var scripts = [
                "assets/js/contextmenu.js?ver=5.5.5",
                "assets/js/wNumb.js?ver=5.5.5",
                "assets/js/nouislider.js?ver=5.5.5",
                "assets/js/jquery/ui/core.min.js",
                "assets/js/jquery/ui/widget.min.js",
                "assets/js/jquery/ui/mouse.min.js",
                "assets/js/jquery/ui/slider.min.js",
                "assets/js/jquery/ui/draggable.min.js",
                "assets/js/jquery/ui/resizable.min.js",
                "assets/js/jquery/ui/menu.min.js",
                "assets/js/jquery/ui/autocomplete.min.js",
                "assets/js/iris.js?ver=5.5.5",
                "assets/js/bootstrap-tooltip.js?ver=5.5.5",
                "assets/js/css-engine.js?ver=5.5.5",
                "assets/js/ace/ace.js",
                "assets/js/ace/ext-language_tools.js",
                "assets/js/sweetalert.js?ver=5.5.5",
                "assets/js/yellow-pencil-dev.js?ver=5.5.5"
            ];


            /*                    var iframeScripts = [
             "assets/js/jquery/jquery.js",
             "assets/js/jquery/jquery-migrate.min.js",
             ];

             var iframeScripts2 = [
             "assets/js/yellow-pencil-library.js",
             "assets/js/parallax.js",
             "assets/js/css-engine.js"
             ];

             for (var i = 0; i < iframeScripts.length; i++) {
             yp_load_iframe_script(iframeBody, iframeScripts[i]);
             }

             setTimeout(function () {
             for (var i = 0; i < iframeScripts2.length; i++) {
             yp_load_iframe_script(iframeBody, iframeScripts2[i]);
             }
             },100);*/

            //setup object to store results of AJAX requests
            var responses = {};

            //create function that evaluates each response in order
            function yp_eval_scripts() {

                for (var i = 0, len = scripts.length; i < len; i++) {

                    // Eval
                    eval(responses[scripts[i]]);

                }

                // New List
                var newLoadList = Array();

                // Getting all CSS Stylesheets
                window.humanStyleData = '';
                iframe.find("link[rel='stylesheet'][href]").each(function () {

                    // Get href
                    var href = $(this).attr("href");

                    // check and add
                    if (href.indexOf("waspthemes-yellow-pencil") == -1 &&
                        href.indexOf("animate") == -1 &&
                        href.indexOf("font") == -1 &&
                        href.indexOf("icon") == -1 &&
                        href.indexOf("googleapis.com") == -1 &&
                        href.indexOf("bootstrap") == -1 &&
                        href.indexOf("print") == -1 &&
                        href.indexOf("reset") == -1 &&
                        href.indexOf("preloader") == -1 &&
                        href.indexOf("fancybox") == -1 &&
                        href.indexOf("colorbox") == -1 &&
                        href != 'ie' &&
                        href.indexOf("ie6") == -1 &&
                        href.indexOf("ie8") == -1 &&
                        href.indexOf("ie8") == -1 &&
                        href.indexOf("ie9") == -1 &&
                        href.indexOf("media") == -1 &&
                        href.indexOf("setting") == -1 &&
                        href.indexOf("responsive") == -1 &&
                        href.indexOf("webkit") == -1 &&
                        href.indexOf("animation") == -1 &&
                        href.indexOf("animate") == -1 &&
                        href.indexOf("animate") == -1 &&
                        href.indexOf("keyframe") == -1 &&
                        href.indexOf("jquery") == -1 &&
                        href.indexOf("prettyPhoto") == -1 &&
                        href.indexOf("player") == -1 &&
                        href.indexOf("video") == -1 &&
                        href.indexOf("box") == -1 &&
                        href.indexOf("popup") == -1 &&
                        href.indexOf("smallscreen") == -1 &&
                        href.indexOf("skin") == -1 &&
                        href.indexOf("scheme") == -1 &&
                        href.indexOf("audio") == -1 &&
                        href.indexOf("mobile") == -1 &&
                        href.indexOf("admin") == -1 &&
                        newLoadList.length <= 10) {

                        // Add
                        newLoadList.push(href);

                    }

                });


                // There not have css stylesheets to load?, so start editor.
                if (newLoadList.length == 0) {
                    yp_start_editor();
                }


                // Loading all stylesheets and Open Editor.
                var load_style_loop = function (i) {

                    if (i < newLoadList.length) {

                        // Load styles
                        $.get({
                            url: newLoadList[i],
                            timeout: 2000,
                            cache: true
                        }).always(function (data) {

                            // Update
                            if ($.type(data) === "string") {
                                window.humanStyleData += data;
                            }

                            // If last
                            if (i + 1 == newLoadList.length) {

                                yp_start_editor();

                            }

                            // Repait
                            load_style_loop(i + 1);

                        });

                    }

                };

                // Go
                load_style_loop(0);

            }


            // Stop load and call editor function.
            function yp_start_editor() {

                // Ready!:
                yp_load_note("Ready!");

                // Set true.
                window.loadStatus = true;

                // Okay. Load it.
                setTimeout(function () {
                    yellow_pencil_main();
                }, 150);

            }


            $.each(scripts, function (index, value) {

                $.ajax({

                    url: scripts[index],

                    //force the dataType to be "text" rather than "script"
                    dataType: 'text',

                    success: function (textScript) {

                        //add the response to the "responses" object
                        responses[value] = textScript;

                        //check if the "responses" object has the same length as the "scripts" array,
                        //if so then evaluate the scripts
                        if (Object.keys(responses).length === scripts.length) {
                            yp_eval_scripts();
                        }

                    },

                    error: function (jqXHR, textStatus, errorThrown) {
                        alert('An error occurred while loading.');

                    }

                });

            });

        }); // Frame ready.

    });

    // CSS Loader
    function yp_load_css(link) {
        $('<link>').appendTo('head').attr({type: 'text/css', rel: 'stylesheet', href: link});
    }

    function yp_load_iframe_css(head, link) {
        $('<link>').appendTo(head).attr({type: 'text/css', rel: 'stylesheet', href: link});
    }

    function yp_load_iframe_script(body, link) {
        $('<script>').appendTo(body).attr({type: 'text/javascript', src: link});
    }

    // Update loading notes.
    function yp_load_note(text) {
        if (window.loadStatus == false) {
            $(".loading-files").html(text);
        }
    }

})(jQuery);
