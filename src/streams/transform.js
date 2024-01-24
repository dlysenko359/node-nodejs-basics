import {Transform, pipeline} from 'stream'

const transform = async () => {
    const readable = process.stdin;
    const writable = process.stdout;
    
    const transform = new Transform({
        transform(chunk, end, callback) {
            const chunkStringField = chunk.toString().trim();
            const reversedChunk = chunkStringField.split('').reverse().join('')
            
            callback(null, reversedChunk + '\n');
        }
    })

    pipeline(
        readable,
        transform,
        writable,
        err => {
            console.log(`Error: ${err}`)
        }
    )
};

await transform();