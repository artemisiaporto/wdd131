/*
let firstName = 'Antonia';
let lastName = 'Francesca';
//function declaration/definition//
function fullName (first, last) {
    return `${first} ${last}`;
}
//function expression//
/*
const fullName = function (first, last) {
    return `${first} ${last}`;
}
*/
//arrow function expression//
/*
const fullName = (first, last) => `${first} ${last}`;

const name = document.querySelector("#fullName").innerHTML = fullName(first, last);
*/
let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}