
import { useReducer } from 'react'
import './App.css'
import { reducer } from './core/reducer'
import { getInitialState } from './core/initialState'
import HudBar from './features/hud/HudBar'


function App() {

  // const inventory = ['Book','Candle','Wrench'];
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
  
  return (
    <>
      <h1>BOOGIE OF THE DEEP - development environment</h1>

      <HudBar state={state}></HudBar>

      
    
    </>
  )
}

export default App
