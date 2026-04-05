let brandFont1; // Rosarivo
let brandFont2; // Radley
let ampImg; // BB_logo.png
let cards = []; // quiz cards

let startBtn;
let page = 1; // 1 = start page

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
    page = 2; // change to instructions page

    // Card setup 
    cards = [
      createCard(270, 200,
        "The personalized beauty boutique",
        "Find your Outer Glow"
      ),
      createCard(270, 350,
        "The spa for a relaxing pampering session",
        "Find your Inner Softness"
      ),
      createCard(270, 500,
        "The beach for a refreshing walk by the water",
        "Find your Vital Flow"
      )
    ];
  });
}

function draw() {
  background("#F3EAE5");

  if (page === 1) {
    drawPage1();
  } else if (page === 2) {
    drawPage2();
  } else if (page === 3) {
    drawPage3();
  } else if (page === 4) {
    drawPage4();
  } else if (page === 5) {
    drawPage5();
  } else if (page === 6) {
    drawPage6();
  } else if (page === 7) {
    drawPage7();
  } else if (page === 8) {
    drawPage8();
  }
}

// Page 1: Start page
function drawPage1() {
  fill("#796159");
  noStroke();
  rect(0, height - 100, width, 100);

  let headerY = 75;

  textFont(brandFont2);
  textSize(30);
  fill("#796159");
  textAlign(CENTER, TOP);
  text("Radiance Quiz", width / 2, headerY);

  textFont(brandFont1);
  textSize(40);
  text("Which type of radiance are you?", width / 2, headerY + 100);

  startBtn.position(width / 2 - 115, headerY + 270);

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

// Page 2: Begin Instructions 
function drawPage2() {
  background("#F3EAE5");

  let yOffset = 60;

  fill("#796159");
  noStroke();
  rect(0, height - 100, width, 100);

  textAlign(LEFT, CENTER);
  textFont(brandFont2);
  textSize(30);
  text("Before You Begin", 400, 100 + yOffset);

  textFont(brandFont1);
  textSize(40);
  text("What You'll Need", 400, 175 + yOffset);

  textFont(brandFont2);
  textSize(24);

  text(
    "Before you begin the quiz, grab a notebook and a pencil, this will be a key interactive element to help you engage with your results. As you navigate through the quiz, keep a running tally for each answer. Be sure to track each radiance type separately: Outer Glow, Inner Softness, and Vital Flow. At the end of the quiz, you’ll receive instructions on how to calculate your final result and discover your radiance type.",
    400,
    350 + yOffset,
    680
  );
}

// Page 3: Quiz question 1
function drawPage3() {
  background("#F3EAE5");

  let yOffset = 60;

  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(40);
  fill("#796159");
  text("You’ve just arrived — where do you wander first?", 270, 100 + yOffset);

  let cardOffsetY = 70; // adjust this number if you want to move flip cards down from text together 

for (let c of cards) {
  push();
  translate(0, cardOffsetY);
  drawCard(c);
  pop();
}
  }


// Draw cards
function drawCard(c) {
  push();
  translate(c.x, c.y);

  fill(c.flipped ? "#78615A" : "#DDBDB6");
  noStroke();
  rect(0, 0, 816, 125, 30);

  textAlign(LEFT, CENTER);
  textFont(brandFont2);
  textSize(28);
  fill(c.flipped ? "#F3EAE5" : "#796159");

  text(c.flipped ? c.back : c.front, 60, 62.5);

  pop();
}

// Create card
function createCard(x, y, front, back) {
  return {
    x,
    y,
    w: 816,
    h: 125,
    flipped: false,
    front,
    back
  };
}

// Click to flip
function mousePressed() {
  for (let c of cards) {
    if (
      mouseX > c.x &&
      mouseX < c.x + c.w &&
      mouseY > c.y &&
      mouseY < c.y + c.h
    ) {
      c.flipped = !c.flipped;
    }
  }
}

//spacebar to reset flip cards on page 3 (and move to page 4)
function keyPressed() {
  if (key === ' ') {
    if (page === 2) {
      page = 3;

      // Reset flipped state of cards when moving to page 3
      for (let c of cards) {
        c.flipped = false;
      }
    }
    return false;
  }
}

// Resize
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  if (startBtn) {
    startBtn.position(width / 2 - 115, 95 + 245);
  }
}

// Pages 4–8 placeholders
function drawPage4() { background("#F3EAE5"); }
function drawPage5() { background("#F3EAE5"); }
function drawPage6() { background("#F3EAE5"); }
function drawPage7() { background("#F3EAE5"); }
function drawPage8() { background("#F3EAE5"); }