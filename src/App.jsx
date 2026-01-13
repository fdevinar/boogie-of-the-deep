
import { useReducer, useState, useEffect } from 'react'
import './App.css'
import { MOVE, PICKUP, SANITY_CHANGE, EVENT, DICE, RESET } from "./core/actions"
import { reducer } from './core/reducer'
import { getInitialState } from './core/initialState'
import HudBar from './ui/HudBar'
import RoomView from './rooms/RoomView'
import CinemaModal from './ui/CinemaModal'
import { checkResult } from './utils/dice-roll'
import { cinemaDirector } from './ui/cinemaDirector'
import { sanityTable } from './utils/sanity-table'
import sounds from './utils/soundDirector'

function App() {

  // using reducer initializer - undefined here means -> no preloaded state
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
  const [messageToast, setMessageToast] = useState('');
  const [cinemaModalImage, setCinemaModalImage] = useState('');
  const [cinemaModalCaption, setCinemaModalCaption] = useState('');
  const cinemaScript = cinemaDirector();

  const { playWaves, playSteam, playReveal, playWind } = sounds();
  const soundScript = {  
    'Windlock Passage': ()=> playWaves(),
    'Engine Room': ()=> playSteam(),
    'Nightwatch Gallery': ()=> playReveal(),
    'Captains Quarters': ()=> playWind(),
  }

    // ON ROOM CHANGE
    useEffect(()=> {            
      // PLAY AUDIO
      if (soundScript[state.room]) {
        soundScript[state.room]();
      }
      // DISPLAY CINEMA MODAL
      if (cinemaScript[state.room]) {
        setCinemaModalImage(cinemaScript[state.room].image);
        setCinemaModalCaption(cinemaScript[state.room].caption);
      } else {
        setCinemaModalImage('');
        setCinemaModalCaption('');
      }      
    },[state.room])
  
    // CHECK FOR STEP/SANITY BOUNDARIES
    useEffect(()=> {
      if (state.steps <= 0) {
        setCinemaModalImage(cinemaScript['Steps Ending'].image);
        setCinemaModalCaption(cinemaScript['Steps Ending'].caption);
        setTimeout(function() {
          dispatch({type: RESET});
        }, 7000);
      }
    },[state.steps])
    useEffect(()=> {
      if (state.sanity <=-20) {
        setCinemaModalImage(cinemaScript['Sanity Ending'].image);
        setCinemaModalCaption(cinemaScript['Sanity Ending'].caption);
        setTimeout(function() {
          dispatch({type: RESET});
        }, 7000);
      }
    },[state.sanity])

  function handleChoiceSelect(choice) {
    
    // MESSAGE TOAST -> YELLOW FEEDBACK AFTER ACTION
    setMessageToast('');
    if (choice.message) {
      setMessageToast(choice.message);
    }
    // IF ANY EFFECT IS APPLIED
    if (choice.effect) {
      if (choice.effect.sanity) {
        dispatch( {type: SANITY_CHANGE, delta: choice.effect.sanity} );
      }
    }
    switch (choice.action) { 
      case MOVE : 
        dispatch( {type: MOVE, room: choice.target} );
        break;
      case PICKUP : 
        dispatch( {type: PICKUP, item: choice.target} );
        break;
      case EVENT : 
        dispatch( {type: EVENT, trigger: choice.target} );
        break;
      case DICE : {
        const result = checkResult(choice.target);
        dispatch( {type: DICE, outcome: result ? choice.success : choice.fail} );
        result ? setMessageToast(choice.success.message) : setMessageToast(choice.fail.message);        
      }
        break;
      default :
        break;
    }
  }

  return (
    <>
      <main className={sanityTable(state.sanity)}>

        <h1 onClick={ ()=>{ dispatch({type: RESET});setMessageToast('');} }>
          BOOGIE OF THE DEEP
        </h1>
        {/* SS BRUIT 1920 */}

        <RoomView
            room={state.room}
            inventory={state.inventory}          
            events={state.events}
            message={messageToast}
            onChoiceSelect={(choice)=>handleChoiceSelect(choice)}
        >
        </RoomView>
        
        <HudBar state={state}></HudBar>
        
        {cinemaModalImage && 
        <CinemaModal
            image={cinemaModalImage}
            caption={cinemaModalCaption}
            onClose={()=>setCinemaModalImage('')}>
        </CinemaModal>
        }

        <p className="dev-pride">Build v0.1</p>
   
      </main>
    </>
  )
}

export default App
