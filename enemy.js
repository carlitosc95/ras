class Enemy {
    constructor(x, y, context, canvas) {
        this.x = x;
        this.y = y;
        this.w = 10;
        this.h = 10;
        this.context = context;
        this.canvas = canvas;
    }
    update() {
        this.x -= 10;
        if (this.x <= 0) {
            this.x = this.canvas.width;
        }
    }
    draw() {
        this.context.clearRect(this.x, this.y, this.w, this.h);
        this.context.fillStyle = "blue";
        this.context.fillRect(this.x, this.y, this.w, this.h);
    }
}
