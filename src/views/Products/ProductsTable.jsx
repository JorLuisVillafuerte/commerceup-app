import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {productColumn} from '../../assets/columns/TableColumns';
import TableAction from '../../components/Tables/TableAction';
import AxiosService from '../../config/AxiosService';
import { LinearProgress } from '@material-ui/core';

const ProductsTable = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log('use effect triger');
        AxiosService.get('productos/').then(res => {
            setData(res.data);
            localStorage.setItem('productos', res.data);
        })
            .catch(error => {
                console.log(error);
            });
    }, []);
    /*
    const handleRowUpdate = async (newData, oldData, resolve, reject) => {
        const result = await editarCategoria(newData);
        if (result) {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);
            setTimeout(() => {
                resolve()
            }, 5000);
        } else {
            reject();
        }
    }

    const handleRowDelete = async (oldData, resolve, reject) => {
        const result = await eliminarCategoria(oldData.internalid);
        if (result) {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
            setTimeout(() => {
                resolve()
            }, 5000);
        } else {
            reject();
        }
    }
    let [details, setDetails] = useState({});
    const handleDetails = (event, rowData) => {
        setOpenPopup(true);
        details = rowData;
        console.log(details);
        console.log(details.name);
    }*/
    if(data.length === 0) {
        return (
            <LinearProgress color="primary" />
        );
    }
    return ( 
        <TableAction
            columns={productColumn}
            data={data}
        />
     );
}
 
export default ProductsTable;