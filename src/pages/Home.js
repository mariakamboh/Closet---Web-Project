import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import homeImage from "../assets/home.jpg";
import Mehndi1 from "../assets/Mehndi1.jpg";
import Nikkah4 from "../assets/Nikkah4.jpg";
import Barat5 from "../assets/Baraat5.jpg";
import Walima4 from "../assets/Walima4.jpg";
import Sherwani4 from "../assets/Sherwani4.jpg";
import ThreePiece3 from "../assets/3pc3.jpg";
import Love from "../assets/why_love_renting.jpg"

const Home = () => {
  const navigate = useNavigate();
  const firstRowCards = [
    { id: 1, title: "Mahndi", image: Mehndi1, route: "/bridal/mahendi" },
    { id: 2, title: "Nikkah", image: Nikkah4, route: "/bridal/nikkah" },
    { id: 3, title: "Barat", image: Barat5, route: "/bridal/barat" },
  ];

  const secondRowCards = [
    { id: 4, title: "Walima", image: Walima4, route: "/bridal/walima" },
    { id: 5, title: "Sherwani", image: Sherwani4, route: "/groom/sherwani" },
    { id: 6, title: "3-Piece", image: ThreePiece3, route: "/groom/three-piece" },
  ];

  return (
    <div className="home">
      <div className="image-section">
        <img src={homeImage} alt="Main Banner" />
      </div>
      <div className="cards-container">
        {firstRowCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <button onClick={() => navigate(card.route)}>Rent Now</button>
          </div>
        ))}
      </div>
      <div className="cards-container">
        {secondRowCards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <button onClick={() => navigate(card.route)}>Rent Now</button>
          </div>
        ))}
      </div>
      {/* Why We Love Renting Section */}
      <div className="why-we-love">
        <h2>Why We Love Renting?</h2>
        <div className="why-we-love-container">
          <img src={Love} />
          <div className="why-we-love-content">
            <div className="reason">
              <span>⭐</span>
              <p>Smooth Experience</p>
            </div>
            <div className="reason">
              <span>💰</span>
              <p>Savings Up to 90%</p>
            </div>
            <div className="reason">
              <span>👗</span>
              <p>Try Out New Looks at Every Event</p>
            </div>
          </div>
        </div>
      </div>


      <div className="event-section">
        <h2>Have an Event? Just #ClosetKaro</h2>
        <p>
          Don’t buy something you’ll only wear once or twice — Rent dresses at a fraction of the price!<br />
          Want to know how to book a dress? Click the button below.
        </p>

        <button className="renting-button" onClick={() => navigate("/rental-process")}>Renting Process</button>
      </div>
    </div>
  );
};

export default Home;