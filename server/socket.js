
module.exports = function (io) {
    let rooms = {}
    let players = {}
    io.on('connection', (socket) => {
        console.log('connect ' + socket.id);
        socket.on('create-game', (data)=>{
            let {char, img, name} = data
            let roomId =  Math.floor(Math.random() * 900000) + 100000;
            while (rooms.roomId) roomId =  Math.floor(Math.random() * 900000) + 100000;
            rooms[roomId] = {playerId1:{id:socket.id, char, img, name}}
            players[socket.id] = roomId
            console.log({rooms, players});
        })
        // socket.on('msg', (data) => {
        //     console.log('msg' + data);
        // })
        socket.on('disconnect', () => {
            console.log('disconnect' + socket.id);
        })
    })
}