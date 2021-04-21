// console.log('load');

(function($){
    var lastScroll = 0;
    $(window).scroll(function(event){
         var scroll = $(window).scrollTop();


         if (scroll > $('.section3').offset().top - 60) {
          //이벤트를 적용시킬 스크롤 
             if(!$('header').hasClass('active')){
               $('header').addClass('active');
             } 
          }
          else {
           if($('header').hasClass('active')){
             $('header').removeClass('active');
           }  
        }
         lastScroll = scroll;
    });

})(jQuery);

const body = document.body,
      jsScroll = document.getElementsByClassName('js-scroll')[0],
      height = jsScroll.getBoundingClientRect().height - 1,
      speed = 0.05

var offset = 0;

body.style.height = Math.floor(height) + "px"

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed
    
    var scroll = "translateY(-" + offset + "px) translateZ(0)"
    jsScroll.style.transform = scroll
    
    raf = requestAnimationFrame(smoothScroll)
}
smoothScroll()


  /* 첫 번째 줄 */
  $('#festival01').hover(
      function() {$(this).attr('src','./img/main4_01_hover.png')},
      function() {$(this).attr('src','./img/main4_01.png')}
  ) 

  $('#festival02').hover(
    function() {$(this).attr('src','./img/main4_02_hover.png')},
    function() {$(this).attr('src','./img/main4_02.png')}
  )
 
  $('#festival03').hover(
    function() {$(this).attr('src','./img/main4_03_hover.png')},
    function() {$(this).attr('src','./img/main4_03.png')}
  )


