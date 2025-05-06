import clsx from 'clsx';

import styles from './Tag.module.css';

export function Tag({
  variant = 'primary',
  text,
}) {
  return (
    <div className={clsx(styles.tag, styles[variant])}>
      {text}
    </div>
  )
};
