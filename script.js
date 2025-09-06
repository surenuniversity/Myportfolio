// Hero Canvas Spark Animation
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const colors = ['#00a8ff','#fbc531','#9c88ff'];
for(let i=0;i<100;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2+1,
        dx:(Math.random()-0.5)*1.5,
        dy:(Math.random()-0.5)*1.5,
        color: colors[Math.floor(Math.random()*colors.length)]
    });
}

function animate(){
    ctx.fillStyle='rgba(17,17,17,0.4)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(let p of particles){
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=p.color;
        ctx.fill();

        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0 || p.x>canvas.width) p.dx*=-1;
        if(p.y<0 || p.y>canvas.height) p.dy*=-1;
    }

    requestAnimationFrame(animate);
}
animate();
