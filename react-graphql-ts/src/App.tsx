import './App.css'
import CountryListByContinent from "./components/CountryListByContinent";

function App() {

    return (
        <div>
            <h1>🌍 Countries of the World</h1>
            <CountryListByContinent continentCode="AS"/>
        </div>
    )
}

export default App
