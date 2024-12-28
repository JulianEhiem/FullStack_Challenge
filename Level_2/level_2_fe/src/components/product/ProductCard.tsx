import styles from "./ProductCard.module.css"
import {ProductType} from "../../types.ts";
import {ProductTagPill} from "./ProductTagPill.tsx";
import {ProductFaveButton} from "./ProductFaveButton.tsx";
import formatCurrencyForDisplay from "../../utils/formatCurrencyForDisplay.ts";

interface ProductCardProps {
    product: ProductType;
    horizontal?: boolean;
}

export const ProductCard = ({ product, horizontal }: ProductCardProps ) => {
    const {imageId, tag, brand, name, quantity, price} = product;
    const imageURL = imageId ? `/src/assets/${imageId}.jpg` : undefined;

    const horizontalProductCard = () => {
        return (
            <>
                <div className={styles.horizontalCard}>
                    <div className={styles.horizontalProductImage}>
                        <img src={imageURL} alt="shoe"/>
                    </div>
                    <div className={styles.horizontalProductDescription}>
                        <div className={styles.horizontalProductTag}>
                            {tag ? <ProductTagPill tag={tag}/> : <div className={styles.emptyBox}></div>}
                            <ProductFaveButton/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                            <div className={styles.descriptionRows}>
                                <h4 className={styles.horizontalProductName}>{name || "Product Name"}</h4>
                            </div>

                            <div className={styles.descriptionRows}>
                                <h6 className={styles.productBrand}>{brand || "Brand Name"}</h6>
                            </div>
                        </div>

                        <div className={styles.descriptionRows} style={{marginTop: '16px'}}>
                            <h4 className={styles.productPrice}>{formatCurrencyForDisplay(price)}</h4>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', height: '100%', alignItems: 'flex-end'}}>
                            <h4 className={styles.horizontalProductStock}>{quantity || 3} items left!</h4>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const verticalProductCard = () => {
        return (
            <>
                <div className={styles.card}>
                    <div className={styles.productImage}>
                        <div className={styles.productTag}>
                            {tag && <ProductTagPill tag={tag}/>}
                        </div>
                        <img src={imageURL} alt="shoe"/>

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
                            <h4 className={styles.productStock}>{quantity || 3} items left!</h4>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {horizontal ? horizontalProductCard() : verticalProductCard()}
        </>
    )
}