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
        activeStep:0
    }

}

 handleNext = () => {
    // setActiveStep(prevActiveStep => prevActiveStep + 1);
this.setState({
    activeStep:this.state.activeStep + 1
})  
};

   handleBack = () => {
    // setActiveStep(prevActiveStep => prevActiveStep - 1);
    this.setState({
        activeStep:this.state.activeStep - 1
    })  
  };

  render(){
  console.log(this.props,'propsssssssss')
  const {classes}=this.props;
  const maxSteps = tutorialSteps.length;
  return (
   
    <div >
 <div className={classes.root}>
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
            {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
          </Button>
        }
        backButton={
          <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
            {/* {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} */}
            Back
          </Button>
        }
      />
    </div>




    <br />
    <div>

        <Button type="submit"
    variant="contained" color="primary"  size="large"  style={{width:'20%',marginRight:'4.5%',marginLeft:'7.2%',marginTop:20}}
    // className={classes.button}
    onClick={this.props.back}
    >
        back
      </Button>
       <Button type="submit"
    variant="contained" color="primary"  size="large"  style={{width:'20%',marginTop:20}}
    // className={classes.button}
    onClick={this.props.next}
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
      // carousalInfo: (data) => { dispatch(carousalInfo(data)) }
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles)(SelectTheme));

