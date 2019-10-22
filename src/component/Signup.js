import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import { Register } from '../Config/Firebase';
import Logo from '../Asset/loader.gif';
import Signin from './Signin';
import {SignupInfo} from '../store/action/action'
import {connect} from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );

}
const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

});

class Signup extends Component {
  constructor(props) {
    super();
    this.state = {
      Firstname: '',
      Lastname: '',
      email: '',
      password: '',
      Logo: false


    }
    this.signup = this.signup.bind(this)
  }



  async signup() {

    const { email, password, Firstname, Lastname } = this.state;
    if (email !== '', password !== '', Firstname !== '', Lastname !== '') {
    console.log(email,password,Firstname,Lastname)
    let Userdata=
    {
      Firstname:Firstname,
      LastName:Lastname,
      Email:email,
      Password:password

    }
    this.props.SignupInfo(Userdata);
      await Register(email, password, Firstname, Lastname,this.props.history)
        // this.props.history.push('/Verify')
      }
      else{
        console.log("error")
      }

  }
  render() {
    const { classes } = this.props;
    return (
      <div>{this.state.Logo ? <img src={Logo} /> :
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Welcome To Signup Page
          </Typography>
            </Toolbar>
          </AppBar>

          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
        </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={(e) => { this.setState({ Firstname: e.target.value }) }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      onChange={(e) => { this.setState({ Lastname: e.target.value }) }}

                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => { this.setState({ email: e.target.value }) }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(e) => { this.setState({ password: e.target.value }) }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.signup}>
                  Sign Up
          </Button>
                <Grid container justify="flex-end">


                </Grid>
              </form>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
 
        </div>
      }</div>

    );
  }
}
function mapStateToProps(state)
{
  return ({

  })
}
function mapDispatchToProp(dispatch){
  return({
    SignupInfo:(Userdata)=>{dispatch(SignupInfo(Userdata))}
  })
}

export default connect(mapStateToProps,mapDispatchToProp)(withStyles(styles)(Signup));




