var sliderFirst=document.querySelector(".slider-first"),sliderSecond=document.querySelector(".slider-second"),sliderThird=document.querySelector(".slider-third"),sliderBtnFirst=document.querySelector(".btn-slider-1"),sliderBtnSecond=document.querySelector(".btn-slider-2"),sliderBtnThird=document.querySelector(".btn-slider-3"),siderBtnControls=document.querySelector(".btn-slider-controls"),serviceFirst=document.querySelector(".service-item-first"),serviceSecond=document.querySelector(".service-item-second"),serviceThird=document.querySelector(".service-item-third"),serviceBtnFirst=document.querySelector(".btn-service-1"),serviceBtnSecond=document.querySelector(".btn-service-2"),serviceBtnThird=document.querySelector(".btn-service-3"),serviceDescFirst=document.querySelector(".service-description-item-first"),serviceDescSecond=document.querySelector(".service-description-item-second"),serviceDescThird=document.querySelector(".service-description-item-third"),linkWriteUs=document.querySelector(".btn-write-us"),popup=document.querySelector(".modal-write-us"),close=document.querySelector(".modal-close"),linkMap=document.querySelector(".contacts-map"),mapPopup=document.querySelector(".modal-map"),mapClose=document.querySelector(".modal-map-close"),form=document.querySelector(".form-modal"),login=document.querySelector("[name=name]"),email=document.querySelector("[name=email]"),formBtn=document.querySelector(".btn-submit");serviceBtnFirst.addEventListener("click",function(e){e.preventDefault(),serviceFirst.classList.add("our-service-item-current"),serviceSecond.classList.remove("our-service-item-current"),serviceThird.classList.remove("our-service-item-current"),serviceBtnFirst.classList.add("btn-service-current"),serviceBtnSecond.classList.remove("btn-service-current"),serviceBtnThird.classList.remove("btn-service-current"),serviceDescFirst.classList.add("service-show"),serviceDescSecond.classList.remove("service-show"),serviceDescThird.classList.remove("service-show")}),serviceBtnSecond.addEventListener("click",function(e){e.preventDefault(),serviceSecond.classList.add("our-service-item-current"),serviceFirst.classList.remove("our-service-item-current"),serviceThird.classList.remove("our-service-item-current"),serviceBtnSecond.classList.add("btn-service-current"),serviceBtnFirst.classList.remove("btn-service-current"),serviceBtnThird.classList.remove("btn-service-current"),serviceDescSecond.classList.add("service-show"),serviceDescFirst.classList.remove("service-show"),serviceDescThird.classList.remove("service-show")}),serviceBtnThird.addEventListener("click",function(e){e.preventDefault(),serviceThird.classList.add("our-service-item-current"),serviceSecond.classList.remove("our-service-item-current"),serviceFirst.classList.remove("our-service-item-current"),serviceBtnThird.classList.add("btn-service-current"),serviceBtnSecond.classList.remove("btn-service-current"),serviceBtnFirst.classList.remove("btn-service-current"),serviceDescThird.classList.add("service-show"),serviceDescSecond.classList.remove("service-show"),serviceDescFirst.classList.remove("service-show")}),sliderBtnFirst.addEventListener("click",function(e){e.preventDefault(),sliderFirst.classList.add("slider-show"),sliderSecond.classList.remove("slider-show"),sliderThird.classList.remove("slider-show"),sliderBtnFirst.classList.add("btn-slider-active"),sliderBtnSecond.classList.remove("btn-slider-active"),sliderBtnThird.classList.remove("btn-slider-active")}),sliderBtnSecond.addEventListener("click",function(e){e.preventDefault(),sliderSecond.classList.add("slider-show"),sliderFirst.classList.remove("slider-show"),sliderThird.classList.remove("slider-show"),sliderBtnSecond.classList.add("btn-slider-active"),sliderBtnFirst.classList.remove("btn-slider-active"),sliderBtnThird.classList.remove("btn-slider-active")}),sliderBtnThird.addEventListener("click",function(e){e.preventDefault(),sliderThird.classList.add("slider-show"),sliderFirst.classList.remove("slider-show"),sliderSecond.classList.remove("slider-show"),sliderBtnThird.classList.add("btn-slider-active"),sliderBtnFirst.classList.remove("btn-slider-active"),sliderBtnSecond.classList.remove("btn-slider-active")}),linkWriteUs.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),linkMap.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),form.addEventListener("submit",function(e){login.value&&email.value||(e.preventDefault(),popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(popup.classList.contains("modal-show")||mapPopup.classList.contains("modal-show"))&&(e.preventDefault(),popup.classList.remove("modal-show"),mapPopup.classList.remove("modal-show"))});