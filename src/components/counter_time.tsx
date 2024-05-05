import React, {useState, useEffect} from 'react';

interface CounterTimeProps {
	initialTime: number;
    prevTime: number;
}

const CounterTime : React.FC<CounterTimeProps> = ({InitialTime}) => {

	const [time, setTime] = useState(InitialTime);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
		}, 1000);

		if (time == 0){
			alert('Tiempo terminado');
		}

		return() => {
			clearInterval(interval);
		};


	});

	return(
		<div>
			<h1>Tiempo:{time}</h1>
		</div>
	);
	};

export default CounterTime;