import React from 'react';
import Members from './Members';

const House = ({ family }) => {
    const { name, members } = family;

    return (
        <div>
            <h5>{name}</h5>
            <Members members={members} />
        </div>
    );
};
export default House;
