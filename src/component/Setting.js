import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Settings from '@material-ui/icons/Settings';
import Person from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import { firebase} from '../Config/Firebase';

const drawerWidth = 240;

const styles = theme=> ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

 class Setting extends Component {
constructor(props){
    super(props);
    this.state={
        open:true,
        visibles:false
    }
    this.handleDrawerOpen=this.handleDrawerOpen.bind(this);
    this.handleDrawerClose=this.handleDrawerClose.bind(this);
    this.Create=this.Create.bind(this);

}

handleDrawerOpen()
{
    console.log("open")
    this.setState({open:true})
}
handleDrawerClose()
{
    console.log("close")

    this.setState({open:false})

}

Create()
{
  this.props.history.push('/Manage');

}
StartPage=()=>{
    this.props.history.push('/StartPage');
}
Profile=()=>{
    this.props.history.push('/Profile');
  }
  SignOut=()=>{
    this.props.history.push('/');
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }
  render(){
const {classes}=this.props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Typography variant="h6" noWrap>
            Carousel - Tool
          </Typography>
          <Button onClick={this.SignOut.bind(this)} color="inherit">Sign Out</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={this.state.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
       {/* <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {<ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider /> */}
            <Divider style={{marginTop:20}}/>
        <List>            
            <ListItem button onClick={this.StartPage.bind(this)} style={{marginTop:45}}>
              <ListItemIcon> <MailIcon /></ListItemIcon>
              {/* <ListItemText style={{fontSize:16,fontWeight:'600'}}>Manage</ListItemText> */}
              <ListItemText
        disableTypography
        primary={<Typography type="body2" style={{ fontSize:16,fontWeight:'600',color:'gray' }}>Home</Typography>}
      />
            </ListItem>
        </List>
        <Divider style={{marginTop:-5}}/>
        <List>            
            <ListItem button onClick={this.Profile.bind(this)} style={{marginTop:5}}>
              <ListItemIcon> <Person /></ListItemIcon>
              <ListItemText
        disableTypography
        primary={<Typography type="body2" style={{ fontSize:16,fontWeight:'600',color:'gray' }}>Profile</Typography>}
      />
              {/* <ListItemText >Profile</ListItemText> */}
            </ListItem>
        </List>
        <Divider style={{marginTop:-5}}/>
        <List>            
            <ListItem button onClick={this.Create} style={{marginTop:5}}>
              <ListItemIcon> <MailIcon /></ListItemIcon>
              <ListItemText
        disableTypography
        primary={<Typography type="body2" style={{ fontSize:16,fontWeight:'600',color:'gray' }}>Manage</Typography>}
      />
{/*               
              <ListItemText >Manage</ListItemText> */}
            </ListItem>
        </List>
        <Divider style={{marginTop:-5}}/>
        <List>            
            <ListItem button style={{marginTop:5}}>
              <ListItemIcon> <Settings color='primary'/></ListItemIcon>
              <ListItemText
        disableTypography
        primary={<Typography type="body2" style={{ fontSize:16,fontWeight:'600',color:'#3f51b5' }}>Setting</Typography>}
      />
              {/* <ListItemText >Setting</ListItemText> */}
            </ListItem>
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText >Manage</ListItemText>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]:this.state.open,
        })}
      >
 <div style={{marginTop:'30%',marginLeft:'40%' }}>
 <h1>Setting Page</h1>
      </div>
      </main>
    </div>
  
  );
    }
}

function mapStateToProp(state) {
  return ({
    carousalName: state.root.carousalName,
    url:state.root.url
  })
}
function mapDispatchToProp(dispatch) {
  return ({
      // carousalInfo: (data) => { dispatch(carousalInfo(data)) }
  })
}

export default connect(mapStateToProp,mapDispatchToProp)(withStyles(styles)(Setting));

