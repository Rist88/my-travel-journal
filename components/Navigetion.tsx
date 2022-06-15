import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav__title">
        <FontAwesomeIcon icon={faGlobeAfrica} className="nav__icon" />
        <h1>my travel journal.</h1>
      </div>
    </nav>
  );
}
