import React from 'react';
import {UilSearch} from '@iconscout/react-unicons'
import './Search.css'

const Search = () => {
    return (
        <div className={"center"}>
            <div className={"Search"}>
                <input type={"text"} placeholder={" Search socialmedia"}/>
                <div className={"s-icon"}>
                    <UilSearch/>
                </div>
            </div>
        </div>
    );
};

export default Search;
