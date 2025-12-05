
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

let isTop1Visible = false;
let isTop2Visible = false;
let isTop3Visible = false;
let isTop4Visible = false;
let isTop5Visible = false;
let isTop6Visible = false;
let isTop7Visible = false;
let isTop8Visible = false;

let isBottom1Visible = false;
let isBottom2Visible = false;
let isBottom3Visible = false;
let isBottom4Visible = false;
let isBottom5Visible = false;
let isBottom6Visible = false;
let isBottom7Visible = false;
let isBottom8Visible = false;

let isShoes1Visible = false;
let isShoes2Visible = false;
let isShoes3Visible = false;
let isShoes4Visible = false;
let isShoes5Visible = false;
let isShoes6Visible = false;
let isShoes7Visible = false;
let isShoes8Visible = false;

//////////////////////////////////////////////////////////////////////////////////

let eyesCategorySelected = false;
let noseCategorySelected = false;
let mouthCategorySelected = false;
let headCategorySelected = false;
let earCategorySelected = false;
let topCategorySelected = false;
let bottomCategorySelected = false;
let shoesCategorySelected = false;

// these variables store the div that holds each category's items 
// is NOT the category button, but the all the items inside that category
// MUST be a global variable so all functions can access it
const eyeCategory = document.getElementsByClassName('eyes-category')[0];
const noseCategory = document.getElementsByClassName('nose-category')[0];
const mouthCategory = document.getElementsByClassName('mouth-category')[0];
const headCategory = document.getElementsByClassName('head-category')[0];
const earsCategory = document.getElementsByClassName('ears-category')[0];
const topCategory = document.getElementsByClassName('top-category')[0];
const bottomCategory = document.getElementsByClassName('bottom-category')[0];
const shoeCategory = document.getElementsByClassName('shoe-category')[0]; 

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

    top1 = loadImage('images/top/top_1_choices.png');
    top2 = loadImage('images/top/top_2_choices.png');
    top3 = loadImage('images/top/top_3_choices.png');
    top4 = loadImage('images/top/top_4_choices.png');
    top5 = loadImage('images/top/top_5_choices.png');
    top6 = loadImage('images/top/top_6_choices.png');
    top7 = loadImage('images/top/top_7_choices.png');
    top8 = loadImage('images/top/top_8_choices.png');

    bottom1 = loadImage('images/bottom/bottom_1_choices.png');
    bottom2 = loadImage('images/bottom/bottom_2_choices.png');
    bottom3 = loadImage('images/bottom/bottom_3_choices.png');
    bottom4 = loadImage('images/bottom/bottom_4_choices.png');
    bottom5 = loadImage('images/bottom/bottom_5_choices.png');
    bottom6 = loadImage('images/bottom/bottom_6_choices.png');
    bottom7 = loadImage('images/bottom/bottom_7_choices.png');
    bottom8 = loadImage('images/bottom/bottom_8_choices.png');

    shoe1 = loadImage('images/shoes/shoe_1_choices.png');
    shoe2 = loadImage('images/shoes/shoe_2_choices.png');
    shoe3 = loadImage('images/shoes/shoe_3_choices.png');
    shoe4 = loadImage('images/shoes/shoe_4_choices.png');
    shoe5 = loadImage('images/shoes/shoe_5_choices.png');
    shoe6 = loadImage('images/shoes/shoe_6_choices.png');
    shoe7 = loadImage('images/shoes/shoe_7_choices.png');
    shoe8 = loadImage('images/shoes/shoe_8_choices.png');

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
    document.getElementById("shirt-button").addEventListener("click", showTopCategory);
    document.getElementById("pants-button").addEventListener("click", showBottomCategory);
    document.getElementById("shoe-button").addEventListener("click", showShoeCategory);

    eyeCategory.style.display = 'none';
    noseCategory.style.display = 'none';
    mouthCategory.style.display = 'none';
    headCategory.style.display = 'none'; 
    earsCategory.style.display = 'none';   
    topCategory.style.display = 'none';
    bottomCategory.style.display = 'none';
    shoeCategory.style.display = 'none';

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

    document.getElementById('top-1').addEventListener('click', showTop1);
    document.getElementById('top-2').addEventListener('click', showTop2);
    document.getElementById('top-3').addEventListener('click', showTop3);
    document.getElementById('top-4').addEventListener('click', showTop4);
    document.getElementById('top-5').addEventListener('click', showTop5);
    document.getElementById('top-6').addEventListener('click', showTop6);
    document.getElementById('top-7').addEventListener('click', showTop7);
    document.getElementById('top-8').addEventListener('click', showTop8);

    document.getElementById('bottom-1').addEventListener('click', showBottom1);
    document.getElementById('bottom-2').addEventListener('click', showBottom2);
    document.getElementById('bottom-3').addEventListener('click', showBottom3);
    document.getElementById('bottom-4').addEventListener('click', showBottom4);
    document.getElementById('bottom-5').addEventListener('click', showBottom5);
    document.getElementById('bottom-6').addEventListener('click', showBottom6);
    document.getElementById('bottom-7').addEventListener('click', showBottom7);
    document.getElementById('bottom-8').addEventListener('click', showBottom8);

    document.getElementById('shoe-1').addEventListener('click', showShoe1);
    document.getElementById('shoe-2').addEventListener('click', showShoe2);
    document.getElementById('shoe-3').addEventListener('click', showShoe3);
    document.getElementById('shoe-4').addEventListener('click', showShoe4);
    document.getElementById('shoe-5').addEventListener('click', showShoe5);
    document.getElementById('shoe-6').addEventListener('click', showShoe6);
    document.getElementById('shoe-7').addEventListener('click', showShoe7);
    document.getElementById('shoe-8').addEventListener('click', showShoe8);

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
        topCategory.style.display = 'none';
        bottomCategory.style.display = 'none';
        shoeCategory.style.display = 'none';
    } else if (noseCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'grid';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        earsCategory.style.display = 'none';
        topCategory.style.display = 'none';
        bottomCategory.style.display = 'none';
        shoeCategory.style.display = 'none';
    } else if (mouthCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'grid';
        headCategory.style.display = 'none'; 
        earsCategory.style.display = 'none'; 
        topCategory.style.display = 'none';
        bottomCategory.style.display = 'none';
        shoeCategory.style.display = 'none';
    } else if (headCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'grid'; 
        earsCategory.style.display = 'none';
        topCategory.style.display = 'none';
        bottomCategory.style.display = 'none';
        shoeCategory.style.display = 'none';
    } else if (earsCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        earsCategory.style.display = 'grid';
        topCategory.style.display = 'none';
        bottomCategory.style.display = 'none';
        shoeCategory.style.display = 'none';
    } else if (topCategorySelected) {
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        earsCategory.style.display = 'none';
        topCategory.style.display = 'grid';
        bottomCategory.style.display = 'none';
        shoeCategory.style.display = 'none';
    } else if (bottomCategorySelected) {    
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        earsCategory.style.display = 'none';
        topCategory.style.display = 'none';
        bottomCategory.style.display = 'grid';
        shoeCategory.style.display = 'none';
    } else if (shoeCategorySelected) {    
        eyeCategory.style.display = 'none';
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        earsCategory.style.display = 'none';
        topCategory.style.display = 'none';
        bottomCategory.style.display = 'none';
        shoeCategory.style.display = 'grid';
    } else {
        eyeCategory.style.display = 'none';
        headCategory.style.display = 'none'; 
        noseCategory.style.display = 'none';
        mouthCategory.style.display = 'none'; 
        earsCategory.style.display = 'none';
        topCategory.style.display = 'none';
        bottomCategory.style.display = 'none';
        shoeCategory.style.display = 'none';
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
    topCategorySelected = false;
    bottomCategorySelected = false;
    shoeCategorySelected = false;
    showHideCategories();
}

function showNoseCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = true;
    mouthCategorySelected = false;
    headCategorySelected = false;
    earsCategorySelected = false;
    topCategorySelected = false;
    bottomCategorySelected = false;
    shoeCategorySelected = false;
    showHideCategories();
}

function showMouthCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = true;
    headCategorySelected = false;
    earsCategorySelected = false;
    topCategorySelected = false;
    bottomCategorySelected = false;
    shoeCategorySelected = false;
    showHideCategories();
}

function showHeadCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = true;
    earsCategorySelected = false;
    topCategorySelected = false;
    bottomCategorySelected = false;
    shoeCategorySelected = false;
    showHideCategories();
}

function showEarsCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = false;
    earsCategorySelected = true;
    topCategorySelected = false;
    bottomCategorySelected = false;
    shoeCategorySelected = false;
    showHideCategories();
}   

function showTopCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = false;
    earsCategorySelected = false;
    topCategorySelected = true;
    bottomCategorySelected = false;
    shoeCategorySelected = false;
    showHideCategories();
}   

function showBottomCategory() { 
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = false;
    earsCategorySelected = false;
    topCategorySelected = false;
    bottomCategorySelected = true;
    shoeCategorySelected = false;
    showHideCategories();
}

function showShoeCategory() {
    eyesCategorySelected = false;
    noseCategorySelected = false;
    mouthCategorySelected = false;
    headCategorySelected = false;
    earsCategorySelected = false;
    topCategorySelected = false;
    bottomCategorySelected = false;
    shoeCategorySelected = true;
    showHideCategories();
}


