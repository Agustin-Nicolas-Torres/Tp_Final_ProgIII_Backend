import request from 'supertest';
import { jest } from '@jest/globals';

jest.unstable_mockModule('../HomesDatos/daos/getdeleteproducto.js', () => ({
    default: jest.fn().mockResolvedValue({
        affectedRows: 1
    })
}));

const {default: app} = await import('../app.js');

describe('Prueba de integracion: Eliminar productos', () => {
    test('DELETE /api/productos/:id', async () => {
        const respuesta = await request(app)
            .delete('/api/productos/1')
            .set('Origin', 'http://localhost:3001');

        expect(respuesta.status).toBe(200)
    });
});