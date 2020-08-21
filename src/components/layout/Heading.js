import React from "react";

function Heading({ subtitleOne, title, subtitleTwo }) {

    return (
        <>
            <h3>{subtitleOne}</h3>
            <h1>{title}</h1>
            <h5>{subtitleTwo}</h5>
        </>
    );
}

export default Heading;