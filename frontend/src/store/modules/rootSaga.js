import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import entity from './entidade/sagas';

//registro o meu saga
export default function* rootSaga(){
    return yield all([auth, user, entity]);
}