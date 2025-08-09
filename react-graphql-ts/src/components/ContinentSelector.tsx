type Continent = {
    code: string;
    name: string;
}

type Props = {
    selected: string;
    onChange: (code: string) => void
}

const continents: Continent[] = [
    {code: "AF", name: "Africa"},
    {code: "AN", name: "Antartica"},
    {code: "AS", name: "Asia"},
    {code: "EU", name: "Europe"},
    {code: "NA", name: "North America"},
    {code: "OC", name: "Oceania"},
    {code: "SA", name: "South America"}
]

const ContinentSelector = ({selected, onChange}: Props) => {
    return (
        <div>
            <label htmlFor="continent-select">Select a continent</label>
            <select
                name="cs"
                id="contient-select"
                value={selected}
                onChange={(e) => onChange(e.target.value)}>
                {continents.map(({code, name}) => (
                    <option key={code} value={code}>{name}</option>
                ))}
            </select>
        </div>
    );
}

export default ContinentSelector;