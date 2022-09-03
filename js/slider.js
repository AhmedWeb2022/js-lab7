let sliderImages = Array.from(document.querySelectorAll(".container img"));
let slidesSize = sliderImages.length;
console.log(slidesSize);
let currentSlide = 1;
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
check();

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    check();
  }
}
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    check();
  }
}
function check() {
  removeActiveClass();
  sliderImages[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == slidesSize) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
function removeActiveClass() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
}
