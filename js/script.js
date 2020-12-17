
/* SLIDER SAMPLE1 */

var slider1 = new Swiper('.slider1', {
    loop: true,
    navigation: {
      nextEl: '.swiper-slider1-button-next',
      prevEl: '.swiper-slider1-button-prev',
    }
  })


  /* SLIDER SAMPLE2 */

  var slider2 = new Swiper('.slider2', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets', //ページネーションの種類
      clickable: true, //クリックに反応させる
    },
    navigation: {
      nextEl: '.swiper-slider2-button-next',
      prevEl: '.swiper-slider2-button-prev',
    }
  })

  /* SLIDER SAMPLE3 */

  var slider3 = new Swiper('.slider3', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-slider3-button-next',
      prevEl: '.swiper-slider3-button-prev',
    },
    breakpoints: {
    　// 900px以上なら以下を適用
      900: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesOffsetBefore: 8,
        slidesOffsetAfter: 10,
        centeredSlides: true, //イメージをセンターに
      }
    }
  })