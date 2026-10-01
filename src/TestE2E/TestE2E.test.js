import request from 'supertest';
import app from '../app.js';

describe('Prueba E2E', () => {
    let productoId;
    it('Flujo complero de crear, listar y eliminar un producto ', async () => {
        //Crear producto
        const nuevoProducto = {
            name: 'Teclado Mecánico E2E',
            price: 45000,
            imagen_url: '',
            descripcion: 'Teclado mecánico de prueba E2E',
            categoria_id: 1
        };
        const resCreate = await request(app)
            .post('/api/productos')
            .set('Origin', 'http://localhost:3001')
            .send(nuevoProducto);

        if (resCreate.statusCode !== 201) {
            console.log("RESPUESTA DEL ERROR 500:", resCreate.text);
        }

        expect(resCreate.statusCode).toEqual(201);

        //Guardamos el ID para el siguente paso
        productoId = resCreate.body.id;


        const resGet = await request(app)
            .get('/api/productos')
            .set('Origin', 'http://localhost:3001');

        expect(resGet.statusCode).toEqual(200);

        // Eliminar el prducto
        const resDelete = await request(app)
            .delete(`/api/productos/${productoId}`)
            .set('Origin', 'http://localhost:3001');
        expect(resDelete.statusCode).toEqual(200);
    });
});