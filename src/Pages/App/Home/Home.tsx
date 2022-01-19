import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { getDragons } from '../../../services/dragons';
import { DragonProps } from '../../../Types/dragons';
import { sortByName } from '../../../utils';

type getDragonProps = DragonProps & {
  createdAt: Date;
  id: number;
};

const Home: React.FC = () => {
  const [dragons, setDragons] = useState<getDragonProps[]>([]);
  const loadAPI = async () => {
    const response = await getDragons();
    const dragons = sortByName(response.data);
    setDragons(dragons);
  };

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <>
      <Header />
      <div>
        {dragons.map((dragon, index) => (
          <div key={index}>{dragon.name}</div>
        ))}
      </div>
    </>
  );
};

export default Home;
