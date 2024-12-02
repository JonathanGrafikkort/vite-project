import GameObject from './GameObject'

export default class Player extends GameObject {
    constructor(x, y, width, height, color, game) {
        super(x, y, width, height, color)
        this.game = game

        this.image = new Image()
        this.image.src = "src/Assets/santa neutral.png"

    }
    update (deltaTime) {
        
    }
    draw(ctx) {
        // ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(
            this.image,
            this.x * 0,
            this.y * 0,
            this.width * 5,
            this.height * 5,
        )
    }
}
