import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './core/Home'
import Signup from './user/signup'
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/signin";
import Cart from "./core/Cart";


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signin' exact component={Signin}/>
                <Route path='/signup' exact component={Signup}/>
                <Route path='/cart' exact component={Cart}/>
                    <Route path='/sign' exact component={Signup}/>
                  <PrivateRoutes path='/user/customer/dashboard' exact component={UserDashboard}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
