import React from 'react'
import disableButtons from './menu'

const Button = ({text, style, onClick}) => {
    return (
        <button type="button" className="btn btn-primary"  onClick={onClick} style={style}>{text}</button>
    )
}

export default Button