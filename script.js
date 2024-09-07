const selector = document.querySelector('select');
const degrees = document.querySelector('input');
const para = document.querySelector('p');
let body = document.querySelector('body');


selector.addEventListener('change', howMany);


function howMany(event) {
    let choice = selector.value;

    if (typeof choice === 'string') {
    selector.style.display = 'none';
    degrees.style.display = 'inline-block';
    degrees.addEventListener('keydown getDegreeValue();
} else {
    console.log('whoops');
}
}

function getDegreeValue() {
    let degreeChoice = degrees.valueAsNumber;


}
