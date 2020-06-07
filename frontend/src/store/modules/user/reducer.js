import produce from 'immer';

const INITIAL_STATE = {
    profile: null,
};

//executa o processo de login
export default function user(state = INITIAL_STATE, action) {

    //eventos que estou escutando
    return produce(state, draft => {

        //eventos que estou escutando
        switch (action.type) {
        
            case '@auth/SIGN_IN_SUCCESS':
                return produce(state, draft => {
                    draft.profile = action.payload.user;
                });
        
            case '@user/UPDATE_PROFILE_SUCCESS': {
                //TODO - juliherms verificar
                draft.profile = action.payload.profile;
                break;
            }

            case '@auth/SIGN_OUT' : {
                draft.profile = null;
                break;
            }
            
            default:
                return state;
        }

    });
}