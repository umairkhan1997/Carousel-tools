import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import { textAlign, fontSize } from '@material-ui/system';
import { connect } from 'react-redux';
import {firebase} from '../Config/Firebase';

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    card: {
        minWidth: 275,
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
  

class Verify extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        EmailVerified:false,

         }
         this.sendEmail=this.sendEmail.bind(this);
    }
     sendEmail(email)
    {
    var user=firebase.auth().currentUser.emailVerified;
    var currentUser=firebase.auth().currentUser;
    console.log(user)
    if(user!==true)
    {
      currentUser.sendEmailVerification().then(()=>{
        console.log("send")
      })
      
    }
    else
    {
      this.props.history.push('/StartPage')
    }
      
          
        }
    render() { 
        const {classes}=this.props;
        return ( 
            <div>
  <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
    Verify
        </Typography>
        </Toolbar>
        </AppBar>


        <Card className={classes.card} style={{flex:1,justifyContent:'center',alignItems:'center',textAlign:'center',marginTop:250}}>
            <h5 style={{fontSize:20}}>FirstName:{this.props.Firstname}</h5>
            <h5 style={{fontSize:20}}>Lastname:{this.props.LastName}</h5>
            <h5 style={{fontSize:20}}>Email:{this.props.Email}</h5>
{this.state.EmailVerified 
?
            <h5 style={{fontSize:20}}>EmailVerified: True</h5> 
            :
            <h5 style={{fontSize:20}}>EmailVerified: False</h5> 
}


            </Card>
            <button className="btn btn-info" onClick={this.sendEmail}>Send Email</button>
            </div>
         );
    }

}
function mapStateToProps(state)
{
    console.log(state,'state')
  return ({
    Email:state.root.email,
    Firstname:state.root.Firstname,
    LastName:state.root.LastName
  })
}
export default connect(mapStateToProps)(withStyles(styles)(Verify));