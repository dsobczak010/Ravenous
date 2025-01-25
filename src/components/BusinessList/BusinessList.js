import React from 'react';
import Business from '../Business/Business';
import styles from "./BusinessList.module.css";

function BusinessList({businesses}) {
    // let businesses[];
    return (
        <div className={styles.businessList}>
          {businesses.map((business, index) => (
            <Business key={business.id} business={business} />
          ))}
        </div>
    );

}

export default BusinessList;