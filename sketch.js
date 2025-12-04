let defaultBody;

let defaultEyes;

let defaultHead;

/////////////////////////////////////////////////////////////////////////////////

let isDefaultEyesVisible = true;
let isEyes2Visible = false;
let isEyes3Visible = false;
let isEyes4Visible = false;
let isEyes5Visible = false;
let isEyes6Visible = false;
let isEyes7Visible = false;
let isEyes8Visible = false;

let isNose1Visible = false;
let isNose2Visible = false;
let isNose3Visible = false;
let isNose4Visible = false;
let isNose5Visible = false;
let isNose6Visible = false;
let isNose7Visible = false;
let isNose8Visible = false;

let isMouth1Visible = false;
let isMouth2Visible = false;
let isMouth3Visible = false;
let isMouth4Visible = false;
let isMouth5Visible = false;
let isMouth6Visible = false;
let isMouth7Visible = false;
let isMouth8Visible = false;

let isDefaultHeadVisible = true;
let isHead2Visible = false;
let isHead3Visible = false;
let isHead4Visible = false;
let isHead5Visible = false;
let isHead6Visible = false;
let isHead7Visible = false;

let isEars1Visible = false;
let isEars2Visible = false;
let isEars3Visible = false;
let isEars4Visible = false;
let isEars5Visible = false;
let isEars6Visible = false;
let isEars7Visible = false;
let isEars8Visible = false;


//////////////////////////////////////////////////////////////////////////////////

let eyesCategorySelected = false;
let noseCategorySelected = false;
let mouthCategorySelected = false;
let headCategorySelected = false;
let earCategorySelected = false;

// these variables store the div that holds each category's items 
// is NOT the category button, but the all the items inside that category
// MUST be a global variable so all functions can access it
const eyeCategory = document.getElementsByClassName('eyes-category')[0];
const noseCategory = document.getElementsByClassName('nose-category')[0];
const mouthCategory = document.getElementsByClassName('mouth-category')[0];
const headCategory = document.getElementsByClassName('head-category')[0];
const earsCategory = document.getElementsByClassName('ears-category')[0];

///////////////////////////////////////////////////////////////////////////////////////

function preload() {
    defaultBody = loadImage('images/default_body.png');

    defaultEyes = loadImage('images/eyes/default_eyes.png');
    eyes2 = loadImage('images/eyes/eyes_2.png');
    eyes3 = loadImage('images/eyes/eyes_3_choices.png');
    eyes4 = loadImage('images/eyes/eyes_4_choices.png');
    eyes5 = loadImage('images/eyes/eyes_5_choices.png');
    eyes6 = loadImage('images/eyes/eyes_6_choices.png');
    eyes7 = loadImage('images/eyes/eyes_7_choices.png');
    eyes8 = loadImage('images/eyes/eyes_8_choices.png');

    nose1 = loadImage('images/nose/nose_1.png');
    nose2 = loadImage('images/nose/nose_2.png');
    nose3 = loadImage('images/nose/nose_3_choices.png');
    nose4 = loadImage('images/nose/nose_4_choices.png');
    nose5 = loadImage('images/nose/nose_5_choices.png');
    nose6 = loadImage('images/nose/nose_6_choices.png');
    nose7 = loadImage('images/nose/nose_7_choices.png');
    nose8 = loadImage('images/nose/nose_8_choices.png');

    mouth1 = loadImage('images/mouth/mouth_1.png');
    mouth2 = loadImage('images/mouth/mouth_2.png');
    mouth3 = loadImage('images/mouth/mouth_3_choices.png');
    mouth4 = loadImage('images/mouth/mouth_4_choices.png');
    mouth5 = loadImage('images/mouth/mouth_5_choices.png');
    mouth6 = loadImage('images/mouth/mouth_6_choices.png');
    mouth7 = loadImage('images/mouth/mouth_7_choices.png');
    mouth8 = loadImage('images/mouth/mouth_8_choices.png');

    defaultHead = loadImage('images/head/default_head.png');
    head2 = loadImage('images/head/head_2.png');
    head3 = loadImage('images/head/head_3_choices.png');
    head4 = loadImage('images/head/head_4_choices.png');
    head5 = loadImage('images/head/head_5_choices.png');
    head6 = loadImage('images/head/head_6_choices.png');
    head7 = loadImage('images/head/head_7_choices.png');
    head8 = loadImage('images/head/head_8_choices.png');

    ears1 = loadImage('images/ears/ears_1_choices.png');
    ears2 = loadImage('images/ears/ears_2_choices.png');
    ears3 = loadImage('images/ears/ears_3_choices.png');
    ears4 = loadImage('images/ears/ears_4_choices.png');
    ears5 = loadImage('images/ears/ears_5_choices.png');
    ears6 = loadImage('images/ears/ears_6_choices.png');
    ears7 = loadImage('images/ears/ears_7_choices.png');
    ears8 = loadImage('images/ears/ears_8_choices.png');
}

