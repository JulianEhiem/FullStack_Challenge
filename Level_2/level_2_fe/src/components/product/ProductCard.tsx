import styles from "./ProductCard.module.css"
import {ProductType} from "../../types.ts";
import {ProductTagPill} from "./ProductTagPill.tsx";
import {ProductFaveButton} from "./ProductFaveButton.tsx";

interface ProductCardProps {
    product: ProductType;
}

export const ProductCard = ({ product }: ProductCardProps ) => {

    const {imageId, tag, brand, name, quantity, price} = product;
    const imageURL = imageId ? `/src/assets/${imageId}.jpg` : undefined;

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