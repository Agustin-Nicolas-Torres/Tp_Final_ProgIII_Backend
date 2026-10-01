import request from 'supertest';
import { jest } from '@jest/globals';

// Mockeo de la base de datos
jest.unstable_mockModule('../HomesDatos/daos/pushproducto.js', () => ({
        default: jest.fn().mockResolvedValue({
            id: 1
        })

}));
const { default: app } = await import('../app.js');

describe('Prueba de intregracion: Cargar productos', () => {
    test('POST /api/productos' , async () => {
        const nuevoProducto = {
            name: 'iPhone 13',
            price: 450000,
            imagen_url: '',
            descripcion: '',
            categoria_id: 1
        };
        //simulacion de la peticion HTTP con supertest
        const respuesta = await request(app)
            .post('/api/productos')
            .set('Origin', 'http://localhost:3001')
            .send(nuevoProducto);

        //validacion
        expect(respuesta.status).toBe(201);
    });
});