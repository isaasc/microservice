const http = require("http");
const app = require("../src/app");
const port = searchPort(process.env.PORT || "3000");
const server = http.createServer(app);
console.log(server);
server.listen(port);
server.on('error', onError);
server.on('listening', onListenig);

console.log(`Api works on port ${port}`);

function searchPort(portValue) {
  const port = parseInt(portValue, 10);

  if (isNaN(port))
    return port;

  if (port > 0)
    return port;

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ?
    'Pipe' + port :
    'Port' + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + 'required elevated privileges');
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + 'is already in user');
      process.exit(1);
      break;
    default:
      throw error;
  }

  function onListenig() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
      `pipe ${addr}` :
      `${addr.family}:${addr.port}`;
    debug('Listening on' + bind)
  }
}