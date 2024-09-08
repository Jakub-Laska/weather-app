const selector = document.querySelector('select');
const degrees = document.querySelector('input');
const para = document.querySelector('p');
let body = document.querySelector('body');
const btn = document.querySelector('button');
const backBtn = document.querySelector('#goBack');
let choice;
let degreeValue;

selector.addEventListener('change', showInput);

function showInput() {
    choice = selector.value;

    if (typeof choice === 'string') {
    selector.style.display = 'none';
    degrees.style.display = 'inline-block';
    btn.style.display = 'inline-block';
    backBtn.style.display = 'inline-block';
} else {
    console.log('whoops');
}
}
// Function responsible for submition, getting the value of the input and launching main function
btn.addEventListener('click', getDegrees);

function getDegrees() {
    degrees.style.display = 'none';
    btn.style.display = 'none';
    backBtn.style.display = 'inline-block';
    degreeValue = degrees.value;
    console.log(degreeValue);

    if (degreeValue == '') {
    para.textContent =
    'You have to input the degree value'
    return;
    } else {
    outcome();
    }
}
// Main function responsible for the outcome
function outcome() {
    if (choice === 'sun') {
        if (degreeValue >= 45) {
            para.textContent =
            `extremely hot weather it is ${degreeValue} degrees, lots of sun today`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent =
            `It is ${degreeValue} degrees, nice and sunny today`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent =
            `it is ${degreeValue} degrees, sunny but it could be a little cold today`;
        } else if (degreeValue < 5 && degreeValue >= -10){
            para.textContent =
            `is is ${degreeValue} degrees, sunny but it is really cold`;
        } else if (degreeValue < -10) {
            para.textContent =
            `extremely cold weather ${degreeValue} degrees, but at least it is sunny today`;
        }
    // if it is cloudy
    } else if (choice === 'cloud') {
        if (degreeValue >= 45) {
            para.textContent =
            `extremely hot weather it is ${degreeValue} degrees, lots of clouds today`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent =
            `It is ${degreeValue} degrees, hot but cloudy today`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent =
            `it is ${degreeValue} degrees, cloudy and it could be a little cold today`;
        } else if (degreeValue < 5 && degreeValue >= -10){
            para.textContent =
            `is is ${degreeValue} degrees, cloudy and really cold`;
        } else if (degreeValue < -10) {
            para.textContent =
            `extremely cold weather ${degreeValue} degrees, with lots of clouds`;
        }
    // if it is rainy
    } else if (choice === 'rain') {
        if (degreeValue >= 45) {
            para.textContent =
            `extremely hot weather it is ${degreeValue} degrees, lots of rain in some parts of the today`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent =
            `It is ${degreeValue} degrees, hot but rainy today`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent =
            `it is ${degreeValue} degrees, rainy and it could be a little cold today`;
        } else if (degreeValue < 5 && degreeValue >= -10){
            para.textContent =
            `is is ${degreeValue} degrees, rainy with a high probability of sleet and it is really cold today`;
        } else if (degreeValue < -10) {
            para.textContent =
            `extremely cold weather ${degreeValue} degrees, with lots of hail or sleet`;
        }
    // if it is windy
    } else if (choice === 'wind') {
        if (degreeValue >= 45) {
            para.textContent =
            `extremely hot weather it is ${degreeValue} degrees, lots of wind of the today`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent =
            `It is ${degreeValue} degrees, hot but windy today`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent =
            `it is ${degreeValue} degrees, windy and it could be a little cold today`;
        } else if (degreeValue < 5 && degreeValue >= -10){
            para.textContent =
            `is is ${degreeValue} degrees, windy and it is really cold today`;
        } else if (degreeValue < -10) {
            para.textContent =
            `extremely cold weather ${degreeValue} degrees, with lots of wind`;
        }
    // if it is snowy
    } else if (choice === 'snow') {
        if (degreeValue >= 45) {
            para.textContent =
            `extremely hot weather it is ${degreeValue} degrees, no chance of snow today`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent =
            `It is ${degreeValue} degrees, hot and no chance of snow today`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent =
            `it is ${degreeValue} degrees, it could snow today`;
        } else if (degreeValue < 5 && degreeValue >= -10){
            para.textContent =
            `is is ${degreeValue} degrees, snowy and it is really cold today`;
        } else if (degreeValue < -10) {
            para.textContent =
            `extremely cold weather ${degreeValue} degrees, with lots of snowing`;
        }
    } 
}

// refresh button
backBtn.addEventListener('click', refresh);

function refresh() {
    location.reload(true);
}
