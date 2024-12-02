import GameObject from "./GameObject.js"
import Input from './Input'
import Player from './Player'
import Background from "./Background.js"
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.x = 0
    this.input = new Input(this)
    this.player = new Player(1, 1, 25, 25, "green", this)
    this.background = new Background(this)
  }

  update(deltaTime) {
    this.player.update(deltaTime)
  }

  draw(ctx) {
    this.background.draw(ctx)
    this.player.draw(ctx)
  }
}