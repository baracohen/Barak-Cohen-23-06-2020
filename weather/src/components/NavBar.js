import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core'
import Herolo  from '../images/heroloLogo.jpg'



export default function NavBar() {
    return (
        <Grid className="nav-div" item xs={9}>
                <nav className="nav">
                    <img style={{width:"200px"}} src={Herolo}/>
                    <ul style={{ float: "right", display: "flex", listStyleType: 'none' }}>
                        <li style={{ marginRight: "10px" }}><Link to="/">Home</Link></li>
                        <li className="cart"><Link to="/Favorites">Favorites</Link><span></span></li>
                    </ul>
                </nav>
        </Grid>
    )

}