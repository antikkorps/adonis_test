import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { RegisterUserValidator } from '#validators/auth/register_user_validator'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import { writeFile } from 'fs/promises'

export default class AuthController {
  async register() {
    return this.register.name
  }

  async handleRegister() {
    return this.handleRegister.name
  }

  async handleLogin() {
    return this.handleLogin.name
  }

  async login() {
    return this.login.name
  }
}
