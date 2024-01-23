import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = `${__dirname}/files/fresh.txt`
    const content = 'I am fresh and young';
    console.log(__dirname);

    if(!fs.existsSync(filePath)) {
        fs.writeFile(filePath, content, (err) => {
            if (err) throw err;
        });
    }
    else
        throw new Error('FS operation failed');
    
};

await create();