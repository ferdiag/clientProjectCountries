import React from 'react'
import { useSelector } from 'react-redux'

const Leaderboard = ({ name }) => {
    const { points } = useSelector(state => state.game)
    return (
        <div>
            <div>{name}</div>
            <div>{points}</div>
        </div>
    )
}

export default Leaderboard