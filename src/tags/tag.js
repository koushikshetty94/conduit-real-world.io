import React from 'react';
import Hero from '../home/Hero';
import Card from "../home/card";

class Tag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null
        }
    }

    componentDidMount() {
        fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=0&tag=${this.props.match.params.name}`).then(res => res.json()).then(({ articles }) => {
            this.setState({ articles })
        })
    }

    render() {
        console.log(this.state.articles);
        // console.log(this.state.articles.title);
        return <div>
            <Hero />
            {this.state.articles && this.state.articles.map(article => {
                return <div className="container">
                    <div>
                        <Card article={article}/>
                    </div>
                </div>
            })}

        </div>

    }
}

export default Tag;