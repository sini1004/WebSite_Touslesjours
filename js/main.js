var swiper = new Swiper(".mySwiper", {
  autoplay: {
    speed : 3000,
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction'
  },

  
  breakpoints: {
    // 화면의 넓이가 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // 화면의 넓이가 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    // 화면의 넓이가 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  },
});


var swiper = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween : 80,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  // loop : true, // 슬라이드 반복

  autoplay : { // 자동 재생
    delay : 1, // 딜레이 0
  },
  speed : 3000, // 슬라이드 속도 2초

  pagination: {
    el: ".swiper-pagination",
  },
});


$(window).scroll(function(){
  let scrollY = $(window).scrollTop(); //현재스크롤값
  // console.log(scrollY);
  if(scrollY >30){
    $('.brand_img').addClass('roll');
  }else {
    $('.brand_img').removeClass('roll');
  }
});


$(window).ready(function(){
  $('.popup').show();
  console.log('팝업 노출');
  
  // 로그인 팝업창 X
  $('.close').click(function(){
    $('.popup').hide();
    console.log('클릭했어요');
  });
});

