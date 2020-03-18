import React from 'react'
import { Link } from 'react-router-dom';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.article);
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
                    <button className="is-pulled-right	button">Like</button>
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