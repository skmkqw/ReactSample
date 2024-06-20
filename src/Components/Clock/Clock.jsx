import {useEffect, useState} from "react";
import styles from './Clock.module.css';
function Clock()
{
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
          clearInterval(intervalId);
        };
    }, []);

    return (
        <section>
            <h2>Digital clock</h2>
            <div className={`card ${styles.clockCard}`}>
                <div className={styles.clockHead}>
                    <h3>What time is it?</h3>
                    <p>Well, let's take a look</p>
                </div>
                <div className={styles.clockContent}>
                    <p>
                        {`${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Clock