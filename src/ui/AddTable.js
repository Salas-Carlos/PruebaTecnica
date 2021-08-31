import React from 'react'
import { useDispatch } from 'react-redux';
import { AddCard } from '../Redux/actions/Cards'; 
import './style.css';

export const AddTable = () => {
    const dispatch = useDispatch();

    return (
        <div className="buttonD">
        <button className="btn btn-primary fab" onClick={()=>dispatch(AddCard())} >
            <h2 className="center">+</h2>
        </button>
        </div>
    )
}
