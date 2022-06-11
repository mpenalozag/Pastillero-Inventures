import React from "react";
import "../../styles/container.css";

import Navbar from "./Navbar";
import Description from "./Description";
import Remaining from "./Remaining";

export default function Container(props) {
    return(
        <div className="container">
            <Navbar />
            <Description />
            <Remaining />
        </div>
    )
}