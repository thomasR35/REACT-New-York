import "./_Header.scss";

function Header() {
  return (
    <header>
      <img
        src="public/img/seal-ny.png"
        alt="New York City Seal"
        className="seal"
      />
      <h1>New York City</h1>
      <img
        src="public/img/new-york.jpg"
        alt="Panoramic view of New York City"
        className="panorama"
      />
      <nav>
        <ol>
          <li>
            <a href="#symbols">Symbols</a>
          </li>
          <li>
            <a href="#geography">Geography</a>
          </li>
          <li>
            <a href="#demographics">Demographics</a>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
