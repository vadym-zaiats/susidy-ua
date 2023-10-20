const terget = 10_000_000;
const alreadyHave = document
  .querySelector(".purpose__fill")
  .getAttribute("data-target");
const fillElement = document.querySelector(".purpose__fill");
const countElement = document.querySelector(".purpose__count");
const percentage = alreadyHave / (terget / 100);
fillElement.style.width = `${percentage}%`;
countElement.textContent = `${alreadyHave} / ${terget}`;
