import test from 'ava';
import got from 'got';
import { generateRandomUser } from './utils/generate-random-user.js';
import { expectStatusCode } from './utils/generic-excepts.js';
import { setupTests } from './utils/setup-tests.js';


setupTests(test);

const endpoint = `http://localhost:3001${process.env.PORT}/register`;
const testUserA = generateRandomUser();
const testUserB = generateRandomUser();

const fetchRegister = async (t, user) => {
    try {
        const response = await got.post(endpoint, {
            json: user,
            throwHttpErrors: false,
        }); 
        return response;
    } catch(err) {
        t.fail(err);
    }
}


test.serial('Resiter succesfully', async (t)=> {
    const response = await fetchRegister(t, testUserA);
    expectStatusCode(t, 201, response);
})