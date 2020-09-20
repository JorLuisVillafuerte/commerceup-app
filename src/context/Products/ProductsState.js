import React, { useReducer } from 'react';
import ProductsReducer from './ProductsReducer';
import ProductsContext from './ProductsContext';
import AxiosService from 'config/AxiosService';
import {GET_ALL_PRODUCTS, DELETE_PRODUCT, EDIT_PRODUCT, ADD_PRODUCT, ERROR_PRODUCT, OK_PRODUCT,GET_ALL_PRODUCTSITEMS} from '../../types/index.js';

const ProductsState = (props) => {

    //ESTADO INICIAL DE PRODCUTOS
    const initialState = {
        productos: [],
        productosItems: [],
        error: false,
        msg: null

    }
    //CONFIGURACION DEL DISPATCH 
    const [state, dispatch] = useReducer(ProductsReducer,initialState);
    
    //FUNCIONES DE Products
    
    const obtenerProductos = async()=> {
        try {
            const result = await AxiosService.get('productos/');
            console.log(result);
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: result.data
            })
            return result;
        } catch (error) {
            const alert = {msg: 'Ops! ocurrio un error al cargar los registros, vuelva a intentar!.', type: 'warning', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_PRODUCT,
                payload: alert
            });
        }
    }
    const obtenerProductoCodigo = async(codigo)=> {
        try {
            const result = await AxiosService.get(`productos/codigo/${codigo}`);
            console.log(result);
            return result;
        } catch (error) {
            console.log(error.response);
            const alert = {msg: 'No se encontro un producto con el codigo ingresado, vuelva a intentar!.', type: 'warning', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_PRODUCT,
                payload: alert
            });
            return null;
        }
    }
    const obtenerProductosItems = async()=> {
        try {
            const result = await AxiosService.get('productos/');
            let data = result.data;
            for (let x = 0; x < data.length; x++) {
                data[x].cantidad = data[x].productItemList.length;
            }
            console.log(data);
            dispatch({
                type: GET_ALL_PRODUCTSITEMS,
                payload: data
            })
            return data;
        } catch (error) {
            const alert = {msg: 'Ops! ocurrio un error al cargar los registros, vuelva a intentar!.', type: 'warning', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_PRODUCT,
                payload: alert
            });
        }
    }
    
    const guardarProducto = async(producto) =>{
        try {
            producto.productCode = 'PRD-'+producto.productCode;
            producto.unitPrice = Number(producto.unitPrice).toFixed(2);
            console.log(producto);
            const result = await AxiosService.post('productos/',producto);
            console.log(result);
            dispatch({
                type: ADD_PRODUCT,
                payload: result.data
            });
            const alert = { msg: 'El registro fue agregado correctamente', type: 'primary', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: OK_PRODUCT,
                payload: alert
            });
            return result.data;
        } catch (error) {
            console.log(error);
            const alert = { msg: 'Ops! ocurrio un error al agregar un registro.', type: 'warning',icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_PRODUCT,
                payload: alert
            });
            return false;
        }
    }
    const editarProducto = async(producto) =>{
        try {
            const result = await AxiosService.post('productos/',producto);
            console.log(result);
            dispatch({
                type: EDIT_PRODUCT,
                payload: result.data
            });
            const alert = { msg: 'El registro fue editado correctamente', type: 'primary', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: OK_PRODUCT,
                payload: alert
            });
            return true;
        } catch (error) {
            console.log(error.response);
            const alert = { msg: 'Ops! ocurrio un error al editar el registro.',indicacion: error.response.data.message, type: 'danger',icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_PRODUCT,
                payload: alert
            });
            return false;
        }
    }

    const eliminarProducto = async(producto)=> {
        try {
            const result = await AxiosService.delete(`productos/id/${producto}`);
            console.log(result);
            dispatch({
                type: DELETE_PRODUCT,
                payload: producto
            });
            const alert = { msg: 'El registro fue eliminado correctamente', type: 'primary', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: OK_PRODUCT,
                payload: alert
            });
            return true;
        } catch (error) {
            console.log(error);
            const alert = { msg: 'Ops! ocurrio un error al editar el registro.', type: 'warning',icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_PRODUCT,
                payload: alert
            });
            return false;
        }
    }
    const alertaError = (alerta) => {
        const alert = { msg: alerta, type: 'danger',icon: 'nc-icon nc-bell-55'}
        dispatch({
            type: ERROR_PRODUCT,
            payload: alert
        });
    }
    //NUEVO 17/09
    const agregarLoteItems = async(arrayItems) => {
        try {
            const result = await AxiosService.post('productosItem/lote',arrayItems);
            console.log(result);
            const alert = { msg: 'Los items fueron agregados exitosamente.', type: 'primary', icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: OK_PRODUCT,
                payload: alert
            });
            return true;
        } catch (error) {
            console.log(error);
            const alert = { msg: 'Ops! ocurrio un error al cargar los items.', type: 'warning',icon: 'nc-icon nc-bell-55'}
            dispatch({
                type: ERROR_PRODUCT,
                payload: alert
            });
            return false;
        }
    }
    return ( 
        <ProductsContext.Provider
            value={{
                productos: state.productos,
                productosItems: state.productosItems,
                notificacion:state.notificacion,
                msg: state.msg,
                obtenerProductos,
                obtenerProductoCodigo,
                editarProducto,
                guardarProducto,
                eliminarProducto,
                alertaError,
                agregarLoteItems,
                obtenerProductosItems
            }}
        >
            {props.children}
        </ProductsContext.Provider>    
    );
}
 
export default ProductsState;