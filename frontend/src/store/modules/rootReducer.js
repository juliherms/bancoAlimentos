import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';

//registro os meus reducers.
export default combineReducers({
    auth,
    user,
});