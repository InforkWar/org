import "./boton.css";

const Boton = (props) => {
    return <div className="container-boton">
                <button className="boton">{props.children}</button>
            </div>
}

export default Boton;