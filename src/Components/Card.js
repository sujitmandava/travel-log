import pin from "../Images/pin.png";
import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.imageUrl}></img>
            <section className="card-text">
                <section className="line-1">
                    <img src={pin} />
                    <p className="card-location">
                        {props.location.toUpperCase()}
                    </p>
                    <a
                        className="card-location-link"
                        href={props.googleMapsUrl}
                    >
                        View on Google Maps
                    </a>
                </section>
                <h1 className="card-title">{props.title}</h1>
                <p className="travel-dates">
                    {props.startDate} - {props.endDate}
                </p>
                <p className="travel-desc">{props.description}</p>
            </section>
        </div>
    );
}
