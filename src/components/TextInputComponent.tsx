import React from 'react';

interface Props {
    value: string;
    placeholder: string;
    onChange: (e: any) => void;
}

export const TextInputComponent: React.FC<Props> = ({ value, placeholder, onChange }) => {

    return (
        <input type="text" className="search-input" value={value} placeholder={placeholder} onChange={onChange} />
    )
};

export default TextInputComponent;