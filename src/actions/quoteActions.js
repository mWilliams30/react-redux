import * as types from './actionTypes';
import quoteApi from '../api/mockQuoteApi';

export function loadQuotesSuccess(quotes){
    return{type: types.LOAD_QUOTES_SUCCESS, quotes};
}

export function getQuoteSucess(quote){
    return{type: types.GET_QUOTE_SUCCESS, quote};
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

export function getQuote(underwriterId){
    return function(dispatch){
        return quoteApi.getQuote(underwriterId).then(quote => {
            dispatch(loadQuotesSuccess(quote));
        }).catch(error => {
            throw(error);
        });
    };
}