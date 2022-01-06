import request from "supertest";
import app from './index'

describe('GET /', () => {

    test('Responds with a 200 status code', async () => {
        return await request(app)
            .get('/')
            .expect(200)
    })

    test('GPI List loads and responds with a 200 status code', async () => {
        return await request(app)
            .get('/gpi/')
            .expect(200)
    })

    test('CLI List loads and responds with a 200 status code', async () => {
        return await request(app)
            .get('/coi/')
            .expect(200)
    })
})