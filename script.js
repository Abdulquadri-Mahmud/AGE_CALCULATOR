const form = document.querySelector('form');
const display_error = document.querySelector('.display_error')
const final_result = document.querySelector('.final-result');

const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const day_result = document.querySelector('.day_result');
const month_result = document.querySelector('.month_result');
const year_result = document.querySelector('.year_result');
const submitBtn = document.querySelector('.submitBtn')

let date = new Date();
let getDay = date.getDate();
let getMonth = date.getMonth();
let getYear = date.getFullYear();

//Writing and creating a Function for day,month, and year.
const daysInput = ()=> {
     let getYearsUsed = getYear - year.value;
     let daysUsed = getYearsUsed * 365;
     day_result.innerText = daysUsed;
}
const monthsInput = () => {
     let getYearsUsed = getYear - year.value;
     let monthsUsed = getYearsUsed * 12;
     month_result.innerText = monthsUsed;
}
const yearsInput = () => {
     let yearsUsed = getYear - year.value;
     year_result.innerText = yearsUsed;
}
const getLifeUsed = () => {
     let yearsUsed = getYear - year.value;

     let getYearsUsed = getYear - year.value;

     let monthsUsed = getYearsUsed * 12;

     let daysUsed = getYearsUsed * 365;

     let lifeUsed =  `Hello User! By this time on ${day.value}th of ${month.value}, ${getYear} you would have used ${daysUsed} days ${monthsUsed}  months and ${yearsUsed} years on earth`
     final_result.innerText = lifeUsed
}
submitBtn.addEventListener('click', (event) => {
     event.preventDefault()
     daysInput();
     monthsInput();
     yearsInput();
     getLifeUsed()
})