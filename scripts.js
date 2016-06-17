$(function() {
 // カテゴリーがない時のスタイル修正
 if(!($('.entry-categories').length)){
  $(".entry-header").css('padding-top','0');
 }
 // 非タブレット環境で見る際のスタイル修正
 var w = $(window).width();
 var x1 = 1023;
 var x2 = 768;
 if (w <= x1 && w >= x2 ) {
  if(!($('#box2-inner .ad').length)){
   $("#box2 .hatena-module:nth-of-type(2n+4)").css('margin-right','0');
   $("#box2 .hatena-module:nth-of-type(odd)").css('margin-right','10px');
  }
 }
});
