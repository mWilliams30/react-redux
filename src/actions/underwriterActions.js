import * as types from './actionTypes';
import underwriterApi from '../api/mockUnderwriterApi';

export function loadUnderwritersSuccess(underwriters){
    return{type: types.LOAD_UNDERWRITERS_SUCCESS, underwriters};
}

export function loadUnderwriters(){
    return function(dispatch){
        return underwriterApi.getAllUnderwriters().then(underwriters => {
            dispatch(loadUnderwritersSuccess(underwriters));
        }).catch(error => {
            throw(error);
        });
    };
}