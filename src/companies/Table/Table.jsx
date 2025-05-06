import clsx from 'clsx';

import { Tag } from '../../components/Tag';
import { Checkbox } from '../../components/Checkbox';

import styles from './Table.module.css';

import Grid from '../../icons/grid.svg';

const data = [
  {
    id: 1,
    name: 'Lorem Ipsum inc',
    types: ['Family Office'],
    aum: '567.8',
    foundedYear: '1990 y.',
    teams: ['Jonny Smitter', '+7']
  },
  {
    id: 2,
    name: 'Lorem Ipsum inc',
    types: ['Family Office'],
    aum: '999.34',
    foundedYear: '1990 y.',
    teams: ['Jonny Smitter']
  },
  {
    id: 3,
    name: 'Lorem Ipsum inc',
    types: ['Family Office', 'Angel'],
    aum: '999.34',
    foundedYear: '2000 y.',
    teams: ['Jonny Smitter']
  },
  {
    id: 4,
    name: 'Lorem Ipsum inc',
    types: ['Family Office'],
    aum: '999.34',
    foundedYear: '2002 y.',
    teams: ['Jonny Smitter']
  },
  {
    id: 5,
    name: 'Lorem Ipsum inc',
    types: ['Family Office'],
    aum: '999.34',
    foundedYear: '2002 y.',
    teams: ['Jonny Smitter']
  },
  {
    id: 6,
    name: 'Lorem Ipsum inc',
    types: ['Family Office'],
    aum: '999.34',
    foundedYear: '1990 y.',
    teams: ['Jonny Smitter']
  },
  {
    id: 7,
    name: 'Lorem Ipsum inc',
    types: ['Family Office', 'Angel'],
    aum: '999.34',
    foundedYear: '2000 y.',
    teams: ['Jonny Smitter']
  },
  {
    id: 8,
    name: 'Lorem Ipsum inc',
    types: ['Family Office'],
    aum: '999.34',
    foundedYear: '2002 y.',
    teams: ['Jonny Smitter']
  },
  {
    id: 9,
    name: 'Lorem Ipsum inc',
    types: ['Family Office'],
    aum: '999.34',
    foundedYear: '2002 y.',
    teams: ['Jonny Smitter']
  }
];

export function Table() {
  const columns = [
    {
      id: 1,
      head: <Checkbox checked />,
      getContent: ({ id }) => <Checkbox checked={[1, 6].includes(id)} />
    },
    {
      id: 2,
      head: 'Company Name',
      getContent: ({ name }) => name,
    },
    {
      id: 3,
      head: 'Company Type',
      getContent: ({ types }) => (
        <div className={styles.tagsContainer}>
          {types.map(type => <Tag text={type} />)}
        </div>
      ),
    },
    {
      id: 4,
      head: 'AUM, $mln.',
      getContent: ({ aum }) => aum,
    },
    {
      id: 5,
      head: 'Founded year',
      getContent: ({ foundedYear }) => foundedYear,
    },
    {
      id: 6,
      head: 'Known Team',
      getContent: ({ teams }) => (
        <div className={styles.tagsContainer}>
          {teams.map(team => <Tag text={team} variant="success" />)}
        </div>
      ),
    },
    {
      id: 7,
      head: <Grid />
    }
  ];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(({ head, id }) => (
            <th
              key={id}
              className={styles.headCell}
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className={styles.headerIndent} />
        {data.map((rowData) => (
          <tr key={rowData.id}>
            {columns.map(({ getContent, id }, index) => {
              const Tag = [0, 1].includes(index) ? 'td' : 'th';

              return (
                <Tag
                  kwy={`${rowData.id}-${id}`}
                  className={clsx(styles.cell, [0, 1].includes(index) && styles.asideCell)}
                >
                  {getContent?.(rowData)}
                </Tag>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
