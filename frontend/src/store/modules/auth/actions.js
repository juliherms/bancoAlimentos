/**
 * Registra a requisição de autenticacao.
 */
export function signInRequest(email,password) {

    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password},
    };
}

/**
 * realiza o cadastro de usuario na base de dados.
 */
export function signUpRequest(name,login,email,password){

    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: {name, login, email, password},
    };
}

/**
 * regista o sucesso de autenticacao e armazena o token e o usuario
 */
export function signInSuccess(token, user){
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
    };
}

/**
 * Registra erro ou falha de login
 */
export function signFailure(){
    return {
        type: '@auth/SIGN_FAILURE',
    };
}