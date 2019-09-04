import express from "express";
import morgan from "morgan";
import path from 'path';
import routes from "./routes";
import config from './config';


//Packages instances
const app = express();

//Setting express;
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));  //Enable logs
app.use(express.json()); //Replace to parseJson

//Express Routers
app.use(config.endpoint, routes);

//Static files | HTML
app.use(express.static(path.join(__dirname, 'public')));

//Express Server Start
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));
})