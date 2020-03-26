import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/header";
import Home from "./home/home";
import Login from "./login/loginform";
import Register from "./register/registerform";
import Article from "./article/article";
import Tag from "./tags/tag";
import Newarticle from "./newarticle/newarticle";
import Settings from "./settings/settings";

// // import Index from "./loggedinuser/index";
// // import Newarticle from "./newarticle/newarticle";

// import Profileindex from "./profile/index";

function Auth(props) {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:slug" component={Article} />
        <Route exact path="/newarticle" component={Newarticle} />
        <Route exact path="/settings" render={()=> <Settings updateisLoggedin={props.updateisLoggedin} /> } />
        <Route path="/*" render={() => <h1>page not found</h1>} />
    </Switch>
}
function NoAuth(props) {
    return <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" render={() => <Login updateisLoggedin={props.updateisLoggedin} />} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/article/:slug" component={Article} />
        <Route exact path="/tags/:name" component={Tag} />
        <Route path="/*" render={() => <h1>page not found</h1>} />
    </Switch>
}

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
    componentDidMount() {
        if (localStorage["conduit-token"]) {
            // check the token
            fetch("https://conduit.productionready.io/api/user", {
                headers: {
                    authorization: `Token ${localStorage["conduit-token"]}`
                }
            }).then(res => res.json()).then(user => {
                this.setState({ isLoggedin: true });
            })
        }
    }


    render() {
        return (
            <div>
                <Header isLoggedin={this.state.isLoggedin} />
                {
                    this.state.isLoggedin ? <Auth updateisLoggedin={this.updateisLoggedin}/> : <NoAuth updateisLoggedin={this.updateisLoggedin} />
                }
            </div>
        )
    }
}

export default App;