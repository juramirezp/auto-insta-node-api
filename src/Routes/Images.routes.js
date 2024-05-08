import { Router } from "express";
import { getImages, saveImages, deleteImage, getRandomImage } from "../Controllers/ImagesController.js";
import { subirImagen } from "../Middleware/Storage.js";

const rutas = Router();

rutas.get("/api/images", getImages);
rutas.get("/api/images/:id", getImages);
rutas.get("/api/random/", getRandomImage);
rutas.post("/api/images", subirImagen.single("imagen"), saveImages);
rutas.delete("/api/images/:id", deleteImage);

export default rutas;
