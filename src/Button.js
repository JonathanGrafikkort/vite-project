import SceneMangar from './SceneMangar'

export default class Button {
    constructor (game, SceneMangar, Background){
        this.game = game  
        this.canvas = this.game.canvas
        this.SceneMangar = SceneMangar
        this.background = Background
        this.x = 0
        this.y = 0
    }        

    create() {
        const box = document.createElement("div")
        box.classList.add("choiceBox")
        const option1 = document.createElement("button")
        const option2 = document.createElement("button")

        option1.textContent = "1"
        option2.textContent = "2"

        option1.addEventListener("click", () => {
            this.SceneMangar.Change(1)
            this.background.Change(1)
        })

        option2.addEventListener("click", () => {
            this.SceneMangar.Change(2)
            this.background.Change(2)
        })
        /*option1.textContent = "hej"
        option2.textContent = "hej2"*/
        box.appendChild(option1)
        box.appendChild(option2)
        this.canvas.parentNode.appendChild(box)  
    }
}