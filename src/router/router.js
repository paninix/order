import Login from '@/components/pages/login';

export default [
    {
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        component: Login
    }
];