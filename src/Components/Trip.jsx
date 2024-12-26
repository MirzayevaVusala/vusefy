import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../images/trip1.jpg";
import Trip2 from "../images/trip2.jpg";
import Trip3 from "../images/trip3.jpg";
import Trip4 from "../images/trip4.jpg";
import Trip5 from "../images/trip5.jpg";
import Favorites from "./Favorites";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Trip() {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
  const navigate = useNavigate();

  const handleAddToFavorites = (trip) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(trip)) {
        const updatedFavorites = [...prevFavorites, trip];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return updatedFavorites;
      }
      return prevFavorites;
    });
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div>
      <h1>Recent Trips</h1>
      <div className="tripcard-container">
        <div className="tripcard">
          <TripData
            image={Trip1}
            heading="Wonderful Christmas 2024"
            text="The magical Christmas atmosphere envelops Italy, with many events to experience, amidst a thousand and one emotions. Large urban centres as well as tiny villages are ready to welcome you and amaze you with the warmth of local traditions, live nativity scenes and craft exhibitions, with the colours of festively decorated streets and squares hosting characteristic markets, with the lights and melodies of concerts, shows and folklore events."
          /> <button className="favorite-btn" onClick={() => handleAddToFavorites("Wonderful Christmas 2024")}>
            Add to Favorites
          </button>
        </div>
        <div className="tripcard">
          <TripData
            image={Trip2}
            heading="Travelling to the mountains from Naples: here's where to go"
            text="If you are in Campania and are dreaming of a winter break in the mountains, in this article you will find the best peaks that can be accessed from Naples, either by car or by train, so you can organise your next weekend in the snow in Campania. A relaxing getaway with good food, sport, fun and lots of snow."
          /> <button className="favorite-btn" onClick={() => handleAddToFavorites("Travelling to the mountains")}>
            Add to Favorites
          </button>
        </div>
        <div className="tripcard">
          <TripData
            image={Trip3}
            heading="From wearing red, to eating lentils: New Year's traditions in Italy"
            text="Whether tone on tone or combined with gold and silver, it is always the star of the table and of the outfit, even if only as an accessory: wearing red brings good luck, or at least that is what people say. This is just one of Italy's many New Year's traditions. Here's everything you need to know to embrace 2023 in perfect Italian style amidst rituals, superstitions and gourmet treats at the table."
          /> <button className="favorite-btn" onClick={() => handleAddToFavorites("New Year's traditions in Italy")}>
            Add to Favorites
          </button>
        </div>
        <div className="tripcard">
          <TripData
            image={Trip4}
            heading="The Tremiti islands can also be visited in winter, think fishing"
            text="The small Apulian archipelago is an ideal destination in every season, perhaps even more so during the cold months, to enjoy the mild climate, unspoiled nature and winter seas. You can enjoy dedicating yourself to a reflective activity such as fishing or kayaking around the islands without any summer chaos."
          />
          <button className="favorite-btn" onClick={() => handleAddToFavorites("The Tremiti islands")}>
            Add to Favorites
          </button>
        </div>
        <div className="tripcard">
          <TripData
            image={Trip5}
            heading="Cilento, between unspoilt beaches, wild nature and charming hamlets"
            text="Here, we find some masterpieces included in the UNESCO World Heritage List in 1998: the magnificent Cilento and Vallo di Diano National Park, with the archaeological sites of Paestum and Velia and Certosa di Padula. Hidden beaches, small fishing villages, unspoilt nature and rich archaeological evidence make Cilento an irresistibly fascinating destination."
          />
          <button className="favorite-btn" onClick={() => handleAddToFavorites("Cilento")}>
            Add to Favorites
          </button>
        </div>


      </div>
    </div>
  );
}

export default Trip;
