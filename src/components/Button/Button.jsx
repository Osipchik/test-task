import clsx from 'clsx';

import styles from './Button.module.css';

export function Button({
  variant = 'outline',
  startIcon,
  children,
  onClick,
  disabled,
}) {
  return (
    <button
      className={clsx(styles.button, styles[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon}
      {children}
    </button>
  )
}
