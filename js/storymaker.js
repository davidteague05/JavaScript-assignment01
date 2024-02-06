// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
var chosenNoun1 = document.querySelector("#choosenNoun1");
var chosenVerb = document.querySelector("#choosenVerb");
var chosenAdjective = document.querySelector("#choosenAdjective");
var chosenNoun2 = document.querySelector("#choosenNoun2");
var chosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
var story = document.querySelector("#story");

// Variables for pre-defined arrays
var nouns = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];
// Variables for count to grab array elements
var noun1count = 0;
var verbcount = 0;
var adjcount = 0;
var noun2count = 0;
var settingcount = 0;

/* Functions
-------------------------------------------------- */
var x = nouns[noun1count];
function noun1_on_click() {
    // variable to get array element and displaying it
    x = nouns[noun1count];
    chosenNoun1.textContent = x + " ";
    // if-else to change count setting
    if (noun1count == 6) {
        noun1count = 0;
    }else{
        noun1count++;
    }
    console.log(x);
    console.log(noun1count);
}

var y = verbs[verbcount];
function verb_on_click() {
    // variable to get array element and displaying it
    y = verbs[verbcount];
    chosenVerb.innerHTML = y + " ";
    // if-else to change count setting
    if (verbcount == 5) {
        verbcount = 0;
    }else{
        verbcount++;
    }
}

var z = adjectives[adjcount];
function adjective_on_click() {
    // variable to get array element and displaying it
    z = adjectives[adjcount];
    chosenAdjective.innerHTML = z + " ";
    // if-else to change count setting
    if (adjcount == 6) {
        adjcount = 0;
    }else{
        adjcount++;
    }
}

var w = nouns2[noun2count];
function noun2_on_click() {
    // variable to get array element and displaying it
    w = nouns2[noun2count];
    chosenNoun2.innerHTML = w + " ";
    // if-else to change count setting
    if (noun2count == 6) {
        noun2count = 0;
    }else{
        noun2count++;
    }
}

var s = settings[settingcount];
function setting_on_click() {
    // variable to get array element and displaying it
    s = settings[settingcount];
    chosenSetting.innerHTML = s + " ";
    // if-else to change count setting
    if (settingcount == 6) {
        settingcount = 0;
    }else{
        settingcount++;
    }
}

// concatenate the user story and display
function playback_on_click() {
    var storyfull = x + " " + y + " " + z + " " + w + " " +s;
    story.textContent = storyfull;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    var xr = nouns[Math.floor(Math.random() * nouns.length)];
    var yr = verbs[Math.floor(Math.random() *verbs.length)];
    var zr = adjectives[Math.floor(Math.random() * adjectives.length)];
    var wr = nouns2[Math.floor(Math.random() * nouns2.length)];
    var sr = settings[Math.floor(Math.random() * settings.length)];

    var randomStory = xr + " " + yr + " " + zr + " " + wr + " " + sr;
    story.textContent = randomStory;
}

/* Event Listeners
-------------------------------------------------- */
random.addEventListener("click", random_on_click);
playback.addEventListener("click", playback_on_click);
noun1.addEventListener("click", noun1_on_click);
noun2.addEventListener("click", noun2_on_click);
adjective.addEventListener("click", adjective_on_click);
verb.addEventListener("click", verb_on_click);
setting.addEventListener("click", setting_on_click);