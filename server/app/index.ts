import 'reflect-metadata';
import 'module-alias/register';
import { Server } from '@app/server';
import { Container } from 'typedi';

(async () => {
    const server: Server = Container.get(Server);

    await server.setupDatabase();

    server.init();
})();

