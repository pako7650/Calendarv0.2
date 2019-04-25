// Helpers
// const newMoment = moment();
const range = (value) => Array.from({length: value}, (v, k) => k + 1);
const getElementsByClass = className => document.getElementsByClassName(className);//getting elements by className
const getElementsById = id => document.getElementById(id);

// if slicedDays === 1 return [];
const createArrayFill = length => slicedDays => Array(length)
    .fill().map((value, index) => index + 1)
    .slice(slicedDays);
//Globals
let counter = 0;

//Elements
const arrows = [...getElementsByClass('arrowsSpan')];

//Events


for (let arrow of arrows) {/* loop trough arrows variable to get both of them */

    arrow.addEventListener('click', counterChange);/* while looping attach an event listener on each one, plus calling
    the clicker function*/
}
function momentSetter (tool, period) {
    return moment().add(tool, period);
}

function counterChange(event) {

    event.target.id === 'leftArrow' ? --counter : ++counter;
    // console.log(event.target.id);

    const getPreviousMonth = range(momentSetter(counter -1, 'month').daysInMonth());
    // console.log(getPreviousMonth);

    const getCurrentMonthLength = range(momentSetter(counter, 'month').daysInMonth());
    // console.log(getCurrentMonthLength);

    const getMonthStart =  momentSetter(counter, 'month').startOf('month').isoWeekday();
    const getMonthEnd =  momentSetter(counter, 'month').endOf('month').isoWeekday();
    console.log(getMonthStart);

    let prevDaysCount = getMonthStart === 1 ? false : 1 - getMonthStart;
    let nextDaysCount = getMonthEnd === 7 ? false : 7 - getMonthEnd;
    // console.log(getMonthEnd);
    console.log(getMonthEnd);
    console.log(prevDaysCount, nextDaysCount);

    console.log(createArrayFill(momentSetter(counter - 1 , 'month').daysInMonth())(1 - getMonthStart));
    // console.log(counter);

}

// 1 -> не ни трябват дни;
// 7 -> 6 дни;









