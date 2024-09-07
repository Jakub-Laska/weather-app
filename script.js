const selector = document.querySelector('select');
const degrees = document.querySelector('input');
const para = document.querySelector('p');
let body = document.querySelector('body');
const btn = document.querySelector('button');
let choice;
let degreeValue;

selector.addEventListener('change', howMany);

function howMany(event) {
    choice = selector.value;

    if (typeof choice === 'string') {
    selector.style.display = 'none';
    degrees.style.display = 'inline-block';
    btn.style.display = 'inline-block';
} else {
    console.log('whoops');
}
}

btn.addEventListener('click', getDegrees);

function getDegrees() {
    degrees.style.display = 'none';
    btn.style.display = 'none';
    degreeValue = degrees.value;
    console.log(degreeValue);
    outcome();
}

function outcome() {
    if (choice === 'sun' && degreeValue >= 25) {
        para.textContent = 'it is nice and sunny';
        console.log('hothot');
    } else if (choice === 'sun' && degreeValue <= 25) {
        para.textContent = 'it is sunny but not that hot';
    } else if (choice === 'sun' && degreeValue >= 50) {
        para.textContent = 'it is boiling hot';
    }
}