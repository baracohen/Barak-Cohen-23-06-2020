import React, { useState, useEffect } from 'react';
import { axiosInstance, keyApi } from '../api/weather'
import { Paper, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import ErrModal from './ErrModal';

const url = 'locations/v1/cities/autocomplete';
export default function SearchBar({ onFormSubmit }) {

    const [searchTerm, SetSearchTerm] = useState('');
    const [selectedVal, SetSelectedVal] = useState('');
    const [cities, setCities] = React.useState([]);
    const [showErr, setShowErr] = React.useState(false);


    function handleSubmit(event) {

        onFormSubmit(selectedVal);
        event.preventDefault();

    }

    function handleChange(event) {

        axiosInstance.get(url, {
            params: {
                apikey: keyApi,
                q: event
            }
        })
            .then((response) => {
                if (response && response.data && response.data.length > 0) {

                    setCities(response.data.map((obj) => { return { title: obj.LocalizedName, key: obj.Key } }))

                }
            }).catch((err) => {
                setShowErr(true)
            })
    }

    const handleClose = () => {
        setShowErr(false);
    };


    return (
        <Paper style={{ padding: '25px' }}>
            <form onSubmit={handleSubmit}>
                <Autocomplete
                    id="combo-box-demo"
                    freeSolo
                    options={cities}
                    onChange={(event, value) => SetSelectedVal(value)}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => <TextField {...params} label="Search country..." onChange={e => handleChange(e.target.value)} variant="outlined" />}
                />
            </form>
            {showErr && <ErrModal showModal={showErr} handleClosePar={handleClose} />}
        </Paper>

    )
}


