import mongoose from 'mongoose';
import colors from 'colors';

export const db = async () => {
    try{
        const db = await mongoose.connect(process.env.MONGO_URI)
        // para saber la información de conexión: console.log(db.connection)
        const url = `${db.connection.host}:${db.connection.port}`
        console.log(colors.blue.bgCyan(`MongoDB se conectó correctamente: ${url}`))
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}