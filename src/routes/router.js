import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginComponent from "../components/LoginRegisterComponent/login-component";
import App from "../App";
import RegisterComponent from "../components/LoginRegisterComponent/register-component";


export default function Routers() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <LoginComponent/>
                </Route>
                <Route path={"/home"} exact>
                    <App />
                </Route>
                <Route path={"/register"} exact>
                    <RegisterComponent />
                </Route>
            </Switch>
        </Router>
    );
}