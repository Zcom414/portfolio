import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Fonction de défilement fluide
  const smoothScroll = (event, targetId) => {
    event.preventDefault(); // Empêche l'action par défaut du lien

    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // Ferme le menu après le clic
    setIsMenuOpen(false);
  };
  

  return (
    <header>
      <section className="navigation-grp">
        <nav>
          <FontAwesomeIcon
            className="burger-icon"
            icon={faBars}
            onClick={toggleMenu}
          />

          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            {/* Utilisation de smoothScroll avec la méthode onClick */}
            
            <li>
              <a href="#pres" onClick={(event) => smoothScroll(event, "pres")}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={(event) => smoothScroll(event, "about")}>
                About
              </a>
            </li>

            <li>
              <a href="#services" onClick={(event) => smoothScroll(event, "services")}>
                Services
              </a>
            </li>

            <li>
              <a href="#contact" onClick={(event) => smoothScroll(event, "contact")}>
                Contact
              </a>
            </li>
            
          </ul>
        </nav>
      </section>
      
    </header>
  );
};

export default App;
