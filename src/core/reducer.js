
import { MOVE, PICKUP, SANITY_CHANGE, EVENT, DICE, RESET } from "./actions";
import { getInitialState } from "./initialState";

export function reducer(state,action) {    
        switch (action.type) {
            case MOVE:
                return {...state,
                    steps: state.steps -1,                
                    room: action.room
                };
            case PICKUP:
                return {...state,            
                    inventory: [...state.inventory, action.item]
                }
            case SANITY_CHANGE:
                return {...state,                    
                    sanity: state.sanity + action.delta
                }                
            case EVENT:
                return {...state,
                    events: [...state.events, action.trigger]
                }
            // case DICE:
            //     return {...state,
            //         dice: [...state.dice, action.result]
            //     }    
            case RESET:
                return getInitialState();
            default:
            throw Error('unknown action: ' + action.type);
        }        
    }