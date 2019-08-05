const { spawn } = require('child_process');
const { resolve } = require('path');

const dirname = resolve(__dirname, 'testapp');

const start = Date.now();
console.log('[Spawn]: Started the process');

// Linux version, in order to run it on Windows use `spawn(`cmd`, ['/c', 'run', 'build'])`
const app = spawn('npm', ['run', 'build'], {
  cwd: dirname,
});

app.on('exit', () => {
  const end = Date.now();
  console.log(`[Spawn]: Finished the process, took ${end - start} milliseconds.`);
  resolve();
});
