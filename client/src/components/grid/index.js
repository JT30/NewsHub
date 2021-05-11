import React, {useEffect, useState} from 'react';
import CustomPagination from '../../components/paginationbar';
import CustomAutoComplete from '../../components/combo';
import CustomSearchField from '../../components/searchfield';
import NewsItem from '../../components/newsitem';
import BaseService from '../../service/BaseService';
import './style.css';
import loadingLogo from './spinner.gif';
const Grid = (props) =>{
    const {category} = props;
    const recordsPerPage = 10;
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState({
        currentPage : 1,
        noOfPages : 0,
        newsData : [],
        searchText : null,
        country : null
    });
    useEffect(()=>{
        setLoading(true);
        BaseService.fetchNewsData({
            pageSize : recordsPerPage,
            page : info.currentPage,
            category : category,
            searchText : info.searchText,
            country : info.country
        }).then((data) => {
            let json = {
                newsData : data.articles,
                noOfPages : BaseService.calCulateNoOfPages({
                    totalRecords : data.totalResults,
                    recordsPerPage : recordsPerPage
                })
            };
            setInfo(Object.assign({},info,json));
            setLoading(false);
        })
        .catch(e => {
            console.log("error", e);
        });
    },[category]); 
    const searchFieldChange = (text) =>{
        let encodedText = encodeURIComponent(text);
        setLoading(true);
        BaseService.fetchNewsData({
            pageSize : recordsPerPage,
            page : info.currentPage,
            searchText : encodedText,
            category : category,
            country : info.country
        }).then((data) => {
            let json = {
                newsData : data.articles,
                noOfPages : BaseService.calCulateNoOfPages({
                    totalRecords : data.totalResults,
                    recordsPerPage : recordsPerPage
                }),
                searchText : encodedText
            };
            setInfo(Object.assign({},info,json)); 
            setLoading(false);
        })
        .catch(e => {
            console.log("error", e);
        });
    };
    const handlePaginationChange = (event, page) => {
        setLoading(true);
        BaseService.fetchNewsData({
            pageSize : recordsPerPage,
            page : page,
            category : category,
            searchText : info.searchText,
            country : info.country
        }).then((data) => {  
            let json = {
                newsData : data.articles,
                currentPage : page
            };                   
            setInfo(Object.assign({},info,json));  
            setLoading(false);
        })
        .catch(e => {
            console.log("error", e);
        });
    };
    const countryChangeHandler = (event, object) =>{
        setLoading(true);
        BaseService.fetchNewsData({
            pageSize : recordsPerPage,
            page : info.currentPage,
            category : category,
            searchText : info.searchText,
            country : object ? object.id :null
        }).then((data) => {  
            let json = {
                newsData : data.articles,
                noOfPages : BaseService.calCulateNoOfPages({
                    totalRecords : data.totalResults,
                    recordsPerPage : recordsPerPage
                }),
                country : object ? object.id :null
            };                   
            setInfo(Object.assign({},info,json));  
            setLoading(false);
        })
        .catch(e => {
            console.log("error", e);
        });
    };
    let newsItems = info.newsData.map((newsItemDetails, index) => <NewsItem key={index} details={newsItemDetails}/>);
    return (
            <div className="main">
                <div className="header">
                    <CustomSearchField onChange={searchFieldChange}/>   
                    <CustomAutoComplete countryChangeHandler={countryChangeHandler}/>                 
                </div> 
                {(loading) ? (<img src={loadingLogo} className="loader"/>) : 
                    (
                        <div className="news">
                            {newsItems.length? newsItems : "No results matched"}
                        </div>
                    )}
                {(loading || !newsItems.length) ?"":<CustomPagination handleChange={handlePaginationChange} noOfPages={info.noOfPages} page={info.currentPage}/>}
            </div>
            
            
        
    )
}
export default Grid;