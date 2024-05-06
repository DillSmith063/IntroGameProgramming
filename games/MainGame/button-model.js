class ButtonModel{
    board = []
    static PLAYER_ONE = "X"
    static PLAYER_TWO = "O"
    static BLANK = "_"
    static FAIL = "FAIL"

    static RESULT_PLAYER_ONE_WIN = "PLAYER_ONE_WIN"
    static RESULT_PLAYER_TWO_WIN = "PLAYER_TWO_WIN"
    static RESULT_IN_PROGRESS = "IN_PROGRESS"

    constructor(){
        for(let x = 0; x < 1; x++){
            let newColumn = []
            for(let y = 0; y < 5; y++){
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
        if(this.isFail(x, y)){
            return ButtonModel.RESULT_LOSE;
        }
    
        let blankCount = 0;
        for(let x = 0; x < 5; x++){
            if(this.isBlank(x, 0)){
                blankCount++;
            }
        }
    
        // If the only blank spot left is the bomb, the game is won
        if(blankCount == 1 && this.isFail(x, y)){
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
        this.board[y][x] = play
    }

    getNextTurn(){
        let countX = 0
        let countO = 0
        for(let x = 0; x< 3; x++){
          for(let y = 0; y< 3; y++){
            if(this.getAt(x,y) == ButtonModel.PLAYER_ONE)
              countX++;
            else if(this.getAt(x,y) == ButtonModel.PLAYER_TWO)
              countO++;
          }
        }
        if(countX < countO) throw new Error("Invalid board state");
        if(countX == countO) return ButtonModel.PLAYER_ONE
        return ButtonModel.PLAYER_TWO
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