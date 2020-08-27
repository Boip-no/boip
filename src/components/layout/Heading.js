import React from "react";

function Heading({ subtitleOne, title, subtitleTwo }) {

    return (
        <>
            <h3>{subtitleOne}</h3>
            <div className="box-div">
                <h1>{title}</h1>
            </div>
            <h5>{subtitleTwo}</h5>
        </>
    );
}

export default Heading;