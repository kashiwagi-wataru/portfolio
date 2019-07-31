

 $('a[href^="#"]').click(function() {
   // スクロールの速度
   var speed = 600; // ミリ秒で記述
   var href = $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;
   $('body,html').animate({
     scrollTop: position
   }, speed, 'swing');
   return false;
 });



 $('#target').hover(() => {
    $('#target').css(`font-size`,`100px`)
 },function() {
    $('#target').css(`font-size`, `60px`)
 });