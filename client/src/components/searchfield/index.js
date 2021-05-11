import React from 'react';
import SearchField from "react-search-field";
import './style.css';
const CustomSearchField = (props) =>{
    return (
        <SearchField
            placeholder=""
            onEnter={props.onChange}
            onSearchClick={props.onChange}
            searchText=""
            classNames="searchField"
        />
    )
}
export default CustomSearchField;