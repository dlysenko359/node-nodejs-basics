import {createWriteStream} from 'fs'
import { fileURLToPath } from 'url';
import path from 'path';
import {Writable } from 'stream';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToWritePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const writeStream = createWriteStream(fileToWritePath);

    writeStream.on('finish', (data) => {
        console.log('stream finished')
    })
    writeStream.on('error', (err) => {
        console.log('stream throwed error' + err)
    })
    writeStream.on('close', () => {
        console.log('stream closed')
    })
    writeStream.on('pipe', (data) => {
        console.log('stream piped')
    })
    writeStream.on('unpipe', (data) => {
        console.log('stream unpiped')
    })

    const stdinToWriteStream = new Writable({
        write(chunk, encoding, callback) {
            writeStream.write(chunk);
            writeStream.end();
            process.stdin.unpipe(stdinToWriteStream);
            callback();
        }
    });

    process.stdin.pipe(stdinToWriteStream)
      
};

await write();