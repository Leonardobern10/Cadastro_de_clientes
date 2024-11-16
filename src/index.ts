import { ServerApp } from './server/server';

const server = new ServerApp();

const App = () => {
    server.listen();
};

App();
