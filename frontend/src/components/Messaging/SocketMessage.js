import { useEffect, useState } from "react"

import io from 'socket.io-client'

const ENDPOINT = "http://localhost:5000"
let socket, selecectedChat

const SocketMessage = ({fetchAgain, setFetchAgain}) => {
    const [messages, SocketMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [newMessage, setNewMessage] = useState()

    useEffect(() => {

    })

    useEffect(() => {
        socket = io(ENDPOINT)
        socket.emit("setup", user)
        socket.on('connection', )
    }, [])
}