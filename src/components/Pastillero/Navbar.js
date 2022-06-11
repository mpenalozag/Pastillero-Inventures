import React from "react";
import "../../styles/navbar.css";

export default function Navbar(props) {
    return(
        <div className="navbar">
            <button className="iconButton"><i className="fa fa-bars"></i></button>
            <div className="title">Mi pastillero</div>
            <button className="searchButton"><i className="fa fa-search" aria-hidden="true"></i></button>
            <button className="cartButton"><i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
        </div>
    )
}