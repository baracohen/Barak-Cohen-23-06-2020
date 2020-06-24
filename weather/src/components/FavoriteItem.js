import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'
import weatherImg from '../images/weatherImage.jpg'

const FavoriteItem = ({ title, temp, desc }) => {
    
    return (
        <Grid item md={3} xs={12} >
            <Paper  className="weather-item" style={{backgroundImage: `url(${weatherImg})`}} >
                <Typography style={{ fontSize:"23px", textAlign:"center"}}  variant="subtitle1" > {title} </Typography>
                <Typography style={{ fontSize:"17px", textAlign:"center"}}  variant="subtitle1" > {temp} </Typography>
                <Typography style={{ fontSize:"17px", textAlign:"center"}}  variant="subtitle1" > {desc} </Typography>
            </Paper>
        </Grid>
    )
}
export default FavoriteItem