///////////////////////////////////////////////////////////////////////////////////////

function setup() {
    createCanvas(450,500);

    //for the category buttons
    document.getElementById("eyes-button").addEventListener("click", showEyesCategory);
    document.getElementById("nose-button").addEventListener("click", showNoseCategory);
    document.getElementById("mouth-button").addEventListener("click", showMouthCategory);
    document.getElementById("head-button").addEventListener("click", showHeadCategory);
    document.getElementById("ears-button").addEventListener("click", showEarsCategory);

    eyeCategory.style.display = 'none';
    noseCategory.style.display = 'none';
    mouthCategory.style.display = 'none';
    headCategory.style.display = 'none'; 
    earsCategory.style.display = 'none';   

    // get id's from HTML, wait for it to be clicked, when clicked, calls function, store in a variable(button of a sort)
    // each button will call a different function that shows a different image
    document.getElementById('default-eyes').addEventListener('click', showDefaultEyes);
    document.getElementById('eyes-2').addEventListener('click', showEyes2);
    document.getElementById('eyes-3').addEventListener('click', showEyes3);
    document.getElementById('eyes-4').addEventListener('click', showEyes4);
    document.getElementById('eyes-5').addEventListener('click', showEyes5);
    document.getElementById('eyes-6').addEventListener('click', showEyes6);
    document.getElementById('eyes-7').addEventListener('click', showEyes7);
    document.getElementById('eyes-8').addEventListener('click', showEyes8);

    document.getElementById('nose-1').addEventListener('click', showNose1);
    document.getElementById('nose-2').addEventListener('click', showNose2);
    document.getElementById('nose-3').addEventListener('click', showNose3);
    document.getElementById('nose-4').addEventListener('click', showNose4);
    document.getElementById('nose-5').addEventListener('click', showNose5);
    document.getElementById('nose-6').addEventListener('click', showNose6);
    document.getElementById('nose-7').addEventListener('click', showNose7);
    document.getElementById('nose-8').addEventListener('click', showNose8);

    document.getElementById('mouth-1').addEventListener('click', showMouth1);
    document.getElementById('mouth-2').addEventListener('click', showMouth2);
    document.getElementById('mouth-3').addEventListener('click', showMouth3);
    document.getElementById('mouth-4').addEventListener('click', showMouth4);
    document.getElementById('mouth-5').addEventListener('click', showMouth5);
    document.getElementById('mouth-6').addEventListener('click', showMouth6);
    document.getElementById('mouth-7').addEventListener('click', showMouth7);
    document.getElementById('mouth-8').addEventListener('click', showMouth8);

    document.getElementById('default-head').addEventListener('click', showDefaultHead);
    document.getElementById('head-2').addEventListener('click', showHead2);
    document.getElementById('head-3').addEventListener('click', showHead3);
    document.getElementById('head-4').addEventListener('click', showHead4);
    document.getElementById('head-5').addEventListener('click', showHead5);
    document.getElementById('head-6').addEventListener('click', showHead6);
    document.getElementById('head-7').addEventListener('click', showHead7);
    document.getElementById('head-8').addEventListener('click', showHead8);

    document.getElementById('ears-1').addEventListener('click', showEars1);
    document.getElementById('ears-2').addEventListener('click', showEars2);
    document.getElementById('ears-3').addEventListener('click', showEars3);
    document.getElementById('ears-4').addEventListener('click', showEars4);
    document.getElementById('ears-5').addEventListener('click', showEars5);
    document.getElementById('ears-6').addEventListener('click', showEars6);
    document.getElementById('ears-7').addEventListener('click', showEars7);
    document.getElementById('ears-8').addEventListener('click', showEars8);

}

