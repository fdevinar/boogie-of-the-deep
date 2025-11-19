
import { useEffect } from 'react'
import rooms from "./rooms"
// PRELOAD IMAGES
Object.values(rooms).forEach(room => new Image().src = room.image);

export default function RoomView({ room, inventory, events, message, onChoiceSelect,  }) {

    // DEBUG CHOICES
    useEffect(() => {
        console.log(rooms[room].choices);
    })
        
    return (
        <div className="room-view">
            <h2>{room}</h2>
            {rooms[room].image && <img key={rooms[room].image} src={rooms[room].image} alt="Room Image" className='room-image' />}        
            <p className="text">{rooms[room].text}</p>
            {rooms[room].comment && <p className="comment">{rooms[room].comment}</p>}
            <div className="choices">
                {rooms[room].choices ? rooms[room].choices
                // FILTER OUT ACQUIRED INVENTORY                            
                .filter( (choice) => choice.action != 'PICKUP' ||  !inventory.includes(choice.target) )
                // FILTER OUT COMPLETED EVENTS
                .filter( (choice) => choice.action != 'EVENT' ||  !events.includes(choice.target) )
                // CHECK IF CONDITIONS ARE MET                                
                .filter( (choice) => !choice.conditions || (choice.conditions.has.every(el => inventory.includes(el))) )
                .filter( (choice) => !choice.conditions || (choice.conditions.hasNot.every(el => !events.includes(el))) )                
                .filter( (choice) => !choice.conditions || (choice.conditions.events.every(el => events.includes(el))) )
                .filter( (choice) => !choice.conditions || (choice.conditions.eventsNot.every(el => !events.includes(el))) )                            
                // MAP ALL CHOICES
                .map(choice =>
                    <button key={choice.label} className={choice.action.toLowerCase()}
                        onClick={()=>onChoiceSelect(choice)}>{choice.label}
                    </button>                                        
                ):'☠️ You arrived at a dead end...'}
            </div>
            {message && <p className="message">{message}</p>}
            
        </div>
    )
}