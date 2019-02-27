var sliderFirst = document.querySelector(".slider-first");
var sliderSecond = document.querySelector(".slider-second");
var sliderThird = document.querySelector(".slider-third");
var sliderBtnFirst = document.querySelector(".btn-slider-1");
var sliderBtnSecond = document.querySelector(".btn-slider-2");
var sliderBtnThird = document.querySelector(".btn-slider-3");
var siderBtnControls = document.querySelector(".btn-slider-controls");
var serviceFirst = document.querySelector(".service-item-first");
var serviceSecond = document.querySelector(".service-item-second");
var serviceThird = document.querySelector(".service-item-third");
var serviceBtnFirst = document.querySelector(".btn-service-1");
var serviceBtnSecond = document.querySelector(".btn-service-2");
var serviceBtnThird = document.querySelector(".btn-service-3");
var serviceDescFirst = document.querySelector(".service-description-item-first");
var serviceDescSecond = document.querySelector(".service-description-item-second");
var serviceDescThird = document.querySelector(".service-description-item-third");
var linkWriteUs = document.querySelector(".btn-write-us");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var linkMap = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map-close");
var form = document.querySelector(".form-modal");
var login = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");
var formBtn = document.querySelector(".btn-submit");

serviceBtnFirst.addEventListener("click", function (evt) {
	evt.preventDefault();
	serviceFirst.classList.add("our-service-item-current");
	serviceSecond.classList.remove("our-service-item-current");
	serviceThird.classList.remove("our-service-item-current");
	serviceBtnFirst.classList.add("btn-service-current");
	serviceBtnSecond.classList.remove("btn-service-current");
	serviceBtnThird.classList.remove("btn-service-current");
	serviceDescFirst.classList.add("service-show");
	serviceDescSecond.classList.remove("service-show");
	serviceDescThird.classList.remove("service-show");
});

serviceBtnSecond.addEventListener("click", function (evt) {
	evt.preventDefault();
	serviceSecond.classList.add("our-service-item-current");
	serviceFirst.classList.remove("our-service-item-current");
	serviceThird.classList.remove("our-service-item-current");
	serviceBtnSecond.classList.add("btn-service-current");
	serviceBtnFirst.classList.remove("btn-service-current");
	serviceBtnThird.classList.remove("btn-service-current");
	serviceDescSecond.classList.add("service-show");
	serviceDescFirst.classList.remove("service-show");
	serviceDescThird.classList.remove("service-show");
});

serviceBtnThird.addEventListener("click", function (evt) {
	evt.preventDefault();
	serviceThird.classList.add("our-service-item-current");
	serviceSecond.classList.remove("our-service-item-current");
	serviceFirst.classList.remove("our-service-item-current");
	serviceBtnThird.classList.add("btn-service-current");
	serviceBtnSecond.classList.remove("btn-service-current");
	serviceBtnFirst.classList.remove("btn-service-current");
	serviceDescThird.classList.add("service-show");
	serviceDescSecond.classList.remove("service-show");
	serviceDescFirst.classList.remove("service-show");
});

sliderBtnFirst.addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderFirst.classList.add("slider-show");
	sliderSecond.classList.remove("slider-show");
	sliderThird.classList.remove("slider-show");
	sliderBtnFirst.classList.add("btn-slider-active");
	sliderBtnSecond.classList.remove("btn-slider-active");
	sliderBtnThird.classList.remove("btn-slider-active");
});

sliderBtnSecond.addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderSecond.classList.add("slider-show");
	sliderFirst.classList.remove("slider-show");
	sliderThird.classList.remove("slider-show");
	sliderBtnSecond.classList.add("btn-slider-active");
	sliderBtnFirst.classList.remove("btn-slider-active");
	sliderBtnThird.classList.remove("btn-slider-active");
});

sliderBtnThird.addEventListener("click", function (evt) {
	evt.preventDefault();
	sliderThird.classList.add("slider-show");
	sliderFirst.classList.remove("slider-show");
	sliderSecond.classList.remove("slider-show");
	sliderBtnThird.classList.add("btn-slider-active");
	sliderBtnFirst.classList.remove("btn-slider-active");
	sliderBtnSecond.classList.remove("btn-slider-active");
});

linkWriteUs.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	login.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

linkMap.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show") || mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();
			popup.classList.remove("modal-show");
			mapPopup.classList.remove("modal-show");
		}
	}
});