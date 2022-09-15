import { GET_ACCOUNT } from "../const/action-types";


const Account = (state = [], action) => {
    if (action.type === GET_ACCOUNT) {
        state = action.data;
    }
    
    return state;
};

export default Account;
