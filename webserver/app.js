var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
// view engine setup
const appPath = path.join(__dirname, '../wedding-fe/dist/wedding-fe');
const BASE_HREF = process.env.BASE_HREF || '/';

app.set('view engine', 'html');
app.set('views', appPath);
app.use(BASE_HREF, express.static(appPath));
app.get('*.*', express.static(appPath, { maxAge: '1y' }));

// All regular routes use the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(appPath, 'index.html'), { req });
});

module.exports = app;
