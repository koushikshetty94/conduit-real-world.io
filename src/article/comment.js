import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <div className="container">
                <article className="media">
                    <div className="media-content">
                        <div className="field">
                            <p className="control">
                                <textarea className="textarea" placeholder="Add a comment..."></textarea>
                            </p>
                        </div>
                        <nav className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <a className="button is-info">Post Comment</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        )
    }
}

export default Comment;