export default class Text {
    constructor (game){
        this.x = 0
        this.y = 0
        this.game = game
        this.canvas = this.game.canvas

        
    }
        
    create(text) {
        const box = document.createElement("div")
        box.classList.add("textBox")
        const Dialogue = document.createElement("p")
        Dialogue.textContent = text
        box.appendChild(Dialogue)
        this.canvas.parentNode.appendChild(box)  
    }
    
    
}