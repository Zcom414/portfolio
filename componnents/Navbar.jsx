import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Fonction de défilement fluide
  const smoothScroll = (event, targetId) => {
    event.preventDefault(); // Empêche l'action par défaut du lien

    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.offsetTop;

    // Compensez la hauteur de la navbar (ajustez selon la hauteur réelle)
  const navbarHeight = document.querySelector(".menu").offsetHeight;


    window.scrollTo({
      top: targetPosition - (navbarHeight + 20),
      behavior: "smooth",
    });

    // Ferme le menu après le clic
    setIsMenuOpen(false);
  };
  

  return (
    <>
    <header>
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
                Recherche
              </a>
            </li>

            <li>
              <a href="#about" onClick={(event) => smoothScroll(event, "about")}>
                A propos 
              </a>
            </li>

            <li>
              <a href="#techs" onClick={(event) => smoothScroll(event, "techs")}>
                Technologies
              </a>
            </li>

            <li>
              <a href="#projets" onClick={(event) => smoothScroll(event, "projets")}>
                Projets
              </a>
            </li>

            <li>
              <a href="#contact" onClick={(event) => smoothScroll(event, "contact")}>
                Contact
              </a>
            </li>
            
          </ul>
        </nav>
    </header>

      
    </>
  );
};
