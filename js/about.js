// console.log('연결');
(function($){
    var lastScroll = 0;
    $(window).scroll(function(event){
         var scroll = $(window).scrollTop();
         if (scroll > $('.about_content01').offset().top - $(window).height() / 2 - $('.left_text').height()){
         //이벤트를 적용시킬 스크롤 
            if(!$('.left_text').hasClass('active')){
              $('.left_text').addClass('active');
            } 
         }
         else {
          if($('.left_text').hasClass('active')){
            $('.left_text').removeClass('active');
          }  
         }

         if (scroll > $('.about_content01').offset().top - 60) {
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
