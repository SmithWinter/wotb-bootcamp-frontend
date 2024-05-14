import React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/system';


import './style.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-title'>
                WOTB Bootcamp by VGF Clan
            </div>
            <div className='header-navigation'>
                <Button color="primary" variant='contained'  size='large' to="#home"
                    sx={{
                        marginRight: 1
                    }}
                >
                    Home
                </Button>
                <Button color="secondary" variant='contained'  size='large' to="#about"> 
                    About
                </Button>
                <Button color="info" variant='contained'  size='large' to="#services">
                    Services
                </Button>
                <Button color="success" variant='contained'  size='large' to="#contact">
                    Contact
                </Button>
            </div>
        </div>
        // <AppBar position="static">
        // <Toolbar>
        //     <Typography variant="h6" style={{ flexGrow: 1 }}>
        //     World of Tank Blitz Bootcamp  - VGF Clan
        //     </Typography>
            // <Button color="inherit" component={Link} to="#home">Home</Button>
            // <Button color="inherit" component={Link} to="#about">About</Button>
            // <Button color="inherit" component={Link} to="#services">Services</Button>
            // <Button color="inherit" component={Link} to="#contact">Contact</Button>
        // </Toolbar>
        // </AppBar>
    );
};

export default Header;