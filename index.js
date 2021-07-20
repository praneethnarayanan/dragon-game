score = 0;
cross = true;
audio=new Audio('music.mp3');
b=new Audio('gameover.mp3')
setTimeout(()=>{audio.play();},1000);

document.onkeydown = function (e) {
  console.log("key code", e.key);
  if (e.key == 'ArrowUp') {
    dino = document.querySelector('.dino');
    dino.classList.add('animatedino');
    setTimeout(() => {
      dino.classList.remove('animatedino')
    }, 700)
    
  }
  if (e.key == 'ArrowRight') {
    dino = document.querySelector('.dino');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dx + 112 + "px";
   
   
  }
  if (e.key == 'ArrowLeft') {
    dino = document.querySelector('.dino');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dx - 112) + "px";
   
  }
}
setInterval(() => {
  dino = document.querySelector('.dino');
  gameover = document.querySelector('.gameover');
  obstacle = document.querySelector('.obstacle');
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));
  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  console.log(offsetX, offsetY);
  if (offsetX < 73 && offsetY < 52) {
    gameover.style.visibility = "visible";
  
    obstacle.classList.remove('house');
    b.play();
    setTimeout(()=>{
    b.pause();
  audio.pause();
},1000)
// dino.classList.remove('animatedino');
  }

  else if (offsetX < 135 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
      setTimeout(()=>{
        aniDur = parseFloat(window.getComputedStyle(house, null).getPropertyValue('animation-duration'));
      newDur = aniDur - 0.1;
      house.style.animation = newDur + 's';
      },500)
      
  }


}, 100);

function updateScore(score) {

  scoreCount.innerHTML = "Your Score : " + score;
}