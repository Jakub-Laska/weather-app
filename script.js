const selector = document.querySelector('select');
const degrees = document.querySelector('input');
const para = document.querySelector('p');
let body = document.querySelector('body');
const btn = document.querySelector('button');


selector.addEventListener('change', howMany);

function howMany(event) {
    let choice = selector.value;

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
    let degreeValue = degrees.value;
    console.log(degreeValue);
}