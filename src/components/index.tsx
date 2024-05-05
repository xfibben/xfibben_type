import React, {useState, useEffect} from "react";
import InputText from "./input_text";
import CounterTime from "./counter_time";

import TEXT from './text';

interface AppProps{
    InitialText: string;
    InitialTime: number;
}

const App: React.FC<AppProps> = ({InitialText, InitialTime}) => {
    return(
        <div className="text-4xl text-center text-yellow-500">
            <InputText InitialText={TEXT}/>
        </div>
    );
};

export default App;