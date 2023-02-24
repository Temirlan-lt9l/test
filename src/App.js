import React from "react";
import RegForm from "./RegForm"
import Text from "./Text";
import "./main.css"

function App(){
    return(
        <div className="main">
            <div className="box">
                <RegForm placeholder="registration" style="input" type="login"/>
                <RegForm placeholder="passsword" style="input" type="password"/>
                <RegForm placeholder="password" style="input" type="password"/>
            </div>
            <div className="box">
            <Text style="span" text="Jimi"/>
            <Text style="span" text="qwe@mail.com"/>
            <Text style="span" text="qwerty"/>
            </div>

        </div>
    )
}

export default App;