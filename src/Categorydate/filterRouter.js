import express from "express";
const router_filter = express.Router();

import obtenerFiltros from "./controller/controllfilter.js";

router_filter.get("/", obtenerFiltros);

export default router_filter;
