import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const wrongFilenamePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFilenamePath = path.join(__dirname, 'files', 'properFilename.md');

    if(!fs.existsSync(wrongFilenamePath) || fs.existsSync(properFilenamePath) )
        throw new Error('FS operation failed');

    fs.rename(wrongFilenamePath, properFilenamePath, function(err) {
        if (err) throw err;
    });
};

await rename();