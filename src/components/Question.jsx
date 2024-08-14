import React from 'react'

const Question = ({ questionType }) => {
    return (
        <div>
            Wie heißt
            {questionType === "country" ? " das Land" : " die Hauptstadt?"}
        </div>
    )
}

export default Question