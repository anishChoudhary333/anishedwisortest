import Config from 'config';
import Routes from './routes';
import Server from './common/server'

const dbUrl = Config.get('dbUrl')
const server = new Server()
    .router(Routes)
    .configureDb(dbUrl)
    .then(_server => _server.listen(Config.get('port')));

export default server;