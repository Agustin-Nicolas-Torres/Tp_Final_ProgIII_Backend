import express from "express";
const router_categ = express.Router();

import obtenerCategorias from "./controller/controllcategory.js";

router_categ.get("/", obtenerCategorias);

export default router_categ;
