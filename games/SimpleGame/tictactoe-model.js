class TicTacToeModel{
    board = []
    static X = "X"
    static O = "O"
    static BLANK = "_"

    static RESULT_X_WIN = "X_WIN"
    static RESULT_O_WIN = "O_WIN"
    static RESULT_TIE = "TIE"
    static RESULT_ONGOING = "ONGOING"

    constructor(){
        for(let x = 0; x < 3; x++){
            let newCol = []
            for(let y = 0; y < 3; y++){
                newCol.push(TicTacToeModel.BLANK)
            }
            this.board.push(newCol)
        }
    }

    isValid(x, y){
        return x >= 0 && x < 3 && y >= 0 && y < 3
    }

    checkCoordinate(x, y){
        if(!this.isValid(x, y)) throw new Error("coordinate out of bounds")
    }

    getAt(x, y){
        this.checkCoordinate(x, y)
        return this.board[x][y]
    }

    isBlank(x, y){
        this.checkCoordinate(x, y)
        return this.board[x][y] == TicTacToeModel.BLANK
    }

    isGameOver(x, y){
        let state = this.getGameResult()
        return state != TicTacToeModel.RESULT_ONGOING
    }

    getNextTurn(){
        let countX = 0
        let countO = 0
        for(let x = 0; x < 3; x++){
            for(let y = 0; y < 3; y++){
                if(this.getAt(x, y) == TicTacToeModel.X){
                    countX++
                } else if(this.getAt(x, y) == TicTacToeModel.O){
                    countO++
                }
            }
        }

        if(countX < countO) throw new Error("Invalid Board State")
        if(countX == countO) return TicTacToeModel.X
        return TicTacToeModel.O
    }

    getCountPlays(){
        let count = 0
        for(let x = 0; x < 3; x++){
            for(let y = 0; y < 3; y++){
                if(this.getAt(x, y) != TicTacToeModel.BLANK){
                    count++
                }
            }
        }
        return count
    }

    setAt(x, y){
        this.checkCoordinate(x, y)
        if(!this.isBlank(x, y)) throw new Error("Cannot play in a square that has already been played in")
        if(this.isGameOver()) throw new Error("Cannot play after game over")
        let play = this.getNextTurn()
        this.board[x][y] = play
    }

    getWinningLines(){
        let winningLines = []

        //vertical lines
        for(let x = 0; x < 3; x++){
            let tempArray = []
            for(let y = 0; y < 3; y++){
                tempArray.push(this.board[x][y])
            }
            winningLines.push(tempArray)
        }

        //horizontal lines
        for(let y = 0; y < 3; y++){
            let tempArray = []
            for(let x = 0; x < 3; x++){
                tempArray.push(this.board[x][y])
            }
            winningLines.push(tempArray)
        }

        //diagonals
        let tempArray1 = []
        let tempArray2 = []
        for(let i = 0; i < 3; i++){
            tempArray1.push(this.board[i][i])
            tempArray2.push(this.board[i][2-i])
        }

        winningLines.push(tempArray1)
        winningLines.push(tempArray2)

        return winningLines
    }

    isWinningLineX(move){
        let lines = this.getWinningLines();
        for(let i = 0; i < lines.length; i++){
          let found = true;
          for(let j = 0; j < 3; j++){
            if(lines[i][j] != move) found = false;
          }
          if(found) return true;
        }
        return false;
    }

    getGameResult(){
        if(this.isWinningLineX(TicTacToeModel.X)) return TicTacToeModel.RESULT_X_WIN;
        if(this.isWinningLineX(TicTacToeModel.O)) return TicTacToeModel.RESULT_O_WIN;
        if(this.getCountPlays() == 9) return TicTacToeModel.RESULT_TIE
        return TicTacToeModel.RESULT_ONGOING;
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

window.TicTacToeModel = TicTacToeModel