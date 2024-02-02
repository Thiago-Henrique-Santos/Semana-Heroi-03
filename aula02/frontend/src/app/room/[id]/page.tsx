'use client';
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SocketContext } from "@/contexts/SocketContext";
import { useContext, useEffect } from "react";

export default function Room({params}: {params: {id: string}}){
    let {socket} = useContext(SocketContext)
    useEffect(()=>{
        socket?.on('connection', async ()=>{
            console.log('Conectado!');
            socket?.emit('subscribe', {
                roomId: params.id,
                socketId: socket.id
            })
        })
    }, [socket, params]);
    return (
        <div className="h-screen">
            <Header/>
            <div className="flex h-[70%]">
                <div className="md:w-[85%] w-full m-5">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                        <div className="bg-gray-950 w-[85%] rounded-md h-[85%] p-2 relative">
                            <video className="h-full w-full"></video>
                            <span className="absolute bottom-3">Thiago Santos</span>
                        </div>
                        <div className="bg-gray-950 w-[85%] rounded-md h-[85%] p-2 relative">
                            <video className="h-full w-full"></video>
                            <span className="absolute bottom-3">Matheus Santos</span>
                        </div>
                        <div className="bg-gray-950 w-[85%] rounded-md h-[85%] p-2 relative">
                            <video className="h-full w-full"></video>
                            <span className="absolute bottom-3">Yuri Souza</span>
                        </div>
                        <div className="bg-gray-950 w-[85%] rounded-md h-[85%] p-2 relative">
                            <video className="h-full w-full"></video>
                            <span className="absolute bottom-3">Pedro Lemos</span>
                        </div>
                    </div>
                </div>
                <Chat/>
            </div>
            <Footer/>
        </div>
    );
}