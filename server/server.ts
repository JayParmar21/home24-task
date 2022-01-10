import { createProxyMiddleware } from 'http-proxy-middleware';
import express, { Application } from 'express';
import apicache from 'apicache'

const app: Application = express();
const cache = apicache.middleware;
import * as path from "path";

const proxy = createProxyMiddleware({
  target: 'https://www.home24.de',
  changeOrigin: true,
  logLevel: 'debug',
});
app.use('/', express.static(path.join(__dirname,  './../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client/build', 'index.html'))
});
app.post('/graphql', cache('15 minutes'), proxy);
app.listen(3001);
