import styles from './Stopwatch.module.css'
import {useEffect, useRef, useState} from "react";
function Stopwatch()
{
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning)
        {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function startStopwatch(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stopStopwatch(){
        setIsRunning(false);
    }

    function restartStopwatch(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        const minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        const seconds = Math.floor(elapsedTime / 1000 % 60);
        const milliseconds = Math.floor(elapsedTime % 1000 / 10);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    }

    return (
        <section>
            <h2>Stopwatch</h2>
            <div className={`card ${styles.stopwatchCard}`}>
                <div className={styles.stopwatchHead}>
                    <h3>Need a stopwatch?</h3>
                    <p>Here it is</p>
                </div>
                <div className={styles.stopwatchContent}>
                    <div className={styles.stopwatchTime}>
                        <p>{formatTime()}</p>
                    </div>
                    <div className={styles.stopwatchButtons}>
                        <button className='btn' onClick={startStopwatch}>Start</button>
                        <button className='btn' onClick={stopStopwatch}>Stop</button>
                        <button className='btn' onClick={restartStopwatch}>Restart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stopwatch