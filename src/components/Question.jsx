import React from 'react'
import { useSelector } from 'react-redux'

const Question = () => {
    const { questionType } = useSelector(state => state.game)
    return (
        <div>
            Wie heißt
            {questionType === "country" ? " das Land" : " die Hauptstadt?"}
        </div>
    )
}

export default Question