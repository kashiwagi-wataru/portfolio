 $('a[href^="#"]').click(function() {
   var speed = 600; // ミリ秒
   var href = $(this).attr("href");
   var target = $(href == "#" || href == "" ? 'html' : href);
   var position = target.offset().top;
   $('body,html').animate({
     scrollTop: position
   }, speed, 'swing');
   return false;
 });


 $('#target').hover(() => {
    $('#target').css(`font-size`,`7em`)
 },function() {
    $('#target').css(`font-size`, `4em`)
 });

$(function(){
  $('#mouseaction').mouseover(function(e){
    $('#changecolor').addClass("visible");
  })
  $('#mouseaction').mouseout(function(e){
    $('#changecolor').removeClass("visible");
  })  
});