import game from "./Game"

export default class Text {
    constructor (game){
        this.x = 0
        this.y = 0
        this.game = game
        this.canvas = this.game.canvas
        this.text = "yabbadabba"
        this.dialogue = document.createElement("p")
        this.index = 0
        this.dialogueIndex = ["gingabonga", "grunganflake", "guh", "muh", "juo"]
        
    }
        
    create(text) {
        let box = document.createElement("div")
        box.classList.add("textBox")
        this.dialogue.textContent = this.text
        box.appendChild(this.dialogue)
        this.canvas.parentNode.appendChild(box)  
    }
    change() {
        this.dialogue.textContent = this.text
    }
    
}