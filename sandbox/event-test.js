const buttonElement = document.getElementById("submitButton");

function copyInput(event) {
    // take a look at the event!
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
}

buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");
document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(e);
}