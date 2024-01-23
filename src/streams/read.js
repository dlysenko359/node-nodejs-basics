import {createReadStream} from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

    const readStream = createReadStream(fileToReadPath);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk + '');
    });

    readStream.on('error', (err) => {
        console.error('An error occurred:', err);
    });
};

await read();