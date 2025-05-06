import { Toolbar } from './Toolbar';
import { Table } from './Table';
import { Pagination } from '../components/Pagination';
import { Dropdown } from '../components/Dropdown';

import styles from './Companies.module.css';

const pages = ['1', '2', '3', '4', '5', '...', '12']

export function Companies() {
  return (
    <main className={styles.companies}>
      <h1 className={styles.title}>
        Companies
      </h1>
      <Toolbar />
      <Table />

      <div className={styles.pagination}>
        <Pagination
          pages={pages}
          active="2"
        />
        <Dropdown text="50 results per page" />
      </div>
    </main>
  );
}
