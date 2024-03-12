import { createRouter, createWebHistory } from 'vue-router';
import CustomerList from '@/components/CustomerList.vue';
import EditCustomer from '@/components/EditCustomer.vue';
import AddCustomer from '@/components/AddCustomer.vue';

const routes = [
    {
        path: '/',
        alias: '/customers',
        name: 'customers',
        component: CustomerList,
    },
    {
        path: '/customers/:id',
        name: 'edit-customer',
        component: EditCustomer,
    },
    {
        path: '/add',
        name: 'add-customer',
        component: AddCustomer,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
