export default [{
        path: '/:menuid/page/Empty',
        name: '/page/Empty',
        component: () => import('@/layouts/contents/pages/Empty.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/sample/Samples/Sample1',
        name: '/page/sample/Samples/Sample1',
        component: () => import('@/layouts/contents/pages/sample/Samples/Sample1.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/sample/Samples/Sample2',
        name: '/page/sample/Samples/Sample2',
        component: () => import('@/layouts/contents/pages/sample/Samples/Sample2.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/sample/Samples/Sample3',
        name: '/page/sample/Samples/Sample3',
        component: () => import('@/layouts/contents/pages/sample/Samples/Sample3.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/template/Complex/Complex01',
        name: '/page/template/Complex/Complex01',
        component: () => import('@/layouts/contents/pages/template/Complex/Complex01.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/template/Complex/Complex02',
        name: '/page/template/Complex/Complex02',
        component: () => import('@/layouts/contents/pages/template/Complex/Complex02.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/template/Split/Split01',
        name: '/page/template/Split/Split01',
        component: () => import('@/layouts/contents/pages/template/Split/Split01.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/template/Split/Split02',
        name: '/page/template/Split/Split02',
        component: () => import('@/layouts/contents/pages/template/Split/Split02.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/template/Split/Split03',
        name: '/page/template/Split/Split03',
        component: () => import('@/layouts/contents/pages/template/Split/Split03.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/template/Stack/Stack01',
        name: '/page/template/Stack/Stack01',
        component: () => import('@/layouts/contents/pages/template/Stack/Stack01.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/template/Stack/Stack02',
        name: '/page/template/Stack/Stack02',
        component: () => import('@/layouts/contents/pages/template/Stack/Stack02.vue'),
        meta: {
        requiresAuth: true
        }
    },{
        path: '/:menuid/page/template/Stack/Stack03',
        name: '/page/template/Stack/Stack03',
        component: () => import('@/layouts/contents/pages/template/Stack/Stack03.vue'),
        meta: {
        requiresAuth: true
        }
    },]