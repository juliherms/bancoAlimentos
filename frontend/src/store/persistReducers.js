import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

//responsável por persistir o estado do reducer
//no storage do browser
export default reducers => {

    //TODO verificar o whitelist

    const persistedReducer = persistReducer({
        key: 'bancoalimentos',
        storage,
        whitelist: ['auth','user'],
    },
    reducers
    );

    return persistedReducer;
}
