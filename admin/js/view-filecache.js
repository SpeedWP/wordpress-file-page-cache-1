O10N[1](function(k,l,f,m,c){function g(){c[24]("preload_start",{},function(a){a?c[11]("","query failed",a):(d=!1,e())})}function h(){c[24]("preload_stop",{},function(a){a?c[11]("","query failed",a):(d=!1,e())})}function e(){d||(d=!0,c[24]("preload_status",{},function(a,n,b){d=!1;a?c[11]("","query failed",a):-1!==b[0]?(jQuery("#preload_status .w3-container").addClass("w3-green").animate({width:b[0]+"%"},1E3).html(b[0]+"%"),jQuery(".preload_status_files tbody").html(b[1]),jQuery(".preload_status_speed").html(b[2]),
b[3]&&100!==b[0]?(0==jQuery(".preload_status_desc",jQuery("#preload_status").parent()).length&&jQuery("#preload_status").before('<p class="description preload_status_desc"></p>'),jQuery(".preload_status_desc",jQuery("#preload_status").parent()).html(b[3]),jQuery(".preload_status_desc",jQuery("#preload_status").parent()).show()):jQuery(".preload_status_desc",jQuery("#preload_status").parent()).hide(),100!==b[0]?(setTimeout(e,1E3),jQuery(".preload_buttons .dashicons-controls-play").parent().show(),
jQuery(".preload_buttons .dashicons-controls-pause").parent().show()):(jQuery(".preload_buttons .dashicons-controls-play").parent().show(),jQuery(".preload_buttons .dashicons-controls-pause").parent().hide())):(jQuery(".preload_buttons .dashicons-controls-play").parent().show(),jQuery(".preload_buttons .dashicons-controls-pause").parent().hide())}))}var d=!1;return c[14](function(){jQuery("#test_query").length&&jQuery("#test_query").on("click",function(){var a=jQuery(".query-test-result",jQuery("#test_query").parent());
jQuery(a).html('<span class="spinner" style="float:none;"></span> Executing query...');jQuery(".spinner",a).css({visibility:"visible"});var d=jQuery('input[name="o10n[filecache.preload.query]"]').data("json-editor").getText();c[24]("test_query",{query:d},function(b,d,e){b?(jQuery(a).html('<span class="dashicons dashicons-warning"></span> '+b),c[11]("","query failed",b)):jQuery(a).html('<span class="dashicons dashicons-yes"></span> '+e[0]+" URLs")})});jQuery("#preload_status").length&&(e(),jQuery(".preload_buttons .dashicons-controls-play").parent().on("click",
g),jQuery(".preload_buttons .dashicons-controls-pause").parent().on("click",h),jQuery(".preload_buttons .dashicons-update").parent().on("click",e))}),f});