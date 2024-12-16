export default class Scene{
    constructor(game) {
        this.game = game
        const book = [
        {
          id: 0,
          description: "Du vaknar upp i ett rum. Du ser en dörr och ett fönster.",
          choices: [
            {
              description: "Gå till dörren",
              target: 1
            },
            {
              description: "Gå till fönstret",
              target: 5
            }
          ]
        },
        {
          id: 1,
          description: "Du står framför dörren. Vad gör du?",
          choices: [
            {
            description: "Öppna dörren",
            target: 2
          }, {
            description: "Gå tillbaka",
            target: 0
          }
        ],
        }
      ]
    }

}