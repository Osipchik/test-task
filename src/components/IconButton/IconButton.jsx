import clsx from 'clsx';
import styles from './IconButton.module.css';

export function IconButton({ children, disabled, active }) {
  return (
    <button
      disabled={disabled}
      className={clsx(styles.button, active && styles.active)}
    >
      {children}
    </button>
  );
}
