import {ERROR_PRODUCT,OK_PRODUCT,ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_ALL_PRODUCTSITEMS} from '../../types/index.js';

export default (state,action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                productos: action.payload,
                error: false
            }   
        case GET_ALL_PRODUCTSITEMS:
            return {
                ...state,
                productosItems: action.payload,
                error: false
            }   
        case ADD_PRODUCT:
            return {
                ...state,
                productos: [...state.productos, action.payload],
                error: false
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                productos: state.productos.map(producto => producto.internalid === action.payload.internalid ? action.payload : producto),
                error: false
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.internalid !== action.payload),
                error: false
            }
        case ERROR_PRODUCT:
            return {
                ...state,
                msg: action.payload,
                error: true
            }
        case OK_PRODUCT:
            return {
                ...state,
                msg: action.payload,
                error: false
            }
        
        default:
            break;
    }
}