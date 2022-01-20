import React, {useEffect, useState} from 'react';
import './App.css';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Button from './components/Button/Button';
import DisplayComponent from './components/DisplayComponent';

const App = () => {
    const [time, setTime] = useState(0);
    const [watchOn, setWatchOn] = useState(false);

    useEffect(() => {
        const unsubscribe = new Subject();

        interval(10)
            .pipe(takeUntil(unsubscribe))
            .subscribe(() => {
              if (watchOn) {
                setTime(val => val + 1);
              }
            });
        return () => {
          unsubscribe.next();
        };
      }, [watchOn]);
    
    return ( 
        <div className="stopwatch">
            <div>
                <DisplayComponent time={time} />
            </div>
            <div>
                <Button onClick={() => setWatchOn(prevState => !prevState)} className='btn btn-start' text="Start"/>
                {time !== 0 && <Button onClick={() => setWatchOn(false)} className='btn btn-stop'  text="Stop"/>}
                <Button onClick={() => setWatchOn(prevState => !prevState)} className='btn btn-wait' text="Wait"/>
                <Button onClick={() => (setWatchOn(false), setTime(0))} className='btn btn-reset' text="Reset"/>
            </div>
        </div>
    );
}

export default App;