import React from "react";


function RegForm(props) {
    return(
        <input className={props.style} placeholder={props.placeholder} type={props.type}>{props.text}</input>
    )
}

export default RegForm;