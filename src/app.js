import express from "express";
import cors from "cors";
import router from "./HomesDatos/ProductRouter.js";
import router_categ from "./Categorydate/categoryRouter.js";
import router_filter from "./Categorydate/filterRouter.js";

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:3001"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Acceso denegado por politicas de seguridad"));
      }
    },
  }),
);

app.use("/api/productos", router);
app.use("/api/categorias", router_categ);
app.use("/api/filtros", router_filter);


app.listen(3000, () => console.log("Servidor corriendo - puerto 3000"));

export default app;