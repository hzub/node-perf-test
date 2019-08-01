const { spawn } = require('child_process');
const { resolve } = require('path');

const start = Date.now();
console.log('[Spawn]: Started the process');
const app = spawn('npm', ['install'], {
  cwd: resolve(__dirname, 'testapp'),
});

app.stdout.pipe(process.stdout);

app.on('exit', () => {
  const end = Date.now();
  console.log(`[Spawn]: Finished the process, took ${end - start} milliseconds.`);
});
