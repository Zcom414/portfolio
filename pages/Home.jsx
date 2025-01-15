import { Present} from "../componnents/Presentation";
import { About } from "../componnents/About";
import { Techno } from "../componnents/techno";
import { Cards } from "../componnents/cards";
import { Contact } from "../componnents/Contact";
import { Navbar } from "../componnents/Navbar";

export const Home = () => {
 
  return (
   <>
      <Navbar/>
        <main className="container">
          <Present/>
          <About/>
          <Techno/>
          <Cards/>
          <Contact/>
        </main>

   </>
  )
}