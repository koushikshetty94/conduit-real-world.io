import React from 'react'

class Singlearticle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                {this.props.articleInfo && this.props.articleInfo ? <div className="card">
                    <header className="card-header">
                        <p className="card-header-title ">
                            {this.props.articleInfo.title}
                        </p>
                        <a href="#" className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </a>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            {this.props.articleInfo.body}
                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive
                            </a>
                            <br />
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div> : null}

            </div>
        )
    }
}

export default Singlearticle;