import React from 'react';

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.articleInfo && this.props.articleInfo ? <section class="hero is-primary has-background-black	">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                {this.props.articleInfo.title}
                            </h1>
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        {this.props.articleInfo.author.image ? <img src={`${this.props.articleInfo.author.image}`} /> : <img src="https://ya-webdesign.com/transparent250_/heart-png-transparent-background-4.png" />}

                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">{this.props.articleInfo.author.username}</p>
                                    <p className="subtitle is-6">{new Date(this.props.articleInfo.createdAt).toDateString()}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> : null}
            </div>
        )
    }
}
