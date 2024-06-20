import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CardList from './Components/CardList/CardList.jsx'
import CoffeeOrder from "./Components/CoffeeOrder/CoffeeOrder.jsx";
import ToDoList from "./Components/ToDoList/ToDoList.jsx";
import Dimensions from "./Components/Dimesions/Dimensions.jsx";
import Clock from "./Components/Clock/Clock.jsx";

function App() {
    const cards = [
        {
            id: 1,
            name: "Card 1",
            date: new Date(2021, 6, 12)
        },
        {
            id: 2,
            name: "Card 2",
            date: new Date(2023, 2, 1)
        },
        {
            id: 3,
            name: "Card 3",
            date: new Date(2024, 11, 23)
        }
    ];

    return (
        <>
            <Header/>
            <div className="container">
                <CardList cards={cards}/>
                <CoffeeOrder />
                <ToDoList />
                <Dimensions />
                <Clock />
            </div>
            <Footer/>
        </>
    );
}

export default App
