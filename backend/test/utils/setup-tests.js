import {config as dotEnvConfig} from 'dotenv';
import { MongoMemoryReplSet } from 'mongodb-memory-server';
import { bootstrap } from '../../src/bootstrap.js';

export const setupTests = (test) => {
    dotEnvConfig();

    let mongo;

    test.before(async () => {
        mongo = await MongoMemoryReplSet.create({
            replSet: {
                count: 1,
                dbName: 'memesplash',
            },
        });

        process.env.MONGODB_URI = mongo.getUri();

        await bootstrap();
    });

    test.after(async () => {
        if (mongo) await mongo.stop();
    });
};