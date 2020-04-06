import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './componentes/Inicio.vue';
import Menu from './componentes/template/Menu.vue';
// import Usuario from './componentes/usuario/Usuario.vue';
// import UsuarioLista from './componentes/usuario/UsuarioLista.vue';
// import UsuarioDetalhe from './componentes/usuario/UsuarioDetalhe.vue';
// import UsuarioEditar from './componentes/usuario/UsuarioEditar.vue';

const Usuario = () => import(/* webpackChunkName: "usuario" */'./componentes/usuario/Usuario.vue');
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./componentes/usuario/UsuarioLista.vue');
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./componentes/usuario/UsuarioDetalhe.vue');
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./componentes/usuario/UsuarioEditar.vue');

Vue.use(Router);

const router = new Router({
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        },
    }, {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            { path: '/', component: UsuarioLista, 
                beforeEnter: (to, from, next) => {
                    console.log('antes da rota -> usuario detalhe');
                    next();
                }
            },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
        ]
    },{
        path: '/redirecionar',
        redirect: '/usuario'
    },{
        path: '*',
        redirect: '/'
    }]
})
router.beforeEach((to, from, next) => {
    console.log('Global -> antes das rotas');
    next()
})
export default router