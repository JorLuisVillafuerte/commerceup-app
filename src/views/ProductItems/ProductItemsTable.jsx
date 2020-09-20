import React, { useContext, useEffect, useState } from 'react';
import ProductsContext from '../../context/Products/ProductsContext';
import {stockColumn} from '../../assets/columns/TableColumns';
import MaterialTable from 'material-table';
import { Alert, Col, Row } from 'reactstrap';
import { Table, TableCell, TableHead, TableRow } from '@material-ui/core';
const ProductItemsTable = () => {

    const {obtenerProductosItems,productosItems} = useContext(ProductsContext);
    useEffect(() => {
        obtenerProductosItems();
    }, []);
    return ( 
        <MaterialTable
            title=''
            columns={stockColumn}
            data={productosItems}
            options={{
                pageSize: 10,
                rowStyle: rowData => ({
                backgroundColor: (rowData.cantidad === 0) ? '#fedbe2' : '#FFF'
                })
            }}
            detailPanel={rowData => (
                <Table style={{ minWidth: 650}} className="m-2">
                <TableHead>
                    <TableRow>
                        <TableCell>Codigo</TableCell>
                        <TableCell align="center">Talle</TableCell>
                        <TableCell align="center">Color</TableCell>
                        <TableCell align="center">Fecha creacion</TableCell>
                        <TableCell align="center">Estado</TableCell>
                    </TableRow>
                </TableHead>
                {rowData.productItemList.map((row) => {
                    if(row){
                        return (
                            <TableRow key={row.itemCode} style={{width: '100%'}}>
                                <TableCell component="th" scope="row">{row.itemCode}</TableCell>
                                <TableCell align="center">{row.size}</TableCell>
                                <TableCell align="center">{row.colour}</TableCell>
                                <TableCell align="center">{row.dateCreated}</TableCell>
                                <TableCell align="center">{row.statusId.statusType}</TableCell>
                            </TableRow>
                        );                   
                    }
                })}
                </Table>
            )}
        />
     );
}
 
export default ProductItemsTable;