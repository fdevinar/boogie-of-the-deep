import './App.css'
import { useReducer, useEffect } from 'react'
import { checkResult } from './utils/dice-roll.js'

const MOVE = 'MOVE';
const PICKUP = 'PICKUP';
const SANITY = 'SANITY';
const DICE = 'DICE';
const RESET = 'RESET';

function getInitialState () {
    return {
        steps: 8,
        items: ['NOTEBOOK'],
        sanity: 100,
        dice: []
    }
}

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
            case DICE:
                return {...state,
                    dice: [...state.dice, action.result]
                }    
            case RESET:
                return getInitialState();
            default:
            throw Error('unknown action: ' + action.type);
        }        
    }

export default function ReducerRunLoop() {

    const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

    useEffect(()=> {
        if(state.sanity >= 200) {
            console.log('ENLIGHTENED');
        }
        if(state.sanity <= -50) {
            console.log('THE OLD ONES APPROACH');
        }
    },[state.sanity])
    
    return (
        <>
        <h2>Reducer Run Loop</h2>     
        <button onClick={()=> dispatch({type: RESET})}>RESET STATE</button>
        <p>Steps: {state.steps}</p>
        <p>Items: {state.items.join(', ')}</p>
        <button onClick={()=> dispatch({type: MOVE})}>MOVE</button>        
        <br />
        <br />
        <button onClick={()=> dispatch({type: PICKUP, item: 'CANDLE'})}>PICK CANDLE</button>
        <p>SANITY: {state.sanity}</p>
        <button onClick={()=> dispatch({type: SANITY, delta: +10 })}>+</button>
        <button onClick={()=> dispatch({type: SANITY, delta: -30 })}>-</button>
        <br />
        <br />
        <div className='dice-roll-wrapper'>DICE ROLL:        
        {state.dice.map(
            (item,idx) => <button key={idx} className={item ? 'success' : 'fail'}>🎲</button>
        )}
        </div>        
        <button onClick={()=> dispatch({type: DICE, result: checkResult(50)})}>ROLL</button>


        </>
    )
}