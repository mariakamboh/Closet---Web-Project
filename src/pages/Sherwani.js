import React from "react";
import "../styles/Sherwani.css";
import Sherwani1 from "../assets/Sherwani1.jpg"; 
import Sherwani2 from "../assets/Sherwani2.jpg"; 
import Sherwani3 from "../assets/Sherwani3.jpg"; 
import Sherwani4 from "../assets/Sherwani4.jpg"; 
import Sherwani5 from "../assets/Sherwani5.jpg"; 
import { useNavigate } from 'react-router-dom'; 

const Sherwani = () => {
  const navigate = useNavigate();
  const dresses = [
    {  id:"SG1",price: "Rs 10000", image: Sherwani1 },
    {  id:"SG2",price: "Rs 12500", image: Sherwani2 },
    {  id:"SG3",price: "Rs 17000", image: Sherwani3 },
    {  id:"SG4",price: "Rs 20500", image: Sherwani4 },
    {  id:"SG5",price: "Rs 21500", image: Sherwani5 },
  ];
  const handleQuickView = (id) => {
    // Navigate to the product page with the corresponding product id
    navigate(`/product/${id}`);
  };

  return (
    <div className="sherwani-container">
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

export default Sherwani;
