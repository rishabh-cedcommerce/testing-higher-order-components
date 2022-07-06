import React, { useState, useEffect } from 'react';
import HOC from './hoc';

function TodosList({data}) {
    let filteredData = data.splice(0,10).map(user => <div key={user.id}>{user.title}</div>);

    return (
        <div>
            <div>{filteredData}</div>
        </div>
    );
}

const SearchTodos=HOC(TodosList,"todos")
export default SearchTodos;