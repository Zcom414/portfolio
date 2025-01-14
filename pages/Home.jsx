export const Home = () => {
  const Present = () => {'./componnents/Presentation'}
  const About = () => {'./componnents/About'}
  const Techno = () => {'./componnents/Techno'}
  const Cards = () => {'./componnents/Cards'}
  const Contact = () => {'./componnents/Contact'}
  const Navbar = () => {'./componnents/Navbar'}

  return (
   <>
      <Navbar/>
        <main>
          <Present/>
          <About/>
          <Techno/>
          <Cards/>
          <Contact/>
        </main>

   </>
  )
}