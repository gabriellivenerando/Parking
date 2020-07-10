import React from "react";
import "./Button.css";


const Button = (props)=>{
    return(
        <div className="button_container">
            <button className={props.classButton}><a href={props.link}>{props.nomeDoButton}</a></button>
        </div>
    )
}

export default Button;