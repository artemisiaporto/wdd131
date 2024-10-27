const steps = ["one", "two", "three"];

const listTemplate = function (step) {
    return `<li>${step}</li>`//the html string made from step
}

const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML

document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

const letters = ["A", "B", "A"];

const lettertogpaPoints = function (letter) {
    let points = 0;
    if (letter === "A") {
        points = 4;
    } else if (letter === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = letters.map(lettertogpaPoints);

const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal/gpaPoints.length;

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortWords = fruits.filter((fruit) => fruit.length < 6);

const numbers = [12, 34, 21, 54];
let luckyNumber = 21;

let luckyIndex = numbers.indexOf(luckyNumber);