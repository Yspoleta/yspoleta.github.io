/* TYPEWRITER */
const text = "Junior QA Engineer · Manual Testing · Automation Testing";
let index = 0;
const speed = 60;
const target = document.getElementById("typewriter");

function typeWriter() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

/* SPARKLES */
const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: null, y: null };
let particles = [];

window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  for (let i = 0; i < 3; i++) {
    particles.push(new Particle());
  }
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Particle {
  constructor() {
    this.x = mouse.x + (Math.random() - 0.5) * 30;
    this.y = mouse.y + (Math.random() - 0.5) * 30;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 3;
    this.speedY = (Math.random() - 0.5) * 3;
    this.life = 60;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
  }

  draw() {
    ctx.fillStyle = "rgba(80, 170, 255, 0.85)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.life > 0);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();
