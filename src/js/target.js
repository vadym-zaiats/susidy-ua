const terget = document
	.querySelector(".purpose__bar")
	.getAttribute("data-target");

const alreadyHave = document
	.querySelector(".purpose__bar")
	.getAttribute("data-fill");

const fillElement = document.querySelector(".purpose__fill");
const countElement = document.querySelector(".purpose__count");

const percentage = alreadyHave / (terget / 100);
fillElement.style.width = `${percentage}%`;
countElement.textContent = `${alreadyHave} / ${terget}`;
