export default class Layer {
    constructor(game, width, height, speed, image, x, y) {
      this.game = game
      this.width = width
      this.height = height
      this.image = image
      this.x = x
      this.y = y
    }
  
    update(deltaTime) {
      if (this.x <= -this.width) {
        this.x = 0
      }
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
      ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
    }
  }