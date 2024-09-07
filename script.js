const selector = document.querySelector('select');
const degrees = document.querySelector('input');
const para = document.querySelector('p');
let body = document.querySelector('body');

selector.addEventListener('change', howMany);


function howMany() {
    let choice = selector.value;

    if (choice !== '') {
    selector.style.display = 'none';
    degrees.style.display = 'inline-block';
    submit.style.display = 'inline-block';
} else {
    console.log('whoops');
}
}




degrees.addEventListener('submit', weather);

function weather() {
    body.style.backgroundColor = 'red';
}