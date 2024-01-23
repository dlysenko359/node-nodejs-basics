import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    if(!fs.existsSync(fileToRemovePath))
        throw new Error('FS operation failed');

    fs.unlink(fileToRemovePath, (err) => {
        if (err) throw err;
    })



};

await remove();