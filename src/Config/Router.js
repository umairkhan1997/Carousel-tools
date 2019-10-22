import React from 'react';
import Signup from '../Component/Signup';
import Signin from '../Component/Signin'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drawer from '../Component/Drwaer';

function Navigations() {
    return (
        <Router>
        

            
            <div>
                <Route exact path="/" component={Signup} />
                <Route path="/Signin" component={Signin} />
                <Route path="/Drawer" component={Drawer}/>
               
            </div>
        </Router>
    );
}

export default Navigations