
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
            case DICE:                                 
                return {...state,                        
                    sanity: state.sanity + ( action.outcome.effect?.sanity || 0 ),
                    events: action.outcome.event
                    ? [...state.events, action.outcome.event]
                    : state.events,
                }                
            case RESET:
                return getInitialState();
            default:
            throw Error('unknown action: ' + action.type);
        }        
    }