import {services} from "../data/beautyServices.js";
import Services from "../models/Services.js";

const createService = async (req, res) => {
    if (Object.values(req.body).includes("")){
        return res.status(400).json({message: "Todos los campos son obligatorios"});
    }

    try {
        const service = new Services(req.body)
        const result = await service.save();
        res.status(201).json(result);

    } catch (error) {
        console.log(error);
    }
    
}

const getServices = (req, res) => {
    res.json(services);
};

export {
    createService,
    getServices
}