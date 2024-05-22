/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import router2 from '@adonisjs/core/services/router'
// import Usuario from '#controllers/users_controller'
const Usuario = () => import('#controllers/users_controller')
const UsuarioRutas = () => import('#controllers/users_1_s_controller')

router.get('/api', async () => {
  return {
    hello: 'world',
  }
})
router.get('/getTwo', async () => {
  return {
    hello: 'Maryuri Lopez',
  }
})

//PREFIJOS
router.group(()=>{
   router2.get('computador', ()=>{
    return{
    1:"Desde computador ruta uuno de PREFIJOS",
    2: "Soy dos"
    }
  })
  router.get('celular',()=>{
    return{
    hola: "Desde movil, ruta Dos de PREFIJOS"
    }
  })
}).prefix("/api/")

//PARAMETROS
router.get('getById:id',({params})=>{
  return params.id
})

router.get('users',[Usuario, 'index'])
router.resource('usersRutas',UsuarioRutas)