
import { useReducer, useState } from 'react'
import './App.css'
import { MOVE, PICKUP, SANITY_CHANGE, DICE, RESET } from "./core/actions"
import { reducer } from './core/reducer'
import { getInitialState } from './core/initialState'
import HudBar from './features/hud/HudBar'
import RoomView from './rooms/RoomView'


function App() {

  // using reducer initializer - undefined here means -> no preloaded state
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
  const [messageToast, setMessageToast] = useState('');
  
  function handleChoiceSelect(choice) {

    setMessageToast('');
    if (choice.message) {
      setMessageToast(choice.message);
    }

    switch (choice.action) {
      
      case MOVE : 
        dispatch({type: MOVE, room: choice.target});
        break;

      case PICKUP : 
        dispatch({type: PICKUP, item: choice.target});
        break;

      default :
        break;
    }
  }

  return (
    <>
      <h1>BOOGIE OF THE DEEP</h1>

      <RoomView
          room={state.room}
          inventory={state.inventory}          
          message={messageToast}
          onChoiceSelect={(choice)=>handleChoiceSelect(choice)}
      >
      </RoomView>
      <HudBar state={state}></HudBar>
   
    </>
  )
}

export default App
