import React, { useReducer } from 'react';
import AxiosService from 'config/AxiosService';
import {OK_LOGIN,ERROR_LOGIN} from '../../types/index.js';
import AuthenticationReducer from './AuthenticationReducer.js';
import AuthenticationContext from './AuthenticationContext.js';

const AuthenticationState = (props) => {

    //ESTADO INICIAL DE CATEGORIAS
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        user: null,
        msg: null,
        cargando: true
    }
    const [state, dispatch] = useReducer(AuthenticationReducer, initialState);

    //FUNCIONES DE Authentication
    
    const validateLogIn = async(datos) => {
        try {
            const respuesta = await AxiosService.post('login', datos);
            console.log(respuesta.data);
            dispatch({
                type: OK_LOGIN,
                //payload:respuesta.data.token
            });
            //usuarioAutenticado(); 
        } catch (error) {
            dispatch({
                type: ERROR_LOGIN
            });
        }
    }
    const LogOut = () => {

    }
    return ( 
        <AuthenticationContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                msg: state.msg,
                cargando: state.cargando,
                //usuarioAutenticado,
                validateLogIn,
                LogOut
            }}
        >
            {props.children}
        </AuthenticationContext.Provider>    
    );
}
 
export default AuthenticationState;