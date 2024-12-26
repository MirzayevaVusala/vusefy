import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search"
import top1 from "../images/top1.jpg";
import top2 from "../images/top2.jpg";
import top3 from "../images/top3.jpg";
import top4 from "../images/top4.jpg";
import top5 from "../images/top5.jpg";
import top6 from "../images/top6.jpg";
import top7 from "../images/top7.jpg";
import top8 from "../images/top8.jpg";
import top9 from "../images/top9.jpg";
import top10 from "../images/top10.jpg";
import "./DestinationStyles.css";

const Destination = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [filteredDestinations, setFilteredDestinations] = useState([
    "Rome",
    "Florence",
    "Venice",
    "Cinque Terre",
    "Milan",
    "Capri",
    "Sardinia",
    "Tuscany, Italy",
    "Sicily",
    "Amalfi Coast"
  ]);
  const navigate = useNavigate();

  const handleAddToFavorites = (destination) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(destination)) {
        const updatedFavorites = [...prevFavorites, destination];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return updatedFavorites;
      }
      return prevFavorites;
    });
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  const handleSearchResults = (results) => {
    setFilteredDestinations(results);
  };

  return (
    <main>
      <div className="destination">
        <h2 className="popular-h2">Popular Destinations</h2>
        <Search
          data={[
            "Rome",
            "Florence",
            "Venice",
            "Cinque Terre",
            "Milan",
            "Capri",
            "Sardinia",
            "Tuscany, Italy",
            "Sicily",
            "Amalfi Coast"
          ]}
          onSearchResults={handleSearchResults}
        />
        {filteredDestinations.map((destination, index) => {
          const destinationImages = [
            top1,
            top2,
            top3,
            top4,
            top5,
            top6,
            top7,
            top8,
            top9,
            top10
          ];

          let description = "";
          switch (destination) {
            case "Rome":
              description = "A standard stop on many European vacation itineraries, Rome is a cultural and historical powerhouse.";
              break;
            case "Florence":
              description = "Situated in Tuscany, Florence is known for its beautiful piazzas and art.";
              break;
            case "Venice":
              description = "Famous for its canals, Venice is a unique northern Italian city.";
              break;
            case "Cinque Terre":
              description = "Cinque Terre consists of five picturesque towns on the Ligurian coast.";
              break;
            case "Milan":
              description = "Milan is known for its high fashion and iconic fashion houses.";
              break;
            case "Capri":
              description = "Capri is a small island with stunning scenery, known for the Blue Grotto.";
              break;
            case "Sardinia":
              description = "Sardinia is known for its beaches and rugged landscapes.";
              break;
            case "Tuscany, Italy":
              description = "Tuscany offers rolling hills, charming villages, and world-class wine.";
              break;
            case "Sicily":
              description = "Sicily is the largest Mediterranean island, rich in history and natural beauty.";
              break;
            case "Amalfi Coast":
              description = "The Amalfi Coast offers breathtaking cliffside views and vibrant seaside towns.";
              break;
            default:
              description = "A beautiful and unique Italian destination.";
          }

          return (
            <div key={destination} className="destination-item">
              <div className="des-text">
                <h2>{destination}</h2>
                <p>{description}</p>
                <button
                  className="favorite-btn"
                  onClick={() => handleAddToFavorites(destination)}
                >
                  Add to Favorites
                </button>
              </div>
              <div className="image">
                <img alt={destination} src={destinationImages[index]} />
              </div>
            </div>
          );
        })}

        <button className="go-to-favorites" onClick={goToFavorites}>
          Go to Favorites
        </button>
      </div>
    </main>
  );
};

export default Destination;
