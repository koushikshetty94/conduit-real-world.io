import React, { Component,useRef } from 'react'
import { Link } from 'react-router-dom'



export default function Settings(props) {

    console.log(props.user);

    let email = useRef(null);
    let bio = useRef(null);
    let image = useRef(null);
    let username = useRef(null);
    let password = useRef(null);

   
    function logout() {
        localStorage.clear();
        props.updateisLoggedin(false);
    }
    
    function handleSubmit(e){
        e.preventDefault();
        fetch("https://conduit.productionready.io/api/user",{
            method : "PUT",
            headers :{
                "Content-Type" : "application/json",
                authorization: `Token ${localStorage["conduit-token"]}`
            },
            body: JSON.stringify({
                user: {email: email.current.value, bio: bio.current.value, image: image.current.value, username: username.current.value, password : password.current.value}
            })
        }).then(res => res.json()).then(user => window.location.href="/");
    
    }
        return (
            <div>
                <div className="container">
                    <div>Your Settings</div>
                    <div class="control">
                        <input class="input" type="text" ref={image} placeholder={props.user.image} />
                    </div>
                    <div class="control">
                        <input class="input" type="text" ref={username} placeholder={props.user.username} />
                    </div>
                    <div class="control">
                        <input class="input" type="text" ref={bio} placeholder={props.user.bio} />
                    </div>
                    <div class="control">
                        <input class="input" type="text" ref={email} placeholder={props.user.email} />
                    </div>
                    <div class="control">
                        <input class="input" type="password" ref={password} placeholder={props.user.password} />
                    </div>
                    <div class="control is-pulled-right	">
                        <button onClick={(e)=>handleSubmit(e)} type="submit" class="button is-primary">Submit</button>
                    </div>

                    <div class="control is-pulled-left">
                        <Link to="/">
                            <button onClick={logout} type="submit" class="button is-primary has-background-danger">Logout</button>

                        </Link>
                    </div>
                </div>

            </div>
        )
    }

