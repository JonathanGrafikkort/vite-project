import GameObject from "./GameObject.js"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.x = 0
    this.gameObjects = [
      new GameObject(this, 0, 100, 20, 20, '#f00', 100),
      new GameObject(this, 0, 200, 20, 20, '#0f0', 200),
      new GameObject(this, 0, 300, 20, 20, '#00f', 300)
    ]
  }

  update(deltaTime) {
    this.gameObjects.forEach(gameObject => {
      gameObject.update(deltaTime)
    })
    this.x += 0.1
  }

  draw(ctx) {
    ctx.fillStyle = "green"
    ctx.fillRect(this.x, 200, 20, 200)
    this.gameObjects.forEach(gameObject => {
      gameObject.draw(ctx)
    })
  }
}