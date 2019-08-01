const { spawn } = require('child_process');

const start = Date.now();
console.log('[Spawn]: Started the process');
const app = spawn('create-react-app', ['testapp', '--typescript']);

app.stdout.pipe(process.stdout);

app.on('exit', () => {
  const end = Date.now();
  console.log(`[Spawn]: Finished the process, took ${end - start} milliseconds.`);
});
