import GameObject from "./GameObject.js"
import Input from './Input'
import Player from './Player'
import Background from "./Background.js"
import Dialogue from './Text.js'
import Button from "./Button.js"
import SceneMangar from './SceneMangar'

export default class Game {
  constructor(canvas) {
    this.canvas = canvas
    this.width = canvas.width
    this.height = canvas.height
    this.x = 0
    this.SceneMangar = new SceneMangar(this)
    this.input = new Input(this)
    this.player = new Player(1, 1, 25, 25, "green", this)
    this.background = new Background(this)
    this.fucktard = new Background(this)
    this.Dialogue = new Dialogue(this)
    this.buttons = new Button(this, this.SceneMangar, this.background)
    this.Dialogue.create("where can the horizon lie when a nation hides it's organic minds in a cellar, dark and grim, they must be very dim. aaaaaaaaaaaaaaa a a a a aaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    this.buttons.create()
    
  }


  update(deltaTime) {
    this.player.update(deltaTime)

  }

  draw(ctx) {
    this.background.draw(ctx)
    this.player.draw(ctx)


  }
}