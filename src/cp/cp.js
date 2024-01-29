import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', ['./src/cp/files/script.js', ...args], { stdio: ['pipe', 'pipe', 'inherit', 'ipc'] });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
    
    child.on('error', (error) => {
        console.error(`Ошибка: ${error.message}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['Arg1', 'Arg2', 'Arg3']);
