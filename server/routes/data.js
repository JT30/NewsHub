import express from 'express';
import fs from 'fs';
import axios from 'axios';
const dataRouter = express.Router();
const dataPathCateogry = './constants/category.json';
const dataPathSortOptions = './constants/country.json';
dataRouter.get('/category',(req, res) => {
    fs.readFile(dataPathCateogry, 'utf8', (err, data) => {
        if (err) {
          throw {err};
        }
        res.send(JSON.parse(data));
    });
});
dataRouter.get('/country',(req, res) => {
  fs.readFile(dataPathSortOptions, 'utf8', (err, data) => {
      if (err) {
        throw {err};
      }
      res.send(JSON.parse(data));
  });
});
export default dataRouter;