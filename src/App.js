import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/header/Header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  // Cuando trabajamos con estados deben estar dentro de funciones de componentes y antes del return para definirlo
  //Ternario --> condición ? seMuestra : noSeMuestra

  const [mostrarFormulario, actualizarMostrar] = useState(false); //inicializa en true
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://www.aluracursos.com/assets/img/challenges/oracle-one/GenesysRondon.1686744883.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ]);

  const [equipos, actualizarEquipos] = useState([

    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57c278",
      colorSecundario:"#d9f7e9"
    }
    ,
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82cffa",
      colorSecundario:"#e8f8ff"
    }
    ,
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#a6d157",
      colorSecundario:"#f0f8e2"
    }
    ,
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#e06b69",
      colorSecundario:"#fde7e8"
    }
    ,
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#db6ebf",
      colorSecundario:"#fae9f5"
    }
    ,
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#ffba05",
      colorSecundario:"#fff5d9"
    }
    ,
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#ff8a29",
      colorSecundario:"#ffeedf"
    }
    ,

])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador
const registrarColaborador = (colaborador) => {
  console.log("Nuevo Colaborador ", colaborador);
  //spread operator
  actualizarColaboradores([...colaboradores, colaborador]);
}

//Eliminar colaborador
const eliminarColaborador = (id) => {
  console.log ("Eliminar Colaborador", id);
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
  actualizarColaboradores(nuevosColaboradores);
}

//actualizar Color
const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color, id);
  const equiposActualizados = equipos.map((equipo) => {
    if (equipo.id === id){
      equipo.colorPrimario = color
    }

    return equipo;
  })

  actualizarEquipos(equiposActualizados);
}

// Crear equipo
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
}

const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador;
  })
  actualizarColaboradores(colaboradoresActualizados)
}



//Siempre que trabajo con .map necesitamos ponerle una key única para el elemento.
//En las arrow functions si no ponemos las {} y el return podemos ponerlo todo en una línea.
  return (
    <div>
      <Header/>
      { 
      mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=> equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <></> }
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      
      {
        equipos.map( (equipo)=><Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores= {colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />)
      }

      <Footer />
    </div>
  );
}

export default App;
