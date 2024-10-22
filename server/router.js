const express = require('express')
const router = express.Router()

function checkRow(board, row, column, player) {
    if (board[row].every(c => c == player)) return [[row, 0], [row, 1], [row, 2]]
}

function checkColumn(board, row, column, player) {
    if ([0, 1, 2].every(i => board[i][column] == player)) return [[0, column], [1, column], [2, column]]
}

function checkMainDiagonal(board, row, column, player, arr) {
    if (arr.every(i => board[i][i] == player)) return [[0, 0], [1, 1], [2, 2]]
}

function checkSecondaryDiagonal(board, row, column, player, arr) {
    if (arr.every(i => board[i][arr.length - (i + 1)] == player)) return [[0, 2], [1, 1], [2, 0]]
}

function checkDraw(board) {
    return board.every(r => r.every(c => c != ''))
}
function forAnyOption(arr = [], player) {
    let data = { "x": [], "o": [], "": [] }
    for (let i = 0; i < 3; i++) {
        if (arr[i] == 'x') data.x.push(i)
        else if (arr[i] == 'o') data.o.push(i)
        else data[''].push(i)
    }    
    if (data[''].length != 1) return [false, false]
    else if (data[player].length == 2) return [true, data[''][0]]
    else if (Object.values(data).filter(i => i.length == 1).length != 3) return [false, data[''][0]]
    else return [false, false]
}
function automaticTurn(board, player) {
    let option = undefined
    let result
    // בדיקת שורות וטורים
    for (let i = 0; i < 3; i++) {
        result = forAnyOption([board[i][0], board[i][1], board[i][2]],player)
        if (result[0]) {
            board[i][result[1]] = player
            return [[i, 0], [i, 1], [i, 2]]
        } else if (result[1] && !option) option = [i, result[1]]
        result = forAnyOption([board[0][i], board[1][i], board[2][i]], player)
        if (result[0]) {
            board[result[1]][i] = player
            return [[0, i], [1, i], [2, i]]
        } else if (result[1] && !option) option = [result[1], i]
    }
    // בדיקת אלכסון ראשי
    result = forAnyOption([board[0][0], board[1][1], board[2][2]],player)
    if (result[0]) {
        board[result[1]][result[1]] = player
        return [[0, 0], [1, 1], [2, 2]]
    } else if (result[1] && !option) option = [result[1], result[1]]
    // בדיקת אלכסון משני
    result = forAnyOption([board[0][2], board[1][1], board[2][0]],player)
    if (result[0]) {
        board[result[1]][3 - (result[1] + 1)] = player
        return [[0, 2], [1, 1], [2, 0]]
    } else if (result[1] && !option) option = [result[1], 3 - (result[1] + 1)]
    // חסימת ניצחון של השחקן השני במידת האפשר
    if (option) {
        board[option[0]][option[1]] = player
    }else{
        // פעולה אקראית אחרת 
        result = randomStep(board)
        if (result) {
            board[result[0]][result[1]] = player
        }
    }
    if (checkDraw(board)) return 'draw'
    return false
}


function randomStep(board) {
    data = [[1, 1], [0, 0], [0, 2], [2, 0], [2, 2], [0, 1], [1, 0], [1, 2], [2, 1]]
    for (i of data) {
        if (board[i[0]][i[1]] == "") return i
    }
    // אם הלוח מלא נחזיר פאלס
    return false
}


function checkWin(row, column, board, player) {
    if (board[row][column] != '') throw 'the place full'
    board[row][column] = player
    let win = checkRow(board, row, column, player)
    if (win) return win
    win = checkColumn(board, row, column, player)
    if (win) return win
    if (row == column) {
        win = checkMainDiagonal(board, row, column, player, [0, 1, 2])
        if (win) return win
    }
    if (row == (board.length - 1 - column)) {
        win = checkSecondaryDiagonal(board, row, column, player, [0, 1, 2])
        if (win) return win
    }
    if (checkDraw(board)) return 'draw'
    return false
}


router.put('/', async (req, res) => {
    try {
        let { row, column, board, player } = req.body
        let win
        if (row == -1) win = automaticTurn(board, player)
        else win = checkWin(row, column, board, player)
        let result = { win, player, board }
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router