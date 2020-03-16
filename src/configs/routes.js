
import asyncImportComponent from '../components/asyncImportComponent'
import PageA from '../containers/PageA'
import Menu from '../containers/Menu'

const routes = [
    {
        path: '/menu',
        component: Menu,
    },
    {
        path: '/qrcode',
        component: asyncImportComponent(() => import(/* webpackChunkName: "QRCode" */ '../containers/QRCode')),

    },
    {
        path: '/reportlog',
        component: asyncImportComponent(() => import(/* webpackChunkName: "ReportLog" */ '../containers/ReportLog')),

    },
    {
        path: '/myclient',
        component: asyncImportComponent(() => import(/* webpackChunkName: "MyClient" */ '../containers/MyClient/index.js')),

    },
    {
        path: '/changepassword',
        component: asyncImportComponent(() => import(/* webpackChunkName: "MyClient" */ '../containers/ChgPassWord')),

    },
    {
        path: '/prolist',
        component: asyncImportComponent(() => import(/* webpackChunkName: "ProList" */ '../containers/ProList')),

    },
    {
        path: '/report',
        component: asyncImportComponent(() => import(/* webpackChunkName: "ProList" */ '../containers/Report')),

    },
    {
        path: '/prointro',
        component: asyncImportComponent(() => import(/* webpackChunkName: "ProList" */ '../containers/ProIntro')),

    },
    {
        path: '/inventcode',
        component: asyncImportComponent(() => import(/* webpackChunkName: "ProList" */ '../containers/InventCode')),

    },
    // {
    //     path: '/',
    //     component: PageA,
    // },
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

