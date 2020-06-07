import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';
import { toast } from 'react-toastify';

/**
 * Método responsável por atualizar o perfil do usuario. 
 */
export function* updateProfile({ payload }){

    console.log('teste 4');

    try{

        const { nome, email, ...rest } = payload.data;


        const profile = Object.assign(
            {nome, email},
            rest.oldPassword ? rest : {}
        );

        const response = yield call(api.put,'usuarios',profile);

        console.log(response.data);

        toast.success('Perfil atualizado com sucesso');
        yield put(updateProfileSuccess(response.data));

    } catch(err){

        toast.error('Erro ao atualizar o perfil');
        yield put(updateProfileFailure());
    }
    

}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
