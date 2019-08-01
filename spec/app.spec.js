const request = require('request');
const app = require('../server');

const domain = `http://localhost:8080/users`;

describe('POST /users', ()=>{

    const forms = {
        wrongData: {
            username: 'testUser123',
            password: 'pass123'
        },
        correctData: {
            username: 'testUser123',
            password: 'testPass123'
        }
    };

    afterAll((done)=>{
        request.delete(domain, {form: {username: forms.correctData.username}}, (err, res, body)=>{
            expect(body).toBe('user deleted');
            done();
        })
    })

    it(`doesn't allow to register if password doesn't match requirements` , (done)=>{
        
        request.post(domain, {form: forms.wrongData}, (err, res, body)=>{
            expect(res.statusCode).toBe(400);
            expect(body).toContain('provide correct');
            done();
        })
    })

    it(`creates new user if data is in required format`, (done)=>{
        request.post(domain, {form: forms.correctData}, (err, res, body)=>{
            expect(res.statusCode).toBe(200);
            expect(body).toBe(`User ${forms.correctData.username} was successfully created!`);
            console.log(body);
            done();
        })
    })
})
