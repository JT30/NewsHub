import express from 'express';
import http from'http';
import cors from 'cors';
import env from 'dotenv';
import newsRouter from './routes/news.js';
import dataRouter from './routes/data.js';

const app = express();
const httpServer = http.createServer(app);
env.config();
const PORT = process.env.PORT || 9708;
app.use(cors());

app.use('/news', newsRouter);
app.use('/data', dataRouter);
app.get('/', function (req, res) {
    res.send('Hello World')
});
httpServer.listen(PORT, function(){
    console.log('Server has started to listen on port ' + PORT);
});