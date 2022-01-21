import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toolbarTrigger} from "../features/trigger";

const ToolbarTwo = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function triggerChange (){
        dispatch(toolbarTrigger(false))
        navigate("/main")
    }

    return (
        <div className="toolbar d-flex al-center">
            <div className="mar-left-40" onClick={()=> triggerChange()}>Main</div>
            <div className="mar-left-40" onClick={()=> navigate("/arena")}>Arena</div>
        </div>
    );
};

export default ToolbarTwo;