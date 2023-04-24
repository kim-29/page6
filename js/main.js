$(document).ready(function(){
  $('#search, .fa-search').mouseenter(function(){
    $('.logo').hide();
  });
  $('#search, .fa-search').mouseleave(function(){
    $('.logo').show();
  });
  
  $('.fa-bars').click(function(){
    $('.navbar').toggle();
    $(this).toggleClass('fa-times');
  })
  $('.navbar, .navbar.a').click(function(){
    $('.navbar').hide();
    $('.fa-bars').removeClass('fa-times');
  })
  
  $(window).on('scroll load',function(){
    if($(window).scrollTop()>20){
      $('#header').css({'background':'#eb4d4b','box-shadow':'0 .1rem .3rem #000'});
    }else{
      $('#header').css({'background':'#333','box-shadow':'none'});
    }
  })
  
  
  $('.home').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout:3000,
  })
  
  $('.product-slider').owlCarousel({
    loop:true,
    nav:true,
    items:3,
    autoplay:true,
    autoplayTimeout:3000,
    center:true,
    responsive:{
      0:{items:1,nav:true},
      550:{items:2},
      1000:{items:3},
    }
  })
  
  $('.review-slider').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout:3000,
  })
  
  $('.brand-slider').owlCarousel({
    loop:true,
    nav:false,
    items:5,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
      0:{items:1},
      300:{items:2},
      500:{items:3},
      700:{items:4},
      900:{items:5},
    }
  })
  
})

