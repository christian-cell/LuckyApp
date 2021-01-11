import React from 'react';
import './AccessLogin.scss';
import { useForm } from "react-hook-form";
import { API } from "../../Shared/Servicios/Api";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Login from './Login';


export default function AccessLogin() {




    return (
        <div className="login-container" >
            <div className="container">
                <span>
                    ¿Cómo quieres entrar?
                </span>
                <div>
                    <Link to="/login" >
                        <button className="button" >
                            Usuario
                        </button>
                    </Link>

                    {/* <Router>

                       

                        <Switch>
                            <Route path="/login">
                                <Login></Login>
                            </Route>
                        </Switch>
                    </Router> */}
                </div>

                <Link to="/protectora" >

                    <div>
                        <button className="button" >Asociación protectora</button>
                    </div>

                </Link>

                <div className="ancore-login-container" >
                    <a className="ancore-login" href=""> Registrarse en otro momento </a>
                </div>
            </div>
        </div>
    )
}
