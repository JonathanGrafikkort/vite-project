export default class GameObject {
    constructor(x, y, width, height, color, game) {
      this.game = game
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.color = color
    }
  
    update(deltaTime) {
      
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }