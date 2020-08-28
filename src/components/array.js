import React from 'react'

const Array = ({ arr }) => {
    return (
        <div className="array-container">
            {arr.map((value, idx) => (
                <div className="array-bar" key={idx} 
                style={{
                    backgroundColor: "#0066ED",
                    height: `${value*1.25}px`,
                }}> </div>
            ))}
        </div>
    )
}

export default Array