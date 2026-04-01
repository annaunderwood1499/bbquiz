let brandFont1; // Rosarivo
let brandFont2; // Radley
let ampImg; // BB_logo.png

let startBtn;
let page = 1; // 1= "Start Quiz" page

function preload() {
  brandFont1 = loadFont("Rosarivo-Regular.ttf");
  brandFont2 = loadFont("Radley-Regular.ttf");
  ampImg = loadImage("BB_logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  startBtn = createButton("Start Quiz");

  // Button styling
  startBtn.style("background-color", "#DDBDB6");
  startBtn.style("color", "#78615A");
  startBtn.style("font-family", "Radley");
  startBtn.style("font-size", "36px");
  startBtn.style("border", "none");
  startBtn.style("border-radius", "30px");
  startBtn.style("padding", "24px 39px");

  startBtn.mousePressed(() => {
    startBtn.hide();
    page = 2; // Moves to instructions page
  });
}

function draw() {
  background("#F3EAE5");

  if (page === 1) {
    drawPage1();
  } else if (page === 2) {
    drawPage2();
  }
}

// Page 1: Start Quiz
function drawPage1() {
  // Bottom rectangle
  fill("#796159");
  noStroke();
  rect(0, height - 100, width, 100);

  let headerY = 75;

  // Header
  textFont(brandFont2);
  textSize(30);
  fill("#796159");
  textAlign(CENTER, TOP);
  text("Radiance Quiz", width / 2, headerY);

  // Question
  textFont(brandFont1);
  textSize(40);
  text("Which type of radiance are you?", width / 2, headerY + 100);

  // Button position
  startBtn.position(width / 2 - 115, headerY + 270);

  // Footer
  let y = 600;
  let footerCenterX = width / 2 + 45;

  textFont(brandFont1);
  textSize(28);

  textAlign(RIGHT, CENTER);
  text("By: BLOOM", footerCenterX - 20, y);

  imageMode(CENTER);
  image(ampImg, footerCenterX, y + 1, 32, 32);

  textAlign(LEFT, CENTER);
  text("BOND", footerCenterX + 20, y);
}

// Page 2: Start Instructions
function drawPage2() {
  background("#F3EAE5");

  // This allows all text to move together
  let yOffset = 60;

  // Bottom rectangle
  fill("#796159");
  noStroke();
  rect(0, height - 100, width, 100);

  // Header
  textAlign(LEFT, CENTER);
  textFont(brandFont2);
  textSize(30);
  fill("#796159");
  text("Before You Begin", 150, 100 + yOffset);

  // Sub Header
  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(40);
  fill("#796159");
  text("What You'll Need", 150, 175 + yOffset);

  // Body Text
  textAlign(LEFT, TOP);
  textFont(brandFont2);
  textSize(24);
  fill("#796159");

  text(
    "Before you begin the quiz, grab a notebook and a pencil, this will be a key interactive element to help you engage with your results. As you navigate through the quiz, keep a running tally for each answer. Be sure to track each radiance type separately: Outer Glow, Inner Softness, and Vital Flow. At the end of the quiz, you’ll receive instructions on how to calculate your final result and discover your radiance type.",
    150,
    245 + yOffset,
    680,
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  if (startBtn) {
    startBtn.position(width / 2 - 100, 95 + 245);
  }
}
