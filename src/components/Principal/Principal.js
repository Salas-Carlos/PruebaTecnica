import React from 'react';
import {Card} from '../Cards/Card';
import { useDispatch, useSelector } from 'react-redux';
import {AddTable} from '../../ui/AddTable';
import {DeleteTable} from '../../ui/DeleteTable';



export const Principal = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.Cards)
 
    return (
        <div >
            <DeleteTable/>
            <AddTable/>
            {state.Tables.map((table, i)=>(
                
            <Card table={table} key={i}/>
            ))} 
     
           
        </div>
    )
}
