import { Present} from "../componnents/Presentation";
import { About } from "../componnents/About";
import { Techno } from "../componnents/techno";
import { Cards } from "../componnents/Cards";
import { Contact } from "../componnents/Contact";

export const Home = () => {
  return (
   <>
    <Present/>
    <About/>
    <Techno/>
    <Cards/>
    <Contact/>
   </>
  )
}