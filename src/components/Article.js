import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import 'moment/locale/es';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'succes'
                });
            }).catch(err =>{
                    this.setState({
                        articles: false,
                        status: 'succes'
                });
            });
    }

    deleteArticle = (id) => {
        axios.delete(this.url+ 'article/'+id)
            .then(res => {

                this.setState({
                    article: res.data.article,
                    status: 'deleted'
                });

                swal(
                    'Articulo borrado',
                    'El articulo ha sido borrado correctamente',
                    'success'
                )

            });
    }

    render() {

        if(this.state.status === 'deleted'){
            return <Redirect to="/blog" />
        }

        var article = this.state.article;
        return (
            <div className="center">
                <section id="content">

                    {this.state.article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                            {article.image !== null ? (
                                <img src={this.url+'get-image/'+article.image} alt={article.image} />
                            ) : (
                                <img src="https://www.fincasrusticasartic.com/upload_image/sin-imagen.jpg" alt={article.image} />
                            )
                            }
                            </div>
                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                    <Moment locale="es" fromNow>{article.date}</Moment> 
                        </span>
                            <p> 
                                {article.content}
                            </p>
                            <button onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            } 
                            className="btn btn-danger">Eliminar</button>
                            <Link to={'/blog/editar/'+article._id} className="btn btn-warning">Editar</Link>
                            <div className="clearfix"></div>
                        </article>
                    }

                    {!this.state.article && this.state.status === 'succes' &&
                        <div id="article">
                            <h2 className="subheader">El articulo no existe</h2>
                            <p>Intenta luego...</p>
                        </div>
                    }

                    {!this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere...</p>
                        </div>
                    }
                    <Sidebar />

                </section>
            </div>
        );
    }
}

export default Article;