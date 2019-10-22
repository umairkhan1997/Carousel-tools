// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {addData,todo,deleteAll,callEdit,deleteOn  } from './store/action/action'; 
// import { connect } from 'react-redux';
// import { thisExpression } from '@babel/types';
// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state={
// todos:[],
// inputValue:"" 
//     }
//     this.formHandler = this.formHandler.bind(this)
//     this.addTodo = this.addTodo.bind(this)
// this.deleteAll=this.deleteAll.bind(this)
//   }
// formHandler(ev){
//   this.setState({
//     inputValue  : ev.target.value,
//   })
//   console.log(ev.target.value)
// }
// addTodo(){
//   if(this.state.inputValue===''  || this.state.inputValue===' ' || this.state.inputValue==="  " ){
//     alert("ENter Something First") 
//   }
//   else{
//       this.props.addData({todo:this.state.inputValue});
//       this.setState({inputValue:''})
//   }
// }
// deleteAll(){
//   this.props.deleteAll()
// }

// editTodo(index){
// console.log(index);
// let val = prompt('new todo');
// this.props.callEdit(index,val);
// }

// deleteOne(index){
//   this.props.deleteOn(index);
// }

//   render(){
//     console.log(this.state.todos,'array')
//     return (      
//       <div className="App">
//         <div className="mainStart">
//         <h1>Todo</h1>
//         <input style={{width:'30%',marginLeft:'35%'}} className="form-control mainInput" placeholder="Please add todo..." aria-describedby="basic-addon1" 
//         value={this.state.inputValue}
//          onChange={this.formHandler}/>
//         <div className="mainButton" style={{marginTop:20}}> 
//         <button type="button" className="btn btn-success" onClick={this.addTodo} style={{marginRight:10}}>Add</button>
//  <button type="button" className="btn btn-danger" onClick={this.deleteAll}>Delete</button>
//         </div>
        

//         <div>
//         <ul className="list-group">
//         {
//           this.props.todos.map((todos,index)=>{
//               return( 
//         <li className="list-group-item liAlign" 
//         key={index}
//         >
//         {index} {todos}
//         <button className="btn btn-outline-warning btnMargin" style={{marginRight:10}}
//         onClick={this.editTodo.bind(this, index)} 
//         >Edit</button>
//         <button className="btn btn-outline-danger btnMargin" 
//         onClick={this.deleteOne.bind(this, index)} 
//         >Delete</button>
//         </li>
//           )
//         })
//       }
//         </ul>
//         </div>
//         </div>
//       {/* <div className="mainStart">
//         <h1>Todo</h1>

//  <input type="text" style={{width:'30%',marginLeft:'35%'}} className="form-control mainInput" placeholder="Please add todo..." aria-describedby="basic-addon1" value={this.state.inputValue} onChange={this.formHandler}/>      
//  <div className="mainButton" style={{marginTop:20}}>
//  <button type="button" className="btn btn-success" onClick={this.addTodo} style={{marginRight:10}}>Add</button>
//  <button type="button" className="btn btn-danger" onClick={this.deleteAll}>Delete</button>
//  </div>
//         <ul className="list-group">
//           {
//           this.props.todos.map((todos,index)=>{
//               return(
//                 <li className="list-group-item liAlign" key={index}>
//                   {todos}
//                   <button className="btn btn-outline-warning btnMargin" onClick={this.editTodo.bind(this, index)} >Edit</button>
//                     <button className="btn btn-outline-danger btnMargin" onClick={this.deleteOne.bind(this, index)} >Delete</button>
//                 </li>
//               )
//             })
//           }

//         </ul>
//  </div> */}
//  </div>
//     );
//   }
// }

// function mapStateToProp(state){
//   console.log(state,'state')
//   return({
//     todos:state.root.todos
//   })
// }

// function mapDispatchToProp(dispatch){
//   return({
//     addData:(cloneTodosArray)=>{
//       dispatch(addData(cloneTodosArray))
//     },
//     deleteAll:()=>{
//       dispatch(deleteAll())
//     },
//     callEdit:(index,newTodo)=>{
//       console.log(newTodo,"new")
//       dispatch(callEdit(index,newTodo))
//     },
//     deleteOn:(index)=>{
//       dispatch(deleteOn(index))
//     },

//   })
// }

// export default connect(mapStateToProp, mapDispatchToProp)(App)  ;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Markdown from './Markdown';
import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

const posts = [post1];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          {/* <Button size="small">Subscribe</Button> */}
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Blog
          </Typography>
          {/* <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button> */}
        </Toolbar>
        {/* <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar> */}
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Title of a longer featured blog post
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    Continue reading…
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                From the Firehose
              </Typography>
              <Divider />
              {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))}
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </Paper>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
              </Typography>
              {archives.map(archive => (
                <Link display="block" variant="body1" href="#" key={archive}>
                  {archive}
                </Link>
              ))}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Link display="block" variant="body1" href="#" key={network}>
                  {network}
                </Link>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
    
      {/* End footer */}
    </React.Fragment>
  );
}