const terget = 10_000_000;
const alreadyHave = 5_000_000;
const fillElement = document.querySelector(".purpose__fill");
const countElement = document.querySelector(".purpose__count");
const percentage = alreadyHave / (terget / 100);
console.log(percentage);
fillElement.style.width = `${percentage}%`;
countElement.textContent = `${alreadyHave} / ${terget}`;
