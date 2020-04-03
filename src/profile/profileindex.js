import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default function Profileindex(props) {
    return (
        <div>
            <section class="hero is-primary ">
                <div className="container">
                    <div class="hero-body">
                        <div class="">
                            <h1 class="title ">
                                {props.user.username}
                            </h1>
                            <h2 class="subtitle">
                                {props.user.bio}
                            </h2>
                            <Link to="/settings">
                                <button class="button is-success is-inverted is-outlined is-pulled-right">edit profile settings</button>
                            </Link>  </div>
                    </div>


                </div>

            </section>
        </div>
    )
}

