import React from 'react';
import Card from '../Components/Card';
import { useContextGlobal } from "../Components/utils/global.context";
import styles from '../Styles/Home.module.css'

const Home = () => {
  const { state } = useContextGlobal();

  return (
    <main>
      <h1>Doctores</h1>
      <div className={styles.home}>
        {state.doctors.map((doctor) => (
          <Card key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </main>
  );
};

export default Home;
