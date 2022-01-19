import React from 'react';
import {useNavigate} from "react-router-dom";

const ToolbarOne = () => {

    const navigate = useNavigate();

    return (
        <div className="toolbar d-flex al-center">
            <div className="mar-left-40" onClick={()=> navigate("/trader")}>Shop</div>
            <div className="mar-left-40" onClick={()=> navigate("/arena")}>Arena</div>
        </div>
    );
};

export default ToolbarOne;