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
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')

router.get('/', async () => {
  return {
    Welcome: 'Welcome to Adonis App',
  }
})

Route.group(() => {
  Route.get('/auth/register', [AuthController, 'register']).as('auth.register')
  Route.post('/auth/register', [AuthController, 'handleRegister'])
  Route.get('/auth/login', [AuthController, 'login']).as('auth.login')
  Route.post('/auth/login', [AuthController, 'handleLogin'])
  Route.get('/dashboard', async () => {}).use(
    middleware.auth({
      guards: ['web'],
    })
  )
}).prefix('/api/v1')
