import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toolbarTrigger} from "../features/trigger";
import {fightUpdatesHealth, fightUpdatesEnergy, restoreHealth} from "../features/status"
import {enemyStatusUpdate, generatedEnemy} from "../features/enemycard";
import {addEquipment, removeEquipment} from "../features/equipment";
import {generateEnemyTrigger} from "../features/arenaTrigger";
import {enemyWeapons, removeEnemyEquipment, removeEnemyAllItems} from "../features/newArray"
import {generateCollectTrigger} from "../features/collectTrigger";

const ArenaField = () => {

    const [getMessage, setMessage] = useState("")
    const [getDropItem, setDropItem] = useState([])
    const [getHpBar, setHpBar] = useState(100)
    const [getEnergyBar, setEnergyBar] = useState(100)
    const [getEnemyBar, setEnemyBar] = useState(100)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const hero = useSelector(state => state.status.value)
    const weapon = useSelector(state => state.weapon.value)
    const equipment = useSelector(state => state.equipment.value)
    const enemy = useSelector(state => state.enemy.value)
    const arenaTrigger = useSelector(state => state.arenaTrigger.value)
    const enemyDropItem = useSelector(state => state.newArray.value)
    const collectTrigger = useSelector(state => state.collectTrigger.value)

    let newHpValue = getHpBar
    let newEnergyValue = getEnergyBar
    let newEnemyValue = getEnemyBar


    const monsters = [
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
            name: "Basilisk",
            maxDamage: 5,
            health: 100,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
            name: "Bat",
            maxDamage: 8,
            health: 80,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
            name: "Bear",
            maxDamage: 20,
            health: 150,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
            name: "Beetle",
            maxDamage: 3,
            health: 300,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
            name: "Boar",
            maxDamage: 7,
            health: 85,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
            name: "Carrion bird",
            maxDamage: 6,
            health: 170,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
            name: "Chimaera",
            maxDamage: 12,
            health: 190,
            maxItemsDrop: 2
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
            name: "Clefthoof",
            maxDamage: 50,
            health: 500,
            maxItemsDrop: 4
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
            name: "Crab",
            maxDamage: 8,
            health: 120,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
            name: "Crocolisk",
            maxDamage: 38,
            health: 420,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
            name: "Devilsaur",
            maxDamage: 25,
            health: 250,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
            name: "Diemetradon",
            maxDamage: 12,
            health: 90,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
            name: "Dragonhawk",
            maxDamage: 120,
            health: 20,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
            name: "Elekk",
            maxDamage: 34,
            health: 160,
            maxItemsDrop: 4

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
            name: "Fox",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
            name: "Gryphon",
            maxDamage: 18,
            health: 350,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
            name: "Gorilla",
            maxDamage: 30,
            health: 240,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
            name: "Horse",
            maxDamage: 3,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
            name: "Hydra",
            maxDamage: 40,
            health: 500,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
            name: "Hyena",
            maxDamage: 9,
            health: 120,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
            name: "Lion",
            maxDamage: 13,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
            name: "Lynx",
            maxDamage: 12,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
            name: "Mastiff",
            maxDamage: 7,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
            name: "Monkey",
            maxDamage: 4,
            health: 300,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
            name: "Nether ray",
            maxDamage: 6,
            health: 120,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
            name: "Owl",
            maxDamage: 7,
            health: 70,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
            name: "Panther",
            maxDamage: 19,
            health: 40,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
            name: "Parrot",
            maxDamage: 2,
            health: 30,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
            name: "Raven",
            maxDamage: 8,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
            name: "Rhinoceros",
            maxDamage: 120,
            health: 1500,
            maxItemsDrop: 8
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
            name: "Scorpid",
            maxDamage: 25,
            health: 300,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
            name: "Sea snake",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
            name: "Serpent",
            maxDamage: 12,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
            name: "Shark",
            maxDamage: 15,
            health: 210,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
            name: "Spore bat",
            maxDamage: 9,
            health: 150
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
            name: "Stag",
            maxDamage: 4,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
            name: "Tallstrider",
            maxDamage: 20,
            health: 80
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
            name: "Threshadon",
            maxDamage: 70,
            health: 800,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
            name: "Turtle",
            maxDamage: 5,
            health: 5000,
            maxItemsDrop: 10
        }
    ]

    const dropItems = [
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Leather_09.gif",
            price: 245,
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
            price: 63
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_33.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
            price: 497
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Blue_01.gif",
            price: 33
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_05.gif",
            price: 52
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Grey_01.gif",
            price: 27
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_16.gif",
            price: 22
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
            price: 173
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_23.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
            price: 123
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Wolf.gif",
            price: 70
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain_05.gif",
            price: 48
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_22.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_40.gif",
            price: 44
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_13.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_16.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
            price: 1088
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_09_Red.gif",
            price: 20
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_EnchantedMageweave.gif",
            price: 200
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_FelclothBag.gif",
            price: 240
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_10_Red.gif",
            price: 180
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_07_Black.gif",
            price: 150
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_02.gif",
            price: 120
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_08.gif",
            price: 0
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_27.gif",
            price: 500
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_09.gif",
            price: 349
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_01.gif",
            price: 88
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_08.gif",
            price: 458
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Leather01.gif",
            price: 255
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_03.gif",
            price: 128
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_05.gif",
            price: 16
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Plate_07.gif",
            price: 612
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Chain_05.gif",
            price: 605
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_02.gif",
            price: 52
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Fabric_01.gif",
            price: 24
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_16.gif",
            price: 177
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_32.gif",
            price: 38
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_49.gif",
            price: 198
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_16.gif",
            price: 97
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_14.gif",
            price: 118
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_28.gif",
            price: 59
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_63.gif",
            price: 148
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
            price: 21
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
            price: 123
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_06.gif",
            price: 114
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
            price: 48
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_23.gif",
            price: 38
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_20.gif",
            price: 27
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
            price: 6
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
            price: 29
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_69.gif",
            price: 689
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_121.gif",
            price: 178
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_31.gif",
            price: 38
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_39.gif",
            price: 183
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_125.gif",
            price: 140
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_108.gif",
            price: 258
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_13.gif",
            price: 95
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_20.gif",
            price: 683
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_30.gif",
            price: 122
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Belt_22.gif",
            price: 48
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_09.gif",
            price: 78
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Mail_21.gif",
            price: 800
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_16.gif",
            price: 110
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_14.gif",
            price: 136
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
            price: 92
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_06.gif",
            price: 239
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_03.gif",
            price: 263
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
            price: 18
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_13.gif",
            price: 38
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_20.gif",
            price: 197
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Plate_12.gif",
            price: 1200
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_13.gif",
            price: 316
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_31.gif",
            price: 12
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_36.gif",
            price: 15
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_40.gif",
            price: 58
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_12.gif",
            price: 1
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/Achievement_Dungeon_UlduarRaid_Misc_02.gif",
            price: 440
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_35.gif",
            price: 57
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_33.gif",
            price: 20
        }
    ]

    function generate() {
        const rand = Math.round(Math.random() * monsters.length)
        monsters.map((enemy, index) => index === rand && dispatch(generatedEnemy(enemy)))
        dispatch(generateEnemyTrigger(true))
        if (!!enemyDropItem){
            dispatch(removeEnemyAllItems(enemyDropItem))
        }

    }

    function attack() {
        dispatch(generateCollectTrigger(false))
        if (hero.health > 0 && hero.energy > 0) {
            if (weapon != null) {
                //Enemy attacks hero
                const newEnergy = hero.energy - weapon.energyPerHit + hero.stamina
                const randEnemyDamage = Math.round(Math.random() * enemy.maxDamage)

                dispatch(fightUpdatesEnergy(newEnergy))
                dispatch(fightUpdatesHealth(randEnemyDamage))

                const newHpBar = randEnemyDamage * newHpValue / hero.health
                newHpValue -= newHpBar
                setHpBar(newHpValue)

                const newEnergyBar = newEnergy * newEnergyValue / hero.energy
                console.log(newEnergyValue, "pirma value")
                if (newEnergyBar < 100) {
                    newEnergyValue -= newEnergyBar
                    setEnergyBar(newEnergyValue)
                }

            } else {
                const newEnergy = hero.energy + hero.stamina
                const randEnemyDamage = Math.round(Math.random() * enemy.maxDamage)

                dispatch(fightUpdatesEnergy(newEnergy))
                dispatch(fightUpdatesHealth(randEnemyDamage))

                const newHpBar = randEnemyDamage * newHpValue / hero.health
                newHpValue -= newHpBar
                setHpBar(newHpValue)

            }
        } else {
            dispatch(generateCollectTrigger(true))
            dispatch(generateEnemyTrigger(false))
            return setMessage("Hero died")
        }

        if (enemy.health > 0) {
            //    Hero attacks Enemy
            if (weapon != null) {
                const randHeroDamage = Math.round(Math.random() * weapon.maxDamage)
                const heroDamage = hero.damage + randHeroDamage
                dispatch(enemyStatusUpdate(heroDamage))

                const newEnemyBar = randHeroDamage * newEnemyValue / enemy.health
                newEnemyValue -= newEnemyBar
                setEnemyBar(newEnemyValue)

            } else {

                const newEnemyBar = hero.damage * newEnemyValue / enemy.health
                newEnemyValue -= newEnemyBar
                setEnemyBar(newEnemyValue)

                dispatch(enemyStatusUpdate(hero.damage))
            }
        } else if (getDropItem.length <= enemy.maxItemsDrop) {
            dispatch(generateEnemyTrigger(false))
            return setMessage("You killed enemy")
        }
    }

    function restore(item, i) {
        dispatch(removeEquipment(i))
        dispatch(restoreHealth(item.effect))
    }

    function finish() {
        dispatch(toolbarTrigger(false))
        navigate("/main")
    }

    function collect(drop) {
        const rand = Math.round(Math.random() * drop)
        const newArray = Array(rand).fill().map(() => Math.round(Math.random() * dropItems.length))
        newArray.map(x => dropItems.map((item, index) => x === index &&
            dispatch(enemyWeapons(item))))
        console.log(newArray)
        console.log(getDropItem)
        if(!!enemyDropItem){
            dispatch(generateCollectTrigger(true))
        }

    }

    function takeItem(item, ind) {
        if (equipment.length < hero.inventorySlots) {
            dispatch(addEquipment(item))
            dispatch(removeEnemyEquipment(ind))
        }
    }

    console.log(enemyDropItem, "dropItem")

    return (
        <div className="arena">
            <div>
                <h1 className="text-center">{getMessage}</h1>
            </div>
            <div className="d-flex">
                <div className="d-flex f-column">
                    <div className="flex1">
                        <div className="heroCard d-flex f-column j-center al-center">
                            <div className="d-flex w-100 s-evenly">
                                <div>
                                    <img src={hero.image} alt=""/>
                                    <h3>{hero.race}</h3>
                                </div>
                                <div className="d-flex">
                                    <div className="mainBar">
                                        <div className="barHP" style={{height: getHpBar + "%"}}/>
                                    </div>
                                    <div className="mainBar">
                                        <div className="barEnergy" style={{height: getEnergyBar + "%"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex s-evenly w-100">
                                <div>
                                    <h5>Damage: {hero.damage}</h5>
                                    <div className="d-flex">
                                        <div className="mark1"/>
                                        <h5>Health: {hero.health}</h5>
                                    </div>
                                    <div className="d-flex">
                                        <div className="mark2"/>
                                        <h5>Energy: {hero.energy}</h5>
                                    </div>
                                </div>
                                <div>
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
                                        {(weapon.effects) ?
                                            <div>
                                                <div className="text">Effects:
                                                    {weapon.effects.map((eff, i) =>
                                                        <h5 key={i} style={{color: "#f67676"}}>{eff.title}</h5>)}</div>
                                                <h5>Energy per hit: {weapon.energyPerHit}</h5>
                                                <h5>Max damage: {weapon.maxDamage}</h5>
                                            </div>
                                            :
                                            <h5>Effect: {weapon.title}</h5>}
                                        <h3>Price: {weapon.price} gold</h3>
                                    </div>
                                </div>}
                        </div>
                        <div>
                            {equipment.map((x, i) => !x.maxDamage &&
                                <div key={i} className="shopItem" onClick={() => restore(x, i)}>
                                    <img src={x.image} alt=""/>
                                    <h5>{x.title}</h5>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className="d-flex f-column s-evenly flex1">
                    {!arenaTrigger &&
                        <div className="d-flex f-column al-center">
                            <div onClick={() => generate()} className="generateButton">Generate Enemy</div>
                        </div>
                    }
                    {arenaTrigger &&
                        <div className="d-flex f-column al-center">
                            <div onClick={() => attack()} className="generateButton">Attack Enemy</div>
                        </div>}
                    {!arenaTrigger &&
                        <div className="d-flex s-between">
                            <div className="d-flex f-column al-center">
                                <div onClick={() => finish()} className="generateButton">Go Home</div>
                            </div>
                            {!collectTrigger &&
                                <div className="d-flex f-column al-center">
                                    <div onClick={() => collect(enemy.maxItemsDrop)}
                                         className="generateButton f-size">Collect
                                        Enemy Items
                                    </div>
                                </div>}
                        </div>}
                </div>
                <div className="flex1">
                    <div className="enemyCard">
                        <div className="d-flex s-between">
                            <div className="mainBar">
                                <div className="barHP" style={{height: getEnemyBar + "%"}}/>
                            </div>
                            <div className="d-flex f-column al-center">
                                <img src={enemy.image} alt=""/>
                                <h3>{enemy.name}</h3>
                            </div>
                        </div>
                        <div className="d-flex w-100 s-evenly">
                            <div className="d-flex f-column">
                                <div>
                                    <h5>Max Damage: {enemy.maxDamage}</h5>
                                </div>
                                <div className="d-flex">
                                    <div className="mark1"/>
                                    <h5>Health: {enemy.health}</h5>
                                </div>
                            </div>
                            <div>
                                <h5>MaxItemDrop: {enemy.maxItemsDrop}</h5>
                            </div>
                        </div>
                    </div>
                    {enemyDropItem.map((x, i) =>
                        <div key={i} className="shopItem" onClick={() => takeItem(x, i)}>
                            <img src={x.image} alt=""/>
                            <h5>Price: {x.price}</h5>
                        </div>)}
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default ArenaField;