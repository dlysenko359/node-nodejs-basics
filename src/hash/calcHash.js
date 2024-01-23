import {finished} from 'node:stream/promises'
import { createReadStream} from 'node:fs';
import path from 'path';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToCalculateHashForPath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

    try{
        const hash = createHash('sha256');
        const stream = createReadStream(fileToCalculateHashForPath);

        stream.on('data', (data) => {
            hash.update(data);
        });

        await finished(stream);

        const result = hash.digest('hex');
        console.log(result);

    }
    catch(err){
        throw err;
    }
};

await calculateHash();