import {combineReducers} from 'redux';
import {CardsReducer} from './CardsReducers'

export const rootReducer = combineReducers({
    Cards:CardsReducer
    
})