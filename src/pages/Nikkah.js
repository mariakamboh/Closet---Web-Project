import React from "react";
import "../styles/Nikkah.css";
import Nikkah1 from "../assets/Nikkah1.jpg"; 
import Nikkah2 from "../assets/Nikkah2.jpg"; 
import Nikkah3 from "../assets/Nikkah3.jpg"; 
import Nikkah4 from "../assets/Nikkah4.jpg"; 
import Nikkah5 from "../assets/Nikkah5.jpg"; 
import { useNavigate } from 'react-router-dom'; 

const Nikkah = () => {
  const navigate = useNavigate();
  const dresses = [
    {  id:"NB1", price: "Rs 10000", image: Nikkah1 },
    {  id:"NB2", price: "Rs 12500", image: Nikkah2 },
    {  id:"NB3", price: "Rs 17000", image: Nikkah3 },
    {  id:"NB4", price: "Rs 20500", image: Nikkah4 },
    {  id:"NB5", price: "Rs 22000", image: Nikkah5 },
  ];
  const handleQuickView = (id) => {
    // Navigate to the product page with the corresponding product id
    navigate(`/product/${id}`);
  };

  return (
    <div className="nikkah-container">
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

export default Nikkah;
