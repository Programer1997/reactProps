import React from "react";
import "./cards.scss";


const Card = (props)=>{
    console.log(props);

    return (
        <div className="containerCard">
            <img src={props.image} alt="" />
            <h1 className="qualify">{props.qualify}</h1>
            <p className="city">{props.city}</p>
            <p className="price">{props.price}</p>
        </div>
    );

};

export default Card;