import type {RouteRecordRaw} from 'vue-router';
import {createRouter, createWebHistory} from 'vue-router';

declare module 'vue-router' {
    interface RouteMeta {
        title?: string;
        icon?: string;
        linkTo?: string;
        cache?: boolean;
        hidden?: boolean;
        isBreadcrumb?: boolean;
    }
}
export const dynamicRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'ele-HomeFilled',
                    cache: false,
                    hidden: false
                }
            },
            {
                path: '/system',
                name: 'System',
                redirect: '/system/menu',
                meta: {
                    title: '系统管理',
                    icon: 'ele-Setting',
                    cache: true,
                    hidden: false
                },
                children: [
                    {
                        path: '/system/menu',
                        name: 'SystemMenu',
                        component: () => import('@/views/system/menu/index.vue'),
                        meta: {
                            title: '菜单管理',
                            icon: 'ele-Menu',
                            cache: true,
                            hidden: true
                        }
                    },
                    {
                        path: '/system/role',
                        name: 'SystemRole',
                        component: () => import('@/views/system/role/index.vue'),
                        meta: {
                            title: '角色管理',
                            icon: 'ele-Menu',
                            cache: true,
                            hidden: false,
                        }
                    },
                    {
                        path: '/system/user',
                        name: 'SystemUser',
                        component: () => import('@/views/system/user/index.vue'),
                        meta: {
                            title: '用户管理',
                            icon: 'ele-User',
                            cache: true,
                            hidden: true,
                        }
                    }
                ]
            },
            {
                path: 'goods',
                name: 'Goods',
                redirect: '/goods/list',
                meta: {
                    title: '商品管理',
                    icon: 'ele-Goods',
                    cache: true,
                    hidden: true,
                },
                children: [
                    {
                        path: '/goods/list',
                        name: 'GoodsList',
                        component: () => import('@/views/goods/list.vue'),
                        meta: {
                            title: '商品列表',
                            icon: 'ele-GoodsFilled',
                            cache: true,
                            hidden: true
                        }
                    },
                    {
                        path: '/goods/category',
                        name: 'GoodsCategory',
                        component: () => import('@/views/goods/category.vue'),
                        meta: {
                            title: '商品分类',
                            icon: 'ele-Operation',
                            cache: true,
                            hidden: true,
                        }
                    }
                ]
            },
            {
                path: '/baidu',
                name: 'Baidu',
                component: () => import('@/views/link/index.vue'),
                meta: {
                    title: '百度',
                    icon: 'ele-Link',
                    cache: true,
                    hidden: true,
                    linkTo: 'https://www.baidu.com',
                }
            },
            {
                path: '/401',
                name: 'NoPermission',
                component: () => import('@/views/error/401.vue'),
                meta: {
                    title: '401页面',
                    icon: 'ele-Warning',
                    cache: true,
                    hidden: true,
                }
            },
            {
                path: '/:path(.*)*',
                name: 'NotFound',
                component: () => import('@/views/error/404.vue'),
                meta: {
                    title: '未找到此页面',
                    cache: true,
                    hidden: true
                }

            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: dynamicRoutes
})

export default router
