const { spawn } = require('child_process');

const start = Date.now();
console.log('[Spawn]: Started the process');

// Linux version, in order to run it on Windows use `spawn(`cmd`, ['/c', 'create-react-app', 'testapp', '--typescript'])`
const app = spawn('create-react-app', ['testapp', '--typescript']);

app.on('exit', () => {
  const end = Date.now();
  console.log(`[Spawn]: Finished the process, took ${end - start} milliseconds.`);
});



