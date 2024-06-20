import {useContext} from "react";

import {MessageContext} from "./NestedL1.jsx"; // importing the context

function NestedL4()
{
    const message = useContext(MessageContext); //extracting value from the context

    const styles = {
        padding: 20 + 'px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#797979',
        flex: '0 1 80%'
    }

    return (
        <div className='card' style={styles}>
            <h5>Layer 4</h5>
            <p>{message}</p>
        </div>
    );
}

export default NestedL4