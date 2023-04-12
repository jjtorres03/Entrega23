'use strict'



const ProductoModel = use('App/Models/Producto');


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/productos', 'productoController.getAllProducts');


// Vista Tabla Productos!

Route.get('/productosvista', async ({ view }) => {
    const productos = (await ProductoModel.all()).toJSON();
    return view.render('productos', { productos } )
  })