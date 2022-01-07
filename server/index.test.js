import request from "supertest";
import mongoose from 'mongoose';
import app from './index'

describe('GET /', () => {

    // beforeAll(done => {
    //     done()
    //   })

    it('Responds with a 200 status code', async () => {
        await request(app)
            .get('/')
            .expect(200)

    })

    it('GPI List loads and responds with a 200 status code', async () => {
        await request(app)
            .get('/gpi/')
            .expect(200)

    })

    it('CLI List loads and responds with a 200 status code', async () => {
        await request(app)
            .get('/coi/')
            .expect(200)
    })

    // afterAll(done => {
    //     // Closing the DB connection allows Jest to exit successfully.
    //     try {
    //         mongoose.connection.close();
    //         done()
    //     } catch (error) {
    //         console.log(error);
    //         done()
    //     }
    //   })
})