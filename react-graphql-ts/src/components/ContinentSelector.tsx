type Continent = {
    code: string;
    name: string;
}

type Props = {
    selected: string;
    onChange: (code: string) => void;
    disabled: boolean;
    continents: Continent[];
}

const ContinentSelector = ({selected, onChange, disabled, continents}: Props) => {
    return (
        <div>
            <label htmlFor="continent-select">Select a continent</label>
            <select
                name="cs"
                id="contient-select"
                value={selected}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}>
                {continents.map(({code, name}) => (
                    <option key={code} value={code}>{name}</option>
                ))}
            </select>
        </div>
    );
}

export default ContinentSelector;