export default function accountReducer(state=[], action) {
    switch(action.type){
        case 'LOAD_ACCOUNTS':
            return [...state,
                Object.assign({}, action.accounts)
            ]

        default:
            return state;
    }
}