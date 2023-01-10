
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/auth/SignIn.vue') },
      { path: '/signup', component: () => import('src/pages/auth/SignUp.vue') },
      {path:'/about', component:()=> import('src/pages/about/AboutNetCloud.vue')}
    ]
  },
  {
    path:'/user',
    component:()=> import('layouts/UserLayout.vue'),
    children:[
      {path:'profile', component:()=> import('src/pages/user/user.vue')}
    ]
  },
  {
    path:'/newsfeed',
    component:() => import('layouts/NewsFeedLayout.vue'),
    children:[
      {path:'', component:()=> import('src/pages/newsfeed/newsFeed.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
