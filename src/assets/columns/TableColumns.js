export const categoryColumn = [
    { title: 'id', field: 'internalid', hidden: true },
    {
      title: 'Codigo', field: 'categoryCode', validate: rowData => rowData.categoryCode === '' ?
        { isValid: false, helperText: 'Codigo no puede estar vacio' } : true
    },
    {
      title: 'Nombre', field: 'name', validate: rowData => rowData.name === '' ?
        { isValid: false, helperText: 'Nombre no puede estar vacio' } : true
    },
    { title: 'Descripcion', field: 'description', },
    { title: 'Fecha creacion', field: 'dateCreated', type: 'date', editable: 'never' },
    {
      title: 'Target', field: 'targetType', lookup:
        { 'niños': 'Niños', 'niñas': 'Niñas', 'bebe': 'Bebe', 'beba': 'Beba', 'hombre': 'Hombre', 'mujer': 'Mujer' },
    },
    {
      title: 'Temporada', field: 'seasonType', lookup:
        { 'primavera': 'Primavera', 'verano': 'Verano', 'primavera/verano': 'Primavera/Verano', 'otoño': 'Otoño', 'invierno': 'Invierno', 'otoño/invierno': 'Otoño/Invierno', 'todos': 'Todos' },
    },
    {
      title: 'Estado', field: 'statusId.internalid', lookup:
        { 1: 'Disponible', 2: 'No Disponible' },
    },
]
export const productColumn = [
  { title: 'id', field: 'internalid', hidden: true },
  {
    title: 'Codigo', field: 'productCode', validate: rowData => rowData.categoryCode === '' ?
      { isValid: false, helperText: 'Codigo no puede estar vacio' } : true
  },
  {
    title: 'Articulo', field: 'articleCode', validate: rowData => rowData.articleCode === '' ?
      { isValid: false, helperText: 'Articulo no puede estar vacio' } : true
  },
  {
    title: 'Nombre', field: 'name', validate: rowData => rowData.name === '' ?
      { isValid: false, helperText: 'Nombre no puede estar vacio' } : true
  },
  { title: 'Descripcion', field: 'description', },
  { title: 'Fecha creacion', field: 'dateCreated', type: 'date', editable: 'never' },
  { title: 'Precio', field: 'unitPrice', type: 'currency'},
  {
    title: 'Estado', field: 'statusId.internalid', lookup:
      { 1: 'Disponible', 2: 'No Disponible' },
  },
]
export const stockColumn = [
  { title: 'id', field: 'internalid', hidden: true },
  {
    title: 'Codigo', field: 'productCode', validate: rowData => rowData.categoryCode === '' ?
      { isValid: false, helperText: 'Codigo no puede estar vacio' } : true
  },
  {
    title: 'Articulo', field: 'articleCode', validate: rowData => rowData.articleCode === '' ?
      { isValid: false, helperText: 'Articulo no puede estar vacio' } : true
  }, 
  {
    title: 'Nombre', field: 'name', validate: rowData => rowData.name === '' ?
      { isValid: false, helperText: 'Nombre no puede estar vacio' } : true
  },
  {
    title: 'Cantidad', field: 'cantidad', type: 'number'
  }
]

  