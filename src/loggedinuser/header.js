import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="container" >
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item"><p>conduit</p>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div id="navbarBasicExample" className="navbar-menu">
                            <div className="navbar-start">
                                <Link to="/" className="navbar-item">
                                    Home
      </Link>

                            </div>
                            <div className="navbar-start">
                                <Link to="/newarticle" className="navbar-item">
                                    New Article
      </Link>

                            </div>
                            <div className="navbar-start">
                                <Link to="/settings" className="navbar-item">
                                    Settings
      </Link>

                            </div>
                            <div className="navbar-start">
                                <Link to="/" className="navbar-item">
                                    profilename
      </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;