import React from 'react'
import PointsElement from './PointsElement';
import LivesElement from './LivesElement';
import Flag from './Flag';
import { useSelector } from 'react-redux';

const Head = ({ currentCountry }) => {
    const { questionType } = useSelector(state => state.game)
    console.log(currentCountry)
    return (
        <> <PointsElement />
            <LivesElement />
            {questionType === "country" && <Flag currentCountry={currentCountry} />}
        </>
    )

};

export default Head