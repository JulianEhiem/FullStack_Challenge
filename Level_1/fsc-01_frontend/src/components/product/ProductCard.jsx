import styles from "./ProductCard.module.css";

// eslint-disable-next-line react/prop-types
export const ProductTagPill = ({ tag }) => {
    return (
        <div className={styles.pill}>
            <p>{tag}</p>
        </div>
    )
}

export const ProductFaveButton = () => {
    return (
        <>
            <button className={styles.faveButton}>
                <img src="/src/assets/img.png" alt="shoe"/>
            </button>
        </>
    )
}

const createURLFromImageID = (id) => {
    return `/src/assets/${id}.jpg`;
}

// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {
    // eslint-disable-next-line react/prop-types
    const {imageId, tag, brand, name, quantity, price} = product;
    const imageURL = imageId ? createURLFromImageID(imageId) : undefined;

    return (
        <>
            <div className={styles.card}>
                <div className={styles.productImage}>
                    <div className={styles.productTag}>
                        {tag && <ProductTagPill tag={tag}/>}
                    </div>
                    <img src={imageURL} alt="shoe" />

                </div>
                <div className={styles.productDescription}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                        <div className={`${styles.descriptionRows} ${styles.descriptionRow1} `}>
                            <h6 className={styles.productBrand}>{brand || "Brand Name"}</h6>
                            <ProductFaveButton/>
                        </div>
                        <div className={`${styles.descriptionRows} ${styles.descriptionRow2} `}>
                            <h4 className={styles.productName}>{name || "Product Name"}</h4>
                        </div>
                    </div>

                    <div className={`${styles.descriptionRows} ${styles.descriptionRow3} `}>
                        <h4 className={styles.productPrice}>${price || '40.00'}</h4>
                        <h4 className={styles.productStock}>{quantity || 3 } items left!</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

