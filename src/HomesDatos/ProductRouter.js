import express from "express";

const router = express.Router();

import obtenerProductosFiltrados from "../HomesDatos/controller/contollhome.js";
import eliminarProductoController from "./controller/controlldeleteproducto.js";
import controlAddProducto from "./controller/controllcreateporucto.js";
router.get("/", obtenerProductosFiltrados);

router.delete("/:id", eliminarProductoController);

router.post("/", controlAddProducto);

export default router;
