class ButtonModel{
    board = []
    static SAFE = "SAFE"
    static BOMB = "BOMB"
    static WIN_STATE = "WIN"
    static LOSE_STATE = "LOSE"
    static BLANK = "_"

    static RESULT_WIN = "WIN"
    static RESULT_LOSE = "LOSE"
    static RESULT_IN_PROGRESS = "IN_PROGRESS"

    constructor(){
        for(let x = 0; x < 1; x++){
            let newColumn = []
            for(let y = 0; y < 5; y++){
                newColumn.push(ButtonModel.BLANK)
            }
            this.board.push(newColumn)
        }

        this.isBomb()
    }

    isValid(x, y){
        return x >= 0 && x < 1 && y >= 0 && y < 5
    }

    checkCoordinate(x, y){
        if(!this.isValid(x, y)){
            throw new Error("Coordinate out of bounds")
        }
    }

    getAt(x, y){
        this.checkCoordinate(x, y)
        return this.board[x][y]
    }

    isBlank(x, y){
        this.checkCoordinate(x, y)
        return this.board[x][y] == ButtonModel.BLANK
    }

    isBomb(){
        let blanks = [];
        for(let x = 0; x < 1; x++){
            for(let y = 0; y < 5; y++){
                if(this.board[x][y] == ButtonModel.BLANK){
                    blanks.push({x: x, y: y});
                }
            }
        }

        if(blanks.length === 0) return;

        let randomIndex = Math.floor(Math.random() * blanks.length);
        let randomBlank = blanks[randomIndex];

        this.board[randomBlank.x][randomBlank.y] = ButtonModel.BOMB;
    }

    isGameOver(){
        let state = this.getGameResult()
        return state != ButtonModel.RESULT_IN_PROGRESS
    }

    getGameResult(x, y){
        if(this.isBomb(x, y)){
            return ButtonModel.RESULT_LOSE;
        }
    
        let blankCount = 0;
        for(let x = 0; x < 1; x++){
            for(let y = 0; y < 5; y++){
                if(this.isBlank(x, y)){
                    blankCount++;
                }
            }
        }
    
        // If the only blank spot left is the bomb, the game is won
        if(blankCount == 1 && this.isBomb(x, y)){
            return ButtonModel.RESULT_WIN;
        } else {
            return ButtonModel.RESULT_IN_PROGRESS;
        }
    }

    setAt(x,y){
        this.checkCoordinate(x,y)
        if(!this.isBlank(x,y)) throw new Error("Cannot play on a non-blank square.")
        if(this.isGameOver()) throw new Error("The cannot go if the game is already over.")
        let play = this.getNextTurn()
        this.board[x][y] = play
    }

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