
import { useEffect } from 'react'
import rooms from "./rooms"

export default function RoomView({ room, inventory, message, onChoiceSelect,  }) {

    // DEBUG CHOICES
    useEffect(() => {
        console.log(rooms[room].choices);
    })
        
    return (
        <div className="room-view">
            <p>{rooms[room].text}</p>
            <div className="choices">
                {rooms[room].choices ? rooms[room].choices
                // FILTER OUT ACQUIRED INVENTORY                            
                .filter( (choice) => choice.action != 'PICKUP' ||  !inventory.includes(choice.target) )
                // CHECK IF CONDITIONS ARE MET
                .filter( (choice) => !choice.conditions || choice.conditions.has.every(el => inventory.includes(el)) )                                
                // MAP ALL CHOICES
                .map(choice =>
                    <button key={choice.label} className={choice.action.toLowerCase()}
                        onClick={()=>onChoiceSelect(choice)}>{choice.label}
                    </button>                    
                ):'☠️ You arrived at a dead end...'}
            </div>
            {message && <p className="message-toast">{message}</p>}            
        </div>
    )
}