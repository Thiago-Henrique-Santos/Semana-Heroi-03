'use client';
import { useState } from "react";
import Join from "./Join";
import Create from "./Create";

export default function FormWrapper () {
    let [selectRoom, setSelectRoom] = useState<'join' | 'create'>('join');
    const handleSelectRoom = (room: 'join' | 'create')=>{
        setSelectRoom(room);
    }
    return (
        <div className="w-full">
          <div className="flex items-center text-center">
            <span className={`w-1/2 p-4 cursor-pointer ${selectRoom == 'join' && 'rounded-t-lg text-primary bg-secondary'}`} onClick={()=>handleSelectRoom('join')}>Ingressar</span>
            <span className={`w-1/2 p-4 cursor-pointer ${selectRoom == 'create' && 'rounded-t-lg text-primary bg-secondary'}`} onClick={()=>handleSelectRoom('create')}>Nova reunião</span>
          </div>
          <div className="max-w-[580px] w-full bg-secondary rounded-b-lg space-y-8 p-10">
              <RoomSelector selectRoom={selectRoom}/>
          </div>
        </div>
    );
}

const RoomSelector = ({selectRoom}: {selectRoom: 'join' | 'create'})=>{
    switch (selectRoom) {
        case 'join':
            return(<Join/>);
        case 'create':
            return(<Create/>)
        default:
            return(<Join/>)
    }
}