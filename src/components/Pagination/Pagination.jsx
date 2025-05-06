import { IconButton } from '../IconButton';

import DoubleChevronLeft from '../../icons/double-chevron-left.svg';
import ChevronLeft from '../../icons/chevron-left.svg';
import DoubleChevronRight from '../../icons/double-chevron-right.svg';
import ChevronRight from '../../icons/chevron-right.svg';

import styles from './Pagination.module.css';

export function Pagination({ pages, active }) {
  return (
    <div className={styles.pagination}>
      <IconButton>
        <DoubleChevronLeft />
      </IconButton>
      <IconButton>
        <ChevronLeft />
      </IconButton>

      {pages.map(page => (
        <IconButton
          key={page}
          active={page === active}
        >
          {page}
        </IconButton>
      ))}

      <IconButton disabled>
        <ChevronRight />
      </IconButton>
      <IconButton disabled>
        <DoubleChevronRight />
      </IconButton>
    </div>
  );
}
