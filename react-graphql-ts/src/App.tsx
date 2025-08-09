import './App.css'
import CountryListByContinent from "./components/CountryListByContinent";
import ContinentSelector from "./components/ContinentSelector";
import {useState} from "react";

function App() {
    const [selectedContinent, setSelectedContinent] = useState("AS");

    return (
        <div>
            <h1>🌍 Countries of the World</h1>
            <ContinentSelector selected={selectedContinent} onChange={setSelectedContinent}/>
            <CountryListByContinent continentCode={selectedContinent}/>
        </div>
    )
}

export default App
