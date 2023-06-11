
// gallery masonry
window.onload = function () {
    const elem = document.querySelector('.grid');
    const masonry = new Masonry( elem, {
        itemSelector: '.grid-item',
        columnWidth: 386,
    });
}


const gridItem = document.querySelectorAll('.grid-item');
function getImg () {
    gridItem.forEach(el => {
        if (!el.classList.contains('active')){
            el.classList.add('active');
        }
    });
    const elem = document.querySelector('.grid');
    const massnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        columnWidth: 386,
    });
    document.querySelector('.gallery-section__btn').remove();
}

function zoomImg (e) {
    let element = e.target;
    let img = element.parentElement.querySelector('img');
    img.style.transform = "scale(1.3)";
    element.parentElement.style.zIndex = "1";
    img.style.background = "rgba(0, 0, 0, 0)";
    element.style.display = "none";
    img.style.opacity = "100%";
    setTimeout(function () {
        img.style.transform = "";
        element.parentElement.style.zIndex = "";
        img.style.background = "";
        img.style.opacity = "";
        element.style.display = "";
    }, 3000);
}

const modal = document.querySelector(".modal-window");
const modalImg = document.querySelector(".modal-img");

document.querySelector('.gallery-section').addEventListener('click', (event) => {
    if (event.target.closest('.gallery-section__btn')) {
        document.querySelector(".gallery-section__btn p").style.display = "none";
        document.querySelector(".gallery-section__btn span").style.display = "flex";
        setTimeout(getImg, 2000);
    }
    if (event.target.classList.contains('gallery-zoom-btn')) {
        zoomImg(event);
    }
    if (event.target.classList.contains('gallery-full-screen-btn')) {
        const imgSrc = event.target.parentElement.querySelector('img').getAttribute("src");
        console.log(imgSrc);
        const imgAlt = event.target.parentElement.querySelector('img').getAttribute('alt');
        modalImg.setAttribute("src", imgSrc);
        modalImg.setAttribute("alt", imgAlt);
        modal.style.display = "block";
        modal.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }
});