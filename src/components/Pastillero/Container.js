import React, { useEffect } from "react";
import { useState } from "react";
import "../../styles/container.css";
import axios from "axios";

import Navbar from "./Navbar";
import Description from "./Description";
import Remaining from "./Remaining";
import Medicine from "./Medicine";

export default function Container(props) {
    const [allMedicines, setAllMedicines] = useState([]);

    useEffect(()=> {
        async function getMedicines() {
            const response = await axios.get("https://private-anon-a435fe137d-inventurestest.apiary-mock.com/products");
            const data = response.data;
            console.log(data.payload[0].imagesUrl);
            setAllMedicines(response.data.payload);
        }
        getMedicines();
    }, []);

    const displayAllMedicines = allMedicines.map((medicine) => {
        return(
            <Medicine 
                key={medicine.id}
                name={medicine.name}
                image={medicine.imagesUrl}
                concentration={medicine.concentration}
            />
        );
    });
    return(
        <div className="container">
            <Navbar />
            <Description />
            <Remaining />
            {displayAllMedicines}
        </div>
    )
}