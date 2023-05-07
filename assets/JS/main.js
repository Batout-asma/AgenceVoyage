const carouselData = [{ imgSrc: '/assets/Img/hotel alger.jpg', title: 'AFRIC HOTEL- Casbah' }, { imgSrc: '/assets/Img/hotel alger2.jpg', title: 'ibis Alger Aéroport' },
{ imgSrc: '/assets/Img/hotel oran2.jpg', title: 'ibis Tlemcen' }, { imgSrc: '/assets/Img/hotel oran.jpg', title: 'ibis Tlemcen' }, { imgSrc: '/assets/Img/hotel annaba.webp', title: 'Sheraton Annaba Hotel' },
{ imgSrc: '/assets/Img/hotel tlemcen.webp', title: 'ibis Tlemcen' }];

const carouselImg = document.getElementById('carousel-img');
const carouselTitle = document.getElementById('carousel-title');

let currentItemIndex = 0;

function updateCarousel() {
    carouselImg.src = carouselData[currentItemIndex].imgSrc;
    carouselTitle.textContent = carouselData[currentItemIndex].title;
}

function changeItem() {
    currentItemIndex++;
    if (currentItemIndex >= carouselData.length) {
        currentItemIndex = 0;
    }
    updateCarousel();
}

setInterval(changeItem, 2500);