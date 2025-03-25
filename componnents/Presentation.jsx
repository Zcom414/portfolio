

export const Present = () => {

    return(
        <>
            <article className="research animate-on-scroll">
                <h1 className='yellow'>CLESSE Jules</h1>
                <p>Mon apprentissage ? <span className='violet'>Développeur Web</span></p>
            
            <section id="pres">

                <div className="code">
                    <p> <span className="blue">function</span> <span className="yellow">InSearchAlternance </span> <span className="violet">{'('}</span> <span className="cyan"> Bachelor, 3WA</span><span className="violet">{')'}</span></p>
                    <p><span className="violet">if</span> <span className="blue">{'('}</span> <span className="cyan">business.interrested {'>='} 100% <span className="blue">{')'}</span></span> <span className="violet">{'{'}</span></p>
                    <p><span className="violet">return</span> <span className="yellow"> myNumber </span> <span className="orange"> <span className="blue">{'('}</span>{'"'}06.24.32.07.42{'"'}</span><span className="blue">{')'}</span></p>
                    <p><span className="violet">{'}'} else if </span><span className="blue">{'('}</span> <span className="yellow">wantEmail </span> <span className="blue">{')'}</span> <span className="violet">{'{'}</span></p>
                    <p><span className="violet">return</span> <span className="yellow"> myEmail </span> <span className="orange"> <span className="blue">{'('}</span>{'"'}jules.clese.cl@gmail.com{'"'}</span><span className="blue">{')'}</span></p>
                    <p><span className="violet">{'}'} else </span><span className="violet">{'{'}</span></p>
                        
                        <section className="btn-present">
                            <p><span className="blue">const</span> <span className="yellow">ContactButtons</span> = <span className="cyan">document</span>.<span className="yellow">querrySelectorAll</span><span className="blue">{"("}</span><span className="cyan">.my_btns</span><span className="blue">{")"}</span>.<span className="yellow">forEach</span><span className="blue">{"("}</span><span className="cyan">button<span className="blue">={">"}</span> button.style.display = <span className="orange">{"'"}block{"'"}</span></span><span className="blue">{")"}</span></p>
                            
                            <div className="btns_case">
                                <a className="btn" onClick={() => {const target = document.getElementById("contact"); if (target) {target.scrollIntoView({ behavior: "smooth", block: "start" });} }}> Me contacter</a>
                                <a className="btn" href="https://publuu.com/flip-book/831841/1828539" target="_blank">Mon CV</a>
                            </div>
                        </section>
                </div>
            </section>

            </article>
        </>
    )
}