import React from 'react';
import ToolbarOne from "../components/ToolbarOne";
import CharacterInfo from "../components/CharacterInfo";
import PlayerInventory from "../components/PlayerInventory";

const MainPage = () => {

    return (
        <div>
            <ToolbarOne/>
            <CharacterInfo/>
            <PlayerInventory/>
        </div>
    );
};

export default MainPage;