import React from 'react'
import { useDispatch } from 'react-redux';
import { DeleteCard } from '../Redux/actions/Cards'; 
import './style.css';

export const DeleteTable = () => {
    const dispatch = useDispatch();
  
    return (
        <div className="buttonD">
        <button onClick={()=> dispatch(DeleteCard())} className="btn btn-primary fab">
            <h2>-</h2>
        </button>
        </div>
    )
}
