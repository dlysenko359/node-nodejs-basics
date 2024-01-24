import {createWriteStream} from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToWritePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(fileToWritePath);
    const readableStream = process.stdin;

    writeStream.on('finish', () => {
        console.log('stream finished')
    })

    writeStream.on('error', (err) => {
        console.log('stream throwed error' + err)
    })

    writeStream.on('pipe', () => {
        console.log('stream piped')
    })

    readableStream.on('data', (chunk) => {
    if(chunk.toString().match('STOP'))
        readableStream.unpipe(writeStream)
        console.log(chunk.toString())
    })
    
    writeStream.on('unpipe', () => {
        console.log('stream unpiped')
    })

    readableStream.pipe(writeStream);      
};

await write();