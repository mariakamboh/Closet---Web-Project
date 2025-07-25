import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import Datepicker CSS
import '../styles/Product.css';

import Barat1 from "../assets/Baraat1.jpg"; 
import Barat2 from "../assets/Baraat2.jpg"; 
import Barat3 from "../assets/Baraat3.jpg"; 
import Barat4 from "../assets/Baraat4.jpg"; 
import Barat5 from "../assets/Baraat5.jpg"; 
import Mahndi1 from "../assets/Mehndi1.jpg"; 
import Mahndi2 from "../assets/Mehndi2.jpg"; 
import Mahndi3 from "../assets/Mehndi3.jpg"; 
import Mahndi4 from "../assets/Mehndi4.jpg"; 
import Mahndi5 from "../assets/Mehndi5.jpg"; 
import Sherwani1 from "../assets/Sherwani1.jpg"; 
import Sherwani2 from "../assets/Sherwani2.jpg"; 
import Sherwani3 from "../assets/Sherwani3.jpg"; 
import Sherwani4 from "../assets/Sherwani4.jpg"; 
import Sherwani5 from "../assets/Sherwani5.jpg";
import Three1 from "../assets/3pc1.jpg"; 
import Three2 from "../assets/3pc2.jpg"; 
import Three3 from "../assets/3pc3.jpg"; 
import Three4 from "../assets/3pc4.jpg"; 
import Three5 from "../assets/3pc5.jpg"; 
import Walima1 from "../assets/Walima1.jpg"; 
import Walima2 from "../assets/Walima2.jpg"; 
import Walima3 from "../assets/Walima3.jpg"; 
import Walima4 from "../assets/Walima4.jpg"; 
import Walima5 from "../assets/Walima5.jpg"; 

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(null); // State for selected date
  const [isBooked, setIsBooked] = useState(false); // State to track booking status

  const dresses = [
    { id: "BB1", price: "Rs 10000", image: Barat1 },
    { id: "BB2", price: "Rs 12500", image: Barat2 },
    { id: "BB3", price: "Rs 17000", image: Barat3 },
    { id: "BB4", price: "Rs 20000", image: Barat4 },
    { id: "BB5", price: "Rs 22500", image: Barat5 },
    { id: "MB1", price: "Rs 10000", image: Mahndi1 },
    { id: "MB2", price: "Rs 12500", image: Mahndi2 },
    { id: "MB3", price: "Rs 17000", image: Mahndi3 },
    { id: "MB4", price: "Rs 20500", image: Mahndi4 },
    { id: "MB5", price: "Rs 22500", image: Mahndi5 },
    { id: "SG1", price: "Rs 10000", image: Sherwani1 },
    { id: "SG2", price: "Rs 12500", image: Sherwani2 },
    { id: "SG3", price: "Rs 17000", image: Sherwani3 },
    { id: "SG4", price: "Rs 20500", image: Sherwani4 },
    { id: "SG5", price: "Rs 21500", image: Sherwani5 },
    { id: "TPG1", price: "Rs 10000", image: Three1 },
    { id: "TPG2", price: "Rs 12500", image: Three2 },
    { id: "TPG3", price: "Rs 17000", image: Three3 },
    { id: "TPG4", price: "Rs 20500", image: Three4 },
    { id: "TPG5", price: "Rs 21000", image: Three5 },
    { id: "WB1", price: "Rs 10000", image: Walima1 },
    { id: "WB2", price: "Rs 12500", image: Walima2 },
    { id: "WB3", price: "Rs 17000", image: Walima3 },
    { id: "WB4", price: "Rs 21500", image: Walima4 },
    { id: "WB5", price: "Rs 27000", image: Walima5 },
  ];

  const selectedDress = dresses.find((dress) => dress.id === id);

  const product = {
    id: id,
    name: `${id}`,
    price: selectedDress ? selectedDress.price : "Price not available",
    image: selectedDress ? selectedDress.image : "Image not available",
  };

  // Calculate the end date (5-day rental period)
  const calculateEndDate = (date) => {
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 4); // Include 5 days (4 days + selected day)
    return endDate;
  };

  const handleBookForRent = () => {
    if (!startDate) {
      alert("Please select a rental start date.");
      return;
    }
    const rentalEndDate = calculateEndDate(startDate);
    alert(`Dress booked from ${startDate.toDateString()} to ${rentalEndDate.toDateString()}`);
    setIsBooked(true); // Disable the button after booking
  };

  // Reset the booking status when the page is refreshed or component mounts
  useEffect(() => {
    setIsBooked(false);
  }, [id]);

  return (
    <div className="product-detail">
      <div className="product-info-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="product-price">Rent Price : {product.price}</p>

          <div className="security-box">
            <h3>Security</h3>
            <p className="security-amount">Rs 10,000</p>
          </div>

          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            placeholderText="Select a date"
            dateFormat="dd/MM/yyyy"
          />

          {startDate && (
            <p className="rental-period">
              Delivery Date: {startDate.toDateString()} <br />
              Pick Date: {calculateEndDate(startDate).toDateString()}
            </p>
          )}

          <br />
          <br />

          <button
            className="btn-primary"
            onClick={handleBookForRent}
            disabled={isBooked} // Disable button after booking
          >
            {isBooked ? "Booked" : "Book For Rent"}
          </button>
        </div>
      </div>

      <div className="event-section">
        <h2>Have an Event? Just #ClosetKaro</h2>
        <p>
          Don’t buy something you’ll only wear once or twice — Rent dresses at a fraction of the price!
          <br />
          Want to know how to book a dress? Click the button below.
        </p>

        <button className="renting-button" onClick={() => navigate("/rental-process")}>
          Renting Process
        </button>
      </div>
    </div>
  );
};

export default Product;
