import "./_Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faPinterestSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="footer clear">
      <aside className="social-links">
        <h3>Follow us on social media</h3>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faPinterestSquare} />
        </a>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </aside>
      <p>
        <img src="img/logo-3wa.png" alt="3WA logo" />
      </p>
      <p className="copyright">
        &copy; This educational material is the property of 3W Academy.
        <a
          href="https://3wa.fr/propriete-materiel-pedagogique/"
          target="_blank"
          title="Opens in a new window"
        >
          Learn more
        </a>
      </p>
      <p>Exercise by Catherine Denos.</p>
    </footer>
  );
}

export default Footer;
