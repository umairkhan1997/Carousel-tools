import * as firebase from 'firebase';
import history from '../history'
import Swal from 'sweetalert2';
var firebaseConfig = {
    apiKey: "AIzaSyAiF1TLmawl3_lP55X6ZEFH1yE0sIq-6Nc",
    authDomain: "carousel-4ddbf.firebaseapp.com",
    databaseURL: "https://carousel-4ddbf.firebaseio.com",
    projectId: "carousel-4ddbf",
    storageBucket: "carousel-4ddbf.appspot.com",
    messagingSenderId: "449537455150",
    appId: "1:449537455150:web:07cd07dd482eaac5c1dbbf",
    measurementId: "G-X8XRFPPZ35"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function Register(email,password,Firstname,Lastname,history)
  {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user)=>{
        console.log("user=================>",user)
        // this.props.history.push('/StartPage')
    })
    .then(() => {
    // var authValues = authState.auth().sendEmailVerification();
    //  authState.auth().sendEmailVerification();
    var user=firebase.auth().currentUser;
    user.sendEmailVerification().then((result) =>{
        console.log("sent========>")
    
    }).catch((error)=>{
        console.log("error",error)

    })
        let userobject=
        {
            email,
            password,
            Firstname,
            Lastname
        }
       var userkey= firebase.database().ref('UserInfo/').push(userobject).key;
       console.log(userkey,'authValues')
       history.push('/SignIn')
       Swal.fire({
        title:'Sucess',
        text:'Successfully Sign Un',
        icon:'success',
        button:'Go'
       })
      })
    // .then(()=>{
    //     let userobject=
    //     {
    //         email,
    //         password,
    //         Firstname,
    //         Lastname
    //     }
    //    console.log(userkey)
    //    history.push('/Verify')
    //    Swal.fire({
    //     title:'Sucess',
    //     text:'Successfully Sign Un',
    //     icon:'success',
    //     button:'Go'
    //    })
    // })
    .catch((error)=>{
        Swal.fire(error.message,'Something wrong','warning')

    })    
}

function Login(email,password,history)
{

    // console.log(firebase.auth().currentUser.emailVerified);
    firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
            console.log("success===========>",user)
            //  history.push('/StartPage')
            if(firebase.auth().currentUser.emailVerified){
                firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
                        console.log("success===========>",user)
                         history.push('/StartPage')
                    }).catch((error)=>{
                        Swal.fire(error.message,'Something wrong','warning')
                    })
            }
            else{
                Swal.fire('Email Not Verified')
            }
        }).catch((error)=>{
            Swal.fire(error.message,'Something wrong','warning')
        })

    // firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
    //     console.log("success===========>",user)
    //      history.push('/StartPage')
    // }).catch((error)=>{
    //     Swal.fire(error.message,'Something wrong','warning')
    // })

}
function EmailVerified()
{
var userid = firebase.auth().currentUser.uid;
console.log(userid)
var user=firebase.auth().currentUser;
if(userid!=undefined && userid!=null)
{

    user.sendEmailVerification().then((result) =>{
        console.log("result========>",result)
    
    }).catch((error)=>{
        console.log("error",error)

    })

    }
    else
    {
        
        console.log("error");
    }
}
  export{
      Register,
      firebase,
      Login,
      EmailVerified
    }
  