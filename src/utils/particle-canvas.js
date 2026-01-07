
export class ParticleSystem {
    constructor(canvas, container) {
        this.canvas = canvas;
        this.container = container;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.animationFrame = null;
        this.mouse = { x: null, y: null, radius: 150 };
    }

    init() {
        this.resize();
        this.createParticles();
        window.addEventListener('resize', this.resize.bind(this));
    }

    resize() {
        if (!this.container || !this.canvas) return;
        this.width = this.canvas.width = this.container.offsetWidth;
        this.height = this.canvas.height = this.container.offsetHeight;
        this.createParticles(); // Re-init particles on resize to fill screen or maintain density
    }

    createParticles() {
        this.particles = [];
        // Adjust particle count based on area if desired, or keep fixed
        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new Particle(this.width, this.height));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.particles.forEach(p => {
            p.update(this.width, this.height, this.mouse);
            p.draw(this.ctx);
        });
        this.animationFrame = requestAnimationFrame(this.animate.bind(this));
    }

    stop() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        window.removeEventListener('resize', this.resize.bind(this));
    }

    updateMouse(x, y) {
        this.mouse.x = x;
        this.mouse.y = y;
    }
}

class Particle {
    constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = 'rgba(255, 255, 255, 0.5)';
    }

    update(width, height, mouse) {
        // Movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        if (mouse.x != null && mouse.y != null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                this.x -= dx / 20;
                this.y -= dy / 20;
            }
        }

        // Screen wrap
        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
