const express = require('express')
const router = express.Router()

function checkRow(board, row, column, player) {
    if (board[row].every(c => c == player)) return [[row, 0],[row, 1],[row, 2]]
}

function checkColumn(board, row, column, player) {
    if ([0,1,2].every(i=>board[i][column]==player)) return [[0, column],[1, column],[2, column]]
}

function checkMainDiagonal(board, row, column, player, arr) {
    if(arr.every(i=>board[i][i] == player)) return [[0,0], [1,1], [2,2]]
}

function checkSecondaryDiagonal(board, row, column, player, arr) {
    if(arr.every(i=>board[i][arr.length - (i + 1)] == player)) return [[0,2],[1,1],[2,0]]
}

function checkDraw(board){
    return board.every(r=>r.every(c=> c != ''))
}

function checkWin(row, column, board, player) {
    if (board[row][column] != '') throw 'the place full'
    board[row][column] = player
    let win = checkRow(board, row, column, player)
    if (win) return win
    win = checkColumn(board, row, column, player)
    if (win) return win
    if(row == column){
        win = checkMainDiagonal(board, row, column, player, [0,1,2])
        if (win) return win
    }
    if(row == (board.length - 1 - column)){
        win = checkSecondaryDiagonal(board, row, column, player, [0,1,2])
        if (win) return win
    }
    if (checkDraw(board)) return 'draw'
    return false
}


router.put('/', async (req, res) => {
    try {
        let { row, column, board, player } = req.body
        let win = checkWin(row, column, board, player)
        let result = { win, player, board }
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router