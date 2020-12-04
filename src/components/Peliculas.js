import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Sidebar from './Sidebar';
class Peliculas extends Component {
    state = {};

    cambiarTitulo = () => {

        var { peliculas } = this.state;
        //var random = Math.floor(Math.random()*3);
        peliculas[0].titulo = "TITANIC - JAMES CAMERON";
        this.setState({
            peliculas: peliculas
        })
    }
    favorita = (pelicula, indice) => {
        console.log("FAVORITA MARCADA");
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount() {
        //alert("SE VA A MONTAR EL COMPONENTE");
        this.setState({
            peliculas: [
                { titulo: 'TITANIC', image: 'https://s1.eestatic.com/2017/12/02/cultura/cine/Cine-Libros-Titanic-James_Cameron-Leonardo_DiCaprio-Kate_Winslet-Cine_266484540_56157411_1024x576.jpg' },
                { titulo: 'Wonder Woman', image: 'https://cnet4.cbsistatic.com/img/Y-KZ01aRkyjGBEgHx1rnfY9rR24=/470x836/2017/05/31/b3eeb962-b471-4ab3-991e-b1a92d29ac80/wonder-woman-2017-1.jpg' },
                { titulo: 'La teoria del todo', image: 'https://www.aceprensa.com/wp-content/uploads/2015/01/266856-0.jpg' }
            ],
            nombre: 'Otoniel Pineda',
            favorita: {}
        });
    }

    componentDidMount() {
        //alert("YA SE HA MONTADO EL COMPONENTE");
    }

    componentWillUnmount() {
        //  alert("SE VA A DESMONTAR");
    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };
        return (
            <React.Fragment>

                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">Listado de Peliculas </h2>
                        <p>Seleccion de Peliculas Favoritas de {this.state.nombre}</p>
                        <div>
                            <button onClick={this.cambiarTitulo}>Cambiar Titulo pelicula 1</button>
                        </div>
                        {this.state.favorita.titulo ? (
                            <p className="favorita" style={pStyle}>
                                <strong>La pelicula favorita es: </strong>
                                <span>{this.state.favorita.titulo}</span>
                            </p>
                        ) : (
                                <p>NO HAY PELICULAS FAVORITAS AUN</p>
                            )
                        }

                        {/*Crear componente pelicula*/}
                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>
            </React.Fragment>
        );
    }

}

export default Peliculas;