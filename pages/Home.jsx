import { Present} from "../componnents/Presentation";
import { About } from "../componnents/About";
import { Techno } from "../componnents/techno";
<<<<<<< HEAD
import { Cards } from "../componnents/cards";
import { Contact } from "../componnents/Contact";
import { Navbar } from "../componnents/Navbar";
import { useScrollAnimation } from '../hooks/scrollAnimation';

export const Home = () => {
  useScrollAnimation();
  return (
   <>
      <Navbar/>
        <main className="container">
=======
import { Cards } from "../componnents/Cards";
import { Contact } from "../componnents/Contact";
import { Navbar } from "../componnents/Navbar";

export const Home = () => {
  return (
   <>
      <Navbar/>
        <main>
>>>>>>> 02a99b613430dd43b53ff63b2845a36217e19811
          <Present/>
          <About/>
          <Techno/>
          <Cards/>
          <Contact/>
        </main>

   </>
  )
}