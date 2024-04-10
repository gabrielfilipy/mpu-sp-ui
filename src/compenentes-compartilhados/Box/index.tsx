import React from "react";
import './Box.css'

declare interface BoxProps {
    array?: string[] 
    titulo?: string
}

const Box: React.FC<BoxProps> = (props) => {
 return <div className="AppBox">
    <h2 className="HeaderBox">{props.titulo}</h2>
    <ul>  
        {
            props.array?.map(result => <li>{ result } </li>)
        }
    </ul>
</div>
}


export default Box