import React from 'react'
import PointsElement from './PointsElement';
import LivesElement from './LivesElement';
import Flag from './Flag';
import { useSelector } from 'react-redux';

const Head = ({ currentCountry, points, lives }) => {
    const { questionType } = useSelector(state => state.game)

    return (
        <> <PointsElement points={points} />
            <LivesElement lives={lives} />
            {questionType === "country" && <Flag currentCountry={currentCountry} />}
        </>
    )

};

export default Head