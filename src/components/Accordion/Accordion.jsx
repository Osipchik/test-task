import styles from './Accordion.module.css';

import Chevron from '../../icons/chevron.svg';

export function Accordion({ icon, text, children }) {
  return (
    <details>
      <summary className={styles.toggle}>
        {icon}
        <span>{text}</span>
        <Chevron className={styles.toggleIcon} />
      </summary>
      {children}
    </details>
  );
}