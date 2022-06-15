import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(data) {
  const props = data.item;
  // title: "Mount Fuji",
  // location: "Japan",
  // googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
  // startDate: "12 Jan, 2021",
  // endDate: "24 Jan, 2021",
  // description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  // imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=75&fm=jpg&w=1080&fit=max"
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={props.imageUrl}
          alt={`Image of ${props.title} located in ${props.location}`}
        />
      </div>
      <h2 className="card__title">{props.title}</h2>
      <h3 className="card__dates">{`${props.startDate} - ${props.endDate}`}</h3>
      <p className="card__desc">{props.description}</p>
      <div className="card__location">
        <p className="card__location-country">
          {/* <i className="fas fa-map-marker-alt card__location-country-icon"></i> */}
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="card__location-country-icon"
          />
          <p>{props.location}</p>
        </p>
        <a href={props.googleMapsUrl} className="card__location-maps">
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
