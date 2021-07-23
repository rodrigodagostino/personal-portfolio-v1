const c1 = () => import(/* webpackChunkName: "page--src-templates-project-vue" */ "D:\\Development\\Repositories\\personal-portfolio-v1\\src\\templates\\Project.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\Development\\Repositories\\personal-portfolio-v1\\node_modules\\gridsome\\app\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\Development\\Repositories\\personal-portfolio-v1\\src\\pages\\Index.vue")

export default [
  {
    path: "/en/projects/vue-movie-search-app/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/es/projects/vue-movie-search-app/",
    component: c1,
    meta: {
      locale: "es"
    }
  },
  {
    path: "/en/projects/vue-calculator-app/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/en/projects/vue-countdown-app/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/en/projects/vue-todo-app/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/en/projects/vue-weather-app/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/es/projects/vue-calculator-app/",
    component: c1,
    meta: {
      locale: "es"
    }
  },
  {
    path: "/es/projects/vue-countdown-app/",
    component: c1,
    meta: {
      locale: "es"
    }
  },
  {
    path: "/es/projects/vue-todo-app/",
    component: c1,
    meta: {
      locale: "es"
    }
  },
  {
    path: "/es/projects/vue-weather-app/",
    component: c1,
    meta: {
      locale: "es"
    }
  },
  {
    path: "/en/projects/radio-fueguina-website/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    path: "/es/projects/radio-fueguina-website/",
    component: c1,
    meta: {
      locale: "es"
    }
  },
  {
    name: "404__en",
    path: "/en/404/",
    component: c2,
    meta: {
      locale: "en"
    }
  },
  {
    name: "404__es",
    path: "/es/404/",
    component: c2,
    meta: {
      locale: "es"
    }
  },
  {
    path: "/projects/:slug/",
    component: c1,
    meta: {
      locale: "en"
    }
  },
  {
    name: "__en_slug",
    path: "/en/:slug+",
    component: c2,
    meta: {
      dataPath: "/en/_slug_plus.json",
      dynamic: true,
      locale: "en"
    }
  },
  {
    name: "__es_slug",
    path: "/es/:slug+",
    component: c2,
    meta: {
      dataPath: "/es/_slug_plus.json",
      dynamic: true,
      locale: "es"
    }
  },
  {
    name: "home__en",
    path: "/en/",
    component: c3,
    meta: {
      locale: "en"
    }
  },
  {
    name: "home__es",
    path: "/es/",
    component: c3,
    meta: {
      locale: "es"
    }
  },
  {
    name: "404",
    path: "/404/",
    component: c2,
    meta: {
      locale: "en"
    }
  },
  {
    name: "home",
    path: "/",
    component: c3,
    meta: {
      locale: "en"
    }
  },
  {
    name: "*",
    path: "*",
    component: c2,
    meta: {
      locale: "en"
    }
  }
]
