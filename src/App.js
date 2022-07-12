import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./data";

function App() {
    const card_info = data.map((info) => <Card {...info} />);

    return (
        <div className="App">
            <Header></Header>
            {card_info}
        </div>
    );
}

export default App;
