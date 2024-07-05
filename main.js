const container = document.getElementById("container");
const imageOne = document.querySelector(".image1");
const imageTwo = document.querySelector(".image2");
const imageThree = document.querySelector(".image3");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const btnSurprise = document.getElementById("btnSurprise");
const btnSurprise2 = document.getElementById("btnSurprise2");

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    return randomNumber;
}

let lastMoveTime = 0;
const throttDelay = 200;

btnNo.addEventListener("mouseover", (e) => {
    const now = Date.now();

    if (now - lastMoveTime >= throttDelay) {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;

    while (Math.abs(newTop - btnTop) < containerHeight / 2){
        newTop = getRandomNumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft  - btnLeft) < containerWidth / 2) {
        newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";

    lastMoveTime = now;
    }

});

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
    btnSurprise.classList.remove("hide");
    btnYes.classList.add("hide");
});

btnSurprise.addEventListener("click", (e) => {
    btnYes.classList.add("hide");
    imageTwo.classList.add("hide");
    imageThree.classList.remove("hide");
    btnSurprise.classList.add("hide");
    btnSurprise2.classList.remove("hide");
});

btnSurprise2.addEventListener("click", (e) => {
    window.location.href = "index2.html"; 
});