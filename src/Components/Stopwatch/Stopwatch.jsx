import styles from './Stopwatch.module.css'
function Stopwatch()
{
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
                        <p>00:00:00</p>
                    </div>
                    <div className={styles.stopwatchButtons}>
                        <button className='btn'>Start</button>
                        <button className='btn'>Stop</button>
                        <button className='btn'>Restart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stopwatch