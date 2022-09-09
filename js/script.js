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

// TOGGLE MOBILE NAV

// TOGGLE ACTIVE SLIDER LABEL
const sliderLabels = document.querySelectorAll(".projects__slides--label");
sliderLabels.forEach((label) => {
	label.addEventListener("click", () => {
		sliderLabels.forEach((item) => item.classList.remove("label-active"));
		label.classList.toggle("label-active");
	});
});