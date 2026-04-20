// fonts and image assets
let brandFont1; // Rosarivo
let brandFont2; // Radley
let brandFont2Italic; // Radley-Italic.ttf
let ampImg; // BB_logo.png
let stampImg; // Result page stamp (outer glow, inner softness, vital flow)

// Quiz system
let cards = []; // stores all quiz cards (answer choices)

// Buttons
let startBtn; // start quiz button
let outerBtn; // outer glow button
let innerBtn; // inner softness button
let vitalBtn; // vital flow button

// Page system
let page = 1; // controls which page is being shown (page 1)

// Controls whether the hint message (small message about space bar) is shown
let hintMessage = "";
let showHint = false;
let hintTimer = 0;

// load assets before sketch starts
function preload() {
  brandFont1 = loadFont("Rosarivo-Regular.ttf");
  brandFont2 = loadFont("Radley-Regular.ttf");
  brandFont2Italic = loadFont("Radley-Italic.ttf");
  ampImg = loadImage("BB_logo.png");
  stampImg = loadImage("BB_stamp.png");
}

// Runs once at start
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Start Quiz Button
  startBtn = createButton("Start Quiz");

  // Start Quiz Button styling
  startBtn.style("background-color", "#DDBDB6");
  startBtn.style("color", "#78615A");
  startBtn.style("font-family", "Radley");
  startBtn.style("font-size", "36px");
  startBtn.style("border", "none");
  startBtn.style("border-radius", "30px");
  startBtn.style("padding", "24px 39px");

  // Result buttons
  outerBtn = createButton("Outer Glow");
  innerBtn = createButton("Inner Softness");
  vitalBtn = createButton("Vital Flow");

  // Reusable function to style result buttons
  function styleResultButton(btn) {
    btn.style("background-color", "#DDBDB6");
    btn.style("color", "#78615A");
    btn.style("font-family", "Radley");
    btn.style("font-size", "30px");
    btn.style("border", "none");
    btn.style("border-radius", "25px");
  }

  // style result buttons
  styleResultButton(outerBtn);
  styleResultButton(innerBtn);
  styleResultButton(vitalBtn);

  // make all buttons same size
  let btnWidth = 260;
  let btnHeight = 80;

  // make all buttons equal size
  outerBtn.style("width", btnWidth + "px");
  innerBtn.style("width", btnWidth + "px");
  vitalBtn.style("width", btnWidth + "px");

  outerBtn.style("height", btnHeight + "px");
  innerBtn.style("height", btnHeight + "px");
  vitalBtn.style("height", btnHeight + "px");

  // Center text inside buttons (horizontally and vertically)
  outerBtn.style("text-align", "center");
  innerBtn.style("text-align", "center");
  vitalBtn.style("text-align", "center");

  outerBtn.style("line-height", btnHeight + "px");
  innerBtn.style("line-height", btnHeight + "px");
  vitalBtn.style("line-height", btnHeight + "px");

  // Hide result buttons initially
  outerBtn.hide();
  innerBtn.hide();
  vitalBtn.hide();

  // Result Button Interactions 
  outerBtn.mousePressed(() => {
    page = 10;
  });
  innerBtn.mousePressed(() => {
    page = 11;
  });
  vitalBtn.mousePressed(() => {
    page = 12;
  });

  // Start button interaction
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

// Draw loop runs continuously
function draw() {
  background("#F3EAE5");

  // Page navigation system
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
  } else if (page === 9) {
    drawPage9();
  } else if (page === 10) {
    drawPage10();
  } else if (page === 11) {
    drawPage11();
  } else if (page === 12) {
   drawPage12();
}

// Hint system (right side of quiz area)
if (showHint && page >= 3 && page <= 8) {

  fill("#796159");
  textFont(brandFont2);
  textSize(16);
  textAlign(LEFT, TOP);

  // small paragraph box position (right side of screen)
  text(
  "Hey! Need to move on?\nPress the space bar to\ncontinue through the quiz.",
  width - 280,  // pushes it to the right side
  height - 200    // vertically centered area near cards/buttons
  );

  // Timer controls how long the message stays visible
  hintTimer++;
   
  // Hide the hint after 3 second (180 frames at 60 fps)
  if (hintTimer > 180) {
  showHint = false; // turn message off
  hintTimer = 0; // reset timer for next time
  }
}
}

