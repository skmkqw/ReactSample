import styles from './CoffeeOrder.module.css'
import coffeePic from '../../assets/coffee.jpg'
import {useState} from "react";
function CoffeeOrder()
{
    const [order, setOrder] = useState({type:'Latte', quantity: 500});

    const ChangeCoffeeType = (e) => {
        setOrder(o => ({...o, type: e.target.value}));  // Spread operator makes new object look like {type, quantity, type}
                                                           // All keys must be unique, so the second value of "type" is accepted
    }
    const ChangeCoffeeQuantity = (e) => {
        setOrder(o => ({...o, quantity: e.target.value})); // An arrow function inside SetOrder is called and
                                                                                            // updater function. It is used to safely update state using previous state, not current
    }

    return(
        <section>
            <h2>Coffee Order</h2>
            <div className={`card ${styles.coffeeCard}`}>
                <div className={styles.coffeeImg}>
                    <img src={coffeePic} alt="Coffee image"/>
                </div>
                <div className={styles.coffeeContent}>
                    <div>
                        <h3>Ready to start your morning?</h3>
                    </div>
                    <div className={styles.coffeeForm}>
                        <div className={styles.coffeeInput}>
                            <label htmlFor={"coffeeType"}>Coffee type:</label>
                            <input type="text" id={"coffeeType"} value={order.type}
                                   onChange={ChangeCoffeeType}/>
                        </div>
                        <div className={styles.coffeeInput}>
                            <label htmlFor={"coffeeQuantity"}>Coffee quantity:</label>
                            <input type="number" id={"coffeeQuantity"} value={order.quantity}
                                   onChange={ChangeCoffeeQuantity}/>
                        </div>
                    </div>
                    <div>
                        <p>
                            So, your today's choice is <b>{order.quantity > 1000 ? `${(order.quantity / 1000).toFixed(2)}kg` : `${order.quantity}g`}</b> of <b>{order.type}</b>. Nice choice! But are you sure you dont want more?)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoffeeOrder