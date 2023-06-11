let currentSlider = 0;
let next = document.querySelector('.slider-btn.right');
let back = document.querySelector('.slider-btn.left');
let navigation = document.querySelectorAll('.slider-user-photo-small');
let slides = document.querySelectorAll('.review-user');

// Клик на картинки
function selectReview(e) {
  let target = e.target.closest("li");
  let dataAtr = e.target.closest("li").getAttribute("data-target");

  document.querySelectorAll(".slider-user-photo-small, .review-user").forEach((el) => {
      el.classList.remove("active");
    });

  target.classList.add("active");
      slides.forEach((review, i) => {
      if (review.getAttribute("data-target") === dataAtr) {
        currentSlider = i;
        review.classList.add("active");
      } else {
        review.classList.remove("active");
      }
})
}

navigation.forEach((el) => {
  el.addEventListener("click", selectReview);
});

// Кнопки
back.addEventListener("click", () => {
  if (currentSlider === 0) {
    currentSlider = slides.length - 1;
  } else {
    currentSlider--;
  }
  // контент користувачів
  slides.forEach((review, i) => {
    review.classList.remove("active");
  });
  slides[currentSlider].classList.add("active");
  // маленькі фото користувачів
  navigation.forEach((element, i) => {
    element.classList.remove("active");
  });
  navigation[currentSlider].classList.add("active");
});


next.addEventListener("click", () => {
  if (currentSlider === slides.length - 1) {
    currentSlider = 0;
  } else {
    currentSlider++;
  }
  // контент користувачів
  slides.forEach((review, i) => {
    review.classList.remove("active");
  });
  slides[currentSlider].classList.add("active");
  // маленькі фото користувачів
  navigation.forEach((element, i) => {
    element.classList.remove("active");
  });
  navigation[currentSlider].classList.add("active");
});




// Тільки для переключення карток по кліку на маленьке фото користувача

// function selectReview(e) {
//   let target = e.target.closest("[data-target]");

//   document.querySelectorAll(".slider-user-photo-small, .review-user").forEach((el) => {
//       el.classList.remove("active");
//     });

//   target.classList.add("active");
//   document.querySelector(`.review-user[data-target=${target.getAttribute('data-target')}]`).classList.add("active");
//   }
