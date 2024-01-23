import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filesFolderPath = path.join(__dirname, 'files');

    if(!fs.existsSync(filesFolderPath))
        throw new Error('FS operation failed');

    fs.readdir(filesFolderPath, {withFileTypes: true}, (err, files) => {
        if (err) throw err

        else{
            files.forEach(file => {
                console.log(file.name)
            })
        }
    })
};

await list();