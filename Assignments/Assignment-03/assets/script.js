const platformImg = new Image();
platformImg.src = "./assets/img/Base.png";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
canvas.width = 360;
canvas.height = 576;

//DOM elements
const startPage = document.getElementById("start-page");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("resetBtn");
const doodlerChoice = document.getElementById("doodler-choice");
const doodletteChoice = document.getElementById("doodlette-choice");

//joke DOM elements
const jokeOverlay = document.getElementById("joke-overlay");
const jokeText = document.getElementById("joke-text");

//header canvas
const headerDiv = document.createElement("div");
headerDiv.style.display = "none";
headerDiv.style.textAlign = "center";
headerDiv.style.marginBottom = "10px";
document.body.insertBefore(headerDiv, canvas);

const gameTitle = document.createElement("h2");
gameTitle.textContent = "Doodle Jump";
headerDiv.appendChild(gameTitle);

const charImg = document.createElement("img");
charImg.style.width = "50px";
charImg.style.height = "50px";
charImg.style.verticalAlign = "middle";
charImg.style.marginRight = "10px";
headerDiv.appendChild(charImg);

const charName = document.createElement("span");
headerDiv.appendChild(charName);

//sounds
const jumpSound = new Audio("./assets/sound/jump.wav");
const fallSound = new Audio("./assets/sound/falling-sound-arcade.mp3");
const clickSound = new Audio("./assets/sound/click.mp3");

//game variables
let doodler = {
    x: 150,
    y: 400,
    width: 46,
    height: 46,
    img: null
};

let velocityX = 0;
let velocityY = 0;
const gravity = 0.25;

let platforms = [];
const platformWidth = 60;
const platformHeight = 18;
const totalPlatforms = 11;

let score = 0;
let gameOver = false;
let gameRunning = false;

let selectedCharacter = "doodler";

//doodler & doodlette imgs
const doodlerRightImg = new Image();
const doodlerLeftImg = new Image();
const doodletteRightImg = new Image();
const doodletteLeftImg = new Image();

doodlerRightImg.src = "./assets/img/doodler-right.png";
doodlerLeftImg.src = "./assets/img/doodler-left.png";
doodletteRightImg.src = "./assets/img/doodlette-right.png";
doodletteLeftImg.src = "./assets/img/doodlette-left.png";

// ----------API--------
const CHUCK_API_ENDPOINT = "https://api.chucknorris.io/jokes/random";
let jokeDisplayTimeoutId = null; //pop-up timer of the fact/joke 5s

async function fetchChuckFact() {
    jokeText.textContent = "Chuck Norris fact loading ...";
    jokeOverlay.style.display = "block";

    try {
        const response = await fetch(CHUCK_API_ENDPOINT);
        if (!response.ok) {
            throw new Error (`API error: ${response.status}`);
        }
        const data = await response.json();
        const chuckJoke = data.value;

        jokeText.textContent = chuckJoke; //display joke

        //clear previous timer & set new one to hide overlay
        if (jokeDisplayTimeoutId) clearTimeout(jokeDisplayTimeoutId);
        jokeDisplayTimeoutId = setTimeout(() => {
            jokeOverlay.style.display = "none"; //hide html element
        }, 5000); //timer set for 5s --> einblenden of the joke

    } catch(error) {
        console.error("Error fetching Chuck Fact", error);
        jokeText.textContent = "Chuck Norris broke the internet. No joke available."
    }
}


//--------- character selection ---------
[doodlerChoice, doodletteChoice].forEach(choice => {
    choice.addEventListener("click", () => {
        doodlerChoice.classList.remove("selected");
        doodletteChoice.classList.remove("selected");
        choice.classList.add("selected");
        selectedCharacter = choice.dataset.character;
    });
});

// --------- start game ---------
startBtn.addEventListener("click", () => {
    clickSound.play().catch(() => {});
    startPage.style.display = "none";
    canvas.style.display = "block";
    resetBtn.style.display = "inline-block";
    headerDiv.style.display = "block";

    if (jokeDisplayTimeoutId) {         //joke hidden on restart
        clearTimeout(jokeDisplayTimeoutId);
        jokeDisplayTimeoutId = null;
    }
    jokeOverlay.style.display = 'none'; // joke is hidden


    if (selectedCharacter === "doodler") {
        doodler.img = doodlerRightImg;
        charImg.src = "./assets/img/doodler-right.png";
        charName.textContent = "Doodler";
        document.body.style.backgroundColor = "#d9f1caff";
    } else {
        doodler.img = doodletteRightImg;
        charImg.src = "./assets/img/doodlette-right.png";
        charName.textContent = "Doodlette";
        document.body.style.backgroundColor = "#fce3e8ff";
    }

    doodler.x = canvas.width / 2 - doodler.width / 2;
    doodler.y = canvas.height - 100;
    velocityX = 0;
    velocityY = -5;
    score = 0;
    gameOver = false;
    gameRunning = true;

    generatePlatforms();
    requestAnimationFrame(update);
});

