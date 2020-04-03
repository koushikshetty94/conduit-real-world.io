import React from "react";
import Card from "./card";
import Hero from "./Hero";
import Aside from "./aside";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            articles: null,
            tags: null
        };
    }
    componentDidMount() {
        let tags = "https://conduit.productionready.io/api/tags";
       this.updateArticles()
        fetch(tags)
            .then(res => res.json())
            .then(({ tags }) => {
                this.setState({ tags });
            });
    }

    updateArticles = () => {
        let articles = "https://conduit.productionready.io/api/articles?limit=10&offset=0";
        fetch(articles)
            .then(res => res.json())
            .then(({ articles }) => {
                this.setState({ articles });
            });

    }
    

    render() {
        return (

            <div>
                <Hero />
                <div className=" is-flex container">
                    <div className="card">
                        {this.state.articles && this.state.articles.map(article => {
                            return (
                                <div>
                                    <Card article={article} updateArticles ={this.updateArticles}  />
                                </div>
                            )
                        })}
                    </div>
                    <div className="aside">
                        <section className="section">
                            <h1 className="title">Popular Tags</h1>
                            {this.state.tags && this.state.tags.map(tag => {
                                return (
                                    <div className="is-inline-block">
                                        <Aside tag={tag} />
                                    </div>
                                )
                                })}
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;