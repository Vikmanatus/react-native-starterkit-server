import http from 'http';
import expressApp from './app';
import { PORT } from './config';

/**
 * Creating HTTP server
 */
const server = http.createServer(expressApp);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  
});

export default server;