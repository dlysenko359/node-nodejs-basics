import { error } from 'console';
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const copy = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceFolderPath = `${__dirname}/files`
    const destinationFolderPath = `${__dirname}/files_copy`
    
    if(!fs.existsSync(sourceFolderPath) || fs.existsSync(destinationFolderPath))
        throw new Error('FS operation failed');

    fs.cp(
        sourceFolderPath,
        destinationFolderPath,
        {recursive: true},
        error =>
            {
                if (error) throw error;
            }
    );



};

await copy();
