import React, {useEffect, useState} from 'react';
import './App.css';
import Button from './components/Button/Button';
import UnitTime from './components/UnitTime';

const App = () => {
    const [time, setTime] = useState(0)
    const [timerStart, setTimerStart] = useState(false)

    useEffect(() => {
        let interval = null;

        if(timerStart) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerStart])

    return ( 
        <div className="stopwatch">
            <div>
                <UnitTime time={time} />
            </div>
            <div>
                {!timerStart && time === 0 && (
                    <Button className='btn btn-start' onClick={() => setTimerStart(true)} text="Start"/>
                )}
                 {timerStart && (
                    <Button className='btn btn-stop' onClick={() => setTimerStart(false)} text="Stop"/>
                )}
                {!timerStart && time !== 0 && (
                    <Button className='btn btn-wait' onDoubleClick={() => setTimerStart(true)} text="Wait"/>

                )}
                {!timerStart && time > 0 && (
                    <Button className='btn btn-reset' onClick={() => setTime(0)} text="Reset"/>
                )}
            </div>
        </div>
    );
}

export default App;