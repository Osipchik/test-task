import { AsideLink } from './AsideLink';
import styles from './Aside.module.css';

import SideBar from '../icons/sidebar.svg';
import Person from '../icons/person.svg';
import Apartment from '../icons/apartment.svg';
import Orders from '../icons/shopping.svg'
import Search from '../icons/search.svg'
import Heart from '../icons/heart.svg'
import avatar from '../assets/avatar.jpg';

export function Aside() {
  return (
    <aside className={styles.aside}>
      <SideBar className={styles.logoContainer}/>

      <div className={styles.asideList}>
        <AsideLink
          icon={<Apartment />}
          url="#"
          active
        />
        <AsideLink
          icon={<Person />}
          url="#"
        />
        
        <div className={styles.divider} />

        <AsideLink
          icon={<Orders />}
          url="#"
        />

        <AsideLink
          icon={<Heart />}
          url="#"
        />

        <AsideLink
          icon={<Search />}
          url="#"
        />
      </div>

      <img
        src={avatar}
        className={styles.avatar}
      />
    </aside>
  )
};
