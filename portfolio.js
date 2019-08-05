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


 $('.link').hover(() => {
    $('.link').css(
      'font-size', '5em',
      'color', 'red1',
    )
 },function() {
    $('.link').css(`font-size`, `4em`)
 });

// $(".skill-box").hover(() => {
//   $(".skill-box").css('background-color','red')
// },function(){
//   $(".skill-box").css('background-color','white')  
// });



$(function(){
  $(".viewall").mouseover(function(e){
    $(".viewtext").addClass("visible")
  })
  $(".viewall").mouseout(function(e){
    $(".viewtext").removeClass("visible")
  })  
});

