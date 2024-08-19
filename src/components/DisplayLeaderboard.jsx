import React from 'react'
import { useSelector } from 'react-redux'

const DisplayLeaderboard = () => {
    const { leaderboard } = useSelector(state => state.game)

    return (
        <div>{leaderboard.map((player, index) => <div key={index}>
            <div>{player.name}</div>
            <div>{player.points}</div>
        </div>)
        }</div>
    )
}

export default DisplayLeaderboard