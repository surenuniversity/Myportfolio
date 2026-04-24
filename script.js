// 🔥 HAMBURGER MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.onclick = () => {
nav.classList.toggle("active");
};

// ⚡ TYPING EFFECT
const text = ["Embedded Engineer", "IoT Developer", "Hardware Designer"];
let i=0,j=0,current="",isDeleting=false;

function type(){
current = text[i];
document.getElementById("typing").textContent = current.substring(0,j);

if(!isDeleting && j<current.length){
j++;
setTimeout(type,100);
}
else if(isDeleting && j>0){
j--;
setTimeout(type,50);
}
else{
isDeleting = !isDeleting;
if(!isDeleting) i = (i+1)%text.length;
setTimeout(type,1000);
}
}
type();

// 🌌 PARTICLE BACKGROUND
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

let particles=[];
for(let i=0;i<80;i++){
particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,dx:(Math.random()-0.5),dy:(Math.random()-0.5)});
}

function animate(){
ctx.fillStyle="rgba(0,0,0,0.3)";
ctx.fillRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#00a8ff";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;
});

requestAnimationFrame(animate);
}
animate();
