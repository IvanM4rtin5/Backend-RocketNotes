const { hash, compare } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UserControllers {
  async create(request, response) {
    try {
      const { name, email, password } = request.body
      console.log("Criando usuário:", { name, email })

      const database = await sqliteConnection()
      const checkUserExists = await database.get(
        "SELECT * FROM users WHERE email = (?)",
        [email]
      )
      if (checkUserExists) {
        throw new AppError("Este e-mail já está em uso.")
      }
    
      const hashPassword = await hash(password, 8)

      await database.run(
        "INSERT INTO users(name, email, password) VALUES(?, ?, ?)",
        [name, email, hashPassword]
      )

      return response.status(201).json()
    } catch (error) {
      console.error("Erro na criação do usuário:", error)
      return response.status(400).json({ error: error.message })
    }
  }

  async update(request, response) {
    try {
      const { name, email, password, old_password } = request.body;
      const user_id = request.user.id;
      console.log("Atualizando usuário:", { user_id, name, email })

      const database = await sqliteConnection();
      const user = await database.get("SELECT * FROM users WHERE id = ?", 
        [ user_id, ])

      if (!user) {
        throw new AppError("Usuário não encontrado")
      }

      const userWithUpdateEmail = await database.get(
        "SELECT * FROM users WHERE email = ?",
        [email]
      )
      
      if (userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
        throw new AppError("Este e-mail já está em uso.")
      }

      const updatedName = name ?? user.name
      const updatedEmail = email ?? user.email

      if (password && !old_password) {
        throw new AppError(
          "Você precisa informar a senha antiga para definir a nova senha"
        )
      }

      let updatedPassword = user.password
      if (old_password && password) {
        const checkOldPassword = await compare(old_password, user.password)

        if (!checkOldPassword) {
          throw new AppError("Senha antiga não confere.")
        }

        updatedPassword = await hash(password, 8)
      }

      await database.run(
        `
          UPDATE users SET
          name = ?,
          email = ?,
          password = ?,
          updated_at = DATETIME('now')
          WHERE id = ?
        `,
        [updatedName, updatedEmail, updatedPassword, user_id]
      )

      return response.json()
    } catch (error) {
      console.error("Erro na atualização do usuário:", error)
      return response
        .status(error.statusCode || 400)
        .json({ error: error.message })
    }
  }
}

module.exports = UserControllers
