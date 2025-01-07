import styles from "./ProductFaveButton.module.css"

export const ProductFaveButton = () => {
    return (
        <>
            <button className={styles.faveButton}>
                <img src="/src/assets/img.png" alt="heart icon" />
            </button>
        </>
    )
}