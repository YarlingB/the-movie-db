import React from 'react';
import styles from './search.module.css';

const SearchInput = () => {
  return (
    <div className={styles.input_wrapper}>
      <input placeholder="Search..." type="text" />
    </div>
  );
};

export default SearchInput;
