import React, { useState, useEffect } from 'react';
import HOC from './hoc';


function UsersList({data}) {
    let filteredData = data.map(user => <div key={user.id}>{user.name}</div>);

    return (
        <div>
            <div>{filteredData}</div>
        </div>
    );
}

const SearchUsers=HOC(UsersList,"users")

export default SearchUsers;