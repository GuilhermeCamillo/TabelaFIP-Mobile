import React, {useEffect, useState} from 'react';
import Home from '../containers/Home';
import api from '../services/api';

const HomePage = () => {
  const [items, setItems] = useState<{nome: string; codigo: string}[]>([]);

  useEffect(() => {
    const getFipTable = async () => {
      try {
        const response = await api.get('/carros/marcas');
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getFipTable();
  }, []);

  console.log(items);

  return <Home data={items} />;
};

export default HomePage;
