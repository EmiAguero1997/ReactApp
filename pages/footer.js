import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import styles from './styles.module.css'

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.footerContainer}>
        <Tabs value={value} onChange={handleChange} className={styles.footer} aria-label="icon tabs example">
            <div className={styles.tabContainer}>
            <Tab icon={<PhoneIcon />} aria-label="phone" />
            <Tab icon={<FavoriteIcon />} aria-label="favorite" />
            <Tab icon={<PersonPinIcon />} aria-label="person" />
            <h3>Desarrollado por Emiliano Aguero</h3>
            </div>
            
        </Tabs>
    </div>
  );
}
