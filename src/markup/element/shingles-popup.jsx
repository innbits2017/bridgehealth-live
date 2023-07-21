import React, { useState, useEffect } from "react";

const RadioButtonComponent = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isAbove50, setIsAbove50] = useState(null);
    const [isImmunocompromised, setIsImmunocompromised] = useState(null);
    const [hadChickenpox, setHadChickenpox] = useState(null);
    const [hasChronicCondition, setHasChronicCondition] = useState(null);
    const [showSharePopup, setShowSharePopup] = useState(false);

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

    const handleRefresh = () => {
        setIsClicked(false);
        setIsAbove50(null);
        setIsImmunocompromised(null);
        setHadChickenpox(null);
        setHasChronicCondition(null);
    };

    const handleBack = () => {
        if (hasChronicCondition !== null) {
            setHasChronicCondition(null);
        } else if (hadChickenpox !== null) {
            setHadChickenpox(null);
        } else if (isImmunocompromised !== null) {
            setIsImmunocompromised(null);
        } else if (isAbove50 !== null) {
            setIsAbove50(null);
        }
    };

    const handleShareClick = () => {
        setShowSharePopup(true);
    };

    const closeSharePopup = () => {
        setShowSharePopup(false);
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            const sharePopup = document.querySelector('.share-popup');
            if (sharePopup && !sharePopup.contains(e.target)) {
                closeSharePopup();
            }
        };

        if (showSharePopup) {
            window.addEventListener('click', handleOutsideClick);
        }

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [showSharePopup]);

    return (
        <div className="popup-container">
            {!isClicked ? (
                <div>
                    <div className="card-body">
                        <h3 className="card-text-partners">Are you at risk OF SHINGLES?</h3>
                    </div>
                    <img src={require('../../assets/images/shape/shi1.png')} alt="" className='firstQuestion' />

                    <div className="questionCheckNow">
                        <button className="check-btn btn-style-ten" onClick={handleClick}>Check Now</button>
                    </div>
                </div>
            ) : (
                <div>
                    {isAbove50 === null ? (
                        <div>
                            <h2 className="question">Are you 50 years and above?</h2>
                            <img src={require('../../assets/images/shape/Group 238257.png')} alt="" className='wrap-labwidth123' />
                            <div className="buttons-wrapper">
                                <button className="yes-btn" onClick={handleYesClick}>Yes</button>
                                <button className="no-btn" onClick={handleNoClick}>No</button>
                            </div>
                        </div>
                    ) : isAbove50 ? (
                        <div>
                            {isImmunocompromised === null ? (
                                <div>
                                    <h2 className="question">
                                        Are you immunocompromised (have a weak immune system)?
                                    </h2>
                                    <img src={require('../../assets/images/shape/Isolation_Mode.png')} alt=""
                                        className='wrap-labwidth123' />
                                    <div className="buttons-wrapper">
                                        <img src={require('../../assets/images/shape/Arrow 13.png')} alt="Back" onClick={handleBack}
                                            className="backQuestion" />
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
                                            <h2 className="question">
                                                Have you had Chickenpox?
                                            </h2>
                                            <img src={require('../../assets/images/shape/OBJECTS.png')} alt="" className='fiveQuestion' />
                                            <div className="buttons-wrapper">
                                                <img src={require('../../assets/images/shape/Arrow 13.png')} alt="Back" onClick={handleBack}
                                                    className="backQuestion" />
                                                <button className="yes-btn" onClick={handleChickenpoxYesClick}>Yes</button>
                                                <button className="no-btn" onClick={handleChickenpoxNoClick}>No</button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            {hasChronicCondition === null ? (
                                                <div>
                                                    <h2 className="question">
                                                        Do you have Diabetes, Asthma, or COPD?
                                                    </h2>
                                                    <img src={require('../../assets/images/shape/Vector.png')} alt="" className='fourQuestion' />
                                                    <div className="buttons-wrapper">
                                                        <img src={require('../../assets/images/shape/Arrow 13.png')} alt="Back" onClick={handleBack}
                                                            className="backQuestion" />
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
                                                    <div>
                                                        <h2 className="question consult-msg1">
                                                            You are at high risk of Shingles, consult your
                                                            doctor about Shingles and its prevention
                                                        </h2>
                                                    </div>

                                                    <div>
                                                        <p className="share-msg">
                                                            Share this risk test with others and help them understand more about Shingles and its
                                                            prevention.
                                                        </p>
                                                        <img src={require('../../assets/images/shape/Group.png')} alt="Share" onClick={handleShareClick}
                                                            className="shareSocial" />
                                                        <img src={require('../../assets/images/shape/Layer 14.png')} alt="Refresh"
                                                            onClick={handleRefresh} className="refresh" />

                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <div>
                                <h2 className="consult-msg">
                                    To know more about Shingles and its prevention, consult your
                                    Doctor
                                </h2>
                            </div>
                            <div>
                                <p className="share-msg">
                                    Share this risk test with others and help them understand more about Shingles and its
                                    prevention.
                                </p>
                                <img src={require('../../assets/images/shape/Group.png')} alt="Share" onClick={handleShareClick} className="shareSocial" />
                                <img src={require('../../assets/images/shape/Layer 14.png')} alt="Refresh" onClick={handleRefresh}
                                    className="refresh" />
                            </div>
                        </div>
                    )}
                </div>
            )}
            {showSharePopup && (
                <div className="share-popup">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=URL_TO_SHARE" target="_blank">
                        <img src={require('../../assets/images/shape/Facebook_Logo1 (1).png')} alt="Facebook" />
                    </a>
                    <a href='https://api.whatsapp.com/send?phone=916366504753&text=Hey%20Bridge%20Health' target="_blank">
                        <img src={require('../../assets/images/shape/whatsapp-logo1 (1).png')} alt="WhatsApp" />
                    </a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=URL_TO_SHARE" target="_blank">
                        <img src={require('../../assets/images/shape/linked_logo1 (1).png')} alt="LinkedIn" />
                    </a>
                    <button onClick={closeSharePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default RadioButtonComponent;