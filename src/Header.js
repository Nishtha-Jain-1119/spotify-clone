import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from "./DataLayer";
import { useEffect } from 'react';

function Header({ spotify }) {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
        <div className='header'>
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Song, or Podcast"
                    type="text"
                />

            </div>
            <div className="header__right">
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;
