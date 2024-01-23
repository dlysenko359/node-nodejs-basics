import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

    if(!fs.existsSync(fileToReadPath))
        throw new Error('FS operation failed')

    fs.readFile(fileToReadPath, 'utf8',  (err, data) => {
        if (err) throw err;
        console.log(data);
    });
};

await read();