import React from 'react';
import ToolbarTwo from "../components/ToolbarTwo";
import Trader from "../components/Trader";
import PlayerInventory from "../components/PlayerInventory";

const TraderPage = () => {
    return (
        <div>
            <ToolbarTwo/>
            <div className="d-flex">
            <div className="flex2">
               <Trader/>
            </div>
            <div className="flex1">
                <PlayerInventory/>
            </div>
            </div>
        </div>
    );
};

export default TraderPage;