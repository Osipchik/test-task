import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import styles from './Toolbar.module.css';

import Heart from '../../icons/heart-sm.svg';
import Filter from '../../icons/filter.svg';
import Save from '../../icons/save.svg';
import Search from '../../icons/search-sm.svg';

export function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search the company"
        endSlot={<Search />}
        className={styles.input}
      />
      <Button startIcon={<Filter />}>
        Filters
      </Button>
      <Button
        startIcon={<Save />}
        disabled
      >
        Save this Search
      </Button>
      <Button startIcon={<Heart />}>
        Add to Favorites
      </Button>
    </div>
  );
}
