import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";

interface resultsPerPagePropType {
    initial: string;
    handleChange: (e:SelectChangeEvent) => void;
    options: number[];
}

const ResultsPerPageSelector = ({initial, handleChange, options}:resultsPerPagePropType) => {
    return (
        <div>
            <FormControl sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }} size="small" >
                    <div style={{color: "#757883"}}>
                        Show result:
                    </div>
                    <Select
                        value={initial}
                        onChange={handleChange}
                        sx={{ width: '70px'}}
                        size="small"
                    >
                        {options.map(option => (
                            <MenuItem key={option} value={option}>{option + ''}</MenuItem>
                        ))}
                    </Select>
            </FormControl>
        </div>
    )
}

export default ResultsPerPageSelector;