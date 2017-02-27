import * as types from './actionTypes';
import accountsApi from '../api/accountsApi'

export function loadAccountsSuccess(accounts){
    return {type: types.LOAD_ACCOUNTS_SUCCESS, accounts};
}

export function addAccount(account){
    return {type: types.ADD_ACCOUNT, account};
}

export function loadAccounts(account){
    return function(dispatch){
        return accountsApi.getInitialAccounts().then(accounts => {
            dispatch(loadAccountsSuccess(accounts));
        }).catch(error => {
            throw error;
        });
    };
}