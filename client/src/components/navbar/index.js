import React, {useEffect, useState} from 'react';
import './style.css';
import DataLabels from './constants.js';
import BaseService from '../../service/BaseService';

const NavBar = (props) =>{  
    let category = props.category;
    let [categories, setCategories] = useState([]);
    useEffect(()=>{
        BaseService.fetchCategories().then((data) => {
           setCategories(data);
        })
        .catch(e => {
            console.log("error", e);
        });
    },[]); 
    let categoryDivs = categories.map((categorydetails) => 
        <button key={categorydetails.id} className={category === categorydetails.id ? 'category active' : 'category'} 
            onClick={props.itemClick} value={categorydetails.id}>{categorydetails.text}</button>
    );
    return (
        <div className="nav">
            <span className="title">{DataLabels.CATEGORY}</span>
            {categoryDivs}
        </div>
    )
}
export default NavBar;