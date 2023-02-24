import React from "react";

function Text(props) {
    return(
        <span className={props.style} >{props.text}</span>
        )
}

export default Text;