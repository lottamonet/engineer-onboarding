//Import react
import React from "react";


const Card = (props) => {
    return ( 
        <div className="card">
            <img src={props.imgSrc} alt="fruit"/>
            <div className="card-info">
                <p className="handle">{props.handle}</p>
                <p className="timezone">{props.timeZone}</p>
            </div>
        </div>
    );
}
export default Card;