
//preloader js start
$(window).on('load', function(){
$(".preloader").delay(1000).fadeOut()
});
//preloader js end

// back to top js start
$(".back_to_top h5").click(function(){
  $("html,body").animate({
    scrollTop:0
  },100)
});

$(window).scroll(function(){
  var scrolling =$(this).scrollTop();

  if(scrolling > 70){
    $(".navbar").addClass("nav_bar_scroll")
  }
  else{
    $('.navbar').removeClass("nav_bar_scroll")
  }
  if(scrolling > 70){
    $(".navbar-brand img").attr("src", "img/logo.png")
  }
  else{
    $(".navbar-brand img").attr("src", "img/logogp.png")
  }

  if(scrolling > 20){
    $('.back_to_top h5').fadeIn(500)
  }
  else{
    $('.back_to_top h5').fadeOut(500)
  }
})
// back to top js end



// content slick slider js start
$('.content_slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow:".prev_btn",
    nextArrow:".next_btn",
  

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          }
        }
     
      ]
  });

  // content slick slider js end
  
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
});

// circle follower scale on heading hover
Shery.makeMagnet(".all_head" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate(".all_head", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});


// culture gooye effect



Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: .8,
});




// our post mixitUp
var containerEl = document.querySelector('.mix_main');

            var mixer = mixitup(containerEl);


// animation start
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from('.navbar', {
          y: '-10',
          duration: 1,
          ease: Expo.easeInOut
      })

      tl.from('.shakib', {
        opacity:0,
        x: '300',
        duration: 1.5,
        ease: Expo.easeInOut
        
    })
    tl.from('.banner_text', {
      opacity:0,
      x: '-300',
      delay:-2,
      duration: 1.5,
      ease: Expo.easeInOut
    })
    tl.from('.about_mobile', {
      opacity:0,
      y: '50',
      delay:-2,
      duration: 2,
      ease: Expo.easeInOut
    })
    tl.from('.culture_img', {
      opacity:0,
      x: '50',
      delay:-2,
      duration: 2,
      ease: Expo.easeInOut
    })
    tl.from('.culture_text', {
      opacity:0,
      x: '50',
      delay:-2,
      duration: 2,
      ease: Expo.easeInOut
    })
    tl.from('.music_img', {
      opacity:0,
      x: '50',
      delay:-2,
      duration: 2,
      ease: Expo.easeInOut
    })
    tl.from('.music_text', {
      opacity:0,
      x: '-50',
      delay:-2,
      duration: 2,
      ease: Expo.easeInOut
    })
    tl.from('#download', {
      opacity:0,
      delay:-2,
      duration: 2,
      ease: Expo.easeInOut
    })
}

firstPageAnim();
