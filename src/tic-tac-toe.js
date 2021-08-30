class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.board = [[null, null, null], [null, null, null], [null, null, null]]
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.board[rowIndex][columnIndex]) {
            this.board[rowIndex][columnIndex] = this.playerSymbol;
            if (this.playerSymbol === 'x') {
                this.playerSymbol = 'o'
            } else {
                this.playerSymbol = 'x'
            }
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true
        }
        return false
    }

    getWinner() {
        if (this.board[0][0] === this.board[0][1] && this.board[0][1] === this.board[0][2]) {
            return this.board[0][0]
        }
        if (this.board[1][0] === this.board[1][1] && this.board[1][1] === this.board[1][2]) {
            return this.board[1][0]
        }
        if (this.board[2][0] === this.board[2][1] && this.board[2][1] === this.board[2][2]) {
            return this.board[2][0]
        }
        if (this.board[0][0] === this.board[1][0] && this.board[1][0] === this.board[2][0]) {
            return this.board[0][0]
        }
        if (this.board[0][1] === this.board[1][1] && this.board[1][1] === this.board[2][1]) {
            return this.board[0][1]
        }
        if (this.board[0][2] === this.board[1][2] && this.board[1][2] === this.board[2][2]) {
            return this.board[0][2]
        }
        if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) {
            return this.board[0][0]
        }
        if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) {
            return this.board[0][2]
        }
        return null
    }

    noMoreTurns() {
        let count = 0;
        for (let i = 0; i < this.board[0].length; i++) {
            for (let j = 0; j < this.board.length; j++) {
                if (this.board[i][j]) {
                    continue;
                } else {
                    count++
                }
            }
        }
        if (count === 0) {
            return true
        }
        return false
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true
        }
        return false
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
