import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import {Link} from 'react-router-dom';
import Global from '../Global';
class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    }

    componentWillMount() {
        var home = this.props.home;
        var search = this.props.search;
        
        if(home === 'true'){ 
            this.getLastArticles();
        }else if (search && search !== null && search !==undefined){
            this.getArticlesBySearch(search);
        }else{
            this.getArticles();
        }
       
    }
    getArticlesBySearch = (searched) => {
        axios.get(this.url+"search/"+searched)
            .then(res => {
                    this.setState({
                        articles: res.data.articles,
                        status: 'succes'
                    });
                    
            })
            .catch(err =>{
                this.setState({
                    articles: [],
                    status: 'succes'
                });
            });
    }
    getLastArticles = () => {
        axios.get(this.url+"articles/last")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'succes'
                });
            });
    }

    getArticles = () => {
        axios.get(this.url+"articles")
            .then(res => {
                this.setState({
                    articles: res.data.articles,
                    status: 'succes'
                });
            });
    }
    render() {
        if (this.state.articles.length >= 1) {

            let listArticles = this.state.articles.map((article) => {
                return (
                    <article key={article._id} className="article-item" id="article-template" >
                        <div className="image-wrap">
                            {article.image !== null ? (
                                <img src={this.url+'get-image/'+article.image} alt={article.image} />
                            ) : (
                                <img src="https://www.fincasrusticasartic.com/upload_image/sin-imagen.jpg" alt={article.image} />
                            )
                            }
                        </div>
                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment locale="es" fromNow>{article.date}</Moment>
                        </span>
                        <Link to={'/blog/articulo/'+article._id} href="#">Leer mas</Link>
                        <div className="clearfix"></div>
                    </article >
                );
            });

            return (
                <div id="articles">
                    {listArticles}
                </div>
            );
        } else if (this.state.articles.length === 0 && this.state.status === 'succes') {
            return (
                <div id="articles">
                    <h2 className="subheader">NO HAY ARTICULOS PARA MOSTRAR</h2>
                    <p>No hay contenido en esta seccion</p>
                </div>
            );
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga </p>
                </div>
            );
        }
    }
}

export default Articles;