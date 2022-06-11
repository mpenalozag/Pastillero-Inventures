import React from "react";
import "../../styles/description.css";

export default function Description(props) {
    return(
        <div className="description">
            <img className="photo" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/pill_1f48a.png" alt="pill"/>
            <div className="shoppingMessage">Revisa tus compras</div>
            <div className="informationMessage">Agrega al carro si necesitas reponer</div>
        </div>
    )
}