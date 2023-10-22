import React from "react";
import './Button.css'

declare interface ButtonProps {
    content?: string
    onClick?: () => void
    value?: string
    appnedIcon?: any
    color?: any
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {

if(props.color === 'primary'){
    return <button 
            className="AppButtonPrimary"
            onClick={ props.onClick }
        >
            { props.value }
        </button>
        } else if(props.color ==='danger'){
        return <button 
            className="AppButton AppButtonDanger"
            onClick={ props.onClick }
        >
            { props.value }
        </button>


}

else if(props.color === 'alert'){
               return <button 
            className="AppButton AppButtonAlert"
            onClick={ props.onClick }
        >
            { props.children }
        </button>
} else if(props.color === 'create') {
    return <button 
            className="AppButton AppButtonCreate"
            onClick={ props.onClick }
            >
            { props.value }
        </button>
} else if(props.color === 'grey') {
    return <button 
            className="AppButton AppButtonGrey"
            onClick={ props.onClick }
            >
            { props.value }
        </button>
} else {
    return <button 
            className="AppButton AppButtonPrimary"
            onClick={ props.onClick }
        >
            { props.children }
        </button>
 

}

}

export default Button