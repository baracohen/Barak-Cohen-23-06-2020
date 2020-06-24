import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import WeatherList from './components/WeatherList';
import WeatherItem from './components/WeatherItem';
import { IconButton } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Favorites from './components/Favorites';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import './App.css'

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
    color: ${props => props.theme.mode === 'dark' ? '#EEE !important' : '#111'};
  }
  .add-to-favorites-text {
    color: ${props => props.theme.mode === 'dark' ? '#EEE !important' : '#111'};
  }
`

export default function App() {
  const [theme, setTheme] = useState({ mode: 'light' })


  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div id="root" className="App">
        <IconButton className="toggle-btn" style={{color: theme.mode === 'dark' ? '#EEE' : '#111'}} onClick={e => setTheme(theme.mode === 'dark' ? { mode: 'light' } : { mode: 'dark' })}>Theme mode</IconButton>

          <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
              <Route exact style={{color: theme.mode === 'dark' ? '#EEE' : '#111'}} path="/" component={Home} />
              <Route style={{color: theme.mode === 'dark' ? '#EEE' : '#111'}} path="/Favorites" component={Favorites} />
            </Switch>
          </BrowserRouter>
        </div>
      </>
    </ThemeProvider>
  );
}
