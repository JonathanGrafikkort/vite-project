import GameObject from "./GameObject.js"
import Input from './Input'
import Player from './Player'
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.x = 0
    this.input = new Input(this)
    this.player = new Player(0, 0, 50, 50, "green", this)
  }

  update(deltaTime) {
    this.player.update(deltaTime)
  }

  draw(ctx) {
    this.player.draw(ctx)
  }
}