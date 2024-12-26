import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FavoriteStyle.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const goBack = () => {
    navigate("/");
  };

  const handleRemoveFavorite = (destination) => {
    const updatedFavorites = favorites.filter(fav => fav !== destination);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      <h1>Your Favorite Destinations</h1>
      <div className="favorites-list">
        {favorites.length > 0 ? (
          favorites.map((destination, index) => (
            <div key={index} className="favorite-item">
              <h2>{destination}</h2>
              <button onClick={() => handleRemoveFavorite(destination)}>X</button>
            </div>
          ))
        ) : (
          <p>You have no favorites yet!</p>
        )}
      </div>
      <button onClick={goBack}>Back to Home</button>
    </div>
  );
};

export default Favorites;
