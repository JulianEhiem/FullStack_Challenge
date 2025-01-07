import styles from "./ProductTagPill.module.css"

interface ProductTagPillPropType {
    tag: string;
}

export const ProductTagPill = ({ tag }: ProductTagPillPropType) => {
    return (
        <div className={styles.pill}>
            <p>{tag}</p>
        </div>
    )
}