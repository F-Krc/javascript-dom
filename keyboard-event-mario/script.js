let mario = document.getElementById('mario');
let imgMario = document.querySelector('img');

mario.style.display = 'inline-block';
mario.style.position = 'relative';
mario.style.borderBottom = '4px dashed green';

const stopMario = () => {
  imgMario.src = './assets/mario-stand.gif';
};

const moveMario = () => {
  if (imgMario.src !== './assets/mario-walk.gif') {
    imgMario.src = './assets/mario-walk.gif';
  }
};

let countX = 0;
let countY = 0;

stopMario();

document.addEventListener('keydown', (e) => {
  moveMario();
  if (e.key === 'ArrowRight') {
    imgMario.style.transform = 'rotateY(0deg)';
    countX += 10;
    mario.style.transform = `translate(${countX}px, ${countY}px)`;
  } else if (e.key === 'ArrowLeft') {
    imgMario.style.transform = 'rotateY(-180deg)';
    if (countX === 0) {
      mario.style.transform = `translate(${countX}px, ${countY}px)`;
    } else {
      countX -= 10;
      mario.style.transform = `translate(${countX}px, ${countY}px)`;
    }
  } else if (e.key === 'ArrowDown') {
    countY += 10;
    mario.style.transform = `translate(${countX}px, ${countY}px)`;
  } else if (e.key === 'ArrowUp') {
    if (countY === 0) {
      mario.style.transform = `translate(${countX}px, ${countY}px)`;
    } else {
      countY -= 10;
      mario.style.transform = `translate(${countX}px, ${countY}px)`;
    }
  }
});

document.addEventListener('keyup', stopMario);



// // Task 1:
// const mario = document.querySelector("#mario");
// // Task 2:
// const imgMario = document.querySelector("#mario>img");
// imgMario.src = "./assets/mario-stand.gif";

// // Task 3:
// function stopMario() {
//   imgMario.src = "./assets/mario-stand.gif";
// }

// // Task 4:
// mario.style.display = "inline-block";
// mario.style.position = "relative";
// function moveMario(event) {
//   const currentLeft = parseInt(mario.style.left) || 0;
//   if (!imgMario.src.includes("mario-walk.gif")) {
//     imgMario.src = "./assets/mario-walk.gif";
//   }

//   if (event.key === "ArrowRight") {
//     const newLeft = currentLeft + 10;
//     mario.style.left = newLeft + "px";
//     mario.style.transform = "rotateY(0)";
//   } else if (event.key === "ArrowLeft") {
//     const newLeft = currentLeft - 10;
//     mario.style.left = newLeft + "px";
//     mario.style.transform = "rotateY(-180deg)";
//   }
// }

// // Task 5:
// document.addEventListener("keydown", moveMario);
// document.addEventListener("keyup", stopMario);