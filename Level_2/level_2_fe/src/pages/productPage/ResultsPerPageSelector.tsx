import styles from './ResultsPerPageSelector.module.css';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";


interface resultsPerPagePropType {
    initial: number;
    handleChange: () => void;
    options: number[];
}

const ResultsPerPageSelector = ({initial, handleChange, options}) => {

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                    <Select
                        id="demo-simple-select"
                        value={initial}
                        onChange={handleChange}
                    >
                        {options.map(option => (
                            <MenuItem key={option} value={option}>{option + ''}</MenuItem>
                        ))}
                    </Select>
            </Box>
        </>
    )
}

export default ResultsPerPageSelector;