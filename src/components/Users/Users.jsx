import React from 'react';
import User from "../User/User";
import "./Users.css"

const Users = ({data}) => {
    return (
        <div className={"Users"}>
            {data && data.map((user, id) => {
                return <User user={user} key={id}/>
            })}
        </div>
    );
};

export default Users;
