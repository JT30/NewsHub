import axios from 'axios';
const BaseService = {
    fetchNewsData : (queryParams) => {
        return request({
            url: "/news",
            method: 'GET',
            queryParams : queryParams
        });
    },
    calCulateNoOfPages : (options) =>{
        let totalRecords = options.totalRecords;
        let recordsPerPage = options.recordsPerPage;
        let pages = Math.floor(totalRecords/recordsPerPage);
        let remainingPages = totalRecords%recordsPerPage;
        if(remainingPages){
            pages += 1;
        }
        return pages;
    },
    fetchCategories : () =>{
        return request({
            url: "/data/category",
            method: 'GET'
        });
    },
    fetchCountries : () =>{
        return request({
            url: "/data/country",
            method: 'GET'
        });
    }
};
const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    let config = {
        method: options.method,
        url: options.url,
        headers : headers,
    };
    if(options.queryParams){
        config['params'] = options.queryParams;
    }
    return new Promise((resolve, reject) => {
        axios(config).then(function (response) {
            resolve(response.data)
        })
        .catch((error) => {            
            reject(error.response);
        });
    });    
};
export default BaseService;