////////////////////////////////////////////////////////////////////////////////////////
// CATEGORY DISPLAY

function showHideCategories() {
    if (eyesCategorySelected) {
        eyeCategory.style.display = 'grid';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none';
        earsCategory.style.display = 'none';
    } else if (noseCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'grid';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        earsCategory.style.display = 'none';
    } else if (mouthCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'grid';
        headCategory.style.display = 'none'; 
        earsCategory.style.display = 'none'; 
    } else if (headCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'grid'; 
        earsCategory.style.display = 'none';
    } else if (earsCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        earsCategory.style.display = 'grid';
    }else {
        eyeCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none'; 
        earsCategory.style.display = 'none';
    }
}

// THESE FUNCTIONS SAY YES: THIS CATEGORY IS SELECTED, OTHERS ARE NOT
// THEN SENDS THE INFO TO showHideCategories FUNCTION TO UPDATE DISPLAY
function showEyesCategory() {
    eyesCategorySelected = true;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = false;
    earsCategorySelected = false;
    showHideCategories();
}

function showNoseCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = true;
    mouthCategorySelected = false;
    headCategorySelected = false;
    earsCategorySelected = false;
    showHideCategories();
}

function showMouthCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = true;
    headCategorySelected = false;
    earsCategorySelected = false;
    showHideCategories();
}

function showHeadCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = true;
    earsCategorySelected = false;
    showHideCategories();
}

function showEarsCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = false;
    earsCategorySelected = true;
    showHideCategories();
}   

///////////////////////////////////////////////////////////////////////////////////////

function draw() {
    background(220);
    //order of layers: top to bottom in code = bottom to top in display
    image(defaultBody, 0, 0, 450, 500);

    ///EARS CHOICE DISPLAY///
    if (isEars1Visible) {
        image(ears1, 0, 0, 450, 500);
    }
    else if (isEars2Visible) {
        image(ears2, 0, 0, 450, 500);
    }
    else if (isEars3Visible) {
        image(ears3, 0, 0, 450, 500);
    }
    else if (isEars4Visible) {
        image(ears4, 0, 0, 450, 500);
    }
    else if (isEars5Visible) {
        image(ears5, 0, 0, 450, 500);
    }
    else if (isEars6Visible) {
        image(ears6, 0, 0, 450, 500);
    }
    else if (isEars7Visible) {
        image(ears7, 0, 0, 450, 500);
    }
    else if (isEars8Visible) {
        image(ears8, 0, 0, 450, 500);
    }

    ///HEAD CHOICE DISPLAY///
    if (isDefaultHeadVisible) {
        image(defaultHead, 0, 0, 450, 500);
    }
    else if (isHead2Visible) {
        image(head2, 0, 0, 450, 500);
    }
    else if (isHead3Visible) {
        image(head3, 0, 0, 450, 500);
    }
    else if (isHead4Visible) {
        image(head4, 0, 0, 450, 500);
    }
    else if (isHead5Visible) {
        image(head5, 0, 0, 450, 500);
    }
    else if (isHead6Visible) {
        image(head6, 0, 0, 450, 500);
    }
    else if (isHead7Visible) {
        image(head7, 0, 0, 450, 500);
    }
    else if (isHead8Visible) {
        image(head8, 0, 0, 450, 500);
    }

    ///MOUTH CHOICE DISPLAY///
    if (isMouth1Visible) {
        image(mouth1, 0, 0, 450, 500);
    }
    else if (isMouth2Visible) {
        image(mouth2, 0, 0, 450, 500);
    }
    else if (isMouth3Visible) {
        image(mouth3, 0, 0, 450, 500);
    }
    else if (isMouth4Visible) {
        image(mouth4, 0, 0, 450, 500);
    }
    else if (isMouth5Visible) {
        image(mouth5, 0, 0, 450, 500);
    }
    else if (isMouth6Visible) {
        image(mouth6, 0, 0, 450, 500);
    }
    else if (isMouth7Visible) {
        image(mouth7, 0, 0, 450, 500);
    }
    else if (isMouth8Visible) {
        image(mouth8, 0, 0, 450, 500);
    }

    ///NOSE CHOICE DISPLAY///
    if (isNose1Visible) {
        image(nose1, 0, 0, 450, 500);
    }
    else if (isNose2Visible) {
        image(nose2, 0, 0, 450, 500);
    }
    else if (isNose3Visible) {
        image(nose3, 0, 0, 450, 500);
    }
    else if (isNose4Visible) {
        image(nose4, 0, 0, 450, 500);
    }
    else if (isNose5Visible) {
        image(nose5, 0, 0, 450, 500);
    }
    else if (isNose6Visible) {
        image(nose6, 0, 0, 450, 500);
    }
    else if (isNose7Visible) {
        image(nose7, 0, 0, 450, 500);
    }
    else if (isNose8Visible) {
        image(nose8, 0, 0, 450, 500);
    }
    
    ///EYES CHOICE DISPLAY///
    if (isDefaultEyesVisible) {
        image(defaultEyes, 0, 0, 450, 500);
    }
    else if (isEyes2Visible) {
        image(eyes2, 0, 0, 450, 500);
    }
    else if (isEyes3Visible) {
        image(eyes3, 0, 0, 450, 500);
    }
    else if (isEyes4Visible) {
        image(eyes4, 0, 0, 450, 500);
    }
    else if (isEyes5Visible) {
        image(eyes5, 0, 0, 450, 500);
    }
    else if (isEyes6Visible) {
        image(eyes6, 0, 0, 450, 500);
    }
    else if (isEyes7Visible) {
        image(eyes7, 0, 0, 450, 500);
    }
    else if (isEyes8Visible) {
        image(eyes8, 0, 0, 450, 500);
    }
}

