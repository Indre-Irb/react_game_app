import React from 'react';
import {useSelector} from "react-redux";

const CharacterInfo = () => {

    const hero = useSelector(state => state.status.value)
    const weapon = useSelector(state => state.weapon.value)

    console.log(weapon)

    return (
        <div className="characterInfo">
            <h1 className="text-center">Hero</h1>
            <div>
                <div className="characterCard d-flex">
                    <div className="d-flex al-center">
                        <div className="flex1">
                            <img src={hero.image} alt=""/>
                        </div>
                        <div className="flex1 border-left">
                            <h3>{hero.race}</h3>
                            <h5>Damage: {hero.damage}</h5>
                            <h5>Health: {hero.health}</h5>
                            <h5>Energy: {hero.energy}</h5>
                            <h5>Stamina: {hero.stamina}</h5>
                            <h5>Strength: {hero.strength}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    {weapon != null &&
                    <div className="characterItem d-flex al-center s-evenly">
                        <div>
                        <img src={weapon.image} alt=""/>
                        </div>
                        <div>
                            {(weapon.effects) &&
                                <div>
                                    <div className="text">Effects:
                                        {weapon.effects.map((eff, i) =>
                                            <h5 key={i} style={{color: "#f67676"}}>{eff.title}</h5>)}</div>
                                    <h5>Energy per hit: {weapon.energyPerHit}</h5>
                                    <h5>Max damage: {weapon.maxDamage}</h5>
                                    <h3>Price: {weapon.price} gold</h3>
                                </div>}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default CharacterInfo;