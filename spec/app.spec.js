const request = require('request');
const db = require('../config/db');
// const createNewUser = request('../routes/queries/createNewUser.js');

const domain = `http://localhost:8080/users`;

describe('POST /users', ()=>{
    const validInput = {
        username: 'testUser1',
        password: 'testPassword123'
    };
    
    const wrongInput = {
        username: 'testUser1',
        password: 'wrong'
    };


    beforeEach((done)=>{
        const getUserInfo = `
            SELECT * FROM users
                WHERE username = $1
        `;

        const deleteUser = `
            DELETE FROM users
                WHERE username = $1
        `;

        // delete user from database  after tests are done
        db.query(getUserInfo, [validInput.username], (error, results) => {
            console.log(results);

            // const user = results.rows;
            if(error) console.log(error);

            // if(user){
            //     return db.query(deleteUser, [validInput.username], (error, results) => {
            //         console.log(validInput.username, ' was deleted after tests.')
            //     })
            // }
        })
        done();
    })

    it('should return 400 and NOT create user if data was not valid', (done) => {
        request.post(domain, wrongInput, (error, res, body)=>{
            // if(error) console.log(error);

            expect(res.statusCode).toBe(400);
            expect(body).toContain('Please provide');
        })
        done();
    })

    it('should return 200 and create new user if data was correct' , (done)=>{
        request.post({url: domain, form: validInput}, (err, res, body)=>{
            // if(err) console.log('error: ' + err);

            expect(res.statusCode).toBe(200);
            expect(body).toBe(`User ${validInput.username} was successfully created!`);
            done();
        });
    })

})
