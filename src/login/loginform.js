import React, { useRef } from 'react';
import {withRouter} from 'react-router-dom';

function Login(props) {

    let email = useRef(null);
    let password = useRef(null);

    function handleLogin(e) {
        e.preventDefault();
        fetch('https://conduit.productionready.io/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:  JSON.stringify({
                user:
                    { email: email.current.value, password: password.current.value}
            })
        }).then(res => res.json())
            .then(userInfo => {
                if (userInfo.errors) {
                    props.updateisLoggedin(false);
                }
                else {
                    props.updateisLoggedin(true);
                    props.history.push('/');
                    localStorage.setItem('conduit-token',userInfo.user.token);
                }
            })
    }

    return (
        <div>

            <section className="hero is-primary is-fullheight">
                <div className="hero-body has-background-white">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <form action="" className="box">
                                    <div className="field">
                                        <label for="" className="label">Email</label>
                                        <div className="control has-icons-left">
                                            <input type="email" placeholder="e.g. bobsmith@gmail.com" className="input" ref={email} required />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label for="" className="label">Password</label>
                                        <div className="control has-icons-left">
                                            <input type="password" placeholder="*******" className="input" ref={password} required />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <button onClick={(e) => handleLogin(e)} className="button is-success">
                                            Login
              </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default withRouter(Login);