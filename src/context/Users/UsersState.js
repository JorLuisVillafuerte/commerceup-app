import React, { useReducer } from 'react';
import UsersReducer from './UsersReducer';
import UsersContext from './UsersContext';
import AxiosService from 'config/AxiosService';
import {ADD_USER, DELETE_USER, EDIT_USER, ERROR_USER, GET_ALL_USERS, OK_USER} from '../../types/index.js';

const UsersState = (props) => {

    //ESTADO INICIAL DE USUARIOS
    const initialState = {
        usuarios: [],
        error: false,
        msg: null

    }
    //CONFIGURACION DEL DISPATCH 
    const [state, dispatch] = useReducer(UsersReducer,initialState);
    
    //FUNCIONES DE Users
    
    const obtenerUsuarios = async()=> {
        try {
            const result = await AxiosService.get('usuarios/');
            console.log(result);
            dispatch({
                type: GET_ALL_USERS,
                payload: result.data
            })
            return result;
        } catch (error) {
            const alert = {msg: 'Ops! ocurrio un error al cargar los registros, vuelva a intentar!.', type: 'warning', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_USER,
                payload: alert
            });
        }
    }

    const guardarUsuario = async(usuario) =>{
        try {
            const result = await AxiosService.post('usuarios/',usuario);
            console.log(result);
            dispatch({
                type: ADD_USER,
                payload: result.data
            });
            const alert = { msg: 'El registro fue agregado correctamente', type: 'primary', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: OK_USER,
                payload: alert
            });
            return result.data;
        } catch (error) {
            console.log(error);
            const alert = { msg: 'Ops! ocurrio un error al agregar un registro.', type: 'warning',icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_USER,
                payload: alert
            });
            return false;
        }
    }
    const editarUsuario = async(usuario) =>{
        try {
            const result = await AxiosService.post('usuarios/',usuario);
            console.log(result);
            dispatch({
                type: EDIT_USER,
                payload: result.data
            });
            const alert = { msg: 'El registro fue editado correctamente', type: 'primary', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: OK_USER,
                payload: alert
            });
            return true;
        } catch (error) {
            console.log(error.response);
            const alert = { msg: 'Ops! ocurrio un error al editar el registro.',indicacion: error.response.data.message, type: 'danger',icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_USER,
                payload: alert
            });
            return false;
        }
    }

    const eliminarUsuario = async(usuario)=> {
        try {
            const result = await AxiosService.delete(`usuarios/id/${usuario}`);
            console.log(result);
            dispatch({
                type: DELETE_USER,
                payload: usuario
            });
            const alert = { msg: 'El registro fue eliminado correctamente', type: 'primary', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: OK_USER,
                payload: alert
            });
            return true;
        } catch (error) {
            console.log(error);
            const alert = { msg: 'Ops! ocurrio un error al editar el registro.', type: 'warning',icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_USER,
                payload: alert
            });
            return false;
        }
    }
    const alertaError = (alerta) => {
        const alert = { msg: alerta, type: 'danger',icon: 'nc-icon nc-bell-55'}
        dispatch({
            type: ERROR_USER,
            payload: alert
        });
    }
    return ( 
        <UsersContext.Provider
            value={{
                usuarios: state.usuarios,
                notificacion:state.notificacion,
                msg: state.msg,
                obtenerUsuarios,
                editarUsuario,
                guardarUsuario,
                eliminarUsuario,
                alertaError,
            }}
        >
            {props.children}
        </UsersContext.Provider>    
    );
}
 
export default UsersState;