import React from 'react'
import { useSelector } from 'react-redux'

const Flag = ({ currentCountry }) => {
    return (
        <div>
            {currentCountry && <img
                src={currentCountry.flag}
                alt={`Flag of ${currentCountry.country}`}
                style={{ width: "200px", height: "auto" }}
            />}
        </div>
    )
}

export default Flag