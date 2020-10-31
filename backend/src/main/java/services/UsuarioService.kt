package services

import Elementos.Ing.AgileTasks.modelo.Usuario


interface UsuarioService {
    fun nuevoUsuario(user: Usuario)
    fun modificarUsuario(user: Usuario)
    fun eliminarUsuario(user: Usuario)
    fun getUsuarioById(id : Int): Usuario
    fun validateUser(user: Usuario): Boolean
}