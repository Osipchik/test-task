import Chevron from '../../icons/chevron.svg';

import styles from './Dropdown.module.css';

export function Dropdown({ text }) {
  return (
    <div className={styles.dropdown}>
      {text}
      <Chevron />
    </div>
  );
}
