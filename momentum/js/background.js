const bgImg = ["img-01.jpg", "img-02.jpg", "img-03.jpg", "img-04.jpg", "img-05.jpg"]
const bgBtn = document.querySelector(".bg-btn");
const body = document.querySelector("body");
const bgImage = document.createElement("img");
const chosenImage = bgImg[Math.floor(Math.random() * bgImg.length)];

bgImage.classList.add("bg-image");

function choseImage() {
    const chosenImage = bgImg[Math.floor(Math.random() * bgImg.length)];
    bgImage.src = `img/${chosenImage}`
}
body.appendChild(bgImage);

function changeBg() {
    choseImage();
}

bgBtn.addEventListener("click", changeBg);
choseImage();