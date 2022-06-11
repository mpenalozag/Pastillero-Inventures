import React from "react";
import "../../styles/medicine.css";

export default function Medicine(props) {
    return(
        <div className="medicine">
            <div className="medicinePhoto"></div>
            <div className="medicineDetails">
                <div className="medicineName">Something</div>
                <div className="medicineDose">100mg</div>
                <div className="medicineRemaining">Quedan 30 comprimidos</div>
                <div className="medicineDaysLeft">Para 30 dias</div>
            </div>
            <button className="shoppingCart"><i class="fa fa-cart-plus" aria-hidden="true"></i></button>
        </div>
    )
}