import React from "react";
import "../styles/Mehndi.css";
import Mahndi1 from "../assets/Mehndi1.jpg"; 
import Mahndi2 from "../assets/Mehndi2.jpg"; 
import Mahndi3 from "../assets/Mehndi3.jpg"; 
import Mahndi4 from "../assets/Mehndi4.jpg"; 
import Mahndi5 from "../assets/Mehndi5.jpg"; 
import { useNavigate } from 'react-router-dom'; 

const Mehndi = () => {
  const navigate = useNavigate();
  const dresses = [
    { id:"MB1",price: "Rs 10000", image: Mahndi1 },
    { id:"MB2",price: "Rs 12500", image: Mahndi2 },
    { id:"MB3",price: "Rs 17000", image: Mahndi3 },
    { id:"MB4",price: "Rs 20500", image: Mahndi4 },
    { id:"MB5",price: "Rs 22500", image: Mahndi5 },
  ];
  const handleQuickView = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="mehndi-container">
      {dresses.map((dress) => (
        <div key={dress.id} className="card">
          <img src={dress.image} alt={dress.id} className="card-image" />
          <div className="card-info">
            <h3 className="dress-id">{dress.id}</h3> 
            <p className="dress-price">{dress.price}</p> 
          </div>
          <button 
            className="quick-view-button"
            onClick={() => handleQuickView(dress.id)}  // Pass the id to the handleQuickView function
          >
            Quick View
          </button>
        </div>
      ))}
    </div>
  );
};

export default Mehndi;
