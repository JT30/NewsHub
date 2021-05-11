import express from 'express';
import NewsAPI from 'newsapi';
import env from 'dotenv';

env.config();
const newsRouter = express.Router();
const newsapi = new NewsAPI(process.env.TOKEN);

newsRouter.get('/',(req, res) => {
    let params = req.query;
    let config = {
        language: 'en'
    };
    if("all" != params.category){
        config['category'] = params.category
    }
    if(params.pageSize){
        config['pageSize'] = params.pageSize
    }
    if(params.page){
        config['page'] = params.page
    }
    if(params.searchText){
        config['q'] = params.searchText
    }
    if(params.country){
        config['country'] = params.country
    }
    newsapi.v2.topHeadlines(config)
        .then(response => {
            res.send(response);
      }).catch(e => {
          console.log(e);
        res.status(400).json({ 
            message: "Could not fetch data since the limit is exceeded"
        });
    });;      
});

export default newsRouter;