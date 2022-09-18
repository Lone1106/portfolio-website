// ADD COPY RIGHT YEAR
const copy = document.querySelector(".copyyear");
let year = new Date().getFullYear();
copy.innerHTML = year;

// HIDE MOBILE NAV ON ITEM CLICK
const navItems = document.querySelectorAll(".nav-mobile__container--item"),
	navToggle = document.getElementById("navtoggle");
navItems.forEach((item) => {
	item.addEventListener("click", () => {
		navToggle.checked = false;
	});
});

// TOGGLE ACTIVE PROJECT SLIDER LABEL
const sliderLabels = document.querySelectorAll(".projects__slides--label");
sliderLabels.forEach((label) => {
	label.addEventListener("click", () => {
		sliderLabels.forEach((item) => item.classList.remove("label-active"));
		label.classList.toggle("label-active");
	});
});

// AUTO NAV PROJECTS
let counter = 1;
const swapTime = 10000;
setInterval(() => {
	document.getElementById("r" + counter).checked = true;
	sliderLabels.forEach((item) => item.classList.remove("label-active"));
	sliderLabels[counter - 1].classList.add("label-active");
	counter++;
	if (counter > 3) counter = 1;
}, swapTime);

// REVEAL SECTIONS ON SCROLL
function isVisible(element) {
	let elementBox = element.getBoundingClientRect();
	let distanceFromTop = -100;

	if (elementBox.top - window.innerHeight < distanceFromTop) return true;
}

function throttle(func, limit) {
	let inThrottle;
	return function () {
		if (!inThrottle) {
			func();
			inThrottle = true;
			setTimeout(() => (inThrottle = false), limit);
		}
	};
}

function scanDocument() {
	let sections = document.querySelectorAll(".section-hidden");
	sections.forEach((section) => {
		if (isVisible(section)) section.classList.remove("section-hidden");
	});
}
document.addEventListener("scroll", throttle(scanDocument, 500));

// RESET FORM
const form = document.querySelector(".contact__main--form");
form.addEventListener("submit", () => {
	setTimeout(() => {
		form.reset();
	}, 5000);
});
