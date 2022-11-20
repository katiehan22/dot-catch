const server = app.listen(5000, console.log('Server started'))
const io = require('soket.io')(server, {
    pingTimeout: 600000,
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket) => {
    console.log("connected to message server")

    socket.on('setup', (user) => {
        socket.join(user._id)
        socket.emit('connected')
    })
})