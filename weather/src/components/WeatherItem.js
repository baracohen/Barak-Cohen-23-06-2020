import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'
import weatherImg from '../images/weatherImage.jpg'

const weekday = new Array(7);
weekday[0] = "Monday";
weekday[1] = "Tuesday";
weekday[2] = "Wednesday";
weekday[3] = "Thursday";
weekday[4] = "Friday";
weekday[5] = "Saturday";
weekday[6] = "Sunday";


const WeatherItem = ({ WeatherItem, day, temp }) => {
    return (
        <Grid item md={3} xs={12}>
            <Paper className="weather-item" style={{ backgroundImage: `url(${weatherImg})` }} >
                <Typography style={{ fontSize: "23px", textAlign: "center" }} variant="subtitle1" > {weekday[day]} </Typography>
                <Typography style={{ fontSize: "17px", textAlign: "center" }} variant="subtitle1" > {temp} </Typography>
            </Paper>
        </Grid>
    )
}
export default WeatherItem
