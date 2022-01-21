import React from 'react';
import ToolbarOne from "../components/ToolbarOne";
import CharacterInfo from "../components/CharacterInfo";
import PlayerInventory from "../components/PlayerInventory";

const MainPage = () => {

    return (
        <div>
            <ToolbarOne/>
            <div className="d-flex">
                <div className="flex1">
                    <CharacterInfo/>
                </div>
                <div className="flex2">
                    <PlayerInventory/>
                </div>

            </div>

        </div>
    );
};

export default MainPage;