import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import img1 from './images/themeone.PNG'
import img2 from './images/themetwo.PNG'
import img3 from './images/themethree.PNG'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SelectedThemess } from './store/action/action';

const tutorialSteps = [
    {
      label: 'Theme One ',
      imgPath:img1,
    },
    {
      label: 'Theme Two',
      imgPath:
      img2,
    },
    {
      label: 'Theme Three',
      imgPath:
      img3,
    },
  
  ];
  const styles = theme => ({
    root: {
      maxWidth: '90%',
      marginLeft:'5%',
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      height: 350,
      maxWidth: '100%',
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
  });


class SelectTheme extends Component {

  constructor(props){
    super(props)
    this.state = {
        activeStep:0,
        colorback:'white',
         selectedTheme:0
    }

}

 handleNext = () => {
  this.props.SelectedThemess(this.state.selectedTheme)
  console.log('asdasdasdasdas')
  this.props.next()
    // setActiveStep(prevActiveStep => prevActiveStep + 1);
this.setState({
 //   activeStep:this.state.activeStep + 1
}, () =>{
  // this.props.SelectedThemess(this.state.selectedTheme)
  // console.log('asdasdasdasdas')
}
)  
// this.props.back()
};

   handleBack = () => {
    // setActiveStep(prevActiveStep => prevActiveStep - 1);
    this.setState({
        activeStep:this.state.activeStep - 1
    })  
  };
  SelectThemes=()=>{
  // this.props.next()
  this.setState({
    colorback:'gray'
  })
}
handlerH=(event)=>{
console.log(event)
this.setState({
  selectedTheme:event
})
}
  render(){
  console.log(this.state.selectedTheme,'selectedTheme')
  const {classes}=this.props;
  const maxSteps = tutorialSteps.length;
  return (
   
    <div style={{background:this.state.colorback}}>
 {/* <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[this.state.activeStep].label}</Typography>
      </Paper>
      <img
        className={classes.img}
        src={tutorialSteps[this.state.activeStep].imgPath}
        alt={tutorialSteps[this.state.activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={this.state.activeStep}
        nextButton={
          <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === maxSteps - 1}>
            Next
          </Button>
        }
        backButton={
          <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
         
            Back
          </Button>
        }
      />
    </div> */}


<div style={{width:"80%" ,marginLeft:'12%', height:'50%'}}>

<Carousel selectedItem={this.state.selectedTheme} onClickThumb={this.handlerH.bind(this)}>
<div style={{height:'100%'}}  > 
  <img src={require("./images/themeone.PNG")} style={{height:'100%'}} />
  <p className="legend">Theme 1</p>
</div>
<div style={{height:'100%'}} >
  <img src= {require("./images/themetwo.PNG")} style={{height:'100%'}}/>
  <p className="legend">Theme 2</p>
</div>
<div style={{height:'100%'}} >
  <img src={require("./images/themethree.PNG")} style={{height:'100%'}}/>
  <p className="legend">Theme 3</p>
</div>
<div style={{height:'100%'}} >
  <img src={require("./images/themeone.PNG")} style={{height:'100%'}}/>
  <p className="legend">Theme 4</p>
</div>
<div style={{height:'100%'}} >
  <img src={require("./images/themetwo.PNG")} style={{height:'100%'}}/>
  <p className="legend">Theme 5</p>
</div>
</Carousel>
</div>



    <br />
    <div>

        <Button type="submit"
    variant="contained" color="primary"  size="large"  style={{float:'left',width:'20%',borderRadius:20,marginLeft:'2%',marginTop:20}}
    // className={classes.button}
    onClick={this.props.back}
    >
        back
      </Button>
       <Button type="submit"
    variant="contained" color="primary"  size="large"  style={{float:'right',width:'20%',marginTop:20,borderRadius:20}}
    // className={classes.button}
    onClick={this.handleNext.bind(this)}
    >
        next
      </Button>
    </div>
    </div>
  )
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
       SelectedThemess: (data) => { dispatch(SelectedThemess(data)) }
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles)(SelectTheme));

