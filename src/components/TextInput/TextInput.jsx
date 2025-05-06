import clsx from 'clsx'

import styles from './TextInput.module.css'

export function TextInput({ placeholder, endSlot, className }) {
  return (
    <div className={clsx(styles.inputContainer, endSlot && styles.endIndent, className)}>
      <input
        placeholder={placeholder}
        className={clsx(styles.input)}
      />
      {endSlot}
    </div>
  )
}