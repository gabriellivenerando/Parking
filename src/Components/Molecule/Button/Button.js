import React from "react";
import { Link } from 'react-router-dom';
import "./Button.css";


const Button = (props)=>{
    return(
        <div className="button_container">
             <Link to={props.path}>
                <button className={props.classButton}>{props.nomeDoButton}</button>
            </Link>

            </div>
    )
}

export default Button;