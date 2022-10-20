import 'bulma/css/bulma.min.css';

import Modal from './Modal';
import React, {useState} from 'react';
const Card = (props) => {
const {name, ticker, amount, description} = props.company

    return (
    <div className="card" >
        <div className="card-content">
            <div className="media">
            <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">{ticker}</p>
                <p className="subtitle is-5">${amount} Invested</p>
            </div>
            </div>
            <div className="content">
            {description} 
            </div>
    </div>
    
</div>
    )

}



export default Card