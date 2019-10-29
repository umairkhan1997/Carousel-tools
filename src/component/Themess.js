import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { width } from '@material-ui/system';
import { red } from '@material-ui/core/colors';
import ThemeOne from '../Blog_theme_one/App'
import ThemeTwo from '../theme_two_three/theme_2'
import ThemeThree from '../theme_two_three/theme-3'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { firebase} from '../Config/Firebase';
// import { thisExpression } from '@babel/types';
const styles=(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
}));
class Themess extends Component {
    constructor(props) {
        super(props);
        this.state = {  
      themeOne:false,
      themeTwo:false,
      themeThree:false,
        }
    
    }
    
    handle(e)
    {

        var value=e.target.value
        this.setState({newvalue:value})
        
       
      
    }

createComp =() =>{
        const {newvalue}=this.state;
let comp=[];
for(var i=0;i<newvalue;i++){
    comp.push(<p style={{width:200,height:200,backgroundColor:"red"}}></p>);
}
return comp;
    }
    Finish=()=>{
        this.props.next();
        const {SelectedTheme,SelecteCard,  carousalName,url} = this.props;
        let carouselDetail={
            SelectedTheme,SelecteCard,  carousalName,url
        }
        const user=firebase.auth().currentUser.uid;
        console.log("user=========>",user)
        firebase.database().ref(`${user}/`).child(`Carousel/`).child(`${carousalName}/`).push(carouselDetail)
    }
    render() { 
        console.log(this.props.SelectedTheme,'themess pages')
        const {classes}=this.props;
        return ( 
        <div>
  {

 this.props.SelectedTheme == 0 ?     
      <ThemeOne />
      :
      null
}
 {

this.props.SelectedTheme == 1 ?     
     <ThemeTwo />
      :
      null
 }

  {

this.props.SelectedTheme == 2 ?     
     <ThemeThree />
      :
      null
 }
        
<div >

{/* <Button type="submit"
variant="contained" color="primary"  size="large"  style={{float:'left',width:'20%',borderRadius:20,marginLeft:'2%',marginTop:20}}
onClick={this.props.back}
>
back */}
{/* </Button> */}
<Button type="submit"
variant="contained" color="primary"  size="large"  style={{float:'right',width:'20%',borderRadius:20,marginTop:20}}
// className={classes.button}
onClick={this.Finish.bind(this)}
>
Finish
</Button>
</div>
        
        </div>
        
        );

    }
}
 

function mapStateToProp(state) {
    return ({
        SelectedTheme: state.root.SelectedTheme,
        SelecteCard:state.root.SelecteCard,
        carousalName:state.root.carousalName,
        url:state.root.url,
        email:state.root.email
        
    })
  }
  function mapDispatchToProp(dispatch) {
    return ({
        // SelectedCard: (data) => { dispatch(SelectedCard(data)) }
    })
  }
  
  export default connect(mapStateToProp, mapDispatchToProp)(Themess);
  