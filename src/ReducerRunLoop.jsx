import './App.css'
import { useReducer, useEffect } from 'react'

const MOVE = 'MOVE';
const PICKUP = 'PICKUP';
const SANITY = 'SANITY';

function reducer(state,action) {
        switch (action.type) {
            case MOVE:
                return {...state,
                    steps: state.steps -1,                
                };
            case PICKUP:
                return {...state,            
                    items: [...state.items, action.item]
                }
            case SANITY:
                return {...state,                    
                    sanity: state.sanity + action.delta
                }                                                
            default:
            throw Error('unknown action: ' + action.type);
        }        
    }

export default function ReducerRunLoop() {

    const [state, dispatch] = useReducer(reducer, {
        steps: 8,
        items: ['NOTEBOOK'],
        sanity: 100,
    });

    // FIX THIS TO AVOID RUNNING EVERY RENDER
    // MAYBE LEAVE IT IF ONLY USING FOR CLASS STYLING
    useEffect(()=> {
        if(state.sanity >= 200) {
            console.log('ENLIGHTENED');
        }
        if(state.sanity <= -50) {
            console.log('THE OLD ONES APPROACH');
        }
    }),[state.sanity]
    
    return (
        <>
        <h2>Reducer Run Loop</h2>     
        <p>Steps: {state.steps}</p>
        <p>Items: {state.items.join(', ')}</p>
        <button onClick={()=> dispatch({type: MOVE})}>MOVE</button>        
        <br />
        <br />
        <button onClick={()=> dispatch({type: PICKUP, item: 'CANDLE'})}>PICK CANDLE</button>
        <p>SANITY: {state.sanity}</p>
        <button onClick={()=> dispatch({type: SANITY, delta: +10 })}>+</button>
        <button onClick={()=> dispatch({type: SANITY, delta: -30 })}>-</button>
        </>
    )
}