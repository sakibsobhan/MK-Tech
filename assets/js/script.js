// counter up
$("#counter").countMe(.001,.001);
$("#counter2").countMe(40,65);

// slick slider
$(".slider").slick({
    slidesToShow: 2,
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    responsive: [
        {
          breakpoint: 576,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
      ]
})