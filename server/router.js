const express = require('express')
const router = express.Router()


// function checkRow(board, row , q, player){
//     if(board[row][q-1]){
//         if(board[row][q-1] == player){
//             if (board[row][q-2]){
//                 if(board[row][q-2]== player) return true
//                 else return false
//             }else{
//                 if(board[row][q+1] == player)return true
//                 else return false
//             }
//         }
//         else return false
//     }else{
//         if(board[row][q+1] == player){
//             if(board[row][q+2] == player){
//                 return true
//             }
//             else return false
//         }
//         else return false
// }
// }








let board = [['', '', 'X'], ['', 'X', ''], ['X', '', '']]
let player = 'X'
// let board = [['X', '', ''], ['X', '', ''], ['X', '', '']]
// let board = [['', '', ''], ['', '', ''], ['X', 'X', 'X']]
// let board = [['X', '', ''], ['', 'X', ''], ['', '', 'X']]








function checkRow(board, row, column, player) {
    for (i in board[row]) {
        if (i != column) {
            if (board[row][i] != player) return false
        }
    }
    return true
}

function checkColumn(board, row, column, player) {
    for (i in board) {
        if (i != row) {
            if (board[i][column] != player) return false
        }
    }
    return true
}

function checkMainDiagonal(board, row, column, player){
    for(i in board){
        if (board[i][i] != player) return false
    }
    return true
}

function checkSecondaryDiagonal(board, row,column, player){
    let length = board.length
    for(r in board){
        r = Number(r)
        if (board[r][length-(r+1)] != player) return false
    }
    return true
}

function checkWin(row, column) {
    if (player == 'X') player = 'O'
    else player = 'X'
    if (board[row][column] != '') throw 'the place full'
    board[row][column] = player
    if (checkRow(board, row, column, player)) return true
    if (checkColumn(board, row, column, player)) return true
    if (checkMainDiagonal(board, row, column, player)) return true
    if (checkSecondaryDiagonal(board, row, column, player)) return true
    else return false
}



router.get('/', async (req, res) => {
    try {
        console.log(req.data);
        let {row, column} = req.data
        let win = checkWin(row, column)
        let result = {win, player}
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router