const degrees = document.querySelector("input");
const para = document.querySelector("#message");
const btn = document.querySelector("#submitBtn");
const backBtn = document.querySelector("#goBack");
let paraError = document.querySelector("#error");

// menu dropdown toggle
let menu = document.getElementById("selection");
let menuOptions = document.querySelectorAll(".option");
let menuValue = 1;
let optionsBackground = document.querySelector('.options')

menu.addEventListener("click", dropDown);

function dropDown() {
  menuOptions.forEach(toggleOptions);
  menuValue = menuValue === 1 ? 0 : 1;
  menuOptions.forEach(addlistener);
}
function toggleOptions(option) {
  if (menuValue === 1) {
    option.style.display = "inline-block";
  optionsBackground.style.width = '300px';
  } else {
    option.style.display = "none";
  optionsBackground.style.width = '';
  }
}
function addlistener(option) {
  option.addEventListener("click", showInput);
}
// input toggle
function showInput() {
  menuOptions.forEach(hideOptions);
  degrees.style.display = "inline-block";
  menu.style.display = "none";
  btn.style.display = "inline-block";
  backBtn.style.display = "inline-block";
  optionsBackground.style.width = '';
}
function hideOptions(option) {
  option.style.display = "none";
}
// get wheaterType functions
let wheaterType;

let sun = document.querySelector(".optionA");
sun.addEventListener("click", sunny);

function sunny() {
    wheaterType = 'sunny';
    sunnyTheme();
}

let cloud = document.querySelector(".optionB");
cloud.addEventListener("click", cloudy);

function cloudy() {
    wheaterType = 'cloudy';
    cloudyTheme();
}

let rain = document.querySelector(".optionC");
rain.addEventListener("click", rainy);

function rainy() {
    wheaterType = 'rainy';
    rainyTheme();
}

let wind = document.querySelector(".optionD");
wind.addEventListener("click", windy);

function windy() {
    wheaterType = 'windy';
    windyTheme();
}

let snow = document.querySelector(".optionE");
snow.addEventListener("click", snowy);

function snowy() {
    wheaterType = 'snowy';
    snowyTheme();
}
// weather themes
let header = document.querySelector('.header');
let footer = document.querySelector('.footer');
let anchor = document.querySelectorAll('a');
let wrapper = document.querySelector('#wrapper');

//default theme
function defaultTheme() {
    header.style.backgroundColor = '#000000';
    footer.style.backgroundColor = '#000000';
    document.body.style.background = '';
    document.body.style.color = '#A7C7E7';
    document.body.style.textShadow = 'black 0 0 4px';
    anchor.forEach(element => {
        element.style.color = '#A7C7E7';
    });
}
// sunny theme
function sunnyTheme() {
    modeBtn.style.boxShadow = '#000000 0 0 20px';
    header.style.backgroundColor = '#FFC53A';
    header.style.boxShadow = '#000000 -5px -5px 20px';
    footer.style.boxShadow = '#000000 5px 5px 20px';
    footer.style.backgroundColor = '#FFC53A';
    document.body.style.background = 'linear-gradient(321deg, #E06D06  2%, #FAFF81  100%)';
    document.body.style.color = '#000000';
    document.body.style.textShadow = 'none';
    anchor.forEach(element => {
        element.style.color = '#000000';
    });
}
//cloudy theme
function cloudyTheme() {
    header.style.backgroundColor = '#474056';
    footer.style.backgroundColor = '#474056';
    header.style.boxShadow = '#000000 -5px -5px 20px';
    footer.style.boxShadow = '#000000 5px 5px 20px';
    modeBtn.style.boxShadow = '#000000 0 0 20px';
    document.body.style.background = 'linear-gradient(321deg, #474056  2%, #8A95A5  100%)';
    document.body.style.color = '#000000';
    document.body.style.textShadow = 'black 0 0 0px';
    anchor.forEach(element => {
        element.style.color = '#000000';
    });
}
// rainy theme
function rainyTheme() {
    header.style.backgroundColor = '#0e3133';
    footer.style.backgroundColor = '#0e3133';
    header.style.boxShadow = '#000000 -5px -5px 20px';
    footer.style.boxShadow = '#000000 5px 5px 20px';
    modeBtn.style.boxShadow = '#000000 0 0 20px';
    document.body.style.background = 'linear-gradient(321deg, #F0F3BD  2%, #1A5E63  90%)';
    document.body.style.color = '#A7C7E7';
    document.body.style.textShadow = 'black 0 0 0px';
    anchor.forEach(element => {
        element.style.color = '#A7C7E7';
    });
}
// windy theme
function windyTheme() {
    header.style.backgroundColor = '#BDD5EA';
    footer.style.backgroundColor = '#BDD5EA';
    header.style.boxShadow = '#000000 -5px -5px 20px';
    footer.style.boxShadow = '#000000 5px 5px 20px';
    modeBtn.style.boxShadow = '#000000 0 0 20px';
    document.body.style.background = 'linear-gradient(321deg, #BDD5EA  2%, #F7F7FF  90%)';
    document.body.style.color = '#577399';
    document.body.style.textShadow = 'black 0 0 0px';
    anchor.forEach(element => {
        element.style.color = '#577399';
    });
}
// Function responsible for submition, getting the value of the input and launching main function
btn.addEventListener("click", getDegrees);
let degreeValue;

function getDegrees() {
  degrees.style.display = "none";
  btn.style.display = "none";
  degreeValue = degrees.value;
    paraError.textContent = '';

  if (degreeValue == "") {
    paraError.textContent = "* You have to input the degree value *";
    degrees.style.display = "inline-block";
    btn.style.display = "inline-block";
    return;
  } else {
    degrees.style.display = "none";
    backBtn.style.marginLeft = '60px';
    outcome();
  }
}
// Main function responsible for the outcome
function outcome() {
    if (wheaterType === 'sunny') {
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
    } else if (wheaterType === 'cloudy') {
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
    } else if (wheaterType === 'rainy') {
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
    } else if (wheaterType === 'windy') {
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
    } else if (wheaterType === 'snowy') {
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
backBtn.addEventListener("click", refresh);

function refresh() {
  menu.style.display = "inline-block";
  degrees.style.display = "none";
  btn.style.display = "none";
  backBtn.style.display = "none";
  paraError.textContent = "";
  menuValue = 1;
  para.textContent = "";
  degrees.value = '';
  optionsBackground.style.width = '';
  backBtn.style.marginLeft = '';
  defaultTheme();
}
// dark mode
let modeBtn = document.querySelector("#darkMode");

modeBtn.addEventListener("click", modeSwitch);

function modeSwitch() {
  let whole = document.body;
  let html = document.documentElement;
  let icon = document.querySelector("#moonIcon");
  let options = document.querySelectorAll(".options");
  let whichMode = modeBtn.value;

  if (whichMode === "light") {
    whole.style.filter = "brightness(0.85)";
    html.style.filter = "brightness(0.85)";
    modeBtn.value = `dark`;
    icon.src = "sun.png";
  } else {
    whole.style.filter = "brightness(1)";
    html.style.filter = "brightness(1)";
    modeBtn.value = `light`;
    icon.src = "moon.png";
  }
}
