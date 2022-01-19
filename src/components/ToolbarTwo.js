import React from 'react';
import {useNavigate} from "react-router-dom";

const ToolbarTwo = () => {

    const navigate = useNavigate();

    return (
        <div className="toolbar d-flex al-center">
            <div className="mar-left-40" onClick={()=> navigate("/main")}>Main</div>
            <div className="mar-left-40" onClick={()=> navigate("/arena")}>Arena</div>
        </div>
    );
};

export default ToolbarTwo;