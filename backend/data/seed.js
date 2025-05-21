import dotenv from 'dotenv';
import { db } from '../config/db.js';
import colors from 'colors';
import Services from '../models/Services.js';
import { services } from './beautyServices.js';

dotenv.config();
await db();


async function seedDB(){
    try {
        await Services.insertMany(services);
        console.log(colors.bgGreen.bold('Base de datos importada correctamente'));
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

async function clearDB(){
    try {
        await Services.deleteMany();
        console.log(colors.bgGreen.bold('Se eliminó la base de datos correctamente'));
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
if(process.argv[2] === '--import'){
    seedDB();
} else {
    clearDB();
}