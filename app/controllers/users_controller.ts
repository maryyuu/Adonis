 import type { HttpContext } from '@adonisjs/core/http'
 import { inject } from '@adonisjs/core' // Depedencia de injection
 import ServicioUsers from '#services/user_service'
export default class UsersController {
 @inject()
 async index(ctx: HttpContext,user_service: ServicioUsers){
    let users = user_service.all()
    return users
 }

}