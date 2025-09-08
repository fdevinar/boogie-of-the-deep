import './App.css'
import { useReducer } from 'react'

function reducer(state,action) {
        if (action.type === 'MOVE') {
            return {...state,
                steps: state.steps -1,                
            };
        }
        if (action.type === 'PICKUP') {
            return {...state,            
                items: [...state.items, action.item]
            }            
        }
        throw Error('unknown action: ' + action.type);
    }

export default function ReducerRunLoop() {

    const [state, dispatch] = useReducer(reducer, {steps: 8, items: ['NOTEBOOK']});
    const MOVE = 'MOVE';
    const PICKUP = 'PICKUP';

    return (
        <>
        <h2>Reducer Run Loop</h2>     
        <p>Steps: {state.steps}</p>
        <p>Items: {state.items.join(', ')}</p>
        <button onClick={()=> dispatch({type: MOVE})}>MOVE</button>        
        <br />
        <br />
        <button onClick={()=> dispatch({type: PICKUP, item: 'CANDLE'})}>PICK CANDLE</button>
        </>
    )
}