import React from 'react';
import Pagination from '@material-ui/lab/Pagination'
import './style.css';
const CustomPagination = (props) =>{
    return (
        <div className="paginationMain">
            <Pagination count={props.noOfPages} 
            showFirstButton 
            showLastButton 
            page={props.page}
            className="paginationBar" 
            onChange={props.handleChange}/>
        </div>
    )
}
export default CustomPagination;