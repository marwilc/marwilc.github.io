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
    
  
  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
  
  anime.timeline({loop: true})
  .add({
    targets: '.ml10 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml10 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
      
  // console.log(document.querySelectorAll('[lang="en"]'));
  // console.log(document.querySelectorAll('[lang="es"]'));
  
      
      
  setTimeout(function () {
        document.getElementsByTagName('body')[0].classList.add('loaded')
      }, 1000);

 
})();
 

function setLang(lang) {
  
  if (lang == 'en') {
    
    hide('[lang="en"]');
    show('[lang="es"]');    

  } else {
    
    hide('[lang="es"]');
    show('[lang="en"]');
  }
  
}

function show(lang) {
  document.querySelectorAll(lang).forEach(element => {
    
    element.classList.remove('d-none');
    element.classList.add('d-flex');
  });
}


function hide(lang) {  
  document.querySelectorAll(lang).forEach(element => {
    
    element.classList.remove('d-flex');
    element.classList.add('d-none');

  });
  
}

