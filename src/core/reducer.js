
import { MOVE, PICKUP, SANITY_CHANGE, DICE, RESET } from "./actions";
import { getInitialState } from "./initialState";

export function reducer(state,action) {
        switch (action.type) {
            case MOVE:
                return {...state,
                    steps: state.steps -1,                
                };
            case PICKUP:
                return {...state,            
                    items: [...state.items, action.item]
                }
            case SANITY_CHANGE:
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