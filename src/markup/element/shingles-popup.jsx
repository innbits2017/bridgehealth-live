import React, { useState } from "react";

const RadioButtonComponent = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isAbove50, setIsAbove50] = useState(null);
    const [isImmunocompromised, setIsImmunocompromised] = useState(null);
    const [hadChickenpox, setHadChickenpox] = useState(null);
    const [hasChronicCondition, setHasChronicCondition] = useState(null);

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleYesClick = () => {
        setIsAbove50(true);
    };

    const handleNoClick = () => {
        setIsAbove50(false);
    };

    const handleImmunocompromisedYesClick = () => {
        setIsImmunocompromised(true);
    };

    const handleImmunocompromisedNoClick = () => {
        setIsImmunocompromised(false);
    };

    const handleChickenpoxYesClick = () => {
        setHadChickenpox(true);
    };

    const handleChickenpoxNoClick = () => {
        setHadChickenpox(false);
    };

    const handleChronicConditionYesClick = () => {
        setHasChronicCondition(true);
    };

    const handleChronicConditionNoClick = () => {
        setHasChronicCondition(false);
    };

    return (
        <div className="popup-container">
            {!isClicked ? (
                <div>
                    <h1>ARE YOU AT RISK OF SHINGLES?</h1>
                    <button className="check-btn" onClick={handleClick}>Check Now</button>
                </div>
            ) : (
                <div>
                    {isAbove50 === null ? (
                        <div>
                            <h2>Are you 50 years and above?</h2>
                            <div className="buttons-wrapper">
                                <button className="yes-btn" onClick={handleYesClick}>Yes</button>
                                <button className="no-btn" onClick={handleNoClick}>No</button>
                            </div>
                        </div>
                    ) : isAbove50 ? (
                        <div>
                            {isImmunocompromised === null ? (
                                <div>
                                    <h2>
                                        Are you immunocompromised (have a weak immune system)?
                                    </h2>
                                    <div className="buttons-wrapper">
                                        <button className="yes-btn" onClick={handleImmunocompromisedYesClick}>
                                            Yes
                                        </button>
                                        <button className="no-btn" onClick={handleImmunocompromisedNoClick}>No</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    {hadChickenpox === null ? (
                                        <div>
                                            <h2>Have you had Chickenpox?</h2>
                                            <div className="buttons-wrapper">
                                                <button className="yes-btn" onClick={handleChickenpoxYesClick}>Yes</button>
                                                <button className="no-btn" onClick={handleChickenpoxNoClick}>No</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            {hasChronicCondition === null ? (
                                                <div>
                                                    <h2>Do you have Diabetes, Asthma, or COPD?</h2>
                                                    <div className="buttons-wrapper">
                                                        <button className="yes-btn" onClick={handleChronicConditionYesClick}>
                                                            Yes
                                                        </button>
                                                        <button className="no-btn" onClick={handleChronicConditionNoClick}>
                                                            No
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h2 className="high-risk-msg">
                                                        You are at high risk of Shingles, consult your
                                                        doctor about Shingles and its prevention
                                                    </h2>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <h2 className="consult-msg">
                                To know more about Shingles and its prevention, consult your
                                Doctor
                            </h2>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default RadioButtonComponent;
