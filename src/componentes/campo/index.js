import { useState } from "react";

import "./campo.css";

const Campo = (props) => {
    const [valor, actualizarValor] = useState("");
    const placeholderModificado = `${props.placeholder} `;

    //Destructuración, Le damos valor por defecto a type. será text si no mandamos nada.
    const { type = "text" } = props

    const manejarCambio = (e) => {
        
        props.actualizarValor(e.target.value);
    }


    return <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
            type={type} 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            
            >
            </input>
        </div>
}

export default Campo;