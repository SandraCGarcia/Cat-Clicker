import React from 'react';

const List = ({ CAT_ARRAY }) => {

    return (
        <ul>
            {CAT_ARRAY.map(catObject => console.log(catObject.name))}

        </ul>
    )}

export default List;