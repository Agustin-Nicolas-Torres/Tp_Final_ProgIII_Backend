import request from 'supertest';
import { jest } from '@jest/globals';


jest.unstable_mockModule('../HomesDatos/daos/gethome.js', () => ({
    default: jest.fn().mockResolvedValue({
        id: 1,
        name: 'iPhone 13',
        price: 450000,
        imagen_url: '',
        descripcion: '',
        categoria_id: 1
    })
}));

const { default: app } = await import('../app.js');

describe('prueba de integracion: Obtener productos', () =>  {
    test('GET /api/productos', async () => {
        const respuesta = await request(app)
            .get('/api/productos')
            .set('Origin', 'http://localhost:3001');

        expect(respuesta.status).toBe(200);
    });
});