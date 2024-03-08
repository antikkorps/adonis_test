/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import Route from '@adonisjs/core/services/router'

const AuthController = () => import('#controllers/auth_controller')

router.get('/', async () => {
  return {
    Welcome: 'Welcome to Adonis App',
  }
})

Route.group(() => {
  Route.post('/auth/register', [AuthController, 'register'])
  Route.post('/auth/login', [AuthController, 'login'])
}).prefix('/api/v1')