// THESE FUNCTIONS SAY YES: I WANT THIS ITEM TO DISPLAY, OTHERS TO HIDE
// THEN IT SENDS THE INFO TO draw FUNCTION TO UPDATE DISPLAY

///EYES///
function showDefaultEyes() {
    isDefaultEyesVisible = true;
    isEyes2Visible = false;
    isEyes3Visible = false;
    isEyes4Visible = false;
    isEyes5Visible = false;
    isEyes6Visible = false;
    isEyes7Visible = false;
    isEyes8Visible = false;
}
function showEyes2() {
    isDefaultEyesVisible = false;
    isEyes2Visible = true;
    isEyes3Visible = false;
    isEyes4Visible = false;
    isEyes5Visible = false;
    isEyes6Visible = false;
    isEyes7Visible = false;
    isEyes8Visible = false;
}
function showEyes3() {
    isDefaultEyesVisible = false;
    isEyes2Visible = false;
    isEyes3Visible = true;
    isEyes4Visible = false;
    isEyes5Visible = false;
    isEyes6Visible = false;
    isEyes7Visible = false;
    isEyes8Visible = false;
}
function showEyes4() {
    isDefaultEyesVisible = false;
    isEyes2Visible = false;
    isEyes3Visible = false;
    isEyes4Visible = true;
    isEyes5Visible = false;
    isEyes6Visible = false;
    isEyes7Visible = false;
    isEyes8Visible = false;
}
function showEyes5() {
    isDefaultEyesVisible = false;
    isEyes2Visible = false;
    isEyes3Visible = false;
    isEyes4Visible = false;
    isEyes5Visible = true;
    isEyes6Visible = false;
    isEyes7Visible = false;
    isEyes8Visible = false;
}
function showEyes6() {
    isDefaultEyesVisible = false;
    isEyes2Visible = false;
    isEyes3Visible = false;
    isEyes4Visible = false;
    isEyes5Visible = false;
    isEyes6Visible = true;
    isEyes7Visible = false;
    isEyes8Visible = false;
}
function showEyes7() {
    isDefaultEyesVisible = false;
    isEyes2Visible = false;
    isEyes3Visible = false;
    isEyes4Visible = false;
    isEyes5Visible = false;
    isEyes6Visible = false;
    isEyes7Visible = true;
    isEyes8Visible = false;
}
function showEyes8() {
    isDefaultEyesVisible = false;
    isEyes2Visible = false;
    isEyes3Visible = false;
    isEyes4Visible = false;
    isEyes5Visible = false;
    isEyes6Visible = false;
    isEyes7Visible = false;
    isEyes8Visible = true;
}

