import * as Parser from 'body-parser';
import * as Express from 'express';
import * as Path from 'path';

import { RegisterRoutes } from './routes/routes';
import './controllers/meetupController';

// Import Swagger
import * as SwaggerUI from 'swagger-ui-express';
const SwaggerDoc = require('./swagger.json');

// -- Setting UP Express -- //
const app = Express();
const HOST = '0.0.0.0';
const PORT = 8085;

app.use(Parser.urlencoded({ extended: true }));
app.use(Parser.json());

// Set TSOA Routes
RegisterRoutes(app);

// Set Swagger (Order is important!)
app.use('/swagger.json', (_, res) => { res.sendFile(Path.join(__dirname + '/swagger.json')); });
app.use('/', SwaggerUI.serve, SwaggerUI.setup(SwaggerDoc));

const server = app.listen(PORT, HOST, () => {
    console.info(`is available under http://${HOST}:${PORT}`);
});
