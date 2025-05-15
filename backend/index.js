import express from "express";
import servicesRoutes from "./routes/servicesRoutes.js";



// configurar la app
const app = express();

// definir una ruta
app.use('/services', servicesRoutes)

// definir puerto
const PORT =process.env.PORT || 4000;

// arrancar la app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});