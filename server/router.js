const express = require('express')
const router = express.Router()

function checkRow(board, row, column, player) {
    return board[row].every(c => c == player)
}

function checkColumn(board, row, column, player, arr) {
   return arr.every(i=>board[i][column]==player)
}

function checkMainDiagonal(board, row, column, player, arr) {
    return arr.every(i=>board[i][i] == player)
}

function checkSecondaryDiagonal(board, row, column, player, arr) {
    return arr.every(i=>board[i][arr.length - (i + 1)] == player)
}

function checkWin(row, column, board, player) {
    // if ()
    let arr = [0, 1, 2]
    if (board[row][column] != '') throw 'the place full'
    board[row][column] = player
    if (checkRow(board, row, column, player)) return true
    if (checkColumn(board, row, column, player, arr)) return true
    if(`row` == column){
        if (checkMainDiagonal(board, row, column, player, arr)) return true
    }
    if(row == (board.length - 1 + row)){
        if (checkSecondaryDiagonal(board, row, column, player, arr)) return true
    }
    else return false
}
(0, 2), (1, 1), (2, 0)


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