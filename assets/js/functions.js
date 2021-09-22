(function() {
    // your page initialization code here
    // the DOM will be available here
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
         // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
        // Responsive breakpoints
        autoplay: {
            delay: 5000,
        },
        grabCursor: true,
        effect: 'creative',
        creativeEffect: {
            prev: {
                // will set `translateZ(-400px)` on previous slides
                translate: [0, 0, -400],
            },
            next: {
                // will set `translateX(100%)` on next slides
                translate: ['100%', 0, 0],
            },
        }
       
    });
  
      
      
  setTimeout(function () {
        document.getElementsByTagName('body')[0].classList.add('loaded')
      }, 1000);

 
 })();

