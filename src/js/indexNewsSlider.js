document.addEventListener('DOMContentLoaded', function() {
    
    if (window.innerWidth <= 767) {

        const swiper = new Swiper(".mySwiper", {
            loop: true,
            allowSlideNext: true,
            slideClass: 'swiper-slide1',
            centeredSlides: true,
            centeredSlidesBounds: true,
            spaceBetween: 0,
            slidesPerView: 2,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            breakpoints:{
                490:{
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                    spaceBetween: -100,
                    slidesPerView: 2,
                },
                590:{
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                    spaceBetween: 0,
                    slidesPerView: 3,
                },
                690:{
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                    spaceBetween: -100,
                    slidesPerView: 3,
                },

            }
        });
    } else{
        const mainContainer = document.querySelector("#news-container-for-gradient");
        const newsListElement = document.querySelector("#news-card-list");
        const newsListItems = Array.from(newsListElement.children);

        mainContainer.classList.remove('swiper');
        mainContainer.classList.remove('mySwiper');
        newsListElement.classList.remove('swiper-wrapper');
        newsListItems.forEach(item => {
            item.classList.remove('swiper-slide');
            item.classList.remove('swiper-slide1');

        })
    }
});