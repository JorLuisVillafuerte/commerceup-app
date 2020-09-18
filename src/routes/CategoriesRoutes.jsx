import CategoriesForm from '../views/Categories/CategoriesForm';
import CategoriesTable from '../views/Categories/CategoriesTable';

var CategoriesRoutes = [
{
    path: '/admin/ui-components/categorias/table',
    icon: 'mdi mdi-adjust',
    component: CategoriesTable,
    title: 'Ver categorias',
    text: 'Haga click para listar todas las categorias del sistema.',
    buttonText: 'Ver categorias'
},
{
    path: '/admin/ui-components/categorias/form',
    icon: 'mdi mdi-adjust',
    component: CategoriesForm,
    title: 'Agregar categoria',
    text: 'Haga click para agregar una categoria via formulario.',
    buttonText: 'Agregar'
},
{
    path: '/admin/ui-components/categorias/report',
    icon: 'mdi mdi-adjust',
    component: CategoriesForm,
    title: 'Reportar un problema',
    text: 'Haga click para ingresar un problema via formulario.',
    buttonText: 'Reportar'
},
]
    
export default CategoriesRoutes;