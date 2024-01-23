import {createWriteStream} from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
import { Writable } from 'stream';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToWritePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(fileToWritePath);
    writeStream.write('Test text');
    writeStream.end();
};

await write();