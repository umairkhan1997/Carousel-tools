import React, { Component } from 'react';
import {  Route,BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
 import App from './App';
import SelectData from './SelectData';
import Stepper from './Steppers'
import SelectTheme from './SelectTheme'
import StartPage from './StartPage'
import Signup from './component/Signup';
import SignIn from './component/Signin';
import Setting from './component/Setting'
import Manage from './component/Manage'
// import Main from './components/main';
// import Signup from './components/signup';
// import Login from './components/login';
// import User from './components/user';
import history from '../src/history'
// import Slider from './Component/Slider';
import Verify from './component/Verify';
import Profile from './component/Profile'
// import firebase from 'firebase'
// import Notfound from './components/notFound';


function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  function PrivateRoute2 ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  
  function PublicRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to='/main' />}
      />
    )
  }

class Routers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authed: false
        }

    }
    // componentDidMount() {
    //     let that = this
    //     firebase.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //             that.setState({
    //                 authed: true
    //             })
    //         } else {
    //             that.setState({
    //                 authed: false
    //             })
    //         }
    //     });
    // }



    render() {
        return (
            <Router history={history}>
                    <Switch>
                    
                        <Route exact path='/'  component={SignIn}/>
                        <Route  path='/Signup'  component={Signup}/>
                        <Route path='/Verify'  component={Verify}/>
                        <Route  path ='/StartPage' component={StartPage}/>
                        <Route path='/Manage' component={Manage}/>
                        <Route path='/Profile' component={Profile} />
                        <Route path='/Setting' component={Setting}/>
                        <Route path='/stepper'  component={Stepper} />
                        {/* <Route exact path='/'  render={(routesProps)=> <StartPage {...routesProps} history={history}/> }/> */}
                        {/* <Route exact path='/stepper' render={(routesProps)=> <HorizontalLinearStepper {...routesProps} history={history}/> }/> */}
                        <Route  path="/App" component={App} />
                        <Route  path="/SelectData" component={SelectData} />
                        <Route path='/SelectTheme' component={SelectTheme}/>
                     
                        {/* <Route exact path="/Next" component={Next} /> */}
                        {/* <PrivateRoute authed={this.state.authed} path="/main" component={Main} />
                        <PrivateRoute2 authed={this.state.authed} path='/user' component={User} />
                        <PublicRoute authed={this.state.authed} path="/login" component={Login} />
                        <PublicRoute authed={this.state.authed} path="/Signup" component={Signup} />
                        <Route path="*" component={Notfound}/> */}

                    </Switch>
            </Router>
        )
    }


}



export default Routers;