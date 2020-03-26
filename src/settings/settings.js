import React, { Component,useRef } from 'react'
import { Link } from 'react-router-dom'

export default class Settings extends Component {

    
    logout = () => {
        localStorage.clear();
        this.props.updateisLoggedin(false);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>Your Settings</div>
                    <div class="control">
                        <input class="input" type="text" placeholder="Url of Profile picture" />
                    </div>
                    <div class="control">
                        <input class="input" type="text" placeholder="username" />
                    </div>
                    <div class="control">
                        <input class="input" type="text" placeholder="short bio about you" />
                    </div>
                    <div class="control">
                        <input class="input" type="text" placeholder="E-mail" />
                    </div>
                    <div class="control">
                        <input class="input" type="text" placeholder="Password" />
                    </div>
                    <div class="control is-pulled-right	">
                        <button type="submit" class="button is-primary">Submit</button>
                    </div>

                    <div class="control is-pulled-left">
                        <Link to="/">
                            <button onClick={this.logout} type="submit" class="button is-primary has-background-danger">Logout</button>

                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}
