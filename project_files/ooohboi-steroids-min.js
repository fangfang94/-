"use strict";!function(e,t){e(t).on("elementor/frontend/init",(function(){var t=elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.widgetContainer=this.$element.find(".elementor-widget-container")[0],this.initPoopArt()},initPoopArt:function(){this.isEdit&&this.$element.addClass("ob-has-background-overlay")}}),n=elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initHarakiri()},initHarakiri:function(){this.isEdit&&this.$element.addClass("ob-harakiri")}}),s={widget:t,"heading.default":n,"text-editor.default":n,section:elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initSectionExtends()},isBreakingBad:function(){return this.$element.hasClass("ob-is-breaking-bad")},isGlider:function(){return this.$element.hasClass("ob-is-glider")},onElementChange:function(e){"_ob_bbad_use_it"===e&&("yes"===this.getElementSettings("_ob_bbad_use_it")?this.$element.addClass("ob-is-breaking-bad"):this.$element.removeClass("ob-is-breaking-bad")),"_ob_glider_is_slider"===e&&("yes"===this.getElementSettings("_ob_glider_is_slider")?(this.$element.addClass("ob-is-glider"),this.addClassesRouteGlider(".elementor-element-"+this.$element.attr("data-id"),"addClass"),this.initSwiperElements()):"yes"!=this.getElementSettings("_ob_glider_is_slider")&&(this.$element.removeClass("ob-is-glider"),this.addClassesRouteGlider(".elementor-element-"+this.$element.attr("data-id"),"removeClass")))},addClassesRouteGlider:function(t,o){var n=e(t).children(".elementor-container").first();n.length&&n.addClass("swiper-container");var s=e(n).children(".elementor-row").first();s.length&&"addClass"==o&&(s.addClass("swiper-wrapper"),e(s).children("div.elementor-column").addClass("swiper-slide")),s.length&&"removeClass"==o&&(s.removeClass("swiper-wrapper"),e(s).children("div.elementor-column").removeClass("swiper-slide"))},initSectionExtends:function(){this.isEdit?("yes"!==this.getElementSettings("_ob_bbad_use_it")||this.isBreakingBad()||this.$element.addClass("ob-is-breaking-bad"),"yes"===this.getElementSettings("_ob_glider_is_slider")&&(this.$element.addClass("ob-is-glider"),this.addClassesRouteGlider(".elementor-element-"+this.$element.attr("data-id"),"addClass"),this.initSwiperElements())):"yes"===this.getElementSettings("_ob_glider_is_slider")&&(this.$element.addClass("ob-is-glider"),this.addClassesRouteGlider(".elementor-element-"+this.$element.attr("data-id"),"addClass"),this.initSwiperElements())},initSwiperElements:function(){this.$element.children(".elementor-container .swiper-button-next").first().length||this.$element.children(".elementor-container").first().append('<div class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin" viewBox="0 0 27 44"><path d="M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z"></path></svg></div>'),this.$element.children(".elementor-container .swiper-button-prev").first().length||this.$element.children(".elementor-container").first().append('<div class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin" viewBox="0 0 27 44"><path d="M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z"></path></svg></div>'),this.$element.children(".elementor-container .swiper-pagination").first().length||this.$element.children(".elementor-container").first().append('<div class="swiper-pagination"></div>');var e={};e.pagination_type=this.getElementSettings("_ob_glider_pagination_type"),e.allowTouchMove=this.getElementSettings("_ob_glider_allow_touch_move"),e.autoheight=this.getElementSettings("_ob_glider_auto_h"),e.effect=this.getElementSettings("_ob_glider_effect"),e.loop=this.getElementSettings("_ob_glider_loop"),e.direction=this.getElementSettings("_ob_glider_direction"),e.parallax=this.getElementSettings("_ob_glider_parallax"),e.speed=this.getElementSettings("_ob_glider_speed");var t=this.getElementSettings("_ob_glider_autoplay");e.autoplay=!!t&&{delay:this.getElementSettings("_ob_glider_autoplay_delay")},o(this.$element.attr("data-id"),e)}}),column:elementorModules.frontend.handlers.Base.extend({onInit:function(){elementorModules.frontend.handlers.Base.prototype.onInit.apply(this,arguments),this.initColumnExtends()},isTeleporter:function(){return this.$element.hasClass("ob-is-teleporter")},initColumnExtends:function(){this.isEdit&&"use-teleporter"===this.getElementSettings("_ob_teleporter_use")&&(this.$element.addClass("ob-is-teleporter"),this.doTeleporterEditor()),!this.isEdit&&this.isTeleporter()&&this.doTeleporter()},onElementChange:function(e){"_ob_teleporter_overlay_color"===e?this.$element.find('div[class*="ob-teleporter-"] > .ob-tele-overlay').css("background-color",this.getElementSettings("_ob_teleporter_overlay_color")):"_ob_teleporter_no_pass_tablet"===e?"no-tablet"===this.getElementSettings("_ob_teleporter_no_pass_tablet")?this.$element.addClass("ob-tele-no-tablet"):this.$element.removeClass("ob-tele-no-tablet"):"_ob_teleporter_no_pass_mobile"===e&&("no-mobile"===this.getElementSettings("_ob_teleporter_no_pass_mobile")?this.$element.addClass("ob-tele-no-mobile"):this.$element.removeClass("ob-tele-no-mobile"))},doTeleporterEditor:function(){if("use-teleporter"===this.getElementSettings("_ob_teleporter_use")&&"do-pass"===this.getElementSettings("_ob_teleporter_pass")){var t=this,o=this.$element,n=this.$element.attr("data-id");"no-tablet"===this.getElementSettings("_ob_teleporter_no_pass_tablet")&&this.$element.addClass("ob-tele-no-tablet"),"no-mobile"===this.getElementSettings("_ob_teleporter_no_pass_mobile")&&this.$element.addClass("ob-tele-no-mobile");var s="section"===this.getElementSettings("_ob_teleporter_pass_element")?this.$element.closest(".elementor-section"):this.$element.closest(".elementor-container");if(s.length){s.css("overflow","hidden");var l=this.getElementSettings("_ob_teleporter_pass_effect"),r='<div class="ob-teleporter-'+n+" ob-tele-eff-"+l+'" data-id-teleporter="'+n+'"><div class="ob-tele-overlay" style="background-color: '+this.getElementSettings("_ob_teleporter_overlay_color")+';"></div></div>';e(".ob-teleporter-"+n).length||this.$element.prepend(r),this.$element.off("mouseenter mouseleave"),this.$element.on("mouseenter mouseleave",(function(l){if("mouseenter"===l.type){if("no-tablet"===t.getElementSettings("_ob_teleporter_no_pass_tablet")&&"tablet"===elementorFrontend.getCurrentDeviceMode())return;if("no-mobile"===t.getElementSettings("_ob_teleporter_no_pass_mobile")&&"mobile"===elementorFrontend.getCurrentDeviceMode())return;if("do-pass"!==t.getElementSettings("_ob_teleporter_pass"))return;var r={"background-color":e(".ob-teleporter-"+n).css("background-color"),"background-image":e(".ob-teleporter-"+n).css("background-image"),"background-position":e(".ob-teleporter-"+n).css("background-position"),"background-size":e(".ob-teleporter-"+n).css("background-size"),"background-repeat":e(".ob-teleporter-"+n).css("background-repeat")};if("section"===t.getElementSettings("_ob_teleporter_pass_element")){var i=s.children().not(".elementor-container").detach();s.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-"+n)),s.prepend(i)}else s.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-"+n));e(".ob-teleporter-"+n).css(r).hide(),e(".ob-teleporter-"+n).addClass("ob-teleporter-hover").show()}else s.removeClass("ob-tele-mom-hover"),setTimeout((function(){e(".ob-teleporter-"+n).removeAttr("style").removeClass("ob-teleporter-hover"),o.prepend(e(".ob-teleporter-"+n))}),100)}))}}},doTeleporter:function(){var t=e.parseJSON(this.$element.attr("data-settings"));if("use-teleporter"===t._ob_teleporter_use&&"do-pass"===t._ob_teleporter_pass){var o=this.$element,n=this.$element.attr("data-id");"no-tablet"===t._ob_teleporter_no_pass_tablet&&this.$element.addClass("ob-tele-no-tablet"),"no-mobile"===t._ob_teleporter_no_pass_mobile&&this.$element.addClass("ob-tele-no-mobile");var s="section"===t._ob_teleporter_pass_element?this.$element.closest(".elementor-section"):this.$element.closest(".elementor-container");if(s.length){s.css("overflow","hidden");var l=t._ob_teleporter_pass_effect,r='<div class="ob-teleporter-'+n+" ob-tele-eff-"+l+'" data-id-teleporter="'+n+'"><div class="ob-tele-overlay" style="background-color: '+t._ob_teleporter_overlay_color+';"></div>';if(e(".ob-teleporter-"+n).length||this.$element.prepend(r),this.$element.off("mouseenter mouseleave"),this.$element.on("mouseenter",(function(){if(!("no-tablet"===t._ob_teleporter_no_pass_tablet&&"tablet"===elementorFrontend.getCurrentDeviceMode()||"no-mobile"===t._ob_teleporter_no_pass_mobile&&"mobile"===elementorFrontend.getCurrentDeviceMode())){var o={"background-color":e(".ob-teleporter-"+n).css("background-color"),"background-image":e(".ob-teleporter-"+n).css("background-image"),"background-position":e(".ob-teleporter-"+n).css("background-position"),"background-size":e(".ob-teleporter-"+n).css("background-size"),"background-repeat":e(".ob-teleporter-"+n).css("background-repeat")};if("section"===t._ob_teleporter_pass_element){var l=s.children().not(".elementor-container").detach();s.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-"+n)),s.prepend(l)}else s.addClass("ob-tele-mom-hover").prepend(e(".ob-teleporter-"+n));e(".ob-teleporter-"+n).css(o).hide(),e(".ob-teleporter-"+n).show().addClass("ob-teleporter-hover")}})),this.$element.on("mouseleave",(function(){s.removeClass("ob-tele-mom-hover"),setTimeout((function(){e(".ob-teleporter-"+n).removeAttr("style").removeClass("ob-teleporter-hover"),o.prepend(e(".ob-teleporter-"+n))}),100)})),void 0!==t._ob_teleporter_link){var i=t._ob_teleporter_link;if(""===i.url)return;this.$element.off("click.obTeleporter"),this.$element.on("click.obTeleporter",(function(){i.is_external?window.open(i.url):location.href=i.url}))}}}}})};e.each(s,(function(e,t){elementorFrontend.hooks.addAction("frontend/element_ready/"+e,(function(e){elementorFrontend.elementsHandler.addHandler(t,{$element:e})}))}))}));var o=function(e,t){new Swiper(".elementor-element-"+e+" .swiper-container",{allowTouchMove:"yes"===t.allowTouchMove,autoHeight:"yes"===t.autoheight,effect:t.effect,loop:t.loop,direction:"fade"===t.effect?"horizontal":t.direction,parallax:"yes"===t.parallax,speed:t.speed,navigation:{nextEl:".elementor-element-"+e+" .swiper-button-next",prevEl:".elementor-element-"+e+" .swiper-button-prev"},pagination:{el:".elementor-element-"+e+" .swiper-pagination",type:t.pagination_type,clickable:!0},autoplay:t.autoplay,watchOverflow:!0})}}(jQuery,window);