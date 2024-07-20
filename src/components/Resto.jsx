import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Resto = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les éléments du menu depuis l'API
    const fetchMenu = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setMenu(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des éléments du menu :', error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      <h2>Menu du Restaurant</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.url}</p>
            {/* <span>Prix : {item.price} €</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resto;
