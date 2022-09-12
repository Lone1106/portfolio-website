// ADD COPY RIGHT YEAR
const copy = document.querySelector(".copyyear");
let year = new Date().getFullYear();
copy.innerHTML = year;

// TOGGLE NAV ACTIVE
const navLinks = document.querySelectorAll(".navigation__list--link"),
	navItems = document.querySelectorAll(".navigation__list--item");

navItems.forEach((item, index) => {
	item.addEventListener("click", () => {
		navItems.forEach((item) => item.classList.remove("active"));
		item.classList.toggle("active");
		navLinks.forEach((link) => link.classList.remove("active-link"));
		navLinks[index].classList.toggle("active-link");
	});
});

// WHEN CLICK ON LOGO REMOVE ACTIVE NAV
const home = document.querySelector(".navigation__img");
home.addEventListener("click", () => {
	navItems.forEach((item) => {
		item.classList.remove("active");
	});
	navLinks.forEach((link) => link.classList.remove("active-link"));
});

// TOGGLE MOBILE NAV
const navButton = document.querySelector(".navigation__mobile");
navButton.addEventListener("click", () => {
	console.log("Toggle mobile nav");
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
setInterval(() => {
	document.getElementById("r" + counter).checked = true;
	sliderLabels.forEach((item) => item.classList.remove("label-active"));
	sliderLabels[counter - 1].classList.add("label-active");
	counter++;
	if (counter > 3) counter = 1;
}, 10000);

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
const formButton = document.querySelector(".contact__left--btn");
formButton.addEventListener("click", (e) => {
	e.preventDefault();
	let email = document.getElementById("email"),
		subject = document.getElementById("subject"),
		message = document.getElementById("message");
	email.value = "";
	subject.value = "";
	message.value = "";
});