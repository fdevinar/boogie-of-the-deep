
import { useEffect } from 'react'
import rooms from "./rooms"
// PRELOAD IMAGES
Object.values(rooms).forEach(room => new Image().src = room.image);

export default function RoomView({ room, inventory, events, message, onChoiceSelect,  }) {

    // DEBUG CHOICES
    // useEffect(() => {
    //     console.log(rooms[room].choices);
    // })
    const filteredChoices = rooms[room].choices
        // FILTER OUT ACQUIRED INVENTORY                            
        .filter( (choice) => choice.action != 'PICKUP' ||  !inventory.includes(choice.target) )
        // FILTER OUT COMPLETED EVENTS
        .filter( (choice) => choice.action != 'EVENT' ||  !events.includes(choice.target) )
        // CHECK IF CONDITIONS ARE MET                                
        .filter( (choice) => !choice.conditions || (choice.conditions.has.every(el => inventory.includes(el))) )
        .filter( (choice) => !choice.conditions || (choice.conditions.hasNot.every(el => !events.includes(el))) )
        .filter( (choice) => !choice.conditions || (choice.conditions.events.every(el => events.includes(el))) )
        .filter( (choice) => !choice.conditions || (choice.conditions.eventsNot.every(el => !events.includes(el))) )
                        
    const resetBtn = {label: "You hit a dead end... Close your eyes.", action: "MOVE", target: "Forecastle",
                    message: "You find yourself back at the forecastle, somehow...",
                    effect: {sanity: -15},}

    return (
        <div className="room-view">

            <h2>{room}</h2>
            {rooms[room].image && <img key={rooms[room].image} src={rooms[room].image} alt="Room Image" className='room-image' />}        
            <p className="text">{rooms[room].text}</p>
            {rooms[room].comment && <p className="comment">{rooms[room].comment}</p>}
            
            <div className="choices">
                {filteredChoices.map(choice =>
                    <button
                        key={choice.label}
                        className={choice.action.toLowerCase()}
                        onClick={()=>onChoiceSelect(choice)}>{choice.label}
                    </button>)}
                {/* RESET WHEN NO CHOICES AVAILABLE */}
                {!filteredChoices.length && 
                <button
                    key={resetBtn.label}
                    className={resetBtn.action.toLowerCase()}
                    onClick={()=>onChoiceSelect(resetBtn)}>{resetBtn.label}
                </button>                                      
                }                
            </div>

            {message && <p className="message">{message}</p>}
            
        </div>
    )
}