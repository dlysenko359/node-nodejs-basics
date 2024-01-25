import { createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream'
import { createGunzip } from 'zlib';

const decompress = async () => {
    const readableStream = createReadStream('src/zip/files/archive.gz');
    const writableStream = createWriteStream('src/zip/files/fileToCompress.txt')
    const transformStream =  createGunzip();

    pipeline(readableStream, transformStream, writableStream, (err) => {
        if(err)
            throw err
    })
};

await decompress();