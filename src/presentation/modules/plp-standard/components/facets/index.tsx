import React from 'react';
import styles from '../../styles.module.css';
import { FacetsContainer } from './styles';

const Facets = () => {
  return (
    <div className={styles.facets}>
      <FacetsContainer>
        <span>facets</span>
      </FacetsContainer>
    </div>
  );
};

export default Facets;
