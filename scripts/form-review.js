let reviews = document.querySelector("#reviewsNum");

let reviewNum = Number(window.localStorage.getItem("reviewsN-ls"));

if (reviewNum !== 0) {
    reviews.textContent = reviewNum;
} else {
    reviews.textContent = "Welcome! Thank you for your first review!";
}

reviewNum++;

localStorage.setItem("reviewsN-ls", reviewNum);