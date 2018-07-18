import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/banner'
    }, {
        path: '/banner',
        name: 'banner-page',
        component: require('@/pages/banner/index').default
    }, {
        path: '/search',
        name: 'search-page',
        component: require('@/pages/search/index').default
    }, {
        path: '*',
        redirect: '/'
    }]
})