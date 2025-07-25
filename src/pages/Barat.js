import React from "react";
import "../styles/Barat.css";
import Barat1 from "../assets/Baraat1.jpg"; 
import Barat2 from "../assets/Baraat2.jpg"; 
import Barat3 from "../assets/Baraat3.jpg"; 
import Barat4 from "../assets/Baraat4.jpg"; 
import Barat5 from "../assets/Baraat5.jpg"; 
import { useNavigate } from 'react-router-dom';  

const Barat = () => {
  const navigate = useNavigate();  

  const dresses = [
    {  id:"BB1", price: "Rs 10000", image: Barat1 },
    {  id:"BB2", price: "Rs 12500", image: Barat2 },
    {  id:"BB3", price: "Rs 17000", image: Barat3 },
    {  id:"BB4", price: "Rs 20000", image: Barat4 },
    {  id:"BB5", price: "Rs 22500", image: Barat5 },
  ];

  const handleQuickView = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="barat-container">
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

export default Barat;
