import React from "react";
import "../styles/ThreePiece.css";
import Three1 from "../assets/3pc1.jpg"; 
import Three2 from "../assets/3pc2.jpg"; 
import Three3 from "../assets/3pc3.jpg"; 
import Three4 from "../assets/3pc4.jpg"; 
import Three5 from "../assets/3pc5.jpg"; 
import { useNavigate } from 'react-router-dom'; 

const ThreePiece = () => {
  const navigate = useNavigate();
  const dresses = [
    { id:"TPG1",price: "Rs 10000", image: Three1 },
    { id:"TPG2",price: "Rs 12500", image: Three2 },
    { id:"TPG3",price: "Rs 17000", image: Three3 },
    { id:"TPG4",price: "Rs 20500", image: Three4 },
    { id:"TPG5",price: "Rs 21000", image: Three5 },
  ];
  const handleQuickView = (id) => {
    // Navigate to the product page with the corresponding product id
    navigate(`/product/${id}`);
  };

  return (
    <div className="three-container">
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

export default ThreePiece;
