//Task 0

const counterValue = document.querySelector("#value");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");

incrementButton.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
});

decrementButton.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
});

//Task 1

const backdrop = document.querySelector(".backdrop");
const modalCloseBtnEl = document.querySelector("[data-close]");
const modalBtnEl = document.querySelector(".modal-button");

modalBtnEl.addEventListener("click", () => {
  backdrop.classList.add("show-modal");
});

modalCloseBtnEl.addEventListener("click", () => {
  backdrop.classList.remove("show-modal");
});

//Task 2

backdrop.addEventListener("click", () => {
    backdrop.classList.remove("show-modal");
});

//Task 3

const whiteBackground = document.querySelector(`[value="white"]`);
const greyBackground = document.querySelector(`[value="grey"]`);
const blackBackground = document.querySelector(`[value="black"]`);
const bodyEl = document.querySelector("body");

whiteBackground.addEventListener("change", () => {
    bodyEl.style = `background-color: white`;
});

greyBackground.addEventListener("change", () => {
    bodyEl.style = `background-color: grey`;
});

blackBackground.addEventListener("change", () => {
    bodyEl.style = `background-color: black`;
});

//Task 4

const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", () => {
    if(nameInputEl.value.length !== 0){
        nameOutputEl.textContent = nameInputEl.value;
    }
    else nameOutputEl.textContent = "незнайомець";
});

const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("change", () => {
    if(validationInput.value.length === validationInput.dataset.length){
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    }
    else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
});

//Task 5

const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", () => {
    textEl.style.fontSize = `${fontSizeControlEl.value}px`;
});
