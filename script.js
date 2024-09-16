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
let wrapper = document.querySelector('#appWrapper');

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
// snowy theme
function snowyTheme() {
    header.style.backgroundColor = '#3153b1';
    footer.style.backgroundColor = '#3153b1';
    header.style.boxShadow = '#000000 -5px -5px 20px';
    footer.style.boxShadow = '#000000 5px 5px 20px';
    modeBtn.style.boxShadow = '#000000 0 0 20px';
    document.body.style.background = 'linear-gradient(321deg, #489FB5  2%, #EDE7E3  90%)';
    document.body.style.color = '#EDE7E3';
    document.body.style.textShadow = 'black 0 0 0px';
    anchor.forEach(element => {
        element.style.color = '#EDE7E3';
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
    backBtn.style.marginTop = '30px';
    outcome();
  }
}
// Main function responsible for the outcome
function outcome() {
    if (wheaterType === 'sunny') {
        if (degreeValue >= 45) {
            para.textContent = 
            `Brace yourself! It is ${degreeValue} degrees, and the heat is unbearable. The sun is relentless today, as if it wants to fry everything in its path. Sunscreen is mandatory, but do not expect miracles it might just evaporate on contact. Stay indoors unless you are auditioning for a role in a desert movie. Light, breathable clothing is your only salvation. Hydration is key today, or you might feel like a raisin by noon. Maybe skip the outdoor barbecue; you might end up as the main dish.`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent = 
            `Ah, the perfect sunny day at ${degreeValue} degrees. Warm, bright, and full of potential! It is a great day for the beach, a picnic, or even a hike, as long as you bring plenty of water. Sunglasses? Essential. Sunscreen? Absolutely. Light, flowy clothes are your best friends think airy cotton or linen. Maybe pack a hat, too, to protect yourself from the sun. Enjoy the weather, but be mindful of the UV index, unless you are going for the 'lobster' look.`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent = 
            `It is ${degreeValue} degrees and sunny, but do not let the sun fool you it is a little chilly out there! You might want to grab a light jacket or a sweater if you are planning on spending much time outdoors. This kind of day is perfect for a brisk walk or maybe sitting in the sun with a good book. While it is bright, the breeze could keep things cool, so layering is the way to go. Do not expect to tan, but at least you will not be sweating buckets.`;
        } else if (degreeValue < 5 && degreeValue >= -10) {
            para.textContent = 
            `It is ${degreeValue} degrees, sunny but deceptively cold. The sun is out, but do not be fooled it is more for decoration than warmth. You will need a coat, scarf, gloves, the whole deal. Sunglasses might still be necessary, but not because it is warm just to keep the glare off all the frozen ground. If you are feeling adventurous, go outside and soak up the cold sunshine, but otherwise, staying in and watching the world freeze through the window sounds like a good plan.`;
        } else if (degreeValue < -10) {
            para.textContent = 
            `It is a bone-chilling ${degreeValue} degrees, but at least the sun is shining... right? Honestly, you might not even feel the sun at this point. You will need all your warmest layers, a heavy coat, and probably a hot drink in each hand to survive this cold. If you are thinking of going outside, reconsider. The sun might be mocking you from behind those sunglasses, but the real battle is with the freezing air. Avoid outdoor activities unless you are filming a survival documentary.`;
        }
    } else if (wheaterType === 'cloudy') {
        if (degreeValue >= 45) {
            para.textContent = 
            `It is a sweltering ${degreeValue} degrees, but somehow the clouds have decided to join the party. It feels like the weather gods could not decide between “scorching” and “gloomy,” so you are stuck with both. You will not be escaping the heat, even with all that cloud cover. Stick to light, loose-fitting clothes and drink lots of water, because the clouds are not going to cool things down. And if you are feeling like the day is dragging on, it is probably because those clouds are stealing your sunshine joy.`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent = 
            `It is ${degreeValue} degrees with a cloudy sky, which means it is warm, but the sun is playing hide and seek behind the clouds. You will not need to worry about sunburn today, but the humidity might sneak up on you. Dress for warm weather, but maybe pack a light jacket in case the clouds decide to drop a surprise sprinkle of rain. It is the kind of day that calls for a walk, but do not forget your umbrella clouds are fickle.`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent = 
            `It is ${degreeValue} degrees, overcast, and a little chilly. It is one of those days where the clouds seem to press down on everything, making the world feel smaller and a bit gloomier. Perfect for a cozy sweater, some hot tea, and maybe a stroll through the park (if you are into that moody aesthetic). Expect the temperature to stay pretty cool, but at least it is not freezing yet. Watch out for a light drizzle, though clouds like to surprise.`;
        } else if (degreeValue < 5 && degreeValue >= -10) {
            para.textContent = 
            `It is ${degreeValue} degrees, cloudy and bitterly cold. The kind of day where you wonder if the sun even remembers how to shine. Bundle up in your warmest clothes this is not the time to skimp on layers. The clouds are not helping much, and without the sun, the cold will feel even sharper. Perfect day for staying indoors with a blanket and hot cocoa, or a brisk walk if you are feeling like a Nordic explorer.`;
        } else if (degreeValue < -10) {
            para.textContent = 
            `It is a miserable ${degreeValue} degrees, cloudy, and so cold that you might start to question all your life choices. The clouds have taken over, and it is not looking like the sun will come back any time soon. Every breath outside feels like you are inhaling icicles. This weather demands thermal everything. If you are planning on going outside, make sure you are dressed like you are visiting the Arctic, and keep moving standing still in this cold is not an option.`;
        }
    } else if (wheaterType === 'rainy') {
        if (degreeValue >= 45) {
            para.textContent = 
            `It is a blazing ${degreeValue} degrees, and it is raining. Yep, you read that right. It is like a tropical rainforest out there humid, sticky, and downright uncomfortable. A raincoat might protect you from getting drenched, but it will also turn you into a human sauna. Umbrellas? Sure, if you like carrying around portable greenhouses. The real advice? Stay indoors, blast the AC, and let the rain and heat have their weird argument outside.`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent = 
            `It is ${degreeValue} degrees, warm and rainy. A strange combination think tropical vacation minus the vacation part. You will want a raincoat, but make sure it is breathable. Nothing worse than sweating while getting rained on. The rain might bring a little relief, but it is still warm enough to be uncomfortable. Take a stroll if you love the smell of rain on hot pavement, but do not forget to bring an umbrella unless you are into the wet-dog look.`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent = 
            `It is ${degreeValue} degrees and rainy a classic "just stay home" day. The rain might make it feel colder than it actually is, so dress in layers and waterproof everything. You will need boots, a good raincoat, and maybe a hot drink to keep you warm. It is the kind of weather that makes you dream of fireplaces and fuzzy socks. If you do have to go out, keep your mood up, because this rain is not going anywhere fast.`;
        } else if (degreeValue < 5 && degreeValue >= -10) {
            para.textContent = 
            `It is ${degreeValue} degrees, rainy, and freezing cold. Congratulations, you have unlocked "miserable weather" mode. Rain in cold temperatures means sleet, and sleet means you will be slipping and sliding if you are not careful. Dress warmly, with lots of waterproof layers. Avoid puddles they are probably frozen over by now. Honestly, the best thing you can do today is stay inside, because no good can come from venturing out in this mess.`;
        } else if (degreeValue < -10) {
            para.textContent = 
            `It is ${degreeValue} degrees and hailing or sleeting. What are you even doing reading this? Get inside! This is not the time to brave the elements unless you want to find out what it feels like to be pelted by frozen marbles. If you must go outside, wear every waterproof item you own, and maybe bring a shield. Better yet, reschedule your day for when the weather is not actively trying to hurt you.`;
        }
    } else if (wheaterType === 'windy') {
        if (degreeValue >= 45) {
            para.textContent = 
            `It is ${degreeValue} degrees, scorching hot, and windy. Picture walking into a giant hairdryer. The wind is not refreshing it is just hot air in your face. There is no escaping the heat, even if the wind tries to whisk you away. Dress light, stay hydrated, and maybe avoid loose items hats, umbrellas, and dignity are all at risk of flying away.`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent = 
            `It is ${degreeValue} degrees, warm and windy. It is the kind of wind that makes everything feel a little more dramatic. Maybe you should practice your "windswept" look while you are at it. Wear comfortable clothes, but make sure they are not too loose you do not want to be that person whose shirt turns into a parachute. Watch out for sudden gusts that might knock over your beach umbrella!`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent = 
            `It is ${degreeValue} degrees, breezy, and a little cold. You will definitely feel the chill when the wind hits, so grab a jacket before heading out. It is not the worst weather, but the wind might make things feel colder than they are. It is a good day for flying kites if you are into that but be prepared to chase after them. Wind is sneaky, and it loves to steal hats, papers, and anything else not nailed down.`;
        } else if (degreeValue < 5 && degreeValue >= -10) {
            para.textContent = 
            `It is ${degreeValue} degrees, cold and windy. The wind will cut through your layers like a knife, so wear as many as you can. It is not the best day for outdoor activities unless you are dressed for an arctic expedition. Hold onto your hat literally or it will be halfway across town before you even realize it is gone. This is the kind of weather that makes you question why you did not stay home.`;
        } else if (degreeValue < -10) {
            para.textContent = 
            `It is ${degreeValue} degrees, windy, and downright freezing. The wind is so cold it feels like it is coming straight from the North Pole. Dress warmly no, dress like you are about to trek across Siberia. Anything less, and you will regret it. If you are going outside, prepare for windburn, numb fingers, and the strong desire to turn around and go back inside immediately. Not a great day to fly a kite unless you want it to fly away forever.`;
        }
    } else if (wheaterType === 'snowy') {
        if (degreeValue >= 45) {
            para.textContent = 
            `It is ${degreeValue} degrees, and you are asking about snow? No chance of that happening today. In fact, you would have a better chance of seeing an ice cube survive for more than 5 minutes in this heat. Break out the summer clothes, because snow is only a dream right now. Maybe imagine you are in a snow globe... just do not expect any actual snowflakes.`;
        } else if (degreeValue >= 25 && degreeValue < 45) {
            para.textContent = 
            `It is ${degreeValue} degrees, hot, and not a snowflake in sight. You can leave the winter boots and snow gear packed away today is all about staying cool. If you were hoping for a snowy winter wonderland, you will have to wait for another day. For now, enjoy the warm weather, but maybe cool down with a snow cone if you are really missing the snow!`;
        } else if (degreeValue < 25 && degreeValue >= 5) {
            para.textContent = 
            `It is ${degreeValue} degrees, and snow could be on the way. The air feels cold enough, and the sky looks heavy with the promise of snowflakes. If you are a snow lover, today might be your day! Keep your winter jacket handy, and get ready to watch the world turn into a winter wonderland. Just be careful the roads might get slippery, so drive cautiously if you are heading out.`;
        } else if (degreeValue < 5 && degreeValue >= -10) {
            para.textContent = 
            `It is ${degreeValue} degrees, cold, and snowing! Winter has officially arrived, and the world outside looks like a holiday card. Bundle up in your warmest coat, and do not forget the gloves and scarf. The snow is beautiful, but it is also cold, so keep moving to stay warm. Perfect weather for snowball fights or building a snowman, but maybe skip the long walks unless you are wearing boots.`;
        } else if (degreeValue < -10) {
            para.textContent = 
            `It is ${degreeValue} degrees, and the snow is coming down in sheets. The world is frozen, and so are you if you do not dress properly. Layers are your best friend today thermal everything, heavy coat, gloves, scarf, hat, maybe even a face mask to keep the wind from biting your cheeks. The snow might look pretty, but do not let it fool you it is freezing out there! Unless you are prepared to be an ice sculpture, limit your time outside.`;
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
  backBtn.style.marginTop = '';
  defaultTheme();
}
// dark mode
let modeBtn = document.querySelector("#darkModeBtn");
modeBtn.value = 'light';
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
