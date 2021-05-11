import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DataLabels from './constants.js';
import BaseService from '../../service/BaseService';
import './style.css';
const CustomAutoComplete = (props) =>{    
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
  
    useEffect(()=>{
        BaseService.fetchCountries().then((data) => {
            setOptions(data);
        })
        .catch(e => {
            console.log("error", e);
        });       
    },[]);
    return (
        // <div className="combo"> 
            <Autocomplete
                id="combo-box-demo"
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                onChange={props.countryChangeHandler}
                getOptionSelected={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.text}
                options={options}
                loading={loading}
                className = "comboInnerElement"
                renderInput={(params) => <TextField {...params} label={DataLabels.COUNTRIES} variant="outlined" />}
            />
        // </div>
    )
}
export default CustomAutoComplete;