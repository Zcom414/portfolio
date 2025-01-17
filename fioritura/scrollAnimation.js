import { useEffect } from "react";

export const useScrollAnimation = (selector = ".animate-on-scroll") => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Vérifie si l'élément est totalement dans la fenêtre
        const isFullyVisible =
          rect.top > 0 && rect.bottom <= window.innerHeight - 1 ;

        if (isFullyVisible) {
          el.classList.add("active"); // Ajouter la classe pour afficher
        } else {
          el.classList.remove("active"); // Supprimer la classe pour masquer
        }
      });
    };

    handleScroll(); // Exécuter au premier chargement
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selector]);
};
