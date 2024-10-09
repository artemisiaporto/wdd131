const DAYS = 6;
//Next days of the week
const output = document.getElementsByTagName("ul");
const options = { weekday: 'long'};

const today = new Date();
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is ${todaystring}.`;

for (let i = 1; i <= DAYS; i++) {
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate() + i);
    let tomorrowstring = new  Intl.DateTimeFormat('en-US', options).format(tomorrow);
    listItem = document.createElement("li");
    listItem.textContent = tomorrowstring;
    output[0].appendChild(listItem);
}