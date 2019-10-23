import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { width } from '@material-ui/system';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
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
class Config extends Component {
    constructor(props) {
        super(props);
        this.state = {  
        value:[],
        newvalue:''

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

    render() { 
        const {classes}=this.props;
        return ( <div>
  
            <div class="form-group">
            <h2 style={{marginLeft:'5%',color:'#3f51b5'}}>Selected number for card</h2>


            <select style={{marginLeft:'5%',width:'90%',height:40}} class="form-control" id="exampleFormControlSelect1" onChange={(e)=>{this.handle(e)}}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
        <br></br>

{
    // this.createComp()
    }

          </div>
        
          <div >

<Button type="submit"
variant="contained" color="primary"  size="large"  style={{float:'left',width:'20%',borderRadius:20,marginLeft:'2%',marginTop:20}}
// className={classes.button}
onClick={this.props.back}
>
back
</Button>
<Button type="submit"
variant="contained" color="primary"  size="large"  style={{float:'right',width:'20%',borderRadius:20,marginTop:20}}
// className={classes.button}
onClick={this.props.next}
>
next
</Button>
</div>
        
        </div>
        
        );

    }
}
 
export default Config;