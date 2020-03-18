import React from "react";
import { Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./home/home";
import Login from "./login/loginform";
import Register from "./register/registerform";
import Article from "./article/article";
import Tag from "./tags/tag";
import Index from "./loggedinuser/index";
import Newarticle from "./newarticle/newarticle";
import Settings from "./settings/settings";
import Profileindex from "./profile/index";



function App() {
    return (
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/article/:slug" component={Article} />
            <Route exact path="/tags/:name" component={Tag}/>
            <Route exact path="/logged" component={Index}/>
            <Route exact path="/newarticle" component={Newarticle}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/profile" component={Profileindex}/>


        </div>
    )

}

export default App;