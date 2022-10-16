import React from 'react';
import NotFound from "../../img/404.svg"
import "./NotFoundPage.css"

const NotFoundPage = () => {
    return (
        <div className={"NotFoundPage"}>
            <img src={NotFound} alt={""}/>
        </div>
    );
};

export default NotFoundPage;
