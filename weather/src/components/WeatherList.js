import React from 'react';
import { Grid, Paper, TextField } from '@material-ui/core'
import WeatherItem from './WeatherItem'

const WeatherList = ({ listItems }) => {


    return (
        <Grid container justify="center" item style={{margin: "0px", display: "-webkit-inline-box"}} md={12} spacing={4}>{
            listItems}
        </Grid>

    )

}

export default WeatherList
