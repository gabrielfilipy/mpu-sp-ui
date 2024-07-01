import React from "react";
import './Button.css'

declare interface ButtonProps extends React.InputHTMLAttributes<HTMLInputElement>{
    content?: string
    className?:string
    onClick?: () => void
    value?: string
    appnedIcon?: any
    color?: any
    children?: React.ReactNode;
    icon?: any;
}

const Button: React.FC<ButtonProps> = (props) => {

    if(props.color === 'primary') {
        return <button 
                className=" AppButton  AppButtonPrimary"
                onClick={ props.onClick }
                style={{ marginRight: '5px' }}
                >
                {props.icon}
                { props.children }
            </button>
    } else if(props.color ==='danger'){
        return <button 
            className="AppButton AppButtonDanger"
            onClick={ props.onClick }
            style={{ marginRight: '5px' }}
            >
            {props.icon}
            { props.value }
        </button>
    }

    else if(props.color === 'alert'){
                return <button 
                className="AppButton AppButtonAlert"
                onClick={ props.onClick }
                style={{ marginRight: '5px' }}
            >
                {props.icon}
                { props.children }
            </button>
    } else if(props.color === 'create') {
        return <button 
                className="AppButton AppButtonCreate"
                onClick={ props.onClick }
                style={{ marginRight: '5px' }}
                >
                {props.icon}
                { props.value }
            </button>
    } else if(props.color === 'grey') {
        return <button 
                className="AppButton AppButtonGrey"
                onClick={ props.onClick }
                style={{ marginRight: '5px' }}
                >
                {props.icon}
                { props.value }
            </button>
    } else {
        return <button 
                className="AppButton AppButtonPrimary"
                onClick={ props.onClick }
                style={{ marginRight: '5px' }}
            >
                {props.icon}
                { props.children }
            </button>
    }

}

export default Button