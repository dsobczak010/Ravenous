import React from 'react';
import styles from "./Business.module.css";

function Business({business}) {
    return (
        <div className={styles.business}>
            
            <img 
            className={styles["image"]} 
            src={business.imageSrc} 
            alt={business.name} 
            // style={{ width: '300px', height: '300px', borderRadius: '8px' }} 
            />
            
            <div className={styles.businessInfo}>
                <div className={styles.businessAddress}>
                    <h2 className={styles.businessName}>{business.name}</h2>
                    <p>{business.address}</p>
                    <p>{business.city}, {business.state} {business.zipCode}</p>
                </div>
                
                <div className={styles.businessCategory}>
                    <p className={styles.category}>{business.category}</p>
                    <p className={styles.rating}>{business.rating} stars</p>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Business;