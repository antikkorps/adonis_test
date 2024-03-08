// import type { HttpContext } from '@adonisjs/core/http'

export default class TestController {
  async register() {
    return this.register.name
  }

  async login() {
    return this.login.name
  }
}
