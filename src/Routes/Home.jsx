import React from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from "../Components/utils/global.context";
import styles from '../Styles/Home.module.css';

const Home = () => {
  const { state } = useContextGlobal();

  // Determinar la clase de tema actual
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <main className={themeClass}>
      <div className={styles.text}>Doctores</div>
      <div className={styles.home}>
        {state.doctors.map((doctor) => (
          <Card key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </main>
  );
};

export default Home;
