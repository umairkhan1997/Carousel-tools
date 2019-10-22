import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
  
    carousalName: "",
    url: "",
    email:'',
    Firstname:'',LastName:''

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionTypes.INFO:
            return ({
                ...state,
                carousalName: action.payload.carousalName,
                url: action.payload.url,
               
            })
        case ActionTypes.SignupUser:
            return ({
                ...state,
                email: action.payload.email,
                userName: action.payload.userName,
                password: action.payload.password
            })
        case ActionTypes.SigninUser:
            return ({
                ...state,
                userName: action.payload.userName,
                password: action.payload.password
            })
            case ActionTypes.SignOut:
            return ({
                ...state,
                userName: "",
                password: ""
            })
            case ActionTypes.Verify:
                console.log(action.payload,'verify')
                return({
                    ...state,
                    email:action.payload.Email,
                    Firstname:action.payload.Firstname,
                    LastName:action.payload.LastName,
                })
        default:
            return state;
    }


}