// console.log('연결');

(function($){
    var lastScroll = 0;
    $(window).scroll(function(event){
         var scroll = $(window).scrollTop();
         if (scroll > $('.custom2').offset().top - $(window).height() / 2 - $('.left_text').height()){
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


         if (scroll > $('.custom2').offset().top - 60) {
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


         if($('.custom2').offset().top + 50 <= scroll) {
            if($('.custom_area').hasClass('fixed')){
              $('.custom_area').removeClass('fixed');
            }  
         }else{
            if(!$('.custom_area').hasClass('fixed')){
              $('.custom_area').addClass('fixed');
            }  
         }
         lastScroll = scroll;
    });




    // $(window).scroll(function() {

        // var scrollTop = $(window).scrollTop();
        
        // var navHeight = $( window ).height() ;
        // if(window.pageYOffset >= $(".custom2").offset().top) {
        //         $('custom_area').css("position","absolute");
        //       }
        //       else {
        //         $('custom_area').css("position","fixed");
        //       }
    // });
         

       /* ---- 카트 담기 버튼 모달 ---- */

       $(".show").on("click", function(){
        $(".mask").addClass("active");
      });
  
      // Function for close the Modal
  
      function closeModal(){
        $(".mask").removeClass("active");
      }
  
      // Call the closeModal function on the clicks/keyboard
  
      $(".close, .mask").on("click", function(){
        closeModal();
      });
  
      $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          closeModal();
        }
      });

      /* ---- custom --- */

      var itemNum = 0,
          custumNum = 0;
      $('.product_list img').on('click', function(){
        itemNum = $('.product_list img').index(this);
        custumNum = 0;
        imgReplace();
      });
      $('.custom_type_img div').on('click', function(){
        custumNum = $('.custom_type_img div').index(this) + 1;
        imgReplace();
      });
      //itemThumbnail -- click - 현재값  - itemNum
      //custumThumbnail -- click - 현재값  - custumNum
      var imgReplace = function(){
        var imgSrc = './img/item_' + itemNum + '_' + custumNum + '.png'
        $('#change-item').attr('src', imgSrc); 
      }


})(jQuery);


var count = 1;
var countEl = document.getElementById("count");
function plus(){
    count++;
    countEl.value = count;
}
function minus(){
  if (count > 1) {
    count--;
    countEl.value = count;
  }  
}