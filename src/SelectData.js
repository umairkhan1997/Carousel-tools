import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Input, Select } from 'react-spreadsheet-grid'


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 'asdasasdasdsaddsad', 6.0, 24, 4.0),
  createData('Ice cream sandwich', 'asdasdsad', 9.0, 37, 4.3),
  createData('Eclair', 'asdasdsad', 16.0, 24, 6.0),
  createData('Cupcake', 'asdasdsad', 3.7, 67, 4.3),
  createData('Gingerbread', 'asdasdsad', 16.0, 49, 3.9),
];

const styles = theme=> ({
  input: {
    margin: theme.spacing(1),
    marginBottom:-35
  },
});

const rowss=[
  { id: 'user1', name: 'John Doe', positionId: 'position1' },
  { id: 'user1', name: 'John Doe', positionId: 'position1' },
  { id: 'user1', name: 'John Doe', positionId: 'position1' },
  // and so on...
];

class SelectData extends Component {

  constructor(props){
    super(props)
    this.state = {
        userName: "",
        url: "",
        password: ""
    }

}

 

  render(){
  console.log(this.props,'propsssssssss')
  const {classes}=this.props;
  return (
   
    <div >

<h2 style={{marginLeft:'5%',color:'#3f51b5'}}>Select and Unselect data for your Blog</h2>

        <iframe class='iframes' style={{marginLeft:'2.5%'}} height="300px" width="95%" src={this.props.url}></iframe>
    
        <h2 style={{marginLeft:'5%',color:'#3f51b5'}}>Selected Data for your Blog</h2>

        {/* <Paper style={{marginLeft:'25%',width:'50%',marginTop:20}}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell ><b>Name</b></TableCell>
            <TableCell align="right"><b>Properties</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              <Input
        className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
      />
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper> */}

<Grid 

        columns={[
          {
            title: () => 'Name', 
            value: (row, { focus }) => {
                return (
                    <Input  
                      value={row.name}
                      focus={focus}
                    />
                );
            }
          }, {
            title: () => 'Position',
            value: (row, { focus }) => {
                return (
                    <Input  
                      value={row.positionId}
                      isOpen={focus}
                      // items={somePositions}
                    />
                );
            }
          }
        ]}
        
        rows={rowss}
        getRowKey={row => row.id}
      />


    <br />
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

export default connect(mapStateToProp, mapDispatchToProp)(withStyles(styles)(SelectData));

