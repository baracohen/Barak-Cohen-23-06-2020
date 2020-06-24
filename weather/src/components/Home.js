import React, { useState, useEffect } from 'react';
import { Grid, Typography, Link } from '@material-ui/core'
import { axiosInstance, keyApi } from '../api/weather'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './SearchBar';
import WeatherDetails from './WeatherDetails';
import WeatherList from './WeatherList';
import WeatherItem from './WeatherItem';
import addToFavorites from '../actions/addAction'
import removeFromFavorites from '../actions/removeAction'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core';
import ErrModal from './ErrModal';
import '../App.css';

export default function Home() {

    const [fiveDays, setFiveDays] = React.useState([]);
    const [currDay, setCurrDay] = React.useState(null);
    const [showErr, setShowErr] = React.useState(false);

    const dispatch = useDispatch();
    const _favorites = useSelector(state => state.favoritesState.favorits)


    const handleClose = () => {
        setShowErr(false);
    };

    async function handleSubmit(searchTerm) {
        const _url = `/currentconditions/v1/${searchTerm.key}`;
        try {
            const res = await axiosInstance.get(_url, {
                params: {
                    apikey: keyApi,
                }
            });

            if (res && res.data && res.data.length > 0) {
                let _currDay = res.data.shift();
                let isFavorite = false
                if (_currDay != null) {

                    if (_favorites && _favorites.length > 0) {
                        let _isFavorite = _favorites.filter((obj) => { return obj.key === searchTerm.key });
                        if (_isFavorite.length > 0) {
                            isFavorite = true
                        }
                    }

                    setCurrDay({ title: searchTerm.title, key: searchTerm.key, WeatherIcon: _currDay.WeatherIcon, WeatherText: _currDay.WeatherText, Temperature: _currDay.Temperature.Metric, isFavorites: isFavorite });
                };

                findNextDays(searchTerm);

            };

        } catch (e) {
            setShowErr(true);
        };

    }

    async function findNextDays(searchTerm) {
        const _url = `/forecasts/v1/daily/5day/${searchTerm.key}`;

        const res = await axiosInstance.get(_url, {
            params: {
                apikey: keyApi,
            }
        });

        if (res && res.data && res.data.DailyForecasts && res.data.DailyForecasts.length > 0) {
            let _nextDays = res.data.DailyForecasts;
            if (_nextDays != null) {
                setFiveDays(_nextDays.map((obj) => { return <WeatherItem weatherItem={obj} key={obj.EpochDate} temp={(Math.floor(5 / 9 * (obj.Temperature.Maximum.Value - 32) * 100) / 100) + 'C'} day={new Date(obj.Date).getDay()} /> }));
            }
        }
    }


    return (
        <Grid justify="center" container spacing={10}>
            <Grid item xs={12}>
                <Grid justify="center" container spacing={10}>
                    <Grid className="searchBar-grid" item md={6} xs={12}>
                        <SearchBar onFormSubmit={handleSubmit} />
                    </Grid>
                    {currDay != null &&
                        <Grid item md={8} xs={12}>
                            <Grid style={{ display: 'flex', float: 'right' }}>
                                {currDay != null && currDay.isFavorites ?
                                    < FavoriteIcon /> : < FavoriteBorderIcon />
                                }
                                {currDay != null && !currDay.isFavorites ?
                                    <IconButton className="add-to-favorites-text" onClick={() => { dispatch(addToFavorites(currDay)) }}>Add To Favorites</IconButton>:
                                    <IconButton className="add-to-favorites-text" onClick={() => { dispatch(removeFromFavorites(currDay)) }}>Remove from Favorites</IconButton>
                                }
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <WeatherDetails weather={currDay} />
                            </Grid>

                        </Grid>
                    }
                    {fiveDays.length > 0 &&
                        <Grid item xs={8}>
                            <WeatherList listItems={fiveDays} />
                        </Grid>
                    }
                </Grid>
            </Grid>
            {showErr && <ErrModal showModal={showErr} handleClosePar={handleClose} />}
        </Grid>

    );
}
