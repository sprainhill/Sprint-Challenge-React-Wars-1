import React from 'react'
import './StarWars.css';

import Character from './Character'


const CharacterList = props => {
    return (
        <div className="character-list">
            {props.starwarsChars.map(starwarsChar => {
                // {console.log('char', char);}
                return <Character starwarsChar={starwarsChar} key={starwarsChar.created}/>
            })}
        </div>
    );
}

export default CharacterList