import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import("./RequestList.css");

const RequestList = (props) => {
    const navigate = useNavigate();


    /* these will be rendered at admin dashboard */
    return (
        <>
            <div className="DashBoardButton">   
                <div className="requestDetails">
                <div><strong className="RequestorName">{props.name}  </strong></div>
                <div>type: {props.emergencyType}</div>
                </div>
                <div className="requestBtnContainer">
                <Link to="/request-details" state={{props}}> <button className="requestButton">view</button> </Link>
                </div>
            </div>
        </>
    );
};

export default RequestList;
