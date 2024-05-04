import React, {useState} from 'react';

interface InputTextProps {
	value: string;
	onChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({InitialText}) => {
	const [text, setText] = useState(InitialText);

	const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	return(
		<div>
			<input type="text" value={text} onChange={handleTextChange} />
			<p className='text-white'>El texto ingresado es:</p>
			<p className='text-white'>{text}</p>
		</div>
	)
};

export default InputText;