// インラインフレームの高さを決定

var timer = false;
$(window).on("load orientationchange resize",function(){
if (timer !== false) {
clearTimeout(timer);
}
timer = setTimeout(function() {
    var w = window.innerWidth ? window.innerWidth : $(window).width(),
        b = $("#wrapper").height(),
        h = $("header").outerHeight(true),
        f = $("footer").outerHeight(true);
  if (600 <=  w) {// windowの幅が600以上の時のインラインフレームの高さ
    $("#rightcolumn,#leftcolumn").css("height", b - h - f  + "px");
  } else {// windowの幅が600以下の時
    $("#rightcolumn").css("height", b - h - f - 32 + "px");
    $("#leftcolumn").css("height", "100%");
  }
}, 100);
});
