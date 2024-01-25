import { createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream'
import { createGzip } from 'zlib';

const compress = async () => {
    const readableStream = createReadStream('src/zip/files/fileToCompress.txt')
    const writableStream = createWriteStream('src/zip/files/archive.gz')
    const transformStream =  createGzip();

    readableStream.on('data', (data) =>{
        console.log(data)
        console.log(data.toString())
    })

    pipeline(readableStream, transformStream, writableStream, (err) => {
        if(err)
            throw err
    })
};

await compress();