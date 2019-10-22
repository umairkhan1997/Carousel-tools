import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
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
import Spinner from 'react-spinner-material';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



const drawerWidth = 240;

const styles = theme=> ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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

 class StartPage extends Component {
constructor(props){
    super(props);
    this.state={
        open:true,
        visibles:false,
        currentSlide: 0
    }
    this.handleDrawerOpen=this.handleDrawerOpen.bind(this);
    this.handleDrawerClose=this.handleDrawerClose.bind(this);
    this.Create=this.Create.bind(this)
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
Create(){
  console.log('asds')
  this.setState({
    visibles:true
  })
  setInterval(() => {
    this.setState({
      visibles:false
    })
    this.props.history.push('/stepper')
  }, 2000);
  // this.props.history.push('/stepper')
}
next = () => {
  this.setState(state => ({
      currentSlide: state.currentSlide + 1
  }));
}

prev = () => {
  this.setState(state => ({
      currentSlide: state.currentSlide - 1
  }));
}

updateCurrentSlide = (index) => {
  const { currentSlide } = this.state;

  if (currentSlide !== index) {
      this.setState({
          currentSlide: index
      });
  }
}

  render(){
const {classes}=this.props;
const handleOnDragStart = e => e.preventDefault()
  return (
    <div className={classes.root}>



      <AliceCarousel mouseDragEnabled autoPlay={true} showSlideInfo={true}  style={{width:'100%'}}>
      <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>


     
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

export default connect(mapStateToProp,mapDispatchToProp)(withStyles(styles)(StartPage));

