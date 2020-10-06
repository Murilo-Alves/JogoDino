const dino = document.querySelector(".dino");
const fundo = document.querySelector(".fundo");

let isjump = false;
let position = 0;

function spaceUp(event) {
  if (event.keyCode === 32) {
    if (!isjump) {
      pulo();
    }
  }
}

function pulo() {
  isjump = true;
  let up = setInterval(() => {
    if (position >= 150) {
      clearInterval(up);
      let down = setInterval(() => {
        if (position <= 0) {
          clearInterval(down);
          isjump = false;
        } else {
          position -= 20;
          dino.style.bottom = position + "px";
        }
      }, 20);
    } else {
      position += 20;
      dino.style.bottom = position + "px";
    }
  }, 20);
}

function createCactus() {
  const cactus = document.createElement("div");
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  fundo.appendChild(cactus);

  let leftInter = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInter);
      fundo.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      clearInterval(leftInter);
      document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);
  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener("keyup", spaceUp);
