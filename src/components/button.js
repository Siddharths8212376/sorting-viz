import React from 'react'

const Button = ({text, style}) => {
    return (
        <button type="button" className="btn btn-primary" style={style}>{text}</button>
    )
}

export default Button