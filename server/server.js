import path from 'path';
import favicon from '../src/favicon.ico';
// import middleware from './middleware';

const express = require('express');
// const compression = require('compression');

const morgan = require('morgan');

const app = express();

// function shouldCompress(req, res) {
//   if (req.headers['x-no-compression']) {
//     return false;
//   }
//   return compression.filter(req, res);
// }

app.use(morgan('dev'));
app.use(express.static('dist'));
// app.use(compression({ filter: shouldCompress }));


const keyfavicon = favicon.slice(favicon.lastIndexOf('/') + 1);
app.use('/favicon.ico', (req, res) => res.sendFile(path.join(__dirname, `../${keyfavicon}`)));

const http = require('http');
const zlib = require('zlib');

function getGzipped(url, callback) {
  const buffer = [];
  http.get(url, { encoding: null }, (res) => {
    const gunzip = zlib.createGunzip();
    res.pipe(gunzip);
    gunzip.on('data', (data) => {
      buffer.push(data.toString());
    }).on('end', () => {
      callback(null, buffer.join(''));
    }).on('error', (e) => {
      callback(e);
    });
  }).on('error', (e) => {
    callback(e);
  });
}

getGzipped(url, (err, data) => {
  console.log(data);
});

// app.get('/*', (req, res) => {
//   .then((res) => {
//     {
//       method: 'GET',
//       uri: 'http://65b290fb.ngrok.io/#/',
//       gzip: true
//     },
//     function (error, response, body) {
//       // body is the decompressed response body
//       console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'))
//       console.log('the decoded data is: ' + body)
//     }
//   );
// }

//     res.writeHead(200, { 'Content-Type': 'text/event-stream' });
//   })
//   .catch((error) => {
//       console.error(error);
//       res.send('An error occured.');
//   })
// });
// app.use('/dist', express.static(`${__dirname}/../client`));

// app.get('/*', middleware);

module.exports = app;
