"use strict";

const modalAdd = document.querySelector(".modal__add"),
  addAd = document.querySelector(".add__ad"),
  modalBtnSubmit = document.querySelector(".modal__btn-submit"),
  modalSubmit = document.querySelector(".modal__submit");

addAd.addEventListener("click", () => {
  modalAdd.classList.remove("hide");
});

modalAdd.addEventListener("click", () => {
  const target = event.target;
  if (target.classList.contains("modal__close") || target === modalAdd) {
    modalAdd.classList.add("hide");
    modalSubmit.reset();
  }
});
