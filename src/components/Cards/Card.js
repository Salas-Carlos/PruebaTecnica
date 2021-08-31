import React from 'react';
import './Card.css';

export const Card = (props) => {
    
    const  Columns  = props.table.Columns;
    
    return (
        <div>
        <table >
            <tr>
                <th>Ingresos</th>
                <th></th>
                <th>Egresos</th>
            </tr>
            <tr>
                <th>Concepto</th>
                <th>Valor</th>
                <th>Concepto</th>
                <th>Valor</th> 
            </tr>

            {Columns.map((columna)=>(
                <tr>
                    {columna.map((fila)=>(
                        <th>{fila}</th>
                    ))}
                </tr>
            ))}
            
            <h3>Total: {props.table.Total}</h3>
        </table>
        </div>
    )
}
