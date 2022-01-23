import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addEquipment, removeEquipment} from "../features/equipment";
import {addGold, stateWithWeapon, removeEquipmentState} from "../features/status";
import {equippedItem} from "../features/weapon"

const PlayerInventory = () => {

    const hero = useSelector(state => state.status.value)
    const equipment = useSelector(state => state.equipment.value)
    const trigger = useSelector(state => state.trigger.value)
    const weapon = useSelector(state => state.weapon.value)

    let oldWeapon

    const dispatch = useDispatch();

    function sellItem(stuff, index) {
        if (trigger) {
            dispatch(removeEquipment(index))
            dispatch(addGold(stuff))
        } else if (!!stuff.maxDamage) {
            oldWeapon = weapon
            dispatch(removeEquipment(index))
            dispatch(equippedItem(stuff))
            dispatch(stateWithWeapon(stuff.effects))

            if (weapon != null) {
                dispatch(addEquipment(oldWeapon))
                dispatch(removeEquipmentState(oldWeapon.effects))
            }
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
                            {(stuff.effects) &&
                                <div>
                                    <div className="text">Effects:
                                        {stuff.effects.map((eff, i) =>
                                            <h5 key={i} style={{color: "#f67676"}}>{eff.title}</h5>)}</div>
                                    <h5>Energy per hit: {stuff.energyPerHit}</h5>
                                    <h5>Max damage: {stuff.maxDamage}</h5>
                                    <h3>Price: {stuff.price} gold</h3>
                                </div>}
                            {(stuff.effect) &&
                                <div>
                                    <h5>Effect: {stuff.title}</h5>
                                    <h3>Price: {stuff.price} gold</h3>
                                </div>}
                            {(!stuff.effects && !stuff.effect ? <h3>Price: {stuff.price} gold</h3> : null)}
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default PlayerInventory;