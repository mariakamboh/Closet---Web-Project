import React from "react";
import "../styles/Walima.css";
import Walima1 from "../assets/Walima1.jpg"; 
import Walima2 from "../assets/Walima2.jpg"; 
import Walima3 from "../assets/Walima3.jpg"; 
import Walima4 from "../assets/Walima4.jpg"; 
import Walima5 from "../assets/Walima5.jpg"; 
import { useNavigate } from 'react-router-dom'; 

const Walima = () => {
  const navigate = useNavigate();
  const dresses = [
    {  id:"WB1",price: "Rs 10000", image: Walima1 },
    {  id:"WB2",price: "Rs 12500", image: Walima2 },
    {  id:"WB3",price: "Rs 17000", image: Walima3 },
    {  id:"WB4",price: "Rs 21500", image: Walima4 },
    {  id:"WB5",price: "Rs 27000", image: Walima5 },
  ];
  const handleQuickView = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="walima-container">
      {dresses.map((dress) => (
        <div key={dress.id} className="card">
          <img src={dress.image} alt={dress.id} className="card-image" />
          <div className="card-info">
            <h3 className="dress-id">{dress.id}</h3> 
            <p className="dress-price">{dress.price}</p> 
          </div>
          <button 
            className="quick-view-button"
            onClick={() => handleQuickView(dress.id)}
          >
            Quick View
          </button>
        </div>
      ))}
    </div>
  );
};

export default Walima;
