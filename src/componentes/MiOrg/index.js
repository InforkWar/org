import { useState } from "react"
import "./MiOrg.css";

const MiOrg = (props) => {

    

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/boton.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg;