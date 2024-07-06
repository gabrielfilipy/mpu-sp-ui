import React, { useState } from "react";
import './Box.css';
import { ExpandMore, ExpandLess } from "@mui/icons-material";

interface BoxProps {
    array?: any[];
    titulo?: string;
    renderItem?: (item: any, index: number) => React.ReactNode;
}

const Box: React.FC<BoxProps> = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="AppBox">
            <div className="HeaderBox">
                {props.titulo}
                <button className="ExpandButton" onClick={toggleExpanded}>
                    {isExpanded ? <ExpandLess /> : <ExpandMore />}
                </button>
            </div>
            <ul className="BoxList" style={{ maxHeight: isExpanded ? 'none' : '100px' }}>
                {
                    props.array?.map((item, index) => (
                        <li key={index} className="BoxListItem">
                            {props.renderItem ? props.renderItem(item, index) : item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Box;