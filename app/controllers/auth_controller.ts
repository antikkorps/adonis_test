import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { RegisterUserValidator } from '#validators/auth'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import { writeFile } from 'fs/promises'
import vine from '@vinejs/vine'
export default class AuthController {
  async handleRegister({ request, session, response }: HttpContext) {
    const { email, password } = await vine.validate(RegisterUserValidator)
    await User.create({ email, password })
    session.flash('success', 'You have successfully registered')
    return response.status(200).send({ message: 'You have successfully registered' })
  }

  async register() {
    return this.register.name
  }

  async handleLogin() {
    return this.handleLogin.name
  }

  async login() {
    return this.login.name
  }
}
