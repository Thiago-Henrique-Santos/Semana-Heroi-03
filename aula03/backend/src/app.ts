import express, { Application } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

class App{
    private app: Application;
    private http: http.Server;
    private io: Server;

    constructor(){
        this.app = express();
        this.http = new http.Server(this.app);
        this.io = new Server(this.http, {
            cors: {
                origin: '*'
            }
        });
    }

    public listen(){
        this.http.listen(3333, ()=>console.log('Server is running on port 3333.'));
    }

    public listenSocket(){
        this.io.of('/streams').on('connection', this.socketEvents);
    }

    private socketEvents(socket: Socket) {
        console.log(`Socket connected: ${socket.id}`);
        socket.on('subscribe', (data) => {
            console.log(`Usuário entrou na sala: ${data.roomId}`);
            socket.join(data.roomId);
            socket.join(data.socketId);


            const roomsSession = Array.from(socket.rooms);

            if (roomsSession.length > 1) {
                socket.to(data.roomId).emit('new user', {
                    socketId: socket.id,
                    username: data.username
                });
            }
        });

        socket.on('newUserStart', data=>{
            console.log('Novo usuário chegou!', data);
            socket.to(data.to).emit('newUserStart', {
                sender: data.sender
            });
        });

        socket.on('sdp', data=>{
            socket.to(data.to).emit('sdp', {
                description: data.description,
                sender: data.sender
            });
        });

        socket.on('ice candidates', data=>{
            socket.to(data.to).emit('ice candidates', {
                candidate: data.candidate,
                sender: data.sender
            });
        });

        socket.on('chat', (data)=>{
            console.log("Before broadcast:", data);
            socket.broadcast.to(data.roomId).emit('chat', {
                message: data.message,
                username: data.username,
                time: data.time
            });
        });

        socket.on('disconnect', ()=>{
            console.log('Socket desconectado: ' + socket.id);
            socket.disconnect();
        });
    }
}

export { App };