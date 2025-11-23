
// if button1 clicked, show image1, hide image2
// if button2 clicked, show image2, hide image1

let image1;
let image2;
let isImage1Visible = false;
let isImage2Visible = false;

///////////////////////////////////////////////////////////////////////////////////////

function preload() {
    image1 = loadImage('cat_11.png');
    image2 = loadImage('cat_2.png');
}

///////////////////////////////////////////////////////////////////////////////////////

function setup() {
    createCanvas(700,700);

    // get id's from HTML, wait for it to be clicked, when clicked, calls function, store in a variable(button of a sort)
    // each button will call a different function that shows a different image
    const button1 = document.getElementById('button').addEventListener('click', showImage1);
    const button2 = document.getElementById('butt').addEventListener('click', showImage2);
}

///////////////////////////////////////////////////////////////////////////////////////

function draw() {
    background(220);

    if (isImage1Visible) {
        image(image1, 0, 0, 700, 700);
    }
    else if (isImage2Visible) {
        image(image2, 0, 0, 700, 700);
    }
}

///////////////////////////////////////////////////////////////////////////////////////

// functions that shows desired image, and hides the others
function showImage1() {
    isImage1Visible = true;
    isImage2Visible = false;
}

function showImage2() {
    isImage1Visible = false;
    isImage2Visible = true;
}