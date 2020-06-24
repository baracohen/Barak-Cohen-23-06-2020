import React from 'react';
import { Grid, Paper, TextField, Typography } from '@material-ui/core'
import weatherImg from '../images/weatherImage.jpg'


const WeatherDetails = ({ weather }) => {

    return (
        <Grid>
            <Paper elevation={7} className="weather-det-paper" style={{ backgroundImage: `url(${weatherImg})`}}>
                <Typography style={{ fontSize:"23px", textAlign:"center"}} variant="subtitle1">{weather.title}</Typography>
                <Typography style={{ fontSize:"18px", textAlign:"center"}} >{weather.Temperature.Value + weather.Temperature.Unit}</Typography>
            </Paper>
        </Grid>
    )
}

export default WeatherDetails
