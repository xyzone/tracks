import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch(action.type){
        case 'signup':
            return {token: action.payload, errorMessage: '' }
        case 'add_error':
            return {...state, errorMessage: action.payload }
        default:
            return state
    }
};

const signup = (dispatch) => async ({email, password}) => {
    try{
         
        const response = await trackerApi.post('/signup', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signup', payload: response.data.token})
        //navigation to main flow
        navigate('TrackList')
    }
    catch(e){
        dispatch({ type: 'add_error', payload: `Something wrong ${e.response.data}`})
    }            

}
     
const signin = (dispatch) => {
    return (
        ({email, password}) => {
            

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
    {signup, signin, signout}, 
    {token: null, errorMessage: ''}    
    )