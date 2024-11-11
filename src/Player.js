import GameObject from './GameObject'

export default class Player extends GameObject {
    constructor(x, y, width, height, color, game) {
        super(x, y, width, height, color)
        this.game = game
        this.speedX = 0
        this.speedY = 0
        this.maxSpeed = 0.1
    }
    update (deltaTime) {
        if (this.game.input.keys.has("ArrowLeft")){
            this.speedX -= this.maxSpeed
        }
        if (this.game.input.keys.has("ArrowRight")){
            this.speedX += this.maxSpeed
        }
        if (this.game.input.keys.has("ArrowUp")){
            this.speedY -= this.maxSpeed
        }
        if (this.game.input.keys.has("ArrowDown")){
            this.speedY += this.maxSpeed
        }
        this.x += this.speedX
        this.y += this.speedY
    }
}
