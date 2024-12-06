import "./_Footer.scss";

function Footer() {
  return (
    <footer className="footer clear">
      <aside className="social-links">
        <h3>Follow us on social media</h3>
        <a href="" className="fa-brands fa-facebook-square" />
        <a href="" className="fa-brands fa-pinterest-square" />
        <a href="" className="fa-brands fa-instagram-square" />
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
