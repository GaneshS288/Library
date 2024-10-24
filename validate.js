const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pageCount = document.querySelector("#pageCount");

title.addEventListener("input", showError);
author.addEventListener("input", (e) => {
  if (e.key === "Backspace") {
    console.log(e.key);
  }
  showError(e);
});
pageCount.addEventListener("input", showError);

export function isValid(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
  } else return true;
}

function showError(event) {
  const element = event.target;

  if (element.validity.valueMissing) {
    title.setCustomValidity(
      `this field cannot be empty please type a ${element.name}`
    );
    title.reportValidity();
  } else if (element.validity.rangeUnderflow) {
    pageCount.setCustomValidity("the book must have more than 10 pages");
    pageCount.reportValidity();
  } else element.setCustomValidity("");
}
