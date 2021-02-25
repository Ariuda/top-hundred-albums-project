import React from 'react';

interface Props {
    text?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    link?: string;
    className?: string;
}

export const ButtonComponent: React.FC<Props> = ({ text, onClick, link, className }) => {
    if (link) {
        return (
            <a href={link} className={`button ${className ? className : ''}`} target="_blank" rel="noreferrer">{text}</a>
        )
    }
    return <button className={`button ${className ? className : ''}`} onClick={onClick}>{text}</button>
    
};

export default ButtonComponent;