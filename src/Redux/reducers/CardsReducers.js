
import { types } from "../types/type";
import { CreateColumns } from '../Logic/Add';

const initialState = {
   Tables:[]
};


export const CardsReducer = (state= initialState, action) =>{

    switch(action.type){

        case types.AddCard:
            const {Columns, Total} = CreateColumns();
            state.Tables.push({Columns: Columns, Total: Total})
            return {...state}

        case types.DeleteCard:
            state.Tables.pop()
            return { ...state}
        default:
            return state;
    }

}