import React from 'react';
import Card from '../Components/Card';
import { useDoctorStates } from '../Components/utils/global.context';

const Home = () => {
  const { state } = useDoctorStates();
  const { doctors } = state;
  const { theme } = state;  // Asumiendo que tienes el tema en el estado global

  return (
    <main className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Doctores</h1>
      <div className='card-grid'>
        {doctors.map((doctor) => (
          <Card key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </main>
  );
};

export default Home;
