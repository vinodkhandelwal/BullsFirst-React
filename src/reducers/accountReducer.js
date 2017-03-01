import * as types from '../actions/actionTypes';

export default function accountReducer(state=[], action) {
    switch(action.type){
        case types.LOAD_ACCOUNTS_SUCCESS:
            return action.accounts;

        case types.ADD_ACCOUNT:
            return [...state,
                Object.assign({}, action.account)
            ];

        default:
            return state;
    }
}