///NOSES///
function showNose1() {
    isNose1Visible = true;
    isNose2Visible = false;
    isNose3Visible = false;
    isNose4Visible = false;
    isNose5Visible = false;
    isNose6Visible = false;
    isNose7Visible = false;
    isNose8Visible = false;
}
function showNose2() {
    isNose1Visible = false;
    isNose2Visible = true;
    isNose3Visible = false;
    isNose4Visible = false;
    isNose5Visible = false;
    isNose6Visible = false;
    isNose7Visible = false;
    isNose8Visible = false;
}
function showNose3() {
    isNose1Visible = false;
    isNose2Visible = false;
    isNose3Visible = true;
    isNose4Visible = false;
    isNose5Visible = false;
    isNose6Visible = false;
    isNose7Visible = false;
    isNose8Visible = false;
}
function showNose4() {
    isNose1Visible = false;
    isNose2Visible = false;
    isNose3Visible = false;
    isNose4Visible = true;
    isNose5Visible = false;
    isNose6Visible = false;
    isNose7Visible = false;
    isNose8Visible = false;
}
function showNose5() {
    isNose1Visible = false;
    isNose2Visible = false;
    isNose3Visible = false;
    isNose4Visible = false;
    isNose5Visible = true;
    isNose6Visible = false;
    isNose7Visible = false;
    isNose8Visible = false;
}
function showNose6() {
    isNose1Visible = false;
    isNose2Visible = false;
    isNose3Visible = false;
    isNose4Visible = false;
    isNose5Visible = false;
    isNose6Visible = true;
    isNose7Visible = false;
    isNose8Visible = false;
}
function showNose7() {
    isNose1Visible = false;
    isNose2Visible = false;
    isNose3Visible = false;
    isNose4Visible = false;
    isNose5Visible = false;
    isNose6Visible = false;
    isNose7Visible = true;
    isNose8Visible = false;
}
function showNose8() {
    isNose1Visible = false;
    isNose2Visible = false;
    isNose3Visible = false;
    isNose4Visible = false;
    isNose5Visible = false;
    isNose6Visible = false;
    isNose7Visible = false;
    isNose8Visible = true;
}

///MOUTHS///
function showMouth1() {
    isMouth1Visible = true;
    isMouth2Visible = false;
    isMouth3Visible = false;
    isMouth4Visible = false;
    isMouth5Visible = false;
    isMouth6Visible = false;
    isMouth7Visible = false;
    isMouth8Visible = false;
}
function showMouth2() {
    isMouth1Visible = false;
    isMouth2Visible = true;
    isMouth3Visible = false;
    isMouth4Visible = false;
    isMouth5Visible = false;
    isMouth6Visible = false;
    isMouth7Visible = false;
    isMouth8Visible = false;
}
function showMouth3() {
    isMouth1Visible = false;
    isMouth2Visible = false;
    isMouth3Visible = true;
    isMouth4Visible = false;
    isMouth5Visible = false;
    isMouth6Visible = false;
    isMouth7Visible = false;
    isMouth8Visible = false;
}
function showMouth4() {
    isMouth1Visible = false;
    isMouth2Visible = false;
    isMouth3Visible = false;
    isMouth4Visible = true;
    isMouth5Visible = false;
    isMouth6Visible = false;
    isMouth7Visible = false;
    isMouth8Visible = false;
}
function showMouth5() {
    isMouth1Visible = false;
    isMouth2Visible = false;
    isMouth3Visible = false;
    isMouth4Visible = false;
    isMouth5Visible = true;
    isMouth6Visible = false;
    isMouth7Visible = false;
    isMouth8Visible = false;
}
function showMouth6() {
    isMouth1Visible = false;
    isMouth2Visible = false;
    isMouth3Visible = false;
    isMouth4Visible = false;
    isMouth5Visible = false;
    isMouth6Visible = true;
    isMouth7Visible = false;
    isMouth8Visible = false;
}
function showMouth7() {
    isMouth1Visible = false;
    isMouth2Visible = false;
    isMouth3Visible = false;
    isMouth4Visible = false;
    isMouth5Visible = false;
    isMouth6Visible = false;
    isMouth7Visible = true;
    isMouth8Visible = false;
}
function showMouth8() {
    isMouth1Visible = false;
    isMouth2Visible = false;
    isMouth3Visible = false;
    isMouth4Visible = false;
    isMouth5Visible = false;
    isMouth6Visible = false;
    isMouth7Visible = false;
    isMouth8Visible = true;
}


