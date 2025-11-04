
import rooms from "./rooms"

export default function RoomView({ room, inventory, message, onChoiceSelect,  }) {
    
    function onDisplayMessage() {
        console.log('this is the message on roomview');

    }

    return (
        <div className="room-view">
            <p>{rooms[room].text}</p>
            <div className="choices">
                {rooms[room].choices ? rooms[room].choices
                // FILTER OUT ACQUIRED INVENTORY                            
                .filter((choice) => choice.action != 'PICKUP' ||  !inventory.includes(choice.target))
                // MAP ALL CHOICES
                .map(choice =>
                    <button key={choice.label} className={choice.action === 'MOVE' ? "move" : "pickup"}
                        onClick={()=>onChoiceSelect(choice)}>{choice.label}
                    </button>                    
                ):'☠️ You arrived at a dead end...'}
            </div>
            {message && <p className="message-toast">{message}</p>}            
        </div>
    )
}