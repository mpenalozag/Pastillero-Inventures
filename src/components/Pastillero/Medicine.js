import React from "react";
import "../../styles/medicine.css";

export default function Medicine(props) {
    return(
        <div className="medicine">
            <img className="medicinePhoto" src={props.image} alt="medicamente descrito"/>
            <div className="medicineDetails">
                <div className="medicineName">{props.name}</div>
                <div className="medicineDose">{props.concentration}</div>
                <div className="medicineRemaining">Quedan {props.remainder} comprimidos</div>
                <div className="medicineDaysLeft">Para {props.remainder} dias</div>
            </div>
            <button className="shoppingCart"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>
        </div>
    )
}