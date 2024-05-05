import React, {useState} from 'react';

interface InputTextProps {
    InitialText: string;
    value: string;
    onChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({InitialText}: InputTextProps) => {
    
    return(
        <div>
            <p>{InitialText}</p>
        </div>
    );
};

export default InputText;