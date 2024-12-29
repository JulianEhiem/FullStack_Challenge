import * as React from 'react';
import {Menu, MenuItem} from "@mui/material";
import styles from "./SortFilter.module.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import {sortType} from "../../types.ts";

interface sortFilterProps {
    updateProductOrder: (data: string) => void;
}

const SortFilter = ({ updateProductOrder }: sortFilterProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedSort, setSelectedSort] = React.useState<sortType >(sortType.featured);

    const filterOptions = Object.values(sortType);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option: sortType) => {
        setAnchorEl(null);
        if(typeof option === "string") {
            setSelectedSort(option);
            updateProductOrder(option);
        }
    };

    return (
        <div>
            <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={styles.sortButton}
            >
                <div className={styles.buttonContent}>
                    <FilterListIcon color="disabled" />
                    <span className={styles.btnText}>Sort by: </span>
                    {selectedSort}
                </div>
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {filterOptions.map((option, index) => (
                    <MenuItem key={index} onClick={() => handleClose(option)}>{option}</MenuItem>
                ))}
            </Menu>
        </div>
    )
}

export default SortFilter;