// Page 1: Start page
function drawPage1() {
  fill("#796159");
  noStroke();
  rect(0, height - 100, width, 100);

  let headerY = 75;
 
  // Title text
  textFont(brandFont2);
  textSize(30);
  fill("#796159");
  textAlign(CENTER, TOP);
  text("Radiance Quiz", width / 2, headerY);

  // Main question text
  textFont(brandFont1);
  textSize(40);
  text("Which type of radiance are you?", width / 2, headerY + 100);

  // Position start button
  startBtn.position(width / 2 - 115, headerY + 270);

  // Footer branding
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

  let yOffset = 60; // shift things vertically (up or down on the screen)

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
    "Before you begin the quiz, grab a notecard and a pencil, this will be a key interactive element to help you engage with your results. As you navigate through the quiz, keep a running tally for each answer. Be sure to track each radiance type separately: Outer Glow, Inner Softness, and Vital Flow. Unless a page includes buttons or specific navigation instructions, press the space bar to move to the next page for the remainder of the quiz. At the end of the quiz, you’ll receive instructions on how to calculate your final result and discover your radiance type.",
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
  textSize(35);
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

// Page 4: Quiz question 2
function drawPage4() {
  background("#F3EAE5");

  let yOffset = 60;

  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(35);
  fill("#796159");
  text("You find a welcome gift waiting for you...", 270, 100 + yOffset);

  let cardOffsetY = 70;

  for (let c of cards) {
    push();
    translate(0, cardOffsetY);
    drawCard(c);
    pop();
  }
}

// Page 5: Quiz question 3
function drawPage5() {
  background("#F3EAE5");

  let yOffset = 60;

  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(35);
  fill("#796159");
  text("You have an hour with no schedule, what will you do?", 270, 100 + yOffset);

  let cardOffsetY = 70;

  for (let c of cards) {
    push();
    translate(0, cardOffsetY);
    drawCard(c);
    pop();
  }
}
// Page 6: Quiz question 4
function drawPage6() {
  background("#F3EAE5");

  let yOffset = 60;

  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(35);
  fill("#796159");
  text("You enjoy a poolside movie night with the girls", 270, 100 + yOffset);

  let cardOffsetY = 70;

  for (let c of cards) {
    push();
    translate(0, cardOffsetY);
    drawCard(c);
    pop();
  }
}

// Page 7: Quiz question 5
function drawPage7() {
  background("#F3EAE5");

  let yOffset = 60;

  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(35);
  fill("#796159");
  text("You enjoy a morning drink on the patio, what do you choose?", 270, 100 + yOffset);

  let cardOffsetY = 70;

  for (let c of cards) {
    push();
    translate(0, cardOffsetY);
    drawCard(c);
    pop();
  }
}

// Page 8: Quiz question 6
function drawPage8() {
  background("#F3EAE5");

  let yOffset = 60;

  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(35);
  fill("#796159");
  text("What does your closet look like lately?", 270, 100 + yOffset);

  let cardOffsetY = 70;

  for (let c of cards) {
    push();
    translate(0, cardOffsetY);
    drawCard(c);
    pop();
  }
}

// Page 9: End Instructions 
function drawPage9() {
  background("#F3EAE5");

  let yOffset = 20;

  fill("#796159");
  noStroke();
  rect(0, height - 100, width, 100);

  textAlign(LEFT, CENTER);
  textFont(brandFont2);
  textSize(30);
  text("Time to Tally!", 400, 100 + yOffset);

  textFont(brandFont1);
  textSize(40);
  text("Which type of radiance are you?", 400, 175 + yOffset);

  textFont(brandFont2);
  textSize(24);

  text(
    "Review your quiz answers and tally each radiance type separately: Outer Glow, Inner Softness, and Vital Flow. Once you’ve counted your totals, identify which type you selected most often. Finally, click on the radiance type with the highest tally to reveal your full results and learn more about your unique glow!",
    400,
    340 + yOffset,
    620
  );

// show result buttons
outerBtn.show();
innerBtn.show();
vitalBtn.show();

// centered layout
let y = 535; // vertical placement of buttons
let gap = 300; // adjust spacing

// center the whole group
outerBtn.position(width / 2 - gap - 130, y);
innerBtn.position(width / 2 - 130, y);
vitalBtn.position(width / 2 + gap - 130, y);
}

// Page 10: Outer Glow Results Page
function drawPage10() {
  background("#F3EAE5");

  let yOffset = 110; // shift things vertically (up and down the screen)

  // center it and let overflow get cut off
  imageMode(CENTER);

  // draw full-width banner, centered
  let h = 120; // your banner height
  let scale = h / stampImg.height; // figure out how much we need to scale the image based on its original height
  let newW = stampImg.width * scale; // adjust the width by the same scale so the image keeps its proportions (no stretching)

  // draw the image centered at the top of the canvas with the new width and height
  image(stampImg, width / 2, h / 2, newW, h); 

 // Top stamp image
  imageMode(CORNER);
  image(stampImg, 0, 0, width, 120);
  
  outerBtn.hide();
  innerBtn.hide();
  vitalBtn.hide();

 // Text
  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(40);
  text("You are Outer Glow", 400, 100 + yOffset);

  textFont(brandFont2Italic);
  textSize(30);
  text("Right now your energy is shifting toward deeper presence.", 400, 175 + yOffset);

  textFont(brandFont2);
  textSize(24);
  text(
  "You’re realizing that the way you show up for yourself in the mirror sets the tone for how you show up in the world. This isn’t about meeting a standard; it’s about the quiet, tactile joy of self-adornment.",
  400,
  300 + yOffset,
  630
);

  text(
  "Your retreat focus: The meditative ritual of skincare, scents that match your mood, and wearing your someday pieces today.",
  400,
  435 + yOffset,
  680
);

  textFont(brandFont2Italic);
  text(
  "You’re not performing: You’re practicing the art of being seen.",
  400,
  525 + yOffset,
  630
);
}

// Page 11: Inner Softness Results Page
function drawPage11() {
  background("#F3EAE5");

   let yOffset = 110; // shift things vertically (up and down the screen)

  // center it and let overflow get cut off
  imageMode(CENTER);

  // draw full-width banner, centered
  let h = 120; // your banner height
  let scale = h / stampImg.height; // figure out how much we need to scale the image based on its original height
  let newW = stampImg.width * scale; // adjust the width by the same scale so the image keeps its proportions (no stretching)

  // draw the image centered at the top of the canvas with the new width and height
  image(stampImg, width / 2, h / 2, newW, h); 


  // makes button invisible on page
  outerBtn.hide();
  innerBtn.hide();
  vitalBtn.hide();

  // Text
  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(40);
  text("You are Inner Softness", 400, 100 + yOffset);

  textFont(brandFont2Italic);
  textSize(30);
  text("Right now your energy is asking for quiet restoration.", 400, 175 + yOffset);

  textFont(brandFont2);
  textSize(24);

  text(
  "You’ve been holding a lot mentally, even if nothing dramatic is happening. There’s a quiet kind of weight you carry—subtle, but constant. When you slow down, you return to yourself quickly, like something in you has been waiting for that pause.",
  400,
  320 + yOffset,
  630
);

  text(
  "Your retreat focus: journaling, intentional moments of rest, and early nights that support deep restoration.",
  400,
  470 + yOffset,
  630
);

  textFont(brandFont2Italic);
  text(
  "You’re not behind — you’re resetting",
  400,
  540 + yOffset,
  630
);
}

// Page 12: Vital Flow Results Page
function drawPage12() {
  background("#F3EAE5");

  let yOffset = 110; // shift things vertically (up and down the screen)

  // center it and let overflow get cut off
  imageMode(CENTER);

  // draw full-width banner, centered
  let h = 120; // your banner height
  let scale = h / stampImg.height; // figure out how much we need to scale the image based on its original height
  let newW = stampImg.width * scale; // adjust the width by the same scale so the image keeps its proportions (no stretching)

  // draw the image centered at the top of the canvas with the new width and height
  image(stampImg, width / 2, h / 2, newW, h); 


  // makes button invisible on page
  outerBtn.hide();
  innerBtn.hide();
  vitalBtn.hide();

  // Text
  textAlign(LEFT, CENTER);
  textFont(brandFont1);
  textSize(40);
  text("You are Vital Flow", 400, 100 + yOffset);

  textFont(brandFont2Italic);
  textSize(30);
  text("Right now your energy is craving physical connection.", 400, 175 + yOffset);

  textFont(brandFont2);
  textSize(24);

  text(
  "You need to listen to what your body actually needs rather than what it should do. You’re moving away from depletion and toward a state of high-quality replenishment.",
  400,
  290 + yOffset,
  630
);

  text(
  "Your retreat focus: movement that feels freeing, nourishing your body, and finding ease in effort.",
  400,
  415 + yOffset,
  630
);

  textFont(brandFont2Italic);
  text(
  "You’re not just doing wellness: You’re cultivating your own vitality.",
  400,
  510 + yOffset,
  700
);
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

  // show hint only on quiz pages 3–8
  if (page >= 3 && page <= 8) {
    hintMessage = "Hey! Need to move to the next page? Press the space bar to continue through the quiz!";
    showHint = true;
    hintTimer = 0;
  }

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

//spacebar to reset flip cards and move to next page
function keyPressed() {
  if (key === ' ') {
    if (page === 2) {
      page = 3;

      // Page 3 cards (your original ones)
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

    } else if (page === 3) {
      page = 4;

      // Page 4 cards
      cards = [
        createCard(270, 200,
          "A designer makeup bag filled with your favorite products",
          "Find your Outer Glow"
        ),
        createCard(270, 350,
          "An esthetician curated skin care set",
          "Find your Inner Softness"
        ),
        createCard(270, 500,
          "A giftbox filled with juice shots and healthy snacks",
          "Find your Vital Flow"
        )
      ];

       } else if (page === 4) {
      page = 5;

      // Page 5 cards
      cards = [
        createCard(270, 200,
          "You go shopping with some girls at the retreat boutique",
          "Find your Outer Glow"
        ),
        createCard(270, 350,
          " You go to the spa and get a mani pedi",
          "Find your Inner Softness"
        ),
        createCard(270, 500,
          " You join in on a quick group yoga session",
          "Find your Vital Flow"
        )
      ];

        } else if (page === 5) {
      page = 6;

      // Page 6 cards
      cards = [
        createCard(270, 200,
          " You bring a blanket and make a cute little photo spot",
          "Find your Outer Glow"
        ),
        createCard(270, 350,
          " You watch while doing face masks with the girls",
          "Find your Inner Softness"
        ),
        createCard(270, 500,
          "You make healthy snacks and drinks for everyone",
          "Find your Vital Flow"
        )
      ];

        } else if (page === 6) {
      page = 7;

      // Page 7 cards
      cards = [
        createCard(270, 200,
          "A snickerdoodle latte from the espresso bar",
          "Find your Outer Glow"
        ),
        createCard(270, 350,
          "A lavender matcha latte topped with rose petals",
          "Find your Inner Softness"
        ),
        createCard(270, 500,
          "A refreshing detox smoothie to cleanse your system",
          "Find your Vital Flow"
        )
      ];

        } else if (page === 7) {
      page = 8;

      // Page 8 cards
      cards = [
        createCard(270, 200,
          "Fun pieces filled with unique designs and patterns",
          "Find your Outer Glow"
        ),
        createCard(270, 350,
          " Matching sets and fun leisure wear",
          "Find your Inner Softness"
        ),
        createCard(270, 500,
          "Athletic or cute workout sets",
          "Find your Vital Flow"
        )
      ];

    } else if (page === 8) {
  page = 9;
  cards = [];
}

    // Reset flips every time you change pages
    for (let c of cards) {
      c.flipped = false;
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
