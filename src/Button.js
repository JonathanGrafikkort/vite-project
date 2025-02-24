import SceneMangar from './SceneMangar'
import Text from './Text.js'

export default class Button {
    constructor (game, SceneMangar, Background){
        this.game = game  
        this.canvas = this.game.canvas
        this.SceneMangar = SceneMangar
        this.background = Background
        this.x = 0
        this.y = 0
        this.path1 = false
        this.Text = Text
        
        
    }        

    create(text) {
        const box = document.createElement("div")
        box.classList.add("choiceBox")
        const option1 = document.createElement("button")
        const option2 = document.createElement("button")


        option1.textContent = "1"
        option2.textContent = "2"

        window.addEventListener("click", () => {
            console.log("gah")
            if(this.path1 == true){
                if (this.game.Text.index <= 3){
                    this.game.Text.text = this.game.Text.dialogueIndex[this.game.Text.index]
                    this.game.Text.index += 1
                    this.game.Text.change()
                    console.log(this.game.Text.index)
                }
                

            }
        })

        option1.addEventListener("click", () => {
            //this.game.Text.TextElement = "hahgfysieeguc"
            this.game.Text.change()
            option1.textContent = "gra"
            option1.style.visibility = "visible"
            this.path1 = true
        })

        option2.addEventListener("click", () => {
            this.game.Text.text = "goovc"
            this.game.Text.change()
        })
        /*option1.textContent = "hej"
        option2.textContent = "hej2"*/
        box.appendChild(option1)
        box.appendChild(option2)
        this.canvas.parentNode.appendChild(box)  
    }
}