import React from "react";
import "../../styles/container.css";

import Navbar from "./Navbar";
import Description from "./Description";
import Remaining from "./Remaining";
import Medicine from "./Medicine";

export default function Container(props) {
    // TO DO: Hacer requests a la api para rellenar el pastillero del usuario.


    return(
        <div className="container">
            <Navbar />
            <Description />
            <Remaining />
            <Medicine />
        </div>
    )
}