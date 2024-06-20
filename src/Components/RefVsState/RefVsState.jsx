import styles from './RefVsState.module.css'
import {useEffect, useRef, useState} from "react";
function RefVsState()
{
    const [count, setCount] = useState(0);

    const counterRef = useRef(0); // useRef does not trigger component render instead of useState
                                            // it is represented as an object with the only field: current

    const resultRef = useRef(0);

    useEffect(() => {
        resultRef.current++;
    });

    function handleStateClick()
    {
        setCount(c => c + 1);
    }

    function handleRefClick()
    {
        counterRef.current = counterRef.current + 1;
    }

    return (
        <section>
            <h2>useRef VS useState</h2>
            <div className={`card ${styles.refCard}`}>
                <div className={styles.refContentWrapper}>
                    <div className={styles.refContent}>
                        <p>useRef will update only after clicking useState button</p>
                        <div className={styles.refInputs}>
                            <div className='input-group'>
                                <label htmlFor="stateInput">useState input</label>
                                <input type="text" id='stateInput' readOnly={true} value={count}/>
                                <button className='btn' onClick={handleStateClick}>Click</button>
                            </div>
                            <div className='input-group'>
                                <label htmlFor="refInput">useRef input</label>
                                <input type="text" id='refInput' readOnly={true} value={counterRef.current}/>
                                <button className='btn' onClick={handleRefClick}>Click</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.refResult}>
                        <h3>How many times the component has rendered?</h3>
                        <div className={`btn ${styles.refCounter}`}>{resultRef.current}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RefVsState