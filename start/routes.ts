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

const TestController = () => import('#controllers/test_controller')

router.get('/', async () => {
  return {
    Welcome: 'Welcome to Adonis App',
  }
})

Route.group(() => {
  Route.post('/auth/register', [TestController, 'register'])
  Route.post('/auth/login', [TestController, 'login'])
  Route.get('/dashboard', async () => {}).use(
    middleware.auth({
      guards: ['web'],
    })
  )
}).prefix('/api/v1')
