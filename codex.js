function init() {
    const canvas = document.getElementById('oscillogramCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const maxCircles = 7; 
    const maxRadius = Math.min(canvas.width, canvas.height) / 2;
    const speed = 0.1;
    const time = 0;
    return [canvas, ctx, time, maxCircles, maxRadius, speed];    
}

let [canvas, ctx, time, maxCircles, maxRadius, speed] = init();

const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500'];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    for (let i = 0; i < maxCircles; i++) {
        const radius = (i + 1) * (maxRadius / maxCircles) + Math.sin(time + i) * 10; 
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2); 
        ctx.strokeStyle = colors[i % colors.length]; 
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    time += speed;
    requestAnimationFrame(draw);
}


document.getElementById('maxCircles').addEventListener('input', function() {
    maxCircles = parseInt(this.value);
    document.getElementById('circleCount').textContent = maxCircles;
});

document.getElementById('speed').addEventListener('input', function() {
    speed = parseFloat(this.value);
    document.getElementById('speedValue').textContent = speed;
});

requestAnimationFrame(draw);