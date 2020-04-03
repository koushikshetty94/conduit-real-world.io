import React from 'react'
import { Link } from 'react-router-dom';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: this.props.article && this.props.article.favorited

        }
    }

    handleUnfavorite = () => {
        fetch(`https://conduit.productionready.io/api/articles/${this.props.article && this.props.article.slug}/favorite`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Token ${localStorage["conduit-token"]}`
            }
        }).then(res => res.json()).then(res => {
            console.log(res)
            this.props.updateArticles()
            this.setState({ favorite: false })

        })
    }

    handleFavorite = (e) => {
        // e.preventDefault();
        console.log(this.state.favoriteCount)
        // console.log("handle",e.target.innerText === "favorite")
        // console.log(this.props.article.favorited,this.props.article.favoriteCount)
        //    if(!this.state.favorite){

        fetch(`https://conduit.productionready.io/api/articles/${this.props.article && this.props.article.slug}/favorite`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Token ${localStorage["conduit-token"]}`
            }
        }).then(res => res.json()).then(res => {

            this.props.updateArticles()
            this.setState({ favorite: true })

        })

        //    }
        //    else if(this.state.favorite){
        //     fetch(`https://conduit.productionready.io/api/articles/${this.props.article && this.props.article.slug}/favorite`,{
        //         method : "DELETE",
        //         headers :{
        //             "Content-Type" : "application/json",
        //             authorization: `Token ${localStorage["conduit-token"]}`
        //         }
        //     }).then(res => res.json()).then(res => {
        //         console.log(res)
        //         if(this.state.favoriteCount == 1){
        //         this.setState({favorite: false,favoriteCount:this.state.favoriteCount - 1})
        //     }

        //     } 
        //     ) 
        // }
    }
    render() {
        console.log(this.state.favorite)
        return (
            <div className="container">
                <div>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={`${this.props.article.author.image}`} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{this.props.article.author.username}</p>
                            <p className="subtitle is-6">{new Date(this.props.article.createdAt).toDateString()}</p>
                        </div>
                    </div>
                    <button onClick={this.state.favorite ? this.handleUnfavorite : this.handleFavorite} className="is-pulled-right button">{this.props.article.favoritesCount}</button>
                    <div className="content">
                        {this.props.article.title}
                        {/* <br /> */}
                    </div>
                    <div className="content">
                        {this.props.article.slug}
                        {/* <br /> */}
                    </div>
                    <Link to={`/article/${this.props.article.slug}`}>Read More...</Link>
                </div>
                <hr />
            </div>

        )
    }
}

export default Card;