import React from 'react';
import MaterialTable from "material-table"; 

export default function TableAction(props) {
    
  console.log('Datos de la tabla: '+ props.data);
  
  return (
    <MaterialTable
      title={''}
      columns={props.columns}
      data={props.data}
      editable={{
        onRowUpdate: (newData, oldData) =>
        new Promise((resolve,reject) => {
          props.handleRowUpdate(newData, oldData, resolve,reject);
        }),
        onRowDelete : (oldData) => 
        new Promise ((resolve,reject) => { 
          props.handleRowDelete(oldData, resolve,reject)
        }) 
      }}
      actions={[
        {
          icon: 'search',
          tooltip: 'Ver registro',
          onClick: (event, rowData) => {
            props.handleDetails(event,rowData);
          }
        }
      ]}
      localization={{          
        body: {
            emptyDataSourceMessage: 'No hay registros para mostrar',
            editRow:{
              deleteText: '¿Estas seguro de eliminar el registro?'
            },
            deleteTooltip: 'Borrar',
            editTooltip: 'Editar',
            addTooltip: 'Agregar'
        },
        header: {
          actions: 'Acciones'
        },
      }}
      options={{
        pageSize: 10,
        actionsColumnIndex: -1,
      }}
    />
  );
}