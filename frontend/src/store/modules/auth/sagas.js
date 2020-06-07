import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';

/**
 * Metodo responsavel por realizar o procedimento de login no sistema.
 */
export function* signIn({ payload }){

    try{
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

        //adiciona o token ao header
        api.defaults.headers.Authorization = `Bearer ${token}`;

        //armazena o token e o usuario.
        yield put(signInSuccess(token,usuario));

        //redireciona para a página principal.
        history.push('/dashboard');
    } catch( err ){
        toast.error('Erro ao realizar a autenticação');
        yield put(signFailure());
    }
    
}

export function* signUp({ payload }){

    try{

        const { name,login,password,email } = payload;
        console.log(payload);

        yield call(api.post,'usuarios', {
            nome: name,
            login: login,
            email,
            senha: password
        });
        
        //envia para tela de login
        history.push('/');

    }catch ( err ){
        toast.error('Erro ao realizar o cadastro de usuário');
        yield put(signFailure());
    }
}

//funcao responsavel por atualizar o token de autenticacao
export function setToken({ payload }){

    if(!payload) return;

    const  { token } = payload.auth;

    if(token){
        //adiciona o token ao header
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

//funcao responsavel por redirecionar para a pagina principal após o comando loggout
export function signOut(){
    history.push('/');
}

//escuta os eventos
export default all([
    takeLatest('persist/REHYDRATE',setToken), //atualiza o token a cada requisicao
    takeLatest('@auth/SIGN_IN_REQUEST',signIn),
    takeLatest('@auth/SIGN_UP_REQUEST',signUp),
    takeLatest('@auth/SIGN_OUT',signOut),
]);