import React from 'react'
import './StarWars.scss';

import Character from './Character'


const CharacterList = props => {
    console.log('CharacterList props', props);
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