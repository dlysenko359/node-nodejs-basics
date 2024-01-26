import {cpus} from 'os'
import { fileURLToPath } from 'url';
import path from 'path';
import {Worker} from 'worker_threads'

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const workerPath = path.join(__dirname, 'worker.js');

    const cpuCoreCount = cpus().length;
    const promiseArray = [];
    const workerStartData = 10;

    for(let i = 1; i <= cpuCoreCount; i ++)
    {
        promiseArray.push(
            new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {workerData: workerStartData + i});
    
            worker.on('message', (message) => resolve(message) );
            worker.on('error', (err) =>  reject(err) )
            worker.on('exit', (code) => {
                if(code !== 0){
                    reject(new Error(`Work stopped with code ${code}`));
                }
            });
        }))
    }

    Promise.allSettled(promiseArray).then(results => {
        return results.map((result) => {
          return {
            status: result.status === 'fulfilled' ? 'resolved' : 'error',
            data: result.status === 'fulfilled' ? result.value : null
          };
        });
      })
    .then(data => console.log(data));
};

await performCalculations();