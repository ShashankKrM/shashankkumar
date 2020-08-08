cosnt canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray;

//get mouse position 

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80);

}

window.addEventListener('mousemove', 

function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    }
);

//create particle 
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = firectionY;
        this.color = color;
        this.size = size;
    }
    //method to draw individual particle 
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#8C5523';
        ctx.fill();

    }

    //check the particle position, mouse positon, move the particle, draw the particle
    update() {
        //check if particle is still within the canvas
        if(this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if(this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Check for the collision detection
        
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if(distance < mouse.radius + this.size) {
            if(mouse.x  < this.x && this.x < canvas.width - this.size*10) {
                this.x += 10;
            }
            if(mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if(mouse.y < this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
            if(mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
        }
        this.x = this.directionX;
        this.y = this.directionY;
        //draw particle 
        this.draw();
    }    
}
//create particle array
function init () {
    particlesArray = [];
    let numberOfParticle = (canvas.height * canvas.width)/9000;
    for(let i = 0; i < numberOfParticle, i++  {
        let size = (Math.random() * 5) +  1,
        let x = (Math.random () *((innerWidth - size * 2) - (size * 2)) + size * 2),
        let y = (Math.random () *((innerWidth - size * 2) - (size * 2)) + size * 2),
        let directionX  = (Math.randow() *5) -2.5;
        let directionY  = (Math.randow() *5) -2.5;
        let color = '#8C5523',
        
    })
}