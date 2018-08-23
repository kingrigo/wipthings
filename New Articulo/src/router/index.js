import Vue from 'vue';
import Router from 'vue-router';
import TiendaView from '../components/TiendaView';
import DeleteView from '../components/DeleteView';
import EditView from '../components/EditView';
import DetailView from '../components/DetailView';
import CreateView from '../components/CreateView';

Vue.use(Router);

export default new Router ({
    routes:[
        {
            path: '/',
            name: 'lista-articulo',
            component: TiendaView
        },
        {
            path: '/new',
            name: 'nuevo-articulo',
            component: CreateView
        },
        {
            path: '/del/:articulo_id',
            name: 'borrar-articulo',
            component: DeleteView
        },
        {
            path: '/edit/:articulo_id',
            name: 'editar-articulo',
            component: EditView
        },
        {
            path: '/:articulo_id',
            name: 'vista-detallada',
            component: DetailView
        },
    ] 
    
})