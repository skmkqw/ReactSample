import NestedL2 from "./NestedL2.jsx";
import {createContext, useState} from "react";

export const MessageContext = createContext("No message here"); //creating and
                                                // enabling to import the context

function NestedL1()
{
    const [message, setMessage] = useState("No props are used to pass this phrase!");

    const styles = {
        padding: 20 + 'px',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <section>
            <h2>useContext</h2>
            <div className='card' style={styles}>
                <div style={{maxWidth:'20%'}}>
                    <h2>Layer 1</h2>
                    <p>{message}</p>
                </div>
                {/*Wrapping children in context's provider and passing a value to it*/}
                <MessageContext.Provider value={message}>
                    <NestedL2/>
                </MessageContext.Provider>
            </div>
        </section>
    );
}

export default NestedL1