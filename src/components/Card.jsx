import '../../style/Card.scss';
import { Link } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import AppartementRepository from '../repository/AppartementRepository'; // Importation de la classe Repository

const Card = () => {
  // État pour stocker les données récupérées
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fonction pour charger les données depuis le fichier JSON via Repository
    const fetchData = async () => {
      const repository = new AppartementRepository(); 
    
      setData(repository.getAll()); // Mise à jour de l'état avec les données récupérées
    };

    fetchData();
  }, []); // Tableau vide pour exécuter une seule fois lors du montage

  return (
    <div className="page-container">
      <div className="card-container">
        {/* Parcours et affichage des données */}
        {data.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="link-style">
            <img
              src={item.cover}
              alt="Image Appartement à louer"
              className="card-image"
            />
            <p className="card-title">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;