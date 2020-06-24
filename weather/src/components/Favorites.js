import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'
import weatherImg from '../images/weatherImage.jpg'
import WeatherList from './WeatherList';
import FavoriteItem from './FavoriteItem';
import { useSelector, useDispatch } from 'react-redux'

const Favorites = () => {
    const _favorites = useSelector(state => state.favoritesState.favorits.map((obj, i) => { return <FavoriteItem title={obj.title} key={i} temp={obj.Temperature.Value + obj.Temperature.Unit} desc={obj.WeatherText} /> }));
    return (
        <Grid item justify="center" md={9} xs={8}>
            <WeatherList listItems={_favorites} />
        </Grid>
    )
}
export default Favorites
