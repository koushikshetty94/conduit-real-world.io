import React from "react";
import { Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./home/home";
import Login from "./login/loginform";
import Register from "./register/registerform";
import Article from "./article/article";
import Tag from "./tags/tag";

// // import Index from "./loggedinuser/index";
// // import Newarticle from "./newarticle/newarticle";
// // import Settings from "./settings/settings";
// import Profileindex from "./profile/index";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedin: false
        };
    }
    updateisLoggedin = value => {
        console.log("hi");
        this.setState({ isLoggedin: value });
    }

    render() {
        return (
            <div>
                <Header isLoggedin={this.state.isLoggedin} />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" render={() => <Login updateisLoggedin={this.updateisLoggedin} />} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/article/:slug" component={Article} />
                <Route exact path="/tags/:name" component={Tag} />
            </div>
        )
    }
}

export default App;