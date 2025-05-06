import clsx from 'clsx';

import Check from '../../icons/check.svg';

import styles from './Checkbox.module.css';

export function Checkbox({ checked }) {
  return (
    <div className={clsx(styles.checkbox, checked && styles.checked)}>
      {checked && <Check />}
    </div>
  );
}
