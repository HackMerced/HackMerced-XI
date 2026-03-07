import React from 'react';
import { Card } from "@mui/material";
//import Question from "../Assets/question.svg";
import Health from "../Assets/health.svg";
// import Ag from "../Assets/ag.svg"
// import Bus from "../Assets/bus.svg";
// import Question from "../Assets/question.svg";
// import Health from "../Assets/question.svg";
// import Ag from "../Assets/question.svg"
// import Bus from "../Assets/question.svg";
import Cybersecurity from '../Assets/support_1.svg';
function Tracks() {
    return (
        <div className="Tracks" id="tracks">
            <h2 className="Tracks-title">HackMerced XI Tracks</h2>
            <div className="Tracks-Flex">
                {["Health For Social Good"].map((title) => (
                    <Card
                        style={{ borderRadius: "30px"}}
                        className="Track-Card"
                    >
                        <img
                            className="Track-Logo"
                            src={Health}
                            alt="Health For Social Good"
                        />
                        <h1 className="Track-Name">{title}</h1>
                        <div className="Track-Text"></div>
                    </Card>
                ))}
                {["Cybersecurity"].map((title) => (
                    <Card
                        style={{ borderRadius: "30px"}}
                        className="Track-Card"
                    >
                        <img
                            className="Track-Logo"
                            src={Cybersecurity}
                            alt="Cybersecurity"
                        />
                        <h1 className="Track-Name">{title}</h1>
                        <div className="Track-Text"></div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Tracks;
