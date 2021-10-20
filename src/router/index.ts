import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../pages/Index.vue'),
  },
  {
    path: '/2021spring/:',
    component: () => import('../pages/2021sp.vue'),
    meta: { title: '2021年春期 - nanimita'}

  },
  {
    path: '/2021summer/:',
    component: () => import('../pages/2021su.vue'),
    meta: { title: '2021年夏期 - nanimita'}

  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});

Router.afterEach((to: any) => {
   document.title = to.meta.title || 'nanimita - あなたの「見た」を共有しよう'
 })
