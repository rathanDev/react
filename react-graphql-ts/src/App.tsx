import './App.css'
import CountryList from "./components/CountryList";
import ContinentSelector from "./components/ContinentSelector";
import {useState} from "react";
import {useContinents} from "./hooks/useContinents";
import {useCountries} from "./hooks/useCountries";

function App() {
    const {data: continents, isLoading: continentsLoading, error: continentsErr} = useContinents();
    const [selectedContinent, setSelectedContinent] = useState<string>("");

    const {data: countries, loading: countriesLoading, error: countriesError} = useCountries(selectedContinent);

    if (continentsLoading || countriesLoading) return <p>Continents loading...</p>
    if (!continents || continentsErr || countriesError) return <p>Continents err...</p>

    return (
        <div>
            <h1>🌍 Countries of the World</h1>
            <ContinentSelector selected={selectedContinent}
                               onChange={setSelectedContinent}
                               disabled={continentsLoading}
                               continents={continents}/>
            <CountryList countries={countries}/>
        </div>
    )
}

export default App;
