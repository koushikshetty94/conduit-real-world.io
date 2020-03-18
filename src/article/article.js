import React from 'react';
import Hero from './hero';
import Singlearticle from "./singlearticle";
import Comment from "./comment";
import { withRouter } from "react-router-dom";

class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            articleInfo: null
        };
    }
    componentDidMount() {
        let { slug } = this.props.match.params || "";
        fetch(`https://conduit.productionready.io/api/articles/${slug}`).then(res => res.json()).then(({ article }) => {
            this.setState({ articleInfo: article });
        });
    }

    render() {
        return (
            <div>
                <Hero articleInfo={this.state.articleInfo} />
                <Singlearticle articleInfo={this.state.articleInfo}/>
                <Comment />
            </div>
        )
    }
}

export default withRouter(Article); 