import React from 'react';

interface Props {
    text: string;
}

const ButtonComponent: React.FC<Props> = ({ text }) => {
    return (
        <button className="button">{text}</button>
    )
};

export default ButtonComponent;