// --------- reset game ---------
resetBtn.addEventListener("click", () => {
    clickSound.play().catch(() => {});
    resetBtn.style.display = "none";
    startPage.style.display = "flex";
    canvas.style.display = "none";
    headerDiv.style.display = "none";
    gameRunning = false;
    gameOver = false;
    platforms = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// --------- generate platforms ---------
function generatePlatforms() {
    platforms = [];

    // first platform
    platforms.push({
        x: canvas.width / 2 - platformWidth / 2,
        y: canvas.height - 50,
        width: platformWidth,
        height: platformHeight
    });

    for (let i = 1; i < totalPlatforms; i++) {
        platforms.push({
            x: Math.random() * (canvas.width - platformWidth),
            y: canvas.height - 50 - i * 50,
            width: platformWidth,
            height: platformHeight
        });
    }
}

// --------- collision ---------
function detectCollision(player, platform) {
    return (
        player.x < platform.x + platform.width &&
        player.x + player.width > platform.x &&
        player.y + player.height < platform.y + platform.height + 10 &&
        player.y + player.height > platform.y &&
        velocityY > 0
    );
}

// --------- game loop ---------
function update() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //move doodler
    doodler.x += velocityX;
    if (doodler.x > canvas.width) doodler.x = -doodler.width;
    if (doodler.x + doodler.width < 0) doodler.x = canvas.width;

    //vertical movement & gravity
    velocityY += gravity;
    doodler.y += velocityY;

    //checking platform collision 
    platforms.forEach(platform => {
        if (detectCollision(doodler, platform)) {
            velocityY = -7; // Jump power
            jumpSound.play().catch(() => {});
        }
    });

    //move platforms if doodler goes up --> screen Scolling logic
    if (doodler.y < canvas.height / 2) {
        const diff = canvas.height / 2 - doodler.y;
        doodler.y = canvas.height / 2;
        platforms.forEach(platform => {
            platform.y += diff;
        });
        score += Math.floor(diff);
    }

    //draw doodler
    ctx.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);


    //draw platforms
    platforms.forEach(platform => {
        ctx.drawImage(platformImg, platform.x, platform.y, platform.width, platform.height);
    });


    //remove platforms off screen & add new
    platforms = platforms.filter(p => p.y < canvas.height);
    while (platforms.length < totalPlatforms) {
        platforms.push({
            x: Math.random() * (canvas.width - platformWidth),
            y: -platformHeight,
            width: platformWidth,
            height: platformHeight
        });
    }

    //game over
    if (doodler.y > canvas.height) {
        if (!gameOver) {
            gameOver = true;
            gameRunning = false;
            fallSound.play().catch(() => {});
            fetchChuckFact(); //API calles joke - being displayed in HTML only once
        }
        ctx.fillStyle = "black";
        ctx.font = "16px sans-serif";
        ctx.fillText("GAME OVER! Press SPACE to restart", 40, canvas.height / 2);
    }

    //scores
    ctx.fillStyle = "black";
    ctx.font = "16px sans-serif";
    ctx.fillText("Score: " + score, 5, 20);

    requestAnimationFrame(update);
}

// --------- key-pressed events ---------
document.addEventListener("keydown", e => {
    if (gameOver && e.code === "Space") {
        //clear timer & hide joke on space-bar restart
        if (jokeDisplayTimeoutId) {
            clearTimeout(jokeDisplayTimeoutId);
            jokeDisplayTimeoutId = null;
        }
        jokeOverlay.style.display = 'none'; //hides HTML element immediately
        
        startBtn.click();
    }
    if (e.code === "ArrowRight" || e.code === "KeyD") {
        velocityX = 4;
        doodler.img = selectedCharacter === "doodler" ? doodlerRightImg : doodletteRightImg;
    }
    if (e.code === "ArrowLeft" || e.code === "KeyA") {
        velocityX = -4;
        doodler.img = selectedCharacter === "doodler" ? doodlerLeftImg : doodletteLeftImg;
    }
});

document.addEventListener("keyup", e => {
    if (["ArrowLeft", "ArrowRight", "KeyA", "KeyD"].includes(e.code)) {
        velocityX = 0;
    }
});