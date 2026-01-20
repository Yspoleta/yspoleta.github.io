// ================== TYPEWRITER ==================
const typewriterText = "Junior QA Engineer · Manual Testing · Automation Testing";
const typewriterEl = document.getElementById("typewriter");
let idx = 0;

function typeWriter() {
  if (idx < typewriterText.length) {
    typewriterEl.innerHTML += typewriterText.charAt(idx);
    idx++;
    setTimeout(typeWriter, 90);
  }
}
typeWriter();

// ================== SPARKLES ==================
const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparkles = [];

class Sparkle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 1.5;
    this.speedY = (Math.random() - 0.5) * 1.5;
    this.color = "rgba(0,180,255,0.8)";
    this.life = 100;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  sparkles.forEach((s, i) => {
    s.update();
    s.draw();
    if(s.life <= 0) sparkles.splice(i,1);
  });
  requestAnimationFrame(animate);
}
animate();

canvas.addEventListener("mousemove", e => {
  for(let i=0;i<3;i++){
    sparkles.push(new Sparkle(e.clientX, e.clientY));
  }
});

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
