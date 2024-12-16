import Layer from './Layer'

export default class Background {
  constructor(game) {
    this.game = game
    this.width = 854
    this.height = 480

    this.fg = new Image()
    this.fg.src = "src/Assets/cafe background.png"
    this.fucktard = new Image()
    this.assbiscuit = new Image()
    this.fucktard.src = "src/Assets/dialogue window.png"
    this.assbiscuit.src = "src/Assets/Cafe.png"

    this.bg = this.fg

    this.backgroundLayers = [
        new Layer(this.game, this.width, this.height, 0, this.fg, 0, 0),
        new Layer(this.game, this.width, this.height, 0, this.assbiscuit, 0, 0),
        new Layer(this.game, this.width, 100, 0, this.fucktard, 0, 380),

    ]
  }

  update(deltaTime) {
    this.backgroundLayers.forEach(layer => {
      layer.update(deltaTime)
    })
  }

  draw(ctx) {
    this.backgroundLayers.forEach(layer => {
      layer.draw(ctx)
    })
  }

  Change(scene){
    if (scene == 1){
      this.bg = this.fg
    }
    else if (scene == 2){
      this.bg = this.assbiscuit
    }
    this.backgroundLayers = [
      new Layer(this.game, this.width, this.height, 0, this.bg, 0, 0),
      new Layer(this.game, this.width, 100, 0, this.fucktard, 0, 380),
  ]
  }

}