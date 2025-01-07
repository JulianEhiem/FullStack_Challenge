import styles from "./ToggleView.module.css"
import inactiveRow from "../../assets/rows_icon.svg"
import activeRow from "../../assets/rows_icon_active.svg"
import activeGrid from "../../assets/grid_icon_active.svg"
import inactiveGrid from "../../assets/grid_icon_inactive.svg"
import {viewTypes} from "../../types.ts";

interface toggleViewTypes {
    toggleState: viewTypes;
    setGrid: () => void;
    setRow: () => void;
    hide?: boolean
}

const ToggleView = ({toggleState = viewTypes.G, setGrid, setRow, hide}: toggleViewTypes) => {

    return (
        <>
            <div className={styles.toggleContainer} style={{display: `${hide ? 'none' : 'flex'}`}}>
                <div
                    role="button"
                    className={`${styles.toggleBtn} ${toggleState == viewTypes.R ? styles.active : ''}`}
                    onClick={setRow}>
                    <img src={toggleState == viewTypes.R ? activeRow : inactiveRow} alt="row icon"/>
                </div>
                <div
                    role="button"
                    className={`${styles.toggleBtn} ${toggleState == viewTypes.G ? styles.active : ''}`}
                    onClick={setGrid}>
                    <img src={toggleState == viewTypes.G ? activeGrid : inactiveGrid} alt="grid icon"/>
                </div>
            </div>
        </>
    )
}

export default ToggleView