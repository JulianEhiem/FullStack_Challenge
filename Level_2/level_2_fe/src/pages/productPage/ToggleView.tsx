import styles from "./ToggleView.module.css"
import {useState} from "react";
import inactiveRow from "../../assets/rows_icon.svg"
import activeRow from "../../assets/rows_icon_active.svg"
import activeGrid from "../../assets/grid_icon_active.svg"
import inactiveGrid from "../../assets/grid_icon_inactive.svg"

enum viewTypes {
    R = "rowView",
    G = "gridView",
}

const ToggleView = () => {
    const [selection, setSelection] = useState<viewTypes>(viewTypes.G);

    return (
        <>
            <div className={styles.toggleContainer}>
                <div
                    role="button"
                    className={`${styles.toggleBtn} ${selection == viewTypes.R ? styles.active : ''}`}
                    onClick={() => setSelection(viewTypes.R)}>
                    <img src={selection == viewTypes.R ? activeRow : inactiveRow} alt="row icon"/>
                </div>
                <div
                    role="button"
                    className={`${styles.toggleBtn} ${selection == viewTypes.G ? styles.active : ''}`}
                    onClick={() => setSelection(viewTypes.G)}>
                    <img src={selection == viewTypes.G ? activeGrid : inactiveGrid} alt="grid icon"/>
                </div>
            </div>
        </>
    )
}

export default ToggleView