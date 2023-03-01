import React from 'react'
import "../styles/Card.css"

export default function Card(props) {

    return (
        <div className="product">
            <img src={props.image} alt="img" />
            <div className="description">
                <p>
                    <b>{props.productName}</b>
                </p>
                <p> ${props.price}</p>
            </div>
        </div>
    )
}



/*<div className="card">
            <div>
                <img src={props.image} alt="img" />
            </div>
            <div className='title'>
                <h1>{props.productName}</h1>
            </div>
            <div className="des">
                <p> ${props.price}</p>
            </div>
        </div>**/