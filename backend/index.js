import express from "express";
import { db } from "./config/db.js";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import servicesRoutes from "./routes/servicesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";


// Configurar dotenv de variable de entorno
dotenv.config();

// Configurar la app
const app = express();

// Leer datos via body
app.use(express.json());

// Conectar a DB
db();


// Configurar CORS

const whitelist = process.argv[2] === '--postman' ? [process.env.FRONTEND_URL, undefined] : [process.env.FRONTEND_URL]

const corsOptions = {
  origin: function(origin, callback) {
    if(whitelist.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
}
}

app.use(cors(corsOptions))

// Definir una ruta
app.use('/api/services', servicesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

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

//console.log(process.env);