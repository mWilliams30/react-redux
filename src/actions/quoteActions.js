import * as types from './actionTypes';
import quoteApi from '../api/mockQuoteApi';

export function loadQuotesSuccess(quotes){
    return{type: types.LOAD_QUOTES_SUCCESS, quotes};
}

export function loadQuotes(){
    return function(dispatch){
        return quoteApi.getAllQuotes().then(quotes => {
            dispatch(loadQuotesSuccess(quotes));
        }).catch(error => {
            throw(error);
        });
    };
}