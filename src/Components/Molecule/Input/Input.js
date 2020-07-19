import React from "react";
import "./Input.css";

const Input = ({changeUser}) =>{
    return(
        <div className="container_input">
            <input
             onChange={e => changeUser(e.target.value)}
            />
        </div>
    )
}

export default Input;