import React from "react";
import { useState } from "react";



const Semaforo = () => {

    const [color, setColor] = useState("red");

    const CambiaColor= (seleccionado) => {
        setColor(seleccionado)

    }
    return (
        <main>
            <img 
                src="https://img.freepik.com/foto-gratis/japon-calle-dia_23-2148942935.jpg?t=st=1723013899~exp=1723017499~hmac=98562f4ca5e34dc26c4e910e89cad31b7ce3cfe24ec285a4626fda3772b3387d&w=1060" 
                alt="cruce peatonal" 
                className="background-image" 
            />
            <div className="poste"></div>
            <div className="caja"> 
                <div className={`red ${color == "red" ? "encender" : ""}`}
                onClick={() => CambiaColor ("red")}></div>

                <div className={`yellow ${color == "yellow" ? "encender" : ""}`}
                onClick={() => CambiaColor ("yellow")}></div>
                
                <div className={`green ${color == "green" ? "encender" : ""}`}
                onClick={() => CambiaColor ("green")} ></div>
            </div>
        </main>
    )
};

export default Semaforo


