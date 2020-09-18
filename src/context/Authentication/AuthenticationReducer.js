import { OK_LOGIN,GET_USER,ERROR_LOGIN } from '../../types/index.js';

export default (state,action) => {
    switch (action.type) {
        case OK_LOGIN:
            //localStorage.setItem('token', action.payload);
            return {
                ...state,
                autenticado: true,
                msg: null,
                cargando: false
            }
        case ERROR_LOGIN:
            //localStorage.removeItem('token');
            return {
                ...state,
                //token: null,
                user: null,
                autenticado: false,
                msg: null,
                cargando: false
            }
        case GET_USER:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
            }
        default:
            break;
    }
}