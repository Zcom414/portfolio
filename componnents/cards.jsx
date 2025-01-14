export const Cards = () => {

    return(
        <>
        <article className="container animate-on-scroll">
            <h2 className="title yellow">Projets</h2>

            <section className="cards-container">

                <a className="card" href="https://github.com/Zcom414/LTFO2">
                    <img src="../img/ltfo-mockup.png" alt="Ltfo mockup"/>
                        <div className="title-card">
                            <h3>LTFO</h3>
                                <p>Date : 03/2023 - 06/2023</p>
                        </div>
                </a>

                <a className="card" href="https://github.com/Zcom414/TechnoLab">
                    <img src="../img/techno-mockup.png" alt="Ltfo mockup"/>
                        <div className="title-card">
                            <h3>Techolab - Stage</h3>
                                <p>Date : 05/2023 - 06/2023</p>
                        </div>
                </a>

            </section>

        </article>
    
        </>
    )
}