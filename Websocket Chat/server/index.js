const ws = required('ws')
const server = new ws.server({port: '3000'})

server.on ('connection', socket => {
    socket.on('message', socket => {
        const b = buffer(message)
        console.log(b.toString())
        socket.send(`${message}`)
    })
})

