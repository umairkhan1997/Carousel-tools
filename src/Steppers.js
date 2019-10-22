import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import App from './App';
import SelectData from './SelectData';
import SelectTheme from './SelectTheme'
import './App.css';
import { connect } from 'react-redux';
import { carousalInfo } from './store/action/action';
import ThemeOne from './Blog_theme_one/App'
import ThemeTwo from './theme_two_three/theme_2'
import ThemeThree from './theme_two_three/theme-3'
const styles = theme => ({
    root: {
      width: '90%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  });

  function getSteps() {
    return ['Create Carousel', 'Select Data', 'Select Theme','Embed In your Webpage'];
  }
  


  
 class HorizontalLinearStepper extends Component {
    constructor(props){
        super(props)
        this.state={
            activeStep:0,
            skipped:new Set(),
        }
    this.setActiveStep=this.setActiveStep.bind(this);
    this.setSkipped=this.setSkipped.bind(this);
    }
    handleBack = () => {
     
        this.setActiveStep(this.state.activeStep - 1);
    };
    handleNext = () => {
     if(this.props.carousalName == ''){
       alert('Enter Carousel Name')
     }
     else if(this.props.url ==''){
      alert('Enter URL')
    }
    else{
      this.setActiveStep(this.state.activeStep + 1);
    }
    };
    setActiveStep(ab){
        console.log(ab,'abbbbbb')
        this.setState({
            activeStep:ab
        })
    }
    setSkipped(ac){
        console.log(ac,'accccccccc')
        this.setState({
            skipped:ac
        })
    }
    // checkValidate(){

    // }
     getStepContent(step) {
      switch (step) {
        case 0:
          return <App back={this.handleBack} next={this.handleNext}/>;
        case 1:
          return <SelectData back={this.handleBack} next={this.handleNext}/>;
        case 2:
          return <SelectTheme back={this.handleBack} next={this.handleNext}/>;
        default:
          return 'Unknown step';
      }
    }
    render(){
        const {classes}=this.props;
      //  const classes = useStyles();
        // const [activeStep, setActiveStep] = React.useState(0);
        // const [skipped, setSkipped] = React.useState(new Set());
        const steps = getSteps();
      
        const isStepOptional = step => {
          return step === 1;
        };
      
        const isStepSkipped = step => {
          return this.state.skipped.has(step);
        };
      
        
      
        const handleBack = () => {
          alert("aaa");
            this.setActiveStep(this.state.activeStep - 1);
        };
      
        const handleSkip = () => {
          if (!isStepOptional(this.state.activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
          }
      
          this.setActiveStep(prevActiveStep => prevActiveStep + 1);
          this.setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(this.state.activeStep);
            return newSkipped;
          });
        };
      
        const handleReset = () => {
            this.setActiveStep(0);
        };
    return (
      <div className={classes.root}>
        <Stepper activeStep={this.state.activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = <Typography variant="caption">Optional</Typography>;
            // }
            // if (isStepSkipped(index)) {
            //   stepProps.completed = false;
            // }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                <div 
                style={{background:this.state.activeStep>=index?'#3f51b5':'grey'}}
                className='div'
    >
      <h5 className='hfive'>
                {label}
      </h5>
                </div>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{this.getStepContent(this.state.activeStep)}</Typography>
              {/* <div >
                <Button disabled={this.state.activeStep === 0} onClick={this.handleBack} className={classes.button}>
                  Back
                </Button>
              
  
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div> */}
            </div>
          )}
        </div>
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

export default withStyles(styles)(HorizontalLinearStepper);

