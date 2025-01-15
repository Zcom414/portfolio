import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export const Contact = () => {

    return (
        <>
<<<<<<< HEAD
            <article className="contacts animate-on-scroll" id="contact">
=======
            <article className="contacts container animate-on-scroll" id="contact">
>>>>>>> 02a99b613430dd43b53ff63b2845a36217e19811

                <h2 className="title yellow">Contact</h2>

        <ul>
            <li>
                <div className='contact'>
                    <a href="mailto:jules.clesse.cl@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="c"/>
                        <p>jules.clesse.cl@gmail.com</p>
                    </a>
                </div>
            </li>
        
        <li> 
            <div className='contact'>
                    <a href="tel:+33624320742">
                        <FontAwesomeIcon icon={faPhone} className="c"/>
                        <p>06 24 32 07 42</p>
                    </a>
            </div>
        </li>

        <li>
            <div className='contact'>
                    <a href="https://www.linkedin.com/in/jules-clesse-92711b2b8/">
                        <FontAwesomeIcon icon={faLinkedinIn} className="c"/>
                        <p>LinkedIn</p>
                    </a>
            </div>
        </li>
                  
        </ul>
            </article>
        </>
    )
}