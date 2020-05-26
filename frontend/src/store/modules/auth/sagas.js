import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '../../../services/history';
import api from '../../../services/api';
import { signInSuccess } from './actions';



export function* signIn({ payload }){

    
    const { email, password } = payload;
    
    const response = yield call(api.post, '/sessions', {
        email,
        senha: password
    });

    console.log(response);

    const { token, usuario} = response.data;

    //TODO verificar
    /*if(!user.provider){
        console.log('usuario não é prestador');
        return;
    }*/

    //armazena o token e o usuario.
    yield put(signInSuccess(token,usuario));

    //redireciona para a página principal.
    history.push('/dashboard');
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST',signIn)
]);