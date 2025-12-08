const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const overlay = document.getElementById("overlay");
const finalScoreEI = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");

function fitCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

fitCanvas();
window.addEventListener('resize',fitCanvas);

// Game state
let fruits = [];
let slices = [];
let score = 0;
let gameOver = false;
let spawnintervalid = null;

const fruitImages = [
    "assets/fruits1.png",
    "assets/fruits2.png",
    "assets/fruits3.png"
];

const bombImg = new Image ();
bombImg.src = "assets/bomb.png";

const splashImg = new Image ();
splashImg.src = "assets/splash.png";

// create item
function randomItem() {
    const itemType = Math.random() < 0.15 ? "bomb" : "fruit";
    let img = new Image();

    if (itemType === "bomb") {
        img = bombImg;
    } else {
        img.src = fruitImages[Math.floor(Math.random() * fruitImages.length)];
    }

    return {
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        w: 70,
        h: 70,
        vx: (Math.random() - 0.5) * 6,
        vy: -(8 + Math.random() * 5),
        img: img,
        type: itemType
    };
}


function spawnItem(){
    if (!gameOver)
        fruits.push(randomItem());
}

function startSpawning(){
    if (spawnintervalid)
        clearInterval(spawnintervalid);
    spawnintervalid = setInterval(spawnItem, 800);
}

function stopSpawning() {
    if (spawnintervalid) {
        clearInterval(spawnintervalid);
        spawnintervalid = null;
    }
}

// game loop
function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if (gameOver) {
        drawScore();
        return;
    }

    // draw items
    for (let i = fruits.length - 1; i>=0; i--){
        const obj = fruits[i];
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.vy += 0.2;

        ctx.drawImage(obj.img, obj.x, obj.y, obj.w, obj.h);

        if (obj.y > canvas.height + 100){
            fruits.splice(i,1);
        }
    }

    //draw slice
    for (let i = slices.length - 1; i>= 0; i--){
        const s = slices[i];
        ctx.globalAlpha = s.alpha;
        ctx.drawImage(s.img, s.x, s.y, 80, 80);
        ctx.globalAlpha = 1;
        s.alpha -= 0.02;
        if (s.alpha <= 0) slices.splice(i, 1);
    }

    drawScore();
    requestAnimationFrame(update);
}

function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "35px Arial";
    ctx.textAlign = "left";
    ctx.fillText("Score :" + score, 20, 50);
}

//staet gamehjbk
function startGame(){
    fruits = [];
    slices = [];
    score = 0;
    gameOver = false;
    overlay.classList.add('hidden');
    startSpawning();
    requestAnimationFrame(update);
}

canvas.addEventListener("pointermove", (e) => {
    if (gameOver) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for (let i = fruits.length - 1; i>= 0; i--) {
        const obj = fruits[i];
        if (
            mouseX > obj.x &&
            mouseX < obj.x + obj.w &&
            mouseY > obj.y &&
            mouseY < obj.y + obj.h
        ){
            if (obj.type === "bomb") {
                triggerGameOver();
                return;
            }
            slices.push({ x: obj.x, y: obj.y, img:splashImg, alpha:1 });
            fruits.splice(i,1);
            score++;
        }
    }
});

overlay.addEventListener("click", () => {
    if (gameOver) {
        startGame();
    }
});

restartBtn.addEventListener("click",(ev) => {
    ev.stopPropagation();
    if (gameOver) startGame();
});

function triggerGameOver() {
    gameOver= true;
    stopSpawning();
    finalScoreEI.textContent = `Score: ${score}`;
    overlay.classList.remove('hidden');
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "70px Arial";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 50);
    ctx.font = "40px Arial";
    ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 10);
    ctx.font = "28px Arial";
    ctx.fillText("click anywhere to restart", canvas.width / 2, canvas.height / 2 + 70);
}

startGame();