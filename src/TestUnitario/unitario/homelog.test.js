import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock("../../HomesDatos/daos/gethome.js", () => ({ default: vi.fn() }));

import gethome from "../../HomesDatos/daos/gethome.js";
import FiltrarProductos from "../../HomesDatos/service/homelog.js";

describe("FiltrarProductos", () => {
  beforeEach(() => vi.clearAllMocks());

  it("convierte el string de filtros en un array antes de llamar al DAO", async () => {
    gethome.mockResolvedValue({ rows: [] });

    await FiltrarProductos("1", "ram,ssd");

    expect(gethome).toHaveBeenCalledWith("1", ["ram", "ssd"]);
  });

});