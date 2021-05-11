import React, {useEffect, useState} from 'react';
import './style.css';
const NewsItem = (props) =>{
    const handlePageClick = () =>{
        alert();
    }
    let date = new Date(props.details.publishedAt);
    let dateString = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date);
    return (
        <div className="newsItemMain">
            <div className="newsItemthumbnailDiv">
                <img src={props.details.urlToImage} className="newsItemthumbnail"/>
            </div>
            <div className="content">
                <span className="newsItemTitle overFlowContent">{props.details.title+"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"}</span>
                <span className="newsItemPublishedDate">{dateString}</span>
                <span className="newsItemDescription overFlowContent">{props.details.description}</span>
            </div>
        </div>
    )
}
export default NewsItem;