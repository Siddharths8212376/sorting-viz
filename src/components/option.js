import React from 'react'

const Option = ({text, style, onClick}) => {
    return (
        <a href='#' class="btn btn-danger" role="button" onClick={onClick} style={style}>{text}</a>
    )
}

export default Option