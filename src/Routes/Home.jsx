import React from 'react';
import Card from '../Components/Card';
import { useDoctorsStates } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useDoctorsStates();

  return (
    <main>
      <h1>Doctores</h1>
      <div className='card-grid'>
        {state.doctors.map((doctor) => (
          <Card key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </main>
  );
};

export default Home;
