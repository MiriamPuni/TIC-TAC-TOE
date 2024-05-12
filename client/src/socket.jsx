// import { createContext, useContext } from 'react'
// import io from 'socket.io-client'
// const socket = io('http://localhost:4567')
// const socketContext = createContext(io())
// const socketProvider = ({children})=>{
//     <socketContext.Provider value={socket}>{children}</socketContext.Provider>
// }
// const useSocket = ()=>useContext(socketContext)
// export  {useSocket, socketProvider}
import { createContext, useContext } from 'react'
import io from 'socket.io-client'
const socket = io('http://localhost:4567')
const SocketContext = createContext(io())
export const SocketProvider = ({children})=>{
    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}
const useSocket = ()=>useContext(SocketContext)
export default useSocket