///////////////////////////////////////////////////////////////////////////////////////

function draw() {
    background(230, 232, 240);
    //order of layers: top to bottom in code = bottom to top in display
    image(defaultBody, 0, 0, 450, 500);

    //SHOES CHOICE DISPLAY///
    if (isShoes1Visible) {
        image(shoe1, 0, 0, 450, 500);
    }
    else if (isShoes2Visible) {
        image(shoe2, 0, 0, 450, 500);
    }
    else if (isShoes3Visible) {
        image(shoe3, 0, 0, 450, 500);
    }
    else if (isShoes4Visible) {
        image(shoe4, 0, 0, 450, 500);
    }
    else if (isShoes5Visible) {
        image(shoe5, 0, 0, 450, 500);
    }
    else if (isShoes6Visible) {
        image(shoe6, 0, 0, 450, 500);
    }
    else if (isShoes7Visible) {
        image(shoe7, 0, 0, 450, 500);
    }
    else if (isShoes8Visible) {
        image(shoe8, 0, 0, 450, 500);
    }

    ///BOTTOM CHOICE DISPLAY///
    if (isBottom2Visible) {
        image(bottom2, 0, 0, 450, 500);
    }
    else if (isBottom3Visible) {
        image(bottom3, 0, 0, 450, 500);
    }
    else if (isBottom4Visible) {
        image(bottom4, 0, 0, 450, 500);
    }
    else if (isBottom5Visible) {
        image(bottom5, 0, 0, 450, 500);
    }
    else if (isBottom6Visible) {
        image(bottom6, 0, 0, 450, 500);
    }
    else if (isBottom7Visible) {
        image(bottom7, 0, 0, 450, 500);
    }
    else if (isBottom8Visible) {
        image(bottom8, 0, 0, 450, 500);
    }

    ///TOP CHOICE DISPLAY///
    if (isTop1Visible) {    
        image(top1, 0, 0, 450, 500);
    }
    else if (isTop2Visible) {
        image(top2, 0, 0, 450, 500);
    }
    else if (isTop3Visible) {
        image(top3, 0, 0, 450, 500);
    }
    else if (isTop4Visible) {
        image(top4, 0, 0, 450, 500);
    }
    else if (isTop5Visible) {
        image(top5, 0, 0, 450, 500);
    }
    else if (isTop6Visible) {
        image(top6, 0, 0, 450, 500);
    }
    else if (isTop7Visible) {
        image(top7, 0, 0, 450, 500);
    }
    else if (isTop8Visible) {
        image(top8, 0, 0, 450, 500);
    }

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

function showTop1() {
    isTop1Visible = true;
    isTop2Visible = false;
    isTop3Visible = false;
    isTop4Visible = false;
    isTop5Visible = false;
    isTop6Visible = false;
    isTop7Visible = false;
    isTop8Visible = false;
}   
function showTop2() {
    isTop1Visible = false;
    isTop2Visible = true;
    isTop3Visible = false;
    isTop4Visible = false;
    isTop5Visible = false;
    isTop6Visible = false;
    isTop7Visible = false;
    isTop8Visible = false;
}   
function showTop3() {
    isTop1Visible = false;
    isTop2Visible = false;
    isTop3Visible = true;
    isTop4Visible = false;
    isTop5Visible = false;
    isTop6Visible = false;
    isTop7Visible = false;
    isTop8Visible = false;
}
function showTop4() {
    isTop1Visible = false;
    isTop2Visible = false;
    isTop3Visible = false;
    isTop4Visible = true;
    isTop5Visible = false;
    isTop6Visible = false;
    isTop7Visible = false;
    isTop8Visible = false;
}
function showTop5() {
    isTop1Visible = false;
    isTop2Visible = false;
    isTop3Visible = false;
    isTop4Visible = false;
    isTop5Visible = true;
    isTop6Visible = false;
    isTop7Visible = false;
    isTop8Visible = false;
}
function showTop6() {
    isTop1Visible = false;
    isTop2Visible = false;
    isTop3Visible = false;
    isTop4Visible = false;
    isTop5Visible = false;
    isTop6Visible = true;
    isTop7Visible = false;
    isTop8Visible = false;
}
function showTop7() {
    isTop1Visible = false;
    isTop2Visible = false;
    isTop3Visible = false;
    isTop4Visible = false;
    isTop5Visible = false;
    isTop6Visible = false;
    isTop7Visible = true;
    isTop8Visible = false;
}
function showTop8() {
    isTop1Visible = false;
    isTop2Visible = false;
    isTop3Visible = false;
    isTop4Visible = false;
    isTop5Visible = false;
    isTop6Visible = false;
    isTop7Visible = false;
    isTop8Visible = true;
}

function showBottom1() {
    isBottom1Visible = true;
    isBottom2Visible = false;
    isBottom3Visible = false;
    isBottom4Visible = false;
    isBottom5Visible = false;
    isBottom6Visible = false;
    isBottom7Visible = false;
    isBottom8Visible = false;
}
function showBottom2() {
    isBottom1Visible = false;
    isBottom2Visible = true;
    isBottom3Visible = false;
    isBottom4Visible = false;
    isBottom5Visible = false;
    isBottom6Visible = false;
    isBottom7Visible = false;
    isBottom8Visible = false;
}
function showBottom3() {
    isBottom1Visible = false;
    isBottom2Visible = false;
    isBottom3Visible = true;
    isBottom4Visible = false;
    isBottom5Visible = false;
    isBottom6Visible = false;
    isBottom7Visible = false;
    isBottom8Visible = false;
}
function showBottom4() {
    isBottom1Visible = false;
    isBottom2Visible = false;
    isBottom3Visible = false;
    isBottom4Visible = true;
    isBottom5Visible = false;
    isBottom6Visible = false;
    isBottom7Visible = false;
    isBottom8Visible = false;
}
function showBottom5() {
    isBottom1Visible = false;
    isBottom2Visible = false;
    isBottom3Visible = false;
    isBottom4Visible = false;
    isBottom5Visible = true;
    isBottom6Visible = false;
    isBottom7Visible = false;
    isBottom8Visible = false;
}
function showBottom6() {
    isBottom1Visible = false;
    isBottom2Visible = false;
    isBottom3Visible = false;
    isBottom4Visible = false;
    isBottom5Visible = false;
    isBottom6Visible = true;
    isBottom7Visible = false;
    isBottom8Visible = false;
}
function showBottom7() {
    isBottom1Visible = false;
    isBottom2Visible = false;
    isBottom3Visible = false;
    isBottom4Visible = false;
    isBottom5Visible = false;
    isBottom6Visible = false;
    isBottom7Visible = true;
    isBottom8Visible = false;
}
function showBottom8() {
    isBottom1Visible = false;
    isBottom2Visible = false;
    isBottom3Visible = false;
    isBottom4Visible = false;
    isBottom5Visible = false;
    isBottom6Visible = false;
    isBottom7Visible = false;
    isBottom8Visible = true;
}

function showShoe1() {
    isShoes1Visible = true;
    isShoes2Visible = false;
    isShoes3Visible = false;
    isShoes4Visible = false;
    isShoes5Visible = false;
    isShoes6Visible = false;
    isShoes7Visible = false;
    isShoes8Visible = false;
}
function showShoe2() {
    isShoes1Visible = false;
    isShoes2Visible = true;
    isShoes3Visible = false;
    isShoes4Visible = false;
    isShoes5Visible = false;
    isShoes6Visible = false;
    isShoes7Visible = false;
    isShoes8Visible = false;
}
function showShoe3() {
    isShoes1Visible = false;
    isShoes2Visible = false;
    isShoes3Visible = true;
    isShoes4Visible = false;
    isShoes5Visible = false;
    isShoes6Visible = false;
    isShoes7Visible = false;
    isShoes8Visible = false;
}
function showShoe4() {
    isShoes1Visible = false;
    isShoes2Visible = false;
    isShoes3Visible = false;
    isShoes4Visible = true;
    isShoes5Visible = false;
    isShoes6Visible = false;
    isShoes7Visible = false;
    isShoes8Visible = false;
}
function showShoe5() {
    isShoes1Visible = false;
    isShoes2Visible = false;
    isShoes3Visible = false;
    isShoes4Visible = false;
    isShoes5Visible = true;
    isShoes6Visible = false;
    isShoes7Visible = false;
    isShoes8Visible = false;
}
function showShoe6() {
    isShoes1Visible = false;
    isShoes2Visible = false;
    isShoes3Visible = false;
    isShoes4Visible = false;
    isShoes5Visible = false;
    isShoes6Visible = true;
    isShoes7Visible = false;
    isShoes8Visible = false;
}
function showShoe7() {
    isShoes1Visible = false;
    isShoes2Visible = false;
    isShoes3Visible = false;
    isShoes4Visible = false;
    isShoes5Visible = false;
    isShoes6Visible = false;
    isShoes7Visible = true;
    isShoes8Visible = false;
}
function showShoe8() {
    isShoes1Visible = false;
    isShoes2Visible = false;
    isShoes3Visible = false;
    isShoes4Visible = false;
    isShoes5Visible = false;
    isShoes6Visible = false;
    isShoes7Visible = false;
    isShoes8Visible = true;
}