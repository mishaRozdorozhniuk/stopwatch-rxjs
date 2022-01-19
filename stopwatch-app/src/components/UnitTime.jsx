import React from "react";
import PropTypes from "prop-types";

const UnitTime = ({time}) => {
    return (
        <>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) %  100)).slice(-2)}</span>
        </>
    )
}

UnitTime.propTypes = {
    time: PropTypes.number
}

export default UnitTime;