require("express-async-errors"); // Para lidar com erros assíncronos
const migrationsRun = require("./database/sqlite/migrations"); // Para execução automática das migrations
const AppError = require("./utils/AppError"); // Para tratamento de erros personalizados
const uploadConfig = require("./configs/upload"); // Configuração de upload e exibição de URLs

const cors = require("cors"); // Biblioteca para permitir solicitações de diferentes origens
const express = require("express"); // Framework web
const routes = require("./routes"); // Importa as rotas da aplicação

// Executa as migrations para configurar o banco de dados
migrationsRun();

const app = express(); // Cria uma instância do Express

app.use(cors()); // Habilita o CORS
app.use(express.json()); // Configura o Express para interpretar JSON
// Configura as rotas da aplicação
// Configura a pasta de uploads para servir arquivos estáticos
app.use("/files", express.static(uploadConfig.UPLOAD_FOLDER));

app.use(routes);

// Middleware para tratamento de erros
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
