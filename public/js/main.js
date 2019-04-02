$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,  
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            },
            1400:{
                items:6
            },
            1800:{
                items:7
            }
        }

    });

});

// $(document).ready(function(){
   
//     $( "#btn1" ).click(function() {
//         $("#block_1").toggle("fast");        
//       });

// });

