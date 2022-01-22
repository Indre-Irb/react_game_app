import {createSlice} from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: "status",
    initialState: {
        value: []
    },
    reducers: {
        updateStatus: (state, action) => {
            state.value = action.payload
        },
        updatePlayerGold: (state, action) => {
            state.value.gold -= action.payload
        },
        addGold: (state, action) => {
            state.value.gold += action.payload / 2
        },
        stateWithWeapon: (state, action) => {
            {
                action.payload.map(x => {
                    if (!!x.effect.stamina) {
                        state.value.stamina += x.effect.stamina
                    }
                    if (!!x.effect.strength) {
                        state.value.strength += x.effect.strength
                    }
                    if (!!x.effect.inventorySlots) {
                        state.value.inventorySlots += x.effect.inventorySlots
                    }
                    if (!!x.effect.health) {
                        state.value.health += x.effect.health
                    }
                    if (!!x.effect.energy) {
                        state.value.energy += x.effect.energy
                    }
                    if (!!x.effect.damage) {
                        state.value.damage += x.effect.damage
                    }
                })
            }
        },
        removeEquipmentState: (state, action) => {
            {
                action.payload !== undefined && action.payload.map(x => {
                    if (!!x.effect.stamina) {
                        state.value.stamina -= x.effect.stamina
                    }
                    if (!!x.effect.strength) {
                        state.value.strength -= x.effect.strength
                    }
                    if (!!x.effect.inventorySlots) {
                        state.value.inventorySlots -= x.effect.inventorySlots
                    }
                    if (!!x.effect.health) {
                        state.value.health -= x.effect.health
                    }
                    if (!!x.effect.energy) {
                        state.value.energy -= x.effect.energy
                    }
                    if (!!x.effect.damage) {
                        state.value.damage -= x.effect.damage
                    }
                })
            }
        },
        fightUpdatesHealth: (state, action) => {
            state.value.health -= action.payload

        },
        fightUpdatesEnergy: (state, action) => {
            state.value.energy = action.payload
        },
        restoreHealth: (state, action) => {
            console.log(action.payload)
            if (action.payload.energy) {
                state.value.energy += action.payload.energy
            } else {
                state.value.health += action.payload.health
            }
        }
    }
})

export const {
    updateStatus,
    updatePlayerGold,
    addGold,
    stateWithWeapon,
    removeEquipmentState,
    fightUpdatesHealth,
    fightUpdatesEnergy,
    restoreHealth
} = statusSlice.actions

export default statusSlice.reducer;