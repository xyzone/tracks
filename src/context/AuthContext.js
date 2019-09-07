import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        case 'signin':
            return {token: action.payload, errorMessage: ''}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'add_error':
                return {...state, errorMessage: action.payload }
        default:
            return state
    }
};

const clearErrorMessage =(dispatch)=> {
    return(
        () => {
            dispatch({type: 'clear_error_message'})
        }
    )

}

const tryLocalSignin = dispatch => {
    return (
        async () => {
            const token = await AsyncStorage.getItem('token')
            if (token){
                dispatch({type: 'signin', payload: token})
                
                navigate('TrackList')
            }
            else{
                navigate('Signin')
            }
        }
    )
}

const signup = (dispatch) => async ({email, password}) => {
    try{
         
        const response = await trackerApi.post('/signup', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signin', payload: response.data.token})
        //navigation to main flow
        navigate('TrackList')
    }
    catch(e){
        dispatch({ type: 'add_error', payload: `Something wrong with signup ${e.response.data}`})
    }            

}
     
const signin = (dispatch) => {
    return (
        async ( {email, password}) => {
            try{
                
                const response = await trackerApi.post('/signin', {email, password})    
                await AsyncStorage.setItem('token', response.data.token)   
                dispatch({type: 'signin', payload: response.data.token}) 
                navigate('TrackList')

            }
            catch(e){
                dispatch({ type: 'add_error', payload: `Something wrong with signin ${e.response.data}`})
            }

        }
    )
}

const signout = (dispatch) => {
    return (
        () => {
            

        }
    )
}

export const {Provider, Context} = createDataContext(
    authReducer, 
    {signup, signin, signout, clearErrorMessage, tryLocalSignin}, 
    {token: null, errorMessage: ''}    
    )