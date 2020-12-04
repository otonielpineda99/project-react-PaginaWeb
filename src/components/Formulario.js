import React, { Component } from 'react';
import Sidebar from './Sidebar';
class Blog extends Component {
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();

    state = {
        user: {}
    };

    recibirFormulario = (e) =>{
        e.preventDefault();
        var genero = 'hombre';
        if(this.generoHombreRef.current.checked){
            genero = this.generoHombreRef.current.value;
        }else{
            genero = this.generoMujerRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        };

        this.setState({
            user: user
        })

        console.log("FORMULARIO ENVIADO");
        console.log(user);
    }

    render() {
        if(this.state.user.nombre){
            var user = this.state.user
        }
        return (
            <div id="formulario">
                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>

                        {/** Mostrar datos del Formulario**/}
                        {this.state.user.nombre && 
                            <div id="user-data">
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Biografia: <strong>{user.bio}</strong></p>
                                <p>Genero: <strong>{user.genero}</strong></p>
                            </div>
                        }
                        {/** Crear un Formulario**/}
                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>  

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radiobuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}/>Hombre
                        <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} />Mujer<br />
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>
                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>
            </div>
        );
    }
}
export default Blog;