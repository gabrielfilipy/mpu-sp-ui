import React from "react";
import './Button.css' 

declare interface buttonProps {
    content?: string
    onClick?: () => void 
    value?: string
    appnedIcon?: any
}

const Button: React.FC<buttonProps> = (props) => {
    return <button
    className="AppButton"
    onClick={props.onClick}
>
    { props.value} 
    </button>
}
export default Button