export default class GameObject {
    constructor(x, y, width, height, color, game) {
      this.game = game
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.color = color
      this.currentSpeed = 0
      this.game = game
      this.direction = 1
    }
  
    update(deltaTime) {
      this.x = this.x + this.game / 1000 * deltaTime * this.direction
      if (this.x > this.game.width - this.width) this.direction = -1
      if (this.x < 0) this.direction = 1
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }