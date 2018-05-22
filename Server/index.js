// 引入模块的部分
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const api = require('./api');
const bodyParser = require('body-parser');
const express = require('express');


const app = express();
const port = '1111';
const dbUrl = 'mongodb://localhost:27017/passerBy';




// 中间件部分
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  name: 'hahah',
  secret: '12345',
  store: new mongoStore({
    url: dbUrl,
    collection: 'sessions'
  }),
  resave: false,
  saveUninitialized: true
}));



app.listen(port);
console.log("success listen " + port + "...");


app.use(api);