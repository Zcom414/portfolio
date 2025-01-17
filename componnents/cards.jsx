import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faSass, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { CIcon } from '@coreui/icons-react';
import { cibMongodb , cibMysql } from '@coreui/icons';
export const Cards = () => {

    return(
        <>
        <article className=" animate-on-scroll" id="projets">
            <h2 className="title yellow">Projets</h2>

            <section className="cards-container">

                <a className="card" href="https://github.com/Zcom414/LTFO2">
                        <div className="title-card">
                            <h3>LTFO</h3>
                                <p>Date : 03/2023 - 06/2023</p>
                                
                                    <FontAwesomeIcon icon={faJsSquare} className='card-icon'/>
                                    <CIcon icon={cibMongodb} className='card-icon'/>
                                    <FontAwesomeIcon icon={faReact} className='card-icon'/>
                                    <FontAwesomeIcon icon={faSass} className='card-icon'/>
                                    <FontAwesomeIcon icon={faNodeJs} className='card-icon'/>   
                        </div>
                </a>

                <a className="card" href="https://github.com/Zcom414/TechnoLab">
                        <div className="title-card">
                            <h3>Techolab - Stage</h3>
                                <p>Date : 05/2023 - 06/2023</p>
                            
                                <FontAwesomeIcon icon={faJsSquare} className='card-icon'/>
                                <CIcon icon={cibMysql} className='card-icon'/>
                                <FontAwesomeIcon icon={faReact} className='card-icon'/>
                                <FontAwesomeIcon icon={faSass} className='card-icon'/>
                                <FontAwesomeIcon icon={faNodeJs} className='card-icon'/>   
                        </div>
                </a>

            </section>

        </article>
    
        </>
    )
}