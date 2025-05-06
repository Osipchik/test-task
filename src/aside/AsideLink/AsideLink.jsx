import clsx from 'clsx';

import styles from './AsideLink.module.css';

export function AsideLink({ icon, url, active }) {
  return (
    <a
      className={clsx(
        styles.asideLink,
        active && styles.active,
      )}
      href={url}
    >
      {icon}
    </a>
  )
}