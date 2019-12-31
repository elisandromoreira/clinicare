import express from 'express'; // importa o express
import path from 'path';
import routes from './routes'; // importa o arquivo de rotas

import './database';

class App {
  // método construtor
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // para receber requisições no formato json
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    // utiliza as rotas previamente importadas
    this.server.use(routes);
  }
}

// exporta o server
export default new App().server;
