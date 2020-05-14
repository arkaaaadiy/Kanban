import React from 'react'
import './Button.sass'


interface ButtonProps {
    children: string
}

const Button = ({children}:ButtonProps) => {
    return (<button className='button'>{children}</button>)
}

export default Button
