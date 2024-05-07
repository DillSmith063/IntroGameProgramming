class ButtonModel{
    static BLANK = "_"
    static FAIL = "FAIL"
    static WIN = "WIN"
    static LOSE = "LOSE"
    static IN_PROGRESS = "IN_PROGRESS"

    constructor(){
        this.board = [Array(5).fill(ButtonModel.BLANK)]
        this.setFail()
    }

    checkCoordinate(x, y){
        if(y < 0 || y >= this.board.length || x < 0 || x >= this.board[0].length){
            throw new Error("Coordinate out of bounds")
        }
    }

    getAt(x, y){
        this.checkCoordinate(x, y)
        return this.board[y][x]
    }

    isBlank(x, y){
        return this.board[y][x] == ButtonModel.BLANK
    }

    setFail(){
        try{
            if(this.board[0][2] == ButtonModel.BLANK){
                this.board[0][2] = ButtonModel.FAIL
                console.log('Button at (2, 0) is set to FAIL')
            }
        } catch(e){
            console.log("FAIL not set properly")
        }
    }

    isFail(x, y){
        this.checkCoordinate(x, y)
        return this.board[y][x] == ButtonModel.FAIL
    }

    isGameOver(){
        let state = this.getGameResult()
        return state != ButtonModel.IN_PROGRESS
    }

    getGameResult(){
        for(let x = 0; x < 5; x++){
            let buttonState = this.getAt(x, 0);
            if(buttonState == ButtonModel.BLANK){
                return ButtonModel.IN_PROGRESS;
            }
        }
    
        return ButtonModel.WIN;
    }

    setAt(x, y, newState){
        this.checkCoordinate(x,y)
        if(!this.isBlank(x,y)) throw new Error("Cannot play on a non-blank square.")
        if(this.isGameOver()) throw new Error("The cannot go if the game is already over.")
        this.board[y][x] = newState
    }

    toString(){
        let toReturn = "";
        for (let x = 0; x < 5; x++) {
            toReturn += this.board[0][x] + " ";
        }
        return toReturn;
    }
}

window.ButtonModel = ButtonModel