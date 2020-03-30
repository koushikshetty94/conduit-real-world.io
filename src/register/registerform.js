import React, { useRef } from 'react';


function Register(props) {

    let email = useRef(null);
    let username = useRef(null);
    let password = useRef(null);

    const handleSignup = (e) => {
        e.preventDefault();
        fetch('https://conduit.productionready.io/api/users',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user:
                        { email: email.current.value, password: password.current.value, username: username.current.value }
                })
            }).then(res => res.json()).then(user => {
                if(user.errors){
                props.history.push("/register");
                }else{
                    props.history.push("/");
                }
            });
    }

    return (
        <div>
            
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                <form className="box">
                                    <div className="field">
                                        <label for="email" className="label">Email</label>
                                        <div className="control has-icons-left">
                                            <input type="email" placeholder="e.g. bobsmith@gmail.com" className="input" ref={email} />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label for="Username" className="label">Username</label>
                                        <div className="control has-icons-left">
                                            <input type="text" placeholder="e.g. shetty94" className="input" ref={username} />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label for="" className="label">Password</label>
                                        <div className="control has-icons-left">
                                            <input type="password" placeholder="*******" className="input" ref={password} />
                                            <span className="icon is-small is-left">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="field">
                                        <button onClick={(e) => handleSignup(e)} className="button is-success">
                                            signup
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


export default Register;