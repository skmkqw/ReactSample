import styles from './Dimensions.module.css'
import {useEffect, useState} from "react";

function Dimensions()
{
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => { // useEffect means execute some side code when....(see deps parameter)
        window.addEventListener("resize", handleResize);

        return () => { //return statement is used when this component is unmounted and help to clean up the resources
            window.removeEventListener("resize", handleResize); // removing event listener to avoid errors when the component is unmounted
        }
    }, []); // [] means code is executed only when the component is mounted
                // no params will mean that code is executed each time the component rerenders
                // [variable] or [var1, var2, ...] will mean that code is executed on mount and each time any of variables updates

    function handleResize()
    {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <section>
            <h2>Dimensions</h2>
            <div className='card'>
                <div className={styles.dimensionsContent}>
                    <div className={styles.dimensionsTop}>
                        <h3>Window dimensions</h3>
                        <p>Using React <span>useEffect</span> hook</p>
                    </div>
                    <div className={styles.dimensionsBottom}>
                        <h3 className='btn'>{`Window width: ${width}px`}</h3>
                        <h3 className='btn'>{`Window height: ${height}px`}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dimensions