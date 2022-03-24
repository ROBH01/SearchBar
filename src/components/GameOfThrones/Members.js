import React from 'react';

const Members = ({ members }) =>
    <ul>
        { members.map(({ name }, index) => <li key={index}>{name}</li>) }
    </ul>

export default Members
