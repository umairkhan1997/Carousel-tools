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


class ThemeConfig extends Component {
    constructor(props){
      super(props)
      this.state = {
         
      }
  
  }


  render(){
      return(
          <div>



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
  
  export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles)(ThemeConfig));
  