///HEADS///
function showDefaultHead() {
    isDefaultHeadVisible = true;
    isHead2Visible = false;
    isHead3Visible = false;
    isHead4Visible = false;
    isHead5Visible = false;
    isHead6Visible = false;
    isHead7Visible = false;
    isHead8Visible = false;
}
function showHead2() {
    isDefaultHeadVisible = false;
    isHead2Visible = true;
    isHead3Visible = false;
    isHead4Visible = false;
    isHead5Visible = false;
    isHead6Visible = false;
    isHead7Visible = false;
    isHead8Visible = false;
} 
function showHead3() {
    isDefaultHeadVisible = false;
    isHead2Visible = false;
    isHead3Visible = true;
    isHead4Visible = false;
    isHead5Visible = false;
    isHead6Visible = false;
    isHead7Visible = false;
    isHead8Visible = false;
}
function showHead4() {
    isDefaultHeadVisible = false;
    isHead2Visible = false;
    isHead3Visible = false;
    isHead4Visible = true;
    isHead5Visible = false;
    isHead6Visible = false;
    isHead7Visible = false;
    isHead8Visible = false;
}
function showHead5() {
    isDefaultHeadVisible = false;
    isHead2Visible = false;
    isHead3Visible = false;
    isHead4Visible = false;
    isHead5Visible = true;
    isHead6Visible = false;
    isHead7Visible = false;
    isHead8Visible = false;
}
function showHead6() {
    isDefaultHeadVisible = false;
    isHead2Visible = false;
    isHead3Visible = false;
    isHead4Visible = false;
    isHead5Visible = false;
    isHead6Visible = true;
    isHead7Visible = false;
    isHead8Visible = false;
}
function showHead7() {
    isDefaultHeadVisible = false;
    isHead2Visible = false;
    isHead3Visible = false;
    isHead4Visible = false;
    isHead5Visible = false;
    isHead6Visible = false;
    isHead7Visible = true;
    isHead8Visible = false;
}
function showHead8() {
    isDefaultHeadVisible = false;
    isHead2Visible = false;
    isHead3Visible = false;
    isHead4Visible = false;
    isHead5Visible = false;
    isHead6Visible = false;
    isHead7Visible = false;
    isHead8Visible = true;
}

///EARS///
function showEars1() {
    isEars1Visible = true;
    isEars2Visible = false;
    isEars3Visible = false;
    isEars4Visible = false;
    isEars5Visible = false;
    isEars6Visible = false;
    isEars7Visible = false;
    isEars8Visible = false;
}
function showEars2() {
    isEars1Visible = false;
    isEars2Visible = true;
    isEars3Visible = false;
    isEars4Visible = false;
    isEars5Visible = false;
    isEars6Visible = false;
    isEars7Visible = false;
    isEars8Visible = false;
}
function showEars3() {
    isEars1Visible = false;
    isEars2Visible = false;
    isEars3Visible = true;
    isEars4Visible = false;
    isEars5Visible = false;
    isEars6Visible = false;
    isEars7Visible = false;
    isEars8Visible = false;
}
function showEars4() {
    isEars1Visible = false;
    isEars2Visible = false;
    isEars3Visible = false;
    isEars4Visible = true;
    isEars5Visible = false;
    isEars6Visible = false;
    isEars7Visible = false;
    isEars8Visible = false;
}
function showEars5() {
    isEars1Visible = false;
    isEars2Visible = false;
    isEars3Visible = false;
    isEars4Visible = false;
    isEars5Visible = true;
    isEars6Visible = false;
    isEars7Visible = false;
    isEars8Visible = false;
}
function showEars6() {
    isEars1Visible = false;
    isEars2Visible = false;
    isEars3Visible = false;
    isEars4Visible = false;
    isEars5Visible = false;
    isEars6Visible = true;
    isEars7Visible = false;
    isEars8Visible = false;
}
function showEars7() {
    isEars1Visible = false;
    isEars2Visible = false;
    isEars3Visible = false;
    isEars4Visible = false;
    isEars5Visible = false;
    isEars6Visible = false;
    isEars7Visible = true;
    isEars8Visible = false;
}
function showEars8() {
    isEars1Visible = false;
    isEars2Visible = false;
    isEars3Visible = false;
    isEars4Visible = false;
    isEars5Visible = false;
    isEars6Visible = false;
    isEars7Visible = false;
    isEars8Visible = true;
}
