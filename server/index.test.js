import request from "supertest";
import app from './index'

describe('GET /', () => {

    test('Responds with a 200 status code', async () => {
        return await request(app)
            .get('/')
            .expect(200)
    })
})