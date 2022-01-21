import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toolbarTrigger} from "../features/trigger"

const ToolbarOne = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function triggerChange (){
        dispatch(toolbarTrigger(true))
        navigate("/trader")
    }

    return (
        <div className="toolbar d-flex al-center">
            <div className="mar-left-40" onClick={()=> triggerChange()}>Shop</div>
            <div className="mar-left-40" onClick={()=> navigate("/arena")}>Arena</div>
        </div>
    );
};

export default ToolbarOne;