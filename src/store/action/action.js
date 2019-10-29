import ActionTypes from '../constant/constant';
import { func } from 'prop-types';
// Initialize Firebase


export function carousalInfo(info){
    return dispatch => dispatch({type: ActionTypes.INFO, payload: info})
    
}
export function SelectedThemess(info){
    return dispatch => dispatch({type: ActionTypes.SelectedTheme, payload: info})
}
export function SelectedCard(info){
    return dispatch => dispatch({type: ActionTypes.SelecteCard, payload: info})
}



export function SignupInfo(value)
{
    console.log(value,'asdasdsa');
    return dispatch=>dispatch({type:ActionTypes.Verify,payload:value})

}
export function SignInInfo(value)
{
    console.log(value,'SignInInfo');
    return dispatch=>dispatch({type:ActionTypes.SignInInfo,payload:value})

}
// export function SignupUser(user){
//     console.log(user)
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     .then(function(result){
//         console.log(result)
//         history.push('/login')

//     })
//     .catch(function(error) {
//         console.log(error)
//       });
      
//     return dispatch => dispatch({type: ActionTypes.SignupUser, payload: user})
    
// }
