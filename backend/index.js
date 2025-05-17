import express from "express";
import { db } from "./config/db.js";
import colors from "colors";
import dotenv from "dotenv";
import servicesRoutes from "./routes/servicesRoutes.js";

// Configurar dotenv de variable de entorno
dotenv.config();

// Configurar la app
const app = express();

// Leer datos via body
app.use(express.json());

// Conectar a DB
db();

// Definir una ruta
app.use('/api/services', servicesRoutes);

// Definir puerto
const PORT = process.env.PORT || 4000;

// Definir ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Arrancar la app
app.listen(PORT, () => {
  console.log( colors.blue.bgMagenta( `Server is running on port ${PORT}`));
});

console.log(process.env);