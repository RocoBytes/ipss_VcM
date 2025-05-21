import Services from "../models/Services.js";
import { validateObjectId, handleNotFoundError } from "../utils/index.js";

const createService = async (req, res) => {
    if (Object.values(req.body).includes("")){
        return res.status(400).json({message: "Todos los campos son obligatorios"});
    }

    try {
        const service = new Services(req.body)
        const result = await service.save();
        res.status(201).json("El servicio se creó correctamente");

    } catch (error) {
        console.log(error);
    }
    
}

const getServices = async (req, res) => {
    try {
        const services = await Services.find();
        res.json(services);
    } catch (error) {
        console.log(error);
        
    };
};


const getServiceById = async (req, res) => {
    const { id } = req.params;

    // validar un object id desde utils.index.js
    validateObjectId(id, res);

    // validar que exista el id
    const service = await Services.findById(id);
    if (!service) {
       return handleNotFoundError('El servicio no existe', res); 
    }    
    // mostrar el servicio
    res.json(service);
}

const updateService = async (req, res) => {
 // validar un object id
    const { id } = req.params;
    if (validateObjectId(id, res)) return


    // validar que exista el id
    const service = await Services.findById(id);
    if (!service) {
       return handleNotFoundError('El servicio no existe', res); 
    }
    // mostrar el servicio
    res.json(service);

    service.name = req.body.name || service.name;
    service.price = req.body.price || service.price;

    try {
        const result = await service.save();
        res.status(200).json("El servicio se actualizó correctamente");
    } catch (error) {
        console.log(error);
    }
}

const deleteService = async (req, res) => {
    // validar un object id
    const { id } = req.params;
    if (validateObjectId(id, res)) return


    // validar que exista el id
    const service = await Services.findById(id);
    if (!service) {
       return handleNotFoundError('El servicio no existe', res); 
    }

    try {
        await service.deleteOne();
        res.json({
            msg: "El servicio se eliminó correctamente"
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    createService,
    getServices,
    getServiceById,
    updateService,
    deleteService
}