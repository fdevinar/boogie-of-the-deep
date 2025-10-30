
import { useReducer } from 'react'
import './App.css'
import { reducer } from './core/reducer'
import { getInitialState } from './core/initialState'
import HudBar from './features/hud/HudBar'
import RoomView from './rooms/RoomView'


function App() {

  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
  
  function handleChoiceSelect(choice) {
    console.log(choice);
  }

  return (
    <>
      <h1>BOOGIE OF THE DEEP</h1>

      <RoomView roomId={state.roomId} onChoiceSelect={(choice)=>handleChoiceSelect(choice)}></RoomView>      

      <HudBar state={state}></HudBar>
   
    </>
  )
}

export default App
