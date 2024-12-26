import React, { useState } from "react";
import "./TripStyles.css";

function TripData(props) {
    const [isExpanded, setIsExpanded] = useState(false)
    const shortText = props.text.slice(0, 150) + "...";
    const fullText = props.text;

    return (
        <div className="t-card">
            <div className="t-img">
                <img alt="trip-image" src={props.image} />
            </div>
            <h4>{props.heading}</h4>
            <p>{isExpanded ? fullText : shortText}</p>
            <button
                className="show-more-btn"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {isExpanded ? "Show Less" : "Show More"}
            </button>
        </div>
    );
}

export default TripData;
