import { describe, it, expect, vi } from "vitest";

vi.mock("../../HomesDatos/service/crearproductolog.js", () => ({ default: vi.fn() }));

import crearProductoService from "../../HomesDatos/service/crearproductolog.js";
import controlAddProducto from "../../HomesDatos/controller/controllcreateporucto.js";

function mockRes() {
  const res = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  return res;
}

describe("controlAddProducto", () => {
  it("responde 201 con el producto creado", async () => {
    const creado = { id: 3, name: "Teclado" };
    crearProductoService.mockResolvedValue(creado);
    const req = { body: { name: "Teclado", price: "100", imagen_url: "x", descripcion: "y" } };
    const res = mockRes();

    await controlAddProducto(req, res);

    expect(crearProductoService).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(creado);
  });
});