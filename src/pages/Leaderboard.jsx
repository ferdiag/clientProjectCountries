import React from 'react'
import { useSelector } from 'react-redux'
import DisplayLeaderboard from '../components/DisplayLeaderboard'

const Leaderboard = () => {
    const { points, leaderboard, name } = useSelector(state => state.game)
    console.log(leaderboard)
    return (
        <div>
            <div>
                <div>{name}</div>
                <div>{points}</div>
            </div>
            <DisplayLeaderboard />
        </div>

    )
}

export default Leaderboard