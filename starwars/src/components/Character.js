import React from 'react';

import './StarWars.scss';

const Character = props => {
    console.log('Character props', props)
    return (
        <div className="char-card">
            <p>Name: <span>{props.starwarsChar.name}</span></p>
            <p>Birth Year: <span>{props.starwarsChar.birth_year}</span></p>
        </div>
    );
};

export default Character;