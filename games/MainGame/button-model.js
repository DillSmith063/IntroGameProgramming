class ButtonModel{
    board = []
    static BLANK = "_"
    static FAIL = "FAIL"

    static WIN = "WIN"
    static LOSE = "LOSE"
    static IN_PROGRESS = "IN_PROGRESS"

    constructor(){
        for(let x = 0; x < 5; x++){
            let newColumn = []
            for(let y = 0; y < 1; y++){
                newColumn.push(ButtonModel.BLANK)
            }
            this.board.push(newColumn)
        }
        this.setFail()
    }

    isValid(x, y){
        return y == 0 && x >= 0 && x < 5
    }

    checkCoordinate(x, y){
        if(!this.isValid(x, y)){
            throw new Error("Coordinate out of bounds")
        }
    }

    getAt(x, y){
        this.checkCoordinate(x, y)
        return this.board[y][x]
    }

    isBlank(x, y){
        this.checkCoordinate(x, y)
        return this.board[y][x] == ButtonModel.BLANK
    }

    setFail(){
        let blanks = [];
        for(let x = 0; x < 5; x++){
            if(this.board[0][x] == ButtonModel.BLANK){
                blanks.push({x: x, y: 0})
            }
        }

        if(blanks.length === 0) return;

        let randomIndex = Math.floor(Math.random() * blanks.length);
        let randomBlank = blanks[randomIndex];

        this.board[randomBlank.y][randomBlank.x] = ButtonModel.FAIL;
    }

    isFail(x, y){
        this.checkCoordinate(x, y)
        return this.board[y][x] == ButtonModel.BOMB
    }

    isGameOver(){
        let state = this.getGameResult()
        return state != ButtonModel.RESULT_IN_PROGRESS
    }

    getGameResult(x, y){
        let countSafe = 0
        let countFail = 0

        for(let x = 0; x < 5; x++){
            if(this.getAt(x, y) == ButtonModel.BLANK){
                countSafe++
            } else if(this.getAt(x, y) == ButtonModel.FAIL){
                countFail++
            }
        }

        if(countSafe == 4 && countFail == 0){   
            return ButtonModel.WIN
        } else if(countFail == 1){
            return ButtonModel.LOSE
        } else {
            return ButtonModel.IN_PROGRESS
        }
    }

    setAt(x,y){
        this.checkCoordinate(x,y)
        if(!this.isBlank(x,y)) throw new Error("Cannot play on a non-blank square.")
        if(this.isGameOver()) throw new Error("The cannot go if the game is already over.")
        let play = this.getNextTurn()
        this.board[y][x] = play
    }

   /*get(){
        let countSafe = 0
        let countFail = 0

        for(let x = 0; x < 5; x++){
            if(this.getAt(x, y) = ButtonModel.BLANK){
                countSafe++
            } else if(this.getAt(x, y) = ButtonModel.FAIL){
                countFail++
            }
        }
    }*/

    toString(){
        let toReturn = "";
        for(let y = 0; y < 3; y++){
          for(let x = 0; x < 3; x++){
            toReturn += this.board[x][y] + " "
          }
          toReturn += "\n"
        }
        toReturn += "\n";
        toReturn += this.getGameResult()
        return toReturn;
    }
}

window.ButtonModel = ButtonModel