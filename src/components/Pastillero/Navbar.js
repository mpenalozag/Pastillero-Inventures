import React from "react";
import "../../styles/pastillero.css";

export default function Navbar(props) {
    return(
        <div className="navbar">
            <div className="content">
                <button>Home</button>
                <h1>Mi pastillero</h1>
                <button>Search</button>
                <button>Cart</button>
            </div>
        </div>
    )
}