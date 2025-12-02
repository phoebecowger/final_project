
let defaultEyes;

let defaultNose;

let defaultMouth;

let defaultHead;

/////////////////////////////////////////////////////////////////////////////////

let isDefaultEyesVisible = true;
let isEyes2Visible = false;

let isNose1Visible = false;
let isNose2Visible = false;

let isMouth1Visible = false;
let isMouth2Visible = false;

let isDefaultHeadVisible = true;
let isHead2Visible = false;

let isDefaultBodyVisible = true;
let isDefaultArmsVisible = true;

//////////////////////////////////////////////////////////////////////////////////

let eyesCategorySelected = false;
let noseCategorySelected = false;
let mouthCategorySelected = false;
let headCategorySelected = false;


// these variables store the div that holds each category's items 
// is NOT the category button, but the all the items inside that category
// MUST be a global variable so all functions can access it
const eyeCategory = document.getElementsByClassName('eyes-category')[0];
const noseCategory = document.getElementsByClassName('nose-category')[0];
const mouthCategory = document.getElementsByClassName('mouth-category')[0];
const headCategory = document.getElementsByClassName('head-category')[0];

///////////////////////////////////////////////////////////////////////////////////////

function preload() {
    defaultEyes = loadImage('images/eyes/default_eyes.png');
    eyes2 = loadImage('images/eyes/eyes_2.png');

    nose1 = loadImage('images/nose/nose_1.png');
    nose2 = loadImage('images/nose/nose_2.png');

    mouth1 = loadImage('images/mouth/mouth_1.png');
    mouth2 = loadImage('images/mouth/mouth_2.png');

    defaultHead = loadImage('images/head/default_head.png');
    head2 = loadImage('images/head/head_2.png');
}

///////////////////////////////////////////////////////////////////////////////////////

function setup() {
    createCanvas(450,500);

    //for the category buttons
    document.getElementById("eyes-button").addEventListener("click", showEyesCategory);
    document.getElementById("nose-button").addEventListener("click", showNoseCategory);
    document.getElementById("mouth-button").addEventListener("click", showMouthCategory);
    document.getElementById("head-button").addEventListener("click", showHeadCategory);

    eyeCategory.style.display = 'block';
    noseCategory.style.display = 'none';
    mouthCategory.style.display = 'none';
    headCategory.style.display = 'block';   

    // get id's from HTML, wait for it to be clicked, when clicked, calls function, store in a variable(button of a sort)
    // each button will call a different function that shows a different image
    document.getElementById('default-eyes').addEventListener('click', showDefaultEyes);
    document.getElementById('eyes-2').addEventListener('click', showEyes2);

    document.getElementById('nose-1').addEventListener('click', showNose1);
    document.getElementById('nose-2').addEventListener('click', showNose2);

    document.getElementById('mouth-1').addEventListener('click', showMouth1);
    document.getElementById('mouth-2').addEventListener('click', showMouth2);

    document.getElementById('default-head').addEventListener('click', showDefaultHead);
    document.getElementById('head-2').addEventListener('click', showHead2);
}

////////////////////////////////////////////////////////////////////////////////////////
// CATEGORY DISPLAY

function showHideCategories() {
    if (eyesCategorySelected) {
        eyeCategory.style.display = 'block';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none';
    } else if (noseCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'block';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none';  
    } else if (mouthCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'block';
        headCategory.style.display = 'none';  
    } else if (headCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'block';   
    } else {
        eyeCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none'; 
    }
}

// THESE FUNCTIONS SAY YES: THIS CATEGORY IS SELECTED, OTHERS ARE NOT
// THEN SENDS THE INFO TO showHideCategories FUNCTION TO UPDATE DISPLAY
function showEyesCategory() {
    eyesCategorySelected = true;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = false;
    showHideCategories();
}

function showNoseCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = true;
    mouthCategorySelected = false;
    headCategorySelected = false;
    showHideCategories();
}

function showMouthCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = true;
    headCategorySelected = false;
    showHideCategories();
}

function showHeadCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = true;
    showHideCategories();
}

///////////////////////////////////////////////////////////////////////////////////////

function draw() {
    background(220);
    //order of layers: top to bottom in code = bottom to top in display

    ///HEAD CHOICE DISPLAY///
    if (isDefaultHeadVisible) {
        image(defaultHead, 0, 0, 450, 500);
    }
    else if (isHead2Visible) {
        image(head2, 0, 0, 450, 500);
    }

    ///MOUTH CHOICE DISPLAY///
    if (isMouth1Visible) {
        image(mouth1, 0, 0, 450, 500);
    }
    else if (isMouth2Visible) {
        image(mouth2, 0, 0, 450, 500);
    }

    ///NOSE CHOICE DISPLAY///
    if (isNose1Visible) {
        image(nose1, 0, 0, 450, 500);
    }
    else if (isNose2Visible) {
        image(nose2, 0, 0, 450, 500);
    }
    
    ///EYES CHOICE DISPLAY///
    if (isDefaultEyesVisible) {
        image(defaultEyes, 0, 0, 450, 500);
    }
    else if (isEyes2Visible) {
        image(eyes2, 0, 0, 450, 500);
    }
}

// THESE FUNCTIONS SAY YES: I WANT THIS ITEM TO DISPLAY, OTHERS TO HIDE
// THEN IT SENDS THE INFO TO draw FUNCTION TO UPDATE DISPLAY

///EYES///
function showDefaultEyes() {
    isDefaultEyesVisible = true;
    isEyes2Visible = false;
}
function showEyes2() {
    isDefaultEyesVisible = false;
    isEyes2Visible = true;
}

///NOSES///
function showNose1() {
    isNose1Visible = true;
    isNose2Visible = false;
}
function showNose2() {
    isNose1Visible = false;
    isNose2Visible = true;
}

///MOUTHS///
function showMouth1() {
    isMouth1Visible = true;
    isMouth2Visible = false;
}
function showMouth2() {
    isMouth1Visible = false;
    isMouth2Visible = true;
}

///HEADS///
function showDefaultHead() {
    isDefaultHeadVisible = true;
    isHead2Visible = false;
}
function showHead2() {
    isDefaultHeadVisible = false;
    isHead2Visible = true;
}   
   
