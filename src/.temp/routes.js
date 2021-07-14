const c1 = () => import(/* webpackChunkName: "page--src-templates-project-vue" */ "D:\\Development\\Repositories\\personal-portfolio-v1\\src\\templates\\Project.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Development\\Repositories\\personal-portfolio-v1\\node_modules\\gridsome\\app\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Development\\Repositories\\personal-portfolio-v1\\src\\pages\\Index.vue")

export default [
  {
    path: "/projects/:slug/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
