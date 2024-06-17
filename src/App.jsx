import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Card from "./Components/Card/Card.jsx";
function App() {
    return (
        <>
            <Header/>
            <Card name = "Card 1" date = {new Date(2022, 4, 11)}/>
            <Footer/>
        </>
    );
}

export default App
