import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPruebas extends Component {
    contador = 0;
    /*
        constructor(props){
            super(props);
            this.state = {
                contador: 0
            };
        }
    */
    state = {
        contador: 0
    };
    HolaMundo(nombre, edad) {
        var presentacion =
            (
                <div>
                    <h2>HOLA, SOY {nombre}</h2>
                    <h3>Tengo {edad} años</h3>
                </div>
            );
        return presentacion;
    }
    sumar =(e) =>  {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    restar =(e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
    render() {
        var nombre = "Otoniel Pineda";
        return (
            <section id="content">
                <h2 className="subheader">Ultimos Articulos</h2>
                <p>
                    HOLA CON REACT!
                 </p>
                <h2 className="subheader">Funciones y JSX</h2>
                {this.HolaMundo(nombre, 12)}

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                </section>
                <h2 className="subheader">Estado</h2>
                <p>
                    Contado: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>
            </section>
        );
    }
}

export default SeccionPruebas;