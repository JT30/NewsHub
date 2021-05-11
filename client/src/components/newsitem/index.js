import React, {useEffect, useState} from 'react';
import DataLabels from './constants.js';
import './style.css';
const NewsItem = (props) =>{
    const itemClickHandler = () =>{
        window.open(props.details.url, "", "noopener noreferrer");
    }
    let date = new Date(props.details.publishedAt);
    let dateString = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date);
    return (
        <div className="newsItemMain">
            <div className="newsItemthumbnailDiv">
                <img src={props.details.urlToImage} className="newsItemthumbnail"/>
            </div>
            <div className="content">
                <span className="newsItemTitle overFlowContent" 
                    onClick={itemClickHandler} 
                    title={DataLabels.OPEN_TOOLTIP}>{props.details.title}</span>
                <span className="newsItemPublishedDate">{dateString}</span>
                <span className="newsItemDescription overFlowContent">{props.details.description}</span>
            </div>
        </div>
    )
}
export default NewsItem;