import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';
import { toast } from 'react-toastify';

/**
 * Método responsável por atualizar o perfil do usuario. 
 */
export function* saveEntity({ payload }){


    try{

        console.log(payload.data);

        const { nome, email, senha, cidade, uf, acao } = payload.data;

        
        yield call(api.post,'entidades', {
            idUsuario : '6ac45134-59e3-4d6a-81d5-8c0797b5157f',
            nome,
            latitude: 0,
            longitude: 0,
            cidade,
            uf,
            email,
            descricao: acao
        });

         toast.success('Cadastro realizado com sucesso');
    //    yield put(updateProfileSuccess(response.data)); */

    } catch(err){

        toast.error('Erro ao salvar a entidade');
        //yield put(updateProfileFailure());
    }
    

}

export default all([takeLatest('@entity/SAVE_ENTITY_REQUEST', saveEntity)]);
