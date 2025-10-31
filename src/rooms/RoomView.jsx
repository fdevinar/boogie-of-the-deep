
import rooms from "./rooms"

export default function RoomView({roomId,onChoiceSelect}) {
         
    return (        
        <div className="room-view">
            <p>{rooms[roomId].text}</p>
            <div className="choices">
                {rooms[roomId].choices ? rooms[roomId].choices.map(
                    choice => <button key={choice.label} onClick={()=>onChoiceSelect(choice.to)}>{choice.label}</button>                        
                ):'☠️ You arrived at a dead end...'}
            </div>
        </div>
    )
}