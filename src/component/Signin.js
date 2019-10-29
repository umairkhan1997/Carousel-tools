// import React,{Component} from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Container from '@material-ui/core/Container';
// import { Login } from '../Config/Firebase';
// import Logo from '../Asset/loader.gif';

// function Copyright() {

//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//         </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const Styles=theme => ({
//     '@global': {
//         body: {
//             backgroundColor: theme.palette.common.white,
//         },
//     },
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%',
//         marginTop: theme.spacing(3),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },

//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },

// });

// class  SignIn extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {  
//             Logo:false,
//             email:'',
//             password:'',
//         }
//     this.signin=this.signin.bind(this);
//     }

// async signin()
// {
// const {email,password}=this.state;
// console.log("email",email);
// console.log("passsword",password)
// await Login(email,password,this.props.history);
// if (email !== '', password !== '') {
    
//     this.setState({ Logo: true })
//     setInterval(() => {
//         this.setState({
//             Logo: false
//         })
       

//     }, 3000);
//   }
//   else {
//     console.log("error")
//   }

// }
// GoSignUp=()=>{
//     this.props.history.push('/Signup');
// }
   
//     render()
//     {
//         const {classes}=this.props;
//     return (
//       <div>{this.state.Logo ? <img src={Logo} /> :
//       <div className={classes.root}>
//         <AppBar position="static">
//         <Toolbar variant="dense">
//         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//         <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" color="inherit">
//         Welcome To Signin
//         </Typography>
//         </Toolbar>
//         </AppBar>
        
//         <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//         <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//         SignIn
//         </Typography>
//         <form className={classes.form} noValidate>
//         <Grid container spacing={2}>
        
//         <Grid item xs={12}>
//         <TextField
//         variant="outlined"
//         required
//         fullWidth
//         id="email"
//         label="Email Address"
//         name="email"
//         autoComplete="email"
//         onChange={(e)=>{this.setState({email:e.target.value})}}
//         />
//         </Grid>
//         <Grid item xs={12}>
//         <TextField
//         variant="outlined"
//         required
//         fullWidth
//         name="password"
//         label="Password"
//         type="password"
//         id="password"
//         autoComplete="current-password"
//         onChange={(e)=>{this.setState({password:e.target.value})}}
        
//         />
//         </Grid>
//         <Grid item xs={12}>
//         </Grid>
//         </Grid>
//         <Button
//         type="button"
//         fullWidth
//         variant="contained"
//         color="primary"
//         className={classes.submit}
//         onClick={this.signin}>SignIn</Button>
//                 <Typography onClick={this.GoSignUp.bind(this)} component="h6" variant="h6" style={{fontSize:14,color:'#3f51b5',fontWeight:'600',textAlign:'center'}}>
//                 Want to Join Us , Sign Up ?
//         </Typography>
//         </form>
//         </div>
//         <Box mt={5}>
//         </Box>
//         </Container>
       
//         </div>}
//         </div>
//         );
//     }
// }
// export default withStyles(Styles)(SignIn);


import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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
import { firebase} from '../Config/Firebase';
import Logo from '../Asset/loader.gif';
import Swal from 'sweetalert2';
import Toolbar from '@material-ui/core/Toolbar';
import {SignInInfo} from '../store/action/action' 
import '../App.css';
import {connect} from 'react-redux';

function Copyright() {
    // const classes = useStyles();
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

const Styles=theme => ({
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

class  SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {  
            Logo:false,
            email:'',
            password:'',
            check:false,
            emailerror:false,
            text:''
        }
    this.signin=this.signin.bind(this);
    }

async signin()
{
const {email,password}=this.state;
if(email ==' ' || password == '')

{
this.setState({check:true,emailerror:true})
}
try {
    firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
        console.log("user=======>",user)
        console.log(user.user.emailVerified)
        if(user.user.emailVerified==false)
         {
             this.setState({emailerror:true,text:'Coudnot recognize  your email'})
             
         }
         else{
             this.props.SignInInfo(email)
             this.props.history.push('/StartPage')
         }
      
         
     }).catch((error)=>{
       // Swal.fire(error.message) 
       console.log(error.message,'erroe uper wala')
       if(error.message === 'The email address is badly formatted.'){

           this.setState({emailerror:true,text:'Coudnot recognize  your email'},()=>{
               setInterval(() => {
                   this.setState({emailerror:false,text:'Coudnot recognize  your email'})
                }, 2000);
            })
        } 
        else if(error.message==='The password is invalid or the user does not have a password.'){
            this.setState({check:true,text:'Coudnot recognize  your email'},()=>{
                setInterval(() => {
                    this.setState({check:false,text:'Coudnot recognize  your email'})
                 }, 2000);
             })
        }
        else{
            console.log(error.message)
        }
        })

} catch (error) {
   // Swal.fire(error.message)
   console.log(error.message,'erroe nechay wala')
}


}

GoSignUp=()=>{
    this.props.history.push('/Signup');
}
        
// } catch (error) {
// console.log("error",error.message)    
// }



//const value= await Login(email,password);
//console.log("value========>",value)
 //var emailverified=firebase.auth().currentUser.emailVerified;
//console.log(emailverified)
        // if(emailverified==false || email == ''  ||  password == '')
        // {
        //     this.setState({check:true})
        // }
        // else{
        // console.log("value=========>",value)
        //      console.log("error")
       
        // firebase.auth().currentUser.sendEmailVerification().then((user)=>{
        //     {
        //     console.log(emailverified)

        //         console.log("verified")

        //     }
        // })

//}


    render()
    {
        const {classes}=this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
        <Toolbar variant="dense">
         <Typography variant="h6" color="inherit">
        Welcome To Signin
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
        SignIn
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
        
        <Grid item xs={12}>
        <TextField
        error={this.state.emailerror}
        text={this.state.text}
        variant="outlined"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        onChange={(e)=>{this.setState({email:e.target.value})}}
        />
        </Grid>
        {
            this.state.emailerror?
            <h4 style={{color:'red',fontSize:10,marginLeft:20,marginTop:-5}}>Couldn't recognize  your email</h4>:null
        }
        <Grid item xs={12}>
        <TextField 
        error={this.state.check}
        variant="outlined"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(e)=>{this.setState({password:e.target.value})}}
        
        />
        </Grid>
        {
            this.state.check?
            <h4 style={{color:'red',fontSize:10,marginLeft:20,marginTop:-5}}>Password is Incorrect </h4>:null
        }
        {/* <Grid item xs={12}>
        <FormControlLabel
        control={<Checkbox value="allowExtraEmails" color="primary" />}
        label="I want to receive inspiration, marketing promotions and updates via email."
        />
        </Grid> */}
        </Grid>
        <Button
        type="button"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={this.signin}>SignIn</Button>
        <Toolbar style={{marginLeft:60,marginTop:-20}}>
                     <Typography  component="h6" variant="h6" style={{fontSize:14,color:'gray',fontWeight:'600',textAlign:'center'}}>
             Want to Join Us , &nbsp;
        </Typography>
        <Typography className='typo' onClick={this.GoSignUp.bind(this)} component="h6" variant="h6" style={{fontSize:14,color:'#3f51b5',fontWeight:'600',textAlign:'center'}}>
                Sign Up ?
        </Typography>
        </Toolbar>
       
        </form>
        </div>
  
        </Container>
       
        </div>
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
    SignInInfo:(Userdata)=>{dispatch(SignInInfo(Userdata))}
  })
}

export default connect(mapStateToProps,mapDispatchToProp)(withStyles(Styles)(SignIn));

// export default withStyles(Styles)(SignIn);