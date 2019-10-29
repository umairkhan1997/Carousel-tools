import * as firebase from 'firebase';
import history from '../history'
import Swal from 'sweetalert2';
  var firebaseConfig = {
    apiKey: "AIzaSyDwA_90a3qIAzqMXH4OJxGY4hBffiMj2HM",
    authDomain: "carousel-7b5b3.firebaseapp.com",
    databaseURL: "https://carousel-7b5b3.firebaseio.com",
    projectId: "carousel-7b5b3",
    storageBucket: "carousel-7b5b3.appspot.com",
    messagingSenderId: "971844895606",
    appId: "1:971844895606:web:70c58496ff4bff43bc7057",
    measurementId: "G-CJXK09GL99"
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
       // firebase.database().ref('UserInfo/').push(userobject);
       var userkey= firebase.database().ref('UserInfo/').push(userobject).key;
       console.log(userkey,'authValues')
       history.push('/')
       Swal.fire({
        title:'Sucess',
        text:'Successfully Sign Up',
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
  