import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/container.css";
import axios from "axios";

import Navbar from "./Navbar";
import Description from "./Description";
import Remaining from "./Remaining";
import Medicine from "./Medicine";

export default function Container(props) {
    const [allMedicines, setMedicines] = useState([]);
    const [allPurchases, setPurchases] = useState([]);

    useEffect(()=> {
        async function getMedicines() {
            const response = await axios.get("https://private-anon-a435fe137d-inventurestest.apiary-mock.com/products");
            const data = response.data;
            setMedicines(response.data.payload);
        }
        async function getPurchases() {
            const response = await axios.get("https://private-anon-a435fe137d-inventurestest.apiary-mock.com/purchases");
            const data = response.data.payload;
            setPurchases(data);
        }
        getMedicines();
        getPurchases();
    }, []);

    function getDatesDiff(oldDate) {
        const today = new Date();
        const old = new Date(oldDate);
        const diffTime = Math.abs(today - old);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays;
    }

    function getQuantity(medicineQuantity, daysSincePurchase) {
        if ((medicineQuantity - daysSincePurchase) < 0) {
            return 0;
        } else {
            return medicineQuantity - daysSincePurchase;
        }
    }

    function getRemainingMedicineData(medicineId) {
        let remainingMedicine = 0;
        allPurchases.forEach(purchase => {
            purchase.details.forEach(detail => {
                if (detail["product_id"] === medicineId) {
                    let medicineQuantity = detail["quantity"];
                    let datesDiff = getDatesDiff(purchase["received_date"]);
                    let remainingQuantity = getQuantity(medicineQuantity, datesDiff);
                    remainingMedicine += remainingQuantity;
                }
            });
        })
        return remainingMedicine;
    }


    const displayAllMedicines = allMedicines.map((medicine) => {
        let medicineRemainder = getRemainingMedicineData(medicine.id)
        return(
            <Medicine 
                key={medicine.id}
                name={medicine.name}
                image={medicine.imagesUrl}
                concentration={medicine.concentration}
                remainder={medicineRemainder}
            />
        );
    });



    return(
        <div className="container">
            <Navbar />
            <Description />
            <Remaining />
            <div className="medicinesContainer">
                {displayAllMedicines}
            </div>
        </div>
    )
}