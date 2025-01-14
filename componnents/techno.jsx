import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faSass, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
export const Techno = () => {

    return(
    <>
    <article className='techs container animate-on-scroll' id='techs'>
        <h2 className='title yellow'>Technologies</h2>
        
        <section className='techs-container'>
            <div className='techno'>
                <FontAwesomeIcon icon={faHtml5} className='icon'/>
                <p>HTML</p>
            </div>

            <div className='techno'>
                <FontAwesomeIcon icon={faCss3Alt} className='icon' />
                <p>CSS</p>
            </div>

        <div className='techno'>
                <FontAwesomeIcon icon={faJsSquare} className='icon'/>
                <p>Javascript</p>
        </div>

            <div className='techno'>
                <FontAwesomeIcon icon={faReact} className='icon'/>
                <p>React</p>
            </div>
            
            <div className='techno'>
                <FontAwesomeIcon icon={faSass} className='icon'/>
                <p>Sass</p>
            </div>

            <div className='techno'>
                <FontAwesomeIcon icon={faNodeJs} className='icon'/>
                <p>Node</p>
            </div>

            <div className='techno'>
                <FontAwesomeIcon icon={faDatabase} className='icon'/>
                <p>MongoDb & MySql</p>
            </div>

        </section>

    </article>
    </>
    )
}