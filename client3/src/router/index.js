import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Swipe from '@/components/Swipe'
import DeleteUser from '@/components/DeleteUser'
import UpdateUser from '@/components/UpdateUser'
import SpecialLogin from '@/components/SpecialLogin'
import SpecialHomepage from '@/components/SpecialHomepage'
import SpecialUpdateUser from '@/components/SpecialUpdateUser'
import SpecialDeleteUser from '@/components/SpecialDeleteUser'
import DeleteMatch from '@/components/DeleteMatch'
import SeMatches from '@/components/SeMatches'

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'Register',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/swipe',
            name: 'Swipe',
            component: Swipe
        },
        {
            path: '/updateUser',
            name: 'UpdateUser',
            component: UpdateUser
        },
        {
            path: '/SpecialLogin',
            name: 'SpecialLogin',
            component: SpecialLogin
        }, {
            path: '/SpecialHomepage',
            name: 'SpecialHomepage',
            component: SpecialHomepage
        },
        {
            path: '/SpecialUpdateUser',
            name: 'SpecialUpdateUser',
            component: SpecialUpdateUser
        },
        {
            path: '/specialDeleteUser',
            name: 'SpecialDeleteUser',
            component: SpecialDeleteUser
        },
        {
            path: '/deleteUser',
            name: 'DeleteUser',
            component: DeleteUser
        },
        {
            path: '/DeleteMatch',
            name: 'DeleteMatch',
            component: DeleteMatch
        }, 
        {
            path: '/SeMatches',
            name: 'SeMatches',
            component: SeMatches
        }, 

    ]
    
})