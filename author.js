//header//

document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.querySelector('.search-btn');
    const closeBtn = document.querySelector('.close-btn');
    const searchInput = document.querySelector('.search-input');

    // Show the search input when search icon is clicked
    searchBtn.addEventListener('click', function() {
        searchInput.classList.add('active');
        searchInput.focus(); // Focus on the input field
        searchInput.style.visibility = 'visible'; // Ensure visibility
        searchBtn.classList.add('d-none'); // Hide the search button
        closeBtn.classList.remove('d-none'); // Show the close button
    });

    // Hide the search input and reset icons when close button is clicked
    closeBtn.addEventListener('click', function() {
        searchInput.classList.remove('active');
        searchInput.style.visibility = 'hidden'; // Hide visibility after transition
        closeBtn.classList.add('d-none'); // Hide the close button
        searchBtn.classList.remove('d-none'); // Show the search button
    });

    // Close the search input if clicking outside of it
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchBtn.contains(event.target) && !closeBtn.contains(event.target)) {
            searchInput.classList.remove('active');
            searchInput.style.visibility = 'hidden'; // Hide visibility after transition
            closeBtn.classList.add('d-none');
            searchBtn.classList.remove('d-none');
        }
    });
});




//tetimonial//

var testiomnialData = [
    {
        avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
        name: "Simonette Lindermann",
        review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
        name: "Merilee Beal",
        review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer"
    },
    {
        avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
        name: "Suzi Lankester",
        review: "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
        name: "Gaston Cunnow",
        review: "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        name: "Marys Lobb",
        review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    },
    {
        avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        name: "Marys Lobb",
        review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    }, {
        avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        name: "Marys Lobb",
        review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    }]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h3>${i.name}</h3><p>${i.review}</p></div></div>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 500 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2
    if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
    if (window.innerWidth < 501) swiper.params.slidesPerView = 1
    swiper.update()
}


//newsletter toast//



const form = document.getElementById('contactForm');
const toastMessage = new bootstrap.Toast(document.getElementById('toastMessage'));

form.addEventListener('submit', function(event) {
    event.preventDefault();
    toastMessage.show();
});

//footer//

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


