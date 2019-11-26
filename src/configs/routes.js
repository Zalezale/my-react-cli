
import asyncImportComponent from '../components/asyncImportComponent'
import PageA from '../containers/PageA'

const routes = [
    {
        path: '/',
        component: PageA,
    },
    {
        path: '/pagea',
        component: PageA,
    },
    {
        path: '/pageb',
        component: asyncImportComponent(() => import(/* webpackChunkName: "pageb" */ '../containers/PageB')),
    },
    {
        path: '/pagec',
        component: asyncImportComponent(() => import(/* webpackChunkName: "pagec" */'../containers/PageC')),
    }

]


export default routes

