import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeEquipment} from "../features/equipment";
import {addGold, stateWithWeapon, removeEquipmentState} from "../features/status";
import {equippedItem} from "../features/weapon"

const PlayerInventory = () => {

    const hero = useSelector(state => state.status.value)
    const equipment = useSelector(state => state.equipment.value)
    const trigger = useSelector(state => state.trigger.value)
    const weapon = useSelector(state => state.weapon.value)

    let oldWeapon = []

    const dispatch = useDispatch();

    function sellItem(stuff, thing) {
        if (trigger) {
            dispatch(removeEquipment(thing))
            dispatch(addGold(stuff.price))
        } else if (!!stuff.maxDamage) {
            oldWeapon = weapon
            dispatch(removeEquipmentState(oldWeapon.effects))
            dispatch(equippedItem(stuff))
            dispatch(stateWithWeapon(stuff.effects))
        }

    }

    return (
        <div className="inventoryInfo">
            <h2>Gold: {hero.gold}</h2>
            <h4>Amount of max equipment: {hero.inventorySlots}</h4>
            <div className="d-flex f-wrap">
                {equipment.map((stuff, i) =>
                    <div key={i} className="shopItem" onClick={() => sellItem(stuff, i)}>
                        <img src={stuff.image} alt=""/>
                        <div>
                            {(stuff.effects) ?
                                <div>
                                    <div className="text">Effects:
                                        {stuff.effects.map((eff, i) =>
                                            <h5 key={i} style={{color: "#f67676"}}>{eff.title}</h5>)}</div>
                                    <h5>Energy per hit: {stuff.energyPerHit}</h5>
                                    <h5>Max damage: {stuff.maxDamage}</h5>
                                </div>
                                :
                                <h5>Effect: {stuff.title}</h5>}
                            <h3>Price: {stuff.price} gold</h3>
                        </div>
                    </div>)}

            </div>
        </div>
    );
};

export default PlayerInventory;