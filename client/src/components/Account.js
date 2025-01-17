import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Create from "../img-frontend/Create.gif"
import "../styles/account.css";

function Account() {
    function tryCreateAccount(data) {
        if (
            data.userName.length > 0 && data.userName.length <= 30 &&
            data.password.length >= 8 && data.password.length <= 20 &&
            data.gamerTag.length >= 3 && data.gamerTag.length <= 6
        ) {
            axios.get("/api/users/")
                .then(response => {
                    let userNameAlreadyExists = false;
                    // console.log(response.data)
                    response.data.forEach(user => {
                        if (user.userName == data.userName) {
                            userNameAlreadyExists = true;
                        }
                    })

                    if (!userNameAlreadyExists) {
                        axios.post("/api/users/", data)
                            .then(response => {
                                localStorage.setItem("userID", response.data._id);
                                document.location.href = "/Game"
                            })
                    } else {
                        
                    }
                })
        } else {
            
        }

    }

    function formatDataForCheck(e) {
        e.preventDefault();

        const userName = document.getElementById("name");
        const gamerTag = document.getElementById("gamerTag");
        const password = document.getElementById("password");

        const formattedData = {
            userName: userName.value,
            password: password.value,
            gamerTag: gamerTag.value
        }

        userName.value = "";
        password.value = "";
        gamerTag.value = "";

        tryCreateAccount(formattedData);
    }

    return (
        <section className="h-100" id="account">
            <div className="container h-100">
                <div className="row justify-content-md-center h-100">
                    <div className="card-wrapper">
                        <div className="brand"><img src={Create} alt="Join the Force" />
                        </div>
                        <div className="card fat">
                            <div className="card-body" id="join">
                                <h2 className="card-title">Join the Force</h2>
                                <form onSubmit={formatDataForCheck} className="my-login-validation" noValidate="">
                                    <div className="form-group">
                                        <label htmlFor="name">Username (1-30 Characters)</label>
                                        <input id="name" type="text" className="form-control" name="name" required autoFocus />
                                        <div className="invalid-feedback">
                                            What's your name? 
                                    </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="gamerTag">Gamer Tag (3-6 Characters)</label>
                                        <input id="gamerTag" type="gamerTag" className="form-control" name="gamerTag" required />
                                        <div className="invalid-feedback">
                                            Your Tag is invalid
                                    </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password (8-20 Characters)</label>
                                        <input id="password" type="password" className="form-control" name="password" required
                                            data-eye />
                                        <div className="invalid-feedback">
                                            Password is required
                                    </div>
                                    </div>
                                    <div className="form-group m-0">
                                        <button className="btn btn-warning btn-block">
                                            Register
                                    </button>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <Link to="/">Already have an account? </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card-footer" id="account-footer">
                            Copyright &copy; 2020 &mdash; DG Universe
                    </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Account;