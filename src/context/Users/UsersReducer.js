import { ADD_USER, DELETE_USER, EDIT_USER, ERROR_USER, GET_ALL_USERS, OK_USER } from '../../types/index.js';

export default (state,action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                usuarios: action.payload,
                error: false
            }   
        case ADD_USER:
            return {
                ...state,
                usuarios: [...state.usuarios, action.payload],
                error: false
            }
        case EDIT_USER:
            return {
                ...state,
                usuarios: state.usuarios.map(usuario => usuario.internalid === action.payload.internalid ? action.payload : usuario),
                error: false
            }
        case DELETE_USER:
            return {
                ...state,
                usuarios: state.usuarios.filter(usuario => usuario.internalid !== action.payload),
                error: false
            }
        case ERROR_USER:
            return {
                ...state,
                msg: action.payload,
                error: true
            }
        case OK_USER:
            return {
                ...state,
                msg: action.payload,
                error: false
            }
        
        default:
            break;
    }
}