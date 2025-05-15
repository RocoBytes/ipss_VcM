import mongoose from 'mongoose';

export const db = async () => {
    try{
        const db = await mongoose.connect(
            process.env.MONGO_URI)

        console.log('Se conectó correctamente a la base de datos')
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}