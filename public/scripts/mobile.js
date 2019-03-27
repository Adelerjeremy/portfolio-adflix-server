$(function(){

//-------------OPEN MENU-------->

  $(".open").click(function(){

    $('.box').css({"display":"block","z-index":"9999"});

//--------------NAV MOBILE MENU------->

    TweenMax.to('.social-mobile-menu', 1, {
      delay: 1,

      display:"flex",
      ease: Expo.easeInOut
    });
      TweenMax.to('.mobile-menu', 1, {
        delay: 0.8, 
        display:"block",
        ease: Expo.easeInOut
      });

//---------3 PAGES ANIMATES OPEN----------->

    $('.noir').css('width','100%');
      TweenMax.from(".noir", 0.1, {
        delay: 0.2,
        x:0,
        ease: Expo.easeInOut
      });
      $('.rouge').css('width','96%');
      TweenMax.from(".rouge", 0.1, {
        delay: 0.3,
        x:0,
        ease: Expo.easeInOut
      });
      $('.white').css('width','96%');
      TweenMax.from(".white", 0.1, {
        delay: 0.4,
        x:0,
        ease: Expo.easeInOut
      });

//-------------CLOSING MENU-------->

      $(".close").click(function(){
       
        TweenMax.to(".noir", 0.2, {
          delay: 0.4,
          x: -1500,
          ease: Expo.easeOut
        });
        TweenMax.to(".rouge", 0.2, {
          delay: 0.3,
          x: -1500,
          ease: Expo.easeOut
        });
        TweenMax.to(".white", 0.2, {
          delay: 0.2,
          x: -1500,
          ease: Expo.easeOut
        });
        // $('.block_bottom_long').css({"display":"block"});
        // $('.block_bottom').css({"display":"block"});
    
      });//-----.close click function--->

  });//-----.open click function--->

});//-----ALL FUNCTION-------->





