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
}, 5000);
