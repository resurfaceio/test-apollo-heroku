import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import cors from 'cors';

import schema from './data/schema';

const PORT = 5000;

const app = express();

app.use('*', cors());

const resurfaceio = require('resurfaceio-logger');
resurfaceio.HttpLoggerForExpress.add(app, {
    url: 'http://localhost:9000/api/listener/PnyfkIT7NjlvEIAmRyb28jrJKCW0OUIZ', 
    rules: 'include debug'
});

const server = new ApolloServer({ 
  schema, 
  subscriptions: { path: "/websocket" }
});

server.applyMiddleware({ app });

const httpServer = createServer(app);

server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
