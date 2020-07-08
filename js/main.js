"use strict";

const dataBase = [];

const modalAdd = document.querySelector(".modal__add"),
  addAd = document.querySelector(".add__ad"),
  modalBtnSubmit = document.querySelector(".modal__btn-submit"),
  modalSubmit = document.querySelector(".modal__submit"),
  catalog = document.querySelector(".catalog"),
  modalItem = document.querySelector(".modal__item"),
  modalBtnWarning = document.querySelector(".modal__btn-warning");

const elementsModalSubmit = [...modalSubmit.elements].filter(
  (elem) => elem.tagName !== "BUTTON" && elem.type !== "submit"
);
// console.log(elementsModalSubmit);
elementsModalSubmit.forEach(console.dir);

const closeModal = function (event) {
  const target = event.target;
  if (target.classList.contains("modal__close") || target === this) {
    this.classList.add("hide");
    // modalItem.classList.add("hide");
    modalSubmit.reset();
  }
};
const closeModalEsc = (event) => {
  if (event.code === "Escape") {
    modalAdd.classList.add("hide");
    modalItem.classList.add("hide");
    document.removeEventListener("keydown", closeModalEsc);
  }
};

modalSubmit.addEventListener("input", () => {
  const validForm = elementsModalSubmit.every((elem) => elem.value);
  console.log(validForm);
  modalBtnSubmit.disabled = !validForm;
  modalBtnWarning.style.display = validForm ? "none" : "";
});

modalSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const itemObj = {};
  for (const elem of elementsModalSubmit) {
    itemObj[elem.name] = elem.value;
  }
  dataBase.push(itemObj);
  // console.log(dataBase);
});

addAd.addEventListener("click", () => {
  modalAdd.classList.remove("hide");
  modalBtnSubmit.disabled = true;
  document.addEventListener("keydown", closeModalEsc);
});
modalAdd.addEventListener("click", closeModal);
modalItem.addEventListener("click", closeModal);

catalog.addEventListener("click", () => {
  const target = event.target;
  if (target.closest(".card")) {
    modalItem.classList.remove("hide");
    document.addEventListener("keydown", closeModalEsc);
  }
});
