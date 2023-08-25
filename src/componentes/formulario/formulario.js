import { useState } from "react";
import "./formulario.css"
import Campo from "../campo/index.js";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (event) => {
        event.preventDefault();
        console.log("Manejar el envio");
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2 className="">Rellena el formulario para crear el colaborador</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre..." valor={nombre} actualizarValor={actualizarNombre} required/>
            <Campo titulo="Puesto" placeholder="Ingresar puesto..." valor={puesto} actualizarValor={actualizarPuesto} required/>
            <Campo titulo="Foto" placeholder="Ingresar foto..." valor={foto} actualizarValor={actualizarFoto} required/>
            <ListaOpciones valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear Colaborador
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2 className="">Rellena el formulario para crear el Equipo</h2>
            <Campo titulo="Titulo" placeholder="Ingresar Título..." valor={titulo} actualizarValor={actualizarTitulo} required/>
            <Campo type="color" titulo="Color" placeholder="Ingresar el color en hex..." valor={color} actualizarValor={actualizarColor} required/>
            <Boton>
                Registrar Equipo
            </Boton>
        </form>

    </section>
}

export default Formulario;