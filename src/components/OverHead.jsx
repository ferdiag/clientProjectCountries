import React from 'react'
import PointsElement from './PointsElement';
import LivesElement from './LivesElement';
import Flag from './Flag';
import { useSelector } from 'react-redux';

const OverHead = () => {
    const { questionType } = useSelector(state => state.game)

    return (
        <> <PointsElement />
            <LivesElement />
            {questionType === "country" && <Flag />}
        </>
    )

};

export default OverHead