import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { carousalInfo } from './store/action/action';

const useStyles =makeStyles(theme => ({
  card: {
    width: '50%',
    height:'100%',
    marginLeft:'25%',marginTop:'10%',borderWidth:10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    // flexDirection:'column'
   display: 'table-cell',
  //  flexWrap: 'wrap',
  },
  textField: {
     marginLeft: theme.spacing(1),
     marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      carousalName: "",
        url: "",
        password: ""
    }

}

 

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value },() =>{
      let data = {
        carousalName: this.state.carousalName,
        url: this.state.url,
       // password: this.state.password
    }
    this.props.carousalInfo(data)
    })
    
}
submit(ev){
  ev.preventDefault()
  //  console.log('asdsad',ev,this.state.url,this.state.userName);
//   let data = {
//     carousalName: this.state.carousalName,
//     url: this.state.url,
//    // password: this.state.password
// }
// this.props.carousalInfo(data)
  //  this.props.history.push('/homes');
}
componentWillUnmount(){
//   let data = {
//     carousalName: this.state.carousalName,
//     url: this.state.url,
//    // password: this.state.password
// }
// this.props.carousalInfo(data)
}

  render(){
   console.log(this.props,'props')
  return (
   
    <div className="App">
    {/* <Card 
    // className={classes.card}
    > */}

<h2 style={{color:'#3f51b5'}}><b>Lets Start Creating a Carousel</b></h2>


    <form 
    // className={classes.container}
     noValidate autoComplete="off" onSubmit={this.submit.bind(this)}>
    <CardContent>
      {/* <label style={{fontWeight: 'bold'}}>Enter Name :</label>
  <br />     */}
      <TextField
        id="outlined-name"
        label="Carousel Name"
        //className={classes.textField}
      //  value={values.name}
        // onChange={handleChange('name')}
        name="carousalName" onChange={this.handleChange.bind(this)}
        margin="normal"
        variant="outlined"
        style={{width:'30%'}}
      />
       </CardContent>
       <CardContent>
       {/* <label style={{fontWeight: 'bold'}}>Enter URL :</label>
  <br />     */}
         <TextField
         style={{width:'30%'}}
        id="outlined-name"
        label="Blog URL"
        //className={classes.textField}
       // value={values.url}
        name="url" onChange={this.handleChange.bind(this)}
        margin="normal"
        variant="outlined"
      />
    </CardContent>


  
    {/* <Button type="submit"
    variant="contained" color="primary"  size="large"  style={{width:'12%',marginRight:'1.5%',marginTop:20}}
    // className={classes.button}
    onClick={this.props.back}
    >
        back
      </Button> */}
       <Button type="submit"
    variant="contained" color="primary"  size="large"  style={{width:'30%',marginTop:20}}
    // className={classes.button}
    onClick={this.props.next}
    >
      <b>
        next
      </b>
      </Button>
         </form>
      {/* </Card> */}

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
      carousalInfo: (data) => { dispatch(carousalInfo(data)) }
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
