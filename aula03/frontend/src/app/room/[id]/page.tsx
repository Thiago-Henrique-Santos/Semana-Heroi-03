'use client';
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SocketContext } from "@/contexts/SocketContext";
import { useContext, useEffect, useRef } from "react";

export default function Room({params}: {params: {id: string}}){
    const {socket} = useContext(SocketContext);
    const localStream = useRef<HTMLVideoElement>(null);
    const peerConnections = useRef<Record<string, RTCPeerConnection>>({});

    useEffect(()=>{
        socket?.on('connect', async ()=>{
            console.log('Conectado!');
            socket?.emit('subscribe', {
                roomId: params.id,
                socketId: socket.id
            });
            await  initCamera();
        });

        socket?.on('newUserStart', (data)=>{
            console.log('Usuário conectado na sala!', data);
        });

        socket?.on('new user', (data)=>{
            console.log('Usuário novo conectado!', data);
            createPeerConnection(data.socketId);

            socket.emit('newUserStart', {
                to: data.socketId,
                sender: socket.id
            });
        });
    }, [socket, params]);

    const createPeerConnection = (socketId: string) => {
        const config = {
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302'
                }
            ]
        };

        const peer = new RTCPeerConnection(config);
        peerConnections.current[socketId] = peer;
    }

    const initCamera = async () => {
        const video = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: {
                noiseSuppression: true,
                echoCancellation: true
            }
        });

        if (localStream.current)
            localStream.current.srcObject = video;
    }

    return (
        <div className="h-screen">
            <Header/>
            <div className="flex h-[70%]">
                <div className="md:w-[85%] w-full m-5">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                        <div className="bg-gray-950 w-[85%] rounded-md h-[85%] p-2 relative">
                            <video className="h-full w-full mirror-mode" autoPlay ref={localStream}/>
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
                <Chat roomId={params.id}/>
            </div>
            <Footer/>
        </div>
    );
}