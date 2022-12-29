const toggleBtn = document.querySelector('.headerbar-togleBtn');
const menuEl = document.querySelector('.header-menu');
const utilityEl = document.querySelector('.header-utility');

toggleBtn.addEventListener('click', () => {
    menuEl.classList.toggle('active');
    utilityEl.classList.toggle('active');
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides : 1,

    touchRatio: 0,//드래그 금지
    
    autoplay: {
    delay: 3000,
    },

    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable : true,
    },
    
    // 슬라이드 사이 여백
    spaceBetween: 100,    
    // slidesPerView : 'auto', //

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

});

AOS.init(); // 자바스크립트로 init()을 해야 동작한다.