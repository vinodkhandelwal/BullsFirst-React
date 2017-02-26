import * as types from './actionTypes';

export function addAccount(account){
    return {type: types.ADD_ACCOUNT, account};
}

export function refreshAccounts(){
    return {type: types.REFRESH_ACCOUNTS, undefined};
}